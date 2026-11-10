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
// Dikte kısaltmaları ve uzun terimleri bölebiliyor: "ABCD2" → "abc'deki 2", "hiperlipidemi" → "hiperli pide mi".
// Bir anahtar parçası, 2–4 ardışık sözcüğün birleşimiyle de eşleşir; kaç sözcük tükettiğini döndürür.
// Yanlış birleşmeleri önlemek için: ilk sözcük bağımsız bir kelime olamaz ("iki lider" ≠ "ikili") ve anahtar
// son sözcüğün sonuna en fazla bir ek kadar (4 harf) yaklaşmalı ("atak sırasında" ≠ "ataksi").
const NO_JOIN = new Set(['bir', 'iki', 'uc', 'dort', 'bes', 've', 'ile', 'bu', 'su', 'o', 'de', 'da', 'ki', 'mi', 'mu', 'ne', 'ya', 'ama', 'hem', 'en', 'cok', 'az', 'var', 'yok', 'her', 'gibi', 'icin']);
function joinMatch(tt, i, k) {
  if (NO_JOIN.has(tt[i].t)) return 0;
  let joined = tt[i].t;
  for (let n = 2; n <= 4 && i + n <= tt.length; n++) {
    if (!k.startsWith(joined)) return 0;
    joined += tt[i + n - 1].t;
    if (k.length <= 3 ? joined === k : joined.startsWith(k) && joined.length - k.length <= 4) return n;
  }
  return 0;
}
function findKey(tt, kt) {
  const hits = [];
  outer: for (let i = 0; i < tt.length; i++) {
    let p = i;
    for (const k of kt) {
      if (p >= tt.length) continue outer;
      if (tokMatch(tt[p].t, k)) { p++; continue; }
      const n = joinMatch(tt, p, k);
      if (!n) continue outer;
      p += n;
    }
    hits.push([i, p]);
  }
  return hits;
}
const FILLERS = { yani: 'yani', iste: 'işte', sey: 'şey', hani: 'hani', falan: 'falan', filan: 'filan', ee: 'ee', eee: 'eee', eeee: 'eee', hmm: 'hmm', mmm: 'mmm' };

// Ham konu kaydını puanlamaya hazırlar: "!" temel kavram (2 kat), anahtarlar "|" ile ayrılır.
function compile(t) {
  return Object.assign({}, t, {
    _c: t.c.map(([label, keys]) => {
      const core = label.startsWith('!');
      return { label: core ? label.slice(1) : label, core, w: core ? 2 : 1, keys: keys.split('|').map(k => tokenize(k).map(x => x.t)).filter(a => a.length) };
    })
  });
}

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

const api = { norm, tokenize, lev, tokMatch, joinMatch, findKey, compile, evaluate, NO_JOIN, FILLERS };
if (typeof module === 'object' && module.exports) module.exports = api;
else root.UPScore = api;
})(typeof window !== 'undefined' ? window : globalThis);
