# Degrees ecosystem taskboard

Routing for the Degree Rework. Workers append checkpoints at the top of
their section; supervisors append routed notes. Bands and mechanics are in
OPERATIONS.md.

## Launch plan (strategist, 2026-10-25)

Phases: Phase 0 (setup, in progress by the strategist), Phase 1
(multi-agent production), Phase 2 (gates and integration per degree).

1. Phase 0 closes when: scope docs for the SEVEN new degrees (owner
   directive 2026-10-25 list) are verified by the degree owners against
   opened sources, the superskill is piloted on one theory module and one
   practice module, and the advisor has reviewed both pilots. Legacy
   scope docs are raw material only; verify new scopes against opened
   curricula, not against legacy text.
2. Phase 1 launch order (NEW DEGREE LIST, owner directive 2026-10-25):
   pilot programs first (deg-wol-greek as the theory pilot, harvesting the
   legacy philosophy modules; practicum-qigong as the practice pilot),
   then the remaining walks (deg-wol-daoism, deg-wol-buddhism,
   deg-wol-pragmatism, deg-wol-existentialism, deg-wol-positive) and
   deg-psychdim (recency-valuing; needs a fresh source strategy, not
   only legacy harvest), then practicum-cmp (via the designated cmp agent
   per the 2026-10-22 owner directive). The psychology-101 bridge is a
   small practicum task (direct link). The integrator band owns the schema
   migration: new degree ids, legacy flag plus footer link, PRACTICUM
   section, bridge entry.
3. The verification band (deg-verify) starts with the shared queue below
   as soon as Phase 0 closes, and keeps pace with new sources.

## Shared verification queue (deg-verify)

The verification band re-verifies the 291 "imported" source records to the
skill's standard. Two parallel batons, deg-verify-a and deg-verify-b, each
with a non-overlapping manifest; verifiers write ONLY to
`docs/degrees/verify/<degree>.md` evidence files (their own paths), and
degree owners consume those files into their ledgers. Each entry moves
from the queue to the verify file as it is verified or replaced. Claim a
block by appending "(in progress: your-id)" beside it. Priority: sources
attached to modules in active degree bands first. Counts below are
measured from fcAcademyData on 2026-10-25 (attachments counted per module
reference, unique source ids in brackets):

- Block A: deg-philosophy attached sources (39 attachments, 36 unique) — deg-verify-a (verified 2026-10-25 by verifier-pplx-a1, see docs/degrees/verify/deg-philosophy.md; 33 of 36 verified, 3 Cynicism-series optionals unconfirmed-accessible and flagged)
- Block B: deg-contemplative attached sources (37, 33) — deg-verify-a (in progress: verifier-pplx-a1; 15 required sources verified 2026-10-25, see docs/degrees/verify/deg-contemplative.md; optionals pending)
- Block C: deg-relational attached sources (12, 10) — deg-verify-b
- Block D: deg-mind attached sources (31, 25) — deg-verify-b
- Block E: deg-wellbeing attached sources (15, 13) — deg-verify-a (verified 2026-10-25 by verifier-pplx-a1, see docs/degrees/verify/deg-wellbeing.md; 12 of 12 imported records verified)
- Block F: deg-therapeutic attached sources (18, 16) — deg-verify-b
- Block G: deg-psychology-101 (1, 1) — deg-verify-b
- Block H: deg-qigong attached sources (21, 17) and deg-cmp (27, 27):
  mostly already verified by their dedicated agents; re-check only the
  records still labelled imported — deg-verify-a (checked 2026-10-25 by verifier-pplx-a1: zero records still labelled imported, see docs/degrees/verify/deg-cmp.md; no re-checks required)
- Block I: remaining unattached "imported" records (the rest of the 291) —
  split by canonical URL hash between the two batons at claim time

## Pilots (Phase 0)

- Theory pilot: mod-phil-1 (Foundations of Virtue), design in
  pilots/mod-phil-1.md. Advisor review required before scaling.
- Practice pilot: mod-qg-3 (Standing), design in pilots/mod-qg-3.md.
  Advisor review required before scaling.

## Degree checkpoints

(append below, newest first)

- 2026-10-25 worker-pplx-greek-1 (deg-wol-greek): baton claimed and pushed.
  Theory pilot milestone: mod-phil-1 rebuilt to the skill at
  modules/deg-wol-greek/mod-phil-1.md (outcomes, aligned instruction with
  assigned wiki segments and video segments, faded worked example, spaced
  retrieval, observable rubric with strong and rejection examples, workload
  arithmetic to about 4h50m). All four attached sources verified to the
  standard by the degree owner into ledgers/deg-wol-greek.md (AR-01 55:11,
  AR-04 44:16, AR-06 1:01:15, ST-03 28:04); deg-verify Block A confirmation
  still needed for the resource-verification gate. Advisor pilot review
  next. Scope benchmarking against opened authoritative curricula in
  progress this session.
- 2026-10-25 worker-pplx-integrate-1 (deg-integrate): schema migration shipped
  per the owner directives (commit c4880ebb3, rebased from d34175854). fcAcademyData is schemaVersion
  2: kind degree|practicum on every program, legacy flag on the seven
  superseded ones; the Academy home lists the practica first (qigong, cmp,
  psych-101 bridge card linking straight to the Psychology Lab), then a
  divider, then the seven new degrees with empty module lists (no fabricated
  data; degree owners deliver). Legacy degrees reachable behind the footer
  link at #view=legacy. Practicum content untouched (byte-identical check in
  scripts/tests/test_academy_migration.py). Flag for strategist: routes.qa.cjs
  carried a stale tab-round-trip expectation that was already failing on
  origin/main; corrected to the documented 2026-10-25 tab behaviour.
- 2026-10-25 worker-pplx-psychdim-1: deg-psychdim milestone 1 delivered: ledger
  created (11 opened free sources, coverage matrix v1, gap register), scope doc
  benchmarked against opened anchors and dimension count corrected to six;
  advisor review of the matrix is the next gate before module production.
  Flags for strategist: whether EEMM socio-cultural and biophysiological
  levels appear as context material; attentional dimension needs a post-2020
  open review (current anchors 2019/2014).
- 2026-10-25 worker-pplx-psychdim-1 (round 2): advisor round 1 applied; matrix
  v2 delivered with per-dimension topic families grounded in the Yale 2026
  syllabus, OpenStax contents and Noba modules; Maitland Table 1 descriptions
  relabelled as FAP targets; unsupported opening timestamps corrected; scope
  doc carries the benchmark and coverage summary. Advisor re-review pending;
  Phase 0 pilot stop-gate still blocks module production. Flags for
  strategist: EEMM socio-cultural and biophysiological levels as context
  material (owner decision); attentional and other dimension gaps on the
  ledger's gap register.
- 2026-10-25 worker-pplx-psychdim-1 (final checkpoint this session): matrix
  v3 current; 8 verified Yale OYC lectures (oembed + watch-page durations);
  Woolley 2025 results extracted; habits refreshed with Singh 2024
  meta-analysis; emotional self-regulation grounded (Alarcon-Espinoza
  2022). Fixed shared test test_academy_migration (pre-migration lookup
  walked only HEAD~1/HEAD~2/HEAD; now walks app.js revisions; flagged to
  deg-integrate and deg-arch). Advisor re-review pending; Phase 0 pilot
  stop-gate still blocks module production.
- 2026-10-25 worker-pplx-greek-1 (round 2): advisor round 2 repairs applied to
  mod-phil-1 (outcome 2 now assessed; SEP three-framework introduction;
  AR-01 classified from the recording transcript; reader-facing workload
  4h41m); module remains DRAFT NOT CLEARED pending advisor re-review.
  Scope benchmarked against three opened curricula (MIT OCW 24.200, Yale
  PHIL S125E, Stanford PHIL100); coverage matrix draft in the ledger. Flag
  for strategist/owner: the anchors all include the pre-Socratics and the
  scope excludes them without a stated reason (scope doc, benchmark
  section).
