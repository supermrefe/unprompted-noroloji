/* Konu dosyalarını tarayıcıdaki gibi yükler (bağımlılıksız). */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const S = require(path.join(ROOT, 'scoring.js'));

function loadCatalog() {
  const ctx = { window: {} }; ctx.window.window = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'terms/index.js'), 'utf8'), ctx, { filename: 'terms/index.js' });
  const W = ctx.window;
  ctx.UP = W.UP;
  const present = [], broken = {};
  for (const b of W.BRANCHES) {
    const f = path.join(ROOT, 'terms', b.id + '.js');
    if (!fs.existsSync(f)) continue;
    try {
      vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: 'terms/' + b.id + '.js' });
      if (!W.UP.data[b.id]) throw new Error(`UP.add({ id: "${b.id}" }) çağrılmıyor`);
      present.push(b.id);
    } catch (e) { broken[b.id] = e.message; delete W.UP.data[b.id]; }
  }
  const terms = [];
  for (const id of present) {
    const d = W.UP.data[id];
    for (const t of d.terms) terms.push(S.compile(Object.assign({}, t, { br: id })));
  }
  return { LEVELS: W.LEVELS, GROUPS: W.GROUPS, BRANCHES: W.BRANCHES, data: W.UP.data, present, broken, terms };
}
function loadFixtures(branchIds) {
  const out = {};
  for (const id of branchIds) {
    const f = path.join(__dirname, 'fixtures', id + '.js');
    if (!fs.existsSync(f)) continue;
    try { Object.assign(out, require(f)); } catch (e) { out['__broken:' + id] = e.message; }
  }
  return out;
}
module.exports = { ROOT, S, loadCatalog, loadFixtures };
