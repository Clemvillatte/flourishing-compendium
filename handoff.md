# Handoff (start here)

- FIRST read `docs/enrichment/OPERATIONS.md` and take a baton: `python3 scripts/baton.py status`, then claim the supervisor baton if free/stale, else a worker baton.
- Content-enrichment programme: read `docs/ENRICHMENT-HANDOFF.md`, then claim a band on `docs/enrichment/TASKBOARD.md`.
- Site/mobile work: see `docs/MOBILE-HANDOFF.md`.
- This file stays at the root and stays current; the detailed status lives in the two docs above.

## Current state (2026-10-19)

- OWNER DIRECTIVE (2026-10-19): all item types need work; PRINCIPLES are the priority (bodies
  AI-sounding, "Plain words" often broken replicates, verbatim source quotes wanted). Protocol:
  docs/enrichment/PROTOCOL-PRINCIPLES.md. Primary sources: docs/PRIMARY-SOURCES.md. Principle
  bands p1a-p1e minted on the TASKBOARD.

- Wave 1 (concepts) is active. Agent A (lead) holds band w1a (manifest: docs/enrichment/bands/w1a-manifest.json, 30 concepts).
- Coordination hardened: taskboard with band claims + manifests, state machine (docs/enrichment/batches/<band>.json), fail-safe save script, takeover procedure.
- Ubuntu (rank 1) enriched, validated and pushed; connection proposals pending application by the lead.
- Next: advisor-QC fixes to Ubuntu, then Freedom, Virtue, Attention, Care, Gratitude (rank order within w1a).
