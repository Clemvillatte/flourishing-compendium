# deg-wol-daoism integration handoff spec (deg-integrate)

Written by `supervisor-pplx-1026e` (supervisor baton, 2026-10-26
~08:05Z). Purpose: make the Daoism attachment to `fcAcademyData` a
mechanical execution job. The integrator executes this spec; the
supervisor flips `status: "complete"` after integration, never the
integrator (owner decision 7, the psychdim precedent).

State at handoff: all five modules PASS module QC (the daoism lane's
supervisor reviews, 1026a), whole-degree QC PASS with the addendum's
conditional SATISFIED (the m1/m4 delta confirmations,
`verify/deg-wol-daoism-m1-m4-delta-confirm-1026e.md`: m1 e8e202ff and
m4-yangsheng-neiye f6552c8d both recomputed and matched), band
qc_complete. The assigned m4 is `m4-yangsheng-neiye.md` (the
`m4-yangsheng-nourishing-life.md` file is the superseded draft per
the addendum's Neiye-source correction — do not attach it). The degree
entry exists in `fcAcademyData.degrees` as a placeholder — verify its
current state before the splice. PREREQUISITE CLOSED (2026-10-26,
1026h's taskboard update): the independent whole-degree gate review
has LANDED — DAOISM WHOLE-DEGREE GATE PASS (gate-pplx-1026h, deg-gate
baton, reviews/deg-wol-daoism-whole-degree-gate-1026h.md): all five
canonical hashes verified, the m4 one-word delta diff-confirmed
(2618 to 2656), the Neiye source fetch-verified (Gutenberg #38585,
Linnell, CC BY-NC-ND 3.0, free), centering/scope checked
independently of the 1026a QC. Daoism proceeds to deg-integrate; the
publication flip is the supervisor's sign-off. No open prerequisite —
the integrator can attach on this spec directly.

## 1. Where the values come from (no field is invented)

Every field below is extracted from an existing, QC-passed file. If a
value cannot be traced to one of these sources, STOP and flag it; do
not improvise.

### Module entries (`fcAcademyData.modules`, new keys `mod-dao-1`..`mod-dao-5`)

For each module `mN-<name>.md` in `docs/degrees/modules/deg-wol-daoism/`
(the assigned m4 is m4-yangsheng-neiye.md):

| fcAcademyData field | Source in the module markdown |
|---|---|
| `id` | `mod-dao-N` (N = 1..5) |
| `degree_id` | `"deg-wol-daoism"` |
| `title` | The module's human title from its `# mN-<name>:` heading |
| `question` | The module's central question from its opening paragraph; if no explicit interrogative, derive the shortest question the outcomes section answers and flag it in the integration receipt |
| `description` | The module's level + role from its `## Level and placement` |
| `outcomes` | The module's `## Outcomes` list, verbatim |
| `prerequisites` | The module's own placement section (m1 `[]`; m2-m5 the prior module's exits); use the prior module's `mod-dao-N` id |
| `requiredMedia` | The module's assigned core sources, each as `{"source_id": ..., "level": ...}` |
| `optionalMedia` | Only sources the module itself marks optional |
| `activity` | The module's principal independent task, compressed to the sentence the page will serve |
| `rubric` | The module's rubric criterion names, verbatim |
| `durationHours` | The module's total from its `## Workload arithmetic` section, converted to hours rounded to the nearest quarter: m1 ~3 h, m2 ~2 h, m3 ~2 h, m4 ~2 h, m5 ~3 h (packet total ~12 h — extract the precise minutes from each module's workload section and cross-check against the whole-degree QC addendum's count reconciliation, the m4 measured 2657) |
| `difficulty` | The module's level, expressed as the page's existing difficulty vocabulary (check what mod-pd-1 uses and match) |
| `gaps` | `[]` |

### Degree entry (`fcAcademyData.degrees`, key `deg-wol-daoism`)

Update the existing placeholder only: `modules` the five `mod-dao-N`
ids in order; `status` stays `"in-development"` until the supervisor
flips it.

## 2. Source entries (`fcAcademyData.sources`)

Mint source_ids for the assigned sources. The daoism degree's verified
recordings and texts (the Daodejing/Zhuangzi/Neiye material per each
module's sources section) go in with `verification_status` and
`gate_evidence` reflecting what the receipts in
`docs/degrees/ledgers/deg-wol-daoism.md` and `docs/degrees/verify/`
actually establish — no inherited or summary labels. The m4 whole-talk
ruling (`reviews/deg-wol-daoism-m4-whole-talk-ruling-1026e.md`: the
required watch 0:00-26:22, the 26:22-53:43 optional) follows its
receipt — the optional segment goes in `optionalMedia`, never
`requiredMedia`.

## 3. The splice and the QA

Same as the psychdim/pragmatism/buddhism handoffs: append the module
entries, add the source entries, update the degree placeholder's
`modules` array, run the site's existing checks, verify the degree
page renders with all five modules in order and their sources
resolvable, then write the integration receipt under
`docs/degrees/verify/` naming the commit hash and what was checked.
The supervisor does the publication flip after reviewing the receipt.

## 4. Prerequisite state (updated 2026-10-26 ~08:03Z)

The independent whole-degree gate review has LANDED (see the
preamble): DAOISM WHOLE-DEGREE GATE PASS, reviews/deg-wol-daoism-
whole-degree-gate-1026h.md. The chain is complete through the gate —
whole-degree QC PASS + conditional satisfied + gate PASS. The
integrator can attach on this spec directly; if the attachment or the
QA surfaces findings, the repairs route back through the daoism
supervisor lane (1026a) before the flip.
