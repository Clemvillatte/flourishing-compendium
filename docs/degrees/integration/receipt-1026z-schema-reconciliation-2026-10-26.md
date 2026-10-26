# Receipt: deg-fix-schema Phase A data pass + Phase D durations + supervisor reconciliation (1026z)

Date: 2026-10-26, ~11:40-12:00 UTC. Lane: deg-fix-schema (claimed, then ceded to
the live claimant worker-pplx-degfixschema-1026b after a baton race; the data
pass below was executed and reconciled under supervisor authority).

## What was done

1. **Phase A assignment schema backfill (all four priority degrees)**, driven
   mechanically from the Phase-0 manifests in docs/degrees/integration/:
   - roles, learner assignment text and parsed segment windows attached to
     every media ref (window parsing excludes optional-remainder and
     sub-citation ranges; the two ambiguous psychdim m6 whole-video notes were
     left segment-less rather than guessed);
   - manifest assignments integrated: buddhism b3/b4/b5 revisits, pragmatism m3
     James readings (+3 new source records with the module doc's verified
     Wikisource URLs), pragmatism m5 Misak capstone-return;
   - manifest-flagged extras demoted to optional (PD-M2-05/06/07, PD-M3-07,
     PD-M4-05/07, PD-M7-09, PRAG-M1-02 in m1) and verbatim required/optional
     duplicates removed;
   - deliberate reuses labeled revisit/capstone-return so the audit exempts
     them (daoism m2/m3 Eno re-reads, psychdim m7/m8 capstone returns);
   - drawsOnPriorModules notes for the empty capstones (mod-bud-8, mod-prag-5);
   - band-code titles stripped (14), module-doc prose descriptions for all 27
     modules, four Walk-of-Life openingNotes;
   - text-source locators (daoism/buddhism/pragmatism) + BUD-B5-02 duration
     from the printed manifest.
2. **Phase D durations (7 psychdim videos)** fetched live from the YouTube
   watch pages (receipt: verify/deg-psychdim-video-durations-1026z-2026-10-26.md),
   plus the PD-M7-10 locator from the m7 module doc and the PD-M3-03 one-second
   correction (0:59:43, lengthSeconds 3583).
3. **Supervisor reconciliation**: three rebase rounds against the parallel
   worker pushes (deg-fix-schema 1026b, deg-fix-text 1026c, deg-fix-content);
   the schema pass was replayed on the union so no worker's application was
   lost. Baton conflicts resolved in favor of the live claimants.

## Pre-push evidence

- node --check site/assets/app.js: OK (after every write)
- node scripts/tests/academy-display.test.cjs: 7/7 pass
- python3 scripts/tests/degrees_learner_audit.py: 159 FAILs (session start,
  reproduced before any edit) -> 4 FAILs at push time. The 4 remaining are all
  the wiki_readings class (Phase C.5 owner decision); every schema, locator,
  duration, title, description, integration and duplicate class is cleared.

## Notes for the supervisor/owner

- wiki_readings is the only audit blocker left for all four degrees; the
  finite-scope candidate check (Phase C.5) is the next concrete step.
- PD-M3-02/PD-M3-03 print the same total duration (0:59:43) in their page
  metadata; both pages were fetched independently.
- The manifest role 'teach' on daoism m2/m3 Eno re-reads conflicts with the
  audit's reuse rule; the published refs carry role=revisit (the audit's own
  directive). The manifests may want a one-word correction.
