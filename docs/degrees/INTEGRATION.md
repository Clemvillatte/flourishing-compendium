# Integration notes (deg-integrate band)

How module designs travel from a degree owner's markdown into the Academy
data block, and the vocabulary the schema migration of 2026-10-25 added.
This file is owned by the integrator band; the taxonomy and curriculum
rules live in skill/curriculum-design/Skill.md and the deg-arch band.

## What changed in the data block (schemaVersion 2)

The fcAcademyData block in site/assets/app.js now carries, on every entry
in the degrees array:

- kind: "degree" or "practicum". The practica (deg-qigong, deg-cmp and the
  psychology-101 bridge) render in the PRACTICUM section of the Academy
  home; everything else renders under Degrees. The psychology-101 card is
  an external link to the Psychology Lab site; its address is read from
  the url of source PSY-101 attached to its module, never hardcoded.
- legacy: true on the seven superseded programs (deg-philosophy,
  deg-contemplative, deg-relational, deg-mind, deg-wellbeing,
  deg-therapeutic, deg-psychology-101). They render behind the Legacy
  degrees link in the Academy footer, at the address #view=legacy. Their
  content is untouched; the owner decides their fate.
- status: "in-development" on the seven new degrees. Their modules arrays
  are empty on purpose: the degree owners deliver the module content, and
  no module data may be fabricated by the integrator. These entries remain
  data-only: unfinished degrees have no Academy cards or accessible degree,
  practice or module pages (owner decision 7, 2026-10-26).

## Complete-only publication (owner decision 7)

The supervisor sets `status: "complete"` only after **every** module is
written, verified, independently reviewed and integrated. This is a human
publication sign-off, not an automatic inference from a nonempty syllabus.
The integrator must never flip it for a partial degree or attach unfinished
modules. No new degree is complete at this change.

The shared `acadDegreeVisible` predicate gates both the home and direct
degree/practice addresses. Missing, draft, in-development and unknown status
values fail closed. Even a signed-off degree stays hidden if its syllabus is
empty or references missing modules or modules owned by another degree.
Duplicate module ids, non-string ids and mismatched module self-ids also
fail closed.
`acadModuleVisible` also blocks direct module addresses for hidden degrees
and unlisted new-degree modules. Detail renderers repeat these checks so a
stale internal state cannot bypass the route gate.

Legacy and practicum entries are explicit exceptions, retaining their
existing access and content. The footer route stays `#view=legacy`; practica
retain their order and the divider stays ahead of the Degrees section.
When none are complete, that section has no degree cards.

Tests: `node --test scripts/tests/academy-display.test.cjs` exercises the
publication predicate against real data and isolated synthetic fixtures;
`BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-display.qa.cjs`
checks rendered home, fresh routes, hash changes, modules, legacy access,
practica and viewport/console regressions. Fixtures live only in test memory.
`BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-storage-search.qa.cjs`
also checks source/discovery search, indirect addresses and normal, denied,
quota-full, malformed and stale-progress storage at desktop/mobile widths.
Learner progress never grants publication permission.
`BASE_URL=http://127.0.0.1:8771/ node scripts/tests/academy-legacy-access.qa.cjs`
exhaustively checks every existing legacy/practicum degree and module page,
each module's back-to-degree control and the preserved legacy destination
at desktop/mobile widths.

Browser functional tests isolate **external decorative images only** using
`qa-image-network.cjs`; local editorial images and all application content
remain live. Set `QA_LIVE_IMAGES=1` for an unmodified live-network image run.
Pre-existing live-network diagnostics are logged, never silently discarded:
the Editor iframe's missing `assets/prompts.js` and two Google favicon 404s
for existing Qi Gong domains. `qa-baseline-errors.cjs` matches only these
specific 404s; page errors and every other console error still fail.
Some existing remote video thumbnails can also be unavailable; the live
image mode deliberately fails on those rather than expanding its baseline.

The renderer orders the sections explicitly (practica: qigong, cmp,
psychology-101; degrees: the owner's README order), so array position in
the data block does not drive presentation.

## How a degree owner hands modules to the integrator

1. The module design lives as markdown under docs/degrees/ (band file,
   pilots, or a modules/ folder for your degree) and must have cleared
   the gates that precede technical integration: scope, curriculum
   coverage, resource verification and pedagogical coherence. An
   integration request for a module still marked DRAFT NOT CLEARED is
   returned unread.
2. Deliver the module as data the integrator can splice: module id,
   degree id, outcomes, prerequisites as observable competencies,
   requiredMedia and optionalMedia entries referencing source ids that
   exist in the sources array (with verification status from the
   verification band's evidence files), printed durations, and workload
   arithmetic. Follow the field names already used by the modules in the
   data block; the migration tests will refuse unknown or dangling
   references.
3. New source records ride along with their full verification record
   (identity, accessibility, credentials, segments, duration, language,
   verification status and date) in your ledger; the integrator splices
   them into sources and references them from the module.
4. The integrator splices with the safe-splice recipe (raw_decode
   boundaries on the data block, never find/replace), runs node --check,
   referential validation, both test suites, the playwright routes QA,
   and verifies the Pages deploy with a cache-busted fetch before
   reporting.

## Regression protection

scripts/tests/test_academy_migration.py holds two layers: permanent
schema invariants (every program has a kind, references resolve, the
bridge target is carried by the data) and a one-time audit of the
migration pinned to commit c4880ebb3 and its parent, which skips with a
stated reason where that history is absent (the CI shallow clone). The
audit proves the migration was presentation only: sources, modules,
topicMappings and the gallery block are unchanged. New module data from
degree owners is expected to change the modules and sources trees; the
audit reads pinned revisions, so it will not interfere.
