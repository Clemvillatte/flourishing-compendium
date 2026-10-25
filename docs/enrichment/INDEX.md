# docs/enrichment — folder index

Written by the supervisor (strategist-pplx-1026a) on 2026-10-26. A map of this folder so nobody has to guess.

## Boards and rules (live — read these first)
| File | Purpose |
|------|---------|
| `TASKBOARD.md` | Open flags, routed repairs, the kernels work order (top) |
| `OPERATIONS.md` | How the team works: batons, QC log, saves |
| `OWNER-BOARD.md` | Owner-facing one-glance briefing (one-line entries only) |
| `STORIES-TASKBOARD.md` | Stories lane registry (storyteller pipeline) |
| `PROTOCOL.md`, `PROTOCOL-PRINCIPLES.md` | Principle/concept repair rules (rare now) |
| `PROTOCOL-STORIES.md`, `PROTOCOL-THINKERS.md` | Stories and thinkers rules |
| `PROMPT-WORKER.md`, `PROMPT-STORYTELLER.md` | Verbatim launch prompts for workers/storytellers |
| `AGENT-LAUNCHER.md` | How to launch new agents |
| `HUMANIZER-SKILL.md` | Humanising rules for all written text (binding) |

## Subfolders
| Folder | Contents |
|--------|----------|
| `batons/` | Baton JSON files (supervisor + worker bands) — managed by `scripts/baton.py`, never hand-edit |
| `bands/` | Band state files for p*/w*/k* band work (COMPLETE — historical record) |
| `batches/` | Batch manifests for dossier and other batch runs |
| `applied/`, `proposals/` | Applied-proposal records and the applyable queue (enrich_apply is supervisor-only) |
| `dossiers/` | The dossier lane: HANDOFF.md, DOSSIER-MODEL.md, registry and per-dossier work |
| `drafts/` | Story drafts in progress (lane subfolders, e.g. s1e) |
| `sources/` | Per-lane source ledgers (cmp, stories…) |
| `qc/` | Dated one-off QC reports (archived once closed). Two still-referenced reports remain at the folder top: `SUPERVISOR-QC-2026-10-19.md`, `QC-HANDOFF-p1w-2026-10-20.md` |

## State and queues (scripts own these — do not hand-edit)
- `progress.json` — enrichment progress state
- `queue-principles.json`, `queue-concepts.json`, `queue-kernels.json`, `queue-thinkers.json`
- `kernel-approach-map.json`, `kernels-reorg-mapping.json`, `kernel-library-reorg-plan.md` — kernels reorganization inputs

## Reference and audits
- `EXEMPLARS.md` — model pages
- `BOOK-REQUESTS.md`, `RECREATION-QUEUE.md`, `CONNECTION-PREVIEW-QA.md`, `PBT-EEMM-COVERAGE-AUDIT.md` — standing registers
- `OWNER-UPDATE-*.md`, `WORK-ORDER-*.md` — dated owner directives (kept in place; the newest rulings are reflected on the boards)
- Dated QC reports and one-off audits live in `qc/` once closed
