#!/usr/bin/env node
/* Tek anlatımı puanlar: node tests/score.js <konu-id> <metin-dosyası> */
'use strict';
const fs = require('fs');
const { S, loadCatalog } = require('./lib');
const { dictate } = require('./dictation');
const [id, file] = process.argv.slice(2);
const t = loadCatalog().terms.find(x => x.id === id);
if (!t) { console.error('konu yok: ' + id); process.exit(2); }
const text = fs.readFileSync(file, 'utf8');
for (const [name, tx] of [['metin', text], ['dikte', dictate(text)]]) {
  const r = S.evaluate(t, tx);
  console.log(`${name}: %${Math.round(r.score * 100)} · ${r.words} kelime · yakalanan: ${r.concepts.filter(c => c.hit).map(c => c.label).join(' / ') || '-'} · atlanan: ${r.concepts.filter(c => !c.hit).map(c => (c.core ? '[temel] ' : '') + c.label).join(' / ') || '-'}`);
}
