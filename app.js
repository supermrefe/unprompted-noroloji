/* Unprompted Nöroloji — uygulama mantığı (bağımlılık yok) */
(() => {
'use strict';

/* ================================================================
   Yardımcılar
   ================================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rand = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
  get(k, d) { try { const v = localStorage.getItem('upn:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('upn:' + k, JSON.stringify(v)); } catch { /* depolama kapalı */ } },
  del(k) { try { localStorage.removeItem('upn:' + k); } catch { /* yok say */ } },
  keys() { try { return Object.keys(localStorage).filter(k => k.startsWith('upn:')).map(k => k.slice(4)); } catch { return []; } }
};

const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const addDays = (key, n) => { const [y, m, d] = key.split('-').map(Number); return dayKey(new Date(y, m - 1, d + n)); };
const dayDiff = (a, b) => { const [y1, m1, d1] = a.split('-').map(Number), [y2, m2, d2] = b.split('-').map(Number); return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000); };
const fmtDay = key => { const [y, m, d] = key.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' }); };
const fmtClock = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
const fmtShort = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

/* ================================================================
   Metin eşleştirme
   ================================================================ */
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
function tokMatch(t, k) {
  if (k.length <= 3) return t === k;
  if (k.length === 4) return t.startsWith(k);
  if (t.includes(k)) return true;
  if (k.length >= 7 && t.length >= k.length - 1) {
    const tol = k.length >= 10 ? 2 : 1;
    for (let L = k.length - 1; L <= k.length + 1; L++) if (lev(t.slice(0, L), k) <= tol) return true;
  }
  return false;
}
function findKey(tt, kt) {
  const hits = [];
  outer: for (let i = 0; i + kt.length <= tt.length; i++) {
    for (let j = 0; j < kt.length; j++) if (!tokMatch(tt[i + j].t, kt[j])) continue outer;
    hits.push([i, i + kt.length]);
  }
  return hits;
}
const FILLERS = { yani: 'yani', iste: 'işte', sey: 'şey', hani: 'hani', falan: 'falan', filan: 'filan', ee: 'ee', eee: 'eee', eeee: 'eee', hmm: 'hmm', mmm: 'mmm' };

const LEVELS = window.LEVELS, CATS = window.CATS;
const TERMS = window.TERMS.map(t => ({
  ...t,
  _c: t.c.map(([label, keys]) => {
    const core = label.startsWith('!');
    return { label: core ? label.slice(1) : label, core, w: core ? 2 : 1, keys: keys.split('|').map(k => tokenize(k).map(x => x.t)).filter(a => a.length) };
  })
}));
const BY_ID = Object.fromEntries(TERMS.map(t => [t.id, t]));

function evaluate(term, rawText) {
  const text = rawText.normalize('NFC');
  const toks = tokenize(text);
  const marks = new Array(toks.length).fill(-1);
  let got = 0, total = 0;
  const concepts = term._c.map((c, ci) => {
    total += c.w;
    let hit = false, ev = '';
    for (const k of c.keys) {
      const h = findKey(toks, k);
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
function highlight(r) {
  const { text, toks, marks, concepts } = r;
  let out = '', pos = 0, i = 0;
  while (i < toks.length) {
    const m = marks[i];
    if (m === -1) { i++; continue; }
    let j = i;
    while (j + 1 < toks.length && marks[j + 1] === m) j++;
    out += esc(text.slice(pos, toks[i].s));
    const attr = m === -2 ? ' class="f" title="Dolgu kelime"' : ` title="${esc(concepts[m].label)}"`;
    out += `<mark${attr}>${esc(text.slice(toks[i].s, toks[j].e))}</mark>`;
    pos = toks[j].e; i = j + 1;
  }
  return out + esc(text.slice(pos));
}

/* ================================================================
   Durum
   ================================================================ */
const DEFAULTS = { speakSec: 60, pass: 60, lang: 'tr-TR', mode: 'audio' };
const INTERVALS = [1, 3, 7, 14, 30];
const LEVEL_BONUS = { 1: 25, 2: 50, 3: 80 };
const RANKS = [[0, 'Stajyer'], [400, 'İntörn'], [1200, 'Asistan'], [3000, 'Uzman'], [6000, 'Doçent'], [10000, 'Profesör']];
const LV_CANVAS = { 1: '#5CC487', 2: '#E2A94B', 3: '#E07AB5' };

let settings = Object.assign({}, DEFAULTS, store.get('settings', {}));
let prog = store.get('prog', {});
let hist = store.get('hist', []);
let xp = store.get('xp', 0);
let streak = store.get('streak', { last: null, count: 0 });
let daily = null;
let S = store.get('session', null);
if (S && !BY_ID[S.id]) S = null;
let view = 'home';
let last = null;          // son sonuç
let pending = null;       // yazıya dökülemeyen kayıt { ms, media }

const speakMs = () => settings.speakSec * 1000;
const passT = () => settings.pass / 100;
const saveS = () => (S ? store.set('session', S) : store.del('session'));
function saveAll() { store.set('prog', prog); store.set('hist', hist); store.set('xp', xp); store.set('streak', streak); store.set('daily', daily); }

function statusOf(id) {
  const p = prog[id];
  if (!p) return 's-new';
  if (p.box >= 3) return 's-master';
  if (p.best >= passT()) return 's-pass';
  return 's-try';
}
function rankOf(x) { let r = RANKS[0][1]; for (const [min, n] of RANKS) if (x >= min) r = n; return r; }
function streakNow() { const today = dayKey(); return streak.last && dayDiff(streak.last, today) <= 1 ? streak.count : 0; }

/* ---------- günün 3'lüsü ---------- */
function pickForDaily(lvl, exclude) {
  const today = dayKey();
  const pool = TERMS.filter(t => t.lvl === lvl && !exclude.includes(t.id));
  const due = pool.filter(t => prog[t.id] && prog[t.id].due <= today).sort((a, b) => prog[a.id].due.localeCompare(prog[b.id].due));
  if (due.length) return due[0].id;
  const fresh = pool.filter(t => !prog[t.id]);
  if (fresh.length) return rand(fresh).id;
  return pool.slice().sort((a, b) => (prog[a.id].best - prog[b.id].best))[0].id;
}
function ensureDaily() {
  const today = dayKey();
  let d = store.get('daily', null);
  if (!d || d.date !== today || !Array.isArray(d.ids) || d.ids.length !== 3 || d.ids.some(id => !BY_ID[id])) {
    const ids = [];
    for (const l of [1, 2, 3]) ids.push(pickForDaily(l, ids));
    d = { date: today, ids, revealed: {}, done: {} };
    store.set('daily', d);
  }
  daily = d;
}

/* ================================================================
   Görünüm yönetimi
   ================================================================ */
function show(v) {
  view = v;
  $$('.view').forEach(el => { el.hidden = el.id !== 'v-' + v; });
  window.scrollTo({ top: 0 });
  if (v === 'explain') startExplainLoop(); else stopExplainLoop();
  if (v !== 'research') document.title = 'Unprompted Nöroloji';
}
function toast(msg, ms = 2600) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, ms);
}
function lvlChip(el, t) { el.className = 'chip lv-' + t.lvl; el.textContent = `${LEVELS[t.lvl].name} · ${LEVELS[t.lvl].min} dk`; }

/* ---------- başlık ---------- */
function renderHeader() {
  $('#m-streak').textContent = `${streakNow()} gün`;
  const doneN = TERMS.filter(t => (prog[t.id]?.best ?? 0) >= passT()).length;
  $('#m-done').textContent = `${doneN}/${TERMS.length}`;
  $('#m-xp').textContent = `${xp.toLocaleString('tr-TR')} XP`;
  $('#m-rank').textContent = rankOf(xp);
}

/* ---------- ana sayfa ---------- */
function renderHome() {
  ensureDaily();
  renderHeader();
  renderResume();
  renderDaily();
  renderDue();
  renderMap();
  renderHist();
  $('#pitch-count').textContent = `${TERMS.length} konu`;
}
function renderResume() {
  const el = $('#resume');
  if (!S) { el.hidden = true; return; }
  const t = BY_ID[S.id];
  el.hidden = false;
  $('#resume-text').textContent = S.phase === 'research'
    ? `${t.tr} · araştırma · ${fmtClock(remainingMs())} kaldı${S.paused ? ' (duraklatıldı)' : ''}`
    : `${t.tr} · anlatım seni bekliyor`;
}
function renderDaily() {
  const d = daily;
  $('#daily-date').textContent = fmtDay(d.date);
  const firstOpen = d.ids.findIndex(id => d.done[id] == null);
  $('#daily-slots').innerHTML = d.ids.map((id, i) => {
    const t = BY_ID[id], lv = LEVELS[t.lvl];
    const done = d.done[id] != null, rev = d.revealed[id] || done, sc = d.done[id];
    const right = done
      ? `<span class="score-pill ${sc >= passT() ? 'pass' : 'fail'}">%${Math.round(sc * 100)}</span>`
      : `<button class="btn small ${firstOpen === i ? 'primary' : ''}" data-daily="${i}">${rev ? 'Devam et' : 'Zar at'}</button>`;
    return `<li class="slot ${done ? 'done' : ''}" data-slot="${i}">
      <div class="slot-lvl lv-${t.lvl}"><b>${lv.name}</b><span>${lv.min} dk</span></div>
      <div class="slot-term ${rev ? '' : 'hidden-term'}"><span class="st">${rev ? esc(t.tr) : '? ? ?'}</span><span class="slot-sub">${rev ? esc(CATS[t.cat]) : 'zar atınca belli olur'}</span></div>
      ${right}</li>`;
  }).join('');
  const doneN = d.ids.filter(id => d.done[id] != null).length;
  const leftMin = d.ids.filter(id => d.done[id] == null).reduce((s, id) => s + LEVELS[BY_ID[id].lvl].min + 5, 0);
  $('#daily-foot').innerHTML = doneN === 0
    ? 'Araştırma 5 + 10 + 15 dakika, her soruya 1 dakika anlatım ve geri bildirim. <b>Toplam yaklaşık 45 dakika.</b>'
    : doneN < 3
      ? `<b>${doneN}/3 tamam.</b> Kalan yaklaşık ${leftMin} dakika.`
      : '<b>Bugünün 3\'lüsü tamam.</b> Üç konuyu kaynaktan okuyup anlattın. Yarın yeni set gelir.';
}
function renderDue() {
  const today = dayKey();
  const due = TERMS.filter(t => prog[t.id] && prog[t.id].due <= today).sort((a, b) => prog[a.id].due.localeCompare(prog[b.id].due));
  $('#due-count').textContent = due.length ? `${due.length} konu bekliyor` : '';
  if (due.length) {
    $('#due-list').innerHTML = due.slice(0, 8).map(t => {
      const p = prog[t.id];
      return `<li><span class="t">${esc(t.tr)}<span class="s">en iyi %${Math.round(p.best * 100)} · ${LEVELS[t.lvl].name}${daily.ids.includes(t.id) ? ' · günün setinde' : ''}</span></span><button class="btn small" data-due="${t.id}">Tekrarla</button></li>`;
    }).join('');
    return;
  }
  const soon = TERMS.filter(t => prog[t.id]).sort((a, b) => prog[a.id].due.localeCompare(prog[b.id].due)).slice(0, 4);
  $('#due-list').innerHTML = `<li class="empty" style="border:0;padding:0">Bugün tekrar bekleyen konu yok. Anlattığın konular 1, 3, 7, 14 ve 30 gün sonra buraya düşer.</li>` +
    soon.map(t => `<li><span class="t">${esc(t.tr)}<span class="s">${dayDiff(today, prog[t.id].due)} gün sonra · ${fmtDay(prog[t.id].due)}</span></span><span class="dot ${statusOf(t.id)}"></span></li>`).join('');
}
function renderMap() {
  const p = passT();
  $('#map').innerHTML = Object.entries(CATS).map(([k, name]) => {
    const ts = TERMS.filter(t => t.cat === k).sort((a, b) => a.lvl - b.lvl);
    const doneN = ts.filter(t => (prog[t.id]?.best ?? 0) >= p).length;
    return `<div class="cat-block">
      <div class="cat-head"><h3>${esc(name)}</h3><span class="mono">${doneN}/${ts.length}</span></div>
      <div class="cat-bar"><i style="width:${(doneN / ts.length) * 100}%"></i></div>
      <div class="term-chips">${ts.map(t => `<button class="term-chip" data-term="${t.id}" title="${esc(t.en)} · ${LEVELS[t.lvl].name} · ${LEVELS[t.lvl].min} dk"><i class="dot ${statusOf(t.id)}"></i>${esc(t.tr)}<sup>${LEVELS[t.lvl].name[0]}</sup></button>`).join('')}</div>
    </div>`;
  }).join('');
}
function renderHist() {
  if (!hist.length) {
    $('#hist').innerHTML = '<li class="empty" style="background:transparent;border:0;padding:0;display:block">Henüz anlatım yok. İlk zarı at; sonuçların burada listelenir.</li>';
    return;
  }
  $('#hist').innerHTML = hist.slice(0, 12).map(h => {
    const t = BY_ID[h.id]; if (!t) return '';
    const d = new Date(h.d);
    return `<li><span class="d">${d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' })} ${d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
      <span class="n">${esc(t.tr)}</span><span class="chip lv-${t.lvl}">${LEVELS[t.lvl].name}</span>
      <span class="score-pill ${h.p ? 'pass' : 'fail'} mono">%${Math.round(h.s * 100)}</span></li>`;
  }).join('');
}

/* ---------- zar ---------- */
let rollLvl = 0, rolled = null;
function spinReel(box, textEl, pool, pick, done) {
  if (box) { box.classList.remove('landed'); box.classList.add('spinning'); }
  const land = () => { textEl.textContent = pick.tr; if (box) { box.classList.remove('spinning'); box.classList.add('landed'); } done(); };
  if (reduceMotion || pool.length < 2) { land(); return; }
  let n = 0; const total = 14;
  const step = () => {
    n++;
    if (n >= total) { land(); return; }
    textEl.textContent = rand(pool).tr;
    setTimeout(step, 30 + n * n * 0.9);
  };
  step();
}
function doRoll() {
  const cat = $('#cat-sel').value;
  const pool = TERMS.filter(t => (!rollLvl || t.lvl === rollLvl) && (!cat || t.cat === cat));
  if (!pool.length) { toast('Bu zorluk ve başlıkta konu yok. Filtreyi değiştir.'); return; }
  const choices = pool.length > 1 && rolled ? pool.filter(t => t.id !== rolled) : pool;
  const pick = rand(choices);
  $('#btn-go').hidden = true; $('#btn-roll').disabled = true;
  $('#reel-meta').textContent = 'zar dönüyor…';
  spinReel($('#reel'), $('#reel-text'), pool, pick, () => {
    rolled = pick.id;
    $('#reel-meta').textContent = `${LEVELS[pick.lvl].name} · ${LEVELS[pick.lvl].min} dk araştırma · ${CATS[pick.cat]}`;
    const go = $('#btn-go'); go.hidden = false; go.className = 'btn primary'; go.textContent = `Araştırmaya başla · ${LEVELS[pick.lvl].min}:00`;
    const rb = $('#btn-roll'); rb.disabled = false; rb.className = 'btn'; rb.textContent = 'Yeniden zar at';
  });
}
function revealDaily(i) {
  const id = daily.ids[i]; const t = BY_ID[id];
  if (daily.revealed[id] || daily.done[id] != null) { startResearch(id, 'daily'); return; }
  const li = $(`.slot[data-slot="${i}"]`);
  if (!li) { startResearch(id, 'daily'); return; }
  const btn = li.querySelector('button'); if (btn) btn.disabled = true;
  const termBox = li.querySelector('.slot-term'); termBox.classList.remove('hidden-term');
  li.querySelector('.slot-sub').textContent = 'zar dönüyor…';
  spinReel(null, li.querySelector('.st'), TERMS.filter(x => x.lvl === t.lvl), t, () => {
    li.querySelector('.slot-sub').textContent = CATS[t.cat];
    daily.revealed[id] = true; store.set('daily', daily);
    setTimeout(() => startResearch(id, 'daily'), reduceMotion ? 0 : 750);
  });
}

/* ================================================================
   Araştırma
   ================================================================ */
let endTimer = 0, tickTimer = 0;
function remainingMs() { if (!S || S.phase !== 'research') return 0; return S.paused ? S.remain : Math.max(0, S.endAt - Date.now()); }
function startResearch(id, src, minutes) {
  const t = BY_ID[id];
  const min = minutes || LEVELS[t.lvl].min;
  S = { id, src, phase: 'research', endAt: Date.now() + min * 60000, total: min * 60000, paused: false, remain: 0 };
  saveS();
  if (src === 'daily') { daily.revealed[id] = true; store.set('daily', daily); }
  renderResearch();
  show('research');
  scheduleEnd();
  tickResearch();
}
function renderResearch() {
  const t = BY_ID[S.id];
  lvlChip($('#r-lvl'), t);
  $('#r-cat').textContent = CATS[t.cat];
  $('#r-term').textContent = t.tr;
  $('#r-en').textContent = t.en;
  const enQ = encodeURIComponent(t.en), trQ = encodeURIComponent(t.tr.replace(/\s*\(.*?\)/g, ''));
  const src = [
    ['PubMed', 'Derleme (review) makaleler', `https://pubmed.ncbi.nlm.nih.gov/?term=${enQ}&filter=pubt.review`],
    ['StatPearls', 'NCBI Bookshelf · klinik özet', `https://www.ncbi.nlm.nih.gov/books/?term=${encodeURIComponent(t.en + ' StatPearls')}`],
    ['Radiopaedia', 'Görüntüleme bulguları ve olgular', `https://radiopaedia.org/search?q=${enQ}`],
    ['Google Akademik', 'Güncel derlemeler', `https://scholar.google.com/scholar?q=${encodeURIComponent(t.en + ' review')}`],
    ['DergiPark', 'Türkçe makaleler', `https://dergipark.org.tr/tr/search?q=${trQ}&section=articles`],
    ['Wikipedia (EN)', 'Hızlı bakış; asıl değer kaynakçada', `https://en.wikipedia.org/w/index.php?search=${enQ}`]
  ];
  $('#r-sources').innerHTML = src.map(([n, sub, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer"><b>${n}</b><small>${sub}</small><span class="arr">↗</span></a></li>`).join('');
  const notes = $('#r-notes');
  notes.value = store.get('notes:' + S.id, '');
  updateNotesCount();
  $('#r-pause').textContent = S.paused ? 'Devam et' : 'Duraklat';
}
function updateNotesCount() { const n = tokenize($('#r-notes').value).length; $('#r-notes-count').textContent = `${n} kelime`; }
function scheduleEnd() {
  clearTimeout(endTimer);
  if (!S || S.phase !== 'research' || S.paused) return;
  // Tek seferlik zamanlayıcı: arka plan sekmelerindeki zincirleme kısıtlamaya takılmaz
  endTimer = setTimeout(onResearchEnd, Math.max(0, S.endAt - Date.now()) + 50);
}
function onResearchEnd() {
  if (!S || S.phase !== 'research' || S.paused || remainingMs() > 0) return;
  chime();
  toast('Süre doldu. Notlar kapandı, anlatma zamanı.', 4000);
  toExplain(true);
}
function tickResearch() {
  if (!S || S.phase !== 'research') return;
  const ms = remainingMs();
  if (view === 'research') {
    const tEl = $('#r-timer');
    tEl.textContent = fmtClock(ms);
    tEl.classList.toggle('low', ms < 60000);
    tEl.classList.toggle('paused', !!S.paused);
    $('#r-bar').style.width = `${clamp((1 - ms / S.total) * 100, 0, 100)}%`;
    document.title = `${fmtClock(ms)} · ${BY_ID[S.id].tr}`;
  } else if (view === 'home') {
    renderResume();
  }
  if (ms <= 0 && !S.paused) onResearchEnd();
}
function toExplain(timeUp) {
  if (!S) return;
  clearTimeout(endTimer);
  S.phase = 'explain'; S.timeUp = !!timeUp;
  saveS();
  renderExplain();
  show('explain');
}

/* ================================================================
   Ses uyarısı
   ================================================================ */
let actx = null;
function unlockAudio() {
  try {
    if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
  } catch { /* ses yok */ }
}
function chime() {
  if (!actx) return;
  try {
    const now = actx.currentTime;
    [659, 880, 1319].forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), t0 = now + i * 0.18;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.22, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.6);
      o.connect(g).connect(actx.destination); o.start(t0); o.stop(t0 + 0.65);
    });
  } catch { /* yok say */ }
}

/* ================================================================
   Konuşma tanıma
   ================================================================ */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
class Listener {
  constructor(lang, onText, onErr) { Object.assign(this, { lang, onText, onErr, committed: '', fin: '', int: '', active: false, restarts: 0, fatal: null }); }
  start() { this.active = true; this.spawn(); }
  spawn() {
    let r;
    try { r = new SR(); } catch { this.fatal = 'unsupported'; this.onErr && this.onErr('unsupported'); return; }
    this.r = r;
    r.lang = this.lang; r.continuous = true; r.interimResults = true; r.maxAlternatives = 1;
    r.onresult = e => {
      const finals = []; let interim = '';
      for (let k = 0; k < e.results.length; k++) {
        const res = e.results[k], tx = res[0].transcript.trim();
        if (!tx) continue;
        if (res.isFinal) {
          // Bazı Android sürümleri büyüyen aynı cümleyi tekrar tekrar final verir
          const prev = finals[finals.length - 1];
          if (prev && tx.startsWith(prev)) finals[finals.length - 1] = tx; else finals.push(tx);
        } else interim += tx + ' ';
      }
      this.fin = finals.length ? finals.join(' ') + ' ' : '';
      this.int = interim;
      this.restarts = 0;
      this.onText(this.text(false), this.int.trim());
    };
    r.onerror = e => {
      if (['not-allowed', 'service-not-allowed', 'audio-capture', 'network', 'language-not-supported'].includes(e.error)) {
        this.fatal = e.error; this.onErr && this.onErr(e.error);
      }
    };
    r.onend = () => {
      this.committed += this.fin + this.int;
      this.fin = ''; this.int = '';
      if (this.active && !this.fatal && this.restarts < 60) {
        this.restarts++;
        setTimeout(() => { if (this.active) this.spawn(); }, 120);
      } else if (this.done) this.done();
    };
    try { r.start(); } catch { /* zaten çalışıyor */ }
  }
  stop() {
    this.active = false;
    return new Promise(res => {
      let ok = false; const fin = () => { if (!ok) { ok = true; res(); } };
      this.done = fin;
      try { this.r ? this.r.stop() : fin(); } catch { fin(); }
      setTimeout(fin, 1800);
    });
  }
  text(withInterim = true) { return (this.committed + this.fin + (withInterim ? this.int : '')).replace(/\s+/g, ' ').trim(); }
}

/* ================================================================
   Anlatım: kayıt, EEG izi, kamera
   ================================================================ */
const R = { stream: null, hasVideo: false, ac: null, an: null, tbuf: null, rec: null, chunks: [], mime: '', listener: null, running: false, t0: 0, endT: 0, raf: 0, frame: 0, eeg: [] };

function renderExplain() {
  const t = BY_ID[S.id];
  lvlChip($('#e-lvl'), t);
  $('#e-cat').textContent = CATS[t.cat];
  $('#e-term').textContent = t.tr;
  $('#e-en').textContent = t.en;
  $('#e-banner').hidden = !S.timeUp;
  $('#live').innerHTML = '<span class="muted">Konuştukça burada yazıya dökülecek.</span>';
  $('#live-count').textContent = '0 kelime';
  $('#typed-wrap').hidden = true; $('#typed').value = '';
  $('#type-instead').hidden = false;
  $('#rec-time').textContent = fmtShort(speakMs());
  $('#rec-ring').style.strokeDashoffset = 339.3;
  $('#rec-btn').classList.remove('on'); $('#rec-btn').setAttribute('aria-label', 'Kaydı başlat');
  $('#rec-btn').disabled = false;
  setRecStatus(`Hazır olduğunda kayda bas. ${settings.speakSec} saniyen var.`);
  pending = null;
  const w = [];
  if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) w.push('Mikrofon için siteyi http://localhost ya da https adresinden aç. Şimdilik yazarak cevaplayabilirsin.');
  else if (!SR) w.push('Bu tarayıcı konuşmayı yazıya çeviremiyor (Chrome, Edge ya da Safari kullan). Yine de kaydedebilir, sonra anlattığını yazabilirsin.');
  $('#sr-warn').hidden = !w.length; $('#sr-warn').textContent = w.join(' ');
  setMode(settings.mode, true);
}
function setRecStatus(s) { $('#rec-status').textContent = s; }
function setMode(mode, initial) {
  settings.mode = mode; store.set('settings', settings);
  $$('#mode-seg button').forEach(b => b.setAttribute('aria-checked', String(b.dataset.mode === mode)));
  $('#cam-wrap').hidden = mode !== 'video';
  if (R.running) return;
  if (mode === 'video') {
    getStream(true).catch(e => {
      if (e && e.message === 'left') return;
      setRecStatus('Kameraya izin verilmedi. Sadece ses moduna geçtim.');
      setMode('audio');
    });
  } else if (R.hasVideo || initial) {
    releaseStream();
  }
}
async function getStream(video) {
  if (R.stream && R.hasVideo === video && R.stream.getTracks().every(t => t.readyState === 'live')) return R.stream;
  releaseStream();
  const s = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    video: video ? { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } : false
  });
  if (view !== 'explain') { s.getTracks().forEach(t => t.stop()); throw new Error('left'); }
  R.stream = s; R.hasVideo = video;
  if (video) { const v = $('#cam-video'); v.srcObject = s; try { await v.play(); } catch { /* sessiz */ } }
  try {
    R.ac = new (window.AudioContext || window.webkitAudioContext)();
    const src = R.ac.createMediaStreamSource(s);
    R.an = R.ac.createAnalyser(); R.an.fftSize = 1024; R.tbuf = new Float32Array(R.an.fftSize);
    src.connect(R.an);
  } catch { R.an = null; }
  return s;
}
function releaseStream() {
  if (R.stream) R.stream.getTracks().forEach(t => t.stop());
  R.stream = null; R.hasVideo = false;
  try { R.ac && R.ac.close(); } catch { /* yok say */ }
  R.ac = null; R.an = null;
  const v = $('#cam-video'); if (v) v.srcObject = null;
}
function pickMime(video) {
  if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return '';
  const c = video
    ? ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm']
    : ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg;codecs=opus'];
  return c.find(m => MediaRecorder.isTypeSupported(m)) || '';
}
function renderLive(finalText, interim) {
  const live = $('#live');
  live.innerHTML = esc(finalText) + (interim ? ` <span class="interim">${esc(interim)}</span>` : '');
  $('#live-count').textContent = `${tokenize(finalText + ' ' + (interim || '')).length} kelime`;
  live.scrollTop = live.scrollHeight;
}
function showTyped(label) {
  $('#typed-wrap').hidden = false;
  $('#typed-label').textContent = label;
  const ta = $('#typed');
  if (!ta.value && R.listener) ta.value = R.listener.text(true);
  ta.focus();
}

async function startRecording() {
  if (R.running) return;
  if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showTyped('Mikrofon bu adreste açılamıyor. Anlattığını yaz:');
    return;
  }
  const video = settings.mode === 'video';
  setRecStatus(video ? 'Kamera ve mikrofon açılıyor…' : 'Mikrofon açılıyor…');
  try { await getStream(video); }
  catch (e) {
    if (e && e.message === 'left') return;
    setRecStatus('İzin verilmedi.');
    showTyped(video ? 'Kamera ya da mikrofon izni yok. Adres çubuğundaki kilit simgesinden izin ver ya da yazarak cevapla:' : 'Mikrofon izni yok. Adres çubuğundaki kilit simgesinden izin ver ya da yazarak cevapla:');
    return;
  }
  if (R.ac && R.ac.state === 'suspended') { try { await R.ac.resume(); } catch { /* yok say */ } }

  let recStream = R.stream;
  if (video) {
    const vt = $('#cam-canvas').captureStream(30).getVideoTracks();
    recStream = new MediaStream([...vt, ...R.stream.getAudioTracks()]);
  }
  R.chunks = []; R.rec = null; R.mime = '';
  if (window.MediaRecorder) {
    const mime = pickMime(video);
    try {
      R.rec = new MediaRecorder(recStream, mime ? { mimeType: mime } : undefined);
      R.mime = R.rec.mimeType || mime || (video ? 'video/webm' : 'audio/webm');
      R.rec.ondataavailable = e => { if (e.data && e.data.size) R.chunks.push(e.data); };
      R.rec.start(500);
    } catch { R.rec = null; }
  }
  R.listener = null;
  $('#live').innerHTML = '<span class="muted">Dinliyorum…</span>';
  if (SR) {
    R.listener = new Listener(settings.lang, renderLive, err => {
      const msg = { 'not-allowed': 'Konuşma tanımaya izin verilmedi.', 'service-not-allowed': 'Konuşma tanıma servisi kapalı.', network: 'Konuşma tanıma için internet gerekiyor.', 'audio-capture': 'Mikrofon sesi alınamadı.', 'language-not-supported': 'Bu dil desteklenmiyor.' }[err] || 'Konuşma tanıma çalışmadı.';
      $('#sr-warn').hidden = false; $('#sr-warn').textContent = msg + ' Kayıt devam ediyor; bitince anlattığını yazabilirsin.';
    });
    R.listener.start();
  }
  R.running = true; R.t0 = performance.now();
  R.endT = setTimeout(() => stopRecording(), speakMs() + 150);
  const b = $('#rec-btn'); b.classList.add('on'); b.setAttribute('aria-label', 'Kaydı bitir');
  $$('#mode-seg button').forEach(x => { x.disabled = true; });
  $('#type-instead').hidden = true; $('#typed-wrap').hidden = true;
  setRecStatus('Kayıtta. Erken bitirmek için tekrar bas.');
}

async function stopRecording(abort = false) {
  if (!R.running) return;
  R.running = false; clearTimeout(R.endT);
  const ms = Math.min(performance.now() - R.t0, speakMs());
  const b = $('#rec-btn'); b.classList.remove('on'); b.setAttribute('aria-label', 'Kaydı başlat'); b.disabled = true;
  $$('#mode-seg button').forEach(x => { x.disabled = false; });
  if (!abort) setRecStatus('Kayıt bitti, değerlendiriliyor…');

  const recDone = new Promise(res => {
    if (!R.rec || R.rec.state === 'inactive') return res();
    R.rec.onstop = () => res();
    try { R.rec.stop(); } catch { res(); }
  });
  const srDone = R.listener ? R.listener.stop() : Promise.resolve();
  await Promise.all([recDone, srDone]);

  let media = null;
  if (R.chunks.length) {
    const type = (R.mime || 'audio/webm').split(';')[0];
    const blob = new Blob(R.chunks, { type });
    media = { url: URL.createObjectURL(blob), type, video: type.startsWith('video'), ext: type.includes('mp4') ? 'mp4' : type.includes('ogg') ? 'ogg' : 'webm' };
  }
  R.chunks = [];
  b.disabled = false;
  if (abort) { if (media) URL.revokeObjectURL(media.url); return; }

  const text = R.listener ? R.listener.text(true) : '';
  if (!text.trim()) {
    if (pending && pending.media) URL.revokeObjectURL(pending.media.url);
    pending = { ms, media };
    setRecStatus('Kayıt alındı. Tekrar kaydedebilir ya da yazabilirsin.');
    $('#rec-time').textContent = fmtShort(speakMs()); $('#rec-ring').style.strokeDashoffset = 339.3;
    showTyped(SR
      ? 'Konuşman yazıya dökülemedi (izin, internet ya da sessizlik). Anlattığını yaz:'
      : 'Bu tarayıcı konuşmayı yazıya çeviremiyor. Kaydın hazır; anlattığını buraya yaz:');
    return;
  }
  finish(text, ms, media);
}

/* ---------- EEG izi ---------- */
function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
const idleSample = f => Math.sin(f * 0.36) * 0.06 + Math.sin(f * 0.07) * 0.03 + (Math.random() - 0.5) * 0.04;
function pushEEG() {
  R.frame++;
  let v;
  if (R.an) {
    R.an.getFloatTimeDomainData(R.tbuf);
    const idx = (R.frame * 53) % R.tbuf.length;
    v = clamp(R.tbuf[idx] * 4.2, -1, 1) * 0.95 + (Math.random() - 0.5) * 0.03;
  } else {
    v = idleSample(R.frame);
  }
  R.eeg.push(v);
}
function drawEEG() {
  const c = $('#eeg'); const w = c.clientWidth, h = c.clientHeight; if (!w || !h) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
  const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
  const step = 2, n = Math.ceil(w / step) + 2;
  if (R.eeg.length > n) R.eeg.splice(0, R.eeg.length - n);
  const off = (R.frame * step) % 24;
  g.strokeStyle = cssVar('--line'); g.lineWidth = 1; g.beginPath();
  for (let x = w - off; x > 0; x -= 24) { g.moveTo(Math.round(x) + 0.5, 0); g.lineTo(Math.round(x) + 0.5, h); }
  g.stroke();
  const mid = h * 0.56;
  g.beginPath();
  R.eeg.forEach((v, i) => { const x = w - (R.eeg.length - 1 - i) * step, y = mid - v * h * 0.4; i ? g.lineTo(x, y) : g.moveTo(x, y); });
  g.strokeStyle = cssVar(R.running ? '--nissl' : '--lfb'); g.lineWidth = 1.6; g.lineJoin = 'round'; g.stroke();
}

/* ---------- 9:16 kamera çerçevesi ---------- */
function wrapLines(g, text, maxW) {
  const words = text.split(/\s+/), lines = []; let cur = '';
  for (const w of words) { const tryL = cur ? cur + ' ' + w : w; if (g.measureText(tryL).width > maxW && cur) { lines.push(cur); cur = w; } else cur = tryL; }
  if (cur) lines.push(cur);
  return lines;
}
function drawCam() {
  if (!S) return;
  const cv = $('#cam-canvas'), g = cv.getContext('2d'), v = $('#cam-video'), W = 720, H = 1280, t = BY_ID[S.id];
  g.fillStyle = '#0C1318'; g.fillRect(0, 0, W, H);
  if (v.videoWidth) {
    const s = Math.max(W / v.videoWidth, H / v.videoHeight), dw = v.videoWidth * s, dh = v.videoHeight * s;
    g.save(); g.translate(W, 0); g.scale(-1, 1); g.drawImage(v, (W - dw) / 2, (H - dh) / 2, dw, dh); g.restore();
  }
  let gr = g.createLinearGradient(0, 0, 0, 480); gr.addColorStop(0, 'rgba(8,13,17,.9)'); gr.addColorStop(1, 'rgba(8,13,17,0)');
  g.fillStyle = gr; g.fillRect(0, 0, W, 480);
  gr = g.createLinearGradient(0, H - 380, 0, H); gr.addColorStop(0, 'rgba(8,13,17,0)'); gr.addColorStop(1, 'rgba(8,13,17,.92)');
  g.fillStyle = gr; g.fillRect(0, H - 380, W, 380);
  g.textBaseline = 'alphabetic';
  g.font = '600 26px "IBM Plex Mono", monospace'; g.fillStyle = '#5BB8D8'; g.fillText('UNPROMPTED · NÖROLOJİ', 48, 84);
  const lv = LEVELS[t.lvl];
  g.fillStyle = LV_CANVAS[t.lvl]; g.fillText(`${lv.name.toLocaleUpperCase('tr-TR')} · ${lv.min} DK ARAŞTIRMA · AI YOK`, 48, 124);
  let fs = 86; g.font = `800 ${fs}px "Bricolage Grotesque", sans-serif`;
  let lines = wrapLines(g, t.tr, W - 96);
  while (lines.length > 3 && fs > 50) { fs -= 6; g.font = `800 ${fs}px "Bricolage Grotesque", sans-serif`; lines = wrapLines(g, t.tr, W - 96); }
  g.fillStyle = '#FFFFFF'; lines.forEach((ln, i) => g.fillText(ln, 48, 140 + fs + i * fs * 0.98));
  const left = R.running ? Math.max(0, speakMs() - (performance.now() - R.t0)) : speakMs();
  g.font = '500 116px "IBM Plex Mono", monospace'; g.fillStyle = '#FFFFFF'; g.fillText(fmtShort(left), 48, H - 124);
  g.fillStyle = 'rgba(255,255,255,.2)'; g.fillRect(48, H - 92, W - 96, 8);
  g.fillStyle = '#E07AB5'; g.fillRect(48, H - 92, (W - 96) * (1 - left / speakMs()), 8);
  g.font = '500 25px "IBM Plex Sans", sans-serif'; g.fillStyle = 'rgba(255,255,255,.8)';
  g.fillText('Kaynaktan okudum, notsuz anlatıyorum.', 48, H - 42);
  if (R.running) {
    g.fillStyle = '#E5484D'; g.beginPath(); g.arc(W - 60, 76, 11, 0, Math.PI * 2); g.fill();
    g.font = '600 22px "IBM Plex Mono", monospace'; g.fillStyle = '#FFFFFF'; g.fillText('REC', W - 128, 84);
  }
}

function explainFrame() {
  if (view !== 'explain') { R.raf = 0; return; }
  pushEEG(); drawEEG();
  if (R.hasVideo) drawCam();
  if (R.running) {
    const el = performance.now() - R.t0, left = Math.max(0, speakMs() - el);
    $('#rec-time').textContent = fmtShort(left);
    $('#rec-ring').style.strokeDashoffset = 339.3 * (1 - el / speakMs());
  }
  R.raf = requestAnimationFrame(explainFrame);
}
function startExplainLoop() {
  // İz, ekran açılır açılmaz dolu görünsün
  while (R.eeg.length < 900) { R.frame++; R.eeg.push(idleSample(R.frame)); }
  drawEEG();
  if (!R.raf) R.raf = requestAnimationFrame(explainFrame);
}
function stopExplainLoop() { if (R.raf) cancelAnimationFrame(R.raf); R.raf = 0; }

/* ================================================================
   Sonuç ve ilerleme
   ================================================================ */
function applyAttempt(r) {
  const today = dayKey(), t = BY_ID[r.id];
  const snap = { id: r.id, prevProg: prog[r.id] ? { ...prog[r.id] } : null, prevXp: xp, prevStreak: { ...streak }, prevDaily: JSON.parse(JSON.stringify(daily)) };
  const p = prog[r.id] ? { ...prog[r.id] } : { box: 0, due: today, best: 0, n: 0, last: 0 };
  p.n++; p.last = r.score; p.best = Math.max(p.best, r.score);
  if (r.passed) {
    if (p.passedDay !== today) { p.box = Math.min(p.box + 1, INTERVALS.length); p.passedDay = today; }
    p.due = addDays(today, INTERVALS[Math.max(1, p.box) - 1]);
  } else {
    p.box = Math.max(0, p.box - 1);
    p.due = addDays(today, 1);
  }
  p.lastDay = today;
  prog[r.id] = p;
  snap.gain = Math.round(r.score * 100) + (r.passed ? LEVEL_BONUS[t.lvl] : 0);
  xp += snap.gain;
  if (streak.last !== today) { streak = { last: today, count: streak.last === addDays(today, -1) ? streak.count + 1 : 1 }; }
  if (daily && daily.ids.includes(r.id)) daily.done[r.id] = Math.max(daily.done[r.id] ?? 0, r.score);
  hist.unshift({ id: r.id, d: Date.now(), s: r.score, p: r.passed, w: r.wpm });
  hist = hist.slice(0, 200);
  saveAll();
  return snap;
}
function undoAttempt(snap) {
  if (snap.prevProg) prog[snap.id] = snap.prevProg; else delete prog[snap.id];
  xp = snap.prevXp; streak = snap.prevStreak; daily = snap.prevDaily;
  hist.shift();
  saveAll();
}
function score(t, text, ms, media, src) {
  const ev = evaluate(t, text);
  return { id: t.id, src, ms, media, ...ev, passed: ev.score >= passT(), wpm: ms ? Math.round(ev.words / (ms / 60000)) : null };
}
function finish(text, ms, media) {
  if (!S) return;
  const t = BY_ID[S.id];
  const wasDailyDone = daily && daily.ids.every(id => daily.done[id] != null);
  const r = score(t, text, ms, media, S.src);
  r.snap = applyAttempt(r);
  if (last && last.media && last.media !== media) URL.revokeObjectURL(last.media.url);
  last = r; pending = null;
  releaseStream();
  S = null; saveS();
  renderResult(r);
  show('result');
  renderHeader();
  if (!wasDailyDone && daily.ids.every(id => daily.done[id] != null)) setTimeout(() => toast('Bugünün 3\'lüsü tamam. Yarın yeni set seni bekliyor.', 4200), 900);
}

function renderResult(r) {
  const t = BY_ID[r.id];
  lvlChip($('#s-lvl'), t);
  $('#s-cat').textContent = CATS[t.cat];
  $('#s-term').textContent = t.tr;

  const pct = Math.round(r.score * 100), C = 427.3;
  const ring = $('#s-ring');
  ring.style.strokeDashoffset = C;
  ring.style.stroke = r.passed ? (r.score >= 0.85 ? cssVar('--lfb') : cssVar('--ok')) : cssVar('--bad');
  requestAnimationFrame(() => requestAnimationFrame(() => { ring.style.strokeDashoffset = C * (1 - r.score); }));
  $('#s-mark').setAttribute('x1', '136'); $('#s-mark').setAttribute('y1', '80');
  $('#s-mark').setAttribute('x2', '160'); $('#s-mark').setAttribute('y2', '80');
  $('#s-mark').setAttribute('transform', `rotate(${passT() * 360} 80 80)`);
  countUp($('#s-num'), pct);

  const state = r.score >= 0.85 ? 'ace' : r.passed ? 'pass' : r.score >= passT() - 0.15 ? 'near' : 'fail';
  const stamp = $('#s-stamp');
  stamp.className = 'stamp ' + state;
  stamp.textContent = { ace: 'Konu bitti', pass: 'Geçtin', near: 'Az kaldı', fail: 'Tekrar' }[state];

  const hits = r.concepts.filter(c => c.hit), miss = r.concepts.filter(c => !c.hit);
  const cores = r.concepts.filter(c => c.core), coreHit = cores.filter(c => c.hit).length;
  $('#s-sum').textContent = `${hits.length}/${r.concepts.length} kavram · temel kavram ${coreHit}/${cores.length} · geçme eşiği %${settings.pass}`;
  $('#s-xp').textContent = `+${r.snap.gain} XP`;

  $('#c-hit-n').textContent = `${hits.length}`;
  $('#c-miss-n').textContent = `${miss.length}`;
  $('#c-hit').innerHTML = hits.length
    ? hits.map(c => `<li><span class="ic">✓</span><span><span class="lbl">${esc(c.label)}</span>${c.core ? '<span class="core">temel</span>' : ''}<span class="ev">“${esc(c.ev)}”</span></span></li>`).join('')
    : '<li class="c-empty">Bu anlatımda eşleşen kavram bulunamadı.</li>';
  const missEl = $('#c-miss');
  missEl.classList.add('masked');
  missEl.innerHTML = miss.length
    ? miss.map(c => `<li><span class="ic">✗</span><span><span class="lbl">${esc(c.label)}</span>${c.core ? '<span class="core">temel</span>' : ''}</span></li>`).join('')
    : '<li class="c-empty">Hiçbir kavramı atlamadın.</li>';
  const rv = $('#reveal-miss'); rv.hidden = !miss.length; rv.textContent = 'Eksikleri göster';

  $('#t-out').innerHTML = r.text.trim() ? highlight(r) : '<span class="muted">Boş anlatım.</span>';
  $('#t-edit').value = r.text;
  $('.t-fix').open = false;

  const used = r.ms != null ? `${fmtShort(r.ms)}<small> / ${fmtShort(speakMs())}</small>` : '—<small> yazılı</small>';
  $('#stats').innerHTML = [
    ['Süre', used],
    ['Kelime', `${r.words}`],
    ['Hız', r.wpm != null ? `${r.wpm}<small> kel/dk</small>` : '—'],
    ['Dolgu', `${r.fillerN}`]
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  $('#tips').innerHTML = tipsFor(r).map(x => `<li>${x}</li>`).join('');

  const mo = $('#media-out');
  if (r.media) {
    const fname = `unprompted-${t.id}-${dayKey()}.${r.media.ext}`;
    mo.innerHTML = (r.media.video ? `<video controls playsinline src="${r.media.url}"></video>` : `<audio controls src="${r.media.url}"></audio>`) +
      `<div class="row-actions"><a class="btn small" href="${r.media.url}" download="${fname}">${r.media.video ? 'Videoyu indir' : 'Ses kaydını indir'}</a>${r.media.video && r.media.ext === 'webm' ? '<span class="hint">WebM; Instagram için gerekirse MP4\'e çevir.</span>' : ''}</div>`;
  } else mo.innerHTML = '';

  const nextDaily = daily.ids.find(id => daily.done[id] == null);
  const acts = [];
  const primary = !r.passed ? 'more' : nextDaily ? 'daily' : 'roll';
  const btn = (k, label) => `<button class="btn ${primary === k ? 'primary' : ''}" data-next="${k}">${label}</button>`;
  if (!r.passed) acts.push(btn('more', '3 dk daha araştır, sonra tekrar anlat'));
  if (nextDaily) acts.push(btn('daily', `Sıradaki günlük soru: ${LEVELS[BY_ID[nextDaily].lvl].name}`));
  acts.push(btn('again', 'Aynı konuyu tekrar anlat'));
  if (r.passed) acts.push(btn('more', '3 dk daha araştır'));
  acts.push(btn('roll', 'Yeni zar at'));
  $('#next-actions').innerHTML = acts.join('');
}
function countUp(el, to) {
  if (reduceMotion) { el.textContent = to; return; }
  const t0 = performance.now(), d = 900;
  const f = now => { const k = clamp((now - t0) / d, 0, 1), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e); if (k < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}
function tipsFor(r) {
  const tips = [];
  const missCore = r.concepts.filter(c => c.core && !c.hit).length;
  if (missCore) tips.push(`${missCore} temel kavramı atladın. Anlatıma tanım ve mekanizmayla başla; temel kavramlar ilk 20 saniyede gelsin.`);
  if (r.wpm != null && r.words >= 15) {
    if (r.wpm < 90) tips.push(`Hızın ${r.wpm} kelime/dk, biraz yavaş. Cümleleri kısalt; 110–150 arası rahat dinlenir.`);
    else if (r.wpm > 175) tips.push(`Hızın ${r.wpm} kelime/dk, hızlı. Önemli terimden sonra yarım saniye dur.`);
    else tips.push(`Hızın ${r.wpm} kelime/dk, rahat dinlenen bir tempo.`);
  }
  if (r.ms != null && r.ms < speakMs() * 0.6 && r.score < 0.85) tips.push(`Sürenin ${Math.round(r.ms / 1000)} saniyesini kullandın. Kalan süre atladığın kavramlara yeterdi.`);
  if (r.fillerN >= 3) {
    const top = Object.entries(r.fillers).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([w, n]) => `“${w}” ×${n}`).join(', ');
    tips.push(`Dolgu kelimeler: ${top}. Yerine kısa bir sessizlik daha güçlü durur.`);
  }
  if (r.words < 40) tips.push('Anlatım kısa kaldı. Bir dakika yaklaşık 120–140 kelime eder.');
  const p = prog[r.id];
  if (r.passed && p) tips.push(`Bu konu ${dayDiff(dayKey(), p.due)} gün sonra (${fmtDay(p.due)}) tekrar kuyruğuna düşecek.`);
  else tips.push('Yarın tekrar karşına çıkacak. Atladığın kavramları kaynakta bul ve kendi cümlenle not al.');
  return tips;
}

/* ================================================================
   Olaylar
   ================================================================ */
function goHome() {
  if (R.running) stopRecording(true);
  releaseStream();
  show('home');
  renderHome();
}
document.addEventListener('pointerdown', unlockAudio, { passive: true });
document.addEventListener('keydown', unlockAudio);

document.addEventListener('click', e => {
  const el = e.target.closest('[data-act],[data-daily],[data-term],[data-due],[data-next]');
  if (!el) return;
  if (el.dataset.act === 'home') { goHome(); return; }
  if (el.dataset.daily != null) { revealDaily(Number(el.dataset.daily)); return; }
  if (el.dataset.term) { startResearch(el.dataset.term, 'map'); return; }
  if (el.dataset.due) { startResearch(el.dataset.due, 'review'); return; }
  if (el.dataset.next && last) {
    const k = el.dataset.next;
    if (k === 'again') { S = { id: last.id, src: last.src, phase: 'explain', timeUp: false }; saveS(); renderExplain(); show('explain'); }
    else if (k === 'more') startResearch(last.id, last.src, 3);
    else if (k === 'daily') {
      const i = daily.ids.findIndex(id => daily.done[id] == null);
      show('home'); renderHome();
      if (i >= 0) { $('#daily').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => revealDaily(i), 350); }
    } else if (k === 'roll') {
      show('home'); renderHome();
      $('#roll-card').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      setTimeout(doRoll, 350);
    }
  }
});

$('#lvl-seg').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  rollLvl = Number(b.dataset.lvl);
  $$('#lvl-seg button').forEach(x => x.setAttribute('aria-checked', String(x === b)));
});
$('#cat-sel').innerHTML = '<option value="">Tüm başlıklar</option>' + Object.entries(CATS).map(([k, n]) => `<option value="${k}">${esc(n)} (${TERMS.filter(t => t.cat === k).length})</option>`).join('');
$('#btn-roll').addEventListener('click', doRoll);
$('#btn-go').addEventListener('click', () => { if (rolled) startResearch(rolled, 'free'); });
$('#resume-go').addEventListener('click', () => {
  if (!S) return;
  if (S.phase === 'research') { renderResearch(); show('research'); scheduleEnd(); tickResearch(); }
  else { renderExplain(); show('explain'); }
});
$('#resume-drop').addEventListener('click', () => { S = null; saveS(); clearTimeout(endTimer); renderHome(); toast('Yarım kalan konu bırakıldı.'); });

$('#r-pause').addEventListener('click', () => {
  if (!S) return;
  if (S.paused) { S.paused = false; S.endAt = Date.now() + S.remain; }
  else { S.remain = remainingMs(); S.paused = true; }
  saveS(); scheduleEnd(); tickResearch();
  $('#r-pause').textContent = S.paused ? 'Devam et' : 'Duraklat';
});
$('#r-add').addEventListener('click', () => {
  if (!S) return;
  if (S.paused) S.remain += 120000; else S.endAt += 120000;
  S.total += 120000; saveS(); scheduleEnd(); tickResearch();
  toast('2 dakika eklendi');
});
$('#r-done').addEventListener('click', () => toExplain(false));
$('#r-notes').addEventListener('input', e => { if (S) store.set('notes:' + S.id, e.target.value); updateNotesCount(); });

$('#mode-seg').addEventListener('click', e => { const b = e.target.closest('button'); if (b && !b.disabled) setMode(b.dataset.mode); });
$('#rec-btn').addEventListener('click', () => { if (R.running) stopRecording(); else startRecording(); });
$('#type-instead').addEventListener('click', () => showTyped('Anlattığını yaz. Süre tutulmaz; bir dakikada söyleyeceğin kadarını yaz:'));
$('#typed-submit').addEventListener('click', () => {
  const v = $('#typed').value.trim();
  if (!v) { toast('Önce anlattığını yaz.'); $('#typed').focus(); return; }
  finish(v, pending ? pending.ms : null, pending ? pending.media : null);
});

$('#reveal-miss').addEventListener('click', e => {
  const m = $('#c-miss'); const masked = m.classList.toggle('masked');
  e.currentTarget.textContent = masked ? 'Eksikleri göster' : 'Eksikleri gizle';
});
$('#t-rescore').addEventListener('click', () => {
  if (!last) return;
  const text = $('#t-edit').value.trim();
  if (!text) { toast('Döküm boş olamaz.'); return; }
  undoAttempt(last.snap);
  const r = score(BY_ID[last.id], text, last.ms, last.media, last.src);
  r.snap = applyAttempt(r);
  last = r;
  renderResult(r); renderHeader();
  toast('Yeniden puanlandı');
});

/* ---------- ayarlar ---------- */
const dlg = $('#settings');
$('#btn-settings').addEventListener('click', () => {
  $('#set-speak').value = String(settings.speakSec);
  $('#set-pass').value = String(settings.pass);
  $('#set-lang').value = settings.lang;
  $('#reset-confirm').hidden = true;
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
});
$('#set-speak').addEventListener('change', e => { settings.speakSec = Number(e.target.value); store.set('settings', settings); if (view === 'explain' && !R.running) { $('#rec-time').textContent = fmtShort(speakMs()); setRecStatus(`Hazır olduğunda kayda bas. ${settings.speakSec} saniyen var.`); } });
$('#set-pass').addEventListener('change', e => { settings.pass = Number(e.target.value); store.set('settings', settings); if (view === 'home') renderHome(); renderHeader(); });
$('#set-lang').addEventListener('change', e => { settings.lang = e.target.value; store.set('settings', settings); });
$('#reset-ask').addEventListener('click', () => { $('#reset-confirm').hidden = false; });
$('#reset-no').addEventListener('click', () => { $('#reset-confirm').hidden = true; });
$('#reset-yes').addEventListener('click', () => {
  store.keys().filter(k => k !== 'settings').forEach(k => store.del(k));
  prog = {}; hist = []; xp = 0; streak = { last: null, count: 0 }; S = null; last = null; daily = null;
  clearTimeout(endTimer);
  dlg.close ? dlg.close() : dlg.removeAttribute('open');
  goHome();
  toast('İlerleme sıfırlandı.');
});

/* ---------- açılış ---------- */
tickTimer = setInterval(tickResearch, 250);
document.addEventListener('visibilitychange', () => { if (!document.hidden) tickResearch(); });
window.addEventListener('pagehide', () => { if (R.running) stopRecording(true); });

renderHome();
if (S && S.phase === 'research' && (S.paused || remainingMs() > 0)) {
  renderResearch(); show('research'); scheduleEnd(); tickResearch();
} else if (S && S.phase === 'research') {
  toExplain(true);
} else {
  show('home');
}

if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

// Konsoldan test için
window.__upn = { evaluate: (id, text) => { const r = evaluate(BY_ID[id], text); return { score: Math.round(r.score * 100), hit: r.concepts.filter(c => c.hit).map(c => c.label), miss: r.concepts.filter(c => !c.hit).map(c => c.label), fillers: r.fillers }; }, terms: TERMS.length };
})();
