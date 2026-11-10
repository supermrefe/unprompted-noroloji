#!/usr/bin/env node
/* Unprompted Tıp — içerik ve puanlama testleri (bağımlılıksız).
   Kullanım: node tests/run.js            → tüm branşlar
             node tests/run.js kardiyoloji → yalnız o branşın konuları (çapraz kontrol yine tüm havuza karşı)
   Her konu için:
     1. kayıt doğrulama (alanlar, 2 kitap + 2 makale, kavram sayısı, temel kavram)
     2. iyi anlatım ≥ eşik (%60), 110–260 kelime (1,5 dakikaya sığar)
     3. zayıf anlatım < eşik, ≥ 25 kelime
     4. dikte hatalı sürüm (otomatik + varsa elle yazılmış) iyi anlatımla aynı kavramları yakalar
     5. çapraz kontrol: başka hiçbir konunun iyi anlatımı bu konuda eşiği geçmez
     6. ≤3 harfli anahtar taraması: yaygın Türkçe sözcükle çakışma = hata; başka konuların anlatımında eşleşme = uyarı */
'use strict';
const { S, loadCatalog, loadFixtures } = require('./lib');
const { dictate } = require('./dictation');
const PASS = 0.60;
const args = process.argv.slice(2);
const quiet = args.includes('-q');
const only = args.filter(a => !a.startsWith('-'));

const cat = loadCatalog();
const fx = loadFixtures(cat.present);
const errors = [], warns = [];
const err = (id, m) => errors.push(`✗ ${id}: ${m}`);
const warn = (id, m) => warns.push(`! ${id}: ${m}`);
const targets = cat.terms.filter(t => !only.length || only.includes(t.br));
for (const [b, m] of Object.entries(cat.broken)) (!only.length || only.includes(b) ? err : warn)(b, `terms/${b}.js yüklenemedi: ${m}`);
for (const k of Object.keys(fx).filter(k => k.startsWith('__broken:'))) { const b = k.slice(9); (!only.length || only.includes(b) ? err : warn)(b, `tests/fixtures/${b}.js yüklenemedi: ${fx[k]}`); delete fx[k]; }
if (only.length) for (const b of only) if (!cat.present.includes(b) && !cat.broken[b]) err(b, 'terms/' + b + '.js bulunamadı');

/* ---------- 1. kayıt doğrulama ---------- */
const ids = new Map();
for (const t of cat.terms) {
  if (ids.has(t.id)) err(t.id, `id iki kez var (${ids.get(t.id)} ve ${t.br})`);
  ids.set(t.id, t.br);
}
for (const bid of cat.present) {
  if (only.length && !only.includes(bid)) continue;
  const d = cat.data[bid], subs = d.subs || {};
  const lv = { 1: 0, 2: 0, 3: 0 };
  for (const t of d.terms) {
    const id = t.id || '(id yok)';
    for (const f of ['id', 'tr', 'en']) if (typeof t[f] !== 'string' || !t[f].trim()) err(id, `"${f}" alanı eksik`);
    if (!/^[a-z0-9-]+$/.test(t.id || '')) err(id, 'id yalnız küçük harf, rakam ve tire içermeli');
    if (![1, 2, 3].includes(t.lvl)) err(id, 'lvl 1, 2 ya da 3 olmalı'); else lv[t.lvl]++;
    if (t.cat && !subs[t.cat]) err(id, `cat "${t.cat}" subs içinde tanımlı değil`);
    const src = t.src;
    if (!src || !Array.isArray(src.k) || !Array.isArray(src.m)) err(id, 'src { k: [2 kitap], m: [2 makale] } olmalı');
    else {
      if (src.k.length !== 2 || src.k.some(x => typeof x !== 'string' || x.trim().length < 8)) err(id, 'src.k tam 2 kitap içermeli (ad + baskı)');
      if (src.m.length !== 2 || src.m.some(x => !Array.isArray(x) || typeof x[0] !== 'string' || x[0].trim().length < 8 || (x[1] != null && !/^https:\/\//.test(x[1])))) err(id, 'src.m tam 2 makale içermeli: [başlık, https bağlantı]');
    }
    if (!Array.isArray(t.c) || t.c.length < 5 || t.c.length > 9) err(id, `kavram sayısı 5–9 olmalı (şu an ${t.c ? t.c.length : 0})`);
    else {
      const cores = t.c.filter(c => c[0].startsWith('!')).length;
      if (cores < 2 || cores > 4) err(id, `temel ("!") kavram sayısı 2–4 olmalı (şu an ${cores})`);
      t.c.forEach(([lab, keys], i) => {
        if (!lab || !keys) err(id, `kavram ${i + 1} boş`);
        else if (keys.split('|').some(k => !k.trim())) err(id, `kavram ${i + 1} boş anahtar içeriyor ("||" ya da sonda "|")`);
      });
    }
  }
  for (const l of [1, 2, 3]) if (lv[l] < 5) err(bid, `${cat.LEVELS[l].name} seviyede en az 5 konu olmalı (şu an ${lv[l]})`);
}

/* ---------- 2–4. anlatım testleri ---------- */
const hitSet = r => r.concepts.map(c => (c.hit ? '1' : '0')).join('');
const goods = {}; // id → [metin]
for (const t of cat.terms) {
  const f = fx[t.id];
  if (f && f.good) goods[t.id] = [].concat(f.good);
}
const stats = { terms: 0, good: 0, weak: 0, dict: 0, cross: 0 };
const scoreRows = [];
for (const t of targets) {
  stats.terms++;
  const f = fx[t.id];
  if (!f) { err(t.id, 'tests/fixtures içinde anlatım yok'); continue; }
  const gs = [].concat(f.good || []);
  if (!gs.length) err(t.id, 'iyi anlatım (good) yok');
  gs.forEach((g, gi) => {
    const r = S.evaluate(t, g);
    scoreRows.push([t.id, Math.round(r.score * 100)]);
    if (r.words < 110 || r.words > 260) err(t.id, `iyi anlatım ${gi + 1}: ${r.words} kelime (110–260 olmalı)`);
    if (r.score < PASS) err(t.id, `iyi anlatım ${gi + 1}: %${Math.round(r.score * 100)} < %60 · atlanan: ${r.concepts.filter(c => !c.hit).map(c => c.label).join(' / ')}`);
    else { stats.good++; if (r.score < 0.75) warn(t.id, `iyi anlatım ${gi + 1} sınıra yakın: %${Math.round(r.score * 100)}`); }
    const dicts = [dictate(g)].concat(gi === 0 && f.dict ? [].concat(f.dict) : []);
    dicts.forEach((d, di) => {
      const rd = S.evaluate(t, d);
      if (hitSet(rd) !== hitSet(r)) {
        const lost = rd.concepts.filter((c, i) => r.concepts[i].hit && !c.hit).map(c => c.label);
        const extra = rd.concepts.filter((c, i) => !r.concepts[i].hit && c.hit).map(c => c.label);
        err(t.id, `dikte sürümü ${di ? '(elle)' : '(otomatik)'} farklı kavram yakaladı · kaybolan: ${lost.join(' / ') || '-'} · fazladan: ${extra.join(' / ') || '-'}`);
      } else stats.dict++;
    });
  });
  if (!f.weak) err(t.id, 'zayıf anlatım (weak) yok');
  else {
    const r = S.evaluate(t, f.weak);
    if (r.words < 25) err(t.id, `zayıf anlatım çok kısa (${r.words} kelime, ≥25 olmalı)`);
    if (r.score >= PASS) err(t.id, `zayıf anlatım eşiği geçti: %${Math.round(r.score * 100)}`);
    else stats.weak++;
  }
}

/* ---------- 5. çapraz yanlış eşleşme ---------- */
const crossTop = [];
for (const t of targets) {
  let worst = null;
  for (const [oid, texts] of Object.entries(goods)) {
    if (oid === t.id) continue;
    for (const g of texts) {
      const s = S.evaluate(t, g).score;
      if (!worst || s > worst[1]) worst = [oid, s];
      if (s >= PASS) err(t.id, `çapraz eşleşme: "${oid}" konusunun iyi anlatımı burada %${Math.round(s * 100)} aldı`);
    }
  }
  if (worst) { crossTop.push([t.id, worst[0], worst[1]]); if (worst[1] < PASS) stats.cross++; }
}

/* ---------- 6. kısa anahtar taraması ---------- */
// Konuşmada sık geçen ≤3 harfli Türkçe sözcükler: kısa anahtar bunlardan biri olamaz.
const COMMON = new Set(('ve ile bir bu su o de da ki mi mu ne ya en cok az var yok her ama hem iki uc on alt ust ic dis ön on son ilk sag sol yan kez gun yil ay saat dk sn yas kat cm mm kg mg ml gr ise diye ona onu bun ben sen biz siz gibi icin ne kim nas olur ol olan eder ede yap et al ver gel git bak gor tek cift daha cok cog az pek hep hic ya da yine bile sade kadar dek sonra once bas el kol bel ust alt kan ter yag sut tuz su sek ac ak kar kir kus isi ates baz asit ana ara yer is ad ek ki').split(' ').map(S.norm));
const allGoodToks = {};
for (const [oid, texts] of Object.entries(goods)) allGoodToks[oid] = new Set(texts.flatMap(g => S.tokenize(g).map(x => x.t)));
const shortKeys = new Map();
for (const t of targets) for (const c of t._c) for (const k of c.keys) for (const p of k) if (p.length <= 3) {
  if (!shortKeys.has(p)) shortKeys.set(p, []);
  shortKeys.get(p).push(t.id);
}
const SAFE_COMMON = new Set(['kan', 'yag', 'isi', 'ates', 'asit', 'sut', 'tuz', 'ter', 'bel', 'kol', 'el', 'bas', 'gun', 'yas']); // tıbbi anlamda da kullanılan, çok kelimeli anahtar içinde olmalı
for (const [k, owners] of shortKeys) {
  const own = new Set(owners);
  if (COMMON.has(k)) {
    // tek başına anahtar olarak yasak; çok kelimeli anahtarın parçası olarak serbest
    for (const t of targets.filter(x => own.has(x.id))) for (const c of t._c) for (const kk of c.keys)
      if (kk.length === 1 && kk[0] === k && !SAFE_COMMON.has(k)) err(t.id, `kısa anahtar "${k}" yaygın bir sözcük; tek başına kullanılamaz ("${c.label}")`);
      else if (kk.length === 1 && kk[0] === k) warn(t.id, `kısa anahtar "${k}" gündelik sözcük; çok kelimeli anahtar tercih et ("${c.label}")`);
  }
  const elsewhere = Object.entries(allGoodToks).filter(([oid, set]) => !own.has(oid) && set.has(k)).map(([oid]) => oid);
  if (elsewhere.length >= 3) warn([...own].join(','), `kısa anahtar "${k}" ${elsewhere.length} başka konunun anlatımında geçiyor (ör. ${elsewhere.slice(0, 3).join(', ')})`);
}

/* ---------- rapor ---------- */
const br = only.length ? only.join(', ') : 'tüm branşlar';
if (!quiet) {
  for (const w of warns) console.log(w);
}
for (const e of errors) console.log(e);
const n = stats.terms;
console.log(`\n[${br}] ${n} konu · iyi anlatım ≥%60: ${stats.good} · zayıf <%60: ${stats.weak}/${n} · dikte aynı kavramlar: ${stats.dict} · çapraz temiz: ${stats.cross}/${n} · kısa anahtar: ${shortKeys.size}`);
if (scoreRows.length) {
  const avg = scoreRows.reduce((s, r) => s + r[1], 0) / scoreRows.length;
  const maxCross = crossTop.reduce((m, r) => (r[2] > m[2] ? r : m), ['', '', 0]);
  console.log(`iyi anlatım ortalaması %${avg.toFixed(1)} · en yüksek çapraz skor %${Math.round(maxCross[2] * 100)} (${maxCross[1]} → ${maxCross[0]})`);
}
console.log(errors.length ? `HATA: ${errors.length} · uyarı: ${warns.length}` : `TAMAM · uyarı: ${warns.length}`);
process.exit(errors.length ? 1 : 0);
