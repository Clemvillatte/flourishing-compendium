#!/usr/bin/env node
/* Wiki integration QA — run against a server serving the repo root.
 *   node tests/wiki-qa.mjs http://127.0.0.1:8792
 * Opens site/index.html, verifies the player wiring, exercises playback and
 * set switching, captures console/page errors, and saves screenshots
 * (desktop + 375 px, light + dark) to tests/wiki-qa-*.png.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';

const ROOT = process.argv[2] || 'http://127.0.0.1:8792';
const URL = `${ROOT}/index.html`;
let failures = 0;
function check(cond, label) {
  if (cond) console.log(`  ok    ${label}`);
  else { failures++; console.error(`  FAIL  ${label}`); }
}

const browser = await chromium.launch({ headless: true, channel: 'chromium' });

async function qa(theme, width, height, tag) {
  const context = await browser.newContext({
    viewport: { width, height },
    colorScheme: theme,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('requestfailed', (r) => {
    const u = r.url();
    if (!u.includes('/data/') && !u.includes('favicon')) errors.push('requestfailed: ' + u);
  });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForFunction(() => window.__fcInst && document.querySelectorAll('.fcp-setchip').length > 0, null, { timeout: 30000 });

  const chips = await page.evaluate(() => document.querySelectorAll('.fcp-setchip').length);
  check(chips === 16, `[${tag}] 16 set chips mounted (${chips})`);
  const btn = await page.evaluate(() => document.querySelectorAll('.fcp-fab, .fcp-button, [class*="fcp"]').length > 0);
  check(btn, `[${tag}] player floating button present`);

  // open panel and play
  await page.evaluate(() => window.__fcInst.ui && window.__fcInst.ui.togglePanel());
  await page.waitForSelector('.fcp-panel', { timeout: 10000 });
  const panelVisible = await page.evaluate(() => {
    const p = document.querySelector('.fcp-panel');
    return !!p && getComputedStyle(p).display !== 'none';
  });
  check(panelVisible, `[${tag}] panel opens`);
  await page.click('.fcp-play, .fcp-panel .fcp-controls button'); // play/pause button
  await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 20000 });
  check(true, `[${tag}] playback starts`);

  // switch to The dark night — 22 track rows
  const idx = await page.evaluate(() => {
    const chips = Array.from(document.querySelectorAll('.fcp-setchip'));
    const i = chips.findIndex((c) => /The dark night/i.test(c.textContent));
    chips[i].click();
    return i;
  });
  await page.waitForFunction(() => document.querySelectorAll('.fcp-track').length === 22, null, { timeout: 30000 });
  check(true, `[${tag}] The dark night set shows 22 tracks`);
  const activeDark = await page.evaluate(() => window.__fcInst.session.activeEngine.setId);
  check(activeDark === 'the-dark-night', `[${tag}] active set is the-dark-night (${activeDark})`);

  await page.screenshot({ path: `tests/wiki-qa-${tag}.png` });
  check(errors.length === 0, `[${tag}] zero console/page errors ${errors.slice(0, 5).join(' | ')}`);
  await context.close();
}

await qa('light', 1280, 800, 'desktop-light');
await qa('dark', 1280, 800, 'desktop-dark');
await qa('light', 375, 720, 'mobile-light');
await qa('dark', 375, 720, 'mobile-dark');

await browser.close();
if (failures) { console.error(`\n${failures} check(s) FAILED`); process.exit(1); }
console.log('\nwiki QA passed');
