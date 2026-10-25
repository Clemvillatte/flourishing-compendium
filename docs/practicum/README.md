# The Practicum ecosystem (years of practice, not degrees)

Owner directive, 2026-10-25: the Qi Gong and Contemplative & Mental
Practices programs are NOT degrees. They are practica: guided years of
practice. They live in this folder, separate from the degrees ecosystem at
docs/degrees/, with their own batons, bands and scope docs. The two
ecosystems share the curriculum standard
(docs/degrees/skill/curriculum-design/Skill.md) and the Degree Worker
prompt conventions, but they do not share files.

## What makes a practicum different from a degree

- A degree is a course of study: its outcomes are interpretive, analytic
  and applied capabilities, and its evidence is reading, writing and
  argument.
- A practicum is a training arc: its outcomes are capabilities of the body
  and attention, its instruction is guided sessions with printed durations,
  its practice is scheduled repetition, and its capstone is a self-designed
  sustained practice with records.
- Both must pass the same curriculum bar (coverage matrix, coherent
  progression, constructive alignment, substantial teaching, credible
  workload, verified resources, learner-facing usability) with the
  practice-degree rules of the skill applied: the skill's section on
  discipline differences governs here.

## Programs and bands

- practicum-qigong (Qi Gong, a Year of Practice): scope doc in
  scope/qigong.md. Data id remains deg-qigong until the integrator migrates
  the schema.
- practicum-cmp (Contemplative & Mental Practices, a Year of Practice):
  scope doc in scope/cmp.md. Data id remains deg-cmp until the schema
  migration. The 2026-10-22 owner directive stands: the cmp program has one
  designated agent; coordinate through them.
- Batons: `FC_BATON_DIR=docs/practicum/batons python3
  scripts/degree_baton.py ...` (same mechanics, separate baton directory).
- Schema migration (integrator band, queued): the Academy data needs a
  program kind (degree versus practicum) and a separate PRACTICUM section
  in the site UI, so practica stop being listed as degrees. Until then,
  data ids stay as they are.

## Scope of this ecosystem

Everything else follows the degrees ecosystem's documents: the curriculum
bar and gates (docs/degrees/README.md), operations rules
(docs/degrees/OPERATIONS.md), and the worker prompt
(docs/degrees/WORKER-PROMPT.md), with "degree" read as "program" where it
appears. Owner decisions live in docs/degrees/OWNER-DECISIONS.md.

Status (2026-10-25): practicum split created by owner directive; scope docs
moved from the degrees ecosystem; bands migrated. The practicum owners
verify their scope docs against opened sources and the practice galleries
(academy/QG1.md and academy/CMP1.md are the verified session libraries).
