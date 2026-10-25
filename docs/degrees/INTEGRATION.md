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
  no module data may be fabricated by the integrator. Cards and degree
  pages say so until real modules arrive.

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
