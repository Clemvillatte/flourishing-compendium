/* FCPlayer — an adaptive soundscape player for The Flourishing Compendium.
 * Self-contained: no dependencies. Drop-in component for a static site.
 *
 * DESIGN SUMMARY (see docs/DESIGN.md for the full engineering report):
 *  - A soundscape is an ordered list of 60-second AAC segments. Segments are
 *    fetched, decoded to AudioBuffers, and scheduled back-to-back on the Web
 *    Audio timeline => sample-accurate gapless joins.
 *  - A lookahead scheduler keeps the next segments decoded and queued; if
 *    loading falls behind, the timeline is rebased and playback resumes after
 *    a short buffering gap (sources never overlap).
 *  - At the end of a set, a designed fade-out loops back to the first
 *    segment's natural intro.
 *  - MULTIPLE SETS: mount({ sets: [...] }) gives a set menu in the panel and
 *    a designed crossfade between sets (equal-power curves on per-set gain
 *    stages). Each set keeps its own engine and remembers its position, so
 *    switching back resumes where you left off. The single-set mount API
 *    (source / segments / files) is preserved unchanged.
 *  - LAYERED SETS (stems): mount({ layers: [...] }) plays several ordered
 *    segment lists SIMULTANEOUSLY on independent timelines, so their loop
 *    points drift against each other and the combination evolves instead of
 *    repeating. Each layer has its own gain stage; soloing a layer crossfades
 *    the others out without stopping their timelines. NOTE: the player plays
 *    premixed recordings — it does not synthesize audio or mix stems in the
 *    sense of generating music; it schedules the user's own files.
 *  - Optional "adapt to time of day": a gentle low-pass filter + level trim
 *    following the hour of day — brighter and louder mid-day, warmer and
 *    dimmer at night.
 *  - Controls: play/pause/resume, stop, random jump, track selection, set
 *    selection, session timer with its own gain-stage fade, volume,
 *    MediaSession, and a graceful <audio> element fallback if Web Audio AAC
 *    decoding is unavailable.
 *
 * Usage:
 *   FCPlayer.mount({
 *     title: 'Focus Soundscape', subtitle: 'study set · 16 min',
 *     source: { dir: 'assets/audio/segments/', pattern: 'segment_%04d.aac', count: 16 },
 *     // ...or segments: ['a.aac','b.aac'], or files: [File...] (from a folder picker)
 *   });
 *
 *   // Multiple sets (set menu + crossfade switching):
 *   FCPlayer.mount({
 *     setCrossfade: 4,                       // seconds, default 4
 *     sets: [
 *       { id: 'flow', title: 'Flow', subtitle: '16 min',
 *         source: { dir: 'assets/audio/flow/', pattern: 'segment_%04d.aac', count: 16 } },
 *       { id: 'rest', title: 'Rest', segments: ['a.aac', 'b.aac'] }
 *     ]
 *   });
 *   instance.loadSet('rest');                // switch (crossfades if playing)
 *
 *   // Layered sets (stems on independent timelines):
 *   FCPlayer.mount({
 *     layers: [
 *       { title: 'Drone bed', gain: 1, source: {...} },
 *       { title: 'Arpeggio',  gain: 0.7, source: {...} }
 *     ]
 *   });
 */
(function () {
  'use strict';

  if (window.FCPlayer) return;

  var DEFAULTS = {
    title: 'Soundscape',
    subtitle: '',
    segments: null,          // array of URLs
    source: null,            // {dir, pattern, count} — pattern uses %04d-style padding
    files: null,             // array of File objects (local mode)
    sets: null,              // array of set definitions (multi-set mode)
    layers: null,            // array of layer definitions (layered/stems mode)
    loopFadeOut: 3.0,        // seconds of fade-out on the final segment before looping
    lookahead: 2.5,          // seconds of scheduling lookahead
    poll: 200,               // ms between scheduler ticks
    rotatePasses: false,     // QUARANTINED: see note below. Do not enable in
                             // examples unless the junction-fade problem is
                             // solved (docs/ROADMAP.md, HANDOFF.md).
    setCrossfade: 4.0,       // seconds of crossfade when switching sets
    soloFade: 1.5,           // seconds of crossfade when soloing a layer
    junctionFade: 0.012,     // seconds of equal-power crossfade at every
                             // segment junction (see contentSpan note below)
    trimSilence: true,       // schedule only each buffer's audible content
                             // (strips AAC encoder priming/padding)
    normalizeLayers: true     // scale layer gains by 1/sqrt(N) to avoid clipping
  };

  // rotatePasses note: for a continuous recording the last→first junction is the
  // loop endpoint; rotating passes moves that un-faded hard cut INSIDE a pass.
  // It is mechanically correct (spec-verified) but off by default and not used
  // in any example. Enabling it safely requires junction-aware fades or
  // cyclically seamless source material.

  // ---------- utilities ----------

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function fmtTime(s) {
    if (!isFinite(s) || s < 0) s = 0;
    var m = Math.floor(s / 60), sec = Math.floor(s % 60);
    var h = Math.floor(m / 60); m = m % 60;
    var out = h > 0 ? h + ':' + (m < 10 ? '0' : '') + m : '' + m;
    return out + ':' + (sec < 10 ? '0' : '') + sec;
  }

  // hour -> {cutoff: Hz, gain: multiplier}. Midday = fully open; deep night = warm/dim.
  function circadian(hour) {
    // distance from 14:00 (peak brightness), wrapped over 24h
    var d = Math.min(Math.abs(hour - 14), 24 - Math.abs(hour - 14)); // 0..12
    var k = d / 12; // 0 at 14:00, 1 at 02:00
    var cutoff = 20000 * Math.pow(0.42, k); // 20 kHz -> ~8.4 kHz
    var gain = 1 - 0.18 * k;
    return { cutoff: cutoff, gain: gain };
  }

  // Equal-power fade curve between two gain values: rising uses sin(t·π/2),
  // falling uses cos(t·π/2) — complementary shapes, both 0.707 at the midpoint,
  // so a crossfade's power sum stays ~constant. Returns a Float32Array usable
  // with setValueCurveAtTime.
  function fadeCurve(from, to, n) {
    var arr = new Float32Array(n || 32);
    var rising = to > from;
    for (var i = 0; i < arr.length; i++) {
      var t = i / (arr.length - 1);
      arr[i] = rising
        ? from + (to - from) * Math.sin(t * Math.PI / 2)   // from -> to
        : to + (from - to) * Math.cos(t * Math.PI / 2);     // from -> to
    }
    return arr;
  }

  // Audible content span of a decoded buffer. Encoders (raw ADTS AAC in
  // particular) bake leading priming and trailing padding into files, and
  // decodeAudioData returns them as near-silence; butt-joining such buffers
  // puts a ~30-60 ms dip at every track boundary — an audible tick/gap that
  // breaks focus on continuous material. The engine schedules only the
  // content span, so joins land on real material. Memoized on the buffer.
  function contentSpan(buf) {
    if (buf._fcpSpan) return buf._fcpSpan;
    var span = { offset: 0, duration: buf.duration };
    try {
      var sr = buf.sampleRate, len = buf.length, chans = buf.numberOfChannels;
      var win = Math.max(1, Math.round(sr * 0.002)); // 2 ms analysis window
      var cap = Math.min(Math.round(sr * 0.25), len >> 1); // trim cap: 250 ms
      // body peak from the middle half of the buffer
      var b0 = Math.floor(len * 0.25), b1 = Math.floor(len * 0.75), peak = 0, c, i;
      for (c = 0; c < chans; c++) {
        var bd = buf.getChannelData(c);
        for (i = b0; i < b1; i++) { var v = Math.abs(bd[i]); if (v > peak) peak = v; }
      }
      var th = Math.max(peak * 0.005, 1e-4);
      var winPeak = function (d, s) {
        var p = 0;
        for (var j = s; j < s + win && j < len; j++) { var w = Math.abs(d[j]); if (w > p) p = w; }
        return p;
      };
      // leading silence: first window above threshold. If NO content is found
      // within the cap, the silence is UNCERTAIN (could be an intentional
      // quiet opening) — preserve that side rather than trim the whole cap.
      var head = 0;
      outer1: for (i = 0; i < cap; i += win) {
        for (c = 0; c < chans; c++) if (winPeak(buf.getChannelData(c), i) > th) { head = i; break outer1; }
      }
      // trailing silence: last window above threshold, same uncertainty rule
      var tail = 0;
      outer2: for (i = len; i > len - cap; i -= win) {
        for (c = 0; c < chans; c++) if (winPeak(buf.getChannelData(c), Math.max(0, i - win)) > th) { tail = len - i; break outer2; }
      }
      if (head + tail < len - win) span = { offset: head / sr, duration: (len - head - tail) / sr };
      // safeguard: if most of the buffer reads as silence (or the body itself
      // is below threshold — a fully silent/near-silent file), keep the full
      // span — intentional quiet material (e.g. a silent layer segment)
      // must not be shortened.
      if (head + tail > len * 0.75 || peak <= th) span = { offset: 0, duration: buf.duration };
    } catch (e) { /* analysis failed — keep the full span */ }
    buf._fcpSpan = span;
    return span;
  }

  // ---------- session (shared audio graph + multi-engine coordination) ----------

  /* One Session per mount. It owns the shared signal chain
   *   per-engine gainNode(s) -> filter -> masterGain -> timerGain -> destination
   * and the session-wide state (timer, volume, circadian, ticker), so those
   * survive set switches and apply uniformly across layers. */
  function Session(opts, ui) {
    this.opts = opts;
    this.ui = ui;
    this.ctx = null;
    this.filter = null;
    this.masterGain = null;
    this.timerGain = null;
    this.engines = [];        // one Engine per set (or per layer)
    this.activeEngine = null; // sets mode: the selected set; layers mode: engines[0]
    this.mode = 'sets';       // 'sets' | 'layers'
    this.timerEnd = null;     // Date.now() ms when timer fires
    this._timerMinutes = 0;
    this._timerTO = null;
    this.tickId = null;
    this._disposed = false;
    this._switchGen = 0;      // invalidated by stop()/dispose()
    this._soloIdx = null;     // layers mode: index of the soloed layer
    this._elapsedBase = 0;    // layers mode: elapsed play time (position display)
    this._playStart = 0;
  }

  Session.prototype.ensureContext = function () {
    if (this.ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 20000;
    this.filter.Q.value = 0.0001;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.ui.getVolume();
    this.timerGain = this.ctx.createGain(); // owned by the session timer fade
    this.timerGain.gain.value = 1;
    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.timerGain);
    this.timerGain.connect(this.ctx.destination);
  };

  // Per-engine output gain (used as the set crossfade / layer level stage).
  Session.prototype.createEngineGain = function (engine) {
    var g = this.ctx.createGain();
    var base;
    if (this.mode === 'layers') {
      base = engine._layerGain * (this.opts.normalizeLayers ? 1 / Math.sqrt(this.engines.length) : 1);
    } else {
      base = engine === this.activeEngine ? 1 : 0;
    }
    g.gain.value = base;
    g.connect(this.filter);
    return g;
  };

  Session.prototype._startTicker = function () {
    var self = this;
    if (this.tickId) clearInterval(this.tickId);
    this.tickId = setInterval(function () {
      if (self._disposed) { clearInterval(self.tickId); return; }
      self._tick();
    }, this.opts.poll);
  };

  Session.prototype._tick = function () {
    var i, e, anyPlaying = false, anyDecodable = false;
    if (this.mode === 'layers') {
      for (i = 0; i < this.engines.length; i++) {
        e = this.engines[i];
        if (e.state === 'playing' && !e.decodeFailed) e._scheduleTick();
        if (e.state === 'playing') anyPlaying = true;
        if (!e.decodeFailed) anyDecodable = true;
      }
    } else {
      for (i = 0; i < this.engines.length; i++) {
        e = this.engines[i];
        // drive the active set AND sets still fading out (a retiring set's
        // fade can outlast the scheduling lookahead; its timeline must stay
        // filled until its sources are retired)
        if (e === this.activeEngine || e._retiring) {
          if (e.state === 'playing' && !e.decodeFailed) e._scheduleTick();
          if (e.state === 'playing') anyPlaying = true;
        }
        if (!e.decodeFailed) anyDecodable = true;
      }
    }
    if (anyPlaying) this.ui.updatePosition();
    if (anyDecodable) this._applyCircadian();
    this._checkTimer();
    if (this.timerEnd) this.ui.updateTimer(null);
  };

  Session.prototype._applyCircadian = function () {
    if (!this.ui.circadianOn() || !this.filter || !this.ctx) return;
    var c = circadian(new Date().getHours());
    this.filter.frequency.setTargetAtTime(c.cutoff, this.ctx.currentTime, 2.0);
    // level trim only when not muted; keep user volume separate
    this.masterGain.gain.setTargetAtTime(this.ui.getVolume() * c.gain, this.ctx.currentTime, 2.0);
  };

  Session.prototype.setVolume = function (v) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
    }
    for (var i = 0; i < this.engines.length; i++) {
      if (this.engines[i].fallbackAudio) this.engines[i].fallbackAudio.volume = v;
    }
  };

  Session.prototype.setTimer = function (minutes) {
    this.timerEnd = minutes ? Date.now() + minutes * 60000 : null;
    this._timerMinutes = minutes || 0;
    // any timer change cancels a pending stop fade and restores the envelope
    if (this._timerTO) { clearTimeout(this._timerTO); this._timerTO = null; }
    if (this.timerGain && this.ctx) { this.timerGain.gain.cancelScheduledValues(this.ctx.currentTime); this.timerGain.gain.setTargetAtTime(1, this.ctx.currentTime, 0.05); }
    this.ui.updateTimer(this.timerEnd ? this._timerMinutes * 60 : null);
  };

  Session.prototype._checkTimer = function () {
    if (!this.timerEnd) return;
    if (Date.now() >= this.timerEnd) {
      // gentle 8-second fade then stop (timerGain is separate from volume,
      // so circadian/volume ticks can't fight the fade)
      var self = this;
      if (this.timerGain && this.ctx) {
        this.timerGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 2.5);
        if (this._timerTO) clearTimeout(this._timerTO);
        this._timerTO = setTimeout(function () {
          self._timerTO = null;
          self.stop(); // restores timerGain to 1
        }, 8500);
      } else {
        // all engines in <audio> fallback: pause them, then reset the session
        for (var i = 0; i < this.engines.length; i++) {
          var e = this.engines[i];
          if (e.decodeFailed && e.fallbackAudio) { try { e.fallbackAudio.pause(); } catch (x) {} }
        }
        this.stop();
      }
      this.timerEnd = null;
      this.ui.updateTimer(null);
    }
  };

  Session.prototype.playingState = function () {
    if (this.mode === 'layers') {
      var playing = false, paused = false;
      for (var i = 0; i < this.engines.length; i++) {
        if (this.engines[i].state === 'playing') playing = true;
        else if (this.engines[i].state === 'paused') paused = true;
      }
      return playing ? 'playing' : (paused ? 'paused' : 'idle');
    }
    return this.activeEngine ? this.activeEngine.state : 'idle';
  };

  // position/total for the display: per-pass position of the active set,
  // or elapsed session time in layers mode (layers drift, so a single
  // per-pass position would be meaningless there).
  Session.prototype.displayPosition = function () {
    if (this.mode === 'layers') {
      if (this.playingState() !== 'playing' || !this.ctx) return this._elapsedBase;
      return this._elapsedBase + (this.ctx.currentTime - this._playStart);
    }
    return this.activeEngine ? this.activeEngine.position() : 0;
  };

  Session.prototype.displayTotal = function () {
    if (this.mode === 'layers') return Infinity;
    return this.activeEngine ? this.activeEngine.totalDuration() : 0;
  };

  Session.prototype.play = function () {
    this.ensureContext();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    if (this.mode === 'layers') {
      var started = false;
      for (var i = 0; i < this.engines.length; i++) {
        if (this.engines[i].state !== 'playing') { this.engines[i].play(); started = true; }
      }
      if (started) this._playStart = this.ctx.currentTime;
    } else if (this.activeEngine) {
      this.activeEngine.play();
    }
  };

  Session.prototype.pause = function () {
    if (this.mode === 'layers') {
      if (!this.ctx) return;
      this._elapsedBase += Math.max(0, this.ctx.currentTime - this._playStart);
      for (var i = 0; i < this.engines.length; i++) this.engines[i].pause();
    } else if (this.activeEngine) {
      this.activeEngine.pause();
    }
  };

  Session.prototype.stop = function () {
    this._switchGen++; // invalidate pending crossfade retirements
    // stop cancels the session timer outright: an old deadline (or its
    // pending fade timeout) must never stop a subsequently restarted session
    this.timerEnd = null;
    if (this._timerTO) { clearTimeout(this._timerTO); this._timerTO = null; }
    for (var i = 0; i < this.engines.length; i++) {
      var e = this.engines[i];
      if (e._retireTO) { clearTimeout(e._retireTO); e._retireTO = null; }
      if (this.mode === 'layers' || e === this.activeEngine) e.stop();
      else {
        // non-active sets freeze at their remembered position (resume later)
        e._playGen++; // a pending decode must not revive this engine
        e._pendingGainRamp = null;
        e._stopSources();
        if (e.state === 'playing') { e._commitPendingResume(); e.state = 'paused'; }
        if (e.decodeFailed && e.fallbackAudio) { try { e.fallbackAudio.pause(); } catch (x) {} }
      }
    }
    this._elapsedBase = 0;
    if (this.timerGain && this.ctx) { this.timerGain.gain.cancelScheduledValues(this.ctx.currentTime); this.timerGain.gain.setTargetAtTime(1, this.ctx.currentTime, 0.05); }
    this.ui.updateTimer(null);
    this.ui.update();
  };

  Session.prototype.jumpTo = function (idx) {
    if (this.mode === 'layers') {
      for (var i = 0; i < this.engines.length; i++) this.engines[i].jumpTo(Math.min(idx, this.engines[i]._segmentCount() - 1));
    } else if (this.activeEngine) {
      this.activeEngine.jumpTo(idx);
    }
  };

  Session.prototype.random = function () {
    if (this.mode === 'layers') {
      for (var i = 0; i < this.engines.length; i++) this.engines[i].random();
    } else if (this.activeEngine) {
      this.activeEngine.random();
    }
  };

  // Switch the active set with a designed equal-power crossfade. The outgoing
  // set's position is captured first (it resumes there next time); its sources
  // keep sounding into the fade and are retired when it completes.
  Session.prototype.switchSet = function (id) {
    var target = null, i;
    for (i = 0; i < this.engines.length; i++) if (this.engines[i].setId === id) target = this.engines[i];
    if (!target || target === this.activeEngine) return;
    var out = this.activeEngine;
    this.ensureContext();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this._switchGen++;

    var cf = Math.max(0.05, this.opts.setCrossfade);
    var wasPlaying = out && out.state === 'playing';

    this.activeEngine = target;

    if (out) {
      if (out.decodeFailed) {
        // <audio> fallback: no shared gain stage — hand over cleanly
        out._snapshotPosition();
        out._retire();
      } else if (wasPlaying) {
        out._snapshotPosition(); // freeze position for the next visit
        out._retiring = true; // keep its scheduler driven through the fade
        var outSelf = out;
        out._retireTO = setTimeout(function () {
          outSelf._retireTO = null;
          outSelf._retire();
        }, (cf + 0.3) * 1000);
        this._rampEngineGain(out, 0.0001, cf);
      } else {
        this._rampEngineGain(out, 0.0001, 0.05);
      }
    }

    // incoming: the fade-in ramp is applied when the material actually starts
    // (a slow first decode then delays the fade, not the sound), or immediately
    // if the set is already playing (a mid-fade re-activation).
    target.ensureContext();
    if (target._retireTO) { clearTimeout(target._retireTO); target._retireTO = null; }
    target._retiring = false; // re-activated: it is the active set again
    if (wasPlaying) {
      var from = target._everActivated ? target.gainNode.gain.value : 0.0001;
      if (target.state === 'playing') {
        this._rampEngineGain(target, 1, cf, from);
      } else {
        target._pendingGainRamp = { to: 1, dur: cf, from: from };
        target._resumeFade = 0.8; // gentle fade-in on the resumed material
      }
      target._everActivated = true;
      target.play(); // resumes from its captured position, or fresh
    } else {
      this._rampEngineGain(target, 1, 0.05);
    }
    this.ui.onSetSwitched(target);
    this.ui.update();
  };

  Session.prototype._rampEngineGain = function (engine, to, dur, fromOverride) {
    if (!engine.gainNode) return;
    var now = this.ctx.currentTime;
    var from = (typeof fromOverride === 'number') ? fromOverride : engine.gainNode.gain.value;
    try {
      // cancel any in-flight automation first so rapid retargeting can never
      // fight an older curve (from = current computed value, so no jump)
      engine.gainNode.gain.cancelScheduledValues(now);
      engine.gainNode.gain.setValueAtTime(from, now);
      engine.gainNode.gain.setValueCurveAtTime(fadeCurve(from, to), now, dur);
    } catch (e) {
      engine.gainNode.gain.cancelScheduledValues(now);
      engine.gainNode.gain.setValueAtTime(from, now);
      engine.gainNode.gain.linearRampToValueAtTime(to, now + dur);
    }
  };

  // Add a set at runtime (FCPlayer.loadSet). Switches to it when playing.
  Session.prototype.addSet = function (def) {
    var engine = makeEngine(def, this);
    this.engines.push(engine);
    this.ui._renderSets();
    return engine;
  };

  // Solo one layer (or restore all with idx == null). Timelines keep running —
  // only the layer gain stages crossfade.
  Session.prototype.soloLayer = function (idx) {
    if (this.mode !== 'layers') return;
    this.ensureContext();
    this._soloIdx = (idx === this._soloIdx) ? null : idx;
    var sf = Math.max(0.05, this.opts.soloFade);
    for (var i = 0; i < this.engines.length; i++) {
      var e = this.engines[i];
      var base = e._layerGain * (this.opts.normalizeLayers ? 1 / Math.sqrt(this.engines.length) : 1);
      var target = (this._soloIdx != null && i !== this._soloIdx) ? 0.0001 : base;
      this._rampEngineGain(e, target, sf);
    }
    this.ui._highlightLayers(); // classes only — rebuilding rows mid-click detaches the event target
  };

  Session.prototype.layerBaseGain = function (i) {
    var e = this.engines[i];
    return e._layerGain * (this.opts.normalizeLayers ? 1 / Math.sqrt(this.engines.length) : 1);
  };

  Session.prototype.dispose = function () {
    this._disposed = true;
    this._switchGen++;
    if (this.tickId) clearInterval(this.tickId);
    if (this._timerTO) clearTimeout(this._timerTO);
    for (var i = 0; i < this.engines.length; i++) {
      var e = this.engines[i];
      e._disposed = true;
      e._playGen++;
      e._pendingGainRamp = null;
      if (e._retireTO) { clearTimeout(e._retireTO); e._retireTO = null; }
      e._stopSources();
      // closing the AudioContext does not stop plain <audio> elements
      if (e.fallbackAudio) { try { e.fallbackAudio.pause(); } catch (x) {} }
      if (e._objUrls) e._objUrls.forEach(function (u) { try { URL.revokeObjectURL(u); } catch (x) {} });
    }
    if (this.ctx) { try { this.ctx.close(); } catch (x) {} }
  };

  // ---------- audio engine (one per set / per layer) ----------

  function Engine(opts, ui, session) {
    var self = this;
    this.opts = opts;
    this.ui = ui;
    this.session = session;
    this.setId = opts.setId;
    this._layerGain = (typeof opts.gain === 'number') ? opts.gain : 1;

    this.ctx = null;           // === session.ctx once ensured
    this.gainNode = null;      // per-engine output gain (set crossfade / layer level)
    this.masterGain = null;    // session-owned (kept for API compat)
    this.timerGain = null;     // session-owned (kept for API compat)
    this.filter = null;        // session-owned (kept for API compat)
    this.buffers = [];        // decoded AudioBuffers, index-aligned
    this.decodeFailed = false;
    this.fallbackAudio = null;// <audio> element fallback
    this.fallbackIndex = 0;

    this.state = 'idle';      // idle | playing | paused
    this.segIndex = 0;        // index of the segment currently scheduled/playing
    this.segOffset = 0;       // offset within that segment (pause position)
    this.timelineStart = 0;   // ctx time when current segment started
    this.nextTime = 0;        // ctx time for the next segment start
    this.sources = [];         // live AudioBufferSourceNodes
    this.timerEnd = null;     // mirror of session timerEnd (display compat)
    this.timerRAF = null;
    this.rafId = null;
    this.tickId = null;
    this._timerTO = null;
    this._disposed = false;    // set on dispose(); async callbacks must not revive the engine
    this._playGen = 0;         // playback generation token: stop()/dispose() invalidate pending starts
    this._loopStart = 0;       // first track index of the AUDIBLE pass
    this._nextLoopStart = null; // queued start of the next pass (set at wrap scheduling)
    this._schedLoopStart = 0;  // first track index of the pass the SCHEDULER is filling
    this._passOrigin = 0;      // ctx time when the current pass began (position is per-pass)
    this._passOrigins = [];     // every scheduled pass origin, ascending — position() uses the latest at or before the clock
    this._prevPassOrigin = null;
    this._pausedPos = 0;       // position within the pass, captured at pause
    this._pendingPassStart = false; // next scheduled segment begins a new pass
    this._pendingPassFade = 0.05;   // fade-in length for that pass-start segment
    this._resumeFade = 0.05;        // fade-in length for the next resume (jumps use a longer one)
    this._retireTO = null;     // pending post-crossfade retirement timer
    this._retiring = false;    // true while fading out after a set switch (scheduler stays driven)
    this._pendingResume = null; // resume snapshot taken at switch-away (committed on retire/pause)
    this._pendingGainRamp = null; // gain ramp deferred until playback actually starts
    this._everActivated = false;  // has ever been switched to / played (gain-ramp start point)
  }

  Engine.prototype._spanOf = function (buf) {
    if (!buf) return { offset: 0, duration: 0 };
    if (this.opts.trimSilence === false) return { offset: 0, duration: buf.duration };
    return contentSpan(buf);
  };

  Engine.prototype.totalDuration = function () {
    var t = 0, n = this._segmentCount();
    for (var i = 0; i < n; i++) {
      // decoded content duration if known; otherwise estimate from segment 0 (or 60s)
      t += this.buffers[i] ? this._spanOf(this.buffers[i]).duration : (this.buffers[0] ? this._spanOf(this.buffers[0]).duration : 60);
    }
    return t;
  };

  Engine.prototype.position = function () {
    if (this.decodeFailed && this.fallbackAudio) {
      // <audio> fallback: position from the element + per-segment durations
      // learned from loadedmetadata events
      return this._elapsedBefore(this.fallbackIndex) + (this.fallbackAudio.currentTime || 0);
    }
    if (!this.ctx || !this.buffers.length) return 0;
    if (this.state === 'playing') {
      // position is per-pass: time since the current pass through the set began.
      // Passes can be SCHEDULED ahead of the clock (lookahead 2.5 s; a short set
      // wraps inside it), so use the latest scheduled origin at or before the
      // clock — never a future one (which would read as a negative position).
      var now = this.ctx.currentTime;
      for (var i = this._passOrigins.length - 1; i >= 0; i--) {
        if (this._passOrigins[i] <= now) return Math.min(now - this._passOrigins[i], this.totalDuration());
      }
      return 0;
    }
    return this._pausedPos || 0;
  };

  Engine.prototype._elapsedBefore = function (i) {
    var t = 0;
    for (var k = 0; k < i; k++) {
      t += this.buffers[k] ? this._spanOf(this.buffers[k]).duration : (this._fbDurations && this._fbDurations[k]) || 60;
    }
    return t;
  };

  // duration of a single segment (decoded, fallback-learned, or 60s estimate)
  Engine.prototype._segmentDuration = function (i) {
    if (this.buffers[i]) return this._spanOf(this.buffers[i]).duration;
    if (this._fbDurations && this._fbDurations[i]) return this._fbDurations[i];
    return this.buffers[0] ? this.buffers[0].duration : 60;
  };

  Engine.prototype.ensureContext = function () {
    this.session.ensureContext();
    this.ctx = this.session.ctx;
    this.filter = this.session.filter;
    this.masterGain = this.session.masterGain;
    this.timerGain = this.session.timerGain;
    if (!this.gainNode) {
      this.gainNode = this.session.createEngineGain(this);
    }
  };

  // Fetch + decode one segment. Returns a promise.
  Engine.prototype.loadBuffer = function (i) {
    var self = this;
    if (this.buffers[i]) return Promise.resolve(this.buffers[i]);
    if (this._loading && this._loading[i]) return this._loading[i];
    this._loading = this._loading || {};

    var p = this._segmentData(i).then(function (buf) {
      return new Promise(function (resolve, reject) {
        self.ctx.decodeAudioData(buf, resolve, function (err) { reject(err); });
      });
    }).then(function (audioBuf) {
      if (self.opts.trimSilence !== false) contentSpan(audioBuf); // memoize the span off the scheduling path
      self.buffers[i] = audioBuf;
      delete self._loading[i];
      if (self === self.session.activeEngine) self.ui.refreshTracks(); // durations become known as segments decode
      return audioBuf;
    }).catch(function (err) {
      delete self._loading[i];
      throw err;
    });
    this._loading[i] = p;
    return p;
  };

  Engine.prototype._segmentData = function (i) {
    if (this.opts.files) {
      return this.opts.files[i].arrayBuffer ? this.opts.files[i].arrayBuffer() : Promise.resolve(this.opts.files[i]);
    }
    return fetch(this._segmentURL(i)).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + r.url);
      return r.arrayBuffer();
    });
  };

  Engine.prototype._segmentURL = function (i) {
    if (this.opts.segments) return this.opts.segments[i];
    if (this.opts.files) {
      // local-file mode: object URLs for the <audio> fallback
      this._objUrls = this._objUrls || [];
      if (!this._objUrls[i]) this._objUrls[i] = URL.createObjectURL(this.opts.files[i]);
      return this._objUrls[i];
    }
    var s = this.opts.source;
    return s.dir.replace(/\/?$/, '/') + s.pattern
      .replace(/%0(\d+)d/, function (m, pad) { return String(i).padStart(parseInt(pad, 10), '0'); })
      .replace(/%d/, String(i));
  };

  Engine.prototype._prefetch = function () {
    // keep the next 3 segments decoded (segIndex = next to schedule)
    var n = this._segmentCount();
    for (var k = 0; k < 3; k++) {
      var idx = this.segIndex + k;
      if (idx < n) this.loadBuffer(idx).catch(function () {});
    }
  };

  Engine.prototype._scheduleTick = function () {
    var self = this;
    if (this.state !== 'playing' || this.decodeFailed) return;
    var gen = this._playGen; // invalidated by stop()/play()/dispose()
    // schedule while nextTime is within lookahead
    while (this.nextTime < this.ctx.currentTime + this.opts.lookahead) {
      var idx = this.segIndex;
      var buf = this.buffers[idx];
      if (!buf) {
        // not decoded yet — we're stuck; will retry on next tick
        if (this._disposed) return;
        this.loadBuffer(idx).then(function () { if (!self._disposed && gen === self._playGen) self._scheduleTick(); }).catch(function (e) { if (!self._disposed && gen === self._playGen) self._fail(e); });
        return;
      }
      // underrun guard: if the timeline fell behind the clock (a later segment
      // decoded late), rebase before scheduling instead of stacking sources
      if (this.nextTime < this.ctx.currentTime - 0.05) {
        var newStart = this.ctx.currentTime + 0.06;
        var rebaseDelta = newStart - this.nextTime;
        this._passOrigin += rebaseDelta; // keep position continuous
        for (var ro = 0; ro < this._passOrigins.length; ro++) this._passOrigins[ro] += rebaseDelta;
        this.nextTime = newStart;
        this._frontIdx = idx;
        this.timelineStart = this.nextTime;
      }
      var when = this.nextTime;
      if (this._pendingPassStart) {
        // this segment begins a new pass through the set — anchored at itself.
        // Pass metadata must travel with the QUEUED plan, not the audible
        // pass: a rotated start can coincide with the audible pass-final
        // index, and using the audible pass here would double-wrap and
        // misplace the loop fade.
        this._schedLoopStart = idx;
        this._prevPassOrigin = this._passOrigin; // outgoing pass (may still be audible)
        this._passOrigin = when;
        this._passOrigins.push(when);
        // prune by time (keep recent past + queued future), not just count
        var cut = this.ctx.currentTime - 60;
        this._passOrigins = this._passOrigins.filter(function (t) { return t >= cut; });
        this._pendingPassStart = false;
      }
      var scheduled = this._scheduleSegment(idx, buf, when, 0, this._pendingPassFade, this._schedLoopStart);
      this._pendingPassFade = 0.05;
      // advance by this source's timeline delta (its length minus the junction
      // overlap its successor will start early by) so the next butt position
      // equals this source's audible end
      this.nextTime += (scheduled && scheduled._fcpAdvance) || this._spanOf(buf).duration;
      // wrap: after the pass-final segment (of the pass being scheduled),
      // the next pass starts at a new track. With rotatePasses, that track
      // is random (never the same start twice in a row); order within the
      // pass is preserved. Without rotation, the ordered loop restarts at
      // the first track.
      var n = this._segmentCount();
      var nextIdx;
      if (idx === (this._schedLoopStart + n - 1) % n) {
        var k;
        if (this.opts.rotatePasses) {
          k = Math.floor(Math.random() * n);
          if (n > 1 && k === this._schedLoopStart) k = (k + 1 + Math.floor(Math.random() * (n - 1))) % n;
        } else {
          k = 0;
        }
        this._schedLoopStart = k;
        this._nextLoopStart = k;
        this._pendingPassStart = true;
        this._pendingPassFade = 1.2; // gentle fade-in on the new pass
        nextIdx = k;
      } else {
        nextIdx = (idx + 1) % n;
      }
      this.segIndex = nextIdx;
      if (scheduled) scheduled._fcpNext = nextIdx; // successor may be rotated
      this._prefetch();
    }
    this.ui.updatePosition();
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(function loop() {
      if (self.state === 'playing') { self.ui.updatePosition(); self.rafId = requestAnimationFrame(loop); }
    });
  };

  Engine.prototype._scheduleSegment = function (idx, buf, when, offset, fadeIn, passLoopStart) {
    var self = this;
    var src = this.ctx.createBufferSource();
    src.buffer = buf;

    if (fadeIn == null) fadeIn = 0.05;
    // a fade-in longer than the segment is meaningless and its ramp would
    // overrun the junction tail curve (scheduling both on one param throws) —
    // cap it at 85 % of the (content) length
    if (fadeIn > 0.06) fadeIn = Math.min(fadeIn, dur * 0.85);
    var n = this._segmentCount();
    if (passLoopStart == null) passLoopStart = this._loopStart;
    // pass-final is judged against the pass this segment BELONGS to (the
    // queued plan's pass while scheduling ahead, not necessarily the audible one)
    var isPassFinal = idx === (passLoopStart + n - 1) % n;
    var span = this._spanOf(buf);
    var dur = span.duration - offset;

    // ---- junction-aware fade ----
    // When this segment butt-joins a still-sounding predecessor and no
    // designed fade covers the junction, overlap the two by `junctionFade`
    // seconds with complementary equal-power curves: the predecessor's tail
    // fades out while this segment fades in over the same window. Any
    // residual boundary step (encoder artifacts, non-continuous material)
    // becomes inaudible instead of a click. Designed transitions (pass wrap
    // fades, jump/resume fade-ins) keep their own curves and skip this.
    var jf = 0;
    var prev = this._jfPrev;
    if (this.opts.junctionFade > 0 && offset === 0 && fadeIn <= 0.06 && dur > 0.2 &&
        prev && prev.src && Math.abs(prev.end - when) < 0.001 &&
        this.sources.indexOf(prev.src) >= 0) {
      // ≤ 10 % of the shorter side: the overlap window must stay clear of any
      // fade-in ramp on the predecessor (85 % cap above) on the same param
      jf = Math.min(this.opts.junctionFade, dur / 10, prev.dur / 10);
    }

    var g = this.ctx.createGain();
    if (fadeIn > 0.06) {
      // gentle fade-in (new pass after a wrap, or a track jump)
      g.gain.setValueAtTime(0.0001, when);
      g.gain.linearRampToValueAtTime(1, when + fadeIn);
    }
    if (jf > 0) {
      // equal-power crossfade across the junction overlap. The predecessor's
      // curve goes on FIRST and the incoming curve is only committed after it
      // succeeds — a throw mid-way rolls the predecessor back instead of
      // leaving a half-applied crossfade.
      var prevStart = when - jf;
      try {
        prev.gain.gain.setValueCurveAtTime(fadeCurve(1, 0.0001), prevStart, jf);
      } catch (e1) { jf = 0; }
      if (jf > 0) {
        try {
          g.gain.setValueCurveAtTime(fadeCurve(0.0001, 1), prevStart, jf);
          when = prevStart;
          prev.src._fcpTailJf = jf; // the successor starts jf before this source ends
        } catch (e2) {
          try {
            prev.gain.gain.cancelScheduledValues(prevStart);
            prev.gain.gain.setValueAtTime(1, prevStart);
          } catch (e3) {}
          jf = 0;
        }
      }
    }
    if (isPassFinal) {
      // designed loop transition: fade the pass-final segment's tail out; the
      // next pass fades back in over its own fade-in. The fade is capped at
      // 90% of the (content) duration so short segments can never push the
      // fade start into the past or inside the junction curve, and the ramp
      // end stays ordered after the fade start.
      var fo = Math.min(this.opts.loopFadeOut, dur * 0.9);
      var foAt = Math.max(when + jf + 0.001, when + dur - fo);
      g.gain.setValueAtTime(1, foAt);
      g.gain.linearRampToValueAtTime(0.0001, Math.max(foAt + 0.01, when + dur - 0.05));
    }
    src.connect(g); g.connect(this.gainNode || this.filter);

    src._fcpSchedDur = dur; // scheduled (content) length, for position math
    src._fcpFullDur = span.duration; // full content length (resume advance uses this)
    src._fcpAdvance = dur - jf; // timeline delta the scheduler advances by
    src._fcpWhen = when; // scheduled start (QA rendering)
    src.start(when, span.offset + offset, dur);
    this._jfPrev = { src: src, gain: g, end: when + dur, dur: dur };
    this.sources.push(src);
    src.onended = function () {
      var at = self.sources.indexOf(src);
      if (at < 0) return; // this source was stopped (pause/jump/stop) — not a natural end; do nothing
      self.sources.splice(at, 1);
      // advance the "current segment" marker if this was the front-most source;
      // the successor may be a rotated pass start, not idx+1
      if (self.state === 'playing' && self.sources.length && self._frontIdx === idx) {
        var next = (this._fcpNext != null) ? this._fcpNext : (idx + 1) % self._segmentCount();
        if (next !== (idx + 1) % self._segmentCount()) {
          // the front crossed a wrap boundary: the queued pass becomes audible
          self._loopStart = (self._nextLoopStart != null) ? self._nextLoopStart : next;
          self._nextLoopStart = null;
        }
        self._frontIdx = next;
        // advance the timeline by this segment's FULL content length minus
        // the junction overlap its successor started early by. The full
        // length (not the scheduled remaining) matters for resumed sources:
        // the resume path already subtracted the offset when it set
        // timelineStart, so subtracting it here too would double-count it.
        self.timelineStart += (this._fcpFullDur || buf.duration) - (this._fcpTailJf || 0);
      }
    };
    return src;
  };

  Engine.prototype._frontIdx = 0;

  Engine.prototype.play = function () {
    var self = this;
    if (this.decodeFailed) { this._fallbackPlay(); return; }
    this._playGen++; // invalidate any pending start from an earlier click
    var gen = this._playGen;
    this.ensureContext();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    if (this.state === 'paused') {
      // resume from segIndex/segOffset
      var resumeWhen = this.ctx.currentTime + 0.06;
      var idx = this.segIndex;
      var buf = this.buffers[idx];
      if (!buf) {
        // target not decoded yet — retry, guarded by the generation token so a
        // stop() while decoding can never revive the engine
        var genRetry = this._playGen;
        this.loadBuffer(idx).then(function () {
          if (!self._disposed && genRetry === self._playGen) self.play();
        }).catch(function (e) {
          if (!self._disposed && genRetry === self._playGen) self._fail(e);
        });
        return;
      }
      // virtual start of the segment in the timeline, so position() stays exact
      this.timelineStart = resumeWhen - this.segOffset;
      this._passOrigin = resumeWhen - (this._pausedPos || 0);
      this._passOrigins = [this._passOrigin]; // the resumed pass is the only live pass
      this._prevPassOrigin = null;
      // discard any stale scheduling flags from the pre-pause queued plan;
      // they are rebuilt below if the resumed segment is the pass-final
      this._pendingPassStart = false;
      this._pendingPassFade = 0.05;
      this._schedLoopStart = this._loopStart; // the resumed segment belongs to the audible pass
      var resumed = this._scheduleSegment(idx, buf, resumeWhen, this.segOffset, this._resumeFade, this._loopStart);
      this._resumeFade = 0.05; // consumed; next resume is a normal one
      this.nextTime = resumeWhen + (this._spanOf(buf).duration - this.segOffset);
      // rebuild the queued plan from the AUDIBLE state: the successor of the
      // resumed segment is idx+1, unless the resumed segment is the pass-final,
      // in which case the queued next pass (or a fresh pick) begins
      var n = this._segmentCount();
      var succ = (idx + 1) % n;
      if (idx === (this._loopStart + n - 1) % n) {
        if (this._nextLoopStart == null) {
          if (this.opts.rotatePasses) {
            var kk = Math.floor(Math.random() * n);
            if (n > 1 && kk === this._loopStart) kk = (kk + 1 + Math.floor(Math.random() * (n - 1))) % n;
            this._nextLoopStart = kk;
          } else {
            this._nextLoopStart = 0;
          }
        }
        succ = this._nextLoopStart;
        this._pendingPassStart = true;  // that successor begins a new pass
        this._pendingPassFade = 1.2;
        this._schedLoopStart = succ;   // and the scheduler is now filling that pass
      }
      this.segIndex = succ;
      if (resumed) resumed._fcpNext = succ;
      this.segOffset = 0;
      this._frontIdx = idx;
      this.state = 'playing';
      this._everActivated = true;
      this._applyPendingGainRamp();
      this.session._startTicker();
      this._scheduleTick();
      this.ui.update();
      return;
    }

    if (this.state === 'playing') return; // already playing

    // fresh start — decode the first segment BEFORE fixing the start time,
    // so a slow decode can never push the first start into the past
    this._frontIdx = 0;
    this.segIndex = 0;
    this.segOffset = 0;
    this._loopStart = 0;
    this._schedLoopStart = 0;
    this._nextLoopStart = null;
    this._pausedPos = 0;
    this._pendingPassStart = true;  // first segment begins the first pass
    this._pendingPassFade = 0.05;
    this.loadBuffer(0).then(function () {
      if (self._disposed || gen !== self._playGen) return; // superseded or stopped
      self.nextTime = self.ctx.currentTime + 0.06;
      self.timelineStart = self.nextTime;
      self.state = 'playing';
      self._everActivated = true;
      self._applyPendingGainRamp();
      self.session._startTicker();
      self._scheduleTick();
      self._prefetch();
      self.ui.update();
    }).catch(function (e) { if (!self._disposed && gen === self._playGen) self._fail(e); });
  };

  // apply a crossfade ramp that was deferred until playback actually starts
  Engine.prototype._applyPendingGainRamp = function () {
    var r = this._pendingGainRamp;
    this._pendingGainRamp = null;
    if (!r || !this.gainNode) return;
    this.session._rampEngineGain(this, r.to, r.dur, r.from);
  };

  // jump to a specific segment index (used by track selection and random)
  Engine.prototype.jumpTo = function (idx) {
    var n = this._segmentCount();
    if (!n) return;
    idx = Math.max(0, Math.min(idx, n - 1));
    if (this.decodeFailed) {
      var a = this.fallbackAudio;
      this.fallbackIndex = idx;
      if (a) {
        a.src = this._segmentURL(idx);
        a.play().catch(function () {});
        this.state = 'playing';
        this.session._startTicker();
      }
      this.ui.update();
      return;
    }
    this.ensureContext();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this._playGen++; // invalidate pending starts
    this._stopSources();
    this.segIndex = idx;
    this.segOffset = 0;
    this._frontIdx = idx;
    if (this.opts.rotatePasses) { this._loopStart = idx; this._schedLoopStart = idx; } // jumped-to track anchors a new pass
    this._nextLoopStart = null;
    this._pausedPos = 0;     // position display restarts for the new pass
    this._resumeFade = 0.8;  // gentle fade-in on the jump
    this.state = 'paused'; // resume path will schedule this segment from its start
    this.play();
  };

  // jump to a random segment
  Engine.prototype.random = function () {
    var n = this._segmentCount();
    if (!n) return;
    this.jumpTo(Math.floor(Math.random() * n));
  };

  // Compute the current resume snapshot (segment + offset + per-pass
  // position) WITHOUT touching the live scheduler fields. Switching away from
  // a set must not corrupt its scheduling cursor — a rapid A→B→A switch keeps
  // the engine playing, and its scheduler must continue from the NEXT segment
  // it was filling. The snapshot is only committed when the engine actually
  // stops sounding (pause, retire, session stop).
  Engine.prototype._snapshotPosition = function () {
    if (this.decodeFailed && this.fallbackAudio) {
      this._fbResumeTime = this.fallbackAudio.currentTime || 0;
      return null;
    }
    if (this.state !== 'playing') return null;
    var pos = this.position();
    var fi = this._frontIdx;
    var buf = this.buffers[fi];
    if (!buf) return null;
    var off = Math.min(Math.max(this.ctx.currentTime - this.timelineStart, 0), this._spanOf(buf).duration);
    this._pendingResume = { idx: fi, offset: off, pos: pos };
    return this._pendingResume;
  };

  // Commit the pending resume snapshot to the live resume fields (engine is
  // now silent; the next play() resumes from here).
  Engine.prototype._commitPendingResume = function () {
    var snap = this._pendingResume;
    this._pendingResume = null;
    if (!snap) return;
    this.segIndex = snap.idx;
    this.segOffset = snap.offset;
    this._pausedPos = snap.pos;
  };

  Engine.prototype.pause = function () {
    if (this.decodeFailed) { if (this.fallbackAudio) this.fallbackAudio.pause(); this.state = 'paused'; this.ui.update(); return; }
    if (this.state !== 'playing') return;
    // capture the front source's segment and offset directly, plus the
    // position within the current pass (position() handles the scheduled-ahead
    // next pass correctly)
    this._snapshotPosition();
    this._stopSources();
    this._commitPendingResume();
    this.state = 'paused';
    this.ui.update();
  };

  // stop sounding after a crossfade: sources stop, state becomes 'paused' with
  // the position captured at switch time (so the set resumes there)
  Engine.prototype._retire = function () {
    if (this._retireTO) { clearTimeout(this._retireTO); this._retireTO = null; }
    this._playGen++; // a pending decode must not revive this engine
    this._pendingGainRamp = null;
    this._retiring = false;
    this._stopSources();
    if (this.state === 'playing') { this._commitPendingResume(); this.state = 'paused'; }
    if (this.decodeFailed && this.fallbackAudio) { try { this.fallbackAudio.pause(); } catch (e) {} }
    this.ui.update();
  };

  Engine.prototype.stop = function () {
    this._playGen++; // invalidate any pending start
    this._pendingGainRamp = null;
    this._retiring = false;
    this._pendingResume = null;
    this._stopSources();
    if (this.fallbackAudio) { try { this.fallbackAudio.pause(); } catch (e) {} }
    this.state = 'idle';
    this.segIndex = 0; this.segOffset = 0;
    this._pausedPos = 0;
    this._pendingPassStart = false;
    this._prevPassOrigin = null;
    this._passOrigins = [];
    this._nextLoopStart = null;
    this._schedLoopStart = 0;
    this._resumeFade = 0.05;
    this.timerEnd = null;
    this.ui.update();
  };

  Engine.prototype._stopSources = function () {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this._jfPrev = null; // no predecessor sounds after a stop — junction fades reset
    for (var i = 0; i < this.sources.length; i++) {
      try { this.sources[i].stop(); } catch (e) {}
    }
    this.sources = [];
  };

  // session-owned concerns (kept as engine methods for API compatibility)
  Engine.prototype.setVolume = function (v) { this.session.setVolume(v); };
  Engine.prototype.setTimer = function (m) { this.session.setTimer(m); };

  Engine.prototype._fail = function (err) {
    if (this.decodeFailed || this._disposed) return; // fail once, and never post-dispose
    console.warn('[FCPlayer] buffer decode failed, falling back to <audio> element playback.', err);
    this._stopSources();
    this.decodeFailed = true;
    this._initFallback();
    this._fallbackPlay();
  };

  Engine.prototype._initFallback = function () {
    var self = this;
    var a = new Audio();
    a.preload = 'none';
    a.volume = this.ui.getVolume();
    a.addEventListener('loadedmetadata', function () {
      // remember real segment durations for position tracking
      self._fbDurations = self._fbDurations || [];
      self._fbDurations[self.fallbackIndex] = a.duration;
      if (self === self.session.activeEngine) self.ui.refreshTracks();
    });
    a.addEventListener('ended', function () {
      if (self.state !== 'playing' || self._disposed) return;
      self.fallbackIndex = (self.fallbackIndex + 1) % self._segmentCount();
      a.src = self._segmentURL(self.fallbackIndex);
      a.play().catch(function () {});
    });
    this.fallbackAudio = a;
  };

  Engine.prototype._segmentCount = function () {
    if (this.opts.files) return this.opts.files.length;
    if (this.opts.segments) return this.opts.segments.length;
    return this.opts.source.count;
  };

  Engine.prototype._fallbackPlay = function () {
    var a = this.fallbackAudio;
    if (!a) return;
    if (this.state === 'paused') {
      if (this._fbResumeTime && isFinite(this._fbResumeTime)) {
        try { a.currentTime = this._fbResumeTime; } catch (e) {}
        this._fbResumeTime = 0;
      }
      a.play().catch(function () {});
      this.state = 'playing';
      this.session._startTicker();
      this.ui.update();
      return;
    }
    this.fallbackIndex = 0;
    a.src = this._segmentURL(0);
    a.play().catch(function () {});
    this.state = 'playing';
    this.session._startTicker();
    this.ui.update();
  };

  // ---------- UI ----------

  function UI(opts) {
    var self = this;
    this.opts = opts;
    this.volume = 0.8;
    this.circadian = true;
    this.engine = null;   // facade set by mount()
    this.session = null;  // set by mount()

    // floating pill button
    this.btn = el('button', 'fcp-btn');
    this.btn.setAttribute('aria-label', 'Toggle soundscape player');
    this.btn.innerHTML =
      '<svg class="fcp-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>';
    this.btn.addEventListener('click', function () { self.togglePanel(); });

    // panel
    this.panel = el('div', 'fcp-panel');
    this.panel.setAttribute('role', 'dialog');
    this.panel.setAttribute('aria-label', 'Soundscape player');
    this.panel.innerHTML = [
      '<div class="fcp-head">',
      '  <div class="fcp-title"></div>',
      '  <div class="fcp-sub"></div>',
      '</div>',
      '<div class="fcp-row fcp-controls">',
      '  <button class="fcp-ctl fcp-random" aria-label="Jump to a random track" title="Random track"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg></button>',
      '  <button class="fcp-play" aria-label="Play or pause"><svg viewBox="0 0 24 24" aria-hidden="true"><path class="fcp-ic-play" d="M8 5v14l11-7z"/><path class="fcp-ic-pause" d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg></button>',
      '  <button class="fcp-ctl fcp-stop" aria-label="Stop" title="Stop"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg></button>',
      '  <div class="fcp-time"><span class="fcp-pos">0:00</span><span class="fcp-sep">/</span><span class="fcp-total">--:--</span></div>',
      '</div>',
      '<input class="fcp-vol" type="range" min="0" max="100" value="80" aria-label="Volume">',
      '<div class="fcp-row fcp-timers">',
      '  <span class="fcp-tlabel">Timer</span>',
      '  <button class="fcp-chip" data-min="15">15m</button>',
      '  <button class="fcp-chip" data-min="25">25m</button>',
      '  <button class="fcp-chip" data-min="45">45m</button>',
      '  <button class="fcp-chip" data-min="0">off</button>',
      '</div>',
      '<label class="fcp-circ">',
      '  <input type="checkbox" checked> <span>Adapt to time of day</span>',
      '</label>',
      '<div class="fcp-timerdisplay" hidden></div>',
      '<div class="fcp-sets-wrap" hidden>',
      '  <div class="fcp-tlabel">Sets</div>',
      '  <div class="fcp-sets" role="listbox" aria-label="Sets"></div>',
      '</div>',
      '<div class="fcp-layers-wrap" hidden>',
      '  <div class="fcp-tlabel">Layers</div>',
      '  <div class="fcp-layers"></div>',
      '</div>',
      '<div class="fcp-tracks-label">Tracks</div>',
      '<div class="fcp-tracks" role="listbox" aria-label="Tracks"></div>',
    ].join('');

    document.body.appendChild(this.btn);
    document.body.appendChild(this.panel);

    this.$ = function (sel) { return this.panel.querySelector(sel); };
    this.titleEl = this.panel.querySelector('.fcp-title');
    this.subEl = this.panel.querySelector('.fcp-sub');
    this.playBtn = this.panel.querySelector('.fcp-play');
    this.randomBtn = this.panel.querySelector('.fcp-random');
    this.stopBtn = this.panel.querySelector('.fcp-stop');
    this.posEl = this.panel.querySelector('.fcp-pos');
    this.totalEl = this.panel.querySelector('.fcp-total');
    this.volEl = this.panel.querySelector('.fcp-vol');
    this.circEl = this.panel.querySelector('.fcp-circ input');
    this.timerDisp = this.panel.querySelector('.fcp-timerdisplay');
    this.tracksEl = this.panel.querySelector('.fcp-tracks');
    this.tracksLabel = this.panel.querySelector('.fcp-tracks-label');
    this.setsWrap = this.panel.querySelector('.fcp-sets-wrap');
    this.setsEl = this.panel.querySelector('.fcp-sets');
    this.layersWrap = this.panel.querySelector('.fcp-layers-wrap');
    this.layersEl = this.panel.querySelector('.fcp-layers');

    this.titleEl.textContent = opts.title;
    this.subEl.textContent = opts.subtitle || '';

    this.playBtn.addEventListener('click', function () {
      if (self.session.playingState() === 'playing') self.session.pause(); else self.session.play();
    });
    this.randomBtn.addEventListener('click', function () { self.session.random(); });
    this.stopBtn.addEventListener('click', function () { self.session.stop(); });
    this.volEl.addEventListener('input', function () {
      self.volume = this.value / 100;
      if (self.session) self.session.setVolume(self.volume);
    });
    this.circEl.addEventListener('change', function () {
      self.circadian = this.checked;
      if (self.session) {
        if (!this.checked && self.session.filter && self.session.ctx) {
          self.session.filter.frequency.setTargetAtTime(20000, self.session.ctx.currentTime, 0.5);
          self.session.masterGain.gain.setTargetAtTime(self.volume, self.session.ctx.currentTime, 0.5);
        } else self.session._applyCircadian();
      }
    });
    var chips = this.panel.querySelectorAll('.fcp-chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function () {
        var m = parseInt(this.getAttribute('data-min'), 10);
        self.session.setTimer(m);
        for (var j = 0; j < chips.length; j++) chips[j].classList.remove('on');
        if (m > 0) this.classList.add('on');
      });
    }

    document.addEventListener('click', function (e) {
      // clicks on elements marked data-fcp-toggle are player controls, not outside-clicks.
      // composedPath() is captured at dispatch, so a click target that a handler
      // replaced mid-dispatch is still recognized as inside the panel.
      var path = (typeof e.composedPath === 'function') ? e.composedPath() : [];
      if (path.indexOf(self.panel) >= 0 || path.indexOf(self.btn) >= 0) return;
      if (e.target.closest && e.target.closest('[data-fcp-toggle]')) return;
      if (!self.panel.contains(e.target) && !self.btn.contains(e.target)) self.panel.classList.remove('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') self.panel.classList.remove('open');
    });

    this._mediaSession();
  }

  UI.prototype.togglePanel = function () {
    this.panel.classList.toggle('open');
    this.btn.classList.toggle('active', this.panel.classList.contains('open'));
  };

  UI.prototype.getVolume = function () { return this.volume; };
  UI.prototype.circadianOn = function () { return this.circadian; };

  // active engine (facade target) — layers mode has no single active engine
  UI.prototype._active = function () {
    if (!this.session) return null;
    if (this.session.mode === 'layers') return null;
    return this.session.activeEngine;
  };

  // build the set menu (multi-set mounts only)
  UI.prototype._renderSets = function () {
    var self = this;
    if (!this.session) return;
    var many = this.session.mode === 'sets' && this.session.engines.length > 1;
    this.setsWrap.hidden = !many;
    if (!many) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < this.session.engines.length; i++) {
      (function (eng) {
        var chip = el('button', 'fcp-setchip');
        chip.setAttribute('role', 'option');
        chip.textContent = eng.opts.title;
        chip.addEventListener('click', function () { self.session.switchSet(eng.setId); });
        frag.appendChild(chip);
      })(this.session.engines[i]);
    }
    this.setsEl.innerHTML = '';
    this.setsEl.appendChild(frag);
    this._highlightSet();
  };

  UI.prototype._highlightSet = function () {
    if (!this.session) return;
    var active = this.session.activeEngine;
    var chips = this.setsEl.querySelectorAll('.fcp-setchip');
    for (var i = 0; i < chips.length; i++) {
      var on = this.session.engines[i] === active;
      chips[i].classList.toggle('on', on);
      chips[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
  };

  // build the layer list (layered mounts only)
  UI.prototype._renderLayers = function () {
    var self = this;
    if (!this.session) return;
    var layered = this.session.mode === 'layers';
    this.layersWrap.hidden = !layered;
    this.tracksLabel.hidden = layered;
    this.tracksEl.hidden = layered;
    if (!layered) return;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < this.session.engines.length; i++) {
      (function (idx) {
        var eng = self.session.engines[idx];
        var row = el('button', 'fcp-layer');
        row.setAttribute('role', 'option');
        row.innerHTML = '<span class="fcp-layer-name"></span><span class="fcp-layer-solo" title="Solo this layer">solo</span>';
        row.querySelector('.fcp-layer-name').textContent = eng.opts.title || ('Layer ' + (idx + 1));
        row.addEventListener('click', function () { self.session.soloLayer(idx); });
        frag.appendChild(row);
      })(i);
    }
    this.layersEl.innerHTML = '';
    this.layersEl.appendChild(frag);
    this._highlightLayers();
  };

  UI.prototype._highlightLayers = function () {
    if (!this.session || this.session.mode !== 'layers') return;
    var rows = this.layersEl.querySelectorAll('.fcp-layer');
    for (var i = 0; i < rows.length; i++) {
      rows[i].classList.toggle('on', this.session._soloIdx === i);
      rows[i].setAttribute('aria-selected', this.session._soloIdx === i ? 'true' : 'false');
    }
  };

  // called by the session when the active set changes
  UI.prototype.onSetSwitched = function (engine) {
    this.titleEl.textContent = engine.opts.title;
    this.subEl.textContent = engine.opts.subtitle || '';
    this._renderTracks();
    this._highlightSet();
    this._updateMediaMetadata();
    this.update();
  };

  // build/refresh the track list
  UI.prototype._renderTracks = function () {
    var self = this;
    var eng = this._active();
    if (!eng) return;
    var n = eng._segmentCount();
    var frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      (function (idx) {
        var row = el('button', 'fcp-track');
        row.setAttribute('role', 'option');
        row.innerHTML = '<span class="fcp-tk-num">' + String(idx + 1).padStart(2, '0') + '</span>' +
          '<span class="fcp-tk-dur">' + fmtTime(eng._segmentDuration(idx)) + '</span>';
        row.addEventListener('click', function () { self.session.jumpTo(idx); });
        frag.appendChild(row);
      })(i);
    }
    this.tracksEl.innerHTML = '';
    this.tracksEl.appendChild(frag);
    this._highlightTrack();
  };

  UI.prototype.refreshTracks = function () {
    // durations may have become known — rebuild the list
    this._renderTracks();
  };

  UI.prototype._highlightTrack = function () {
    var eng = this._active();
    if (!eng) return;
    var cur = eng.decodeFailed ? eng.fallbackIndex : eng._frontIdx;
    if (eng.state !== 'playing') cur = eng.segIndex;
    var rows = this.tracksEl.querySelectorAll('.fcp-track');
    for (var i = 0; i < rows.length; i++) {
      rows[i].classList.toggle('on', i === cur);
      rows[i].setAttribute('aria-selected', i === cur ? 'true' : 'false');
    }
  };

  UI.prototype.update = function () {
    var st = this.session ? this.session.playingState() : 'idle';
    this.panel.classList.toggle('is-playing', st === 'playing');
    this.panel.classList.toggle('is-paused', st === 'paused');
    this.btn.classList.toggle('is-playing', st === 'playing');
    var total = this.session ? this.session.displayTotal() : 0;
    this.totalEl.textContent = (total === Infinity) ? '∞' : fmtTime(total);
    if (st === 'idle') this.posEl.textContent = '0:00';
    this.updateTimer(null);
    this._highlightTrack();
    this._highlightSet();
    this._highlightLayers();
  };

  UI.prototype.updatePosition = function () {
    if (!this.session) return;
    this.posEl.textContent = fmtTime(this.session.displayPosition());
    this._highlightTrack();
  };

  UI.prototype.updateTimer = function (secondsLeft) {
    if (secondsLeft == null && this.session && this.session.timerEnd) {
      secondsLeft = Math.max(0, (this.session.timerEnd - Date.now()) / 1000);
    }
    if (secondsLeft == null) { this.timerDisp.hidden = true; return; }
    this.timerDisp.hidden = false;
    this.timerDisp.textContent = 'Timer · ' + fmtTime(secondsLeft) + ' remaining';
  };

  UI.prototype._updateMediaMetadata = function () {
    if (!('mediaSession' in navigator) || !this.session) return;
    var eng = this.session.activeEngine;
    if (!eng) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: eng.opts.title,
        artist: 'Flourishing Compendium',
        album: eng.opts.subtitle || 'Soundscape',
      });
    } catch (e) {}
  };

  UI.prototype._mediaSession = function () {
    var self = this;
    if (!('mediaSession' in navigator)) return;
    this._updateMediaMetadata();
    try {
      navigator.mediaSession.setActionHandler('play', function () { self.session.play(); });
      navigator.mediaSession.setActionHandler('pause', function () { self.session.pause(); });
      navigator.mediaSession.setActionHandler('stop', function () { self.session.stop(); });
      if (navigator.mediaSession.setActionHandler) {
        try {
          navigator.mediaSession.setActionHandler('previoustrack', function () {
            var eng = self.session.activeEngine;
            if (!eng) return;
            var n = eng._segmentCount();
            self.session.jumpTo(((eng._frontIdx - 1) % n + n) % n);
          });
          navigator.mediaSession.setActionHandler('nexttrack', function () {
            var eng = self.session.activeEngine;
            if (!eng) return;
            var n = eng._segmentCount();
            self.session.jumpTo((eng._frontIdx + 1) % n);
          });
        } catch (e) {}
      }
    } catch (e) {}
  };

  // ---------- engine facade ----------

  /* The public `engine` returned by mount(). Forwards everything to the
   * active engine, so callers keep a stable reference across set switches;
   * session-wide methods (transport, timer, volume) route to the session so
   * they apply to whichever set/layer arrangement is mounted. */
  function makeEngineFacade(session) {
    var SESSION_METHODS = {
      play: 1, pause: 1, stop: 1, jumpTo: 1, random: 1, setTimer: 1, setVolume: 1
    };
    return new Proxy({}, {
      get: function (t, prop) {
        if (typeof prop === 'symbol') return undefined;
        if (prop === 'session') return session;
        if (prop === 'isFacade') return true;
        if (SESSION_METHODS[prop]) return session[prop].bind(session);
        if (prop === 'position') return session.displayPosition.bind(session);
        if (prop === 'totalDuration') return session.displayTotal.bind(session);
        var eng = session.activeEngine || session.engines[0];
        if (!eng) return undefined;
        var v = eng[prop];
        return (typeof v === 'function') ? v.bind(eng) : v;
      },
      set: function (t, prop, v) {
        var eng = session.activeEngine || session.engines[0];
        if (eng) eng[prop] = v;
        return true;
      }
    });
  }

  // ---------- public API ----------

  var _current = null; // {ui, session, engines} — mounting again disposes the previous instance

  function makeEngine(def, session) {
    // engine opts = DEFAULTS <- mount opts <- set/layer definition, so a mount
    // like { loopFadeOut: 2, source: {...} } still reaches the engine (the
    // per-set definition can override anything)
    var eopts = {};
    var k;
    for (k in DEFAULTS) eopts[k] = DEFAULTS[k];
    for (k in session.opts) {
      if (k === 'sets' || k === 'layers') continue;
      eopts[k] = session.opts[k];
    }
    for (k in def) eopts[k] = def[k];
    eopts.setId = def.id;
    return new Engine(eopts, session.ui, session);
  }

  window.FCPlayer = {
    dispose: function () {
      if (_current) {
        try {
          _current.session.dispose();
        } catch (x) {}
        if (_current.ui && _current.ui.panel.parentNode) _current.ui.panel.remove();
        if (_current.ui && _current.ui.btn.parentNode) _current.ui.btn.remove();
        _current = null;
      }
    },
    mount: function (userOpts) {
      var opts = {};
      for (var k in DEFAULTS) opts[k] = DEFAULTS[k];
      for (var k2 in userOpts) opts[k2] = userOpts[k2];

      var setDefs = null;
      if (opts.layers) setDefs = opts.layers;
      else if (opts.sets) setDefs = opts.sets;
      else if (opts.segments || opts.source || opts.files) {
        setDefs = [{
          id: 'default',
          title: opts.title, subtitle: opts.subtitle,
          segments: opts.segments, source: opts.source, files: opts.files,
          rotatePasses: opts.rotatePasses
        }];
      }
      if (!setDefs || !setDefs.length) {
        throw new Error('FCPlayer.mount: provide segments[], source{dir,pattern,count}, files[], sets[] or layers[]');
      }

      if (_current) window.FCPlayer.dispose();
      var ui = new UI(opts);
      var session = new Session(opts, ui);
      ui.session = session;
      session.mode = opts.layers ? 'layers' : 'sets';
      for (var i = 0; i < setDefs.length; i++) {
        var def = setDefs[i];
        if (!def.id) def.id = 'set' + i;
        var engine = makeEngine(def, session);
        session.engines.push(engine);
      }
      session.activeEngine = session.engines[0];
      var facade = makeEngineFacade(session);
      ui.engine = facade;

      _current = { ui: ui, session: session, engines: session.engines };
      // preload nothing until first gesture (autoplay policies); just paint totals
      ui._renderSets();
      ui._renderLayers();
      ui._renderTracks();
      ui._updateMediaMetadata();
      ui.update();
      return {
        engine: facade,
        ui: ui,
        session: session,
        loadSet: function (id) { session.switchSet(id); },
        addSet: function (def) {
          if (!def.id) def.id = 'set' + session.engines.length;
          var e = session.addSet(def);
          if (session.playingState() === 'playing') session.switchSet(e.setId);
          return e;
        },
        switchSet: function (id) { session.switchSet(id); }
      };
    }
  };

  // load a set at runtime: adds it to the current mount and switches to it
  window.FCPlayer.loadSet = function (def) {
    if (!_current) return window.FCPlayer.mount({ sets: [def] });
    if (!def.id) def.id = 'set' + _current.session.engines.length;
    var e = _current.session.addSet(def);
    if (_current.session.playingState() === 'playing') _current.session.switchSet(e.setId);
    return e;
  };

  // expose for the demo's local-file mode
  window.FCPlayer._el = el;
})();
