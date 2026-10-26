# deg-wol-pragmatism integration handoff spec (deg-integrate)

Written by `supervisor-pplx-1026e` (supervisor baton, deg-wol-pragmatism
lane, 2026-10-26 ~08:04Z). Purpose: make the Pragmatism attachment to
`fcAcademyData` a mechanical execution job. This spec defines exactly
what the data package must contain, where every value comes from, and
what checks gate the push. The integrator executes this spec; the
supervisor flips `status: "complete"` after integration, never the
integrator (owner decision 7, the psychdim precedent).

State at handoff: all five modules PASS module QC (reviews
`deg-wol-pragmatism-m{1..5}-supervisor-1026e.md`), the m4 Bernstein
ruling applied (optional further viewing, orientation only), the m1-m5
STATUS comment repair applied (receipt
`verify/deg-wol-pragmatism-m1-m5-status-repair-1026e.md`; current
hashes m1 030c89f8, m2 a3b098b6, m3 463b679b, m4 8708bb51, m5
48cd0d29), whole-degree QC PASS (review
`deg-wol-pragmatism-whole-degree-qc-1026e.md`; band qc_complete). The
degree entry already exists in `fcAcademyData.degrees` as a
placeholder (`id: "deg-wol-pragmatism"`, `modules: []`, status
`in-development`). PREREQUISITE still open: the independent
whole-degree gate review (deg-gate lane, scope/centering) — the
integrator attaches only after that verdict lands.

## 1. Where the values come from (no field is invented)

Every field below is extracted from an existing, QC-passed file. If a
value cannot be traced to one of these sources, STOP and flag it; do
not improvise.

### Module entries (`fcAcademyData.modules`, new keys `mod-prag-1`..`mod-prag-5`)

For each module `mN-<name>.md` in `docs/degrees/modules/deg-wol-pragmatism/`:

| fcAcademyData field | Source in the module markdown |
|---|---|
| `id` | `mod-prag-N` (N = 1..5, the module's own number) |
| `degree_id` | `"deg-wol-pragmatism"` |
| `title` | The module's human title from its `# mN-<name>:` heading (the part after the colon, e.g. "What Pragmatism Is", "Belief and Doubt", "Truth and the Will to Believe", "Dewey: Inquiry, Ethics, Democracy", "The Method on One Live Belief") |
| `question` | The module's central question from its opening paragraph (each module's intro states the question it exists to answer; m1: what it means to treat your beliefs as instruments you test in experience; if a module states no explicit interrogative, derive the shortest question the outcomes section answers and flag it in the integration receipt |
| `description` | The module's level + role from `## Level and placement` (e.g. "L1 Orientation. Entry module of the walk; no prerequisites.") |
| `outcomes` | The module's `## Outcomes` list, verbatim, one entry per bullet |
| `prerequisites` | The module's level placement: m1 `[]`; m2 the m1 exits (verify each module's own placement section — m2's prerequisites are the m1 exits, m3's the m2 exits, m4's the m3 exits, m5's the m4 exits); use the prior module's `mod-prag-N` id |
| `requiredMedia` | The module's assigned core sources (the required viewing/reading the module names in its instruction sections), each as `{"source_id": ..., "level": ...}` where the source_id is minted in section 2 below and the level is the module's level (L1/L2/L3/L4) |
| `optionalMedia` | Only sources the module itself marks optional: m1's optional further reading (the rest of Peirce's essay; the James and Dewey texts) and m4's Bernstein lecture (optional further viewing, orientation only, per the supervisor ruling — it is NOT an assigned source and carries no outcome) |
| `activity` | The module's principal independent task from its final/independent section (the capstone's deliverables description for m5), compressed to the sentence the page will serve |
| `rubric` | The module's `## Rubric` criterion names, one per row, verbatim from the criterion column |
| `durationHours` | The module's total minutes from its `## Workload arithmetic` section, converted to hours rounded to the nearest quarter: m1 170 -> 2.75; m2 225 -> 3.75; m3 257 -> 4.25; m4 178 -> 3; m5 310 -> 5.25. Cross-check each against the whole-degree QC's packet arithmetic (1,140 minutes = 19 h) |
| `difficulty` | The module's level from `## Level and placement` (L1/L2/L3/L4), expressed as the page's existing difficulty vocabulary (check what mod-pd-1 uses and match) |
| `gaps` | `[]` (the QC-passed modules have no open gaps) |

### Degree entry (`fcAcademyData.degrees`, key `deg-wol-pragmatism`)

Update the existing placeholder only:

- `modules`: `["mod-prag-1", ..., "mod-prag-5"]`
- `status`: leave `"in-development"` (the supervisor flips it to
  `"complete"` after the QA receipt — the psychdim flip precedent,
  `verify/deg-psychdim-publication-flip-1026e.md`)
- `description`: consider replacing the placeholder description with
  the degree's own framing from m1's opening (one question through
  five modules: what does it mean to treat your beliefs as
  instruments you test in experience, and what does that change about
  how you live when you feel uncertain or overwhelmed?) — flag the
  exact wording in the integration receipt for the supervisor's
  confirmation rather than inventing it

## 2. Source entries (`fcAcademyData.sources`)

Mint source_ids for the assigned sources only (the optional material
goes in `optionalMedia` referencing these ids). Follow the psychdim
precedent's source-entry form (`source_id`, `youtube_id_or_url`,
`canonical_url`, `title`, `presenter`, `host`, `duration`, `topic_ids`,
`level`, `mission`, `verification_status`, `gate_evidence`):

- The m1 Philosophy Talk episode "American Pragmatism" (YouTube
  ksLO4i5pIBM, 49:24; verified by the supervisor's indexed-transcript
  route; `verification_status` reflects the receipt in the degree
  ledger).
- The m3 Misak lecture (YouTube c_Nxr3ZQxqA, 51:57 per the platform
  listing; same verification basis).
- The m4 assigned readings (Dewey: How We Think, Human Nature and
  Conduct, The Public and Its Problems — Project Gutenberg public
  domain; text sources, not YouTube — use the canonical_url form the
  existing text sources in the data use).
- The m1/m2/m3 primary texts (Peirce's The Fixation of Belief, How to
  Make Our Ideas Clear; James's Lecture VI and the free-will exercise
  — Wikisource/public domain).
- The m4 Bernstein lecture (YouTube H_G73CAI5Hc, 57:04) is OPTIONAL
  ONLY: if included at all, it goes in m4's `optionalMedia` with the
  ruling's orientation-only framing, never in `requiredMedia`.

Every source's `verification_status` and `gate_evidence` must reflect
what the receipts in `docs/degrees/ledgers/deg-wol-pragmatism.md` and
`docs/degrees/verify/` actually establish — no inherited or summary
labels.

## 3. The splice and the QA

Same as the psychdim handoff: append the module entries, add the
source entries, update the degree placeholder's `modules` array, run
the site's existing checks, verify the degree page renders with all
five modules in order and their sources resolvable, then write the
integration receipt under `docs/degrees/verify/` naming the commit
hash and what was checked. The supervisor does the publication flip
(`status: "complete"` + the live-site verification) after reviewing
the receipt.

## 4. Open prerequisite (flagged, not blocking the spec)

The independent whole-degree gate review (deg-gate lane) has not yet
been issued for pragmatism. The chain per the wave-4 engine flow is
whole-degree QC -> gate review -> integration -> flip. The integrator
should attach only after that verdict lands; if the gate review
returns findings, the repairs route back through the supervisor lane
(me) before the attachment.
