# Ledger: deg-wol-buddhism

One ledger per degree. Append entries; never rewrite history. Every entry
carries a UTC timestamp and the agent id.

## Sources opened

| URL | opened (UTC) | by | what it verified |
|---|---|---|---|
| https://religion.ufl.edu/wp-content/uploads/sites/194/REL-2341-Intro-to-Buddhism-Fall-2025-Poceski.pdf | 2026-10-25, before the 11:26:48 UTC session save | strategist-pplx-1025-launch-c | UF REL2341 Poceski Fall 2025 syllabus; full weekly schedule, Harvey textbook, exams + film review, meditation taught as topic only |
| https://www.buddhism.hku.hk/wp-content/uploads/BSTC1004-2025-26_v2.pdf | 2026-10-25, before the 11:26:48 UTC session save | strategist-pplx-1025-launch-c | HKU BSTC1004 2025-26 syllabus; three-vehicle lesson plan, Five Mindfulness Trainings, four assessed meditation logs (20%) |
| https://bond.edu.au/subject-outline/PHIL12-203_2025_JAN_STD_01 | 2026-10-25, before the 11:26:48 UTC session save | strategist-pplx-1025-launch-c | Bond PHIL12-203 Jan 2025 outline; Theravada/Mahayana/Zen/Western curriculum, practical calm/insight and metta meditation, temple visit, assessment table |
| https://religion.ufl.edu/wp-content/uploads/sites/194/REL-2341-Intro-to-Buddhism-Fall-2025-Poceski.pdf | 2026-10-26, between the 00:12:18Z save push and the 00:15:19Z clock reading | worker-pplx-deg-gate-1026a (deg-gate) | independent re-open for Gate 1: REL2341 Fall 2025 Poceski confirmed; Harvey textbook, and the full schedule (Buddha's life, karma and rebirth, Four Noble Truths, Mahayana, Tantra, Chinese/Japanese traditions, lay practice and precepts, meditation week, modern China, the West) all as described |
| https://www.buddhism.hku.hk/wp-content/uploads/BSTC1004-2025-26_v2.pdf | 2026-10-26, between the 00:12:18Z save push and the 00:15:19Z clock reading | worker-pplx-deg-gate-1026a (deg-gate) | independent re-open for Gate 1: BSTC1004 2025-26 confirmed; lessons by vehicle (Humanity/Śravaka/Bodhisattva) and four weekly meditation logs worth 20% confirmed |
| https://bond.edu.au/subject-outline/PHIL12-203_2025_JAN_STD_01 | 2026-10-26, between the 00:12:18Z save push and the 00:15:19Z clock reading | worker-pplx-deg-gate-1026a (deg-gate) | independent re-open for Gate 1: PHIL12-203 Jan 2025 confirmed; practical-experience subject with calm/insight and metta meditation, Five Hindrances, jhana factors, sutta study, Zen, dependent origination, Western Buddhism applied to study/work/relationships, temple visit |

Note: Timestamps in this table are upper bounds from this session's save pushes; exact fetch minutes were not recorded (archive-file mtimes are archive-write times, not open times).

Timestamp audit correction (2026-10-25, strategist-pplx-1025-launch-c): the opened (UTC) values first written for these rows were invented minutes and are withdrawn; the rounded bounds substituted in the first repair are also withdrawn. The values now in the rows are measured session-save bounds (fetches happened before the cited save push; save times carry seconds). Exact fetch times were not recorded. The gate-decision row in this ledger was edited in place across two repair passes; the prior texts are preserved in git history (commits from b07ce2a09 through 1b4346e22 in this session's chain). This correction is appended rather than silently rewriting history.

## Verification outcomes

| source_id | status | evidence | date |
|---|---|---|---|
| (none yet — Gate 1 scope benchmark only) | | | |

## Coverage matrix

(rows: essential topics; columns: taught in / practised in / assessed in)

All teaching, practice and assessment mappings in this matrix are proposals; this benchmark does not verify legacy module coverage.

| essential topic | taught in | practised in | assessed in |
|---|---|---|---|
| Sila, precepts, four immeasurables | scope (deg-contemplative m3) | proposed | proposed |
| Four Noble Truths and the path | scope (deg-contemplative m3) | proposed | proposed |
| School-by-school practice (Secular, Zen, Insight, Theravada, Thai Forest) | scope (m4/m5 Buddhist portions) | proposed | proposed |
| Foundational meditations | cmp practicum (proposed mapping) | practicum (proposed) | practicum (proposed) |
| Buddhist psychology (practical) / Thai Forest stories | scope (electives) | proposed | proposed |

## Gate-1 independent review (2026-10-26, worker-pplx-deg-gate-1026a, deg-gate baton)

All three benchmark anchors were independently re-opened this session (rows
above) and match the scope doc's descriptions.

Verdict against the owner's 2026-10-26 centering clause: the intended learner
is a person walking the Buddhist path in its practical, living schools;
exit capabilities are applied (practise the foundational meditations,
apply Buddhist ethics to concrete situations, state where schools disagree)
— walk-of-life centered and value-proposition aligned. Scope is finite.
The exclusions are owner-ruled and honestly recorded as anchor challenges
(all three anchors teach karma and rebirth; UF and Bond pair it with
cosmology), and the scope already names the design tradeoff. The electives
(Buddhist psychology practical portions; Thai Forest lineage stories)
carry stated learner needs for a practice-driven walk. The school-list
structure (Secular, Zen, Insight/Vipassana, Theravada, Thai Forest) is the
scope's own practice-driven choice, recorded as such — acceptable for a
walk-of-life learner, not a defect.

GATE 1 CLEARED (scope benchmark; independent review), with the same
elective test applied as at the psychdim review — both electives pass it
on their stated learner needs, recorded here: Buddhist psychology (the
practical portions) serves the meditating learner's need to understand
their own mind in practice (the hindrances and aggregates as experienced,
not as scholastics), beyond the school-by-school instructions that form the
core; Thai Forest lineage stories serve the walk as lived-path exemplars
of one of the schools named in the core, bounded as an elective. Both
have a bounded place and a learner need; neither is topical fill.
Carried forward, not gate-blocking:

- Production-time check owed: the rebirth passing-mentions must suffice
  for a learner to place rebirth-dependent doctrines (e.g. the bodhisattva
  vow's multi-life reading) in their traditional frame — the scope's own
  recorded tradeoff; verify at module design.
- Secular Buddhism and the Thai Forest school have no direct anchor units;
  module design must source the living teachers' guidance the scope names,
  not lean on the anchors for these schools. (Production check, not a
  scope blocker.)
- Same unresolved production prerequisite as the other degrees: module
  production formally closed until the pilots pass independent review or
  the owner waives the stop-gate (README, 2026-10-25).

## Gate decisions

| gate | decision | by | date |
|---|---|---|---|
| Gate 1 (scope benchmark) | groundwork done: three anchors opened, benchmark section written in docs/degrees/scope/deg-wol-buddhism.md; Gate 1 remains open; independent review required (no gate-1 assignment was located in the repo instructions this session); groundwork only, no gate cleared | strategist-pplx-1025-launch-c | 2026-10-25 |
| Gate 1 (scope, independent review) | CLEARED: anchors re-opened and verified; centering, finite scope pass; both electives pass the full learner-need test (rationale recorded in the review section); rebirth passing-mentions check and living-teachers sourcing carried to module design; school-list structure accepted as a recorded practice-driven choice | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |

## Raw material verification status (recorded by deg-gate, 2026-10-26)

The existing material this degree maps onto carries verification
evidence: deg-contemplative module 3 and the Buddhist portions of modules
4-5 ([verify file](../../verify/deg-contemplative.md), Block B, verified
2026-10-25 by deg-verify-a) and the cmp practicum
([verify file](../../verify/deg-cmp.md), Block H: every attachment
verified-video/verified-audio). The wiki dossiers and kernels named as
readings are already-published project content. The production owner
still owes module-level mapping against the cleared scope before the
coverage gate can be requested.

## Sources opened (production session 2026-10-26, worker-pplx-buddhism-1026a, baton deg-wol-buddhism)

| URL | opened (UTC) | by | what it verified |
|---|---|---|---|
| https://www.youtube.com/watch?v=TpbWVaXBV4c | 2026-10-26, ~05:05 | worker-pplx-buddhism-1026a | Ajahn Brahm "Buddhist Values" watch page: BSWA channel, duration 54:16, upload 2010-04-08, description "core Buddhist values of goodness, peace and kindness... basis for skilful interaction"; oembed confirmed |
| https://www.youtube.com/watch?v=Nq7YmbYFJkA | 2026-10-26, ~05:10 | worker-pplx-buddhism-1026a | Thanissaro Bhikkhu "The Five Precepts for the Mind" watch page: lengthSeconds 796 (13:16), upload 2016-11-05, CC BY-NC license; content check via page: introduces the five lay precepts (killing, stealing, illicit sex, lying, intoxicants) then their mind dimension; credentials cross-checked on buddho.org and Wikipedia biography pages (Thai forest kammatthana tradition, student of Ajahn Fuang, Abbot of Metta Forest Monastery since 1993) |
| https://www.youtube.com/watch?v=svWaWFOpxXw | 2026-10-26, ~05:03 | worker-pplx-buddhism-1026a | Bhante Dhammadipa "The Four Immeasurable Minds" watch page: Metta Centre channel, duration 2:09:06, upload 2023-03-04; talk covers the four immeasurables in Pali and Sanskrit traditions |
| https://www.buddha-haus.de/bhante-dhammadipa/ | 2026-10-26, ~05:15 | worker-pplx-buddhism-1026a | Dhammadipa biography (institutional page): born Prague 1949, university studies (Slavic studies, Sinology, Indology), ordained 1985 with training in Zen, Theravada and Chinese traditions, monastic stays in Japan/Sri Lanka/US/Taiwan/Burma, associated with Pa Auk Sayadaw, teaching since 1997 |
| https://suttacentral.net/an5.179/en/sujato | 2026-10-26, ~05:12 | worker-pplx-buddhism-1026a | AN 5.179 Gihisutta (Sujato): the five precepts passage quoted ("doesn't kill living creatures, steal, commit sexual misconduct, lie, or consume intoxicants"); free anonymous access |
| https://suttacentral.net/kp9/en/sujato | 2026-10-26, ~05:12 | worker-pplx-buddhism-1026a | Metta Sutta Khp 9 (Sujato): goodwill instructions confirmed ("May all beings be happy!"; "With love for the whole world, unfold a boundless heart"); free anonymous access |
| https://bswa.org/bswp/wp-content/uploads/2016/08/Ajahn-Brahm-and-His-Merry-Monks-updated-10-March-2026-Final.pdf | 2026-10-26, ~05:03 | worker-pplx-buddhism-1026a | BSWA "about our monks" institutional booklet: Ajahn Brahm (Abbot, Bodhinyana Monastery) and Bhikkhu Dhammadipa biographies, incl. Lokanta Vihara Sydney 2019 (search-result excerpt; the booklet URL opened via search index) |

Content checks for the precepts outcome (advisor QC query answered empirically): the two previously verified Ajahn Brahm talks were checked against transcripts before use. "What the Buddha Taught" (M02-B07) centers on awakening, rebirth and kamma per the four-truths boundaries receipt; "The Values of Buddhism" (podcast version of the 2010 Buddhist Values talk) teaches ethics from compassion without enumerating the five precepts. Neither carries the precepts outcome; the b1 module therefore anchors the precepts on Thanissaro's talk plus AN 5.179, and uses Ajahn Brahm's values talk for the ethics orientation outcome.

## Verification outcomes

| source_id | status | evidence | date |
|---|---|---|---|
| TpbWVaXBV4c Ajahn Brahm Buddhist Values | verified-video | watch page duration 54:16; BSWA channel; instructor credentials on institutional booklet; content: values talk, no precepts enumeration (transcript checked) | 2026-10-26 |
| Nq7YmbYFJkA Thanissaro Five Precepts for the Mind | verified-video | watch page lengthSeconds 796 (13:16); credentials on buddho.org/Wikipedia bio pages; content: five lay precepts introduced then mind dimension | 2026-10-26 |
| svWaWFOpxXw Dhammadipa Four Immeasurable Minds | verified-video | watch page duration 2:09:06; Metta Centre channel; credentials on buddha-haus.de institutional bio; content: four immeasurables, Pali and Sanskrit traditions | 2026-10-26 |
| AN 5.179 Sujato (SuttaCentral) | verified | five precepts passage quoted on opened page; anonymous access | 2026-10-26 |
| Kp 9 Metta Sutta Sujato (SuttaCentral) | verified | goodwill instructions quoted on opened page; anonymous access | 2026-10-26 |

## Production coverage matrix (2026-10-26, worker-pplx-buddhism-1026a)

Module-level map against the cleared scope; schools treated as overlapping
practice communities (e.g. Ajahn Brahm serves both the Thai Forest and
Theravada rows). The four immeasurables and the foundational meditations are
allocated to named modules rather than left implicit.

| essential topic | module (taught / practised / assessed) | status |
|---|---|---|
| Five precepts, sila, ethics applied to concrete cases | b1 taught (Thanissaro talk, AN 5.179), practised (case write-up), assessed (rubric) | b1 drafted this session |
| Four immeasurables | b1 taught (Dhammadipa talk, Metta Sutta), practised (metta sittings), assessed (rubric) | b1 drafted this session |
| Buddhist values (goodness, peace, kindness) | b1 taught (Brahm talk), practised (case reasoning), assessed (rubric) | b1 drafted this session |
| Four Noble Truths and the path | b2 taught (Dreyfus session 1 with the dukkha-only caveat, SN 56.11 Sujato, Harvey glossary boundaries), practised (four tasks on own difficulty), assessed | designed; production owed |
| Theravada and Thai Forest living teachers | b3 taught (Ajahn Brahm and Thai Forest lineage sources), practised (sitting, cmp bridge), assessed | designed; production owed |
| Zen | b4 taught (source owed), practised, assessed | designed; source harvest owed |
| Insight/Vipassana | b4 taught (source owed), practised (cmp bridge), assessed | designed; source harvest owed |
| Secular Buddhism | b5 taught (living-teacher source owed; no anchor unit), practised, assessed | designed; source harvest owed |
| Buddhist psychology, practical portions | b6 elective taught (hindrances/aggregates as experienced), practised, assessed | designed; production owed |
| Thai Forest lineage stories | b6/b3 elective exemplars | designed; production owed |
| Capstone: apply Buddhist ethics to a concrete situation; sustained practice with records | b7 capstone, L4: applied ethical case with defended school comparison and self-assessment | designed; production owed |

Rebirth passing-mentions check (Gate-1 carry-forward): b1's source set
carries no rebirth-dependent doctrine; the passing mention is owed at b2
(the four truths module) where karma-and-rebirth teaching enters through the
anchors, and must suffice to place the bodhisattva vow's multi-life reading
(b4/b5) in its traditional frame. Recorded as an open production check.

## Gate decisions (update)

| gate | decision | by | date |
|---|---|---|---|
| Gate 1 (scope, independent review) | CLEARED (unchanged, see above) | worker-pplx-deg-gate-1026a | 2026-10-26 |
| Module QC (b1 draft) | NOT YET REQUESTED: b1 drafted with verified sources; supervisor module-QC owed before it can ship | worker-pplx-buddhism-1026a | 2026-10-26 |
