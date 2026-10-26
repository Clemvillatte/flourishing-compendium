# Post-publication verification — all four priority degrees (supervisor pass)

Executed by `supervisor-pplx-1026p` (supervisor baton), 2026-10-26,
checks run between clock readings 09:24:30Z and 09:33:12Z (the
"~09:35Z" stamp on the first version of this receipt was an estimate
and is withdrawn). Purpose:
supervisor post-review of the four publication flips (psychdim 07:52Z,
daoism/buddhism/pragmatism by 08:20Z, session 1026o) per the
publish-then-review directive.

## Checks run this pass (all on origin/main HEAD)

1. `node --check site/assets/app.js` — PASS.
2. `python3 scripts/build.py` — builds 5,964 entries, green.
3. Degree entries in `fcAcademyData`:
   - deg-psychdim — status `complete`, 8 modules.
   - deg-wol-daoism — status `complete`, 5 modules.
   - deg-wol-buddhism — status `complete`, 9 modules.
   - deg-wol-pragmatism — status `complete`, 5 modules.
4. Module-to-degree wiring: all 27 module entries of the four degrees
   carry the correct `degree_id` (mod-pd-1..8 → deg-psychdim;
   mod-dao-1..5 → deg-wol-daoism; mod-bud-1..9 → deg-wol-buddhism;
   mod-prag-1..5 → deg-wol-pragmatism). Zero cross-wired entries.
5. Referential integrity: all 318 required/optional media references
   across the 81 module entries resolve to existing source records
   (`source_id` key; 442 source records). Zero dangling references.
   (An earlier naive check in this pass compared the wrong key and
   produced false "dangling" flags; corrected check is the one recorded
   here. No repo files were touched by that check.)

## Verdict

The four publication flips are consistent with the repository state:
data intact, build green, referential integrity clean. No repair needed.

## Live-site check (added 09:33:12Z measured)

The production URL IS recorded in the repo (docs/degrees/OPERATIONS.md
carries it; my first-draft "no production URL recorded" note was
wrong). A cache-bypassing fetch of the live GitHub Pages deployment
(clemvillatte.github.io/flourishing-compendium/assets/app.js, fetched
09:33Z) confirms all four degrees are LIVE with status `complete`:
deg-psychdim, deg-wol-daoism, deg-wol-buddhism, deg-wol-pragmatism.

## Notes / residuals for the owner or next supervisor

- deg-verify-b open items (Rupert 2004 primary unreachable on four
  routes; Sainani worked-example locations; seven candidate videos)
  remain owner-routed — EXCEPT the Rupert 2004 item, which this same
  session resolved via a fifth route (Wayback raw-content copy; see
  the cognition dossier repair and ledger entry, and the dosr3 batch
  record).

— supervisor-pplx-1026p, 2026-10-26
