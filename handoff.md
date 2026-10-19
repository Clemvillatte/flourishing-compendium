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

- Supervisor pass (genuineflourishing21, ~10:00-10:15 UTC): build ok, validate 22/22 ok at HEAD
  76325b4, preservation vs baseline c2a3ee4 ok (front-matter, link markup, reflections blocks,
  principle statements). QC samples are PARTIAL verification, corrections pending — see the QC
  log in docs/enrichment/OPERATIONS.md for the flags routed to the p1a worker (D087) and the
  w1d worker (Peak experiences). Integration DEFERRED: live workers hold target bands;
  enrich_apply's band guard does not see principle manifests (reads only 'concepts' keys — needs
  a tested concurrency/schema fix before the next apply); all 179 records in proposals/w1b.json
  use a target/concept schema the apply script cannot read (w1b worker: normalize to into/link).

- Principles queue now being worked: p1a (genuineflourishing24), p1b (genuineflourishing25),
  p1c (genuineflourishing22) — all fresh. w1e is abandoned mid-concept ("Character as habits",
  in_progress stuck since 08:31 UTC; partial draft at docs/enrichment/drafts/w1e/
  Character-as-habits.md) — needs a takeover worker.

- Pending work, in order: (1) principle workers continue their bands per PROTOCOL-PRINCIPLES.md;
  (2) p1a worker resolves the D087 flags and w1d worker the Peak experiences flags (QC log);
  (3) a worker takes over w1e and finishes "Character as habits" from the draft; (4) the w1b
  worker (or next taker) normalizes proposals/w1b.json to the into/link schema; (5) supervisor
  repairs enrich_apply's band guard (principle manifests + live-baton check) and runs integration
  once the target bands are quiet; (6) Agent A's w1a band continues per its state file.
