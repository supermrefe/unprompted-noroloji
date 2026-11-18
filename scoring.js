/* Unprompted Tıp — puanlama çekirdeği. Tarayıcıda window.UPScore, Node'da module.exports.
   Uygulama (app.js) ve testler (tests/) aynı kodu kullanır; eşleştirme kuralı burada değişir. */
(function (root) {
'use strict';
const norm = s => s.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');
function tokenize(s) {
  const out = [], re = /[\p{L}\p{N}]+/gu; let m;
  while ((m = re.exec(s))) out.push({ t: norm(m[0]), s: m.index, e: m.index + m[0].length });
  return out;
}
function lev(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
// Bir harfle anlamı değişen tıbbi çiftler yaklaşık eşleşmeden muaf: trombosit/trombolit, gastrektomi/gastrostomi, antikoagülan/antikor.
const NO_FUZZY = ['trombo', 'gastr', 'antiko'];
// Yumuşamış hali gündelik ya da başka bir terimle çakışan anahtarlar: asit/asidoz, bant/bandaj, ölçüt/ölçüde, tert/terde, şelat, kent/kendi.
const NO_SOFT = new Set(['kent', 'asit', 'bant', 'olcut', 'tert', 'selat']);
const VOWEL = /[aeiou]/;
const dy = s => s.replace(/([aeiou])y(?=[aeiou])/g, '$1');
function tokMatch(t, k) {
  if (k.length <= 3) return t === k;
  if (k.length === 4 && t.startsWith(k)) return true;
  if (k.length > 4 && t.includes(k)) return true;
  // Türkçe ünsüz yumuşaması: fıtık → fıtığı, bilek → bileği, atak → atağı, takip → takibi.
  // Yalnız sözcük başında ve ardından ünlü gelirse (kent ≠ kendi, silik ≠ olasılığı); NO_SOFT gündelik çakışmalar.
  const soft = !NO_SOFT.has(k) && { k: 'g', p: 'b', t: 'd' }[k[k.length - 1]];
  if (soft) { const st = k.slice(0, -1) + soft; if (t.startsWith(st) && VOWEL.test(t[st.length] || '')) return true; }
  if (k.length === 4) return false;
  // Yaklaşık eşleşme yalnızca ilk 4 harf aynıysa: hipo/hiper, abdüksiyon/addüksiyon, unilateral/bilateral, simetrik/asimetrik birbirini saymaz.
  // Ünlüler arasındaki y yok sayılarak karşılaştırılır: diabet/diyabet, biopsi/biyopsi, tiazid/tiyazid aynı kalır.
  if (k.length >= 7 && t.length >= k.length - 1 && dy(t).slice(0, 4) === dy(k).slice(0, 4) && !NO_FUZZY.some(p => k.startsWith(p))) {
    const tol = k.length >= 10 ? 2 : 1;
    for (let L = k.length - 1; L <= k.length + 1; L++) if (lev(t.slice(0, L), k) <= tol) return true;
  }
  return false;
}
// Dikte kısaltmaları ve uzun terimleri bölebiliyor: "ABCD2" → "abc'deki 2", "hiperlipidemi" → "hiperli pide mi".
// Bir anahtar parçası, 2–4 ardışık sözcüğün birleşimiyle de eşleşir; kaç sözcük tükettiğini döndürür.
// Yanlış birleşmeleri önlemek için iki yol var:
// - Kısaltma parçası: ilk sözcük en çok 3 harf ve sık bir kelime değil ("abc deki 2", "IV IG", "A B C D").
// - Bölünmüş uzun terim: anahtar en az 6 harf ve son sözcüğün en az yarısını tüketiyor ("hiperli pide mi", "plazma ferez").
// Böylece "iki lider" ≠ ikili, "atak sırasında/sinir" ≠ ataksi, "bile kadar" ≠ bilek, "dış kas" ≠ disk, "tüm orta" ≠ tümör.
const NO_JOIN = new Set(['bir', 'iki', 'uc', 'dort', 'bes', 've', 'ile', 'bu', 'su', 'o', 'de', 'da', 'ki', 'mi', 'mu', 'ne', 'ya', 'ama', 'hem', 'en', 'cok', 'az', 'var', 'yok', 'her', 'gibi', 'icin',
  'dis', 'bas', 'kan', 'tum', 'kas', 'sol', 'sag', 'ust', 'alt', 'yan', 'on', 'son', 'ilk', 'gun', 'yas', 'ana', 'ara', 'sik', 'el', 'kol', 'yuz', 'goz', 'dil', 'ses', 'is', 'ay', 'yil', 'sey', 'ben', 'sen', 'biz', 'siz', 'atak']);
function joinMatch(tt, i, k) {
  const first = tt[i].t, next = (tt[i + 1] || {}).t || '';
  // Birleşim anahtarın tamamına birebir eşitse ("is th" = isth, "on tt" = ontt, "el n" = eln) sık kelime engeli uygulanmaz.
  if (NO_JOIN.has(first) && !(k.length <= 5 && first + next === k)) return 0;
  // Kısaltma: ilk parça en çok 3 harf, ya da rakamlı anahtar ve sonraki parça rakam ("sglt 2", "kcnq 1", "mgso 4").
  const abbr = first.length <= 3 || (/\d/.test(k) && /^\d+$/.test(next));
  if (!abbr && k.length < 6) return 0;
  let joined = first;
  for (let n = 2; n <= 4 && i + n <= tt.length; n++) {
    if (!k.startsWith(joined)) return 0;
    const before = joined.length, last = tt[i + n - 1].t;
    joined += last;
    if (k.length <= 3 ? joined !== k : !joined.startsWith(k) || joined.length - k.length > 4) continue;
    if (abbr || (k.length - before) * 2 >= last.length) return n;
    return 0;
  }
  return 0;
}
// "=" ile başlayan anahtar (terms.js) sıkı eşleşir: aynı kelime ya da tek harflik ek ("=şant": şantı ✓, santral/santim ✗).
const strictMatch = (t, k) => t.startsWith(k) && t.length - k.length <= 1;
// skip: sayılmayacak sözcük konumları (konunun kendi adı); bunlara değen eşleşme yok sayılır.
function findKey(tt, kt, skip) {
  const hits = [];
  outer: for (let i = 0; i < tt.length; i++) {
    let p = i;
    for (const k of kt) {
      if (p >= tt.length) continue outer;
      if (kt.strict ? strictMatch(tt[p].t, k) : tokMatch(tt[p].t, k)) { p++; continue; }
      const n = kt.strict ? 0 : joinMatch(tt, p, k);
      if (!n) continue outer;
      p += n;
    }
    if (skip) for (let x = i; x < p; x++) if (skip.has(x)) continue outer;
    hits.push([i, p]);
  }
  return hits;
}
const keyToks = k => { const strict = k.trim().startsWith('='); const a = tokenize(k).map(x => x.t); a.strict = strict; return a; };
const FILLERS = { yani: 'yani', iste: 'işte', sey: 'şey', hani: 'hani', falan: 'falan', filan: 'filan', ee: 'ee', eee: 'eee', eeee: 'eee', hmm: 'hmm', mmm: 'mmm' };

// Ham konu kaydını puanlamaya hazırlar: "!" temel kavram (2 kat), anahtarlar "|" ile ayrılır.
function compile(t) {
  return Object.assign({}, t, {
    _c: t.c.map(([label, keys]) => {
      const core = label.startsWith('!');
      return { label: core ? label.slice(1) : label, core, w: core ? 2 : 1, keys: keys.split('|').map(keyToks).filter(a => a.length) };
    }),
    // Konunun adı (parantez içi kısaltma hariç) ve "alt" kısa adları söylenince kavram sayılmasın:
    // "Geçici iskemik atak" tek başına "geçici" kavramını vermez.
    _names: [t.tr, t.en].filter(Boolean).map(n => tokenize(n.replace(/\(.*?\)/g, ' ')).map(x => x.t)).filter(a => a.length >= 2)
      .concat((t.alt || []).map(n => tokenize(n).map(x => x.t)).filter(a => a.length))
  });
}

function evaluate(term, rawText) {
  const text = rawText.normalize('NFC');
  const toks = tokenize(text);
  const marks = new Array(toks.length).fill(-1);
  const skip = new Set();
  // Ad eşleşmesi sıkı (aynı kelime ya da tek harflik ek): "huntington" adı "huntingtin" anahtarını yutmaz.
  for (const nt of term._names || []) { const s = nt.slice(); s.strict = true; for (const [a, b] of findKey(toks, s)) for (let x = a; x < b; x++) skip.add(x); }
  let got = 0, total = 0;
  const concepts = term._c.map((c, ci) => {
    total += c.w;
    let hit = false, ev = '';
    for (const k of c.keys) {
      const h = findKey(toks, k, skip);
      if (!h.length) continue;
      hit = true;
      for (const [a, b] of h) for (let x = a; x < b; x++) if (marks[x] < 0) marks[x] = ci;
      if (!ev) {
        const a = Math.max(0, h[0][0] - 3), b = Math.min(toks.length, h[0][1] + 3);
        ev = (a > 0 ? '…' : '') + text.slice(toks[a].s, toks[b - 1].e) + (b < toks.length ? '…' : '');
      }
    }
    if (hit) got += c.w;
    return { label: c.label, core: c.core, w: c.w, hit, ev };
  });
  const fillers = {}; let fillerN = 0;
  toks.forEach((tk, i) => { const f = FILLERS[tk.t]; if (f && marks[i] < 0) { marks[i] = -2; fillers[f] = (fillers[f] || 0) + 1; fillerN++; } });
  return { toks, marks, concepts, score: total ? got / total : 0, words: toks.length, fillers, fillerN, text };
}

const api = { norm, tokenize, lev, tokMatch, joinMatch, findKey, keyToks, strictMatch, compile, evaluate, NO_JOIN, NO_FUZZY, FILLERS };
if (typeof module === 'object' && module.exports) module.exports = api;
else root.UPScore = api;
})(typeof window !== 'undefined' ? window : globalThis);
