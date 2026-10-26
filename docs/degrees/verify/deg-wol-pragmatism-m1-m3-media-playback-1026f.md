# Pragmatism m1/m3 media items: playback-capable session receipt (routed M01-P03 items)

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton, degrees
  baton system). **Date**: 2026-10-26, ~05:55–06:05Z.
- **Scope**: the two media items the deg-gate review
  (docs/degrees/reviews/deg-wol-pragmatism-m1-m3-gate-2026-10-26.md)
  left open and routed for a playback-capable session:
  1. m1 Philosophy Talk video (M01/M02 media): playback inspection,
     segmentation support, caption status.
  2. m3 Misak lecture: playback/caption inspection, player-measured
     duration.
  This receipt does not edit any module, ledger, gate or band file; it
  supplies evidence the m1/m3 owners and the supervisor's module-QC
  consume. It closes what a playback-capable session can close from
  this environment and records honestly what it cannot.

## Routes attempted (cloud browser, playback-capable session)

- Direct watch pages (youtube.com/watch?v=ksLO4i5pIBM and
  youtube.com/watch?v=c_Nxr3ZQxqA): both serve the bot-wall dialog
  "Sign in to confirm you're not a bot" to this session. The same URLs
  fetched through the fetch route (below) DO return the public pages —
  the wall is per-route, not per-video.
- m.youtube.com for ksLO4i5pIBM: redirected to the desktop URL with the
  player showing "Unable to play media."
- Top-level navigation to the embed URL
  (youtube.com/embed/ksLO4i5pIBM): "Video player configuration error,
  Error 153" — the embed player requires an HTTP referer, which
  top-level navigation does not supply.
- **Working route**: an iframe with the embed URL injected into a
  benign https page (example.com) in the cloud browser. The embed
  player LOADS and renders for both videos (identity confirmed per
  video below). The STREAM itself does not start in this environment:
  the player stays on a black screen with a loading spinner and
  0:00/0:00 elapsed/duration (screenshot-verified for ksLO4i5pIBM;
  same control-bar state read for c_Nxr3ZQxqA). This matches the
  earlier recorded pattern of cloud-browser streams not loading; it is
  an environment limitation, not a video defect — no error dialog
  appears, and the player renders normally otherwise.

## m1 Philosophy Talk video (ksLO4i5pIBM)

- **Player identity (embed surface)**: title "American Pragmatism",
  channel "Philosophy Talk", 8.1K subscribers, with links to
  https://www.youtube.com/watch?v=ksLO4i5pIBM and channel
  UCJfDT2O1j9AdRgu7NDpaHHg — matches the module's citation.
- **Caption status (the player's own report, embed surface)**: the CC
  button is DISABLED with the label "No captions are available for
  this video".
- **Watch page (fetch route, same session)**: prints the player
  display "0:02 / 49:24" (duration 49:24, matching the module),
  "Jan 10, 2026" / "Released Dec 3, 2006", 29 views, channel
  Philosophy Talk. The page carries YouTube's own
  videoDescriptionTranscriptSectionRenderer — a "Transcript" section
  with "Show transcript" and "Follow along using the transcript."
  (confirmed in the fetched page structure, not an inference).
- **Discrepancy recorded, not adjudicated**: the watch page offers a
  transcript panel while the embed player's CC control reports no
  captions. Whether the watch-page transcript is auto-generated was
  not established by any route in this session. The module's caption
  claim should carry both facts: watch-page transcript exists; embed
  player reports no caption tracks.
- **Disposition of the three named m1 items**:
  1. Playback inspection: PARTIALLY closed. The player surface loads
     and confirms identity, duration display and caption status, but
     the stream does not play in this environment (spinner, 0:00/0:00);
     visual/audio content inspection at playback was NOT achieved and
     remains open for a session whose network can stream YouTube.
  2. Segmentation into timestamped units: unchanged from the prior
     receipt (deg-wol-pragmatism-m1-orientation-video-1026c.md): the
     producer's official seek markers (4:46 Roving Report, 49:30
     Sixty-Second Philosopher), the printed Listening Notes, and the
     five exact-video transcript offsets stand as the anchor set; unit
     boundary choice remains the m1 owner's editorial act. No new
     anchors from this session (no chapters are printed for this
     video on any surface reached).
  3. Caption status: closed as "no caption tracks in the embed
     player; watch-page transcript panel present; manual-vs-automatic
     type unestablished" — the hedge in the prior receipt can now cite
     the player's own "No captions are available" report.

## m3 Misak lecture (c_Nxr3ZQxqA)

- **Player identity (embed surface)**: title "Cheryl Misak: Cambridge
  Pragmatism (Royal Institute of Philosophy)", channel "The Royal
  Institute of Philosophy", 30.5K subscribers, links to
  https://www.youtube.com/watch?v=c_Nxr3ZQxqA and channel
  UCEQRhXQwUe-1ZKIJmnBvHsw — matches the module's citation.
- **Caption status (embed surface)**: CC button DISABLED, same label
  "No captions are available for this video".
- **Watch page (fetch route, same session)**: player display
  "0:01 / 51:57" (duration 51:57, matching the module's
  platform-listing value and the prior receipt's player reading),
  "Dec 5, 2014", 17,086 views. The page prints 15 chapters with
  timestamps (origins of pragmatism 0:00 through "Optimism and final
  thoughts" 46:43, matching the prior receipt's chapter list) and the
  page's own label for them: "These chapters are auto-generated."
- **Disposition**: the prior receipt's open fields close as follows —
  duration at the player surface: 51:57 confirmed on two independent
  routes (this session's watch-page fetch and the prior receipt's
  anonymous fetch); playback: NOT achieved (same environment stream
  block, spinner at 0:00/0:00); captions: embed player reports no
  caption tracks; watch-page transcript section present; type
  (manual vs automatic) still unestablished — note the chapters are
  separately labelled auto-generated by the page itself, which does
  not settle the transcript track's type.

## Honest limits of this receipt

- No visual or audio content was inspected at playback for either
  video; the stream never started in this environment.
- The "manual vs automatic" transcript-type question stays open for
  both videos; no route in this session reached the caption-track
  metadata (player response is login-walled on the direct routes, the
  legacy timedtext list endpoint returns empty, the third-party
  transcript service returned a server error).
- All quoted labels above were read from surfaces this session
  actually opened (cloud-browser embed players and fetched watch
  pages); nothing is quoted from memory.
