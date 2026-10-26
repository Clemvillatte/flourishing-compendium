# deg-wol-buddhism integration handoff spec (deg-integrate)

Written by `supervisor-pplx-1026e` (supervisor baton, 2026-10-26
~08:04Z). Purpose: make the Buddhism attachment to `fcAcademyData` a
mechanical execution job. The integrator executes this spec; the
supervisor flips `status: "complete"` after integration, never the
integrator (owner decision 7, the psychdim precedent).

State at handoff: all nine modules PASS module QC (the buddhism
lane's supervisor reviews, receipts in `docs/degrees/reviews/` and the
degree ledger), whole-degree QC PASS (review
`deg-wol-buddhism-whole-degree-qc-1026h.md`), whole-degree GATE PASS
(commit f90b31d98: "deg-gate checkpoint: deg-wol-buddhism GATE PASS at
current hashes, cleared for deg-integrate"). Band qc_complete. The
b4 caption-route receipt (`verify/deg-wol-buddhism-b4-caption-route-1026e.md`)
closed the b4 content coverage. The degree entry exists in
`fcAcademyData.degrees` as a placeholder — verify its current state
before the splice (the psychdim placeholder pattern: `modules: []`,
status `in-development`).

## 1. Where the values come from (no field is invented)

Every field below is extracted from an existing, QC-passed file. If a
value cannot be traced to one of these sources, STOP and flag it; do
not improvise.

### Module entries (`fcAcademyData.modules`, new keys `mod-bud-1`..`mod-bud-9`)

For each module `bN-<name>.md` in `docs/degrees/modules/deg-wol-buddhism/`
(N = 1..9; b9 is the elective, placed last per the module's own
placement):

| fcAcademyData field | Source in the module markdown |
|---|---|
| `id` | `mod-bud-N` |
| `degree_id` | `"deg-wol-buddhism"` |
| `title` | The module's human title from its `# bN-<name>:` heading |
| `question` | The module's central question from its opening paragraph; if no explicit interrogative, derive the shortest question the outcomes section answers and flag it in the integration receipt |
| `description` | The module's level + role from its `## Level and placement` |
| `outcomes` | The module's `## Outcomes` list, verbatim |
| `prerequisites` | The module's own placement section (b1 `[]`; b2-b8 the prior module's exits; b9 the elective's stated prerequisites); use the prior module's `mod-bud-N` id |
| `requiredMedia` | The module's assigned core sources (the measured media segments and primary texts its instruction sections assign), each as `{"source_id": ..., "level": ...}` |
| `optionalMedia` | Only sources the module itself marks optional |
| `activity` | The module's principal independent task, compressed to the sentence the page will serve |
| `rubric` | The module's rubric criterion names, verbatim |
| `durationHours` | The module's total from its `## Workload arithmetic` section, converted to hours rounded to the nearest quarter: b1 265 -> 4.5; b2 205 -> 3.5; b3 145 -> 2.5; b4 130 -> 2.25; b5 230 -> 3.75; b6 298 -> 5; b7 207 -> 3.5; b8 720 -> 12; b9 160 -> 2.75. Packet total 2,360 minutes = 39 h 20 m — cross-check against the whole-degree QC |
| `difficulty` | The module's level, expressed as the page's existing difficulty vocabulary (check what mod-pd-1 uses and match) |
| `gaps` | `[]` |

### Degree entry (`fcAcademyData.degrees`, key `deg-wol-buddhism`)

Update the existing placeholder only: `modules` the nine `mod-bud-N`
ids in order; `status` stays `"in-development"` until the supervisor
flips it.

## 2. Source entries (`fcAcademyData.sources`)

Mint source_ids for the assigned sources. The buddhism degree's
verified recordings (the Ajahn Brahmali/Dhammadipa segments, the b4
mirror route, the Thai Forest and Zen material per each module's
`## Sources (verification status)` table) go in with
`verification_status` and `gate_evidence` reflecting what the receipts
in `docs/degrees/ledgers/deg-wol-buddhism.md` and
`docs/degrees/verify/` actually establish — no inherited or summary
labels. The b4 caption route (the Polish mirror ueW9-3NNo_g of the
same Brahmali recording dyUCvFlDL8w) follows its receipt. Primary
texts (Pali canon excerpts, the Metta Sutta, the Thai Forest sources)
use the canonical_url form the existing text sources use.

## 3. The splice and the QA

Same as the psychdim handoff: append the module entries, add the
source entries, update the degree placeholder's `modules` array, run
the site's existing checks, verify the degree page renders with all
nine modules in order and their sources resolvable, then write the
integration receipt under `docs/degrees/verify/` naming the commit
hash and what was checked. The supervisor does the publication flip
after reviewing the receipt.

## 4. Prerequisite state (CORRECTED 2026-10-26 ~08:06Z)

CORRECTION: the earlier buddhism GATE PASS was WITHDRAWN (commit
7de086970, deg-gate verdict re-scoped per advisor QC round 2: the
buddhism gate refresh is INCOMPLETE — the centering delta chain was
not inspected against the set-gate baseline, and a b4 addendum is
also owed; the earlier PASS-for-eight is withdrawn). The buddhism
chain is therefore NOT complete through the gate: the independent
whole-degree gate review (or the completion of the withdrawn refresh
plus the b4 addendum) is an OPEN PREREQUISITE. The integrator
attaches only after the deg-gate lane issues a complete gate
verdict; if findings return, the repairs route back through the
buddhism supervisor lane before the attachment.
