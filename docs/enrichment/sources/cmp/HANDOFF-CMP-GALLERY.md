# HANDOFF: CMP (Contemplative) gallery enrichment

Status: **RELEASED (2026-10-22).** Both release blockers resolved,
advisor re-verification passed after evidence corrections, and the
branch was pushed to main: released commit d20fd224c, fast-forward
onto origin/main c19aa57bd (main moved twice during the push; the
branch was rebased and the preservation checks repeated each time).
The checkpoint branch is now historical; main carries the work.

Commits (rebased, on top of origin/main at cf6bed4d4):
- d0b6b0a58 "academy: cmp gallery +8 verified sessions (47->55), omm/lkm/zen/walking gaps filled"
- 0b30dfc1e "academy: cmp handoff — gallery enrichment state and remaining steps"
- 3882e6d18 "academy: cmp ledger/handoff corrections (zen buckets, attribution note) + evidence preserved"
- 7991583ca "academy: cmp handoff status correction (checkpoint, release blockers)"
- 7f270f68d "academy: cmp handoff lists checkpoint commit hashes"
- 584bf17b0 "academy: cmp release blockers resolved (palouse lkm guide verified as dave potter via insight timer; all six recordings fully transcribed and classified)"
- 756b36585 "academy: cmp handoff updated - release blockers resolved"
- 77a247adc "academy: cmp app.js tail restored after rebase conflict resolution (one-line deg-cmp change only vs origin/main)"
- c6b65b516 "academy: cmp evidence - add full transcripts for mc-restful and mc-space-feelings (missed in earlier copy)"
- later evidence/ledger correction commits appear in git log

Git relationship: the branch IS rebased onto origin/main (cf6bed4d4
at rebase time). The only rebase conflict was site/assets/app.js: the
deg-cmp practiceSessions were merged into main's current
fcAcademyData (deg-qigong 80 sessions and all other Academy data
preserved from main); a first resolution accidentally dropped the
file tail after the conflict markers, caught and fixed in 77a247adc
(the app.js diff vs origin/main is exactly one line). Push to main
must be a normal fast-forward push; never force-push main.

Original session history (read only):
~/.perplexity/sessions/cffd561c-9be6-493e-b845-ede0686acb4f/
(turns/ and tool_calls/). Repo: github.com/Clemvillatte/flourishing-
compendium, checkout at /home/user/workspace/fc, branch main. Git
identity "Computer Agent" <computer@perplexity.ai>; PAT in
~/.git-credentials (never commit it).

## RELEASE BLOCKERS: RESOLVED

1. Instructor qualification for the new Palouse LKM row: RESOLVED.
   The Palouse LKM page links the Insight Timer profile
   (insighttimer.com/palousemindfulness); the track page for "MBSR
   Lovingkindness Meditation" credits Dave Potter (Palouse
   Mindfulness) with a printed duration of 13:17 matching the mp3's
   ffprobe duration (797.09 s), and publishes a full transcript that
   corresponds closely to the recording's full vosk transcript (the
   published wording matches the vosk wording of the opening and the
   close and runs through the same sequence of stages; the vosk text
   has recognition errors and is not literally equal). The profile bio documents
   that Dave Potter is a fully certified MBSR instructor trained
   through the University of Massachusetts Medical School, where Jon
   Kabat-Zinn founded the Center for Mindfulness. The CMP1 row and
   the app.js deg-cmp entry now attribute the row to "Dave Potter,
   Palouse Mindfulness". Evidence: evidence/it-lkm.html,
   it-profile.html, full-palouse-lk.txt. Existing shipped Palouse
   rows untouched.

2. Recording classification completeness: RESOLVED. All six previously
   sampled recordings (Tara Brach 30 min, Palouse LKM, Palouse
   walking, three Mountain Cloud sits) were re-downloaded and fully
   transcribed with vosk over the entire files (no time limit);
   transcripts preserved as evidence/full-*.txt, with the executed
   script, run log (UTC timestamps), re-download ffprobe durations
   and a reproduction script preserved in evidence/
   (run_transcribe.sh, transcribe-run.log, ffprobe-redownload.txt,
   reproduce-full-transcripts.sh). The original session records
   (session cffd561c...) are no longer present in this environment,
   so the earlier opening-sample commands could not be recovered;
   the complete transcripts supersede them, and the README no longer
   carries the earlier unsourced "roughly 60 to 90 seconds" claim.
   Classification from the full transcripts (each read in full): all
   six are continuous guided practice with no intervening talk
   segment; the Tara Brach recording self-identifies her as the guide
   at the opening.

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

Attribution: RESOLVED for the Palouse LKM row (Dave Potter, see
RELEASE BLOCKERS above). The walking row's Tara Brach attribution
is printed on the Palouse walking page (saved at evidence/walk.html).

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

## QA

Original session (all green at the time): unit tests 30 OK; node
--test 9 pass; routes.qa.cjs ALL PASS; build.py only the pre-existing
HEAD warning ('manifest references missing files: Nondual
awareness'; Library content, out of scope); node --check OK;
Playwright: 55 cards, 8 new sessions, no broken images, shelf filter
and card clicks correct, zero page errors.

Post-rebase re-run (2026-10-22, this session, on the rebased tree;
server via start_server on :8765):
- python3 -m unittest discover -s scripts/tests: OK (30 tests)
- node --test scripts/tests/randomizer.test.cjs: 9 pass, 0 fail
- node scripts/tests/routes.qa.cjs: ALL PASS
- python3 scripts/build.py: OK (no missing-files warning in output)
- node --check site/assets/app.js: OK
- Structural scope proof vs origin/main: app.js byte-identical prefix
  and suffix around the fcAcademyData assignment; all Academy data
  deeply equal except deg-cmp.practiceSessions; deg-qigong deeply
  equal with 80 sessions; app.js deg-cmp sessions exactly equal the
  scripts/cmp_gallery_data.py parser output including thumbnails;
  exactly 8 added rows by (title, url).
- Playwright with hard assertions: 55 cards; all 8 new titles
  present matched by title AND guide; all images load after
  lazy-load scroll; Walking filter -> 6 cards; each of the 8 new
  cards opens its exact URL in a new tab; zero page errors.
  Selector note: match cards by title plus guide (several titles,
  e.g. Walking Meditation, exist on more than one shelf row).

## Remaining steps, in order

1. DONE (2026-10-22): both RELEASE BLOCKERS resolved, see above.
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
