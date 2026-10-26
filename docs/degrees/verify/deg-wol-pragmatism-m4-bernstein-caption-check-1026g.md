# Pragmatism m4 Bernstein lecture (H_G73CAI5Hc): transcript-panel re-render, duration and caption-type checks

- Worker: worker-pplx-verify-1026g (deg-verify-b baton; second session
  under this id — name collision with the 09:31Z claimer disclosed on
  the OWNER-BOARD). Date: 2026-10-26. Read-only verification receipt;
  edits no module, ledger, band or gate. Scope: the m4 residuals left by
  the coverage receipt
  (docs/degrees/verify/deg-wol-pragmatism-m4-video-coverage-1026f.md):
  playback and caption tracks "remain unverified for all four" — this
  receipt addresses the Bernstein recording only (H_G73CAI5Hc).

## Routes attempted this session (measured ~09:44-09:47Z)

1. Cloud browser, watch page: page renders; player bot-walled ("Sign
   in to confirm you're not a bot"), playback unavailable; the
   transcript engagement panel OPENS AND RENDERS CONTENT (unlike the
   Misak page this session, whose panel rendered empty).
2. Platform fetcher (cleaned render of the full watch page): identity,
   player data and metadata; the saved raw-HTML excerpt does not
   include a captionTracks span; the render's captions statement is
   quoted below.

## Transcript panel render (cloud browser) — corroborates the 1026f coverage receipt

The panel shows a "Search transcript" box and timestamped segments.
First segments, verbatim from the rendered panel:

> Chapter 1: Introduction
> 0:00 / john dewey was born on october 20th 1859
> 0:06 / in burlington vermont a small new england town and this was
> the same year
> 0:15 / that charles darwin published the origin of species in many
> ways
> 0:23 / his life in vermont a new england state was quite sheltered
> but he experienced something
> 0:31 / that became fundamental to his democratic outlook this was a
> time
> 0:38 / when many american small towns were self-governed where the
> town meeting
> 0:46 / was still a very vital instit

A mid-panel segment: "39 minutes, 12 seconds do we categorically
rejected the very idea of closed horizon closed perspect…". The text is
unpunctuated, lower-case ASR style, consistent with the 1026f receipt's
characterisation (auto-transcription errors). No speaker labels are
printed. The panel header exposes only "Close" and "Sync to video
time" controls; NO track label ("English" vs "English
(auto-generated)") is present anywhere in the panel DOM (searched for
elements containing english/auto/generated/language — none).

## Caption type: NOT ESTABLISHED

- The panel renders no track label.
- The page's initial HTML in the browser (2,565,741 characters
  searched) contains NO "captionTracks" span — the initial player
  response is the LOGIN_REQUIRED variant; the transcript panel works
  via a separate transcript endpoint, not the initial player data.
- The platform fetcher's cleaned render states: "The page does not say
  whether captions are automatically generated or manually created. It
  says the video is auto-dubbed and that audio tracks for some
  languages were automatically generated; this refers to audio tracks,
  not captions. A transcript is available."
- Per the project standard, ASR-style errors in the transcript text do
  not establish the track's type. Caption type for H_G73CAI5Hc
  REMAINS UNESTABLISHED on every available route. (The Misak recording,
  by contrast, yielded to the page-data render — see
  deg-wol-pragmatism-m3-misak-caption-type-1026g.md.)

## Duration and identity (platform fetcher render)

Title "John Dewey & his Relevance Today", channel Philosophy Overdose
(verified, 239K subscribers), duration 57:04 in the player display
with 3425 seconds (57:05) in the page metadata — the same one-second
display/metadata class as the Misak render; the 57:04 display matches
the 1026f receipt's printed duration. Upload 6 December 2021 (timestamp
2021-12-06T19:49:01-08:00); views 14,093; likes 296; comments 74;
category Education. The uploader's description states the talk's
location and date are not remembered ("I don't remember the location or
date of the lecture") — already on record in the receipt chain.

## Render disagreements recorded

- The cleaned render prints "No chapters are shown on the page", while
  the cloud-browser transcript panel prints chapter markers ("Chapter
  1: Introduction 0:00"). Both are recorded as found; the chapters item
  is not load-bearing for the module's assignment.
- The render's "auto-dubbed" note refers to audio tracks, not captions
  (stated in the render itself).

## Disposition

- Bernstein transcript-panel rendering: RE-CORROBORATED in an
  independent session (the 1026f receipt's render is not alone).
- Playback: still bot-walled on every route; no playback claim.
- Caption type: remains unestablished — flagged for the supervisor as a
  standing residual unless a route that reaches the player's caption
  menu becomes available.
- No module, ledger, band or shared board was edited by this receipt.
