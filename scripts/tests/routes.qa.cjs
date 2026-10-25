/* Route QA — view addresses (deep links) + practice gallery 4-column grid.
   Run: node scripts/tests/routes.qa.cjs  (expects a local server on :8765) */
const { chromium } = require('playwright');

const BASE = 'http://localhost:8765/';
const results = [];
function ok(name, cond, extra) { results.push((cond ? 'PASS' : 'FAIL') + '  ' + name + (extra ? '  [' + extra + ']' : '')); }
async function errs(page) { return await page.evaluate(() => window.__errs || ['no collector']); }

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const collected = [];
  page.on('pageerror', e => collected.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') collected.push('console: ' + m.text()); });
  await page.addInitScript(() => { window.__errs = []; window.addEventListener('error', e => window.__errs.push(e.message)); });

  async function go(hash, sel) {
    await page.goto(BASE + hash, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(sel, { timeout: 25000 });
    await page.waitForTimeout(400);
  }

  /* ---- routes restore their page ---- */
  await go('#view=academy', '.acad-hall');
  ok('#view=academy renders Academy home', await page.evaluate(() => document.querySelectorAll('.acad-hall').length === 10));
  ok('#view=academy bar mirrors', (await page.evaluate(() => location.hash)) === '#view=academy');

  /* schema migration 2026-10-25: practica first, divider, then degrees */
  const home = await page.evaluate(() => {
    const secs = [...document.querySelectorAll('#academyRoot .acad-section-title')].map(s => s.textContent);
    const grids = [...document.querySelectorAll('#academyRoot .acad-hall-grid')];
    const first = grids[0] ? [...grids[0].querySelectorAll('.acad-hall-title')].map(t => t.textContent) : [];
    const second = grids[1] ? [...grids[1].querySelectorAll('.acad-hall-title')].map(t => t.textContent) : [];
    const bridge = document.querySelector('a.acad-hall');
    return { secs, first, second, bridgeHref: bridge ? bridge.href : null, bridgeTarget: bridge ? bridge.target : null };
  });
  ok('home shows Practicum then Degrees sections',
    home.secs.length === 2 && home.secs[0] === 'Practicum' && home.secs[1] === 'Degrees', JSON.stringify(home.secs));
  ok('practicum section: qigong, cmp, psych-101 bridge in order',
    home.first.length === 3 && home.first[0].includes('Qi Gong') && home.first[1].includes('Contemplative & Mental Practices') && home.first[2].includes('Psychology 101'),
    JSON.stringify(home.first));
  ok('degrees section: the seven new degrees in owner order',
    home.second.length === 7 && home.second[0] === 'Psychological Dimensions' && home.second[6] === 'A Walk of Life: Positive Psychology',
    JSON.stringify(home.second));
  ok('psych-101 bridge card links straight to the Psychology Lab',
    home.bridgeHref === 'https://the-psychology-lab.vercel.app/' && home.bridgeTarget === '_blank', JSON.stringify(home.bridgeHref));

  /* legacy view: footer link, then every legacy degree reachable */
  await page.click('.acad-colophon button');
  await page.waitForSelector('.acad-hall-grid', { timeout: 15000 });
  const legacy = await page.evaluate(() => ({
    hash: location.hash,
    cards: [...document.querySelectorAll('.acad-hall-grid .acad-hall-title')].map(t => t.textContent)
  }));
  ok('legacy link mirrors #view=legacy', legacy.hash === '#view=legacy');
  ok('legacy view lists all seven superseded programs',
    legacy.cards.length === 7 && legacy.cards.some(c => c.includes('Psychology 101')) && legacy.cards.some(c => c.includes('Practical Philosophy')),
    JSON.stringify(legacy.cards));
  await go('#view=legacy', '.acad-hall-grid');
  ok('#view=legacy restores on fresh load', (await page.evaluate(() => location.hash)) === '#view=legacy');
  await go('#view=academy', '.acad-hall');

  await go('#degree=deg-cmp', '.acad-detail');
  ok('#degree=deg-cmp renders degree', await page.evaluate(() => (document.querySelector('.acad-band-title') || {}).textContent === 'Contemplative & Mental Practices — A Year of Practice'));
  ok('#degree bar mirrors', (await page.evaluate(() => location.hash)) === '#degree=deg-cmp');

  const grid = await page.evaluate(() => {
    const g = document.querySelector('.acad-practice-gallery .gallery-grid');
    const inner = document.querySelector('.acad-inner');
    const card = g.querySelector('.apg-card');
    return {
      cols: getComputedStyle(g).gridTemplateColumns.split(' ').length,
      cards: g.querySelectorAll('.apg-card').length,
      galleryWidth: g.getBoundingClientRect().width,
      innerWidth: inner.clientWidth,
      cardWidth: card ? card.getBoundingClientRect().width : 0
    };
  });
  ok('practice gallery has 4 columns at 1280px', grid.cols === 4, JSON.stringify(grid));
  ok('gallery spans the full page width', grid.galleryWidth >= grid.innerWidth - 76, 'gallery=' + Math.round(grid.galleryWidth) + ' inner=' + grid.innerWidth);
  ok('cards at least as large as before (~230px+)', grid.cardWidth >= 230, 'card=' + Math.round(grid.cardWidth));

  await go('#practice=deg-cmp', '.acad-practice-gallery');
  ok('#practice=deg-cmp bar mirrors', (await page.evaluate(() => location.hash)) === '#practice=deg-cmp');
  const scrolled = await page.evaluate(() => {
    const t = document.querySelector('.acad-practice-gallery').getBoundingClientRect();
    return t.top >= -50 && t.top < 300; // near viewport top after scrollIntoView
  });
  ok('#practice scrolls to the gallery section', scrolled);

  await go('#module=mod-cmp-1', '.acad-modpage-title, .acad-detail');
  ok('#module=mod-cmp-1 renders module page', await page.evaluate(() => document.body.textContent.includes('Foundations')));
  ok('#module bar mirrors', (await page.evaluate(() => location.hash)) === '#module=mod-cmp-1');

  await go('#explorer', '.acad-explorer');
  ok('#explorer renders source explorer', await page.evaluate(() => !!document.querySelector('.acad-explorer')));
  ok('#explorer bar mirrors', (await page.evaluate(() => location.hash)) === '#explorer');

  await go('#view=gallery', '.acad-modpage-title');
  ok('#view=gallery renders discovery gallery', await page.evaluate(() => (document.querySelector('.acad-modpage-title') || {}).textContent === 'Flourishing Gallery'));
  ok('#view=gallery bar mirrors', (await page.evaluate(() => location.hash)) === '#view=gallery');

  await go('#view=rand', '#randView');
  ok('#view=rand renders Randomiser', await page.evaluate(() => document.body.classList.contains('rand-mode')));
  ok('#view=rand bar mirrors', (await page.evaluate(() => location.hash)) === '#view=rand');

  await go('#view=wiki', '#wikiView');
  ok('#view=wiki renders Library', await page.evaluate(() => document.body.classList.contains('wiki-mode')));
  ok('#view=wiki bar mirrors', (await page.evaluate(() => location.hash)) === '#view=wiki');

  await go('#view=graph', '#graphView');
  ok('#view=graph renders Graph', await page.evaluate(() => document.body.classList.contains('graph-mode')));
  ok('graph populated on direct load', await page.evaluate(() => document.querySelectorAll('#graphToggles > *').length > 0));

  /* ---- the graph route races graph.js (loaded last by boot.js) ---- */
  {
    const gctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const gp = await gctx.newPage();
    // delay graph.js so the route applies before the script lands
    await gp.route('**/assets/graph.js*', async route => {
      await new Promise(r => setTimeout(r, 3000));
      await route.continue();
    });
    await gp.goto(BASE + '?race=1#view=graph', { waitUntil: 'domcontentloaded' });
    // without the fix: graph-mode turns on but nothing ever populates
    await gp.waitForFunction(() => document.querySelectorAll('#graphToggles > *').length > 0, null, { timeout: 15000 });
    ok('graph populates when the address beats graph.js to the page', true);
    const gstate = await gp.evaluate(() => ({
      mode: document.body.classList.contains('graph-mode'),
      toggles: document.querySelectorAll('#graphToggles > *').length
    }));
    ok('delayed graph fully active', gstate.mode && gstate.toggles > 0, JSON.stringify(gstate));
    await gctx.close();
  }

  await go('#view=edit', '#editorSidebar');
  ok('#view=edit opens editor sidebar', await page.evaluate(() => document.body.classList.contains('editor-open')));

  await go('#card=Psychological%20flexibility', '.entry-view, #wikiView');
  ok('#card= still opens the card', await page.evaluate(() => (location.hash || '').startsWith('#card=')));
  ok('card address kept in bar', (await page.evaluate(() => location.hash)) === '#card=Psychological%20flexibility');

  /* unknown degree id: fresh load stays on the default view, nothing breaks */
  await page.goto(BASE + '?fresh=1#degree=deg-bogus', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#randView', { state: 'visible', timeout: 20000 });
  ok('unknown degree id leaves default view, nothing breaks', true);
  ok('unknown id keeps its address untouched', (await page.evaluate(() => location.hash)) === '#degree=deg-bogus');

  /* ---- tab clicks mirror into the bar ---- */
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#randView', { timeout: 20000 });
  await page.waitForTimeout(300);
  ok('fresh load with no hash gets #view=rand', (await page.evaluate(() => location.hash)) === '#view=rand');
  await page.click('#tabAcademy');
  await page.waitForSelector('.acad-hall', { timeout: 15000 });
  ok('Academy tab click mirrors #view=academy', (await page.evaluate(() => location.hash)) === '#view=academy');
  await page.evaluate(() => { const cards=[...document.querySelectorAll('.acad-hall')]; const c=cards.find(x => x.textContent.includes('Contemplative & Mental Practices')); c.click(); });
  await page.waitForSelector('.acad-practice-gallery', { timeout: 15000 });
  ok('hall click mirrors #degree=deg-cmp', (await page.evaluate(() => location.hash)) === '#degree=deg-cmp');
  await page.click('#tabRand');
  await page.waitForTimeout(300);
  ok('Randomiser tab click mirrors #view=rand', (await page.evaluate(() => location.hash)) === '#view=rand');
  await page.click('#tabWiki');
  await page.waitForTimeout(300);
  ok('Library tab click mirrors #view=wiki', (await page.evaluate(() => location.hash)) === '#view=wiki');
  // card open keeps its address while in the wiki
  await page.click('#tabAcademy');
  await page.waitForSelector('.acad-hall', { timeout: 15000 });
  // Entering the Academy from another main view renders the home under an
  // ACADEMY highlight (2026-10-25 fix; the deep-page state does not survive
  // a round-trip through the Randomiser and Library). The pre-migration
  // expectation (degree still open) predates that fix and was already
  // failing on origin/main.
  ok('back to Academy mirrors the home', (await page.evaluate(() => location.hash)) === '#view=academy');

  /* ---- mobile 375px ---- */
  const mctx = await browser.newContext({ viewport: { width: 375, height: 700 } });
  const mp = await mctx.newPage();
  await mp.goto(BASE + '#degree=deg-cmp', { waitUntil: 'domcontentloaded' });
  await mp.waitForSelector('.acad-practice-gallery .gallery-grid', { timeout: 25000 });
  await mp.waitForTimeout(400);
  const mgrid = await mp.evaluate(() => {
    const g = document.querySelector('.acad-practice-gallery .gallery-grid');
    return { cols: getComputedStyle(g).gridTemplateColumns.split(' ').length, scrollW: document.documentElement.scrollWidth };
  });
  ok('practice gallery 2 columns at 375px', mgrid.cols === 2, JSON.stringify(mgrid));
  ok('mobile no horizontal overflow beyond known 4px', mgrid.scrollW <= 379, 'scrollW=' + mgrid.scrollW);
  ok('mobile route works', (await mp.evaluate(() => location.hash)) === '#degree=deg-cmp');
  await mctx.close();

  /* ---- errors ---- */
  const e1 = await errs(page);
  ok('zero JS errors across desktop run', collected.length === 0 && e1.length === 0, JSON.stringify(collected.concat(e1)).slice(0, 300));

  await browser.close();
  const fails = results.filter(r => r.startsWith('FAIL')).length;
  console.log(results.join('\n'));
  console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('QA crashed:', e); process.exit(2); });
