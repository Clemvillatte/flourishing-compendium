#!/usr/bin/env node
/* Diagnose segment-join ticks: decode adjacent segments in a real browser
 * (the same decodeAudioData path playback uses) and measure:
 *  - leading/trailing near-silence (AAC encoder priming / padding)
 *  - the waveform step at a butt join (click energy)
 * Usage: node tests/join-diag.mjs <baseUrl> <set> <segA> <segB>
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://127.0.0.1:8791';
const SET = process.argv[3] || 'the-dark-night';
const A = parseInt(process.argv[4] || '0', 10);
const B = parseInt(process.argv[5] || '1', 10);
const name = (i) => `${BASE}/assets/audio/${SET}/segment_${String(i).padStart(4, '0')}.aac`;

const browser = await chromium.launch({ headless: true, channel: 'chromium' });
const page = await browser.newPage();
await page.goto(`${BASE}/tests/qa.html`, { waitUntil: 'domcontentloaded' });
const out = await page.evaluate(async ({ urlA, urlB }) => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const [a, b] = await Promise.all([urlA, urlB].map(async (u) => {
    const res = await fetch(u);
    return ctx.decodeAudioData(await res.arrayBuffer());
  }));
  const ana = (buf) => {
    const d = buf.getChannelData(0);
    const sr = buf.sampleRate;
    const rms = (s, e) => { let r = 0; for (let i = s; i < e; i++) r += d[i] * d[i]; return Math.sqrt(r / (e - s)); };
    const peak = (s, e) => { let p = 0; for (let i = s; i < e; i++) p = Math.max(p, Math.abs(d[i])); return p; };
    // leading silence: first index where a 1ms window exceeds 1% of body peak
    const bodyPeak = peak(Math.floor(d.length * 0.1), Math.floor(d.length * 0.9));
    let lead = 0;
    for (let i = 0; i < sr * 0.2; i += 8) { if (peak(i, i + 8) > bodyPeak * 0.01) { lead = i; break; } }
    let trail = 0;
    for (let i = d.length - 1; i > d.length - sr * 0.2; i -= 8) { if (peak(i - 8, i) > bodyPeak * 0.01) { trail = d.length - 1 - i; break; } }
    return {
      sampleRate: sr, duration: buf.duration, length: d.length,
      firstSample: d[0], lastSample: d[d.length - 1],
      rmsHead5ms: rms(0, sr * 0.005), rmsTail5ms: rms(d.length - sr * 0.005, d.length),
      rmsBody: rms(Math.floor(d.length * 0.4), Math.floor(d.length * 0.6)),
      leadSilenceMs: (lead / sr * 1000).toFixed(1), trailSilenceMs: (trail / sr * 1000).toFixed(1),
    };
  };
  // butt join: end of A spliced to start of B — max sample-delta at the join
  const da = a.getChannelData(0), db = b.getChannelData(0);
  const joinStep = Math.abs(da[da.length - 1] - db[0]);
  const joinDeltaPrev = Math.abs(da[da.length - 2] - da[da.length - 1]); // typical in-file delta
  return { A: ana(a), B: ana(b), joinStep, joinDeltaPrev };
}, { urlA: name(A), urlB: name(B) });
await browser.close();
console.log(JSON.stringify(out, null, 2));
