#!/usr/bin/env node
/* Telefon görünümü (390×844, Android Chrome) duman testi + ekran görüntüleri (tests/screens/).
   Kontroller: sayfa hatasız açılır, tüm branşlar yüklenir, branş seçimi kalıcıdır ve havuzu/haritayı/günlük seti filtreler,
   araştırma ekranında İngilizce ad + 2 kitap + 2 makale görünür, yatay kaydırma yoktur. */
'use strict';
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { serve } = require('./serve');
const { loadCatalog } = require('./lib');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'screens');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const cat = loadCatalog();
  const S = await serve(ROOT);
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  let fails = 0; const check = (ok, msg) => { console.log((ok ? '✓ ' : '✗ ') + msg); if (!ok) fails++; };
  const noHScroll = async where => check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${where}: yatay kaydırma yok`);
  const ready = () => page.waitForFunction(() => window.__upn && window.__upn.ready);

  await page.goto(S.url); await ready();
  const info = await page.evaluate(() => ({ n: window.__upn.terms, br: window.__upn.branches }));
  check(info.n === cat.terms.length, `tüm konular yüklendi (${info.n}/${cat.terms.length})`);
  check(info.br.length === cat.present.length, `tüm branşlar yüklendi (${info.br.length})`);
  check((await page.title()) === 'Unprompted Tıp', 'başlık "Unprompted Tıp"');
  await noHScroll('ana sayfa');
  await page.screenshot({ path: path.join(OUT, '1-ana-sayfa.png') });
  await page.screenshot({ path: path.join(OUT, '1b-ana-sayfa-tam.png'), fullPage: true });

  // branş seçimi
  await page.click('#scope-edit');
  await page.waitForSelector('#branches[open]');
  await noHScroll('branş seçimi');
  await page.screenshot({ path: path.join(OUT, '2-brans-secimi.png') });
  const pick = cat.present.slice(0, Math.min(2, cat.present.length));
  await page.click('#br-none');
  for (const b of pick) await page.check(`#br-groups input[value="${b}"]`);
  await page.click('#br-ok');
  const want = cat.terms.filter(t => pick.includes(t.br)).length;
  check(await page.evaluate(() => window.__upn.pool()) === want, `seçim havuzu filtreler (${pick.join(' + ')} = ${want} konu)`);
  check((await page.$$('.br-block')).length === pick.length, 'harita yalnız seçili branşları gösteriyor');
  const daily = await page.evaluate(() => JSON.parse(localStorage.getItem('upn:daily')).ids);
  check(daily.every(id => pick.includes(cat.terms.find(t => t.id === id).br)), 'günün 3\'lüsü seçili branşlardan');
  await page.reload(); await ready();
  check(await page.evaluate(() => window.__upn.pool()) === want, 'seçim yeniden yüklemede kalıcı');
  console.log('  çalışma alanı: ' + (await page.textContent('#scope-text')) + ' · ' + (await page.textContent('#scope-sub')));

  // zar + araştırma ekranı
  await page.click('#btn-roll');
  await page.waitForSelector('#btn-go:not([hidden])');
  await page.click('#btn-go');
  await page.waitForSelector('#v-research:not([hidden])');
  const id = await page.evaluate(() => JSON.parse(localStorage.getItem('upn:session')).id);
  const t = cat.terms.find(x => x.id === id);
  check(t && pick.includes(t.br), `zar seçili branştan konu getirdi (${id})`);
  const en = await page.textContent('#r-en2');
  check(en === t.en && en.length > 0, `araştırma ekranında İngilizce ad: ${en}`);
  if (t.src) check(await page.$$eval('#r-sources li', l => l.length) === 4, 'araştırma ekranında 2 kitap + 2 makale');
  await noHScroll('araştırma');
  await page.screenshot({ path: path.join(OUT, '3-arastirma.png') });
  await page.screenshot({ path: path.join(OUT, '3b-arastirma-tam.png'), fullPage: true });

  // tüm tıp + harita
  await page.click('[data-act="home"]');
  await page.click('#resume-drop');
  await page.click('#scope-edit'); await page.click('#br-all'); await page.click('#br-ok');
  check(await page.evaluate(() => window.__upn.pool()) === cat.terms.length, 'tüm tıp karışık seçilince tüm havuz');
  await page.evaluate(() => document.querySelector('#map').scrollIntoView());
  await noHScroll('harita');
  await page.screenshot({ path: path.join(OUT, '4-harita.png') });
  check(errors.length === 0, 'konsol/sayfa hatası yok' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await browser.close(); S.close();
  console.log(fails ? `HATA: ${fails}` : 'TAMAM');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
