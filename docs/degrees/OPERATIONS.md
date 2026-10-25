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

- 2026-10-25 worker-pplx-psychdim-2 (deg-psychdim), advisor QC rounds 2 to 7 APPLIED: content-
verification push across the video backlog. Batches 18 to 27 in ledgers/deg-psychdim.md. Lectures
1, 7, 11, 12, 13, 16 and 17 now fully content-verified (all chapters, transcripts read, boundaries
recorded); the Barrett and Wood talks content-verified from published transcripts and mapped to
their existing rows; the Howard inaugural lecture remains a candidate (no transcript retrieved
through the routes tried; flagged for the supervisor). Advisor rulings applied: provenance
upgraded to raw unprompted fetches (prompt omitted) with the earlier return-as-is fetches re-
verified and their comparison claims narrowed to the tests actually performed (full word-level
body diffs only for lectures 13 and 17; claim-and-quote checks for 11, 12 and 16); Bloom's printed
false starts preserved (Daly-Wilson; lecture 17 raw text is the authority of record); source
qualifiers restored (Chicago-children and fear-elicitor hedges, bilingualism as-far-as-we-know,
parking-lot-study discomfort, Gleitman's neurologist remark corrected, Einstein anecdote at age
four, language-and-thought kept open, nonhuman-communication almost-certainly qualifier, Provine
finding-wording matched to the transcript); overclaiming undone (personality-row whole-lecture
assignment reverted; lecture 16 chapter 1 extension reverted; exact-identity claims removed;
'outside the six EEMM dimensions' replaced with 'no current matrix outcome mapped'); single-line
ledger entries rewrapped under 2,000 characters per line. Final advisor verdict: limited content
QC passes for the inspected batches and audit repairs — not blanket approval and not a gate
clearance. Open flags for the strategist or owner: lecture 17 chapters 6 to 8 and lecture 13
chapters 3 to 6 verified but unassigned; lecture 1 orientation assignment (no matrix row cites
it); the stereotypes/IAT row PROPOSED pending the scope decision; Howard transcript retrieval.
Coverage and pedagogical gates remain pending independent confirmation; the Phase 0 pilot stop-
gate still blocks module production.
- 2026-10-25 strategist-pplx-1025-launch-c (degrees-strategist, stale-baton
  takeover): practice pilot mod-qg-3 taken through advisor QC rounds 2 to 4.
  Round 4 finding of record: QG-M03-01 (https://videos.yoqi.com/video/959)
  FAILS the skill's accessibility standard on page-level evidence - the
  page's own video metadata marks the video accessible:false, public:false
  (purchases and rentals not allowed), a VIDEO ON DEMAND LOGIN is present
  and the page HTML contains no playable source; an anonymous visitor
  cannot play it. Removed from the pilot's required sequence; the
  5-minute gallery tier candidate in verify/deg-cmp.md is the SAME
  resource and fails with it. Replacement candidate S0ZqKo0KQvA
  (Stillness Studio Sanctuary, 5-minute guided standing) oembed-verified;
  duration and recording-level content unverified from this session
  (watch page JS-blocked, innertube LOGIN_REQUIRED, cloud-browser stream
  not loading) and left open for the verification band. Pilot remains
  DRAFT NOT CLEARED. Owner flags: YoQi VOD access ruling; the earlier
  "no paywall visible" note in the pilot is superseded by the metadata
  reading. Phase 0: theory pilot passed; practice pilot one verification
  round from closure.
