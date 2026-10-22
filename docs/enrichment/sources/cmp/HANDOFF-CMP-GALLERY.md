# HANDOFF — CMP (Contemplative) gallery enrichment

Status at handoff: **work complete and committed locally (802db6b09), NOT yet
pushed.** Remaining: advisor final verification, push, CI check, live probe.
This file is inside the CMP scope fence; it documents only the CMP gallery
task. The Qi Gong gallery task has its own handoff at
`docs/enrichment/sources/qg/HANDOFF-QG-GALLERY.md` — do NOT mix the two.

## Scope fence (do not cross)

This task touches ONLY:
- `academy/CMP1 — Contemplative & Mental Practices — A Year of Practice.md`
- `academy/thumbnails-manifest.json`
- `scripts/cmp_gallery_data.py`, `scripts/cmp_thumbnails.py`
- the `deg-cmp` segment of `window.fcAcademyData` in `site/assets/app.js`
- `site/assets/academy/sessions/sNN.jpg` (new: s47–s54)
- `docs/enrichment/sources/cmp/`

Do NOT touch: the repo-root `handoff.md` (supervisor's file), Library/Wiki
content or pipeline, QG files, the cmp baton or `scripts/enrich_save.sh`.

## Standards (owner directives — non-negotiable)

1. Zero hallucination: every fact, quote, duration, attribution comes from an
   opened source. Unverifiable = don't ship it.
2. No disclaimers or safety language in shipped content.
3. Humanized prose, no em dashes.
4. Audio classified from the recording or published transcript, never the
   title.
5. Durations from ffprobe on the audio file or the source page's printed
   duration, never guessed.
6. Instructor standard: lineage/monastery/research affiliation, or documented
   teacher training linked from an opened bio page.
7. YouTube: verify via oembed endpoint + watch-page duration (not needed
   here — no YouTube sources were used for this batch).

## What was done (commit 802db6b09)

8 new sessions in CMP1 (47 -> 55), filling thin matrix buckets:

| Session | Guide | Length | Bucket | Source URL |
|---|---|---|---|---|
| Meditation for Working with Difficulties | Diana Winston (MARC) | 7 min | OMM 6-10 | https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/04_Meditation_for_Working_with_Difficulties.mp3 |
| Complete Meditation Instructions | Diana Winston (MARC) | 19 min | OMM 16-20 | https://d1cy5zxxhbcbkk.cloudfront.net/guided-meditations/03_Complete_Meditation_Instructions.mp3 |
| 30-Minute Meditation: Open Awareness | Tara Brach (IMCW) | 30 min | OMM 21-30 | https://www.tarabrach.com/30-minute-meditation-open-awareness/ |
| Lovingkindness Meditation | Palouse Mindfulness | 13 min | LKM 11-15 | https://palousemindfulness.com/disks/lovingkindness.mp3 |
| Walking Meditation | Tara Brach (Palouse page) | 6 min | Walking 6-10 | https://palousemindfulness.com/disks/walking-meditation.mp3 |
| Space for Feelings | Henry Shukman (Mountain Cloud) | 10:11 | Zen 6-10 | https://www.mountaincloud.org/wp-content/uploads/2020/08/Space-for-feelings.mp3 |
| Restful Awareness | Henry Shukman (Mountain Cloud) | 13:33 | Zen 11-15 | https://www.mountaincloud.org/wp-content/uploads/2020/08/Restful-awareness.mp3 |
| Mu Meditation Intro | Henry Shukman (Mountain Cloud) | 14:09 | Zen 11-15 | https://www.mountaincloud.org/wp-content/uploads/2020/08/Mu-meditation-intro.mp3 |

Verification evidence (all done):
- Audio classification from vosk transcripts (/tmp/vosk_out/, may be gone):
  Complete Instructions = OMM breath anchor; Working with Difficulties = OMM
  kindness close; Mountain Cloud trio all open with posture/settling.
- ffprobe durations match printed durations on source pages (MARC catalog,
  Mountain Cloud intro-zone listing, Palouse pages, Tara Brach page).
- New matrix (55 sessions): fam 1/0/2/2/1/2/0/0, omm 1/1/1/1/3/1/0/0,
  lkm 0/3/1/0/2/1/1/0, bodyscan 1/1/3/1/2/2/1/0, daoist 1/0/1/0/0/0/0/3,
  zen 0/0/6/1/1/1/0/0, walking 1/2/2/0/0/0/1/0.
- Parser fixes in scripts/cmp_gallery_data.py: H:MM:SS parse, trailing-space
  guide split, matrix key order [5,10,15,20,30,45,'45+',None].
- 8 thumbnails s47–s54 (640x400, scrim from y=230, gold label 30px at
  (30,292), cream 44px at (30,328), DejaVu Serif Bold, JPEG q85), PD images
  from the Art Institute of Chicago: s47=c_016, s48=c_015, s49=c_023,
  s52=c_025, s53=c_014 (Mori Yuzan, Hamonshu 1903), s50=c_033, s54=c_038
  (Ogawa Kazumasa, Some Japanese Flowers 1896), s51=c_043 (Follower of Ogata
  Korin). All visually inspected; c_006 rejected (duplicate).
- app.js safe-splice: deg-cmp practiceSessions 47->55, verified
  prefix/suffix byte-identical, other degrees and fcGalleryData untouched,
  node --check OK.
- Tests: unittest 30 OK; node --test 9 pass; routes.qa.cjs ALL PASS;
  build.py emits only the pre-existing warning ("manifest references
  missing files: ['Nondual awareness']" — exists on HEAD, Library content,
  out of scope, do NOT fix here).
- Playwright browser QA (all green): 55 cards render; all 8 new sessions
  present; no broken images (scroll each img into view for lazy loading);
  shelf select filters (Walking -> 6 cards); card click opens correct URL
  in new tab (LK card -> palousemindfulness.com/disks/lovingkindness.mp3);
  zero page errors. NOTE: session cards are `.apg-card` (not
  .acad-session-card); shelf filter is a `<select class="acad-explorer-select">`
  (not chips); cards are div role=button opening a new tab.

## Remaining steps (in order)

1. Advisor final verification (required by owner directive): present the
   evidence above; ask whether every requirement is met.
2. `git pull --rebase origin main` (concurrent workers push constantly),
   then push with `git -c user.name="Computer Agent" -c user.email="computer@perplexity.ai" push`.
   PAT is in ~/.git-credentials; never commit it.
3. Verify the commit is in origin/main (merge-base check; CI may cancel
   superseded runs), check CI green via GitHub API, live-probe
   https://clemvillatte.github.io/flourishing-compendium/#view=academy
   (click the "Contemplative & Mental Practices" hall; expect 55 session
   cards and the 8 new titles).
4. Optional next enrichment (owner's complaint implies more depth): fam 6-10
   and 16-20, omm 11-15, lkm 16-20, walking 16+; daoist >20 min is a
   documented gap to state honestly in the shelf note.

## QA commands

- `python3 -m unittest discover -s scripts/tests`
- `node --test scripts/tests/randomizer.test.cjs`
- `node scripts/tests/routes.qa.cjs` (needs the :8765 server; run it via the
  start_server tool, not bash background jobs)
- `python3 scripts/build.py`; `node --check site/assets/app.js`
- Playwright must run from /home/user/workspace/fc (node_modules there).
