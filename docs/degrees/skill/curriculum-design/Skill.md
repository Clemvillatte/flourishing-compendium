---
name: curriculum-design
description: |
  Design and rebuild Academy degrees as credentialised courses of study: derive
  full theme coverage from opened authoritative curricula, write level
  taxonomies with observable criteria, design modules with constructive
  alignment, verify every media resource to standard, and compute honest
  workload. Use for any degree, module, scope or coverage work in
  docs/degrees/. Not for wiki dossiers, principles or concept pages.
metadata:
  version: "1.0.0"
  status: "binding standard for the Degree Rework project"
---

# Curriculum Design: the binding standard for Academy degrees

Every worker in the Degree Rework project designs and writes against this
skill. It replaces personal taste with checkable rules. STATUS: candidate
standard, piloted but not yet independently validated; owner directives
and the Phase 0 stop-gate outrank this skill wherever they conflict, and
conflicts must be flagged in a commit message rather than resolved by
silence. The research grounding for each rule, with opened sources, is in
ledgers/design-research.md; rules without grounded support are marked as
house conventions and stay open to challenge at the pedagogical gate.

## 1. Theme decomposition (coverage before modules)

A degree is full coverage of its theme, organised as a course of study. Derive
the theme's essential aspects from sources you actually opened, never from
memory:

1. Open at least three authoritative anchors per degree: university course
   catalogues or syllabi in the field, recognised frameworks or competency
   lists, and major survey texts or handbooks. Record each opened URL in the
   degree ledger.
2. Build a coverage matrix: rows are essential topics and capabilities, columns
   are the modules that teach, practise and assess each row. A row with no
   teaching is a gap; a row with teaching but no practice or assessment is a
   half-built row.
3. Mark every row as essential, elective or excluded, with a one-line reason.
   Boundaries may not be used to evade the difficult or underrepresented parts
   of the theme. If an essential row cannot be filled with a verified
   resource, it goes on the degree's gap register as a blocking gap, not a
   quiet omission.
4. The coverage matrix is a production deliverable: it lives in the degree
   ledger and the scope doc, and an independent reviewer must challenge the
   exclusions before the curriculum-coverage gate.

## 2. Level taxonomy (replaces all label vocabulary)

The current labels (Beginner, Foundations, Intermediate, Advanced, Mastery)
mix two vocabularies and carry no defined criteria. They are retired for
design purposes. The new taxonomy has four levels, each defined by what the
learner can do at exit, not by content difficulty:

- L1 Orientation. Exit: the learner can define the module's core vocabulary
  in their own words, identify the key figures or frameworks, follow a fully
  guided demonstration step by step, and state what the module covers and
  excludes.
- L2 Guided application. Exit: the learner can apply a framework to a case
  not used in the materials, execute a complete guided practice sequence
  start to finish, and compare two accounts of the same question, naming
  where they disagree.
- L3 Independent analysis. Exit: the learner can analyse a novel case
  without a template, evaluate evidence quality (trial versus mechanism,
  sample, effect size where reported), adapt a practice to their own
  constraints with reasons, and teach back the module's core to a peer.
- L4 Synthesis. Exit: the learner can design, execute and self-assess an
  integrative capstone: a sustained practice with records, or a written
  synthesis defending a position against a serious objection.

Rules:
- Entry criteria are the exit criteria of prerequisite modules. A module's
  prerequisites field lists observable competencies, not module titles alone.
- Existing media level tags are legacy. Map them (Beginner and Foundations to
  L1, Intermediate to L2, Advanced to L3, Mastery to L4) only as a migration
  hint, never as evidence of level; re-derive each placement from the
  resource's actual content.
- Progression across a degree must increase conceptual complexity and learner
  independence: early modules scaffold heavily, later modules fade the
  scaffolding, paced by the task and the demonstrated competence of the
  learner rather than by a fixed rule.
- The exit criteria above are the house default. Each module may adapt them
  to its discipline (a theory module's L3 is trial appraisal; a practice
  module's L3 is adapting the practice from its own records), as long as the
  adaptation is written into the module and checkable.

## 3. Module design (constructive alignment)

Every module is built backwards from what the learner must be able to do:

1. Outcomes: three to six observable statements ("can explain X to a peer",
   "can execute Y for 20 minutes unguided").
2. Instruction: complete teaching sequences, not video shelves. Each outcome
   maps to teaching (readings, lectures, demonstrations), practice
   (activities, exercises, guided sessions) and assessment (rubric-checked
   work). Every outcome must be practised and assessed somewhere in the
   module; an outcome that is only lectured is misaligned.
3. Assignments and cognitive load: sequence from worked examples to
   independent work (fade guidance across the module), segment long
   recordings into assigned segments with timestamps, space retrieval across
   the module (activities that ask the learner to recall and use earlier
   material), and interleave related skills in review activities. New
   material is introduced in small units with practice between units, not in
   one long block.
4. Capstones: each degree ends with an L4 integrative capstone with a public
   rubric and a self-assessment step.
5. Rubrics: criteria written in plain language, with an exemplar of strong
   work and one rejection example per criterion, so a learner can self-check.

## 4. Media and resource verification standard

A resource enters a module only after it passes all of these, recorded in
the degree ledger with a verification date:

- Identity: the resource is what its title claims; the practice or doctrine
  is classified from the recording, transcript or text itself, not the title.
- Accessibility: the link resolves for an anonymous visitor. NO paywalled
  or app-gated content (owner ruling, 2026-10-25): curate from the large
  body of free, authoritative teaching available online.
- Instructor credentials: lineage, institution or documented teacher training,
  verified on a biography or institutional page, not the recording's own
  description.
- Content coverage: the relevant segments are identified (start and end), so
  the learner is assigned the exact part that serves the outcome.
- Duration: printed on the source page or measured from the player, never
  guessed. YouTube: oembed confirms existence, then the watch page supplies
  the duration; oembed alone verifies nothing about content.
- Language and captions: stated when the resource is not in English or lacks
  captions.
- Verification status vocabulary: "verified", "verified-video",
  "verified-audio", "replaces-import", or "rejected" with reason. The legacy
  "imported" label is not a verification; imported resources must be
  re-verified or replaced before they can carry a module.

## 5. Workload calculation

- Measured time: recording durations read from source pages, summed.
- Estimated time: reading (words divided by a stated reading rate), practice
  (the activity's own stated repetitions and durations), assessment (rubric
  work estimated per deliverable). Estimates are labelled as estimates.
- The degree page shows a total built from these components. A claimed total
  that no arithmetic supports is a defect. Do not inherit "a year of
  practice" without calculating it.

## 6. Discipline differences

One module recipe does not fit all degrees. Preserve the difference:

- Practica (qigong, cmp: guided years of practice, not degrees): modules
  are training plans. Outcomes are
  capabilities of the body and attention; instruction includes guided
  sessions with printed durations; practice is scheduled repetition; the
  capstone is a self-designed sustained practice with records. Media scarcity
  is more damaging here: a practice module without enough verified guided
  sessions of graduated lengths is incomplete even if its readings are rich.
- Theory degrees (philosophy and the study degrees): modules are reading and
  argument courses. Outcomes are interpretive and analytic capabilities;
  instruction includes primary texts and lectures; practice is writing and
  comparison; the capstone is a defended written synthesis.
- Mixed degrees map each module to whichever side its outcomes belong to.
- Practica live in their own ecosystem (docs/practicum/) with this same
  standard; the practice rules above are the default there.

## 7. Acceptance tests (a module passes only when all hold)

1. Every outcome is taught, practised and assessed, and the rubric's criteria
   are observable.
2. Every attached resource passes the verification standard with a date in
   the ledger; no "imported" labels remain on attached sources.
3. Every assigned segment has a printed duration; workload arithmetic checks
   out.
4. Prerequisites name observable competencies and match the prior modules'
   exit criteria.
5. Prose passes the humanizer rules (read docs/enrichment/HUMANIZER-SKILL.md
   before writing): no em dashes in prose, no AI tells, readable synthesis
   rather than citation display.
6. An independent reviewer (advisor or a worker who does not own the module)
   confirms the module teaches its claimed outcome to the claimed level.

## 8. Rejection examples

- A module whose media list is a shelf of unsegmented videos with no
  activity touching them.
- A "Mastery" tag on a 12-minute intro talk with no practice demands.
- A rubric that grades "engagement" or "effort" with no observable criteria.
- A prerequisite that says only "mod-phil-2" with no competency named.
- A workload total that counts the whole playlist when the module assigns
  two segments of it.
