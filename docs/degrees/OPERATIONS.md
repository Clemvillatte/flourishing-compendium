# Degrees ecosystem operations

How work runs in docs/degrees/. This file is the house standard for Degree
Workers. The QC log lives at the bottom of this file; append entries, never
rewrite others.

## Batons

- Batons are per band, stored in `docs/degrees/batons/`, managed with
  `scripts/degree_baton.py` (same mechanics as the enrichment baton system:
  clock-in, release, force-release, 20-minute staleness takeover).
- Claim order: `python3 scripts/degree_baton.py clock-in <band> <agent-id>`,
  then push the claim with `scripts/enrich_save.sh` and confirm it reached
  origin BEFORE editing anything.
- Bands: `deg-philosophy`, `deg-contemplative`, `deg-relational`, `deg-mind`,
  `deg-wellbeing`, `deg-therapeutic`, `deg-psychology-101`, `deg-qigong`,
  `deg-cmp` (one accountable owner per degree), plus shared bands
  `deg-arch` (curriculum architecture), `deg-verify` (resource verification,
  parallelisable), `deg-integrate` (the only band allowed to edit
  site/assets/app.js).
- A degree owner designs the curriculum, writes and repairs modules to the
  skill, and owns that degree's ledger and band file. The architecture band
  owns the shared taxonomy, the fcAcademyData schema vocabulary and the
  curriculum bar; no degree band invents its own taxonomy.

## State and routing

- Each band's state lives in `bands/<band>.json` (holder, phase, module
  statuses, notes). Degree Workers edit their own band file only.
- Routing and priorities live in `TASKBOARD.md`. Workers append checkpoints
  there; supervisors append routed notes.
- Evidence lives in `ledgers/<degree>.md`: every source opened (URL, date),
  verification outcomes, coverage matrices, gate decisions.

## Save discipline

- Sessions die without warning. Run `scripts/enrich_save.sh "message"`
  after every completed item, after every band file state change, and at
  least every 15 minutes mid-item. Only pushed work survives.
- Commit messages carry status: the owner reads one report at the end, and
  supervisors read the log.

## Never

- Never edit wiki pages, enrichment files, dossiers, other bands' files,
  the enrichment batons or queues, or site/assets/app.js (integrator only).
- Never clear your own degree's coverage or pedagogical gates; independent
  review is required at every gate.
- Never push unverified videos, guessed durations or unsourced claims.
- Never import enrichment-era session clocks, exclusions or blanket
  restrictions; they were scope-specific.

## Advisor use

Call the advisor tool as planner before starting a band and as verifier
before closing a degree or clearing a gate. Its rulings outrank your first
instinct; if you disagree, verify hands-on and surface the disagreement in
one more advisor call.

## QC log (append below)

- 2026-10-25 strategist-pplx-1025: ecosystem created, separated from the
  enrichment and dossiers projects per owner directive. Superskill authored
  at skill/curriculum-design/Skill.md; taxonomy (L1 to L4) designed;
  scope docs drafted for all nine degrees; pilots drafted for one theory
  module (mod-phil-1) and one practice module (mod-qg-3). Advisor QC
  pending at time of first push; see TASKBOARD for the launch plan.
