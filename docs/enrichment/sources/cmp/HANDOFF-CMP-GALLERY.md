# HANDOFF: CMP (Contemplative) gallery enrichment

Status at handoff: **work complete and committed locally, NOT yet
pushed.** Local commits (on top of origin/main at last fetch):
- 802db6b09 "academy: cmp gallery +8 verified sessions (47->55), omm/lkm/zen/walking gaps filled"
- 0a9233eb7 "academy: cmp handoff" (superseded by this rewrite)
- one more commit with ledger/handoff corrections and evidence files

Remaining: advisor re-verification of the corrections below, push, CI
check, live probe. This file documents only the CMP gallery task. The
Qi Gong gallery task has its own handoff at
docs/enrichment/sources/qg/HANDOFF-QG-GALLERY.md; do NOT mix the two.

Repo: github.com/Clemvillatte/flourishing-compendium, branch main,
checkout at /home/user/workspace/fc. Original session history (read
only): ~/.perplexity/sessions/cffd561c-9be6-493e-b845-ede0686acb4f/
(turns/ and tool_calls/). Git identity "Computer Agent"
<computer@perplexity.ai>; PAT in ~/.git-credentials (never commit it).

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

Attribution decision to flag for the owner: the Palouse LKM
recording's individual guide is not named on the page or in the audio.
The row is attributed to the publishing institution (Palouse
Mindfulness Inc), matching the two pre-existing Palouse rows on the
FAM shelf. The opened team and founder pages do not state a formal
MBSR teaching credential for a named individual. If the owner requires
a named, credentialed guide, remove the row or verify the guide via
the Insight Timer listing referenced on the Palouse page.

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

## QA (all green)

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

## Remaining steps, in order

1. Advisor re-verification: present the ledger entry, the corrected
   bucket claims, the attribution note, and the evidence directory;
   ask whether every requirement is now met.
2. Resolve the Palouse LKM attribution decision with the owner if the
   advisor still flags it (options: keep institutional attribution,
   remove the row, or verify via Insight Timer).
3. git pull --rebase origin main (concurrent workers push constantly;
   re-check that none of the 107+ incoming commits touch the scoped
   files), then push with git -c user.name="Computer Agent" -c
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
