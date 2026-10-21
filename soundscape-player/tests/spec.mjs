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
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const BASE = process.argv[2] || 'http://127.0.0.1:8791';
const QA = (q) => `${BASE}/tests/qa.html${q}`; // q is '' or '#rotate=1' (hash survives server redirects)
const REPO_ROOT = path.resolve(fileURLToPath(new URL('../..', import.meta.url))); // <repo>/soundscape-player/tests/../..

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
      window.__starts = []; // {when, dur, idx, set}
      var os = AudioBufferSourceNode.prototype.start;
      AudioBufferSourceNode.prototype.start = function (when, offset) {
        var ses = (window.__inst.session && window.__inst.session.engines) || [];
        var set = -1, idx = -1;
        for (var i = 0; i < ses.length; i++) {
          idx = ses[i].buffers.indexOf(this.buffer);
          if (idx >= 0) { set = i; break; }
        }
        if (set < 0) idx = window.__inst.engine.buffers.indexOf(this.buffer);
        window.__starts.push({ when: when || 0, dur: this._fcpSchedDur || (this.buffer ? this.buffer.duration : 0), offset: offset || 0, idx: idx, set: set });
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
    // no overlap between any two consecutive sources, beyond the designed
    // junction crossfade (junctionFade seconds, equal-power overlap)
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0;
      var jf = (window.__inst.session.engines[0] && window.__inst.session.engines[0].opts.junctionFade) || 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - jf - 0.005) o++;
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
        window.__starts.push({ when: when || 0, dur: this._fcpSchedDur || (this.buffer ? this.buffer.duration : 0), idx: idx });
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
      var jf = (window.__inst.session.engines[0] && window.__inst.session.engines[0].opts.junctionFade) || 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - jf - 0.005) o++;
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
        window.__starts.push({ when: when || 0, dur: this._fcpSchedDur || (this.buffer ? this.buffer.duration : 0), idx: idx });
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
      var jf = (window.__inst.session.engines[0] && window.__inst.session.engines[0].opts.junctionFade) || 0;
      for (var i = 1; i < s.length; i++) if (s[i].when < s[i - 1].when + s[i - 1].dur - jf - 0.005) o++;
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
    // segment-level resume check: the first source scheduled after returning
    // must start in the captured segment (or its successor), proving the set
    // resumed mid-pass rather than restarting from track 1
    const resumedIdx = await page.evaluate(() => {
      const s = window.__starts.filter((x) => x.set === 0);
      const eng = window.__inst.session.engines[0];
      const front = eng._frontIdx;
      return { snap: front, first: s[s.length - 1].idx, state: eng.state };
    });
    check(resumedIdx.first === resumedIdx.snap || resumedIdx.first === (resumedIdx.snap + 1) % 3,
      `resume is mid-pass, not a restart (front seg ${resumedIdx.snap}, last started ${resumedIdx.first})`);
    // mount-level engine options must survive into the engine (regression:
    // single-set wrapper used to drop loopFadeOut/lookahead etc.)
    const optsOk = await page.evaluate(() => {
      var i2 = FCPlayer.mount({ loopFadeOut: 1.5, lookahead: 3.5, segments: ['fixtures/m1_0.wav', 'fixtures/m1_1.wav'] });
      return i2.engine.opts.loopFadeOut === 1.5 && i2.engine.opts.lookahead === 3.5 && i2.engine.opts.poll === 200;
    });
    check(optsOk, 'mount-level engine options (loopFadeOut, lookahead) reach the engine');
    check(errors.length === 0, `no page errors (multi-set) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 7. multi-set: rapid switching + stop during a crossfade ---- */
  {
    const { page, errors } = await newPage(browser, { recordStarts: true, url: `${BASE}/tests/qa-multi.html` });
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
    // scheduler integrity after the rapid A->B->A dance: set one's source
    // sequence must still advance 0->1->2->0 (a corrupted scheduling cursor
    // would replay or skip a segment)
    await page.waitForTimeout(1200);
    const seq = await page.evaluate(() => {
      var s = window.__starts.filter((x) => x.set === 0).map((x) => x.idx);
      var bad = 0;
      for (var i = 1; i < s.length; i++) if ((s[i] - s[i - 1] + 3) % 3 !== 1) bad++;
      return { seq: s, bad: bad };
    });
    check(seq.bad === 0, `set one's scheduler cursor survived the rapid switches (sequence ${seq.seq.join(',')})`);
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
        window.__starts.push({ when: when || 0, dur: this._fcpSchedDur || (this.buffer ? this.buffer.duration : 0), layer: tag, idx: idx });
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
      var pass = e.map((x) => x.buffers.reduce((a, b) => a + x._spanOf(b).duration, 0) - (x.buffers.length - 1) * x.opts.junctionFade); // scheduled period: content minus internal overlaps
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
    // no overlap within each layer's timeline (grouped by layer — records
    // from different layers interleave, so consecutive records can't be compared)
    const overlaps = await page.evaluate(() => {
      var s = window.__starts, o = 0, byLayer = {};
      s.forEach((x) => { (byLayer[x.layer] = byLayer[x.layer] || []).push(x); });
      Object.keys(byLayer).forEach((k) => {
        var g = byLayer[k];
        var jf = (window.__inst.session.engines[0] && window.__inst.session.engines[0].opts.junctionFade) || 0;
        for (var i = 1; i < g.length; i++) if (g[i].when < g[i - 1].when + g[i - 1].dur - jf - 0.005) o++;
      });
      return o;
    });
    check(overlaps === 0, `no overlapping sources within a layer (${overlaps})`);
    // solo: crossfade the other layer out, timelines keep running (equal-power
    // cosine fall reaches near-zero only at the end of soloFade — 1.5 s here)
    await page.locator('.fcp-layer').nth(0).click();
    await page.waitForTimeout(1700);
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

  /* ---- 9. timer lifecycle: stop cancels the timer; expiry fade cannot kill a restart ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-multi.html` });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // stop must cancel the session timer outright
    await page.evaluate(() => window.__inst.engine.setTimer(25));
    let t = await page.evaluate(() => window.__inst.session.timerEnd != null);
    check(t, 'timer is set');
    await page.click('.fcp-stop');
    t = await page.evaluate(() => ({ timerEnd: window.__inst.session.timerEnd, state: window.__inst.engine.state }));
    check(t.timerEnd === null, `stop cancels the session timer (${JSON.stringify(t)})`);
    // restart after a stop that had a pending timer: must keep playing
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(1000);
    t = await page.evaluate(() => document.querySelector('.fcp-panel').classList.contains('is-playing'));
    check(t, 'restarted session keeps playing (no stale timer kills it)');
    // expiry: force the deadline into the past -> gentle fade -> stop -> restart survives
    await page.evaluate(() => { window.__inst.engine.setTimer(25); window.__inst.session.timerEnd = Date.now() - 10; });
    await page.waitForTimeout(500); // tick fires the fade
    t = await page.evaluate(() => {
      const s = window.__inst.session;
      return { timerEnd: s.timerEnd, fading: s.timerGain.gain.value < 0.9 };
    });
    check(t.timerEnd === null && t.fading, `expired timer fades out and clears (timerEnd ${t.timerEnd}, fading ${t.fading})`);
    await page.waitForTimeout(9000); // 8.5s fade timeout -> stop
    t = await page.evaluate(() => ({ state: window.__inst.engine.state, sources: window.__inst.engine.sources.length }));
    check(t.state === 'idle' && t.sources === 0, `expired timer stops the session cleanly (${JSON.stringify(t)})`);
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(1000);
    t = await page.evaluate(() => document.querySelector('.fcp-panel').classList.contains('is-playing'));
    check(t, 'restart after timer expiry keeps playing');
    check(errors.length === 0, `no page errors (timer lifecycle) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 10. slow decode on set switch: incoming decode slower than the crossfade ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-multi.html` });
    // delay decode call #2 (set two's first segment) by 2.5 s — slower than
    // the 1.5 s crossfade, so the incoming set starts after the outgoing fade
    await page.evaluate(() => {
      var orig = AudioContext.prototype.decodeAudioData;
      var calls = 0;
      AudioContext.prototype.decodeAudioData = function (buf, ok, err) {
        calls++;
        if (calls === 2) { setTimeout(() => orig.call(this, buf, ok, err), 2500); return; }
        return orig.call(this, buf, ok, err);
      };
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(800);
    await page.locator('.fcp-setchip').nth(1).click();
    // during the held decode: the switch is committed, the outgoing set is
    // still sounding into its fade, nothing is corrupted
    await page.waitForTimeout(1000);
    let t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        active: s.activeEngine.setId,
        outState: s.engines[0].state,
        inState: s.engines[1].state,
        noErrors: true,
      };
    });
    check(t.active === 'two', `switch stays committed while the incoming set decodes (${t.active})`);
    check(t.outState === 'playing' || t.outState === 'paused', `outgoing set is fading/retiring cleanly (${t.outState})`);
    // after the slow decode completes: the incoming set recovers and plays —
    // playback does not disappear
    await page.waitForFunction(() => window.__inst.session.engines[1].state === 'playing', null, { timeout: 8000 });
    // ... and the outgoing set retires once its fade window has elapsed
    await page.waitForFunction(() => {
      const e0 = window.__inst.session.engines[0];
      return e0.state === 'paused' && e0.sources.length === 0;
    }, null, { timeout: 8000 });
    await page.waitForTimeout(300);
    t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
        inSrc: s.engines[1].sources.length,
        outSrc: s.engines[0].sources.length,
        outState: s.engines[0].state,
      };
    });
    check(t.playing && t.inSrc >= 1, `slow-decoded incoming set recovers and plays (${JSON.stringify(t)})`);
    check(t.outState === 'paused' && t.outSrc === 0, `outgoing set retired after the slow switch (${JSON.stringify(t)})`);
    check(errors.length === 0, `no page errors (slow decode switch) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 11. <audio> fallback: switching between fallback sets ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-multi.html` });
    // force the Web Audio decode path to fail -> <audio> fallback
    await page.evaluate(() => {
      var orig = AudioContext.prototype.decodeAudioData;
      AudioContext.prototype.decodeAudioData = function (buf, ok, err) { err(new Error('forced')); };
    });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    let t = await page.evaluate(() => ({
      decodeFailed: window.__inst.engine.decodeFailed,
      playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
    }));
    check(t.decodeFailed && t.playing, `forced decode failure falls back and keeps playing (${JSON.stringify(t)})`);
    // switch sets while in fallback mode
    await page.locator('.fcp-setchip').nth(1).click();
    await page.waitForTimeout(800);
    t = await page.evaluate(() => {
      const s = window.__inst.session;
      return {
        active: s.activeEngine.setId,
        outState: s.engines[0].state,
        inFailed: s.engines[1].decodeFailed,
        playing: document.querySelector('.fcp-panel').classList.contains('is-playing'),
        fbIndex: s.engines[1].fallbackIndex,
      };
    });
    check(t.active === 'two' && t.inFailed, `fallback switch hands over to the new set (${JSON.stringify(t)})`);
    check(t.playing, 'fallback playback continues after the switch');
    // dispose must pause the fallback element (no errors, clean teardown)
    await page.evaluate(() => window.FCPlayer.dispose());
    await page.waitForTimeout(300);
    t = await page.evaluate(() => document.querySelectorAll('.fcp-panel').length);
    check(t === 0, 'dispose removes the player cleanly in fallback mode');
    check(errors.length === 0, `no page errors (fallback switch) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 12. the-dark-night Endel order lock (digest manifest) ---- */
  {
    // The James Blake set was re-staged into the original Endel player-number
    // order (HANDOFF.md). tests/dark-night-order.json locks that order: any
    // re-staging that scrambles it (e.g. a naive filename sort of unpadded
    // originals) changes a digest and fails here.
    const manifest = JSON.parse(fs.readFileSync(new URL('./dark-night-order.json', import.meta.url), 'utf8'));
    check(manifest.length === 22, `Endel digest manifest lists 22 segments (${manifest.length})`);
    let fetchOk = true, orderOk = true;
    for (let i = 0; i < 22; i++) {
      const res = await fetch(`${BASE}/assets/audio/the-dark-night/segment_${String(i).padStart(4, '0')}.aac`);
      if (!res.ok) { fetchOk = false; continue; }
      const hash = createHash('sha256').update(Buffer.from(await res.arrayBuffer())).digest('hex');
      if (hash !== manifest[i]) orderOk = false;
    }
    check(fetchOk, 'all 22 the-dark-night segments are served');
    check(orderOk, 'the-dark-night serving order matches the Endel digest manifest');
    // same lock against the working tree (no server involved)
    let diskOk = true;
    for (let i = 0; i < 22; i++) {
      const p = path.join(REPO_ROOT, 'soundscape-player/assets/audio/the-dark-night', `segment_${String(i).padStart(4, '0')}.aac`);
      const hash = createHash('sha256').update(fs.readFileSync(p)).digest('hex');
      if (hash !== manifest[i]) diskOk = false;
    }
    check(diskOk, 'the-dark-night files on disk match the Endel digest manifest');
  }

  /* ---- 13. wiki integration: site/ wiring + asset sync ---- */
  {
    const site = (p) => path.join(REPO_ROOT, 'site', p);
    const sp = (p) => path.join(REPO_ROOT, 'soundscape-player/assets', p);
    // player files byte-identical
    for (const f of ['player/fc-player.js', 'player/fc-player.css']) {
      const a = fs.readFileSync(sp(f));
      const b = fs.readFileSync(site(`assets/${f}`));
      check(a.equals(b), `site/assets/${f} is byte-identical to the component copy`);
    }
    // all 16 audio sets synced
    const slugs = ['flow','deliberate-practice','deep-listening','completing-the-cycle','rhythm-of-rest','completeness-of-rest','the-dreaming','siddhartha-and-the-river','abgeschiedenheit','natures-rhythm','thundering-silence','stimulus-control','dream-of-the-butterfly','flower-and-song','the-dark-night','bare-attention'];
    let setsOk = true, detail = '';
    for (const slug of slugs) {
      const src = fs.readdirSync(sp(`audio/${slug}`)).filter((n) => n.endsWith('.aac')).sort();
      let dst = [];
      try { dst = fs.readdirSync(site(`assets/audio/${slug}`)).filter((n) => n.endsWith('.aac')).sort(); } catch (e) { /* missing dir */ }
      if (src.length !== dst.length || src.some((n, i) => n !== dst[i])) { setsOk = false; detail = slug + ' (file list)'; continue; }
      for (const n of src) {
        if (!fs.readFileSync(sp(`audio/${slug}/${n}`)).equals(fs.readFileSync(site(`assets/audio/${slug}/${n}`)))) { setsOk = false; detail = `${slug}/${n}`; }
      }
    }
    check(setsOk, `site/assets/audio sets are byte-identical to the component sets ${detail}`);
    // wiring markers in site/index.html
    const html = fs.readFileSync(site('index.html'), 'utf8');
    check(/<link rel="stylesheet" href="assets\/player\/fc-player\.css">/.test(html), 'site/index.html links the player stylesheet');
    check(/<script src="assets\/player\/fc-player\.js" defer><\/script>/.test(html), 'site/index.html loads fc-player.js (deferred)');
    check(/setCrossfade:\s*4/.test(html) && /'the-dark-night',\s*'The dark night',\s*22/.test(html) && /'bare-attention'/.test(html), 'site/index.html mounts the 16-set wiki config (4 s crossfade)');
    check(/--fcp-fab-offset/.test(html), 'site/index.html sets --fcp-fab-offset for the phone tab bar');
  }

  /* ---- 14. --fcp-fab-offset lifts the floating button and panel ---- */
  {
    const { page, errors } = await newPage(browser);
    const fab = await page.evaluate(() => {
      const before = getComputedStyle(document.querySelector('.fcp-btn')).bottom;
      document.documentElement.style.setProperty('--fcp-fab-offset', '40px');
      const after = getComputedStyle(document.querySelector('.fcp-btn')).bottom;
      document.documentElement.style.setProperty('--fcp-fab-offset', '0px');
      return { before, after };
    });
    check(fab.before === '22px' && fab.after === '62px', `--fcp-fab-offset lifts the FAB (${fab.before} -> ${fab.after})`);
    const panel = await page.evaluate(() => {
      const before = getComputedStyle(document.querySelector('.fcp-panel')).bottom;
      document.documentElement.style.setProperty('--fcp-fab-offset', '40px');
      const after = getComputedStyle(document.querySelector('.fcp-panel')).bottom;
      document.documentElement.style.setProperty('--fcp-fab-offset', '0px');
      return { before, after };
    });
    check(panel.before === '88px' && panel.after === '128px', `--fcp-fab-offset lifts the panel (${panel.before} -> ${panel.after})`);
    check(errors.length === 0, `no page errors (fab offset) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 15. junction-aware fades: content trim + junction crossfade ---- */
  {
    // fixtures/jf_*.wav are phase-continuous 440 Hz tones with 40 ms of leading
    // and 30 ms of trailing silence baked in — mimicking raw ADTS AAC encoder
    // priming/padding, the cause of the audible tick/dip between tracks. The
    // engine must schedule only each buffer's content span and crossfade every
    // regular junction by junctionFade (0.012 s, equal-power). Designed
    // transitions (pass wrap) keep their own curves.
    const { page, errors } = await newPage(browser, { recordStarts: true, url: `${BASE}/tests/qa-junction.html` });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForFunction(() => window.__starts.length >= 3, null, { timeout: 15000 });
    const t = await page.evaluate(() => {
      var s = window.__starts, e = window.__inst.engine;
      return {
        offsets: s.map((x) => +x.offset.toFixed(3)),
        durs: s.map((x) => +x.dur.toFixed(3)),
        overlap01: +(s[0].when + s[0].dur - s[1].when).toFixed(4),
        wrapGap: +(s[1].when + s[1].dur - s[2].when).toFixed(4),
        segDur: e._segmentDuration(0),
        join: (function () { // continuity of the trimmed content at the join
          var a = e.buffers[0].getChannelData(0), b = e.buffers[1].getChannelData(0);
          var sa = e._spanOf(e.buffers[0]), sb = e._spanOf(e.buffers[1]);
          var ea = a[Math.round((sa.offset + sa.duration) * e.buffers[0].sampleRate) - 1];
          var fb = b[Math.round(sb.offset * e.buffers[1].sampleRate)];
          return Math.abs(ea - fb);
        })(),
      };
    });
    check(t.offsets.every((o) => Math.abs(o - 0.04) < 0.003), `baked leading silence is trimmed from every scheduled source (${t.offsets})`);
    check(t.durs.every((d) => Math.abs(d - 0.5) < 0.003), `scheduled length is the content span, not the raw file (${t.durs})`);
    check(Math.abs(t.overlap01 - 0.012) < 0.003, `regular junction crossfades by junctionFade (${t.overlap01}s overlap)`);
    check(Math.abs(t.wrapGap) < 0.003, `the pass wrap keeps its designed transition, no junction fade (${t.wrapGap}s gap)`);
    check(Math.abs(t.segDur - 0.5) < 0.003, `track duration shows the trimmed content (${t.segDur.toFixed(3)}s of 0.57s raw)`);
    check(t.join < 0.02, `trimmed join is continuous (boundary step ${t.join.toFixed(4)})`);
    // pause/resume exactness across the crossfaded junction
    await page.waitForFunction(() => window.__inst.engine._frontIdx === 1, null, { timeout: 15000 });
    await page.evaluate(() => window.__inst.engine.pause());
    const p1 = await page.evaluate(() => +window.__inst.engine.position().toFixed(3));
    await page.waitForTimeout(300);
    await page.evaluate(() => window.__inst.engine.play());
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.waitForTimeout(500);
    await page.evaluate(() => window.__inst.engine.pause());
    const p2 = await page.evaluate(() => +window.__inst.engine.position().toFixed(3));
    check(Math.abs((p2 - p1) - 0.44) < 0.12, `resume across a junction stays exact (${p1}s -> ${p2}s, ~0.44 expected after the ~60 ms play() startup)`);
    check(errors.length === 0, `no page errors (junction fades) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 16. junction-aware fades: rendered output + resume cursor ---- */
  {
    // (a) Resume cursor regression: pause WELL INSIDE a track, resume THROUGH
    // the next boundary, then pause again — the captured segment/offset must
    // match the expected audio position (the resume path must not subtract
    // the resume offset twice in the timeline advance).
    {
      const { page, errors } = await newPage(browser, { recordStarts: true, url: `${BASE}/tests/qa-junction.html` });
      await page.click('.fcp-btn');
      await page.click('.fcp-play');
      await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      // wait until we are ~0.2 s into track 0 (well inside, not at a boundary)
      await page.waitForFunction(() => window.__inst.engine._frontIdx === 0 && window.__inst.engine.position() > 0.2, null, { timeout: 15000 });
      await page.evaluate(() => window.__inst.engine.pause());
      const snap1 = await page.evaluate(() => ({ idx: window.__inst.engine.segIndex, off: +window.__inst.engine.segOffset.toFixed(3) }));
      check(snap1.idx === 0 && Math.abs(snap1.off - 0.2) < 0.08, `pause well inside track 0 captures idx/off ({idx:${snap1.idx} off:${snap1.off}})`);
      // resume and run 0.6 s — crosses the 0→1 junction (0.3 s remaining) plus 0.3 s into track 1
      await page.evaluate(() => window.__inst.engine.play());
      await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      await page.waitForTimeout(700);
      await page.evaluate(() => window.__inst.engine.pause());
      const snap2 = await page.evaluate(() => ({ idx: window.__inst.engine.segIndex, off: +window.__inst.engine.segOffset.toFixed(3) }));
      check(snap2.idx === 1 && Math.abs(snap2.off - 0.31) < 0.1, `after resuming through the junction the cursor is inside track 1 ({idx:${snap2.idx} off:${snap2.off}}, expected ~0.31)`);
      // resume again for 0.2 s — position must advance by ~0.2 (no double-subtracted offset)
      const pa = await page.evaluate(() => +window.__inst.engine.position().toFixed(3));
      await page.evaluate(() => window.__inst.engine.play());
      await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      await page.waitForTimeout(250);
      await page.evaluate(() => window.__inst.engine.pause());
      const pb = await page.evaluate(() => +window.__inst.engine.position().toFixed(3));
      const passed = ((pb - pa) % 1 + 1) % 1; // the 1 s pass may wrap
      check(Math.abs(passed - 0.25) < 0.12, `second resume advances correctly (${pa}s -> ${pb}s, ${passed.toFixed(2)}s passed)`);
      check(errors.length === 0, `no page errors (resume cursor) ${errors.join('|')}`);
      await page.context().close();
    }

    // (b) Rendered output THROUGH THE ACTUAL ENGINE: rewire an engine onto
    // an OfflineAudioContext and schedule with its real `_scheduleSegment`
    // (real span logic, real duration arg, real curves, real wrap fades),
    // then measure the rendered RESULT: no silence gap at a regular join, no
    // click anywhere, no cancellation bump. A negative control (junctionFade
    // 0 + trimSilence false — the OLD behaviour) must FAIL the no-dip check,
    // proving the acceptance test has teeth. Run on the synthetic fixture
    // pair AND on the real the-dark-night wrap junction (21 → 0).
    const engineRender = (page, opts) => page.evaluate(async (o) => {
      const e = window.__inst.engine;
      e.ensureContext();
      const bufs = await Promise.all([e.loadBuffer(0), e.loadBuffer(1)]);
      if (o) Object.assign(e.opts, o);
      const sr = bufs[0].sampleRate;
      const spanSum = e._spanOf(bufs[0]).duration + e._spanOf(bufs[1]).duration;
      const off = new OfflineAudioContext(1, Math.ceil((0.05 + spanSum + 0.6) * sr), sr);
      // rewire the engine onto the offline context (its real scheduling code
      // then runs against it: spans, duration arg, curves, wrap fades)
      const old = { ctx: e.ctx, gainNode: e.gainNode, sources: e.sources, prev: e._jfPrev };
      e.ctx = off;
      e.gainNode = off.createGain(); e.gainNode.connect(off.destination);
      e.sources = []; e._jfPrev = null;
      const t0 = 0.05;
      // pass: seg0 (pass start, designed fade-in), seg1 (pass-final), then
      // the wrap back to seg0 (pass start) — the designed loop transition
      let nt = t0;
      const s0 = e._scheduleSegment(0, bufs[0], nt, 0, 1.2, 0); nt += s0._fcpAdvance;
      const s1 = e._scheduleSegment(1, bufs[1], nt, 0, 0.05, 0); nt += s1._fcpAdvance;
      const s2 = e._scheduleSegment(0, bufs[0], nt, 0, 1.2, 0);
      const regularAt = s1._fcpWhen;   // regular junction (0 → 1)
      const wrapAt = s2._fcpWhen;     // designed wrap (1 → 0)
      const rendered = await off.startRendering();
      // restore
      Object.assign(e, { ctx: old.ctx, gainNode: old.gainNode, sources: old.sources, _jfPrev: old.prev });
      const d = rendered.getChannelData(0);
      const region = (from, to) => {
        const j0 = Math.max(0, Math.floor(from * sr)), j1 = Math.min(d.length - 1, Math.floor(to * sr));
        const win = Math.round(sr * 0.01);
        const rms = [];
        for (let s = j0; s + win <= j1; s += win) {
          let r = 0; for (let i = s; i < s + win; i++) r += d[i] * d[i];
          rms.push(Math.sqrt(r / win));
        }
        rms.sort((x, y) => x - y);
        let maxDelta = 0, peak = 0;
        for (let i = Math.max(1, j0); i <= j1; i++) {
          maxDelta = Math.max(maxDelta, Math.abs(d[i] - d[i - 1]));
          peak = Math.max(peak, Math.abs(d[i]));
        }
        return { med: rms[Math.floor(rms.length / 2)] || 0, min: rms[0] || 0, maxDelta, peak };
      };
      return {
        regular: region(regularAt - 0.1, regularAt + 0.1), // tight: a wider window would catch the designed pass-start fade-in
        preJoin: region(regularAt - 0.3, regularAt - 0.005), // predecessor tail side only
        wrap: region(wrapAt - 0.3, wrapAt + 0.3),
        spans: [e._spanOf(bufs[0]), e._spanOf(bufs[1])],
        raws: [bufs[0].duration, bufs[1].duration],
        jf: e.opts.junctionFade,
      };
    }, opts || null);
    // (the engine records the scheduled start on the source for the test)
    {
      const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-junction.html` });
      const r = await engineRender(page);
      check(r.regular.min > 0.5 * r.regular.med, `engine-rendered regular join has no level dip (min ${r.regular.min.toFixed(3)} vs median ${r.regular.med.toFixed(3)})`);
      check(r.regular.maxDelta < 0.05, `engine-rendered regular join has no click (max delta ${r.regular.maxDelta.toFixed(4)})`);
      check(r.regular.peak < 0.9 && r.regular.peak > 0.3, `engine-rendered join level is sane (peak ${r.regular.peak.toFixed(3)})`);
      check(r.wrap.maxDelta < 0.05, `engine-rendered wrap junction has no click (max delta ${r.wrap.maxDelta.toFixed(4)}, natural tone delta is ~0.031)`);
      // negative control: the OLD behaviour (no trim, no junction fade) must
      // produce the dip the fix exists to remove
      const n = await engineRender(page, { junctionFade: 0, trimSilence: false });
      check(n.regular.min < 0.3 * n.regular.med, `negative control (old behaviour) DOES show the silence dip (min ${n.regular.min.toFixed(4)} vs median ${n.regular.med.toFixed(3)})`);
      check(errors.length === 0, `no page errors (engine render) ${errors.join('|')}`);
      await page.context().close();
    }
    {
      const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-junction.html#real=1` });
      const r = await engineRender(page);
      // seg0 of the real set opens with ~300 ms of NATURAL silence (uncertain
      // trim — preserved by design), so the no-dip check uses the
      // predecessor's tail side; the join itself must be click-free and level-sane.
      check(r.preJoin.min > 0.2 * r.preJoin.med, `real-set 21 tail renders with no silence dip (min ${r.preJoin.min.toFixed(4)} vs median ${r.preJoin.med.toFixed(4)})`);
      check(r.regular.maxDelta < 0.1, `real-set 21→0 join renders with no click (max delta ${r.regular.maxDelta.toFixed(4)})`);
      check(r.regular.peak < 0.95, `real-set 21→0 join has no cancellation bump (peak ${r.regular.peak.toFixed(3)})`);
      check(r.raws[0] - r.spans[0].duration > 0.03, `real seg21 tail padding is trimmed (${(r.raws[0] - r.spans[0].duration).toFixed(3)}s of ${r.raws[0]}s raw)`);
      check(r.spans[1].offset === 0, `real seg0's long quiet opening is preserved, not trimmed (uncertain trim)`);
      check(errors.length === 0, `no page errors (real-set render) ${errors.join('|')}`);
      await page.context().close();
    }
  }

  /* ---- 17. docked launcher: mount({ launcher }) puts the button in the host layout ---- */
  {
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa-launcher.html` });
    const st = await page.evaluate(() => {
      const btn = document.querySelector('.fcp-btn');
      const slot = document.getElementById('slot');
      return {
        docked: btn.parentElement === slot,
        inline: btn.classList.contains('fcp-inline'),
        pos: getComputedStyle(btn).position
      };
    });
    check(st.docked, 'launcher option docks the button into the host element');
    check(st.inline && st.pos === 'static', `docked button is in-flow, not fixed (${st.pos})`);

    // open the panel: it must drop below the button, right-aligned, in-viewport
    await page.click('.fcp-btn');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('open'), null, { timeout: 5000 });
    await page.waitForTimeout(300); // let the open transition (transform) settle before measuring
    const g = await page.evaluate(() => {
      const b = document.querySelector('.fcp-btn').getBoundingClientRect();
      const p = document.querySelector('.fcp-panel').getBoundingClientRect();
      const h = document.getElementById('hdr').getBoundingClientRect();
      return { btnBottom: b.bottom, btnRight: b.right, hdrBottom: h.bottom, pTop: p.top, pRight: p.right, pLeft: p.left, pBottom: p.bottom, vw: innerWidth, vh: innerHeight };
    });
    check(g.pTop >= g.btnBottom - 0.5, `panel opens below the docked button (${g.pTop.toFixed(0)} >= ${g.btnBottom.toFixed(0)})`);
    check(g.pTop >= g.hdrBottom + 7, `panel drops from the panelAnchor's bottom edge (${g.pTop.toFixed(0)} >= ${g.hdrBottom.toFixed(0)} + 8)`);
    check(Math.abs(g.pRight - g.btnRight) < 1.5, `panel right-aligns with the button (${g.pRight.toFixed(0)} ~ ${g.btnRight.toFixed(0)})`);
    check(g.pRight <= g.vw && g.pLeft >= 0 && g.pBottom <= g.vh + 0.5, 'panel stays inside the viewport');

    // narrow viewport: the open panel must reposition (full-width margins)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    const g2 = await page.evaluate(() => {
      const p = document.querySelector('.fcp-panel').getBoundingClientRect();
      const b = document.querySelector('.fcp-btn').getBoundingClientRect();
      return { pTop: p.top, pLeft: p.left, pRight: p.right, pBottom: p.bottom, btnBottom: b.bottom, vw: innerWidth, vh: innerHeight };
    });
    check(g2.pLeft >= 15 && g2.pRight <= g2.vw - 15, `narrow viewport: panel spans the width (${g2.pLeft.toFixed(0)}..${g2.pRight.toFixed(0)})`);
    check(g2.pTop >= g2.btnBottom - 0.5, `narrow viewport: panel stays below the button (${g2.pTop.toFixed(0)} >= ${g2.btnBottom.toFixed(0)})`);
    check(g2.pBottom <= g2.vh + 0.5, 'narrow viewport: panel fits the height');

    // dispose: button leaves the slot, no errors
    await page.evaluate(() => window.FCPlayer.dispose());
    const after = await page.evaluate(() => ({
      gone: !document.querySelector('.fcp-btn'),
      slotEmpty: document.getElementById('slot').children.length === 0
    }));
    check(after.gone && after.slotEmpty, 'dispose removes the docked button from the host slot');
    check(errors.length === 0, `no page errors (launcher) ${errors.join('|')}`);
    await page.context().close();
  }

  /* ---- 18. background keeper: iOS lock-screen handover (backgroundAudio) ---- */
  {
    // negative control first: on desktop, 'auto' leaves the keeper OFF —
    // hiding the page must NOT pause the engine or create a keeper
    const { page, errors } = await newPage(browser, { url: `${BASE}/tests/qa.html` });
    await page.click('.fcp-btn');
    await page.click('.fcp-play');
    await page.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    const nc = await page.evaluate(() => ({
      playing: window.__inst.session.playingState() === 'playing',
      keeper: !!document.querySelector('.fcp-keeper')
    }));
    check(nc.playing && !nc.keeper, 'desktop (backgroundAudio auto): hiding the page does not pause the engine or create a keeper');
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    });
    check(errors.length === 0, `no page errors (keeper negative control) ${errors.join('|')}`);
    await page.context().close();

    // forced on: the full handover cycle
    const { page: bg, errors: bgErrors } = await newPage(browser, { url: `${BASE}/tests/qa-bg.html` });
    await bg.click('.fcp-btn');
    await bg.click('.fcp-play');
    await bg.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    // wait for the keeper to be primed (concatenated blob built)
    await bg.waitForFunction(() => {
      var k = window.__inst.session._bgKeeper;
      return k && k.primed === true;
    }, null, { timeout: 15000 });
    await bg.waitForTimeout(700); // settle at a known position
    const before = await bg.evaluate(() => ({ pos: window.__inst.engine.position() }));

    // hide: handover to the keeper
    await bg.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await bg.waitForTimeout(400);
    const hidden = await bg.evaluate(() => {
      var s = window.__inst.session;
      var k = s._bgKeeper;
      var a = k.audio;
      return {
        enginePaused: s.playingState() !== 'playing',
        keeperActive: k.active,
        keeperPlaying: !a.paused && a.currentTime > 0,
        loop: a.loop,
        blob: (a.currentSrc || a.src || '').indexOf('blob:') === 0,
        ct: a.currentTime
      };
    });
    check(hidden.enginePaused, 'hidden: engine is paused (Web Audio suspended by the OS)');
    check(hidden.keeperActive && hidden.keeperPlaying, 'hidden: the keeper audio element is playing');
    check(hidden.loop && hidden.blob, 'hidden: the keeper plays the looping concatenated blob');
    // position continuity at handover: keeper time ≈ engine position (+ head trims)
    check(Math.abs(hidden.ct - before.pos) < 1.0, `hidden: keeper starts at the engine position (${hidden.ct.toFixed(2)} vs ${before.pos.toFixed(2)})`);

    // let it play in the background for a moment, then come back
    await bg.waitForTimeout(1000);
    const midCt = await bg.evaluate(() => window.__inst.session._bgKeeper.audio.currentTime);
    await bg.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await bg.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
    const back = await bg.evaluate(() => ({
      pos: window.__inst.engine.position(),
      keeperActive: window.__inst.session._bgKeeper.active,
      keeperPaused: window.__inst.session._bgKeeper.audio.paused
    }));
    check(!back.keeperActive && back.keeperPaused, 'visible: hand-back deactivates and pauses the keeper');
    check(back.pos >= midCt - 1.5 && back.pos <= midCt + 2.5, `visible: engine resumes at the keeper position (${back.pos.toFixed(2)} vs keeper ${midCt.toFixed(2)})`);

    // the combined resource: total duration matches the span table, the
    // raw<->engine mapping round-trips into a later segment, and the blob
    // actually loops (seek near the end, play, verify the wrap)
    const combined = await bg.evaluate(() => {
      const s = window.__inst.session;
      const k = s._bgKeeper;
      const total = k.spans.reduce((a, x) => a + x.raw, 0);
      const raw = s._bgRawAt(window.__inst.engine, 2, 1.0);
      const back2 = s._bgFromRaw(window.__inst.engine, raw);
      return { dur: k.audio.duration, total, raw, idx: back2.idx, off: back2.offset };
    });
    check(Math.abs(combined.dur - combined.total) < 0.5, `combined blob duration matches the span table (${combined.dur.toFixed(2)} ~ ${combined.total.toFixed(2)})`);
    check(combined.idx === 2 && Math.abs(combined.off - 1.0) < 0.05, `raw<->engine mapping round-trips into a later segment (idx ${combined.idx}, off ${combined.off.toFixed(2)})`);
    const wrapped = await bg.evaluate(async () => {
      const k = window.__inst.session._bgKeeper;
      const total = k.spans.reduce((a, x) => a + x.raw, 0);
      const a = k.audio;
      a.muted = true;
      a.currentTime = total - 1.0;
      await a.play();
      await new Promise((r) => setTimeout(r, 2200));
      const ct = a.currentTime;
      a.pause();
      a.muted = false;
      return ct;
    });
    check(wrapped < 1.5, `the blob actually loops (wrapped to ${wrapped.toFixed(2)}s)`);

    // delayed build: hide BEFORE the blob is ready — the handover must fall
    // back to the current segment (mode 'segment'), hand back at the suspend
    // point, then upgrade to the full set once built
    {
      const { page: pg, errors: pgErrors } = await newPage(browser, { url: `${BASE}/tests/qa-bg.html` });
      // make the build deterministically slow (delay the last segment)
      await pg.route('**/qa_2.aac', async (route) => {
        await new Promise((r) => setTimeout(r, 2500));
        await route.continue();
      });
      await pg.click('.fcp-btn');
      await pg.click('.fcp-play');
      await pg.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      await pg.waitForTimeout(700);
      const p0 = await pg.evaluate(() => window.__inst.engine.position());
      // hide immediately — the blob cannot be primed yet
      await pg.evaluate(() => {
        Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        document.dispatchEvent(new Event('visibilitychange'));
      });
      await pg.waitForTimeout(400);
      const seg = await pg.evaluate(() => {
        const k = window.__inst.session._bgKeeper;
        return {
          active: k.active,
          mode: k.mode,
          playing: !k.audio.paused,
          src: (k.audio.currentSrc || k.audio.src || '').indexOf('qa_0.aac') >= 0,
          enginePaused: window.__inst.session.playingState() !== 'playing',
          primed: k.primed
        };
      });
      check(seg.active && seg.mode === 'segment' && seg.playing && seg.src, 'hide before the blob is ready: single-segment best-effort handover');
      check(seg.enginePaused && !seg.primed, 'hide before the blob is ready: engine paused, blob still unprimed');
      // come back: the engine must resume at (≈) the suspend point
      await pg.evaluate(() => {
        Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
        document.dispatchEvent(new Event('visibilitychange'));
      });
      await pg.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      const p1 = await pg.evaluate(() => window.__inst.engine.position());
      check(Math.abs(p1 - p0) < 2.5, `segment-mode hand-back resumes at the suspend point (${p1.toFixed(2)} ~ ${p0.toFixed(2)})`);
      // let the delayed build finish, then the next hide must use the full set
      await pg.waitForFunction(() => window.__inst.session._bgKeeper.primed === true, null, { timeout: 15000 });
      await pg.evaluate(() => {
        Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        document.dispatchEvent(new Event('visibilitychange'));
      });
      await pg.waitForTimeout(400);
      const upgraded = await pg.evaluate(() => {
        const k = window.__inst.session._bgKeeper;
        return { active: k.active, mode: k.mode, playing: !k.audio.paused, blob: (k.audio.currentSrc || k.audio.src || '').indexOf('blob:') === 0 };
      });
      check(upgraded.active && upgraded.mode === 'set' && upgraded.playing && upgraded.blob, 'after the delayed build completes: the full-set blob handover takes over');
      check(pgErrors.length === 0, `no page errors (delayed build) ${pgErrors.join('|')}`);
      await pg.context().close();
    }

    // non-ADTS sets (e.g. WAV segments): the concatenated blob must NOT be
    // built (it would be a broken file) — the handover stays single-segment
    {
      const { page: pw, errors: pwErrors } = await newPage(browser, { url: `${BASE}/tests/qa-bg-wav.html` });
      await pw.click('.fcp-btn');
      await pw.click('.fcp-play');
      await pw.waitForFunction(() => document.querySelector('.fcp-panel').classList.contains('is-playing'), null, { timeout: 8000 });
      await pw.waitForTimeout(1500); // give a would-be build time to (wrongly) start
      const gate = await pw.evaluate(() => {
        const k = window.__inst.session._bgKeeper;
        return { primed: k ? k.primed : null, exists: !!k, spans: k ? !!k.spans : null };
      });
      check(gate.exists && !gate.primed && !gate.spans, 'non-ADTS set: no concatenated blob is built');
      await pw.evaluate(() => {
        Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        document.dispatchEvent(new Event('visibilitychange'));
      });
      await pw.waitForTimeout(400);
      const wseg = await pw.evaluate(() => {
        const k = window.__inst.session._bgKeeper;
        return { active: k.active, mode: k.mode, playing: !k.audio.paused };
      });
      check(wseg.active && wseg.mode === 'segment' && wseg.playing, 'non-ADTS set: single-segment handover still works');
      check(pwErrors.length === 0, `no page errors (non-ADTS gate) ${pwErrors.join('|')}`);
      await pw.context().close();
    }

    check(bgErrors.length === 0, `no page errors (keeper handover) ${bgErrors.join('|')}`);
    await bg.context().close();
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
