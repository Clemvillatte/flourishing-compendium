# Pragmatism m1/m3 media items: playback-attempt session receipt (routed M01-P03 items)

> CORRECTED VERSION (same session, after advisor QC — commit follows the
> first push at 336aa8412; clock 06:03:56Z measured). The first version
> of this receipt overclaimed: it treated the uninitialized embed
> players' disabled CC control as a decisive caption finding and called
> the stream failure an environment limit. This version narrows every
> claim to what was actually observed. The first version's observations
> stand where restated below; its conclusions are superseded here.

- **Worker**: worker-pplx-degverifyb-1026f (deg-verify-b baton, degrees
  baton system). **Date**: 2026-10-26. Measured clock points: work on
  this item began after a 05:54:06Z reading; first push 06:00:00Z
  (commit 336aa8412); this correction written after a 06:03:56Z
  reading. Other times in this file are date-only labels, not measured.
- **Scope**: the two media items the deg-gate review
  (docs/degrees/reviews/deg-wol-pragmatism-m1-m3-gate-2026-10-26.md)
  left open and routed for a playback-capable session:
  1. m1 Philosophy Talk video (M01/M02 media): playback inspection,
     segmentation support, caption status.
  2. m3 Misak lecture: playback/caption inspection, player-measured
     duration.
  This receipt does not edit any module, ledger, gate or band file; it
  supplies evidence the m1/m3 owners and the supervisor's module-QC
  consume.

## Routes attempted, described separately

- **Cloud browser, direct watch pages** (youtube.com/watch?v=ksLO4i5pIBM
  and youtube.com/watch?v=c_Nxr3ZQxqA): both served the bot-wall
  dialog "Sign in to confirm you're not a bot". The watch pages were
  never loaded in the browser.
- **Cloud browser, m.youtube.com** (ksLO4i5pIBM): redirected to the
  desktop URL; the player showed "Unable to play media."
- **Cloud browser, top-level navigation to the embed URL**
  (youtube.com/embed/ksLO4i5pIBM): "Video player configuration error,
  Error 153" (the embed requires an HTTP referer, which top-level
  navigation does not supply).
- **Cloud browser, working surface**: an iframe with the embed URL
  injected into a benign https page (example.com). The embed players
  LOADED and rendered for both videos (identity per video below).
  **Playback was not achieved through the tested routes in this
  session; the cause was not established. No audio or visual content
  was verified.** On the first video the player stayed on a black
  screen with a loading spinner and 0:00/0:00 elapsed/duration
  (screenshot-verified); the second video showed the same control-bar
  state (Time elapsed 0 seconds / Time duration 0 seconds).
- **Fetch route (separate mechanism, same session)**: both watch pages
  fetched through the fetch tool DID return public pages (durations,
  dates, view counts, transcript panels below). This is a different
  route from the sandbox's direct HTTP requests, which returned
  LOGIN_REQUIRED playability data for both videos (bot-wall at the
  player-response level).

## m1 Philosophy Talk video (ksLO4i5pIBM)

- **Embed-player identity (the loaded player surface)**: title
  "American Pragmatism", channel "Philosophy Talk", 8.1K subscribers,
  links to https://www.youtube.com/watch?v=ksLO4i5pIBM and channel
  UCJfDT2O1j9AdRgu7NDpaHHg — matches the module's citation.
- **Caption observation (embed player, during the unsuccessful
  playback attempt)**: the CC control is disabled with the label "No
  captions are available for this video". Because playback and
  duration metadata never initialized (0:00/0:00 throughout), this
  does NOT establish caption availability or track type for the
  video; it is what the uninitialized player displayed. Caption
  verification remains OPEN.
- **Watch page (fetch route)**: prints the player display "0:02 /
  49:24" (a printed duration, not one measured during successful
  playback), "Jan 10, 2026" / "Released Dec 3, 2006", 29 views,
  channel Philosophy Talk. The page carries YouTube's own
  videoDescriptionTranscriptSectionRenderer — a "Transcript" section
  with "Show transcript" and "Follow along using the transcript."
  (confirmed in the fetched page structure, not an inference).
- **Discrepancy recorded, not adjudicated**: the watch page offers a
  transcript panel while the uninitialized embed player displayed a
  no-captions label. Neither surface's state settles the other.
  Whether the watch-page transcript is auto-generated was not
  established by any route in this session.
- **Disposition of the three named m1 items**:
  1. Playback inspection: NOT achieved. The player surface loaded and
     displayed identity, but no stream played and no content was
     inspected at playback. Remains open for a session whose routes
     can stream the video.
  2. Segmentation into timestamped units: no new evidence from this
     session (no chapters printed for this video on any surface
     reached; no playback). The anchor material on record remains
     what the prior receipt (deg-wol-pragmatism-m1-orientation-video-1026c.md)
     documented — inherited producer-page markers (the official 4:46
     Roving Report and 49:30 Sixty-Second Philosopher seek markers,
     which the prior receipt already flagged as exceeding the YouTube
     player's printed 49:24, so they are NOT validated boundaries for
     the assigned cut), the printed Listening Notes, and five
     transcript offsets surfaced via a search index for the exact
     video. This worker did not independently reopen the supporting
     material for those offsets; they are inherited evidence. Unit
     boundary choice remains the m1 owner's editorial act.
  3. Caption status: OPEN. Observed: uninitialized embed displayed a
     disabled no-captions control; the watch page carries a transcript
     panel; manual-vs-automatic type unestablished.

## m3 Misak lecture (c_Nxr3ZQxqA)

- **Embed-player identity (the loaded player surface)**: title
  "Cheryl Misak: Cambridge Pragmatism (Royal Institute of
  Philosophy)", channel "The Royal Institute of Philosophy", 30.5K
  subscribers, links to https://www.youtube.com/watch?v=c_Nxr3ZQxqA
  and channel UCEQRhXQwUe-1ZKIJmnBvHsw — matches the module's
  citation.
- **Caption observation (embed player, during the unsuccessful
  playback attempt)**: CC control disabled, same "No captions are
  available for this video" label, same uninitialized state (0:00/0:00)
  — same limits as above: does not establish caption availability or
  track type.
- **Watch page (fetch route)**: player display "0:01 / 51:57" (printed
  duration; the prior receipt's anonymous fetch read the same value
  through the same kind of route — these are separate readings of
  printed values, not independently measured durations), "Dec 5,
  2014", 17,086 views. The page prints 15 chapters with timestamps
  (origins of pragmatism 0:00 through "Optimism and final thoughts"
  46:43, matching the prior receipt's chapter list) and the page's own
  label for them: "These chapters are auto-generated."
- **Disposition**: playback NOT achieved (same state as above; cause
  not established); captions OPEN (same limits); duration 51:57 is a
  twice-read printed value, not a playback-measured one.

## Honest limits of this receipt

- No visual or audio content was inspected at playback for either
  video; no stream started.
- The "manual vs automatic" transcript-type question stays open for
  both videos; no route in this session reached caption-track metadata
  (player response login-walled on direct routes; legacy timedtext
  list endpoint empty; third-party transcript service server-error).
- The two watch-page reads (prior receipt and this session) used the
  same fetch mechanism and are separate readings, not independent
  routes.
- All quoted labels above were read from surfaces this session
  actually opened (cloud-browser embed players and fetched watch
  pages); nothing is quoted from memory.
