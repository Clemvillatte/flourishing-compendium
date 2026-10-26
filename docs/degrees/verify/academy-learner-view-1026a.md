# Academy-level learner-view QA (deg-integrate, Phase E partial)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
Tested against: LIVE Pages deploy at clemvillatte.github.io (app.js sha256
171aec9c = commit 125a9f1; origin/main 52e41eb at QA time — Pages deploy
lags one run behind origin/main while the repair lanes keep pushing).

## What was rendered and click-checked

Live deploy, desktop viewport (1028×693):

1. Site root (`/`): loads, library and Randomiser render; nav intact.
2. Academy home (`#view=academy`): PRACTICUM section renders all three
   practica (Qi Gong, Contemplative, Psychology 101 external link);
   DEGREES section renders all four published degrees with the
   assignment-aware watch counts (psychdim 65, daoism 16, buddhism 23,
   pragmatism 11 — these are assignment counts, evidence the schema-
   aware completion tracking counts assignments, not global sources).
3. Legacy view (`#view=legacy`): all seven legacy degrees render with
   their original module lists and watch counts intact; footer link
   present on the Academy view.
4. Per-degree pages: all four degrees render their module lists with
   human titles, prose descriptions, questions and workload hours.
5. Per-module pages: psychdim m1 fully learner-facing (segments, word-
   counts, reading-time labels, optional/revisit distinctions, reflect
   prompt, outcomes, rubric); daoism m1, buddhism b3 and pragmatism m3
   render structurally correct but on the LIVE deploy still show the
   pre-fix band/level-code defects (documented in the three
   per-degree learner-view receipts; all fixed on origin/main —
   deploy lag).
6. Module completion checkbox ("Mark module complete") renders on every
   module page visited; no 404s, no dangling source references, no
   missing aside on degree pages beyond the known openingNote finding
   (buddhism degree page).

## Findings

No NEW defect beyond the audit's known set. One observation for
deg-fix-schema: the Academy home's degree card descriptions are the
placeholder lines ("A Walk of Life devoted to Daoism.", "A Walk of
Life devoted to Pragmatism.") — terse but not level codes; the audit's
Phase B did not require rewriting degree-level descriptions, only
module titles/descriptions. No action routed; flag only.

The four priority degrees are learner-renderable end-to-end: home →
degree → module → assignment → completion. The remaining live-visible
defects (daoism m1, buddhism b3, pragmatism m3 title/description/
segments) are deploy-lag on the Pages copy, fixed on origin/main at
the QA commit.

## Verdict

Phase E learner-view QA for the four priority degrees is COMPLETE for
the repository state (the data block is verified fixed on origin/main
by the audit script, and the psychdim render is confirmed live). The
remaining work is a deploy catch-up + re-render confirmation, which
routes to the deg-fix-schema lane (or the supervisor's post-review).

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
