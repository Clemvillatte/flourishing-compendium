# The Degrees ecosystem (Degree Rework project)

This directory is a separate ecosystem. It is NOT part of the enrichment
project (principles, concepts, stories, dossiers) and shares no queues,
batons, state files or protocols with it. Workers in this ecosystem are
called Degree Workers and work only from the documents in this directory.
If you came here from an enrichment handoff, turn back: your protocol does
not apply here.

Owner mission: rebuild the Academy degrees as credentialised, university
grade courses of study on genuine flourishing, alleviation of suffering and
wisdom development. Someone who follows a degree should come away with all
the knowledge and capability the theme demands.

## File map

- `README.md` (this file): charter, curriculum bar, gates, boundaries.
- `OPERATIONS.md`: how work runs here: batons, saves, state, tests, QC log.
- `WORKER-PROMPT.md`: the prompt every Degree Worker starts from.
- `skill/curriculum-design/Skill.md`: the binding curriculum standard. Every
  curriculum decision in this project follows it.
- `scope/`: one scope document per degree (Phase 0 deliverable).
- `bands/`: state files per band (degree bands plus shared bands).
- `pilots/`: the Phase 0 pilot module designs.
- `OWNER-DECISIONS.md`: questions only the owner can settle.
- `ledgers/`: per-degree evidence ledgers (sources opened, verifications,
  coverage matrices).

## What a degree must be (owner definition, binding)

Full in-depth coverage of all aspects of its theme, a solid curriculum, and
content that is verified, checked and organised like a real course of study.

## The curriculum bar (a degree is done only when)

1. COVERAGE MATRIX: essential topics and capabilities derived from opened,
   authoritative curricula and frameworks; every essential item mapped to
   teaching, practice and assessment; exclusions and electives explained
   without evading the difficult parts; an independent reviewer has
   challenged the exclusions; unresolved gaps on essential items block
   completion.
2. COHERENT PROGRESSION: observable entry and exit competencies per module
   (the four-level taxonomy in the skill), increasing complexity and learner
   independence across the sequence.
3. CONSTRUCTIVE ALIGNMENT: outcomes, instruction, activities and assessment
   criteria aligned, with an integrative capstone.
4. SUBSTANTIAL TEACHING: complete instructional sequences, readings,
   demonstrations and practice. Not disconnected video shelves, and no
   arbitrary media quotas.
5. CREDIBLE WORKLOAD: measured durations plus labelled estimates, summed to
   a real figure.
6. RESOURCES VERIFIED to the standard in the skill, with dates in the
   ledger; no "imported" labels on attached sources.
7. LEARNER-FACING USABILITY: a person can find, follow and complete the
   degree from the site without hand-holding (browser QA, desktop and 375px
   mobile, no console errors).

## Gates (in order, per degree)

No degree's author may clear their own coverage or pedagogical gates.

1. Scope gate (Strategist): scope doc complete; overlaps resolved or on
   `OWNER-DECISIONS.md`.
2. Curriculum-coverage gate (Strategist plus advisor): coverage matrix and
   progression pass the bar.
3. Resource-verification gate (verification band): every attached source
   passes the verification standard; imports re-verified or replaced.
4. Pedagogical-coherence gate (advisor QC): alignment, workload, rubrics.
5. Technical-integration gate (integrator): safe-splice into fcAcademyData,
   node --check, referential validation, tests green, deploy verified live
   with a cache-busted fetch.
6. OWNER gate: status "final" only after owner review. The current "final"
   labels on deg-qigong and deg-cmp are inherited from the single-agent era
   and are not clearance from this rework.

## Boundaries with neighbouring ecosystems

- The wiki (dossiers, principles, concepts, kernels) is a separate project.
  Degrees READ from the wiki through wiki_readings links; they never edit
  wiki pages and never duplicate wiki prose.
- The Academy data block lives in `site/assets/app.js`
  (window.fcAcademyData). Only the integrator band edits it, using the
  safe-splice recipe. Degree Workers deliver module designs as markdown in
  this directory and integration-ready patches; they never edit app.js.
- PRACTICUM SPLIT (owner directive, 2026-10-25): the Qi Gong and
  Contemplative & Mental Practices programs are NOT degrees; they live in
  docs/practicum/ with their own bands, batons and scope docs. The degrees
  ecosystem covers the seven remaining degrees (philosophy, contemplative,
  relational, mind, wellbeing, therapeutic, psychology-101). A schema
  migration to a degree-versus-practicum kind and a separate PRACTICUM
  site section is queued for the integrator band.
- The enrichment batons and queues do not exist here. This ecosystem uses
  `scripts/degree_baton.py` and the bands in `bands/`.

## Binding rules

- Zero hallucination: every fact, quote, duration and credential comes from
  a source actually opened in-session. The owner's primary-source library is
  in docs/PRIMARY-SOURCES.md.
- Evidence types separated; effect sizes where reported; nulls included;
  correlations never phrased as treatment effects.
- Safety language: the old directive 2B (no disclaimers or safety caveats) is
  an enrichment-era rule whose scope is an open owner question. Until the
  owner rules (see OWNER-DECISIONS.md), include only safety language the
  evidence itself requires, and flag anything you removed or want to add.
- Humanize all prose per docs/enrichment/HUMANIZER-SKILL.md (readable
  synthesis, no em dashes in prose, no AI tells).
- Tests before every push: `python3 -m unittest discover -s scripts/tests`
  and `node --test scripts/tests/randomizer.test.cjs`.
- Push only via `scripts/enrich_save.sh`; on a rebase failure, resolve it
  completely before pushing (fail-stop). Note that enrich_save does not
  commit site/assets/app.js; the integrator commits that file itself.

## Status of this rework (2026-10-25)

Phase 0 in progress: scope docs drafted as proposals for the seven degrees
(two practica moved to docs/practicum/ by owner directive),
the curriculum-design skill authored with research grounding (see
ledgers/design-research.md) and marked as a candidate standard, taxonomy
designed, pilots drafted and marked DRAFT NOT CLEARED after advisor QC
round 1. Full-degree curriculum production stays closed until the pilots
pass independent review. The
verified audit of the current Academy data (9 degrees, 54 modules, 353
sources, mixed level labels, 291 unverified imports, 222 missing durations)
is recorded in docs/DEGREE-REWORK-HANDOFF.md and must not be re-derived from
memory.
