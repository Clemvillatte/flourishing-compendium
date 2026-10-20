#!/usr/bin/env node
/* FCPlayer regression spec.
 *
 * Run (from the repo root, with a static server already serving it):
 *   npx serve . -l 8791 --no-clipboard &
 *   node tests/spec.mjs
 *
 * Or pass a base URL:  node tests/spec.mjs http://127.0.0.1:8791
 *
 * The fixture is tests/qa.html — 3 synthesized 5-second tones, mounted via
 * window.__inst. Passes are ~15.2s, so wraps and rotations are testable fast.
 * A pass = all 3 tracks; a wrap = the boundary between passes.
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://127.0.0.1:8791';
const QA = (q) => `${BASE}/tests/qa.html${q}`; // q is '' or '#rotate=1' (hash survives server redirects)

let failures = 0;
function check(cond, label) {
  if (cond) console.log(`  ok    ${label}`);
  else { failures++; console.error(`  FAIL  ${label}`); }
}

async function newPage(browser, { recordStarts = false, decodeStub = null, url = null } = {}) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto(url || QA(''), { waitUntil: 'networkidle' });
  if (decodeStub) await page.evaluate(decodeStub);
  if (recordStarts) {
    await page.evaluate(() => {
      window.__starts = []; // {when, dur, idx}
      var os = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function (when, offset) {
        var idx = window.__inst.engine.buffers.indexOf(this.buffer);
        window.__starts.push({ when: when || 0, dur: this.buffer ? this.buffer.duration : 0, idx: idx });
        return os.apply(this, arguments);
      };
    });
  }
  return { page, errors };
}

const playing = (page) => page.evaluate(() => document.querySelector('.fcp-panel').classList.contains('is-playing'));

async function main() {
  const browser = await chromium.launch({ headless: true, channel: 'chromium' });

  /* ---- 1. ordered mode: infinite wrap back to track 0 (audible clock) ---- */
  {
    const { page, errors } = await newPage(browser, { recordStarts: true });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // wait until the audio clock passes the 4th source's START (the wrap is audible)
    await page.waitForFunction(() => {
      var s = window.__starts, e = window.__inst.engine;
      return s.length >= 4 && e.ctx.currentTime >= s[3].when + 0.3;
    }, null, { timeout: 30000 });
    const t = await page.evaluate(() => {
      var s = window.__starts, e = window.__inst.engine;
      return {
        order: s.map((x) => x.idx),
        starts: s.map((x) => +x.when.toFixed(2)),
        loopStart: e._loopStart,
        frontIdx: e._frontIdx,
        highlight: Array.from(document.querySelectorAll('.fcp-track')).findIndex((r) => r.classList.contains('on')),
        pos: +e.position().toFixed(1),
      };
    });
    check(t.order.slice(0, 4).join(',') === '0,1,2,0', `ordered wrap returns to track 0 (order ${t.order.slice(0, 4)})`);
    check(t.loopStart === 0 && t.frontIdx === 0 && t.highlight === 0, `after ordered wrap: loopStart=${t.loopStart} frontIdx=${t.frontIdx} highlight=${t.highlight} (all 0)`);
    check(t.pos < 4, `position is per-pass after wrap (${t.pos}s of ~15.2)`);
    check((await playing(page)), 'still playing after ordered wrap');
    // no overlap between any two consecutive sources
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - 0.005) o++;
      return o;
    });
    check(overlaps === 0, `no overlapping sources (${overlaps})`);
    check(errors.length === 0, `no page errors (ordered) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 2. rotating mode: second pass starts at a rotated track ---- */
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(QA('#rotate=1'), { waitUntil: 'networkidle' });
    await page.evaluate(() => {
      window.__starts = [];
      var os = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function (when, offset) {
        var idx = window.__inst.engine.buffers.indexOf(this.buffer);
        window.__starts.push({ when: when || 0, dur: this.buffer ? this.buffer.duration : 0, idx: idx });
        return os.apply(this, arguments);
      };
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForFunction(() => {
      var s = window.__starts, e = window.__inst.engine;
      return s.length >= 4 && e.ctx.currentTime >= s[3].when + 0.3;
    }, null, { timeout: 30000 });
    const t = await page.evaluate(() => {
      var s = window.__starts, e = window.__inst.engine;
      return {
        order: s.map((x) => x.idx),
        loopStart: e._loopStart,
        frontIdx: e._frontIdx,
        highlight: Array.from(document.querySelectorAll('.fcp-track')).findIndex((r) => r.classList.contains('on')),
      };
    });
    check(t.order[3] !== 0, `rotating wrap starts pass 2 at a rotated track (order ${t.order.slice(0, 4)})`);
    check(t.order[3] === t.loopStart && t.frontIdx === t.loopStart && t.highlight === t.loopStart,
      `rotation consistent: idx3=${t.order[3]} loopStart=${t.loopStart} frontIdx=${t.frontIdx} highlight=${t.highlight}`);
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - 0.005) o++;
      return o;
    });
    check(overlaps === 0, `no overlapping sources (rotating) (${overlaps})`);
    check(errors.length === 0, `no page errors (rotating) ${errors.join('|')}`);
    await context.close();
  }

  /* ---- 2b. rotating mode, deterministic: forced rotation start exposes the
     pass-metadata coupling (a rotated start that coincides with the audible
     pass-final index must not double-wrap or misplace the loop fade) ---- */
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(QA('#rotate=1'), { waitUntil: 'networkidle' });
    // force the rotation pick: Math.random() = 0.99 -> floor(0.99*3) = 2,
    // which coincides with the audible pass-final index (2) for pass 1 (start 0)
    await page.evaluate(() => { Math.random = () => 0.99; });
    await page.evaluate(() => {
      window.__starts = [];
      var os = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function (when, offset) {
        var idx = window.__inst.engine.buffers.indexOf(this.buffer);
        window.__starts.push({ when: when || 0, dur: this.buffer ? this.buffer.duration : 0, idx: idx });
        return os.apply(this, arguments);
      };
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // wait until the clock passes the SEVENTH source's start — source 6 is
    // pass 2's pass-final; source 7 (index 6) is pass 3's rotated start
    await page.waitForFunction(() => {
      var s = window.__starts, e = window.__inst.engine;
      return s.length >= 7 && e.ctx.currentTime >= s[6].when + 0.3;
    }, null, { timeout: 45000 });
    const t = await page.evaluate(() => {
      var s = window.__starts, e = window.__inst.engine;
      return { order: s.map((x) => x.idx), loopStart: e._loopStart, frontIdx: e._frontIdx };
    });
    const prefix = t.order.slice(0, 6).join(',');
    check(prefix === '0,1,2,2,0,1', `forced rotation k=2 yields exactly 0,1,2,2,0,1 (got ${prefix})`);
    check(t.order[6] === 1 && t.loopStart === 1 && t.frontIdx === 1, `pass 3 starts at the forced k=1 and the front tracks it (order[6]=${t.order[6]} loopStart=${t.loopStart} frontIdx=${t.frontIdx})`);
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - 0.005) o++;
      return o;
    });
    check(overlaps === 0, `no overlapping sources (forced rotation) (${overlaps})`);
    check(errors.length === 0, `no page errors (forced rotation) ${errors.join('|')}`);
    await context.close();
  }

  /* ---- 3. pause/resume: exactness + crossing a segment boundary ---- */
  {
    const { page, errors } = await newPage(browser, { recordStarts: true });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // pause near the END of track 1 (~4.4s of 5.06s), resume, and let it cross into track 2
    await page.waitForFunction(() => window.__inst.engine.position() > 4.4, null, { timeout: 15000 });
    const atPause = await page.evaluate(() => {
      var e = window.__inst.engine;
      return { pos: +e.position().toFixed(2), seg: e.segIndex, off: +e.segOffset.toFixed(2) };
    });
    await page.click('.fcp-play'); // pause
    const frozen = await page.evaluate(() => +window.__inst.engine.position().toFixed(2));
    await page.click('.fcp-play'); // resume
    await page.waitForFunction(() => window.__starts.length >= 3 && window.__inst.engine._frontIdx === 1, null, { timeout: 15000 });
    await page.waitForTimeout(400);
    const after = await page.evaluate(() => {
      var e = window.__inst.engine;
      return { pos: +e.position().toFixed(2), frontIdx: e._frontIdx, playing: document.querySelector('.fcp-panel').classList.contains('is-playing') };
    });
    check(Math.abs(frozen - atPause.pos) < 0.05, `pause freezes position (${atPause.pos} -> ${frozen})`);
    check(after.frontIdx === 1, `resumed playback crossed into track 2 (frontIdx ${after.frontIdx})`);
    check(after.pos > frozen, `position advanced after resume across boundary (${frozen} -> ${after.pos})`);
    check((await playing(page)), 'playing after boundary resume');
    check(errors.length === 0, `no page errors (pause/resume) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 4. select / random / stop ---- */
  {
    const { page, errors } = await newPage(browser);
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(800);
    // select track 3
    await page.locator('.fcp-track').nth(2).click();
    await page.waitForTimeout(800);
    let t = await page.evaluate(() => ({ frontIdx: window.__inst.engine._frontIdx, pos: +window.__inst.engine.position().toFixed(1) }));
    check(t.frontIdx === 2, `track selection jumps to the target (frontIdx ${t.frontIdx})`);
    check(t.pos < 2, `selection restarts the pass position (${t.pos})`);
    // random
    await page.click('.fcp-random');
    await page.waitForTimeout(800);
    t = await page.evaluate(() => ({ frontIdx: window.__inst.engine._frontIdx, playing: document.querySelector('.fcp-panel').classList.contains('is-playing') }));
    check([0, 1, 2].includes(t.frontIdx) && t.playing, `random jump lands on a valid track and keeps playing (${t.frontIdx})`);
    // stop
    await page.click('.fcp-stop');
    await page.waitForTimeout(400);
    t = await page.evaluate(() => ({ state: window.__inst.engine.state, pos: document.querySelector('.fcp-pos').textContent, sources: window.__inst.engine.sources.length }));
    check(t.state === 'idle' && t.sources === 0 && t.pos === '0:00', `stop resets to idle at 0:00 with no sources (${JSON.stringify(t)})`);
    const menuHidden = await page.evaluate(() => document.querySelector('.fcp-sets-wrap').hidden);
    check(menuHidden === true, 'single-set mount hides the set menu');
    check(errors.length === 0, `no page errors (controls) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 5. undecoded-track guard: stop during pending decode stays stopped ---- */
  {
    const { page, errors } = await newPage(browser, {
      decodeStub: `(() => {
        var orig = AudioContext.prototype.decodeAudioData;
        var calls = 0;
        window.__release = null;
        AudioContext.prototype.decodeAudioData = function (buf, ok, err) {
          calls++;
          if (calls === 2) { // track 1's decode: hold it until released
            window.__release = { ok: ok, err: err };
            return;
          }
          return orig.call(this, buf, ok, err);
        };
      })()`,
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // jump to track 1 while its decode is held; then STOP before release
    await page.evaluate(() => window.__inst.engine.jumpTo(1));
    await page.waitForFunction(() => window.__release !== null, null, { timeout: 8000 });
    await page.evaluate(() => window.__inst.engine.stop());
    // release the held decode (success path)
    await page.evaluate(() => window.__release.ok(new ArrayBuffer(0))); // invalid buffer -> engine must ignore via gen guard
    await page.waitForTimeout(1000);
    let t = await page.evaluate(() => ({ state: window.__inst.engine.state, sources: window.__inst.engine.sources.length }));
    check(t.state === 'idle' && t.sources === 0, `stopped engine stays idle after released decode (${JSON.stringify(t)})`);
    // same guard on the failure path
    await page.reload({ waitUntil: 'networkidle' });
    await page.evaluate(`(${decodeStubBody})`);
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.evaluate(() => window.__inst.engine.jumpTo(1));
    await page.waitForFunction(() => window.__release !== null, null, { timeout: 8000 });
    await page.evaluate(() => window.__inst.engine.stop());
    await page.evaluate(() => window.__release.err(new Error('late failure')));
    await page.waitForTimeout(1000);
    t = await page.evaluate(() => ({ state: window.__inst.engine.state, sources: window.__inst.engine.sources.length, decodeFailed: window.__inst.engine.decodeFailed }));
    check(t.state === 'idle' && t.sources === 0 && !t.decodeFailed, `stopped engine stays idle after released decode FAILURE, no fallback (${JSON.stringify(t)})`);
    check(errors.length === 0, `no page errors (decode guard) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 6. multi-set: menu, crossfade switching, state survival, resume ---- */
  {
    const { page, errors } = await newPage(browser, {
      recordStarts: true,
      url: `${BASE}/tests/qa-multi.html`
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(1500);
    // set a timer and volume before switching — they must survive the switch
    await page.evaluate(() => { window.__inst.engine.setTimer(25); window.__inst.engine.setVolume(0.5); });
    const posOne = await page.evaluate(() => +window.__inst.engine.position().toFixed(2));
    check(posOne > 0.8, `set one is playing before the switch (pos ${posOne}s)`);
    // switch to set two via the set menu
    await page.locator('.fcp-setchip').nth(1).click();
    // mid-crossfade: both sets audible, gains ramping in opposite directions
    await page.waitForTimeout(700);
    let t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        active: s.activeEngine.setId,
        outGain: s.engines[0].gainNode ? s.engines[0].gainNode.gain.value : null,
        inGain: s.engines[1].gainNode ? s.engines[1].gainNode.gain.value : null,
        outSrc: s.engines[0].sources.length,
        inSrc: s.engines[1].sources.length,
        title: document.querySelector('.fcp-title').textContent,
        timerEnd: s.timerEnd != null,
        vol: s.masterGain ? s.masterGain.gain.value : null,
      };
    });
    check(t.active === 'two', `switch makes set two active immediately (${t.active})`);
    check(t.outGain != null && t.outGain < 0.8 && t.outGain > 0.02, `outgoing set fades out mid-crossfade (gain ${t.outGain && +t.outGain.toFixed(2)})`);
    check(t.inGain != null && t.inGain > 0.05 && t.inGain < 0.95, `incoming set fades in mid-crossfade (gain ${t.inGain && +t.inGain.toFixed(2)})`);
    check(t.outSrc >= 1 && t.inSrc >= 1, `both sets audible during the crossfade (out ${t.outSrc} / in ${t.inSrc} sources)`);
    check(t.title === 'Set two', `panel title follows the switch (${t.title})`);
    check(t.timerEnd === true, 'timer survives the switch');
    check(t.vol != null && Math.abs(t.vol - 0.5) < 0.15, `volume survives the switch (${t.vol && +t.vol.toFixed(2)})`);
    // after the crossfade: outgoing retired (paused, no sources), incoming playing
    await page.waitForTimeout(2200);
    t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        outState: s.engines[0].state, outSrc: s.engines[0].sources.length, outPos: s.engines[0]._pausedPos,
        inState: s.engines[1].state, inSrc: s.engines[1].sources.length,
        playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
        chipOn: Array.from(document.querySelectorAll('.fcp-setchip')).findIndex((c) => c.classList.contains('on')),
      };
    });
    check(t.outState === 'paused' && t.outSrc === 0, `outgoing set retired after the fade (state ${t.outState}, sources ${t.outSrc})`);
    check(t.outPos > 0.8, `outgoing set captured its position for resume (${+t.outPos.toFixed(2)}s)`);
    check(t.inState === 'playing' && t.playing, 'incoming set keeps playing after the fade');
    check(t.chipOn === 1, `set menu highlight follows the switch (chip ${t.chipOn})`);
    // switching back resumes set one where it was captured
    await page.locator('.fcp-setchip').nth(0).click();
    await page.waitForTimeout(2600);
    const back = await page.evaluate(() => ({
      state: window.__inst.session.engines[0].state,
      pos: +window.__inst.engine.position().toFixed(2),
      playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
    }));
    check(back.playing && back.state === 'playing', 'switching back restarts playback of set one');
    check(back.pos > posOne - 0.5, `set one resumed near its captured position (${posOne}s -> ${back.pos}s)`);
    check(errors.length === 0, `no page errors (multi-set) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 7. multi-set: rapid switching + stop during a crossfade ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-multi.html` });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // rapid-fire switching: 2 -> 1 -> 2 within a single crossfade length
    await page.locator('.fcp-setchip').nth(1).click();
    await page.waitForTimeout(150);
    await page.locator('.fcp-setchip').nth(0).click();
    await page.waitForTimeout(150);
    await page.locator('.fcp-setchip').nth(1).click();
    await page.waitForTimeout(3000);
    let t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        active: s.activeEngine.setId,
        states: s.engines.map((e) => e.state),
        sources: s.engines.map((e) => e.sources.length),
        playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
      };
    });
    check(t.active === 'two' && t.states[1] === 'playing', `rapid switching settles on the last pick (${t.active}, states ${t.states})`);
    check(t.sources[0] === 0 && t.states[0] === 'paused', `superseded set retired cleanly (state ${t.states[0]}, sources ${t.sources[0]})`);
    check((await playing(page)), 'still playing after rapid switches');
    check(errors.length === 0, `no page errors (rapid switch) ${errors.join('|')}`);
    // stop DURING a crossfade: everything must go silent and reset
    await page.locator('.fcp-setchip').nth(0).click();
    await page.waitForTimeout(500);
    await page.click('.fcp-stop');
    await page.waitForTimeout(400);
    t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        states: s.engines.map((e) => e.state),
        sources: s.engines.reduce((a, e) => a + e.sources.length, 0),
        pos: document.querySelector('.fcp-pos').textContent,
        playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
      };
    });
    check(t.sources === 0 && !t.playing, `stop during crossfade leaves no sources (${t.sources} sources, playing=${t.playing})`);
    check(t.states[0] === 'idle' && t.pos === '0:00', `stopped mid-crossfade resets the active set (${t.states}, pos ${t.pos})`);
    check(errors.length === 0, `no page errors (stop during fade) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 8. layered sets (stems): independent timelines + solo crossfade ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-layers.html` });
    // record starts per layer (tag = engine index)
    await page.evaluate(() => {
      window.__starts = [];
      var os = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function (when, offset) {
        var ses = window.__inst.session.engines;
        var tag = -1, idx = -1;
        for (var i = 0; i < ses.length; i++) {
          idx = ses[i].buffers.indexOf(this.buffer);
          if (idx >= 0) { tag = i; break; }
        }
        window.__starts.push({ when: when || 0, dur: this.buffer ? this.buffer.duration : 0, layer: tag, idx: idx });
        return os.apply(this, arguments);
      };
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // wait until layer B (longer pass: 18.21 s) has wrapped once and is audible again
    await page.waitForFunction(() => {
      var s = window.__starts.filter((x) => x.layer === 1);
      return s.length >= 4 && window.__inst.session.engines[1].ctx.currentTime >= s[3].when + 0.2;
    }, null, { timeout: 45000 });
    const t = await page.evaluate(() => {
      var s = window.__starts, e = window.__inst.session.engines;
      var pass = e.map((x) => x.buffers.reduce((a, b) => a + b.duration, 0));
      function gcd(a, b) { while (b) { var t2 = a % b; a = b; b = t2; } return a; }
      var sa = Math.round(pass[0] * 44100), sb = Math.round(pass[1] * 44100);
      var lcm = sa * sb / gcd(sa, sb) / 44100;
      var wrap0 = [], wrap1 = [];
      s.forEach((x) => { if (x.layer === 0) wrap0.push(x.when); else wrap1.push(x.when); });
      return {
        order0: s.filter((x) => x.layer === 0).map((x) => x.idx),
        order1: s.filter((x) => x.layer === 1).map((x) => x.idx),
        starts0: wrap0.map((w) => +w.toFixed(2)), starts1: wrap1.map((w) => +w.toFixed(2)),
        pass, lcm, layersUi: !document.querySelector('.fcp-layers-wrap').hidden,
        tracksHidden: document.querySelector('.fcp-tracks').hidden,
        total: document.querySelector('.fcp-total').textContent,
      };
    });
    check(t.layersUi && t.tracksHidden, 'layered mount shows the layer list and hides the track list');
    check(t.total === '\u221e', `layers mode shows an infinite total (${t.total})`);
    // layer A (2 segs x 5.05 s) wraps at 10.1 s; layer B (3 x 6.07 s) at 18.21 s
    const w0 = t.starts0[2], w1 = t.starts1[3];
    check(Math.abs(w0 - 10.1) < 0.35 && Math.abs(w1 - 18.21) < 0.35, `layers wrap on their own timelines (A@${w0}s, B@${w1}s)`);
    check(Math.abs(w0 - w1) > 2, `wrap points are independent — loop drift (${Math.abs(w0 - w1).toFixed(2)}s apart)`);
    check(t.lcm > 3600, `combined cycle exceeds an hour (${(t.lcm / 60).toFixed(0)} min)`);
    // no overlap within each layer's timeline
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0;
      for (var i = 1; i < s.length; i++) {
        if (s[i].layer === s[i - 1].layer && s[i].when < s[i - 1].when + s[i - 1].dur - 0.005) o++;
      }
      return o;
    });
    check(overlaps === 0, `no overlapping sources within a layer (${overlaps})`);
    // solo: crossfade the other layer out, timelines keep running
    await page.locator('.fcp-layer').nth(0).click();
    await page.waitForTimeout(1100);
    let l = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        solo: s._soloIdx,
        g0: s.engines[0].gainNode.gain.value, g1: s.engines[1].gainNode.gain.value,
        src0: s.engines[0].sources.length, src1: s.engines[1].sources.length,
        states: s.engines.map((e) => e.state),
      };
    });
    check(l.solo === 0, `soloing layer 0 registers (${l.solo})`);
    check(l.g1 < 0.15, `non-solo layer crossfaded out (gain ${+l.g1.toFixed(3)})`);
    check(l.g0 > 0.5, `solo layer stays audible (gain ${+l.g0.toFixed(3)})`);
    check(l.src0 >= 1 && l.src1 >= 1 && l.states.every((x) => x === 'playing'), 'solo keeps both timelines running');
    // unsolo: restore
    await page.locator('.fcp-layer').nth(0).click();
    await page.waitForTimeout(1900);
    l = await page.evaluate(() => {
      const s = window.__inst.session;
      return { solo: s._soloIdx, g0: s.engines[0].gainNode.gain.value, g1: s.engines[1].gainNode.gain.value };
    });
    check(l.solo === null, 'unsolo registers');
    check(l.g0 > 0.5 && l.g1 > 0.5, `both layers restored after unsolo (${+l.g0.toFixed(2)} / ${+l.g1.toFixed(2)})`);
    // pause/resume across layers
    const before = await page.evaluate(() => +window.__inst.engine.position().toFixed(2));
    await page.click('.fcp-play'); // pause
    const frozen = await page.evaluate(() => +window.__inst.engine.position().toFixed(2));
    await page.click('.fcp-play'); // resume
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => ({ pos: +window.__inst.engine.position().toFixed(2), playing: document.querySelector('.fcp-panel').classList.contains('is-playing') }));
    check(Math.abs(frozen - before) < 0.1, `pause freezes the session position (${before} -> ${frozen})`);
    check(after.playing && after.pos > frozen, `resume advances the session position (${frozen} -> ${after.pos})`);
    check(errors.length === 0, `no page errors (layers) ${errors.join('|')}`);
    await page.context().close();
  }

  await browser.close();
  if (failures) {
    console.error(`\n${failures} check(s) FAILED`);
    process.exit(1);
  }
  console.log('\nall checks passed');
}

const decodeStubBody = `(() => {
  var orig = AudioContext.prototype.decodeAudioData;
  var calls = 0;
  window.__release = null;
  AudioContext.prototype.decodeAudioData = function (buf, ok, err) {
    calls++;
    if (calls === 2) { window.__release = { ok: ok, err: err }; return; }
    return orig.call(this, buf, ok, err);
  };
})()`;

main().catch((e) => { console.error(e); process.exit(1); });
