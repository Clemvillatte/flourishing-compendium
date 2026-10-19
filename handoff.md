# Handoff (start here)

- OWNER UPDATE (2026-10-19): work continuously, not in self-terminating passes. Read
  `docs/enrichment/OWNER-UPDATE-2026-10-19.md` before proceeding. Workers move to the next
  available priority band; the supervisor keeps monitoring even when no new commits arrive.
- FIRST read `docs/enrichment/OPERATIONS.md` and take a baton: `python3 scripts/baton.py status`, then claim the supervisor baton if free/stale, else a worker baton.
- Content-enrichment programme: read `docs/ENRICHMENT-HANDOFF.md`, then claim a band on `docs/enrichment/TASKBOARD.md`.
- Site/mobile work: see `docs/MOBILE-HANDOFF.md`.
- This file stays at the root and stays current; the detailed status lives in the two docs above.

## Current state (2026-10-19)

- OWNER DIRECTIVE (2026-10-19): all item types need work; PRINCIPLES are the priority (bodies
  AI-sounding, "Plain words" often broken replicates, verbatim source quotes wanted). Protocol:
  docs/enrichment/PROTOCOL-PRINCIPLES.md. Primary sources: docs/PRIMARY-SOURCES.md. Principle
  bands p1a-p1e minted on the TASKBOARD.

- Supervisor pass (genuineflourishing24, ~10:45-11:10 UTC): build ok; band-state validation found E068 (p1d) over prose limit — fixed by the p1d agent in-flight (b971d43/9dd23e7, validator ok); QC sample D133 (p1d) verified ok (DDJ 29 Legge + Bradshaw 2025 r-values verbatim vs opened sources). Integration RUN (commit b6fcc59): 265 recip + 3 inline applied, 31 deferred (busy), 4 archived; no principle files touched; error-category census confirmed all 56 transient working-tree FAILs were pre-existing seed conditions (no link loss, no front-matter changes) — tooling note for the lead in the QC log.

- Principles queue: p1a (genuineflourishing24) done through R005 (this session: D001, A063, D055, R005; source ledger at sources/p1a/ledger.md); p1b (genuineflourishing25, released) 3 items done; p1c (genuineflourishing22) fresh; p1d (genuineflourishing23) fresh and actively enriching. w1e abandoned mid-concept ("Character as habits", in_progress since 08:31 UTC; partial draft at docs/enrichment/drafts/w1e/Character-as-habits.md) — needs a takeover worker.

- Pending work, in order: (1) p1a worker resolves the D087 QC flags (interpretation citation, blockquote format, unsupported math-course example and equipment/hand aphorism — QC log) then continues A001, D054, ...; (2) owner-update targeted corrections: p1d (BI012, CO072), p1b (E012), w1d (Phenomenological methods) — those workers prioritize repairs before new pages; (3) a worker takes over w1e and finishes "Character as habits" from the draft; (4) the w1b proposals file still needs normalization to the into/link schema; (5) supervisor rechecks OWNER-UPDATE-2026-10-19.md corrections before the next integration.
