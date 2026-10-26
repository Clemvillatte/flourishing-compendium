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

## Link and player checks (2026-10-26, about T+36)
- All 93 distinct source URLs assigned in the four degrees were requested: 91 returned 200; BUD-B3-02 (bswa.org) returned 202 and BUD-B3-03 (plumvillage.org) returned 403 to an automated request (a bot block, not a dead page; confirm in a browser).
- All 38 YouTube videos answered the platform's public embed lookup, so each is public and embeddable in the in-page player.

## Learner-text polish in this pass
- Module list heading now reads Reading list, Viewing list, or Viewing and reading list according to what the module assigns.
- Daoism and pragmatism activity lines no longer use em dashes; psychdim m3, m4, m5 activity lines expand RNT, ANT and SCCS on first use (expansions taken from the module docs and the source titles).
- Degree descriptions for Daoism and pragmatism are plain-language one-sentence summaries; the owner-written Buddhism and psychdim descriptions were left unchanged (psychdim still contains "PBT EEMM").

## Later in the pass (about T+47)
- Completion labels follow the source type: Mark as read and Read for readings, Mark as watched and Watched for videos; the degree progress chip says watched, read, or done. The rendered pass now fails if the reading-only pragmatism degree says watched.
- The tab title now follows the academy view (flagged by deg-integrate).
- Registry locators BUD-B2-02 (about 1,000 words) and BUD-B2-03 (about 30 words) corrected, as measured and recorded in docs/degrees/verify/deg-fix-text-count-corrections-1026c.md.
- Buddhism openingNote no longer repeats the degree description.
- Live check at about T+47: the published site's app.js carries the new list headings and the Mark as read label.
- Full suite at this point: node tests (display 7, randomizer 9, routes, legacy access, storage search, baseline errors, image network, optional stats) and Python tests (academy migration, conflict markers, learner audit, phase A splice, storage adapter) all pass; learner audit and rendered pass report 0 defects.
- Re-check at about T+50: the live site's app.js is byte-identical to origin/main; re-running the apply script for all four degrees produces no diff; all 96 segment start and end times in the four degrees appear in the module docs.
