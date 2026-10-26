/* Browser regression: publication cannot depend on progress/storage, and
   alternate collections must not expose unfinished curriculum metadata.
   BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-storage-search.qa.cjs */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const knownBaselineNetwork = require('./qa-baseline-errors.cjs');
const isolateRemoteImages = require('./qa-image-network.cjs');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765/';

(async () => {
  const browser = await chromium.launch({ channel: 'chromium' });
  try {
    for (const width of [1280, 375]) {
      for (const storage of ['normal', 'blocked', 'quota-full', 'corrupt', 'stale-progress']) {
        const ctx = await browser.newContext({ viewport: { width, height: 900 } });
        await isolateRemoteImages(ctx, BASE);
        await ctx.addInitScript(mode => {
          if (mode === 'blocked') {
            Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('QA denied', 'SecurityError'); } });
          } else if (mode === 'quota-full') {
            Storage.prototype.setItem = function () { throw new DOMException('QA full', 'QuotaExceededError'); };
          } else if (mode === 'corrupt') {
            localStorage.setItem('acadWatched', '{not valid json');
            localStorage.setItem('fcPracticeFavs', '{"not":"an array"}');
          } else if (mode === 'stale-progress') {
            localStorage.setItem('acadWatched', JSON.stringify(['deg-psychdim', 'deg-wol-daoism', 'qa-hidden-mod', 'CMP-M01-01']));
          }
        }, storage);
        const page = await ctx.newPage();
        const errors = [], baseline = [];
        page.on('pageerror', e => errors.push(e.message));
        page.on('console', m => {
          if (m.type() !== 'error') return;
          if (knownBaselineNetwork(m, BASE)) baseline.push(m.location().url);
          else errors.push(m.text() + ' ' + m.location().url);
        });
        await page.goto(BASE + '#view=academy');
        await page.waitForSelector('#bootSplash', { state: 'hidden' });
        await page.waitForSelector('.acad-colophon');
        const hidden = await page.evaluate(() => window.fcAcademyData.degrees
          .filter(d => !d.legacy && d.kind === 'degree' && d.status !== 'complete')
          .map(d => ({ id: d.id, title: d.title })));
        const snapshot = await page.evaluate(() => ({
          sourceCount: window.fcAcademyData.sources.length,
          moduleCount: Object.keys(window.fcAcademyData.modules).length
        }));
        for (const d of hidden) {
          assert.equal(await page.locator('#academyRoot').getByText(d.title, { exact: true }).count(), 0);
          assert.equal(await page.evaluate(id => window.__fcAcademyRoute.degree(id), d.id), false);
        }
        // Unrecognised topic ids / nested query encodings must not turn into
        // a bypass when an alternate view is already open.
        for (const hash of ['#topic=deg-wol-greek', '#view=academy&degree=deg-wol-positive',
          '#degree=deg-wol-existentialism%3Ftopic%3Dall', '#module=mod-unknown-new']) {
          await page.evaluate(h => { location.hash = h; }, hash);
          await page.waitForTimeout(30);
          assert.equal(await page.locator('#academyRoot .acad-band-title').count(), 0, hash);
          assert.equal(await page.locator('#academyRoot .acad-modpage-title').count(), 0, hash);
        }
        await page.evaluate(() => window.__fcAcademyRoute.explorer());
        await page.waitForSelector('#acadSourceGrid .acad-source-card');
        assert.equal(await page.evaluate(() => window.fcAcademyData.sources.length), snapshot.sourceCount);
        const sourceSearch = page.getByRole('searchbox', { name: 'Search sources' });
        for (const d of hidden) {
          await sourceSearch.fill(d.title);
          assert.equal(await page.locator('#acadSourceGrid .acad-source-card').count(), 0, d.id);
        }
        await sourceSearch.fill('');
        assert.ok(await page.locator('#acadSourceGrid .acad-source-card').count() > 0);
        const options = await page.locator('.acad-explorer-select').first().locator('option').evaluateAll(os => os.map(o => o.value));
        assert.ok(options.length > 1);
        assert.ok(hidden.every(d => !options.includes(d.id)));
        // Existing topic filtering remains functional.
        await page.locator('.acad-explorer-select').first().selectOption(options[1]);
        assert.ok(await page.locator('#acadSourceGrid .acad-source-card').count() > 0);
        await page.evaluate(() => window.__fcAcademyRoute.gallery());
        await page.waitForSelector('.gallery-card');
        const gallerySearch = page.getByPlaceholder('Search gallery…');
        for (const d of hidden) {
          await gallerySearch.fill(d.title);
          assert.equal(await page.locator('.gallery-card').count(), 0, d.id);
        }
        await gallerySearch.fill('');
        assert.ok(await page.locator('.gallery-card').count() > 0);
        assert.equal(await page.evaluate(() => Object.keys(window.fcAcademyData.modules).length), snapshot.moduleCount);
        // Learner progress and collection controls remain usable.
        await page.evaluate(() => window.__fcAcademyRoute.degree('deg-cmp'));
        await page.waitForSelector('.apg-card');
        assert.ok(await page.locator('.acad-practice-gallery').isVisible());
        await page.locator('.apg-fav').first().click();
        assert.equal(await page.locator('.apg-fav').first().getAttribute('aria-pressed'), 'true');
        await page.getByRole('button', { name: /Favourites/ }).click();
        assert.equal(await page.locator('.apg-card').count(),
          ['blocked', 'quota-full'].includes(storage) ? 0 : 1,
          'Unavailable storage degrades to an empty saved list, not an exception');
        await page.getByRole('button', { name: 'All practices', exact: true }).click();
        assert.ok(await page.locator('.apg-card').count() > 0);
        await page.locator('.apg-chip').nth(1).click();
        assert.ok(await page.locator('.apg-card').count() > 0);
        assert.equal(await page.evaluate(() => window.__fcAcademyRoute.module('mod-cmp-1')), true);
        await page.waitForSelector('.acad-complete-toggle input');
        await page.locator('.acad-complete-toggle input').check();
        assert.equal(await page.locator('.acad-complete-toggle input').isChecked(), true);
        // Completion is learner progress, never permission to publish a degree.
        for (const d of hidden) {
          assert.equal(await page.evaluate(id => window.__fcAcademyRoute.degree(id), d.id), false);
        }
        await page.locator('#tabWiki').click();
        await page.waitForSelector('#wikiView', { state: 'visible' });
        await page.locator('#tabAcademy').click();
        await page.waitForSelector('.acad-colophon');
        assert.equal(await page.locator('.acad-hall-grid').first().locator('.acad-hall').count(), 3);
        assert.deepEqual(errors, [], `${width}px ${storage}`);
        console.log(`PASS ${width}px ${storage}: hidden degrees stay hidden; unsupported indirect routes fail closed; source/discovery searches & topic filter work; Library/CMP usable; no application console errors`);
        if (process.env.QA_LIVE_IMAGES !== '1') console.log('NETWORK FIXTURE: external decorative images only; local artwork and all application content remain live');
        if (baseline.length) console.log('BASELINE NETWORK: ' + JSON.stringify([...new Set(baseline)]));
        await ctx.close();
      }
    }
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
