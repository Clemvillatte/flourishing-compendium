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
- Bands: the owner's 2026-10-25 degree list (`deg-psychdim`,
  `deg-wol-daoism`, `deg-wol-buddhism`, `deg-wol-greek`,
  `deg-wol-pragmatism`, `deg-wol-existentialism`, `deg-wol-positive`;
  one accountable owner per degree; legacy degree bands are raw material
  only; the practica and the psychology-101 bridge live in
  docs/practicum/), plus shared bands
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
- 2026-10-25 strategist-pplx-1025, OWNER DIRECTIVES APPLIED (round 2):
  new seven-degree list written (scope docs and bands for deg-psychdim and
  the six Walk of Life degrees; legacy marks on the superseded degree
  scopes and bands with a harvest mapping); psychology-101 moved to the
  practicum as a direct-link bridge (remains as-is for now); footer legacy
  link plus schema migration queued for the integrator band; safety
  language RESOLVED (trust the speakers; no added caveats); paywalls
  RESOLVED (no paywalled content, skill updated).
- 2026-10-25 strategist-pplx-1025 (deg-arch work, session 2): the two QC-1
  open research items grounded and closed in ledgers/design-research.md —
  workload reading rates (Brysbaert 2019 default 238 wpm non-fiction,
  purpose-adjusted 180/130 wpm, explicit study overhead from the 1:3 to
  1:4 reading-to-study finding) and capstone design (high-impact-practice
  evidence with the mixed-effects record kept). Skill sections 3 and 5
  updated accordingly. Remaining open: practice-time summation (house
  convention), L1-L4 as house taxonomy open to gate challenge.
- 2026-10-25 strategist-pplx-1025: ROUND 1 LAUNCHED (Path A, owner codes).
  Four Degree Workers live, server-side: deg-wol-greek
  (perplexity.ai/computer/tasks/6b0e341f), deg-psychdim
  (/tasks/26842b37), deg-verify-a (/tasks/8d42fbc4), deg-integrate
  (/tasks/baeddc4e). Full UUIDs in the QC archive; prompts identical to
  LAUNCH-ROUND-1.md with the owner token supplied at launch only.
- 2026-10-25 worker-pplx-integrate-1 (deg-integrate), SCHEMA MIGRATION
  SHIPPED: fcAcademyData safe-spliced to schemaVersion 2 per owner
  directives (raw_decode boundaries; sources, modules, topicMappings and the
  gallery block byte-identical to pre-edit, checked by the new
  scripts/tests/test_academy_migration.py). Degrees carry kind
  degree|practicum; legacy flag on the seven superseded programs.
  Presentation: Academy home lists the practica first (qigong, cmp, and the
  psychology-101 bridge card, which links straight to the Psychology Lab
  site at the URL carried by source PSY-101), then a labelled divider, then
  the seven new degrees with EMPTY module lists marked in development (no
  module data fabricated; degree owners deliver). Legacy degrees reachable
  behind a Legacy degrees link in the Academy footer (#view=legacy
  deep-linkable). Practicum content untouched. Tests green: python
  unittest discover (69 tests incl. the migration suite), node randomizer
  (9 pass), node --check, playwright routes.qa.cjs ALL PASS desktop and
  375px with zero console errors. Live verification: pending Pages deploy
  at report time (cache-busted fetch to be recorded; Pages lags under
  push churn). Flag to strategist: routes.qa.cjs carried a stale
  tab-round-trip expectation that was already failing on origin/main
  before this migration; corrected to the documented 2026-10-25 tab
  behaviour, noted in the script. Flag to deg-arch: the kind/legacy
  vocabulary and the in-development status value are now live in the
  schema; please ratify in the schema vocabulary docs.
- 2026-10-25 worker-pplx-integrate-1 (deg-integrate), ADVISOR ROUND APPLIED
  (commit ffb9a45a3): migration test split into CI-safe permanent schema
  invariants and a one-time MigrationAuditTests pinned to c4880ebb3 and its
  parent (skipped with a stated reason where that history is absent; the
  Pages CI shallow clone cannot see it). Cause found for the failed Pages
  deploys since 05db599e0: the first migration test probed git history and
  errored in the depth-1 CI clone; every deploy in that window failed at
  the unittest step. Also: the footer legacy control is now a real anchor
  (href #view=legacy) per the owner's clickable-link wording; routes.qa.cjs
  asserts the full seven-degree order. Supersedes the walk-the-log test fix
  pushed by deg-psychdim (45e87ab14): same intent, but that version still
  errored in a shallow clone. All suites green locally (73 python tests,
  randomizer 9 pass, node --check, routes.qa.cjs ALL PASS desktop and
  375px); live cache-busted verification still pending a green Pages
  deploy at this entry's writing.
- [QC-31] 2026-10-25 deg-verify-a (verifier-pplx-a1): 60-min verification run. Blocks A, E, H per
  assignment, then Block B and the Block I verify-a hash half (31 unattached records verified so
  far; 50 remain). Systemic findings: (1) migration-test history fragility was fixed mid-session by
  worker-pplx-integrate-1 (ffb9a45a3), superseding my own minimal patch, conflict resolved in
  favour of the supersedee; (2) three M23 Cynicism-series optionals (EX02, EX05, EX06) return oembed
  client errors, unconfirmed accessible, owner action needed; (3) duration mismatches needing owner
  reconciliation: Rorty Part 2 (record 1:03:23 vs video 2:56:53), Whitehead (0:39:00 vs 0:41:02),
  Tergar Mahamudra (1:45:00 vs 3:28:54, teacher attribution also flagged: Tai Situpa teaches),
  Maffie (1:19:12 vs 1:57:13), Fox Daoism (1:20:38 vs 1:25:42), plus one-second mismatches on
  AR-01, ST-03, SRC-M25-001/002, M23-EX01; (4) AR-01 Sandel Episode 10 does NOT stage the three-way
  comparison mod-phil-1 outcome 3 needs (pilot-relevant, flagged to deg-philosophy owner);
  (5) ST-04 Burnyeat lecture fits mod-phil-2 only via context, owner should confirm fit;
  (6) Spanish-language flags on SRC-M24-005/006 (deg-contemplative). All verified sources: free
  access, no paywalls found. One third-party upload flagged: M02-B06 (BBC documentary).
- 2026-10-25 worker-pplx-integrate-1 (deg-integrate), LIVE VERIFICATION
  RECORDED (08:38 UTC): the Pages deploy run for efa18ed3d completed
  success at 08:36:33 UTC and contains the full migration chain (verified
  by merge-base). Cache-busted fetch of
  https://clemvillatte.github.io/flourishing-compendium/assets/app.js
  serves the migrated block: schemaVersion 2, updated 2026-10-25, 16
  degrees, kinds degree|practicum present, deg-psychdim and the Walk of
  Life ids live; the live asset also carries the new renderer
  (renderLegacyHome, section headings, the bridge URL read from source
  PSY-101). Live index returns 200. Technical-integration presentation
  migration verified end to end; the per-degree technical-integration
  gates open as degree owners deliver module designs that clear their
  earlier gates.
- 2026-10-25 worker-pplx-integrate-1 (deg-integrate), EVIDENCE PRECISION
  CORRECTIONS (commit 961abdbc9): (1) the successful Pages run for
  efa18ed3d was created 08:36:33 UTC and COMPLETED 08:37:24 UTC (Actions
  API, authenticated read); my live cache-busted fetch at about 08:38 UTC
  found the migrated block already serving. (2) Claim wording kept precise:
  sources, modules and topicMappings are canonically equal between the
  pinned revisions (canonical JSON dump equality); the fcGalleryData
  block is raw-slice byte-identical, digest recorded in the test
  (sha256 8acfbe374d4635c9b50b8f846ff3167dac6c9d4e42f01b6b60021193ebcfa6f2,
  337528 bytes). (3) Rendered-live verification done in a cloud browser:
  live home shows the Practicum section (qigong, cmp, psych-101 bridge
  card with direct-link chip) then the Degrees section with the seven new
  degrees; the bridge card and the footer legacy link carry the right
  hrefs; the legacy view lists all seven superseded programs; 375px
  mobile shows the same state with no horizontal overflow (scrollWidth
  379, the known 4px). (4) INTEGRATION.md source id corrected to PSY-101.
- 2026-10-25 verifier-pplx-b1: verification session (60-minute clock, all
  pushes via enrich_save.sh, tests green before each push): 30 legacy
  deg-philosophy attachments verified to skill section 4 and recorded in
  verify/deg-wol-greek.md, verify/deg-wol-pragmatism.md and
  verify/deg-wol-existentialism.md. Method note recorded in each file:
  YouTube identity via oembed plus watch page, transcripts read via
  youtubetotranscript.com where accessible (direct player API and cloud
  browser were YouTube login-walled), credentials from institutional
  pages. Blocks C, D, F, G and I still queued.
