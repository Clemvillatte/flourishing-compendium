# Psychdim M4 video cross-check (attention module)

- **Item**: independent cross-check of the three new video sources cited
  by docs/degrees/modules/deg-psychdim/m4-attentional.md and recorded in
  docs/degrees/verify/deg-psychdim-m4-video-audit-49bf153e.md. The
  fourth M4 video (Bloom lecture 7, DmWrOUK2zgA) was already verified in
  my M2 and M3 cross-check receipts
  (deg-psychdim-m2-consumed-sources-crosscheck-1026c.md,
  deg-psychdim-m3-consumed-sources-crosscheck-1026c.md): that recording's
  identity and runtime are reused from those checks, but the
  M4-specific window 47:26–54:53 (t=2846) and its content were NOT
  independently checked here.
- **Worker**: pplx-verify-1026c (no baton; verification-assist lane).
  **Date**: 2026-10-26. This receipt does not edit the module, the
  audit receipt, the ledger, or any gate.
- **Boundary arithmetic (recomputed, all correct)**: 03:06–14:52 =
  11:46; 05:24–07:42 = 2:18; 02:08–04:17 = 2:09; total 706+138+129 =
  973 s = 16:13, as the audit receipt states.

## 1. Posner/gocognitive (uYUdwS7-WvA)

- oEmbed returns author_name "gocognitive", title "Michael Posner on
  the anatomy of attentional networks - a historical perspective"
  (https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=uYUdwS7-WvA&format=json).
- The [opened watch page](https://www.youtube.com/watch?v=uYUdwS7-WvA)
  prints duration **19:49** (matches the audit receipt's full runtime)
  and upload date **Nov 11, 2011**. Render-level disagreement, recorded
  as found, not adjudicated: the audit receipt records **12 November
  2011**; this render prints 11 November. One-day upload-date renders
  have occurred before in this project (the Black Dog receipt's 21 vs
  22 October); both displayed dates are recorded as found, without
  proposing which is correct.
- The description confirms the audit receipt's framing claims: "In this
  first part of our interview with Dr. Michael Posner from the
  University of Oregon... a brief historical account of the study of
  attention... Dr. Posner explains his model of three main attentional
  networks... the anatomy of these 'attentional organs'. The interview
  was conducted at the University of Oregon by Justin Mayes, a beginning
  graduate student in cognitive neuroscience at the U of O." This
  independently confirms the interview location, the named interviewer,
  the three-network model, and the "attentional organs" phrasing.
- No chapter or key-moments markers were returned by this fetch, so the
  03:06–14:52 window cannot be checked against printed markers; the
  window is inside the reported 19:49 runtime (14:52 < 19:49), and the
  description's content (historical account, three networks) is
  consistent with the audit receipt's content claims. Verbatim
  passage-level confirmation of the window (alert-state experiments,
  rejection of a single brain "spot", limited focal attention,
  involuntary reorienting) is not made here; the audit receipt states
  its transcript was read, and that claim is neither confirmed nor
  contradicted by this check.

## 2. Posner/APS (y-fQywP6qa8)

- oEmbed returns author_name "PsychologicalScience", title "Fostering
  Attention for Human Needs"
  (https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=y-fQywP6qa8&format=json).
  (The watch-page fetch's header field printed "TED" in one metadata
  slot; the page's own channel line and the oEmbed both print
  PsychologicalScience, which stands.)
- The [opened watch page](https://www.youtube.com/watch?v=y-fQywP6qa8)
  prints upload date **Aug 14, 2015** (matches the audit receipt's
  14 August 2015) and duration **42:04**. Render-level disagreement,
  recorded as found: the audit receipt records **42:05**; this render
  prints 42:04. One second, same pattern as the Barrett and Bloom
  one-second disagreements in the M2 cross-check.
- The fetched extraction reported a full list of timestamp markers
  (labelled "Chapters / key moments"). The assigned window
  **05:24–07:42 does NOT coincide with the reported marker boundaries**:
  it falls
  inside the reported "Measuring Network Efficiency" section
  (**5:10–9:25** in this render; next marker "Effortful Control" at
  9:25), starting 14 seconds after that section's start. The window is a
  sub-section selection, not a marker-anchored one — worth knowing for
  any future boundary repair, though the audit receipt never claimed
  chapter anchoring for it. The section title is topically consistent
  with the receipt's content claim (target/flanker conflict,
  reaction-time differences, temporal/spatial cues for alerting and
  orienting — i.e., how the ANT measures network efficiency); topical
  consistency is not confirmation of the spoken passages.
- Event context: the fetched watch-page description identifies the
  recording as Posner's "Fred Kavli Keynote Address at the 2015 APS
  Annual Convention". The further details "27th APS Annual Convention"
  and "May 2015" come from APS-website pages surfaced as search-result
  snippets (the APS video page snippet and the APS teaching-playlist
  snippet), not from a page this worker fetched; they are recorded with
  that provenance and not independently opened.

## 3. Davidson/Huberman (n_3MVEo9fx4)

- oEmbed returns author_name "Huberman Lab Clips", title "When & How to
  Practice Effective Meditation | Dr. Richard Davidson & Dr. Andrew
  Huberman"
  (https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=n_3MVEo9fx4&format=json).
- The [opened watch page](https://www.youtube.com/watch?v=n_3MVEo9fx4)
  prints upload date **Mar 21, 2026** (matches the audit receipt's
  21 March 2026) and duration **12:29**. Render-level disagreement,
  recorded as found: the audit receipt records **12:30**; this render
  prints 12:29. One second, same pattern as above.
- Marker anchoring supported: the fetched extraction reported timestamp
  markers at "2:08 — Categories of Meditation Practices" and
  "4:17 — Shifting From Doing to Being",
  so the assigned window **02:08–04:17 coincides exactly with the
  reported "Categories of Meditation Practices" markers**. This render
  labels the list "Chapters / key moments"; whether the underlying page
  publishes them as official chapters was not separately established,
  so this is marker support rather than a claim of official chapter
  status. The module's t=128 citation equals 02:08.
- The description supports the topic: "Dr. Richard Davidson and
  Dr. Andrew Huberman discuss the scientific classification of
  meditation into focused attention and open monitoring practices..." —
  matching the audit receipt's focused-attention vs. open-monitoring
  topic for this window. A description naming the classification does
  not independently establish the spoken definitions or the rejection
  of thought elimination within the window; those passages were not
  verbatim-checked here.

## Summary

All three recordings exist and are correctly identified by oEmbed;
  their pages are retrievable and present no paywall in these renders
  (playback and caption status were not independently inspected). The
  upload dates and durations match the audit receipt except for three
  render-level disagreements recorded above (one day on the gocognitive
  upload date; one second each on the APS and Huberman durations); the
  two displayed dates on the gocognitive upload are recorded as found,
  without proposing a resolution. One
  window coincides exactly with reported timestamp markers (Davidson),
  one falls inside a single reported section (APS), and one had no
  markers returned to check against (gocognitive). No additional
  mismatch was found within the identity and metadata fields checked;
  assigned spoken content, playback, caption status, and the Bloom M4
  window were not independently verified here. The three render-level
  disagreements are recorded for any future check that can inspect a
  playback surface, following the project's standing practice of
  recording rather than adjudicating render-level measurement
  differences.
