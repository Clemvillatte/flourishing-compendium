# How Endel builds and delivers their soundscapes — findings

*Evidence types: observed-behavior (live web player: static + runtime analysis),
source-assisted (user-supplied macOS app bundle), documentation-based (Endel's
public pages). REA Evidence: web bundle analysis `ev_1663310c13892fe272828caef2a2e1b8adfa9ea23f6fb1941549d1b4d16ce052`
(directory digest sha256 `4a43dd9aa66356165c630f034d35dbc231153b25ab039590fe51fc64dc3669e3`);
ASAR analysis `ev_b290cd7adc206efd6b76f72760623a998978a5c26166dc3fb1f59ad52e2bf824`
(artifact sha256 `a56d9344311bada42dd32a368bbbfbf098cfc736afdd00a433339bb74a5cb3a7`).
The server-side composition engine was NOT recovered — only the request
interface and delivered files were observed.*

## The delivery mechanism (observed)

The web player at `app.endel.io` (Next.js) does **not** synthesize audio in the
browser. On play it requests:

```
GET https://app.endel.io/api/pacific?mode=<soundBankId>&hour=<0-23>&hlsjs=<0|1>&duration=<minutes>[&tunepad=x_y]
```

The response is a plain **HLS VOD playlist** (m3u8) pointing at segments on
their CDN:

```
https://endelcdn.net/v3/soundscapes/<mode>/<render-uuid>/<mode>_<hour>_60s_<index>.aac
```

Observed facts about the segments:

- 60-second ADTS AAC, 32 kHz stereo, ~127 kbps, encoded with FFmpeg
  (Lavc59.18.100, per the stream's metadata).
- The client is `hls.js` + a plain `<audio>` element (Chrome path, with
  `hlsjs=1`), or native HLS (Safari path, `hlsjs=0`), with MSE sequential
  playback. No client-side Web Audio synthesis or layer mixing was found in
  the bundles.
- The only audio transition logic in their client code is a fade-out of the
  outgoing stream on mode change (~1 s, volume stepped every 50 ms) before
  the new stream starts.
- `hour` is the client's current hour and the playlist differs per hour —
  the request interface is hour-keyed. (Whether the server *generates* a fresh
  mix per request or *selects* a precomputed render was not established; both
  are consistent with what was observed. `reshuffle` re-requests a playlist
  with a new render uuid — a new playlist, not proof of fresh composition.)
- `duration=10` is the free-tier 10-minute VOD playlist; premium accounts get
  the full render. Interactive modes (`colored-noise`, `nature-elements`,
  `dynamic-focus`) send a `tunepad=x_y` pad position to the same endpoint —
  the mixing implications of the pad position are server-side.
- The supplied macOS app is an Electron wrapper that loads
  `https://play.endel.io` (from its `env.production.json`) — a different URL
  from the investigated `app.endel.io` player; it was not verified to be the
  same implementation. Its native addon only handles push notifications,
  sign-in and StoreKit — no audio engine.

## What the audio itself looks like (measured, interpretations marked)

Measurements on focus-mode segments:

- Morning (hour 7) render: mean level −22.8 dB; evening (hour 20) render:
  −27.4 dB. Each decoded segment is exactly 60.000 s.
- Spectrograms show three frequency strata. *Interpretation (tentative, not
  recovered implementation):* a low drone-like bed; mid-frequency arpeggio/pad
  material that appears rhythmically aligned; and sparser transient events.
  Spectrograms cannot establish separate stems, procedural generation, or
  composition rules — only that the delivered file is a single mixed stream
  with these strata.
- Endel's own public pages describe their engine ("Endel Pacific"): "The
  sound logic and elements are pre-designed by our sound team and assigned to
  every soundscape", inputs are mapped "onto the soundscape logic … using the
  AI-powered node system", and "with any input change the sound adapts
  on-the-fly"; for their apps, generation is "in real-time, on-device"
  ([endel.io/technology](https://endel.io/technology),
  [endel.io/science](https://endel.io/science)). These pages do not describe
  the web player's streaming model — the HLS delivery described above is my
  observation, not their documentation.

**Defensible central conclusion:** the observed AAC files are sequential,
already-mixed chunks — not independently interwoven musical layers. The
inspected web client plays those chunks; the composition engine itself has
not been recovered.

## Your captures

Your 16 files are hour-1 Plastikman-mode segments
(`plastikman_1_60s_0000..0015.aac`). Segment 0000 is byte-identical to the
file currently served from Endel's CDN for that mode/hour; segments 0001–0015
differ from today's CDN copies (cause not established). The decoded join
points of the first few segments were checked for continuity (RMS level and
correlation at the boundaries — consistent, but sample continuity was not
proven). They decode to exactly 60.000 s each.

## What the FCPlayer component is

An **Endel-inspired segment player** — not a reconstruction of their engine:

- Fetches + decodes each segment and schedules `AudioBufferSourceNode`s
  back-to-back on the Web Audio clock for gapless ordered playback (the same
  delivery model as their hls.js pipeline).
- Designed loop transition (fade-out on the final segment; the first
  segment's own intro fades back in), pause/resume with exact position,
  volume, session timer with its own gain stage, MediaSession.
- Optional "adapt to time of day" filter — a browser-side approximation of
  the hour-keyed renders idea, clearly an enhancement, not their engine.
- `<audio>` element fallback if Web Audio AAC decoding is unavailable
  (slightly less gapless). On a decode underrun, buffering recovery was
  observed: the timeline is rebased and playback resumes after a gap —
  scheduled sources never overlap.
