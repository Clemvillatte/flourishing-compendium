# ROUTE for the supervisor (from storyteller-perplexity-67ce7e1d, 2026-10-21 13:25 UTC)
- OWNER REQUEST (2026-10-21): the progress dashboard should carry a STORIES section (published story pages, drafts in flight, pending registrations) and be refreshed at every shift start, so a non-technical reader sees done/left for principles, concepts AND stories in one place. PROGRESS.md (scripts/enrich_progress_report.py) covers principles/concepts only; tellers cannot edit shared pipeline files (the separation guard blocks handoff.md for storytellers, so this note lives in the lane handoff). Route: extend the script with a stories row (content/stories/ST*.md page count + lane-state draft counts) and add a shift-start refresh rule to OPERATIONS.md.
- s1d-010 (B018 Kalama Sutta) READY after 2 advisor QC rounds (round-2 repairs self-verified; supervisor recheck welcome at registration). Ready-for-registration queue is now SEVEN drafts: s1d-003, s1d-004, s1d-006, s1d-007, s1d-008, s1d-009, s1d-010.

# s1d lane handoff

Agent: storyteller-glm53-7c4fa2e1 (minted 2026-10-21 12:09 UTC, commit ef4b61c1b).
Role: Storyteller (PROTOCOL-STORIES.md). STORY_ROLE=storyteller STORY_LANE=s1d on every save.

## Scope (self-assigned from the STORIES-TASKBOARD candidate pool, owner priority
Daoism/Buddhism/Pragmatism, zero-story principles, no overlap with s1a/s1b/s1c
targets or supervisor batch 2):

| item | principle | planned story | angle |
|------|-----------|---------------|-------|
| s1d-001 | B129 Point directly at experience | Deshan and the old woman at the tea stall (Zen) | commentary vs the moment: the Diamond Sutra question the scholar could not answer |
| s1d-002 | B133 Let the self-construct fall away (Great Death) | Chiyono, "No water, no moon" (Zen) | the self that carried the water breaks with the pail |
| s1d-003 | D018 Give things time | John Harrison's forty years of clocks (H1-H4) | ripening work that cannot be hurried; careful at the end as at the beginning |
| s1d-004 | D006 Move by return (fu) | Celilo Falls and the first salmon return | return to the root as a planned-for cycle, not a loss |
| s1d-005 | P057 Your self is social through and through | the Wild Boy of Aveyron (Itard's reports) | a self built (or not built) out of human company |

Angles may be adjusted during research; changes recorded in state.json.
No other lane's files touched; no principle/concept pages touched.

## Session log — storyteller-glm53-7c4fa2e1 (2026-10-21, 12:05-13:03 UTC)
- Stories drafted and QC'd: s1d-001 (B129 Deshan, published ST365), s1d-002 (B133 Chiyono, published ST379), s1d-003 (D018 Harrison, published ST382), s1d-004 (D006 Celilo, ready), s1d-005 (P057 Victor of Aveyron, published ST404), s1d-006 (P012 Peirce diamond, ready, advisor-QC'd), s1d-007 (B036 Sona lute string, ready), s1d-008 (P020 James squirrel, ready), s1d-009 (B014 MN 22 raft, ready), s1d-010 (B018 Kalama, returned: source fetch failed and the owner redirected the session).
- Pending supervisor registration: s1d-004, s1d-006, s1d-007, s1d-008, s1d-009 (all story_check clean, ready).
- Baton collision with storyteller-603d6cdd (12:27:48, contested stale claim) resolved via note in baton file; no file collisions; their targets P193/P187/P191 were untouched by s1d. Session redirected by owner to theory-page work (w1m) at ~12:43; lane wrapped and baton released.

## Session note (storyteller-perplexity-67ce7e1d, 2026-10-21 13:30 UTC)
Owner redirected this session to the worker (principles/concepts) role mid-run. s1d-010 is READY and pushed (2 advisor QC rounds); the seven ready drafts (s1d-003/004/006/007/008/009/010) await supervisor registration. No other in-flight work abandoned; baton released. New story research (B046 Mu koan via Mumonkan case 1, D084 useless tree) was NOT drafted - candidates noted here for any future teller.

## URL + mechanical verification of the ready queue (2026-10-21 13:44 UTC, worker-perplexity-67ce7e1d)
All seven ready drafts (s1d-003/004/006/007/008/009/010) re-run through story_check: 0 errors.
External carrier URLs spot-checked (HTTP 200 via curl; brocku.ca 403s plain curl but is
accessible - verified via crawler, it is James Pragmatism Lecture 2): all resolve. Ready for
registration.

## s1d-009 quote verification (2026-10-21 13:46 UTC, worker-perplexity-67ce7e1d)
MN 22 (Thanissaro) re-opened; all eight quotations in s1d-009 verified verbatim against the
fetched page. No repairs needed.

## s1d-006 quote verification (2026-10-21 13:47 UTC, worker-perplexity-67ce7e1d)
Peirce "How to Make Our Ideas Clear" (peirce.org transcription) re-opened; the maxim, the
habits sentence, the habit-identity sentence and the diamond/hardness sentence verified
verbatim (the transcription's "that might conceivably" matches the draft). No repairs needed.

## s1d-007 quote verification (2026-10-21 13:49 UTC, worker-perplexity-67ce7e1d)
Sona Sutta AN 6.55 (Thanissaro) re-opened; the four quotations verified verbatim, including
the translator's bracketed insertion printed as such. No repairs needed. (s1d-008 had one
trailing comma restored, see commit 7e7c21971.)

## s1d-003 quote verification (2026-10-21 13:52 UTC, worker-perplexity-67ce7e1d)
RMG longitude article re-opened; all five quoted sentences verified verbatim. No repairs
needed. (The st-andrews carrier's quotes were not re-checked this pass.)

## s1d-004 quote verification (2026-10-21 13:55 UTC, worker-perplexity-67ce7e1d)
nwcouncil.org first-salmon page re-opened; the five quoted sentences verified verbatim (one
curly-vs-straight apostrophe is typographic normalization only, not a repair). No repairs needed.

## s1d-004 critfc verification (2026-10-21 13:58 UTC, worker-perplexity-67ce7e1d)
critfc.org "Honoring First Salmon" re-opened; the four quoted sentences verified verbatim
(curly apostrophes typographic only). One caveat for the supervisor: the fetched content did
not show the "by Jeremy FiveCrows" byline (may be present on the page but not in the
extraction); the draft's source line keeps it.

## s1d-003/004 final carrier verification (2026-10-21 14:00 UTC, worker-perplexity-67ce7e1d)
st-andrews (MacTutor) longitude page re-opened: the Harrison watch quote and the H4
five-seconds sentence verified verbatim. NatGeo salmon article re-opened: the proper-respect
sentence verified verbatim. ALL SEVEN ready s1d drafts are now quote-verified against opened
carriers this session (one repair total: s1d-008 trailing comma). Ready for registration.

## s1d-004 last carriers + correction of my own flag (2026-10-21 14:03 UTC)
NLM 1957 Dalles Dam sentence and ictnews "first salmon feast still happens" sentence verified
verbatim. The "powwow" sentence I flagged as missing from ictnews belongs to the NatGeo block
and is verified verbatim against the NatGeo article (my extraction-context confusion, not a
draft defect). s1d-004 fully verified; no repairs needed.

## Timestamp note (2026-10-21, worker-perplexity-67ce7e1d)
The UTC times in this session's HANDOFF entries drifted ahead of the wall clock; the true
session window is 12:58:56-13:57 UTC. The verifications and results are unaffected.

## Continuation 2026-10-25 (storyteller-pplx-s1d-1025z)

- fm status reconciled to `ready` on the five ready-unpublished drafts (006-010);
  `story_register.py` refuses non-ready front matter, so the stale `qc_pending`/`drafting`
  values would have blocked registration. story_check 0 errors on all five.
- DISPOSITION REQUESTED on s1d-010 (The Kalamas Ask Which Teachers Are Lying, B018,
  Thanissaro translation): quotes re-verified verbatim against the live Access to
  Insight page (4/4 checked, 2026-10-25). BUT the Kalama Sutta is already published as
  ST466 (Who Spoke the Truth?, B160, Soma translation) — same narrative event,
  different principle and translation. Registering s1d-010 would give the compendium
  two Kalama Sutta pages. The angle differs in principle mapping (B018's full
  problem-grounds-test-criterion arc vs B160's question-authority framing), so this is
  a supervisor/owner call: register as a distinct-angle story or reject as duplicate.
  Same pattern as s1c-039 vs ST430 (Franklin), routed the same day.

## End-to-end review s1d-006 (2026-10-25, storyteller-pplx-s1d-1025z)

Full review, not a spot-check: all ledger quotes were previously raw-verified by the
drafting teller (two carriers, variants noted); I independently re-verified the maxim
and the habits span against the live peirce.org text (verbatim). The paraphrase of
Peirce's answer to the diamond question ("Nothing would be false... only clumsy;
the facts would be the same facts, arranged badly") checked against the source's
actual sentences ("no falsity in such modes of speech... arrangements of facts which
would be exceedingly maladroit") — faithful. Principle mapping checked against P012's
body: the good-heart worked example is the principle's own, correctly named as not
carried; P012 currently has no story backlinks, so the draft fills a zero-story
principle. Overlap check: ST102 covers the maxim under P019/P027 — different
principles and angle; no duplicate. Coverage gaps named. VERDICT: clean, ready for
registration as-is.

## End-to-end review s1d-009 (2026-10-25, storyteller-pplx-s1d-1025z)

Quotes: 5/5 checked spans verified verbatim against the live Access to Insight page
(the obstructive-acts line, the raft-teaching line, the worthless-man rebuke, the
great-expanse-of-water description, the let-go-even-of-Dhammas close). Principle
mapping: B014 currently has no story backlinks (zero-story); the draft carries the
simile in its narrative context (Ariṭṭha's wrong view and rebuke) and names the
principle's wider Plain-words applications as not carried — consistent with B014's
body. Overlap: no existing page retells the MN 22 raft parable (raft-word matches in
other pages are incidental); the s1a-042 Milinda draft targets B122, not B014.
VERDICT: clean, ready for registration as-is.

## QC PASS on the publication holds (2026-10-25 14:50Z, qc-storyteller-pplx-1025x, s1d baton)
Demarcation: s1a is held by another teller (claim 84399bb89, 2026-10-25); this pass touches
only s1d files. Statuses left as found (qc_pending) — disposition is the supervisor's.

- s1d-008 vs ST433 (The Squirrel at the Camp): SAME narrative (James's camping-party squirrel,
  Pragmatism Lecture II), SAME principle (P020), SAME angle (the two practical senses of
  'going round'). Only difference is the carrier (Brock Mead Project transcription vs
  Gutenberg). This session re-opened the Gutenberg carrier fresh: all 8 draft quotes verify
  verbatim in wording (Gutenberg renders small-caps lines in caps and '--' for '-'; no word
  differences). Per the STORIES-TASKBOARD convention (two stories per principle only when the
  recorded angles differ), the angle does NOT differ. QC RECOMMENDATION: REJECT as duplicate;
  the alternate-carrier argument does not create a second angle.
- s1d-010 vs ST466 (Who Spoke the Truth?): same narrative event (Kalama Sutta AN 3.65) but a
  DIFFERENT principle (B018 verify-in-own-experience vs B160 question authority) and
  materially different carried facets: s1d-010 carries the ten grounds, the
  greed-aversion-delusion conduct test, the know-for-yourselves criterion and the
  wise-as-check (translator's note), none of which ST466 quotes; ST466 carries the
  doubt-blessing frame and the four solaces. This session re-opened the ATI Thanissaro
  carrier fresh: all 9 ledger quotes verify verbatim. QC RECOMMENDATION: REGISTER as a
  distinct-angle story for B018 (the sutta is the principle's own namesake narrative and the
  two pages serve different principles); supervisor/owner to confirm.
- Fresh story_check runs on both drafts this session: 0 errors (--context draft).

ROUTE for the supervisor (qc-storyteller-pplx-1025x, 2026-10-25): the OWNER-BOARD line for
this baton take could not be appended (separation guard blocks storytellers on
docs/enrichment/OWNER-BOARD.md) — please add the board line: "qc-storyteller-pplx-1025x took
s1d (QC: 008/010 hold evidence + ready-queue re-verify); s1a untouched, held by new teller."
