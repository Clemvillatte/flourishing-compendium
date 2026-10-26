/* Exhaustive regression for the deliberate legacy/practicum exceptions.
   BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-legacy-access.qa.cjs */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const isolateRemoteImages = require('./qa-image-network.cjs');
const knownBaselineNetwork = require('./qa-baseline-errors.cjs');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765/';

(async () => {
  const browser = await chromium.launch({ channel: 'chromium' });
  try {
    for (const width of [1280, 375]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      await isolateRemoteImages(ctx, BASE);
      const page = await ctx.newPage();
      const errors = [], baseline = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => {
        if (m.type() !== 'error') return;
        if (knownBaselineNetwork(m, BASE)) baseline.push(m.location().url);
        else errors.push(m.text() + ' ' + m.location().url);
      });
      await page.goto(BASE + '#view=legacy');
      await page.waitForSelector('#bootSplash', { state: 'hidden' });
      const expected = await page.evaluate(() => ({
        degrees: window.fcAcademyData.degrees.filter(d => d.legacy || d.kind === 'practicum').map(d => ({ id: d.id, title: d.title })),
        modules: Object.values(window.fcAcademyData.modules).filter(m => window.fcAcademyData.degrees
          .some(d => d.id === m.degree_id && (d.legacy || d.kind === 'practicum')))
          .map(m => ({ id: m.id, title: m.title, degree: m.degree_id }))
      }));
      for (const d of expected.degrees) {
        assert.equal(await page.evaluate(id => window.__fcAcademyRoute.degree(id), d.id), true, d.id);
        assert.equal(await page.locator('.acad-band-title').innerText(), d.title, d.id);
        assert.equal(await page.evaluate(() => location.hash), '#degree=' + d.id);
      }
      for (const m of expected.modules) {
        assert.equal(await page.evaluate(id => window.__fcAcademyRoute.module(id), m.id), true, m.id);
        assert.equal(await page.locator('.acad-modpage-title').innerText(), m.title, m.id);
        assert.equal(await page.evaluate(() => location.hash), '#module=' + m.id);
        await page.getByRole('button', { name: '← Degree', exact: true }).click();
        assert.equal(await page.evaluate(() => location.hash), '#degree=' + m.degree, m.id);
        assert.ok(await page.locator('.acad-band-title').isVisible(), m.id);
      }
      await page.evaluate(() => window.__fcAcademyRoute.legacy());
      await page.waitForSelector('.acad-hall');
      assert.equal(await page.locator('.acad-hall').count(), 7);
      assert.deepEqual(errors, [], `${width}px legacy access`);
      console.log(`PASS ${width}px: all ${expected.degrees.length} legacy/practicum degree pages, all ${expected.modules.length} existing modules, all module-to-degree back controls and legacy footer destination; no application console errors`);
      if (process.env.QA_LIVE_IMAGES !== '1') console.log('NETWORK FIXTURE: external decorative images only; local artwork and all application content remain live');
      if (baseline.length) console.log('BASELINE NETWORK: ' + JSON.stringify([...new Set(baseline)]));
      await ctx.close();
    }
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
