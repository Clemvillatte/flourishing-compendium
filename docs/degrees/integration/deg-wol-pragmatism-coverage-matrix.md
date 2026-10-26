# Coverage matrix — deg-wol-pragmatism (Phase 0 deliverable)

Built 2026-10-26 by worker-pplx-degfixcontent-1026a (baton deg-fix-content), per
docs/degrees/AUDIT-2026-10-26.md Phase 0. Approved rows come from
docs/degrees/scope/deg-wol-pragmatism.md (read in full, including the Gate-1
repair note: process thought demoted to a Cobb-line elective capped at lived
experience; the Dewey elective trimmed to its anchor-supported ethics half).
Design evidence is the QC-PASS module docs; published state is the app.js data
block checked through deg-wol-pragmatism-manifest.json and the learner audit.

Statuses: COVERED, INTEGRATION-LOSS (category a), DIVERGENCE (routed),
INTENTIONALLY-EXCLUDED (category c).

## Exit capabilities

| Approved capability | Module(s) | Design evidence | Published state | Status |
|---|---|---|---|---|
| Explain the core pragmatist idea (beliefs as instruments tested in experience) and its consequences for living | m1 (Peirce's maxim applied to the learner's own conceptions) | QC-PASS doc; the maxim and its application are m1's spine | mod-prag-1 present; band-code title and PRAG-M1-02/03 double listings are category-a losses | COVERED (with category-a losses) |
| Apply the pragmatist method to beliefs and habits (what difference would this make in practice) | m2 (Peirce's four methods on one own belief), m3 (James's genuine options on one own decision), m4 (Dewey's three accounts on one recurring disagreement) | QC-PASS docs; each module runs the method on the learner's own material | Present; Peirce Fixation-of-Belief reuses across modules are distinct assigned passages, dissolved by the Phase A assignment object | COVERED |
| Place James, Dewey and Peirce in relation to each other | m2 → m3 → m4 arc; m5 capstone synthesis | QC-PASS docs; the arc is the walk's structure | Present | COVERED |

## Bounded domain topics

| Approved topic | Module | Design evidence | Published state | Status |
|---|---|---|---|---|
| Peirce, James and Dewey as the classical core | m2, m3, m4 | QC-PASS docs; Peirce 1877, James (Will to Believe; Pragmatism II and VI), Dewey assigned with printed locators/word counts | Present; the m3 readings (PRAG-M3-02/03/04) are NOT integrated in the data block — values in the manifest (audit Phase 0 finding) | INTEGRATION-LOSS (m3 readings; the audit names them for Phase A) |
| Pragmatism as a lived method of belief and habit revision | the whole walk; m5 capstone (one live belief through the tools) | QC-PASS docs | Present | COVERED |
| Elective: Dewey ethics (ethics half) | m4 | The m4 doc states "The Dewey ethics elective anchors here and goes further"; the doc also records that "The Construction of the Good" (a benchmarked syllabus reading) is deliberately NOT part of the assigned contents | Present (carried inside m4) | COVERED |
| Elective: Neopragmatism (Rorty) | none | No Rorty/neopragmatism assignment in any module doc | Absent | DIVERGENCE (scope lists the elective; the built degree carries none — finite-scope defensible, routed as an observation for the owner) |
| Elective: Process thought (Cobb practice line, lived-experience cap) | none | No process/Cobb assignment in any module doc | Absent | DIVERGENCE (same routing) |
| Capstone: the method on one live belief | m5 | QC-PASS doc; no new sources by design | Present | COVERED |

## Intentionally excluded (category c, per the scope and its Gate-1 repairs)

- Analytic philosophy of language beyond the pragmatic maxim.
- Existentialism and Greek virtue ethics (their own walks).
- Process thought as core material (demoted by the Gate-1 repair to the Cobb-line elective, capped at lived experience; the Whitehead metaphysics register stays out).
- The Dewey elective's education half (trimmed by the Gate-1 repair; not anchor-verified, no learner-need case).
- Recorded anchor challenges: Rorty is core at the benchmark anchors but elective in the scope (and absent from the built degree — see DIVERGENCE above); the m4 doc's own note that "The Construction of the Good" is excluded from the assigned readings.

## Structural defects for the schema/text lanes (category a)

- The m3 missing readings (PRAG-M3-02/03/04: James, The Will to Believe; Pragmatism Lectures II and VI) — named with word counts and locators in the manifest; the audit flags them "manifest assignment not integrated"; Phase A adds them.
- PRAG-M1-02's role mismatch: its measured segments are m2's core reading, so it belongs in optionalMedia for mod-prag-1 (recorded in the manifest; my learner-content repair_notes carry it).
- Band-code titles (m1-orientation: … m5-capstone: …) — clean titles supplied in deg-wol-pragmatism-learner-content.json.
- Missing locators (PRAG-M1-02/03, PRAG-M4-01/02/03 and the m3 set) — values in the manifest.
- PRAG-M1-02/03 listed both required and optional in mod-prag-1 with no distinct assignment — role values in the manifest.
- No wiki readings linked anywhere in the degree — open opportunity, owner decision.

## Verdict (provisional)

Design coverage: all three exit capabilities and the bounded-domain topics have
QC-passed design evidence; the Dewey-ethics elective is carried inside m4 by the
design's own statement, and the Rorty and process-thought electives are absent
from the built degree (routed as divergences, not silently judged). No category
(b) gap was found. Publication fidelity: the data block carries the design's
sources with the category-a losses itemized above, of which the unintegrated m3
readings are the most learner-visible. This verdict is PROVISIONAL at the same
trace level as the other matrices: the per-capability deep trace was not
re-derived beyond the scope's own mapping, and the learner audit reports 156
defects across the four degrees. All values needed to close the gaps are in
deg-wol-pragmatism-manifest.json and deg-wol-pragmatism-learner-content.json.

## Closure note (2026-10-26, deg-fix-content, checked at commit d7bd10a)

The structural-defect sections above were written against the integration
state of the morning of 2026-10-26 (the learner audit then reported 156
defects across the four degrees). As of commit d7bd10a the learner audit
reports **0 defects** (the four wiki_readings lines are ADVISORY, owner
decision pending - candidate inventory in
docs/degrees/integration/wiki-readings-option-evidence-1026a.md). The
category-a items this matrix lists were closed by the schema/text/integrate
lanes consuming the verified manifests and the learner-content files, and
were independently sampled by the deg-fix-content deep traces
(docs/degrees/verify/deg-*-deep-trace-1026a.md). The verdict above remains
PROVISIONAL for the per-capability deep trace (as stated). SCOPE NOTE
(2026-10-26): the learner audit's 0-defect result is a PRESENCE and
STRUCTURE check, not semantic assignment fidelity — this session's own
findings (PD-M2-04's stale whole-BODY figure, the PD-M1-07 m8 removal
error, the BUD-B2-02 word label) all passed that audit while being
wrong. Semantic fidelity is established only by the deep traces and the
schema-aware sweeps recorded in docs/degrees/verify/, and by the open
items in docs/degrees/integration/schema-lane-fix-list-1026a.md.

The m3 readings are integrated (PRAG-M3-02/03/04 published with the corrected
B1+B2/B3 assignment, verified this session); the Bernstein optional entry
follows the supervisor ruling. No open items.

## Addendum (2026-10-26, later same session)

A second deep trace was added for m3 (docs/degrees/verify/deg-wol-pragmatism-m3-deep-trace-1026a.md): PASS — all five mod-prag-3 sources match value-by-value across doc, manifest and published state, including the corrected B2/B3 structure and after the schema lane's ef654d0 reconciliation (which had transiently minted a PRAG-M3-05, since dropped). With m2 and m3 traced, the verdict's deep-trace reservation now covers m1, m4 and m5.

## Addendum 2 (2026-10-26, later same session)

Deep trace added for m4 (docs/degrees/verify/deg-wol-pragmatism-m4-deep-trace-1026a.md): PASS for PRAG-M4-02, M4-03 and the Bernstein optional entry; FAIL (open, routed) for PRAG-M4-01's locator - the schema lane applied this lane's retracted fix-list item 2 before the retraction landed, wrongly attributing the 476-word Human Nature and Conduct passage to How We Think. The reversal is fix-list item 2 (urgent). The manifest is correct; the error chain originated in this lane. With m2, m3 and m4 traced, the verdict's deep-trace reservation now covers m1 and m5.
