#!/usr/bin/env node
/* Wiki integration QA — exercises the deployed wiring on the real wiki page.
 *
 * The wiki (site/) is served as the DOMAIN ROOT (its asset URLs are
 * root-relative — serving the repo root breaks them), after building the
 * data: `python3 scripts/build.py --src . --version test` (site/data/ is a
 * deploy artifact and .gitignored — without it the boot splash never lifts
 * and it swallows clicks).
 *
 *   cd soundscape-player && node tests/wiki-qa.mjs http://127.0.0.1:8792
 *
 * Opens the wiki page (1280 and 375 px, light and dark themes), then:
 * opens the panel via the floating button, starts playback and verifies the
 * position advances, switches to The dark night (22 tracks) and verifies the
 * switch settles, stops and verifies the engine goes idle, navigates the
 * wiki's own tabs and verifies the player survives, and on mobile asserts
 * the floating button clears the fixed bottom tab bar. Zero console/page
 * errors throughout. Screenshots are written to tests/wiki-qa-<tag>.png.
 */
import { chromium } from 'playwright';

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

  // open the panel via the real floating button
  await page.click('.fcp-btn');
  await page.waitForSelector('.fcp-panel', { timeout: 10000 });
  check(true, `[${tag}] panel opens via the floating button`);

  // play via the real transport button; verify the position advances
  await page.click('.fcp-panel .fcp-play');
  await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 20000 });
  check(true, `[${tag}] playback starts (panel is-playing)`);
  const [p1, p2] = await page.evaluate(async () => {
    const t = () => window.__fcInst.session.activeEngine.position();
    const a = t();
    await new Promise((r) => setTimeout(r, 1200));
    return [a, t()];
  });
  check(p2 > p1, `[${tag}] playback position advances (${p1.toFixed(2)} -> ${p2.toFixed(2)})`);

  // switch to The dark night — 22 track rows, switch settles
  await page.evaluate(() => {
    const chips = Array.from(document.querySelectorAll('.fcp-setchip'));
    chips.find((c) => /The dark night/i.test(c.textContent)).click();
  });
  await page.waitForFunction(() => window.__fcInst.session.activeEngine.setId === 'the-dark-night', null, { timeout: 30000 });
  await page.waitForFunction(() => document.querySelectorAll('.fcp-track').length === 22, null, { timeout: 30000 });
  check(true, `[${tag}] The dark night switch settles (22 tracks, playing)`);

  // stop via the real transport button; engine idle
  await page.click('.fcp-panel .fcp-stop');
  await page.waitForFunction(() => window.__fcInst.session.activeEngine.state === 'idle', null, { timeout: 20000 });
  check(true, `[${tag}] stop settles to idle`);

  // the wiki's own navigation must survive the player (SPA + mount coexistence)
  await page.evaluate(() => {
    const tabs = Array.from(document.querySelectorAll('#viewTabs .vt-item, #viewTabs a, #viewTabs button'));
    const t = tabs.find((x) => /Academy/i.test(x.textContent));
    if (t) t.click();
  });
  await page.waitForTimeout(800);
  const survived = await page.evaluate(() => ({
    inst: !!window.__fcInst,
    fab: !!document.querySelector('.fcp-btn'),
    panel: !!document.querySelector('.fcp-panel'),
    errors: (window.__fcErrors || []).length,
  }));
  check(survived.inst && survived.fab && survived.panel && survived.errors === 0, `[${tag}] player survives wiki tab navigation`);

  // mobile: the floating button must clear the fixed bottom tab bar,
  // and the panel must stay inside the viewport
  if (width <= 480) {
    const clearance = await page.evaluate(() => {
      const fab = document.querySelector('.fcp-btn').getBoundingClientRect();
      const tabs = document.getElementById('viewTabs');
      const tabsTop = tabs ? tabs.getBoundingClientRect().top : 0;
      const panel = document.querySelector('.fcp-panel').getBoundingClientRect();
      return { fabBottom: fab.bottom, tabsTop, panelTop: panel.top, vh: window.innerHeight };
    });
    check(clearance.fabBottom <= clearance.tabsTop, `[${tag}] floating button clears the tab bar (${clearance.fabBottom.toFixed(0)} <= ${clearance.tabsTop.toFixed(0)})`);
    check(clearance.panelTop >= 0, `[${tag}] panel fits the viewport (top ${clearance.panelTop.toFixed(0)})`);
  }

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
