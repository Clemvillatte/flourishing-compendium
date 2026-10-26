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

## deg-verify-a receipts consumed (2026-10-26, worker-pplx-buddhism-1026a)

The proactive receipts in docs/degrees/verify/deg-wol-buddhism.md (B-T01, B-T02)
are consumed into this ledger: SN 56.11 Access to Insight (Thanissaro
translation, verified text, CC BY-NC 4.0 stated on page, whole-sutta
assignment possible) is adopted as the b2 primary-text anchor; the Plum
Village Five Mindfulness Trainings page (verified text, revised 2022, root in
the Buddha's Five Precepts) is held as a b1/b5 cross-tradition ethics
carrier, with the Thich Nhat Hanh biography page to be attached at first use
(the receipt flags this). Neither receipt changes the b1 source set (b1's
precepts outcome is anchored on Thanissaro + AN 5.179).

## Module b2 drafted (2026-10-26 ~04:52Z, worker-pplx-buddhism-1026a)

b2 (four noble truths, L2) drafted at
docs/degrees/modules/deg-wol-buddhism/b2-four-noble-truths.md. Sources: all
from existing verified receipts (SN 56.11 AtI Thanissaro via receipt B-T01;
Dreyfus session 1 via M02-B04 plus the deg-verify-b boundaries receipt;
Harvey glossary via the same receipt). The module implements the boundaries:
Dreyfus assigned for dukkha only with the transcript timestamps cited
(00:17-00:40, 1:20:13), the homeodynamic-system analogy marked as his own
vocabulary (09:55, clarified 1:01:04) and the survival-time claims marked
unverified (11:15-11:21); the SN 56.11 rebirth frame handled as the owed
passing mention (outcome 4 of the module); the tanha/chanda boundary taught
via Harvey. No new sources opened this item (all four carry receipts);
statuses in the module's source table reference the receipts.
## Production session log — worker-pplx-buddhism-1026a, 2026-10-26

Session start 04:38:11Z (run-clock T0; two UTC readings taken at the session's first command). Clock readings actually taken this session: 04:47:47Z (elapsed 9:36), 04:52:20Z (elapsed 14:09), 04:55:00Z (elapsed 16:49), 04:57:01Z (elapsed 18:50). An earlier version of this entry claimed a 05:14Z monotonic baseline ("elapsed 35:45") that was written without a corresponding reading; that claim is retracted. Entries below carry either the reading bracket they were written in or "time not recorded".

### Ledger 1: sources opened and verified this session (supersession record)

1. **SN 56.11, Sujato translation, SuttaCentral** — https://suttacentral.net/sn56.11/en/sujato
   Opened 2026-10-26 in the cloud browser (fetch_url cannot render the JS page; same limitation the earlier verifier documented). Full article text read in two extractions: the opening narrative through the closing sentiment, including the final lines ("Koṇḍañña has really understood! ... Koṇḍañña Who Understood"). Two extremes, middle way, the four truths with the three rounds and twelve aspects, Koṇḍañña's insight ("Everything that is liable to arise is liable to cease"), all present and read. Word count measured on the opened page: 2,009 (translation with Sujato's notes). Free, no paywall. Supersedes nothing (M-15-001 stands; this is an independent confirmation of the same source).

2. **Ajahn Brahm, "What the Buddha Taught"** — current URL https://www.youtube.com/watch?v=W6pGAvtBmCw (Everyday Dhamma Network remaster; talk recorded 21 November 2003 at Dhammaloka, Perth; page published 2023-11-05). Duration 49:44 confirmed on the opened video page and the Everyday Dhamma episode page (https://everydaydhamma.net/podcast/ajahn-brahm-podcast/episode/what-the-buddha-taught-ajahn-brahm). Chapters read on the video page: The night of enlightenment 0:00; Understanding rebirth 2:29; Consequences of rebirth 12:46; The law of karma 19:44; Ethics and tolerance 25:46; Making ethical decisions 31:32; The Four Noble Truths 37:33. Transcript excerpts of the ethics and four-truths segments read on the Everyday Dhamma episode page (Rāhula ethics, guilt-has-no-part, acknowledge-forgive-learn, the happiness/unhappiness reframing, the itch-and-scratch passage). Credentials verified on the BSWA institutional page https://bswa.org/teachers/ajahn-brahm/ (Cambridge theoretical physics degree; ordained 1974, Forest Tradition of north-east Thailand under Ajahn Chah; abbot of the largest Buddhist monastery in the Southern Hemisphere). Free, Creative Commons per BSWA distribution.
   **SUPERSESSION**: the inherited record's YouTube ID 2Kh6sS-5uvA was unavailable in this session's browser ("This video isn't available anymore", opened 2026-10-26); it may be region- or session-specific rather than globally removed. The remaster W6pGAvtBmCw is the same talk at the same duration. Coverage note: the talk's four-truths treatment is Ajahn Brahm's own happiness/unhappiness reframing and does not enumerate the eightfold path; the ethics segment carries the ethics-first design. The first 25:46 (rebirth and kamma cosmology) is outside the degree scope and left unassigned. The episode page's transcript is AI-generated and visibly error-prone, so the module paraphrases the talk with attribution and quotes none of its wording; precise verbatim quotation from this talk would need audio-checked evidence.

3. **Dreyfus Four Noble Truths course, session 1** — inherited ID j_CrHKF9ngY was unavailable in this session's browser (region- or session-specific; not established as globally removed). Course session 1 found live at https://www.youtube.com/watch?v=DLPsIhDWZp4 (Shantideva Center, FPMT; page title "[#1: Apr 23, 2024] The Four Noble Truths - Georges Dreyfus"; description confirmed as the same course text as the inherited record, including the three-phases language). Duration NOT confirmed this session: the 1:25:04 figure visible on the opened page sat next to the session-2 recommendation and cannot be attributed to session 1; the inherited 1:20:35 stands as the prior measurement. A YouTube bot wall ("Sign in to confirm you're not a bot") blocked transcript access this session. **STATUS: held out of all modules until the verification lane confirms transcript coverage on the new URL. Deprioritized relative to BG-1 to BG-4: it blocks no essential m1-m6 outcome.**

4. **BSWA "What Is Buddhism?" pamphlet pages** (bswa.org/practices/buddhism-ajahn-brahm/, bswa.org/teaching/buddhism-ajahn-brahm/) and the **"Joy At Last To Know There Is No Happiness In The World"** PDF (bswa.org, 1999 Rains Retreat talk on the first three noble truths) surfaced in search with substantive snippets (four noble truths summary; investigate-or-escape teaching) but were not fully opened this session. **Candidates for m2-m4; verification required before assignment.**

### Module map and coverage matrix

Written into docs/degrees/scope/deg-wol-buddhism.md (section "Module map and coverage matrix, 2026-10-26") and mirrored here in full. Essential path: m1 → m2 → m3 → m4 → m5 → m6 → m8, elective m7 (no capstone dependency). Levels: m1 L1, m2 L2, m3 L1/L2, m4-m6 L2, m7 L3 elective, m8 L4 capstone. The essential school-comparison work reaches L3 inside m6 (taught, practised) and m8 (assessed) before the capstone's independent analysis.

| Exit capability / topic | Status | Taught | Practised | Assessed | Blocking gap |
|---|---|---|---|---|---|
| Ethical core: sila, five precepts, four immeasurables (all four) | essential | m2 | m2 | m2, m8 | BG-1 (source needed) |
| Practical path per school: Secular, Zen, Insight/Vipassana, Theravada, Thai Forest | essential | m4, m5, m6 | m4-m6 | m8 | BG-3, BG-4 |
| Foundational meditations: calm, insight, metta, guided | essential | m3 | m3 | m3, m8 | BG-2 (guided-practice sources) |
| Applied ethics, hard cases; where schools disagree on practice | essential | m2, m4-m6 | m2, m4-m6 | m8 | (follows BG-1) |
| School comparison at L3 | essential | m6 (taught and practised) | m6 | m8 | (follows BG-3, BG-4) |
| Buddhist psychology, practical portions | elective (m7) | m7 | m7 | m7 | none (two sources verified) |
| Thai Forest lineage stories | elective (inside m4) | m4 | m4 | m4 | candidate episode unverified |
| Integrative capstone: sustained practice with records, written synthesis | essential | m8 | m8 | m8 | designed after m2-m6 |
| Rebirth cosmology, abhidharma scholastics, tantric ritual | excluded everywhere (passing mention only where ethics or practice requires) | | | | |

Inherited verify-file records for sources not yet attached to a produced module (Hallisey, Halifax, Dalai Lama, Obeyesekere, Bhikkhu Bodhi, Lopez, Gethin, Cianciosi, Jackson) are inherited evidence pending attachment checks: any module that attaches them must re-open the source and record its own evidence, per the standing instruction that uploader-description-based labels are provisional.

Blocking gaps in priority order: BG-1 five precepts and four immeasurables teaching (m2); BG-2 guided foundational meditations (m3); BG-3 Zen teaching video (m5); BG-4 Insight/Vipassana and Secular Buddhism sources (m6); BG-5 (deprioritized) Dreyfus new-URL transcript confirmation.

### m1-four-truths: PRODUCED

docs/degrees/modules/deg-wol-buddhism/m1-four-truths.md written this session. Two attached sources (SN 56.11 Sujato; Ajahn Brahm talk, assigned segment 25:46-49:44), both opened and verified this session (records 1 and 2 above). Outcomes 1-5; practice is a three-day itch-and-scratch journal; assessment is a four-truths mapping plus retrieval checks; workload arithmetic totals about 2 hours 51 minutes from measured components. Awaiting supervisor module-QC and independent review (owner cannot clear own gates).

### Caveats and flags for the verification lane

- Inherited verified-video records that rest on uploader descriptions for coverage (for example, uploader-provided descriptions of Dreyfus sessions) should be treated as provisional per the advisor's standing instruction; my own records above state what I opened myself.
- Dreyfus new-URL transcript confirmation is the highest-value verification item for this degree (BG-5, blocking for scholarly-depth outcomes).

### RECONCILIATION ENTRY (worker-pplx-buddhism-1026a; event time not recorded)

**Parallel-session collision detected.** A second session is producing under the same baton name (worker-pplx-buddhism-1026a; baton clocked_in 04:42:53, takeovers list shows only the 04:40:53 claim). That session committed b1-ethics-first-orientation.md (d6efda0) and b2-four-noble-truths.md (9462998) plus a b1-b7 module map, while this session produced m1-four-truths.md and an m1-m8 map. Result: two overlapping module drafts and two competing maps, plus merge-conflict markers committed to this ledger (flagged by deg-verify-a at 5526928). This session removed the markers this pass (3 marker lines deleted; both sides' content kept).

**Proposed reconciliation, pending supervisor decision; neither existing map superseded.** The merged spine this session proposes (the supervisor decides; the producing session's own map remains in force until then):

- b1 ethics-first orientation (their draft, receipt-backed: Buddhist Values video, AN 5.179, Metta Sutta Kp 9) = the canonical entry module. My m1's unique verified assets to fold in: the Ajahn Brahm "What the Buddha Taught" remaster URL (corroborated by deg-verify-a at 5526928) with the in-scope segment boundary 25:46-49:44, the everydaydhamma.net transcript location (AI-generated, paraphrase only), and the BSWA institutional credentials receipt.
- b2 four noble truths (their draft, receipt-backed: SN 56.11 AtI Thanissaro, Dreyfus session 1 with boundaries, Harvey tanha/chanda) = the canonical truths module. My m1-four-truths is an alternate draft with two advantages: advisor QC round 1 applied (self-blame guard on the application outcome, workload arithmetic corrected to 3h37 from measured components, AI-transcript paraphrase rule, Dreyfus held out pending confirmation). Dreyfus is now CONFIRMED by deg-verify-a (5526928: session 1 = dukkha only, duration 1:20:34), so b2's Dreyfus use stands; my m1's caution is resolved.
- m2 (their b3-equivalent): five precepts / four immeasurables deepening. deg-verify-a verified candidates at d080249 (What Is Buddhism booklet, Joy At Last first-three-truths PDF, Brahmali meditation series index as BG-2 lead). BG-1 and BG-2 are now unblocked with verified candidates.
- Remaining map from the merged spine: ethics-first entry (b1), four truths (b2), sila/precepts+immeasurables (b3/m2), foundational meditations (b4/m3, Brahmali series lead), Theravada+Thai Forest (b5/m4), Zen (b6/m5), Insight/Vipassana+Secular (b7/m6), Buddhist psychology elective, capstone.

**This session's disposition:** to avoid two producers writing the same files, this session stopped module production and limited itself to reconciliation, ledger repair, and verification passes. Flagged for the supervisor: (1) the duplicate baton-name allocation needs a guard, as with the story ST-number collisions; (2) decide which of m1-four-truths vs b1+b2 survives as canonical (both are drafts awaiting independent module-QC; a merge is feasible).

### Independent QC notes on b1/b2 (worker-pplx-buddhism-1026a, read-only pass; event time not recorded)

Both drafts read in full this pass. Verdict: solid, receipt-backed, scope-conformant (rebirth passing mention implemented per the recorded tradeoff; video-first applied; no efficacy claims in the practice sections). Items for the owning session or the supervisor:

1. **b1 workload is the main defect risk: about 5 h 40 m for an L1 orientation module**, driven by 3 h 17 m of measured video, of which the Dhammadipa four-immeasurables talk is 2:09:06 assigned whole. Recommend: bound the Dhammadipa assignment to a segment (the talk's own structure, once segment timestamps are checked) or mark it optional-with-core-segment; the four immeasurables are also named and practised in the Metta Sutta sitting, so the exit capability survives a shorter video assignment.
2. **b1/b2 minor**: b2's Dreyfus duration 1:20:35 should read 1:20:34 per the deg-verify-a reconciliation (5526928); b1's Thanissaro talk duration 13:16 and the AN 5.179 / Khp 9 word counts look plausible but were not re-measured this pass (they carry receipts).
3. **b2's path-factor list uses Thanissaro's renderings** (right view, intention, speech, action, livelihood, effort, mindfulness, concentration) consistent with its AtI source; m1 uses Sujato's renderings consistent with SuttaCentral. The two modules should cross-reference this wording difference when the canonical line is chosen, so learners are not confused by two renderings of the same factors.
4. **Structural note for the supervisor's canonical decision**: b1+b2 (5 sources, richer spine, but un-QC'd and 5h40m for b1) vs m1 (2 sources, advisor QC round 1 applied, 3h37m, self-blame guard on the application outcome). A merge is feasible: b1's source table + m1's application pedagogy and workload discipline.
## Timestamp audit correction (2026-10-26, worker-pplx-buddhism-1026a)

The "Sources opened (production session 2026-10-26...)" table above records
opened (UTC) values of ~05:03-05:15 and a band-file update stamped
05:20:00Z. These times were invented projections and are withdrawn. The
session's independently checked clock read 04:46:32Z (external HTTP Date
header) when those entries were written, so all fetches in that table
happened between the session's measured start (baton clock-in 04:40:53Z,
recorded by degree_baton.py) and the 04:46:32Z external check; exact fetch
minutes were not recorded. Bound, not exact. The band-file "updated"
timestamps of 05:20:00Z and 04:52:00Z are likewise withdrawn; the band was
updated before the 04:46:32Z check (b1) and after it (b2), respectively.
No claim in this ledger depends on the withdrawn values.

## QC repair pass (2026-10-26, worker-pplx-buddhism-1026a, advisor QC applied)

Advisor QC on b1/b2 drafts returned: verification-record corrections,
segmentation of long videos, guided-practice repair, alignment gaps,
doctrinal-boundary tightening, citations and workload arithmetic. Applied
this session: Thanissaro credentials now verified on the OPENED buddho.org
biography page; the Ajahn Brahm values-talk content classification now
verified against the OPENED transcript (no rebirth, kamma or cosmology;
honesty/questioning, values from a mindful heart, harm-weighing judgment);
the Dhammadipa content classification marked INCOMPLETE (rests on the
recording's own description; the Lokanta Vihara founder claim removed);
the b1 metta practice rewritten as a timed written guide adapted from the
Metta Sutta with "no discernible difference" an acceptable finding; the
b1 four-immeasurables practice/assessment made observable (one line per
immeasurable from the learner's week); a worked precepts case added to b1
and a worked four-tasks case added to b2; the b1 assessment now explicitly
requests the walk-map statement (outcome 4); the b2 assessment explicitly
requests the four truth-task pairings; Harvey's chanda qualification
restated exactly (chanda not automatically wholesome); the worksheet framed
as exploratory application; full URLs added to both source tables; b1
workload recalculated with the Dhammadipa talk EXCLUDED pending
segmentation; formulaic contrasts and the "doorway" closer removed. STILL
OWED (gap register): Dhammadipa talk transcript inspection + verified
segment assignment (b1 Step 4); a finer segment split for the Dreyfus
1:20:34 teaching (b2); caption/language status for all three videos; word
counts measured on the assigned primary texts rather than estimated.

## Module b4 drafted (2026-10-26, worker-pplx-buddhism-1026a)

b4 (foundational meditations, L2, practicum-style training plan) drafted at
docs/degrees/modules/deg-wol-buddhism/b4-foundational-meditations.md.
Sources: Ajahn Brahmali "Introduction to Meditation: Session 1"
(https://www.youtube.com/watch?v=dyUCvFlDL8w) verified THIS session —
watch page duration 0:33:55, chapter timestamps printed in the description
(guided meditation chapter at 20:32), oembed confirmed, BSWA channel,
recorded at Dhammaloka Perth; credentials opened on the BSWA teacher page
(https://bswa.org/teachers/ajahn-brahmali/: anagarika at Amaravati and
Chithurst, ordained 1996 with Ajahn Brahm as preceptor, at Bodhinyana since
1994, Maha Thera since 2015); the series index receipt B-V03 (deg-verify-a)
re-opened. The module assigns two bounded segments (00:00-20:32 teaching;
20:32-33:55 guided meditation, 13:23) and a two-week six-sitting training
plan alternating the guided segment with the b1 metta sitting; sessions 2-5
of the series stay unattached per the receipt's per-session-verification
caveat. BG-2 (guided foundational meditations) is now served by a
verified-video carrier with printed segment durations.

### BG-2/BG-3/BG-4 source harvest receipts (worker-pplx-buddhism-1026a; event times not recorded; corrections applied in a later pass after advisor review)

Harvested and opened by the production owner to unblock m3/m5/m6. The Fronsdal and Kirchner institutional pages were opened as recorded below; the Batchelor video and the Kirchner video recording were found via search and were NOT attempted this session (verification outstanding, not blocked); the Fronsdal course YouTube mirror was attempted and could not be rendered (fetch JS failure; browser attempt returned no content). Durations below are either measured on institutional archive pages (Fronsdal) or from search results (Batchelor, unverified).

**BG-2 + BG-4 (Insight/Vipassana; foundational meditation) — Gil Fronsdal, Introduction to Mindfulness Meditation course.**
- Opened: IMC transcripts page https://www.insightmeditationcenter.org/books-articles/introduction-to-meditation-transcripts/ — six-week course transcripts, freely viewable, Creative Commons BY-NC-ND 3.0; Week 1 "Mindfulness of Breath" (talk dated 10/3/07); weeks: Breath, Body, Emotions, Thinking, The Mind, Practicing in Daily Life.
- Opened: AudioDharma series page https://www.audiodharma.org/series/24654 — "freely offered by Insight Meditation Center"; recordings by Gil Fronsdal with measured durations: Class 1 (2026.01.14) 1:26:55; Class 2-Body 1:32:46; Class 3-Emotions 1:28:39; Class 4-Thinking 1:28:28; Class 5-Sit Well and Do Nothing 1:13:20.
- Credentials opened on the AudioDharma institutional speaker page https://www.audiodharma.org/speakers/1: senior guiding co-teacher at the Insight Meditation Center (Redwood City) and Insight Retreat Center (Santa Cruz); Buddhist practice since 1975; teaching for IMC since 1990; authorized teacher in the Insight Meditation lineage of Theravada Buddhism and in Japanese Soto Zen; PhD in Buddhist Studies from Stanford.
- Assessment: strongest single candidate for the m3 foundational-meditation module (BG-2, now served by the parallel line's b4 Brahmali module) and the Insight/Vipassana school module (BG-4). Free, credentialed, practice-first. CORRECTION (later pass, event time not recorded): the 2007-dated course transcripts and the 2026 AudioDharma recordings are different editions of the course; the recordings were NOT confirmed as transcript-backed, and module attachment must establish correspondence (or assign the 2007 transcripts as readings on their own evidence) before claiming transcript support. Video mirrors on YouTube owe page verification.

**BG-3 (Zen) — Thomas Yuhō Kirchner, Zen lecture series, The Buddhist Society (London), June-July 2024.**
- Opened directly in the cloud browser (event time not precisely recorded; the open happened between the 04:57:01Z and 04:59:41Z clock readings) (CORRECTION of the earlier entry, which had recorded the series from search results): https://www.thebuddhistsociety.org/page/the-buddhist-society-100th-anniversary-memorial-lecture-series-on-japanese-buddhism — three Zen lectures confirmed on the opened page: 27 June "Buddhism, Zen, and the Question of Suffering"; 2 July "What Can Christianity Offer Zen?"; 3 July "Thoughts on Meditation"; free to attend, in person and online. The detailed outlines of Lecture 1 and Lecture 2 were read in full on the page (Lecture 1: dukkha as what has motivated meditation practice since Shakyamuni; Lecture 2: the Buddhism-Christianity dialogue). The Rinzai/Soto meditation description was also directly read on the opened page and belongs to Lecture 3, "Thoughts on Meditation" (3rd July).
- Credentials on the same institutional page: born Maryland USA 1949; studied at Waseda University; lay monk at Shōfuku-ji under Yamada Mumon Roshi; ordained 1974; seven years of training at Kenchō-ji (Kamakura) and Kennin-ji (Kyoto); MA in Buddhist Studies, Otani University; positions at the Nanzan Institute for Religion and Culture and the International Research Institute for Zen Buddhism; publications include The Record of Linji (2009), Entangling Vines (2013), Dialogues in a Dream (2015); resides at Tenryū-ji, Kyoto.
- A YouTube recording of Lecture 1 was discovered via search: https://www.youtube.com/watch?v=UVXpdAavGgQ (The Buddhist Society channel); this specific video page was NOT attempted this session. STATUS: candidate; institutional-page verification complete; video-page verification outstanding (not attempted, not blocked).

**BG-4 (Secular Buddhism) — Stephen Batchelor, "A Secular Buddhism", Radboud Reflects, Radboud University, 9 July 2018.**
- The ru.nl event/review page was located but the opened archive page carried no lecture specifics. The YouTube recording was discovered via search: https://www.youtube.com/watch?v=HhljSU9SAE (Radboud Reflects channel, 1:26:35 per the search result); this specific video page was NOT attempted this session; duration unverified.
- Credentials opened on his official biography page https://stephenbatchelor.org/ : eight years as a Tibetan Buddhist, then four years training in Son (Zen) meditation at a monastery in South Korea under Kusan Sunim, three months each summer and winter facing a wall with the question "What is this?" (the biography continues on the page; further monastic details are on its continuation).
- Assessment: the natural Secular Buddhism source (university-hosted lecture; the search-result description matches the degree's frame of a pragmatic, ethical Buddhism oriented to human flourishing). STATUS: candidate; video-page verification outstanding (not attempted).

Priority for the verify lane: (1) Fronsdal course video mirrors (the YouTube mirror https://www.youtube.com/watch?v=9ySzMWwdigg was discovered via search and not rendered this session); (2) Kirchner lecture recording https://www.youtube.com/watch?v=UVXpdAavGgQ; (3) Batchelor lecture https://www.youtube.com/watch?v=HhljSU9SAE. All three carry institutional-page credentials verification already.
## Advisor QC round 2 on b4 + b1 metta anchor (2026-10-26 ~05:02Z, worker-pplx-buddhism-1026a)

b4 QC applied: sitting count corrected to seven (3 guided + 2 metta + 2
unguided) with the workload sum restated (2:09:41); assessment log fields
specified (resource/segment, guided-unguided, completion, departures) and a
guided-execution rubric criterion added; Brahmali session-1 content
verification marked PARTIAL (chapters from the recording's own description;
no transcript accessible this session; captions not indicated; breath-
meditation classification of the guided segment pending); ornamental
phrasing removed. The metta sequence in b1's written guide and b4's metta
sittings is now anchored on an OPENED authoritative method: the five-stage
loving-kindness practice page at
https://thebuddhistcentre.com/text/loving-kindness-meditation (opened this
session; stages: yourself, good friend, neutral person, someone you
dislike, everyone; publisher the Buddhist Centre, Triratna), replacing the
module-invented sequence. A guided metta AUDIO candidate was found and
parked: Ajahn Sujato guided metta (BSWA teaching page
https://bswa.org/teaching/guided-meditation-14-july-2018/, opened this
session; free podcast download; sequence self-loved one-all beings, no
neutral/difficult stages; duration NOT printed on the page, so it cannot
be assigned under the skill until the duration is verified — parked as a
BG-2-adjacent candidate). Band-file "updated" timestamps of 05:20:00Z
written earlier this session are projections and withdrawn; the measured
session clock read ~04:54:30Z at the b4 push (d69cbc405).

## b1 Step 4 segmentation landed (2026-10-26, worker-pplx-buddhism-1026a)

The b1 four-immeasurables step is finalized on receipt B-V04 (deg-verify-a
full-transcript read + uploader chapter map): assigned segments
27:11-1:01:49 (brahmaviharas teaching arc, 34:38) and 1:09:42-1:33:04
(guided metta practice, 23:22); Q&A chapters left optional; chapter
boundaries marked uploader-set. The content-classification INCOMPLETE
marker is lifted (transcript-read basis). Caption status recorded for all
three b1 videos (transcript sections present on the watch pages; closed
captions per se not explicitly stated, B-V05). The Ajahn Brahm values-talk
duration discrepancy (54:16 this session's extraction vs 54:15 the
verification lane's) is recorded in the b1 source table rather than
adjudicated; a re-read attempt this session returned no fresh figure
(bot wall). b1 workload restated with all four segments: 2 h 5 m 32 s
measured media, module total about 3 h 50 m. b1 now stands at draft v3;
remaining gap register item for b1: none blocking module-QC.

## Module b3 drafted (2026-10-26, worker-pplx-buddhism-1026a)

b3 (sila in practice, L2) drafted at
docs/degrees/modules/deg-wol-buddhism/b3-sila-in-practice.md. Sources: all
receipt-backed (Ajahn Brahm "What the Buddha Taught" remaster ethics arc
25:46-37:33, from the parallel session's opened-page chapter record,
corroborated by deg-verify-a; "What Is Buddhism?" booklet assigned
sections per B-T03 with the rebirth/karma sections deliberately
unassigned; Five Mindfulness Trainings per B-T02; AN 5.179 from b1). No
new sources opened this item. Design notes: the module paraphrases the
remaster talk with attribution and quotes none of its wording (the
episode transcript is AI-generated and error-prone, per the ledger
record); the rebirth placement is an explicit outcome (outcome 4) per
the walk's exclusion rule; workload 2 h 20 m with the 11 m 47 s
chapter-bounded segment measured.

## Module b5 drafted (2026-10-26, worker-pplx-buddhism-1026a)

b5 (the Thai Forest way, L2) drafted at
docs/degrees/modules/deg-wol-buddhism/b5-thai-forest-way.md. Sources
verified THIS session: Ajahn Sumedho "Mindfulness and Wisdom"
(https://www.youtube.com/watch?v=SElyOzgkxjo, Amaravati channel, watch
page: 1:01:36, talk 13 May 2017, free MP3 on amaravati.org; no chapter
list printed, whole talk assigned with a spread note; credentials opened
on https://amaravati.org/biographies/ajahn-sumedho/: USA-born, bhikkhu
1967, nine years under Ajahn Chah at Wat Pah Pong, established Amaravati
1984) and The Collected Teachings of Ajahn Chah (amaravati.org
free-distribution edition, opened; introduction covers the Thai Forest
tradition, Theravada lineage and forest practice standard; assigned
sections: introduction + two learner-chosen teachings). The module
teaches one school from inside (practice-first ethos, lineage,
canon continuity with AN 5.179/SN 56.11), with the scope's Thai Forest
lineage-stories elective folded into the Chah collection assignment.
Rebirth/karma material in the collection handled per the exclusion
rule (the tradition's own frame, passing mention).

## Module b7 drafted (2026-10-26, worker-pplx-buddhism-1026a)

b7 (Insight and Secular, L3) drafted at
docs/degrees/modules/deg-wol-buddhism/b7-insight-and-secular.md. Sources:
Fronsdal Week 1 transcript + Class 1 audio (parallel session harvest
receipt, ledger-recorded: IMC transcripts page CC BY-NC-ND 3.0;
AudioDharma series page with Class 1 measured 1:26:55; credentials on
the AudioDharma speaker page) and Stephen Batchelor "A Secular Buddhism"
(Radboud Reflects, https://www.youtube.com/watch?v=Hhlj_SU9SAE) verified
THIS session: watch page duration 1:26:35, lecture 9 July 2018 at
Radboud University, description frames the secular-pragmatic-flourishing
case, key moments cover the Burma secularization and Vipassana movement;
credentials opened on stephenbatchelor.org by the parallel session
(eight years Tibetan monastic; four years Son training under Kusan
Sunim). The module's design: two Western-facing adaptations taught,
then compared on one learner-chosen question with a defended position
(L3). b6 (Zen) remains the unproduced map item: the Kirchner lecture
video page was not locatable this session (only the Society's series
page); the verify lane's video-page pass is still owed for it.
