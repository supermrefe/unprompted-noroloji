#!/usr/bin/env node
/* Denetim için her konuyu ayrı JSON'a döker: node tools/dump-audit.js <branş> <klasör> → <klasör>/<id>.json, stdout: id listesi (JSON) */
'use strict';
const fs = require('fs'), path = require('path');
const { loadCatalog, loadFixtures } = require('../tests/lib');
const [b, dir] = process.argv.slice(2);
const c = loadCatalog();
if (!c.data[b]) { console.error('branş yüklenemedi: ' + b + (c.broken[b] ? ' · ' + c.broken[b] : '')); process.exit(2); }
const fx = loadFixtures([b]);
fs.mkdirSync(dir, { recursive: true });
const ids = c.data[b].terms.map(t => { fs.writeFileSync(path.join(dir, t.id + '.json'), JSON.stringify({ branch: b, term: t, fixtures: fx[t.id] || {} }, null, 1)); return t.id; });
console.log(JSON.stringify(ids));
