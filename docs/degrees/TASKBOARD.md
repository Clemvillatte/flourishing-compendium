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
- Block B: deg-contemplative attached sources (37, 33) — deg-verify-a (verified 2026-10-25 by verifier-pplx-a1, see docs/degrees/verify/deg-contemplative.md; all 33 unique sources verified, Spanish-language flags on SRC-M24-005/006, duration mismatches on M02-K06, SRC-M24-001, SRC-M12-007)
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

- 2026-10-25 worker-pplx-psychdim-2 (deg-psychdim): deg-psychdim content-verification push COMPLETE,
QC PENDING INDEPENDENT CONFIRMATION (advisor ran seven content-QC rounds; the last five rounds'
corrections are applied and the final round found no further blocker in the inspected batches 24 to
27 and the audit repairs — a limited content-QC result, not a blanket approval and not a gate
clearance). Added since the last checkpoint: lecture 17 fully content-verified (batch 20; all eight
chapters; stereotypes/IAT added as a PROPOSED interpersonal-elective row pending the scope decision;
sleep/dreams/laughter verified but with no matrix outcome mapped, flagged for the strategist);
lecture 13 fully verified (batch 21; intelligence and behavioral-genetics content verified but left
unassigned pending scope review; the personality row keeps its personality segments only); lecture
11 fully verified (batch 22; M2 affective row extended); lectures 7 and 1 fully verified (batch 24;
M3 language row now cites chapters 1 to 3; lecture 1's M1-orientation assignment flagged since no
matrix row cites it). The three talks: Barrett and Wood content-verified from published transcripts
and mapped to their existing rows (batches 25 and 26); the Howard inaugural lecture remains a
candidate — no transcript retrieved through the routes tried (batch 27; timedtext empty, innertube
403 under three clients, browser transcript panel renders zero segments; no Oxford Podcasts listing)
— flagged for the supervisor. Provenance standard upgraded mid-session to raw unprompted fetches
(prompt omitted); earlier fetches re-verified accordingly. Seven lectures and two of three talks now
fully content-verified. No coverage or pedagogical gate is cleared; the Phase 0 pilot stop-gate
still blocks module production.

- 2026-10-25 worker-pplx-1025-o (deg-verify-a): Block I-a INVENTORY AUDIT
  COMPLETE — every one of the 81 unattached md5-even records in the current
  catalog has an evidence entry (81/81: 73 matched by direct heading, 8 more
  confirmed by heading grep — AR-02, ST-06, QI-01, PHR-01, PHR-02, M-15-001,
  M-15-006, M-15-008 — all real dated entries with identity/access, duration,
  credentials, language and coverage basis). Spot-checks: AR-02 and M-15-001
  read in full, both carry the full section-4 basis set. Combined with the
  I-b checkpoint, the shared verification queue is fully evidenced: all 176
  unattached records processed, no blocks outstanding. Catalog
  verification_status for these records remains 'imported' by design —
  verifiers write only to the verify files; the catalog flip is the degree
  owners'/integrator's consumption step, gated on Phase 0 closing.
  deg-verify-a baton released after the audit.

- 2026-10-25 verifier-pplx-1025g (deg-verify-b): Block I-b COMPLETE —
  md5-odd unattached half fully processed: every one of the 95 unattached
  md5-odd records in the current catalog has an evidence entry (exact
  heading recount, 2026-10-25). SRC-M12-004 (GloPhi Ubuntu/Nepantla) was
  missed by the original enumeration and caught by the end-of-band
  inventory audit; 24 other md5-odd records without entries are
  module-attached — qg-*, cmp-*, phil/mind optionalMedia — and outside
  Block I-b scope. Entries with identity, access, duration, credential
  basis and coverage basis in verify/deg-mind, deg-therapeutic,
  deg-philosophy, deg-contemplative, deg-relational, deg-wellbeing,
  deg-cmp. Statuses use verified-video / verified-page plus local
  verified-partial labels for description-only coverage (see the
  vocabulary note below), with coverage-basis caveats in each file.
  Verification evidence is complete, with exceptions flagged below —
  this is not a clean-verification declaration. Advisor QC round applied: oembed
  evidence recorded for all 21 M08 records; wave 15-16 description-only
  entries restated verified-partial; Fredrickson, Markus, Nakamura,
  Goldman, Turner credentials upgraded on opened pages. Flags for owners:
  identity-only (blocked pages, single attempt, retry permitted): M06-AF07,
  SRC-M09-005, M08-P07, M08-S26; blocked web pages: M05-YV-04 (yoga.org),
  SRC-M08-S27 (umich positiveorgs); dual-figure durations: M04-R15 (catalog
  1:00:40 vs watch page 53:26), M08-P11 (46:08 vs 44:02), M06-AT06, Gilbert
  workshop parts; title-only coverage: M04-R12,
  M05-YV-05 (page gives no description of content); M08-P05, M08-P14,
  M08-S10, M08-S21 were title-only at first read but have since been
  upgraded to chapter-list coverage read from their watch pages
  (re-fetch, 2026-10-25); Dreyfus restored edition (M04-E03) is only 3
  lectures restored — incomplete resource. Many speakers' institutional
  credential pages remain pending (noted per entry; institutional pages
  were robots-blocked or rate-limited for Bronk; resolved on opened or
  retrieved pages since: Sherman, Meinert, Balasubramanian, Peng, Gopnik,
  De Moor, Christakis, Fredrickson, Markus, Nakamura, Goldman, Turner,
  Sadler (supplementary), Niemiec (partial), Shabane, Grigoletto, Mika,
  Haslam, Neff, Guzmán and Rogaski/Petrarca remain pending; Kitayama,
  Hewstone, D. S. Wilson (both entries), Cacioppo, LeDoux, Newport,
  Shiller, Kraut, Gemes, Huberman, Shweder and A. Phillips were resolved
  via Wikipedia REST summary retrieval — recorded as secondary
  biographical summaries, not institutional verifications). Addendum: the supervisor's routed
  AR-05/ST-01 duration flag is RESOLVED — AR-05 watch page re-read 1:14:59
  (catalog 1:15:33 rejected); ST-01 is dual-figure on the page itself
  (player 29:09 vs listing 29:28, catalog matches the listing). Vocabulary
  note for owners: the skill's section 4 defines the status vocabulary as
  verified-video/verified-audio/replaces-import/rejected (coverage basis is a
  separate recorded field), while some verify files — including deg-wellbeing's
  Block I section — use verified-partial for description-only coverage. The
  two conventions coexist across files; deg-verify-b's recent description-only
  entries use verified-partial (conservative) and carry their basis in the
  status line, so no information is lost, but owners may want one convention.

- 2026-10-25 verifier-pplx-1025g (round 2): Block F COMPLETE — 12 of 13
  imported deg-therapeutic records verified in verify/deg-therapeutic.md
  (SRC-M09-005 Rollnick identity-only: watch page blocked from this
  session's fetcher, duration and content basis flagged; M16-C01 and
  SRC-M09-007/M14-CFT-01 flagged as duplicate catalog records). Credentials
  on opened pages for all six speakers (Miller UNM, Rollnick Cardiff,
  Gilbert Derby, Gehart CSUN, Segal UTSC, Teasdale MRC CBU). Flags for the
  deg-therapeutic owner: SRC-M09-004 hosted on commercial channel
  onlinevents.co.uk (access ruling needed); Gilbert workshop part 3
  catalog duration 1:31:28 vs watch page 1:28:31 and part 4 1:28:31 vs
  1:28:30, parts sum about 5:10:56 vs catalog total 5:15:31. Next: Block I
  deg-verify-b hash half.

- 2026-10-25 verifier-pplx-1025g (deg-verify-b, stale-baton takeover): Block D
  COMPLETE — all 18 imported deg-mind attachments verified to skill section 4
  in verify/deg-mind.md (oembed + watch pages opened; durations from watch
  pages; Bloom/Santos/Damasio/Jha/Fredrickson credentials on opened
  institutional pages). Flags for the deg-mind owner: SRC-M07-005 catalog
  title does not match the live video (SDT2019 Deci-Ryan plenary); M06-AT06
  duplicates verified SRC-M28-002; SRC-M07-001 prints chapter times but no
  total duration; M06-AF04/AF05 and M06-CO02 have no description (title-only
  coverage basis); 9 speakers' credential pages still to be opened (see the
  credential note in the file). Block F started.

- 2026-10-25 worker-pplx-psychdim-1 (superseding checkpoint; corrects the
  one above): lecture 7 chapter 4 (perception) HAS now been read and
  content-verified, along with lecture 11 chapter 3 (facial expressions
  and smiles), lecture 17 chapter 2 (impression formation, Pygmalion
  effect) and lecture 13 chapter 2 re-read strictly between its markers
  (the measurement-history material relabelled as chapter 1 context).
  Verified segments now: lectures 11 ch 1-3, 12 ch 1, 13 ch 2, 16 ch 2,
  17 ch 2, 7 ch 4-5, 1 ch 1 and 3. Woolley 2025: key results extracted
  from Studies 1 through 4 (Study 4 preregistered experiment, d = 0.21,
  p = .003). Remaining lecture chapters are content-unreviewed
  candidates (identity and duration checked only): the next worker
  should read them from transcripts before any attachment. Gate status
  unchanged: coverage awaits independent confirmation; module
  production blocked by the Phase 0 pilot stop-gate.

- 2026-10-25 worker-pplx-psychdim-1 (content-verification close-out):
  lecture segments now content-verified from opened transcripts: lecture
  11 chapters 1-2 (emotions, Gage and Elliot), lecture 12 chapter 1
  (attachment, Harlow, kin emotions), lecture 13 chapter 2 (Big Five),
  lecture 16 chapter 2 (spotlight and transparency effects), lecture 7
  chapter 5 (attention and memory, Stroop, change blindness), lecture 1
  chapters 1 and 3 (course scope). Lecture 14 content check: it covers
  sex and gender, not self-determination theory, so no M6 claim rests
  on it (M6 rests on Ryan and Deci 2020 and Woolley 2025). Woolley 2025
  Study 4 experiment statistics read (preregistered, d = 0.21, p = .003,
  over 25 percent more app scans), so the experimental claim is
  evidence-backed. Still open for the next worker: remaining lecture
  chapter transcripts (lecture 7 chapter 4 is the highest-value next
  read for M4); module production blocked by the Phase 0 pilot stop-gate
  and by owner confirmation of the coverage gate.

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
- 2026-10-25 worker-pplx-greek-1 (round 3): advisor round 3 repairs applied
  (wiki links validated against the filesystem, workload 5h06m with the
  component sum shown, AR-06 transcript-classified, ST-03 unattached
  candidate, superseding coverage matrix in the ledger; the earlier 4h41m
  figure in my round-2 checkpoint is superseded). Module remains DRAFT
  NOT CLEARED pending advisor re-review of the resulting text. Next item:
  legacy modules 2-3 harvest manifest (preparatory; full production stays
  behind the Phase 0 stop-gate).
- 2026-10-25 worker-pplx-psychdim-1 (correction): the previous checkpoint
  overstated video verification. The 8 OYC lectures and 3 talks are
  candidates (identity, duration, dates and instructor credentials
  checked; content classification from transcripts outstanding; the
  Barrett talk is from 2017 and Wood from 2022, so they are not "current";
  recency rests on the opened 2024-2026 papers). Talk dates and
  credential URLs now recorded in the ledger. Matrix v3 otherwise current
  with per-module entry competencies; scope compact matrix now carries
  row-level citations.
- 2026-10-25 worker-pplx-psychdim-1 (gate verdict recorded): milestone
  delivered and independently reviewed through advisor rounds; coverage
  NOT cleared because the adult self-regulation breadth gap remains
  unresolved (narrowed by Reed et al. 2020, older-adult sample with the
  limit stated; Dang 2018; Alarcon-Espinoza 2022). Module production also
  blocked by the Phase 0 pilot stop-gate. Woolley results bounded to
  Study 1 statistics; Singh medians/means/ranges recorded under the
  paper's exact labels; OYC lecture 11 chapter 1 (00:00:00-00:09:06)
  content-verified, remaining videos are candidates.
- 2026-10-25 worker-pplx-psychdim-1 (gap resolved, gate still uncleared by
  owner): the adult self-regulation strand is now grounded (Werner and
  Berkman 2024 on self-control as dynamic motivational process; Reed et
  al. 2020 adult structure with the older-adult limit stated; Dang 2018;
  Alarcon-Espinoza et al. 2022). The coverage gate is not cleared by the
  degree owner: it awaits independent confirmation. Phase 0 pilot
  stop-gate still blocks module production.
- 2026-10-25 worker-pplx-greek-1 (advisor final review passed, module
  still DRAFT NOT CLEARED): mod-phil-1 passed the advisor's final
  pedagogical-design review after four repair rounds (positive
  independent design review recorded in pilots/mod-phil-1.md); the
  degree's formal gates and the Phase 0 stop-gate remain, so the module
  stays DRAFT NOT CLEARED and is not attached in fcAcademyData. Harvest
  manifest for legacy modules 2-3 recorded in the scope doc with a
  correction against the verifier file; the manifest status column's
  unsupported durations and AR-05 content flag withdrawn this session
  (ledger corrections round 3). Open gaps flagged for the strategist or
  owner: ST-05 duration not printed anywhere (blocking workload
  arithmetic); content classification for AR-05, ST-01, M05-XP-01 and
  M05-XP-02 still rests on uploader or instructor descriptions (recording
  or transcript reads blocked from this session's environment: YouTube
  bot-wall, transcript services failing); Socratic method and the
  examined life remain an essential coverage gap with no module; the
  pre-Socratics exclusion from the scope awaits the strategist's ruling.
