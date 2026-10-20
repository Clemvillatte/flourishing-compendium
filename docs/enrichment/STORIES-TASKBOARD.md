# STORIES-TASKBOARD — lane registry for the stories pipeline

Maintained by the **Supervisor**. Storytellers read it to claim a lane; they never edit
it directly (a ROUTE note in handoff.md reaches the supervisor). Protocol: `PROTOCOL-STORIES.md`.

## Lane registry

| Lane | Holder | Scope (assigned centrally) | Status |
|------|--------|---------------------------|--------|
| s1a  | (open — minted 2026-10-20) | Mixed tranche 1: highest-degree Daoism/Buddhism/Pragmatism principles with zero stories — D080 (qiwu), D039 (rest as root of activity), D156 (flexibility), B074 (thoughts are not facts), B026 (right effort / four efforts), P182 (self-preoccupation inhibits performance), P184 (once-born vs twice-born). Angles must be recorded per item in the lane state. | open |
| s1b  | — | unassigned (mint when a second storyteller arrives; do not overlap s1a targets) | reserved |

## Candidate pool (verified 2026-10-20)

Principles with **zero story links**, ranked by inbound graph degree (higher = more load-bearing for
essays, so story coverage matters most there). The supervisor assigns slices from this pool; tellers
may propose additions via a handoff ROUTE. Counts: Buddhism 153, Daoism 126, Pragmatism 16 missing.

Top of the pool (degree ≥ 8):

- Daoism: D080 (38), D039 (30), D156 (23), D006 (17), D133 (14), D107 (13), D095 (13), D073 (13), D045 (13), D069 (12), D068 (12), D065 (12)
- Buddhism: B074 (18), B026 (18), B192 (16), B129 (14), B133 (13), B088 (13), B084 (12), B055 (12), B054 (12), B043 (12), B176 (11), B140 (11)
- Pragmatism: P182 (13), P190 (12), P183 (12), P189 (10), P181 (10), P194 (9), P191 (9), P196 (8), P193 (8), P192 (8), P187 (8), P184 (8)

Full missing-lists per tradition are regenerable on request:
`rg -L 'ST\d+ — ' content/principles` filtered by discipline, then rank with the wiki graph.

## Integration queue (supervisor)

| Draft | Lane | Status | ST id | Backlinks |
|-------|------|--------|-------|-----------|
| s1a-002 (Tolstoy Hides the Rope) | s1a | published 2026-10-20 | ST348 (ch. ST-S03.02) | P184 backlink written (band not live) |

ROUTE for lane s1a (from supervisor, 2026-10-20): s1a-002 -> ST348,
content/stories/ST348 — Tolstoy Hides the Rope.md, chapter ST-S03.02,
integration commit b4b4685eb, P184 backlink completed. Reconcile the
draft state via the story_state.py transitions you actually support; the
supervisor does not edit lane files. Post-publication notes: the
published page's italic provenance was removed and inline source links
added (supervisor closeout). For future drafts: no italic emphasis
anywhere in page text (style rule), and place source links beside
factual sentences and quotations, not only in Sources.

## Conventions

- A story may serve principles from any tradition (cross-links are fine); the lane scope names the
  target principles, not the story's genre or origin.
- Two stories for the same principle are allowed only when their recorded angles differ.
- Published stories whose principle targets sit in live bands stay `published_backlinks_pending`
  until the supervisor (or the live band owner, via ROUTE) appends the backlink.
