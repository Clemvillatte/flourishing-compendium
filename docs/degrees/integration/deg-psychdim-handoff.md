# deg-psychdim integration handoff spec (deg-integrate)

Written by `supervisor-pplx-1026e` (deg-integrate baton, 2026-10-26).
Purpose: make the Psychological Dimensions attachment to `fcAcademyData`
a mechanical execution job. This spec defines exactly what the data
package must contain, where every value comes from, and what checks gate
the push. The integrator executes this spec; the supervisor (owner
decision 7) flips `status: "complete"` after integration, never the
integrator.

State at handoff: all eight modules PASS module QC, whole-degree QC
PASS (review `deg-psychdim-whole-degree-qc-1026h.md`), whole-degree
gate PASS refreshed (review `deg-psychdim-whole-degree-gate-refresh-2026-10-26.md`,
verdict #5). The degree entry already exists in `fcAcademyData.degrees`
as a placeholder (`id: "deg-psychdim"`, `modules: []`). The remaining
work is the module data, the source entries, the splice, and the QA.

## 1. Where the values come from (no field is invented)

Every field below is extracted from an existing, QC-passed file. If a
value cannot be traced to one of these sources, STOP and flag it; do
not improvise.

### Module entries (`fcAcademyData.modules`, new keys `mod-pd-1`..`mod-pd-8`)

For each module `mN-<name>.md` in `docs/degrees/modules/deg-psychdim/`:

| fcAcademyData field | Source in the module markdown |
|---|---|
| `id` | `mod-pd-N` (N = 1..8, in the README route order) |
| `degree_id` | `"deg-psychdim"` |
| `title` | The module's human title from the README route table (e.g. "M4: Attentional" -> use the full title form "Attentional"; match the README's Central-capability row, not an invented short form) |
| `question` | The module's central question: the README route table's Central capability is the capability, NOT the question. Take the question from the module's `## Entry and outcomes` opening (each module states the question it exists to answer); if the module states no explicit question sentence, derive the shortest interrogative the outcomes section actually answers and flag it in the integration receipt |
| `description` | The module's level + capability from the README route table (e.g. "L2 - Interpret attentional phenomena, laboratory contrasts and training evidence cautiously.") |
| `outcomes` | The module's `## Entry and outcomes` / `## Outcomes` list, verbatim, one entry per bullet |
| `prerequisites` | The module's level placement from `## Level and placement` (m1: `[]`; m2-m7: the prior module's id per the README route; m8: all seven prior ids). Verify against each module's own placement section, do not assume |
| `requiredMedia` | The module's assigned core sources (the "video windows"/"core explanations"/assigned readings the module names in its instruction sections), each as `{"source_id": ..., "level": ...}` where the source_id is minted in section 2 below and the level is the module's level from the README |
| `optionalMedia` | The module's explicitly-optional wider material, same form; only sources the module itself marks optional |
| `activity` | The module's principal independent task: the final-task/independent-inquiry description from `## Independent analysis, transfer and exit` (or the module's equivalent final section), compressed to the sentence the page will serve |
| `rubric` | The module's `## Rubric (observable criteria)` criterion names, one per row, verbatim from the criterion column |
| `durationHours` | The module's estimated minutes from the README route table, converted to hours rounded to the nearest quarter (249 -> 4.25; 304 -> 5; 290 -> 4.75; 265 -> 4.5; 315 -> 5.25; 271 -> 4.5; 301 -> 5; 375 -> 6.25). Cross-check each against the module's `## Workload arithmetic` section |
| `difficulty` | The module's level from the README (L1/L2/L2-L3/L4), expressed as the page's existing difficulty vocabulary (check what mod-phil-1 uses and match) |
| `gaps` | `[]` (the QC-passed modules have no open gaps) |

### Degree entry (`fcAcademyData.degrees`, key `deg-psychdim`)

Update the existing placeholder only:

- `modules`: `["mod-pd-1", ..., "mod-pd-8"]`
- `status`: leave `"in-development"` (the supervisor flips it to
  `"complete"` after the integration passes QA - owner decision 7)
- `description` / `title` / `icon` / `openingNote`: keep the placeholder
  values; the `openingNote` may be set from the README's "How the degree
  works" opening sentence only if the page requires it

## 2. Source entries (`fcAcademyData.sources`)

Every source a module assigns (required or optional) must exist in the
sources array. Mint source ids as `PD-M<N>-<seq>` (e.g. `PD-M4-01`),
per module, in the order the module names them.

For each source entry, the field values come from these verified
carriers - never from memory:

| Field | Carrier |
|---|---|
| `youtube_id_or_url` / `canonical_url` | The exact URL the module markdown links (the assigned window link's base URL, not the timestamped variant) |
| `title` | The recording/page title as printed on the opened page (the verify receipts record these) |
| `presenter` | The instructor's name as established on a biography/institutional page per skill section 4 - the verify receipts (`docs/degrees/verify/deg-psychdim-*`) record the credential evidence |
| `host` | The publishing institution/channel as printed on the page |
| `duration` | The source's printed duration if the page prints one; empty string otherwise (the existing schema uses `""` freely) |
| `topic_ids` | The module's dimension code (map each module to its EEMM dimension: M2 affective, M3 cognitive, M4 attentional, M5 self, M6 motivational, M7 overt-behavioural; M1 and M8 use the degree-level code - check the existing `topicMappings` for the right id form and reuse it) |
| `level` | The module's level (L1/L2/L2-L3/L4) |
| `mission` | `"deg-psychdim"` |
| `verification_status` | `"verified"` for sources whose verify receipt exists and passes; the exact receipt filename goes in `gate_evidence` |
| `gate_evidence` | The verify receipt filename + one-line note (e.g. "verify/deg-psychdim-m4-m5-indexed-window-evidence-2874787d.md; exact-window coverage") |

The per-source verification metadata lives in:
`docs/degrees/verify/deg-psychdim-*.md` (per-module video audits,
source crosschecks, window evidence), and the degree ledger
`docs/degrees/ledgers/deg-psychdim.md` (source matrix v3 + verification
log). If a source the module assigns has NO verify receipt, do not
fabricate a status - flag it to the supervisor in the integration
receipt and leave that entry out of the splice until it is resolved.

## 3. The splice (recipe per INTEGRATION.md)

1. Build the data package first as a standalone JSON file
   (`docs/degrees/integration/deg-psychdim-data.json`) containing
   `{"degree": {...}, "modules": {...}, "sources": [...]}` and validate
   it in isolation (json.loads, referential checks below) BEFORE
   touching app.js.
2. Splice into `site/assets/app.js` with the safe-splice recipe: read
   the `window.fcAcademyData = {...};` single line, split it out, load
   it, apply the package (append sources, add module keys, update the
   degree entry), re-serialize with the same compact separators the
   file already uses, and write the line back. Do not pretty-print or
   reorder the rest of the file.
3. `node --check site/assets/app.js` must pass.
4. Referential validation (write a small script, keep it in
   `docs/degrees/integration/`): every `requiredMedia`/`optionalMedia`
   `source_id` resolves in sources; every module key referenced by the
   degree exists; no module references a source id that is absent; the
   degree's module count is 8; module minutes sum to 2,370.
5. Run the existing test suites (the repo's suites - check
   `docs/enrichment/OPERATIONS.md` and the scripts directory for the
   canonical test entry points) plus the deploy QA per INTEGRATION.md
   (fetch the Pages URL with a cache-bust after push).

## 4. Hard rules

- NO partial degree: all 8 modules and all their assigned sources land
  in one splice, or none. If the data package cannot be completed,
  push the package file and the gap list, not a half-spliced app.js.
- The integrator does NOT flip `status` to `"complete"` - that is the
  supervisor's publication sign-off (owner decision 7).
- No paywalled source may enter the array; every route the modules
  assign is free (this was gate-verified; preserve it).
- Every string value must be traceable to the module markdown, a
  verify receipt, or the ledger. Anything else is a flag, not a guess.
- Push via `scripts/enrich_save.sh` with a commit message that names
  the degree and the splice; append one OWNER-BOARD line.
