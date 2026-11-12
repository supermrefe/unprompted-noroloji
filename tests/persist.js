#!/usr/bin/env node
/* İlerleme korunuyor mu? Gerçek senaryo:
   1. İlk sürüm (Unprompted Nöroloji, commit 42b5d9d) tarayıcıda açılır, bir konu araştırılır, not yazılır, yazılı anlatımla geçilir.
   2. Aynı adreste (aynı origin, aynı localStorage) yeni sürüm açılır.
   3. Skor, seri, XP, tekrar takvimi, geçmiş ve notlar aynen okunmalı; localStorage verisi değişmemeli. */
'use strict';
const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');
const { serve } = require('./serve');
const ROOT = path.join(__dirname, '..');
const OLD = '42b5d9d';

(async () => {
  const oldDir = fs.mkdtempSync(path.join(os.tmpdir(), 'upn-old-'));
  execSync(`git -C "${ROOT}" archive ${OLD} | tar -x -C "${oldDir}"`);
  const S = await serve(oldDir);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  let fails = 0; const check = (ok, msg) => { console.log((ok ? '✓ ' : '✗ ') + msg); if (!ok) fails++; };

  // --- eski sürüm ---
  await page.goto(S.url);
  await page.waitForFunction(() => window.__upn);
  await page.click('[data-term="migren"]');
  await page.fill('#r-notes', 'Migren notum: tek taraflı zonklayıcı, aura, triptan.');
  await page.click('#r-done');
  await page.click('#type-instead');
  await page.fill('#typed', 'Migren tekrarlayan ataklarla seyreden primer bir baş ağrısıdır. Tek taraflı zonklayıcı ağrı 4 ile 72 saat sürer. Bulantı kusma fotofobi fonofobi olur. Aura görülebilir. Trigeminovasküler sistem ve CGRP rol oynar. Akut tedavide triptan ve NSAİİ, profilakside propranolol topiramat amitriptilin kullanılır.');
  await page.click('#typed-submit');
  await page.waitForSelector('#v-result:not([hidden])');
  await page.click('[data-act="home"]');
  const before = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith('upn:')).map(k => [k, localStorage.getItem(k)])));
  const oldHead = { xp: await page.textContent('#m-xp'), streak: await page.textContent('#m-streak') };
  check(JSON.parse(before['upn:prog']).migren, `eski sürümde migren kaydı oluştu (skor %${Math.round(JSON.parse(before['upn:prog']).migren.best * 100)},${oldHead.xp}, seri ${oldHead.streak})`);

  // --- yeni sürüm, aynı origin ---
  S.setRoot(ROOT);
  await page.goto(S.url);
  await page.waitForFunction(() => window.__upn && window.__upn.ready);
  const after = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith('upn:')).map(k => [k, localStorage.getItem(k)])));
  for (const k of ['upn:prog', 'upn:hist', 'upn:xp', 'upn:streak', 'upn:notes:migren', 'upn:daily', 'upn:settings'])
    check(after[k] === before[k], `${k} aynen korundu`);
  check(await page.textContent('#m-xp') === oldHead.xp, `XP başlıkta aynı: ${oldHead.xp}`);
  check(await page.textContent('#m-streak') === oldHead.streak, `seri başlıkta aynı: ${oldHead.streak}`);
  const prog = JSON.parse(after['upn:prog']).migren;
  check(await page.$eval('[data-term="migren"] .dot', el => el.className.includes('s-pass') || el.className.includes('s-master')), 'haritada migren "geçti" görünüyor');
  check((await page.textContent('#hist')).includes('Migren'), 'geçmişte migren anlatımı görünüyor');
  check((await page.textContent('#due-list')).includes('Migren'), `tekrar takvimi okundu (sıradaki tekrar ${prog.due})`);
  await page.evaluate(() => { const d = document.querySelector('[data-term="migren"]').closest('details'); if (d) d.open = true; });
  await page.click('[data-term="migren"]');
  check(await page.inputValue('#r-notes') === 'Migren notum: tek taraflı zonklayıcı, aura, triptan.', 'araştırma notu aynen geldi');
  check(errors.length === 0, 'sayfa hatası yok' + (errors.length ? ': ' + errors.join(' | ') : ''));

  await browser.close(); S.close();
  fs.rmSync(oldDir, { recursive: true, force: true });
  console.log(fails ? `HATA: ${fails}` : 'TAMAM: eski sürümün ilerlemesi yeni sürümde aynen okunuyor');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
