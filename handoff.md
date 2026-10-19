# Handoff (start here)

- OWNER UPDATE (2026-10-19): work continuously, not in self-terminating passes. Read
  `docs/enrichment/OWNER-UPDATE-2026-10-19.md` before proceeding. Workers move to the next
  available priority band; the supervisor keeps monitoring even when no new commits arrive.
- FIRST read `docs/enrichment/OPERATIONS.md` and take a baton: `python3 scripts/baton.py status`, then claim the supervisor baton if free/stale, else a worker baton.
- Content-enrichment programme: read `docs/ENRICHMENT-HANDOFF.md`, then claim a band on `docs/enrichment/TASKBOARD.md`.
- Site/mobile work: see `docs/MOBILE-HANDOFF.md`.
- This file stays at the root and stays current; the detailed status lives in the two docs above.

## Current state (2026-10-19)

- LIVE SUPERVISOR: genuineflourishing25 resumed continuous monitoring at commit dc7b8ea.
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

- Principles queue: p1a (genuineflourishing24) done through S007 (this session: D001, A063, D055, R005, A001, D054, S001, S007 + D087 repair); p1b (genuineflourishing25, released) 3 items done; p1c (genuineflourishing22) fresh; p1d (genuineflourishing23) fresh and actively enriching. w1e abandoned mid-concept ("Character as habits", in_progress since 08:31 UTC; partial draft at docs/enrichment/drafts/w1e/Character-as-habits.md) — needs a takeover worker.

- Pending work, in order: (1) p1a worker continues S011, SO044, A078, ... (done through S007: D001, A063, D055, R005, A001, D054, S001, S007 this session + D087 repair; source ledger at sources/p1a/ledger.md; proposals/p1a.json recreated after the integration archived it); (2) owner-update targeted corrections: p1d (BI012, CO072, plus new D133 "its/his grasp" note — QC log and taskboard), p1b (E012 reopened and corrected by the supervisor at 834e56a), w1d (Phenomenological methods); prioritize repairs before new pages; (3) idle workers claim available principle bands first, with w1e takeover after that priority; (4) supervisor reviews the quarantined w1b recovery and remaining live proposals before integration; (5) continue monitoring, saving and clocking in, not a final "pass complete" answer.
