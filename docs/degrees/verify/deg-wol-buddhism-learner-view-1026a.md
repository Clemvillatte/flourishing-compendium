# deg-wol-buddhism learner-view QA (deg-integrate, Phase E partial)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
Tested against: LIVE Pages deploy at clemvillatte.github.io (app.js sha256
cc4d0e61, traced to commit dfeaee7 — one push behind origin/main at QA
time; origin/main 4d63945 already carries the schema lane's buddhism
assignment backfill, which the audit script confirms by reporting only
the wiki_readings item for deg-wol-buddhism).

## What was rendered and click-checked

Live deploy, desktop:

- deg-wol-buddhism degree page renders all nine modules with human
  titles and prose descriptions.
- deg-wol-buddhism module III (`#module=mod-bud-3`): the module page
  itself renders and its assigned sources resolve (Brahm, What the
  Buddha Taught 49:44; Brahm, What Is Buddhism? booklet; the Plum
  Village Five Mindfulness Trainings) with the correct module meta
  (Intermediate, 2.5h, 3 essential items), outcomes, graded activity and
  rubric prose. No 404s, no dangling references, no empty aside beyond
  the degree-level openingNote finding below.

## Findings (routed; not fixed here — app.js is owned by deg-fix-schema)

The live module page still shows the exact Phase B/A/D defect class the
audit identified, on the LIVE DEPLOY only:

1. TITLE BAND LEAK: "b3: Sila in Practice, The Precepts as Training"
   — the "b3:" prefix is an internal band code, not learner prose.
2. DESCRIPTION LEVEL CODE: "L2 Guided application. Prerequisites: b1
   and b2 exit criteria." — a level code plus a prerequisite line, not
   the 1–3 sentence learner prose Phase B requires.
3. PREREQUISITES PRINT RAW BAND IDS: "Module I — b1: Ethics First,
   Orientation to the Buddhist Walk" and "Module II — b2: The Four
   Noble Truths (…)" — the b1/b2 prefixes leak into the prerequisite
   list; Phase B requires prerequisite TITLES without band codes.
4. VIEWING LIST CARRIES FULL DURATIONS, NO SEGMENTS: Brahm "What the
   Buddha Taught" prints "49:44" as the assignment with no "Watch
   <window>" line; the two text sources (the What Is Buddhism? booklet,
   the Five Mindfulness Trainings) print no locator or word-count label.
   The module doc assigns precise windows and passages; the data block
   on the live deploy cannot express them. Phase A fixes this class.
5. DEGREE openingNote: the live degree page shows no openingNote (empty
   aside) — Phase C item, routed to deg-fix-text.

All five findings are ALREADY FIXED in origin/main's data block at the
QA commit (the audit script reports only the wiki_readings owner-decision
item for deg-wol-buddhism at 4d63945). This is DEPLOY LAG on the Pages
copy, not an unfixed repo state. Route: re-render the live module after
the Pages run triggered by the schema/text pushes completes; if the
defects persist on the NEW deploy, route back to deg-fix-text (Phase B)
and deg-fix-schema (Phase A) with the specific module.

## Verdict

Buddhism renders structurally correct (all modules and sources resolve;
no 404s; outcomes/activity/rubric prose present). The learner-facing
defects visible on the live module page are the audit's Phase A/B/D
classes, fixed in origin/main and awaiting the Pages deploy to catch up.
No NEW defect was found beyond the audit's known set and the
wiki_readings owner-decision item.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
