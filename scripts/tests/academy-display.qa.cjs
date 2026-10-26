/* Rendered policy regression tests; isolated in-memory fixtures only.
   python3 scripts/build.py --src .
   BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-display.qa.cjs */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765/';
const SHOTS = process.env.QA_SCREENSHOT_DIR;

(async () => {
  const browser = await chromium.launch({ channel: 'chromium' });
  try {
    for (const width of [1280, 375]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text() + ' ' + m.location().url); });
      let load = 0;
      async function go(hash, selector) {
        // Different hashes alone are same-document navigation, not fresh loads.
        const url = new URL(BASE);
        url.searchParams.set('qa-load', ++load);
        url.hash = hash;
        await page.goto(url.href, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#bootSplash', { state: 'hidden' });
        await page.waitForSelector(selector, { state: 'visible' });
        await page.waitForFunction(() => !!window.__fcAcademyRoute);
      }
      await go('#view=academy', '.acad-hall');
      const unfinished = await page.evaluate(() => window.fcAcademyData.degrees
        .filter(d => d.kind === 'degree' && !d.legacy && d.status !== 'complete')
        .map(d => ({ id: d.id, title: d.title })));
      // All seven are unfinished at initial implementation. Later completions
      // are allowed without weakening the synthetic unpublished-route tests.
      for (const deg of unfinished) {
        assert.equal(await page.locator('#academyRoot').getByText(deg.title, { exact: true }).count(), 0, deg.id);
      }
      assert.equal(await page.locator('#academyRoot').getByText(/degrees now in development|seven degrees above/).count(), 0);
      assert.deepEqual(await page.locator('.acad-section-title').allTextContents(), ['Practicum', 'Degrees']);
      assert.match((await page.locator('.acad-hall-title').allTextContents())[0], /Qi Gong/);
      assert.equal(await page.locator('a.acad-hall').getAttribute('href'), 'https://the-psychology-lab.vercel.app/');
      assert.equal(await page.locator('.acad-colophon a').getAttribute('href'), '#view=legacy');
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/academy-home-${width}.png`, fullPage: true });
      await page.locator('.acad-colophon a').click();
      await page.waitForSelector('.acad-modpage-title');
      assert.equal(await page.locator('.acad-hall-title').count(), 7);
      await page.locator('.acad-hall').filter({ hasText: 'Practical Philosophy' }).click();
      await page.waitForSelector('.acad-band-title');
      assert.match(await page.locator('.acad-band-title').innerText(), /Practical Philosophy/);
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/academy-legacy-${width}.png`, fullPage: true });
      // Both fresh loads and hash changes must refuse each unpublished id.
      for (const deg of unfinished) {
        for (const prefix of ['#degree=', '#practice=']) {
          await go(prefix + deg.id, '#randView');
          assert.equal(await page.locator('#academyRoot .acad-band-title').count(), 0, prefix + deg.id);
          await page.locator('#tabAcademy').click();
          await page.waitForSelector('.acad-colophon');
          await page.evaluate(hash => { location.hash = hash; }, prefix + deg.id);
          await page.waitForTimeout(50);
          assert.equal(await page.locator('#academyRoot .acad-band-title').count(), 0, 'hash ' + deg.id);
        }
      }
      await go('#degree=deg-cmp', '.acad-practice-gallery');
      if (SHOTS) await page.screenshot({ path: `${SHOTS}/academy-practicum-${width}.png`, fullPage: true });
      assert.ok(await page.locator('.apg-card').count() > 0);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 4));
      await go('#degree=deg-qigong', '.acad-band-title');
      assert.match(await page.locator('.acad-band-title').innerText(), /Qi Gong/);
      await go('#module=mod-cmp-1', '.acad-modpage-title');
      await go('#module=mod-phil-1', '.acad-modpage-title');
      await go('#view=wiki', '#wikiView');
      assert.ok(await page.locator('body').evaluate(b => b.classList.contains('wiki-mode')));
      // Install fixtures after the real dataset loads, using only page memory.
      await page.evaluate(() => {
        const data = window.fcAcademyData;
        data.degrees.push({ id: 'qa-only', title: 'QA complete fixture', kind: 'degree',
          status: 'in-development', modules: ['qa-only-module'] });
        data.modules['qa-only-module'] = { id: 'qa-only-module', degree_id: 'qa-only',
          title: 'QA fixture module', requiredMedia: [], optionalMedia: [], outcomes: [] };
      });
      assert.equal(await page.evaluate(() => window.__fcAcademyRoute.degree('qa-only')), false);
      assert.equal(await page.evaluate(() => window.__fcAcademyRoute.degree('qa-only', true)), false);
      assert.equal(await page.evaluate(() => window.__fcAcademyRoute.module('qa-only-module')), false);
      await page.evaluate(() => {
        window.fcAcademyData.degrees.find(d => d.id === 'qa-only').status = 'complete';
        window.__fcAcademyRoute.home();
      });
      await page.waitForSelector('.acad-hall');
      await page.locator('.acad-hall').filter({ hasText: 'QA complete fixture' }).click();
      assert.equal(await page.locator('.acad-band-title').innerText(), 'QA complete fixture');
      assert.equal(await page.evaluate(() => window.__fcAcademyRoute.module('qa-only-module')), true);
      await page.waitForSelector('.acad-modpage-title');
      // Stale module page: demotion before the back button must not expose
      // the degree through the renderer, even without passing the route API.
      await page.evaluate(() => { window.fcAcademyData.degrees.find(d => d.id === 'qa-only').status = 'draft'; });
      await page.getByRole('button', { name: '← Degree', exact: true }).click();
      await page.waitForSelector('.acad-empty');
      assert.equal(await page.locator('.acad-band-title').count(), 0);
      assert.equal(await page.locator('.acad-practice-gallery').count(), 0);
      await page.evaluate(() => {
        const deg = window.fcAcademyData.degrees.find(d => d.id === 'qa-only');
        deg.status = 'complete'; deg.modules = ['missing-module'];
      });
      assert.equal(await page.evaluate(() => window.__fcAcademyRoute.degree('qa-only')), false);
      // Synthetic unpublished fresh-load module route, injected before boot.
      await page.route('**/assets/app.js*', async route => {
        const response = await route.fetch();
        const body = await response.text();
        const marker = 'function moduleById(';
        const insertion = `window.fcAcademyData.degrees.push({id:'qa-hidden',title:'QA hidden',kind:'degree',status:'draft',modules:['qa-hidden-mod']});
window.fcAcademyData.modules['qa-hidden-mod']={id:'qa-hidden-mod',degree_id:'qa-hidden',title:'Must not render'};
`;
        await route.fulfill({ response, body: body.replace(marker, insertion + marker) });
      });
      await go('#module=qa-hidden-mod', '#randView');
      assert.equal(await page.locator('#academyRoot .acad-modpage-title').count(), 0);
      await page.unroute('**/assets/app.js*');
      assert.deepEqual(errors, [], `${width}px browser errors`);
      console.log(`PASS ${width}px: complete-only home, unpublished degree/practice/module routes, hash navigation, completion fixture, stale-render guard, legacy/practica/Library, no console errors`);
      await ctx.close();
    }
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
