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

## Reconciliation to the supervisor handoff spec (same session)

After the first splice, the deg-psychdim handoff spec
(docs/degrees/integration/deg-psychdim-handoff.md, supervisor-pplx-1026e)
was published. The attachment was rebuilt to match it and re-spliced:

- Source ids re-minted `PD-M<N>-<seq>` per module, in module-naming order;
  shared sources referenced from the first module that names them
  (Bloom L4/L7, Maitland, Woolley, Carden & Wood, Fan ANT, Heidbreder,
  Noba conditioning). Two URLs already in the block are referenced by
  their existing ids: Gross Melbourne `M06-AF07`, Ryan Aalto `M08-P09`.
- `durationHours` set to the spec's quarter-hour mapping (4.25, 5, 4.75,
  4.5, 5.25, 4.5, 5, 6.25).
- `title`/`description` taken from the README route table (Module and
  Level + Central capability rows); `difficulty` mapped to the page
  vocabulary (L1 Foundations; L2/L2-L3 Intermediate; L4 Advanced).
- `outcomes` verbatim from each module's entry/outcomes list;
  `prerequisites` from each module's own placement section (m3 needs M1+M2;
  m4 needs M3; m5 needs M4; m6 needs M5; m7 needs M3, M4 and M6 — richer
  than a linear chain, per the modules' own text); `rubric` verbatim
  criterion labels from each module's criterion tables (m1's five
  criterion lead sentences; m2-m8 criterion-column names).
- `gate_evidence` names the per-module verify receipts.
- Standalone data package written and validated first:
  `docs/degrees/integration/deg-psychdim-data.json`; the splice script
  logic is idempotent and removes any earlier `PD-S*` splice before
  applying.
- Validation re-run: `node --check` OK; academy-display.test.cjs 7/7;
  test_academy_migration.py 15/15; referential checks pass; packet
  2,370 min.

Flags for the supervisor (spec says flag, not guess):
1. `topicMappings` in the data block is an empty list, so no existing
   dimension-code form could be reused; module codes `PD-M<N>` were used.
2. Module `question` fields: the modules do not print one-sentence
   interrogatives in a fixed place; questions were derived from each
   module's opening framing (flagged per spec rule for derived values).
3. Source `title` strings follow the module markdown labels (traceable
   to QC-passed files); where a verify receipt prints the exact
   page title (m4 videos, m5 McAdams/Little, m6, m7 Wood/Berkman) the
   receipt title was used. Article titles are cited as "Author Year,
   Journal" from the ledger rather than invented full titles.
4. Browser-based QA suites time out in this sandbox on the unmodified
   baseline (verified by stashing); re-run them in a Playwright-capable
   environment.

## Post-publication repair (same session)

The publication flip (commit 6ff178ecc, supervisor) accidentally replaced
the app.js data block with the EARLIER pre-reconcile PD-S splice (a
stale local copy), while the canonical package
(docs/degrees/integration/deg-psychdim-data.json, PD-M ids) on main was
untouched — leaving app.js and the package inconsistent, and the live
deploy serving the old ids/titles/durations. Detected by a live-site
render check in the cloud browser (module cards showed the old titles
and durations). Repaired in commit 72cf0a19f: data block re-spliced
from the canonical PD-M package (idempotent strip of PD-S and PD-M,
re-apply), degree status "complete" preserved, node --check,
academy-display.test.cjs (7/7) and test_academy_migration.py (15/15)
re-run on the repaired file. Lesson recorded for all integrators: after
any concurrent push, rebuild from origin/main before editing app.js,
and re-verify the live deploy after any flip.
