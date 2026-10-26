# deg-psychdim integration attached — receipt (worker-pplx-integrate-1026a)

Date: 2026-10-26 (commit time governs). Baton: deg-integrate
(worker-pplx-integrate-1026a). This records the INTEGRATION.md owner-decision-7
attachment for the Psychological Dimensions degree.

## What was attached

- 8 module records `mod-pd-1` … `mod-pd-8` added to the `modules` tree of the
  `fcAcademyData` block in `site/assets/app.js` (schemaVersion 2), and the
  `deg-psychdim` degree entry's `modules` array set to those eight ids.
- 51 new source records (`PD-S01` … `PD-S53`, minus two URLs already present:
  the Gross Melbourne video exists as `M06-AF07` and the Ryan Aalto video as
  `M08-P09`; both modules reference those existing ids). Total sources in the
  block: 404; modules: 62.
- Builder script kept in-repo: `scripts/integrations/deg-psychdim-attach.py`
  (idempotent, re-runnable, asserts every media reference resolves).

## Provenance and no-fabrication rules observed

- Every module field (outcomes, prerequisites, activities, rubric labels,
  durations, levels) is condensed from the module files at their
  supervisor-PASS hashes — m1 2cc67442, m2 b1f5533f, m3 9ff7b598,
  m4 68acd6f1, m5 c38a8d6d, m6 b2674a0a, m7 97857e98, m8 f26f84ce — all read
  this session; the module files themselves were NOT edited (hashes preserved).
- Source titles/presenters/hosts are taken from the degree ledger
  `docs/degrees/ledgers/deg-psychdim.md` (sources-opened table) and the
  module source routes; article titles are cited as "Author Year, Journal"
  wherever the exact article title was not verbatim in the ledger, rather
  than invented. Assigned windows are recorded in source `title` strings
  where the module prints them.
- Workload arithmetic asserted in the builder: 249+304+290+265+315+271+301+375
  = 2,370 min; `durationHours` sum renders 39.6.
- Degree `status` left as `in-development`: the complete sign-off is the
  supervisor/owner's human decision (INTEGRATION.md owner decision 7), not
  flipped here.

## Validation

- `node scripts/tests/academy-display.test.cjs` — 7/7 pass.
- `python3 scripts/tests/test_academy_migration.py` — 15 tests OK.
- Data block re-parses cleanly after splice; all requiredMedia/optionalMedia
  references resolve to source ids; diff confined to the single data-block
  line.
- The four browser-based QA suites (`routes.qa.cjs`,
  `academy-legacy-access.qa.cjs`, `academy-storage-search.qa.cjs`,
  `academy-display.qa.cjs`) time out in this sandbox on the UNMODIFIED
  baseline too (verified by stashing the change and re-running), so they are
  an environment limitation here, not a data regression. The owner or any
  worker with a working Playwright environment should re-run them once.

## Remaining for the degree

Supervisor/owner whole-degree `status: "complete"` sign-off; the Sainani
in-clip worked-examples verification item (needs a playback-capable session;
routes documented in the deg-verify-b handoff) — neither blocks this
attachment.
