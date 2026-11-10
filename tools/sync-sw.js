#!/usr/bin/env node
/* sw.js içindeki BRANCH_FILES listesini terms/ klasöründeki mevcut branş dosyalarıyla eşitler. */
'use strict';
const fs = require('fs'), path = require('path');
const { loadCatalog } = require('../tests/lib');
const ROOT = path.join(__dirname, '..');
const ids = loadCatalog().present;
const p = path.join(ROOT, 'sw.js');
const s = fs.readFileSync(p, 'utf8').replace(/const BRANCH_FILES = \[[^\]]*\];/, `const BRANCH_FILES = [${ids.map(i => `'${i}'`).join(', ')}];`);
fs.writeFileSync(p, s);
console.log('sw.js: ' + ids.length + ' branş dosyası');
