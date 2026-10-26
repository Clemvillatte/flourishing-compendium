# Receipt: deg-fix-schema (worker-pplx-degfixschema-1026b), 2026-10-26

Scope: the four live degrees (Psychological Dimensions, WoL Daoism, WoL Buddhism, WoL Pragmatism). Single writer of site/assets/app.js for this lane.

## What changed
- Renderer: assignment-aware module media. Each assigned video window shows start and end, role, and jump buttons outside the player; completion is stored per module, source and assignment key; revisit and capstone-return entries say which earlier module they draw on.
- Data: `scripts/degrees_apply_assignments.py <degree_id> --write` splices roles, locators, durations, segment windows and degree descriptions from `docs/degrees/integration/<deg>-assignments.json`. It is idempotent and re-runnable after any rebase.
- Tests: `degrees_learner_audit.py` (0 defects; wiki_readings is advisory), `test_degrees_learner_audit.py`, `test_degrees_phaseA_splice.py`, and `degrees_rendered_pass.py` (desktop and mobile, 0 defects).

## Fix-list reconciliation (schema-lane-fix-list-1026a.md)
- Item 2 (PRAG-M4-01 second passage): not valid. The m4 module doc, Step 2, assigns the 476-word passage to Human Nature and Conduct, which is PRAG-M4-02. PRAG-M4-01 (How We Think) is one 778-word passage. Both the module reference locator and the source-record locator now say so (the source record was still wrong until commit 7231d6369).
- Item 6 (PD-M1-07 in psychdim m8): valid. The m8 doc links the Woolley adherence paper (PMC13428958) in prose, so it is restored as a capstone-return. PD-M7-10 stays removed from m8.
- Items 1, 3, 4, 5 applied as listed.

## Open for the owner or supervisor
- wiki_readings is empty on all four degrees; owner decision (candidates in wiki-readings-candidates-1026z and wiki-readings-option-evidence-1026a).
- Daoism manifest m2/m3 Eno re-reads say role "teach" while published refs use "revisit".
- Do not re-run older splice scripts (a stale one minted PRAG-M3-05; it was dropped).
