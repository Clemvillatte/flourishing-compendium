# PROMPT — next agent: STRATEGIST, Degrees (Academy) full rework

ECOSYSTEM UPDATE (2026-10-25, strategist-pplx-1025): this project now lives
in its own ecosystem at docs/degrees/, fully separated from the enrichment
(principles/concepts/stories) and dossiers projects. Workers are Degree
Workers and start from docs/degrees/WORKER-PROMPT.md. Read docs/degrees/
README.md and OPERATIONS.md for the charter, curriculum bar, gates, bands
and batons (scripts/degree_baton.py). The binding curriculum standard is
docs/degrees/skill/curriculum-design/Skill.md. Scope docs for all nine
degrees are in docs/degrees/scope/. This handoff remains the historical
brief and audit of record; where it and docs/degrees/ disagree,
docs/degrees/ wins.

You are the Strategist for the Academy degrees on the flourishing-compendium
website. The owner has ordered a FULL rework of the Degrees. The degrees were
built by single agents working alone, and the owner is not satisfied that
they are what a degree should be: the level labels (beginner, intermediate
and the rest) do not make sense as a curriculum, the lectures and videos are
too scarce, and the sources may not have been checked, verified and organised
the way a degree demands. Your job is NOT to patch modules one by one.
Your job is to design and run a multi-agent project,
with bands, gates and guidelines, that rebuilds every degree as a full,
in-depth coverage of all aspects of its theme, with a solid curriculum and
content. You will also develop a Curriculum-Design Superskill (Skill.md) as a
required deliverable of this project, and it becomes the binding standard for
every worker in it. The superskill does not exist yet; developing it is part
of your mission.

What the owner expects of a degree (binding definition): FULL in-depth
coverage of all aspects of a theme, a solid curriculum, and content that is
verified, checked and organised like a real course of study.

## Start here (in order)

1. Read this file fully. Then read `docs/enrichment/PROTOCOL.md`,
   `docs/enrichment/OPERATIONS.md`, and `docs/enrichment/HUMANIZER-SKILL.md`
   (house rules for agents on this repo).
2. Read `docs/DEGREE-CMP-HANDOFF-3.md` and its predecessors (the CMP degree
   chain) as HISTORICAL evidence: they contain degree-specific verification
   lore (oembed, duration checks, gallery formats) that works. Do NOT import
   their session clocks, their "do not redo" exclusions or their blanket
   restrictions into this project; they were scope-specific to one degree.
3. Read the ledger for the already-deep degrees:
   `docs/enrichment/sources/cmp/ledger.md` (if present) and the academy
   markdown records under `academy/`.
4. Clone/re-enter the repo (github.com/Clemvillatte/flourishing-compendium,
   branch main). Push via `scripts/enrich_save.sh "message"`; if a rebase
   fails, resolve it completely before pushing (fail-stop, never retry
   through an unresolved rebase). Note: enrich_save does NOT commit
   `site/assets/app.js`; commit that file yourself.
5. Take a baton: `python3 scripts/baton.py clock-in degrees-strategist <your-id>`
   and push it. Push the baton claim and confirm it reached origin BEFORE
   editing anything (a mid-air collision cost this project a whole merge once).

## Current state (verified audit, 2026-10-25, supervisor)

Inventory measured against origin/main at commit d2ec2c8ef (2026-10-25). The
Academy data lives in `window.fcAcademyData` inside `site/assets/app.js`
(JSON block, schemaVersion 1; keys: degrees, modules, sources,
topicMappings). Re-derive any number below with a raw_decode of that block;
the marker `window.fcAcademyData = ` appears TWICE in the file, pick the
occurrence that raw-decodes to JSON with schemaVersion 1. Keep these
distinct in your own audit: media ATTACHMENTS (a source linked from a
module; 200 attachments across the 54 modules), unique SOURCE records
(353), complete lecture SERIES (not distinguished by the data), and
practice-gallery SESSIONS (the academy markdown galleries, separate from
module media).

Degrees and modules (9 degrees, 54 modules):
- deg-philosophy 6 modules, deg-contemplative 6, deg-relational 4, deg-mind 5,
  deg-wellbeing 4, deg-therapeutic 4, deg-psychology-101 1 (one module, one
  media item: an empty shell), deg-qigong 12 (status "final"),
  deg-cmp 12 (status "final").
- All non-CMP/QG degrees carry status "draft-with-capstones".

Verified findings (facts, measured from the data block):

1. The level labels are inconsistent. Module `difficulty` mixes two
   vocabularies: "Beginner" (8 modules) with "Foundations"/
   "Intermediate"/"Advanced" (46). Media `level` tags (Foundations 54,
   Intermediate 53, Advanced 30, Mastery 55, "Not stated" 9) are scattered
   across sources. Mixed labels demonstrate inconsistent vocabulary; whether
   any curriculum logic survives underneath them is UNRESOLVED and must be
   audited, not assumed either way. The taxonomy must be re-designed with
   defined criteria (see the superskill).
2. Of 353 source records: verification_status "imported" 291, "verified" 27,
   "verified-video" 25, "verified-audio" 10. 273 carry gate_evidence
   "summary-level (inherited from mission page)", meaning they were imported
   from earlier "missions" pages with only summary-level checks recorded.
   The labels say summary-level checks; how deeply any individual resource
   was actually checked is UNRESOLVED. Only the CMP and QG sets carry
   verified-status labels from their dedicated agents.
3. Durations are missing: 222 of 353 sources have an empty `duration` field.
   A degree cannot schedule learning time on sources with no printed length.
4. Media is scarce and uneven: e.g. deg-relational has 12 media attachments
   across 4 modules. The two "final" degrees (qigong, cmp) have richer media
   and full practice galleries in `academy/*.md` (the "Year of Practice"
   records); the others do not.
5. This investigation has NOT located a programme-wide coverage audit; Phase
   0 must search the records (handoffs, ledgers, git history) and establish
   whether one exists. Module fields exist for a real curriculum (outcomes,
   prerequisites, wiki_readings, activity, rubric, gaps, durationHours,
   capstone) but no audit has been found that checks the set of modules
   covers the theme.
6. 309 of 353 sources are YouTube-backed; 341 unique canonical URLs of 352
   (11 duplicates).

Owner concerns vs verified findings vs open questions (keep these separate
in everything you write): the owner's concerns are the complaints above as
stated by the owner; the verified findings are the numbered facts; the OPEN
questions the audit does not yet answer include: how many of the 291
"imported" sources are actually live and correct (the count says
summary-level checks, not broken), whether the mission-page summaries were
accurate, how much lecture content exists per theme beyond what is attached,
and whether any earlier coverage audit exists in the records. Assign
answering these as Phase 0 work; do not claim them as established.

## Phase 0 (BLOCKING): design gate before any curriculum production

Nothing in the rework scales until Phase 0 closes. Inventory and resource
discovery MAY run in parallel with Phase 0; curriculum writing may not.

### 0.1 Scope map (you own this)

For EACH degree, write a scope document (deliverable, in-repo):
- The intended learner (background, prerequisites assumed).
- Entry competencies and exit capabilities (what a graduate can do).
- The bounded domain: what the degree covers, what it explicitly excludes,
  and elective branches. Resolve overlap between degrees BEFORE assuming the
  current nine must remain nine (deg-mind vs deg-wellbeing vs
  deg-therapeutic overlap is the obvious suspect).
- Relationship to neighbouring degrees and to the Library/wiki (the
  compendium's dossiers and kernels: wiki_readings already link modules to
  kernels like K100; the Academy is a distinct project per owner directive
  2026-10-22, but it should READ from the wiki, not duplicate it).
- Mergers, retirements and major scope changes need OWNER disposition, not
  yours. deg-psychology-101 is an empty shell: mark it for foundational
  reconstruction and put its fate (rebuild, merge, retire) on the owner
  decision list. Do not silently retire it.

### 0.2 The Curriculum-Design Superskill (Skill.md) — required deliverable

Develop a Curriculum-Design Superskill and make it the binding standard for
every agent in this project. Load the `create-skill` platform skill BEFORE
choosing its format and path so the skill is authored and tested properly,
not just written as a paragraph in this handoff. Suggested home:
`docs/skills/curriculum-design/Skill.md` (follow the house precedent of
`docs/enrichment/HUMANIZER-SKILL.md` if the platform's create-skill
convention points elsewhere). The superskill must contain at least:

- Theme decomposition: how to derive ALL essential aspects of a theme from
  opened, authoritative curricula, frameworks and subject sources (coverage
  matrix template), with explicit exclusions and elective branches.
- Learning-progression taxonomy: level definitions with observable criteria
  per level (what the learner can do at entry and exit of each level), not
  label vocabulary. This REPLACES the current Foundations/Intermediate/
  Advanced/Mastery/Beginner mess with one designed taxonomy.
- Module design: constructive alignment (outcomes -> instruction -> activity
  -> assessment/rubric), prerequisites as observable competencies, capstones.
- Media and resource verification standards (see the resource-verification
  gate below): identity, accessibility, instructor credentials, actual
  content coverage, exact relevant segments, duration, language/captions,
  access conditions, verification date. Link existence or oEmbed metadata
  does NOT verify educational content.
- Workload calculation: measured recording durations distinguished from
  estimated reading, practice and assessment time. Do not inherit "a year of
  practice" without calculating it.
- Rubrics, evidence requirements, rejection examples and acceptance tests.
- Discipline differences: preserve what makes a practice degree (qigong,
  cmp) different from a theory degree (philosophy) rather than forcing one
  module recipe on both.

### 0.3 Pilot the standard before scaling

Apply the superskill to ONE theory-focused module and ONE practice-focused
module (suggest: one deg-philosophy module, one deg-cmp module). Have the
advisor independently review both results, revise the superskill, and only
then scale to full degrees.

## Phase 1: the multi-agent project

### Bands

- One accountable owner PER DEGREE (band = degree). The owner designs the
  curriculum, writes/repairs modules to the superskill, and owns that
  degree's ledger and batch file.
- One CURRICULUM-ARCHITECTURE band: owns the shared level taxonomy, the
  fcAcademyData schema (difficulty/level fields, verification_status
  vocabulary), the scope-map process, and the curriculum bar. No degree band
  may invent its own taxonomy.
- One RESOURCE-VERIFICATION band (shared queue): re-verifies the 291
  "imported" sources and any new source, to the resource-verification
  standard. Distribute checks; do not make it one serial bottleneck.
- ONE INTEGRATOR for `site/assets/app.js` (the shared fcAcademyData block).
  Workers deliver isolated source artifacts (markdown records in
  `academy/` and `docs/enrichment/sources/`) and integration-ready patches;
  only the integrator splices the data block. Do not copy the retry loops
  that continued after failed rebases or treated an ancestor check as proof
  that uncommitted work shipped.

Coordination mechanics (house standard): batons via `scripts/baton.py`
(clock-in/release, push the claim before editing), batch JSON files per
degree band under `docs/enrichment/batches/`, routing via
`docs/enrichment/TASKBOARD.md`, per-degree ledgers under
`docs/enrichment/sources/`, QC log at the top of
`docs/enrichment/OPERATIONS.md`. Use the advisor tool as planner before
starting each band and as verifier before closing each degree; its rulings
caught real errors all week (three of this supervisor's own pairings were
demoted on one round).

### The curriculum bar (a degree is done only when)

Replace "full coverage of all aspects" with this checkable standard:

1. COVERAGE MATRIX: essential topics and capabilities derived from opened,
   authoritative curricula/frameworks; every essential item mapped to
   teaching, practice, assessment and supporting resources; exclusions and
   electives explained, and boundaries may NOT be used to evade the
   difficult or underrepresented parts of the theme. An independent reviewer
   must challenge the exclusions and identify missing foundational,
   advanced, methodological and applied material. A coverage GAP list is a
   production deliverable, not a failure; but unresolved gaps on ESSENTIAL
   items block completion (a draft gap register is tooling, not clearance).
2. COHERENT PROGRESSION: observable entry/exit competencies and
   prerequisites per module; increasing conceptual complexity and learner
   independence across the sequence.
3. CONSTRUCTIVE ALIGNMENT: outcomes -> instruction -> activities ->
   assessment criteria (including feedback/exemplars), with an integrative
   capstone where appropriate.
4. SUBSTANTIAL TEACHING: complete instructional sequences, readings,
   demonstrations and practice. NOT disconnected video shelves. Do NOT
   impose a media quota per level (required-and-optional at every level is
   another arbitrary number, not curriculum quality).
5. CREDIBLE WORKLOAD: measured durations plus estimated reading/practice/
   assessment time, summed to a real figure.
6. RESOURCES VERIFIED to the standard (identity, accessibility, credentials,
   content coverage, segments, duration, language, access conditions,
   verification date).
7. LEARNER-FACING USABILITY: a person can find, follow and complete the
   degree from the site without hand-holding (browser QA, desktop and
   375px mobile, no console errors).

### Gates (in order, per degree)

A degree's author may NEVER clear their own coverage or pedagogical gates;
independent review is required at every gate, assessing the complete
instructional sequence, not merely that sources exist or fields are
populated.

1. Scope gate (Strategist): scope doc complete, overlaps resolved or on the
   owner decision list.
2. Curriculum-coverage gate (Strategist + advisor): the coverage matrix and
   progression pass the bar above.
3. Resource-verification gate (verification band): every attached source
   passes the verification standard; imported sources re-verified or
   replaced.
4. Pedagogical-coherence gate (advisor QC): alignment, workload, rubrics.
5. Technical-integration gate (integrator): safe-splice into fcAcademyData,
   node --check, referential validation, tests green, deploy verified live
   via cache-busted fetch (Pages lags under push churn; cancel-in-progress
   races mean you must re-verify after the fleet goes quiet).
6. OWNER gate: status "final" only after owner review. The current "final"
   labels on deg-qigong and deg-cmp are inherited from the single-agent era;
   treat them as labels, not clearance from this rework. Preserve their
   verified provenance (the galleries' rows were checked) while reassessing
   curricular fit and completeness.

## Binding rules (house standard, do not violate)

- Zero hallucination: every fact, quote, duration and credential must come
  from a source you actually opened in-session. Durations from source pages,
  never guessed. YouTube: verify via oembed
  (`https://www.youtube.com/oembed?url=...&format=json`) AND the watch page
  for duration; oembed alone verifies existence, not educational content.
  Classify a recording's practice from the recording/transcript, not its
  title.
- Evidence types separated (trials vs multicomponent vs family vs
  mechanistic vs traditional rationale); effect sizes where reported; nulls
  included; correlations never phrased as treatment effects.
- Safety language: the old degree chain carried an owner directive (2B)
  prohibiting disclaimers and safety caveats. This project touches
  therapeutic, contemplative and movement curricula where proportionate
  safety information may matter. Do NOT import that directive as a blanket
  rule and do NOT ignore it either: put its exact scope to the OWNER for an
  explicit ruling in Phase 0, and until ruled, include only safety language
  that the evidence itself requires.
- Humanize all prose per `docs/enrichment/HUMANIZER-SKILL.md` (no em dashes
  in prose, no AI tells). Degree pages follow the readability stop-gate at the top of
  `docs/enrichment/OPERATIONS.md`.
- Tests before every push: `python3 -m unittest discover -s scripts/tests`
  and `node --test scripts/tests/randomizer.test.cjs`. A PREVIOUS session
  reported enrich_validate failing on structure pages (em dashes inside
  kernel-name wikilinks); re-check whether that failure still stands before
  relying on it, and never claim "all checks passed" while a real failure
  stands.
- Safe-splice recipe for app.js (never find/replace the data line; golden
  rule: write `s[:start] + new + s[end:]` with raw_decode boundaries).
  After splice: `node --check`, referential validation, gallery segment
  byte-identical vs origin where applicable.
- Push protocol: push via `scripts/enrich_save.sh`; if a rebase fails,
  STOP. Resolve the rebase completely (conflict files, `git rebase
  --continue`, clean `git status`) before any push. Never retry a push
  through an unresolved rebase, and never treat
  `git merge-base --is-ancestor HEAD origin/main` as proof of shipping unless
  `git status` is clean first (a dirty tree voids the check). If a rebase
  conflict hits your ledger append, keep BOTH sides.
- Record your UTC start and report with measured elapsed time. The owner
  will set your time budget when launching you; do not inherit one from
  this document.

## Verification patterns that worked (from the CMP chain; historical)

- YouTube: oembed then fetch_url on the watch page for duration.
- Library pages: fetch_url with return_html=true, parse direct session URLs.
- Browser QA: python playwright against a local server (port 8712, serving
  site/); check desktop + 375px mobile, no console errors.
- Live QA: https://clemvillatte.github.io/flourishing-compendium/ (CI deploys
  after each push; verify with cache-busted fetches of
  site/assets/app.js because deploys lag and cancel each other under
  concurrent pushes).

## Definition of done for the Strategist

1. Phase 0 closed: scope docs for all nine degrees, the superskill authored
   and piloted on two modules, the level taxonomy designed.
2. The multi-agent project launched: bands staffed, batons pushed, batch
   files and ledgers created, TASKBOARD routing live.
3. Degrees reworked to the curriculum bar, gate by gate, with the owner
   gate list (psychology-101's fate, degree mergers, "final" re-approval)
   explicitly presented to the owner.
4. Every claim in your final report verified (sources opened, deploys
   cache-busted, tests green) with measured UTC timestamps.

Do not report the rework as complete while any degree fails its gates. A
partial degree with polished modules beats a full degree with thin ones;
never push unverified videos or unsourced claims. Good hunting.
