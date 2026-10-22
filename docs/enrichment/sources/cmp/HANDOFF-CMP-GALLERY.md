# HANDOFF: CMP (Contemplative) gallery enrichment

Status: **CHECKPOINT SAVED; RELEASE VERIFICATION INCOMPLETE. NOT
approved for main.** The work is committed locally and pushed to the
non-deploying checkpoint branch `checkpoint/cmp-gallery-enrichment`
(verify it exists on the remote before relying on it). Do not push
these commits to main until the two release blockers below are
resolved and the advisor re-approves.

Local commits (not on origin/main):
- 802db6b09 "academy: cmp gallery +8 verified sessions (47->55), omm/lkm/zen/walking gaps filled"
- 0a9233eb7 "academy: cmp handoff" (superseded by later rewrites)
- 2639b9f16 "academy: cmp ledger/handoff corrections (zen buckets, attribution note) + evidence preserved"
- 56136538b "academy: cmp handoff status correction (checkpoint, release blockers)"
- (the hash of any later handoff-only commit appears in git log)

Git relationship: local main is NOT rebased onto current origin/main.
Local main sits on my last pushed commit (de9a4377c) plus the commits
above; origin/main has since moved to 24fbf2a2c (107 incoming commits
by other workers, Library and Wiki work; my top-of-log inspection saw
no overlap with the scoped files, but a full diff against all 107
was not run). Before any push to main: git pull --rebase origin main
and re-check for conflicts on the scoped files.

Original session history (read only):
~/.perplexity/sessions/cffd561c-9be6-493e-b845-ede0686acb4f/
(turns/ and tool_calls/). Repo: github.com/Clemvillatte/flourishing-
compendium, checkout at /home/user/workspace/fc, branch main. Git
identity "Computer Agent" <computer@perplexity.ai>; PAT in
~/.git-credentials (never commit it).

## RELEASE BLOCKERS (must resolve before pushing to main)

1. Instructor qualification for the new Palouse LKM row. The owner's
   instructor standard is a requirement, not an option. The recording
   guide is not named on the Palouse page and the opening transcript
   does not self-identify (do not claim "no name in the audio" beyond
   what the sampled portion establishes). Either verify the guide and
   a linked qualifying credential (possible lead: the Insight Timer
   listing referenced on the Palouse page; the page also links a
   Lovingkindness Meditation Script), or withhold/remove the row
   before release. Do not reopen the existing shipped Palouse rows.

2. Recording classification completeness. Only the two MARC files were
   fully transcribed. The other six recordings were sampled at their
   openings only; source-page descriptions are not published
   transcripts, so full-session classification (guided practice vs a
talk containing practice) is not yet established for: Tara Brach 30
   min, Palouse LKM, Palouse walking, and the three Mountain Cloud
   sits. Complete verification from the recordings (full vosk
   transcripts; the model was at /tmp/vosk-model, likely gone, see
evidence/README.md) or published transcripts, then re-classify. Also
   preserve the original sampling commands or timestamps; the current
   README says "roughly 60 to 90 seconds" without them.

This file documents only the CMP gallery task. The Qi Gong gallery
task has its own handoff at
docs/enrichment/sources/qg/HANDOFF-QG-GALLERY.md; do NOT mix the two.

## Scope fence (do not cross)

This task touches ONLY:
- academy/CMP1 file, academy/thumbnails-manifest.json
- scripts/cmp_gallery_data.py, scripts/cmp_thumbnails.py
- the deg-cmp segment of window.fcAcademyData in site/assets/app.js
- site/assets/academy/sessions/sNN.jpg (new: s47 to s54)
- docs/enrichment/sources/cmp/ (ledger, handoff, evidence/)

Do NOT touch: the repo-root handoff.md (supervisor's file), Library and
Wiki content or pipeline, QG files, the cmp baton, scripts/enrich_save.sh,
STORY_ROLE. Do not re-litigate existing dispositions.

## Standards (owner directives, non-negotiable)

1. Zero hallucination: every fact, quote, duration, attribution comes
   from an opened source. Unverifiable means do not ship it.
2. No disclaimers or safety language in shipped content.
3. Humanized prose without em dashes.
4. Audio classified from the recording or published transcript, never
   from the title.
5. Durations from ffprobe on the audio file or the source page's
   printed duration, never guessed.
6. Instructor standard: lineage, monastery, or research institution
   affiliation, or documented teacher training linked from an opened
   bio page.
7. YouTube: verify via oembed endpoint plus watch-page duration (not
   needed here; no YouTube sources in this batch).

## What was done

8 new sessions in CMP1 (47 -> 55). Exact rows, URLs, and evidence:
see docs/enrichment/sources/cmp/ledger.md, entry "2026-10-22 (UTC):
CMP gallery enrichment", and docs/enrichment/sources/cmp/evidence/
(transcripts, ffprobe durations, saved source pages, README).

Matrix buckets actually filled (regenerated from committed data,
correcting the earlier handoff's wrong claims):
- OMM 6-10 (0 -> 1), OMM 16-20 (0 -> 1)
- LKM 11-15 (0 -> 1)
- Walking 6-10 (1 -> 2)
- Zen 11-15 (3 -> 6). Zen 6-10 stays 0: "Space for Feelings" is
  10:11, eleven seconds past the 10:00 boundary, and the pre-existing
  "Exploring Space" (10:08) also exceeds 10:00. Zen shelf now has 9
  rows: 8 Mountain Cloud sittings plus the Rick Hanson guest sit.
- Final matrix (55 sessions): fam 1/0/2/2/1/2/0/0, omm 1/1/1/1/3/1/0/0,
  lkm 0/3/1/0/2/1/1/0, bodyscan 1/1/3/1/2/2/1/0, daoist 1/0/1/0/0/0/0/3,
  zen 0/0/6/1/1/1/0/0, walking 1/2/2/0/0/0/1/0.

Attribution blocker for release: the Palouse LKM recording's
guide is not identified by an opened source. See RELEASE BLOCKERS
above; do not treat the institutional attribution as final. The
walking row's Tara Brach attribution is printed on the Palouse
walking page (saved at evidence/walk.html).

Parser fixes in scripts/cmp_gallery_data.py: H:MM:SS misparse,
trailing-space guide split, matrix key order [5,10,15,20,30,45,'45+',None].

Images: 8 new thumbnails s47 to s54 (640x400, scrim, labels) from
public-domain Japanese designs (Art Institute of Chicago: Mori Yuzan
Hamonshu 1903, Ogawa Kazumasa 1896, Follower of Ogata Korin), all
visually inspected; s51 regenerated with a 3% top crop; c_006 rejected
as a duplicate. Manifest rebuilt: 47 old entries re-keyed by (title,
length_label) plus 8 new.

app.js safe-splice: deg-cmp practiceSessions 47 -> 55, verified
prefix and suffix byte-identical, other degrees and fcGalleryData
untouched, node --check OK.

## QA (checks actually run in this session, all green at the time)

- python3 -m unittest discover -s scripts/tests: 30 OK
- node --test scripts/tests/randomizer.test.cjs: 9 pass
- node scripts/tests/routes.qa.cjs: ALL PASS (needs the :8765 server,
  start it with the start_server tool, not bash)
- python3 scripts/build.py: only the pre-existing HEAD warning
  ("manifest references missing files: ['Nondual awareness']", Library
  content, out of scope, do NOT fix here)
- node --check site/assets/app.js: OK
- Playwright (run from /home/user/workspace/fc): 55 cards render; all
  8 new sessions present; no broken images after scrolling each img
  into view (lazy loading); the shelf select filters correctly
  (Walking -> 6 cards); card click opens the correct URL in a new tab
  (LK card -> https://palousemindfulness.com/disks/lovingkindness.mp3);
  zero page errors. Selectors that differ from other galleries: session
  cards are .apg-card; the shelf filter is a select element
  (.acad-explorer-select), not chips; cards are div role=button that
  open a new tab; degrees render as .acad-hall cards, click the
  "Contemplative & Mental Practices" hall to open the gallery.
  These were run on the current working tree; re-run them after any
  rebase before release.

## Remaining steps, in order

1. Resolve the two RELEASE BLOCKERS above (LKM guide verification or
   row removal; full-transcript classification for the six sampled
   recordings).
2. Advisor re-verification with the resolved blockers; do not push to
   main without it.
3. git pull --rebase origin main, re-check scoped files for
   conflicts, then push with git -c user.name="Computer Agent" -c
   user.email="computer@perplexity.ai" push.
4. Verify the commit landed in origin/main (merge-base check), check
   CI green via the GitHub API with the PAT, live-probe
   https://clemvillatte.github.io/flourishing-compendium/#view=academy
   (click the "Contemplative & Mental Practices" hall; expect 55
   session cards and the 8 new titles).
5. Optional next enrichment (owner's complaint implies more depth):
   fam 6-10 and 16-20, omm 11-15, lkm 16-20, walking 16+; daoist
   sessions over 20 minutes are a documented gap to state honestly in
   the shelf note rather than pad.
