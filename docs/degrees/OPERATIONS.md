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
  `deg-wellbeing`, `deg-therapeutic`, `deg-psychology-101` (one
  accountable owner per degree; the qigong and cmp practica have their own
  ecosystem in docs/practicum/), plus shared bands
  `deg-arch` (curriculum architecture), `deg-verify-a` and `deg-verify-b`
  (resource verification, two parallel batons with non-overlapping
  manifests; they write only to `docs/degrees/verify/` evidence files,
  which degree owners consume), `deg-integrate` (the only band allowed to
  edit site/assets/app.js).
- Precedence: owner directives and the Phase 0 stop-gate outrank every
  document in this ecosystem, including the skill. Conflicts are flagged
  in commit messages, never resolved silently.
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
  at skill/curriculum-design/Skill.md (research grounding recorded in
  ledgers/design-research.md); taxonomy (L1 to L4) designed; scope docs
  drafted as proposals for all nine degrees; pilots drafted for one theory
  module (mod-phil-1) and one practice module (mod-qg-3).
- 2026-10-25 strategist-pplx-1025, advisor QC round 1 APPLIED: pilots marked
  DRAFT NOT CLEARED with open items recorded in each; the practice pilot's
  wrong "imported" claim about QG-M03-01 corrected to verified-video (5
  min, YoQi VOD free trial, from fcAcademyData); the practice pilot's
  schedule made explicit and summed (11-rung ladder, 3 sessions a week,
  about 5.5 hours standing); verification queue recount from measured
  attachment data (philosophy 39 attachments, 36 unique, and so on);
  verifier batons split into deg-verify-a and deg-verify-b with
  non-overlapping manifests and verifier-owned evidence files; precedence
  rewritten so owner directives outrank the skill; legacy level-label
  mappings downgraded to migration hints; scope docs marked as proposals
  pending benchmarking by degree owners. Open items carried forward:
  Sandel episode content verification (deg-verify Block A), gallery tier
  selection for mod-qg-3 (deg-verify), workload-rule research grounding
  (deg-arch), capstone research grounding (deg-arch), skill-format validator
  pass on the skill file (platform convention, not blocking in-repo use).
- 2026-10-25 strategist-pplx-1025, OWNER DIRECTIVES APPLIED: (1) qigong and
  cmp are NOT degrees; moved to docs/practicum/ (own README, bands
  practicum-qigong and practicum-cmp, batons via FC_BATON_DIR, scope docs
  moved and annotated). A schema migration (degree-versus-practicum kind
  plus a PRACTICUM site section) is queued for the integrator band; data
  ids unchanged until then. (2) deg-psychology-101 scope and
  OWNER-DECISIONS item 1 updated: the module bridges to the owner-built
  Psychology Lab (interactive gamified site teaching Weiten and Gurung,
  Themes and Variations 12e; coverage map, 411 missions, spaced
  repetition, per the fcAcademyData record checked this session); the
  rebuild/bridge/retire choice stays with the owner.
