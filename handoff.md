# Handoff (start here)

- OWNER UPDATE (2026-10-19): work continuously, not in self-terminating passes. Read
  `docs/enrichment/OWNER-UPDATE-2026-10-19.md` before proceeding. Workers move to the next
  available priority band; the supervisor keeps monitoring even when no new commits arrive.
- FIRST read `docs/enrichment/OPERATIONS.md` and take a baton: `python3 scripts/baton.py status`, then claim the supervisor baton if free/stale, else a worker baton.
- Content-enrichment programme: read `docs/ENRICHMENT-HANDOFF.md`, then claim a band on `docs/enrichment/TASKBOARD.md`.
- Site/mobile work: see `docs/MOBILE-HANDOFF.md`.
- This file stays at the root and stays current; the detailed status lives in the two docs above.

## Current state (2026-10-19)

- RANDOMIZER CONTROLS: optional Concepts/Theories/Stories/Sayings default unchecked;
  categories are multi-select with Select All/Deselect All and OR combinations. Search,
  daily draw and saved-only draw honor the pool. Optional-type membership follows explicit
  one-hop principle links; all categories also includes unlinked extras. Regression and
  browser checks: `docs/enrichment/RANDOMIZER-QA.md`.
- RANDOMIZER SOURCE-FRESHNESS REPAIR: the old default cards used static randData prose even
  after markdown enrichment. The model now overlays current wiki body/companion sections
  without editing content files; rich headings/quotes/links and current Plain words render.
  Nine model tests cover defaults, filtering, source immutability and section preservation.
- OWNER UI PROPOSAL PENDING: suggested nodes in the graph connection picker should be
  previewable before selecting a link. Recommended ~1-second hover plus an explicit
  keyboard/touch Preview button and a scrollable panel that does not alter selections.
  Feasibility answered; no connection-picker implementation has been made yet.
- CURRENT SUPERVISOR: `supervisor-193794fd`, resuming the assignment of genuineflourishing32.
  Supervisor takeover was pushed at 12:42 UTC after the predecessor's heartbeat became stale.
  This session has no verified yopmail identity; the role/session label prevents false
  attribution. Always run `baton.py status` against the remote before acting; do not infer
  liveness from old prose or a completed pass.
- PRIORITY RESERVES: p1i-p1m are OPEN, 30 previously unassigned B/D/P principles each.
  Check TASKBOARD + batons and claim one; these selected-rank manifests are non-contiguous.
  There is no need to leave workers waiting while priority work remains. Supervisor keeps
  at least three OPEN reserve bands and mints more with `enrich_manifest.py --type principle
  --priority --count 30`. Existing bands and queues were not reassigned.
- EVIDENCE REPAIRS COMPLETED: the supervisor claimed stale p1d, reopened BI012 and CO072,
  repaired them, validated both against fa00df5, and obtained independent advisor PASS
  on each revised file. Removed clinical-priority advice, the thyroid motivation anecdote,
  general-endurance inference and social-media detraining story. All original wikilink
  markup and metadata preserved. CO072's inherited title/overstrong link label remain
  explicitly qualified; clean renaming needs a metadata exception. p1d is released for
  continued work; remaining older flags in its state are NOT cleared by these two passes.
  D133 now says `his grasp`; full quotation not independently re-certified in this session.
- PEIRCE REQUEST FULFILLED: the owner supplied The Essential Peirce volumes 1 and 2 in a
  new Drive folder. Both downloaded successfully; title/copyright pages and extractable text
  checked. See PRIMARY-SOURCES for public file URLs and reproducible access instructions.
  No duplicate purchase is needed. `docs/enrichment/BOOK-REQUESTS.md` records the fulfilled
  request and optional uploads of existing Ziporyn/Roth/Dewey/James holdings.
- NEXT SUPERVISOR ACTIONS: pull and validate newly done content against an explicit
  baseline, source-sample current rewrites, then review protected pending proposals.
  The previous pass structurally validated all 25 changed content files at that checkpoint
  against d529ebe; that was not blanket source certification. B053's two Nyanaponika
  quotations were checked against the opened source. P157's quoted ACT definitions match
  the APA PDF, but its hanging 2011 citation differs from the 2012 article's author list;
  request a narrow citation cleanup from live p1e, not a rewrite.
  Do not silently integrate unreviewed recovery or clear inherited flags wholesale.

## Standing owner decisions

- Speed directive (commit 19ad9d3): advisor QC on first item + every 5th (not every item),
  no routine draft files, one commit per item, batched research, skip-ahead on pages already
  at the bar. TASKBOARD's old one-hour takeover and per-item-draft rules have been reconciled
  with the 20-minute baton threshold and this directive.
- OWNER DECISION (2026-10-19): there is NO separate "full rewrite of already-good pages" track. The SKIP-AHEAD rule covers it — a page that already has a verbatim quote, non-replicate plain words and 40-300 prose words gets a light check only. Full effort goes to weak pages.

## Historical checkpoints (not a live roster)

- SUPERVISOR CHANGE (earlier): genuineflourishing25 is dead (owner-confirmed); genuineflourishing26
  took the supervisor baton at 2026-10-19 ~11:00 UTC. Standing work for all principles-band
  workers: fix Plain-words replicates from `docs/enrichment/plain-words-replicates.md`
  (417 severe) as part of each item, Daoism/Buddhism/Pragmatism first. genuineflourishing25
  also held p1b — that baton is stale, free for takeover.
- HISTORICAL SUPERVISOR: genuineflourishing25 resumed continuous monitoring at commit dc7b8ea.
  Shared maintenance landed in 66e12ea: live concept/principle-band protection, legacy
  proposal support, no-write preflight, explicit validator baseline and protected-field
  checks, portable build root. Do not stop at a completed pass.
- CORRECTION TO EARLIER INTEGRATION REPORT: b6fcc59 archived `w1b.json` without processing
  its unsupported legacy-schema records. All 179 records remain recoverable in the archive;
  153 proposed linked concepts are absent from their current targets. A separate recovery
  copy is retained under `drafts/supervisor/w1b-recovery.json`, deliberately outside the
  live proposals directory pending evidence review. There is no longer a live w1b proposal
  file to normalize. Existing pending proposals and protected live bands must still be
  reviewed before integration. The historical report below is not proof of successful
  handling of w1b.

- OWNER DIRECTIVE (2026-10-19): all item types need work; PRINCIPLES are the priority (bodies
  AI-sounding, "Plain words" often broken replicates, verbatim source quotes wanted). Protocol:
  docs/enrichment/PROTOCOL-PRINCIPLES.md. Primary sources: docs/PRIMARY-SOURCES.md. Principle
  bands p1a-p1e minted on the TASKBOARD.

- Supervisor pass (genuineflourishing24, ~10:45-11:10 UTC): build ok; band-state validation found E068 (p1d) over prose limit — fixed by the p1d agent in-flight (b971d43/9dd23e7, validator ok). QC sample D133 (p1d): Bradshaw 2025 r-values and k=238 verified verbatim vs opened sources; the DDJ 29 quote has a one-word deviation from the Gutenberg Legge ("its grasp" vs "his") — corrected in the QC log and routed to the p1d worker. Integration RUN (commit b6fcc59): 265 recip + 3 inline applied, 31 deferred (busy), 4 archived; no principle files touched; full-delta preservation check across all 196 changed content files: 0 lost wikilinks, 0 changed front-matter; the 56 transient working-tree FAILs were pre-existing seed conditions (tooling note in the QC log).

- Principles queue: p1a (genuineflourishing24) done through S011 (this session: D001, A063, D055, R005, A001, D054, S001, S007, S011 + D087 repair); p1b (genuineflourishing25, released) 3 items done; p1c (genuineflourishing22) fresh; p1d (genuineflourishing23) fresh and actively enriching. w1e abandoned mid-concept ("Character as habits", in_progress since 08:31 UTC; partial draft at docs/enrichment/drafts/w1e/Character-as-habits.md) — needs a takeover worker.

- Pending work, in order: (1) p1a worker continues SO044, A078, B001, ... (done through S011: D001, A063, D055, R005, A001, D054, S001, S007, S011 this session + D087 repair; source ledger at sources/p1a/ledger.md; proposals/p1a.json recreated after the integration archived it); (2) owner-update targeted corrections: p1d (BI012, CO072, plus new D133 "its/his grasp" note — QC log and taskboard), p1b (E012 reopened and corrected by the supervisor at 834e56a), w1d (Phenomenological methods); prioritize repairs before new pages; (3) idle workers claim available principle bands first, with w1e takeover after that priority; (4) supervisor reviews the quarantined w1b recovery and remaining live proposals before integration; (5) continue monitoring, saving and clocking in, not a final "pass complete" answer.
