# deg-wol-pragmatism learner-view QA (deg-integrate, Phase E partial)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
Tested against: LIVE Pages deploy at clemvillatte.github.io. Live app.js
sha256 171aec9c traced to commit 125a9f1 (origin/main was 52e41eb at QA
time — the Pages deploy lags origin/main by one run because the repair
lanes keep pushing while the Pages workflow runs).

## What was rendered and click-checked

Live deploy, desktop:

- deg-wol-pragmatism degree page (`#degree=deg-wol-pragmatism`): all
  five modules render with human titles and prose descriptions.
- deg-wol-pragmatism module III (`#module=mod-prag-3`): the module page
  itself renders with the correct module meta (Intermediate, 4.25h) and
  its assigned sources resolve (Misak 51:57 only). No 404s.

## Findings (routed; not fixed here — app.js is owned by deg-fix-schema)

On the LIVE deploy (171aec9c/125a9f1) the pragmatism m3 module page
STILL shows the exact defect set the owner flagged:

1. TITLE BAND LEAK: "m3-truth-and-the-will-to-believe: James on Truth
   and Genuine Options" — the band filename leaks into the title.
2. DESCRIPTION LEVEL CODE: "L2 Guided application. Prerequisites: the m2
   exits." — a level code, not learner prose.
3. VIEWING LIST MISSING THE JAMES READINGS: only the Misak lecture
   (51:57, 1 essential item) renders; the module's core texts (James,
   The Will to Believe; Pragmatism Lecture II B1+B2; Lecture VI B3) are
   absent from the live data block.
4. PREREQUISITES PRINT RAW BAND IDS: "Module I — m1-orientation: What
   Pragmatism Is" / "Module II — m2-belief-and-doubt: Peirce on How
   Beliefs Settle".

VERIFIED FIXED ON ORIGIN/MAIN at the QA commit (52e41eb and the earlier
4d63945): the local data block now carries for mod-prag-3 the clean
title "James on Truth and Genuine Options", a prose description, all
four required readings with bounded locators and reading-time labels
(PRAG-M3-02 Will to Believe 2,532 words ≈ 19 min; PRAG-M3-03 Lecture II
1,216 words ≈ 9 min; PRAG-M3-04 Lecture VI 157 words ≈ 1 min; Misak
whole lecture), and prerequisites as module ids (renderer prints titles
— confirmed by the psychdim m1 render, whose prerequisites now print
human titles).

→ This is DEPLOY LAG, not an unfixed repo state. Route: re-render the
live pragmatism m3 page after the Pages run triggered by the newest
origin/main push completes; if the defects persist on that NEW deploy,
route back to deg-fix-schema (Phase A/B) with the specific module. No
further action from this lane.

## Verdict

Pragmatism m3 renders structurally correct (module meta and sources
resolve). The four learner-facing defects visible on the live page are
already fixed in origin/main's data block; the Pages deploy is behind
by one run. No NEW defect was found beyond the audit's known set and
the wiki_readings owner-decision item.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
