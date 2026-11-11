#!/usr/bin/env node
/* docs/klinik/<branş>.md dosyalarını branş sırasıyla docs/KLINIK-INCELEME.md'de birleştirir ve madde sayar. */
'use strict';
const fs = require('fs'), path = require('path');
const { loadCatalog } = require('../tests/lib');
const ROOT = path.join(__dirname, '..');
const cat = loadCatalog();
// Yalnız şüphe/kontrol tablolarının satırları sayılır (değişiklik kayıtları sayılmaz).
function rows(s) {
  let n = 0, inReview = false, inTable = false;
  for (const l of s.split('\n')) {
    if (!/^\|/.test(l)) { inTable = false; continue; }
    if (!inTable) { inTable = true; inReview = /şüphe|kontrol/i.test(l); continue; }
    if (/^\|\s*:?-/.test(l)) continue;
    if (inReview && !/^\|\s*—\s*\|/.test(l)) n++;
  }
  return n;
}
let total = 0; const parts = [];
for (const b of cat.BRANCHES) {
  const f = path.join(ROOT, 'docs/klinik', b.id + '.md');
  if (!fs.existsSync(f)) continue;
  const s = fs.readFileSync(f, 'utf8').trim();
  const n = rows(s); total += n;
  parts.push(`<!-- ${b.id}: ${n} madde -->\n${s}`);
}
const head = `# Klinik inceleme listesi

Bir hekimin gözden geçireceği iş listesi. Her satır: konu, şüphe, kontrol edilecek kaynak. İçerik bu liste kapanmadan "hekim onaylı" sayılmaz.
Kaynak dosyalar: \`docs/klinik/<branş>.md\` (düzenleme oradan yapılır; bu dosya \`node tools/klinik.js\` ile üretilir).

**Açık inceleme maddesi: ${total}** (değişiklik kayıtları hariç)

`;
fs.writeFileSync(path.join(ROOT, 'docs/KLINIK-INCELEME.md'), head + parts.join('\n\n') + '\n');
console.log('KLINIK-INCELEME.md: ' + total + ' madde, ' + parts.length + ' branş');
