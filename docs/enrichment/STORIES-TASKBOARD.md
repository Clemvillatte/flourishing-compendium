# STORIES-TASKBOARD — lane registry for the stories pipeline

## ROUTE (2026-10-25/26, strategist-pplx-1026a): FINISH THE STARTED STORIES
Priority: the 19 qc_pending and 3 returned items across lanes s1a-s1f (the
started stories). Work them to `ready` per PROTOCOL-STORIES.md. ~148 drafts are
already `ready` — registration and backlinks are SUPERVISOR-ONLY; do not run
story_register.py. Plan: `docs/enrichment/PIPELINE-2026-10-26.md`.

Maintained by the **Supervisor**. Storytellers read it to claim a lane; they never edit
it directly (a ROUTE note in handoff.md reaches the supervisor). Protocol: `PROTOCOL-STORIES.md`.

## Lane registry

| Lane | Holder | Scope (assigned centrally) | Status |
|------|--------|---------------------------|--------|
| s1a  | (open — minted 2026-10-20) | Mixed tranche 1: highest-degree Daoism/Buddhism/Pragmatism principles with zero stories — D080 (qiwu), D039 (rest as root of activity), D156 (flexibility), B074 (thoughts are not facts), B026 (right effort / four efforts), P182 (self-preoccupation inhibits performance), P184 (once-born vs twice-born). Angles must be recorded per item in the lane state. | open |
| s1b  | — | unassigned (mint when a second storyteller arrives; do not overlap s1a targets) | reserved |

## Supervisor storyteller batch 2 (reserved 2026-10-20, non-overlapping with lane s1a)

Targets: P190, P189, P181 (top zero-story Pragmatism pool, excluding lane
s1a's P182/P184 and the supervisor's completed P183/P185/P188/P069). ST349+.
Catalogue consulted before research (PRIMARY-SOURCES.md); note: James,
Dewey and Bergson volumes are LOCAL LIBRARY holdings, not established
Drive texts; the Peirce folder files ARE verified accessible.

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
| s1a-030 (The Brother Nobody Heard Of) | s1a | published 2026-10-23 | ST436 (ch. ST-S01.04) | D061 backlink written by register tool (band not live) |

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

## Maintenance coupling note (2026-10-24, dossiers supervisor)

The published dossiers now each carry a 4th "Story" section whose
loglines are compressed from the story cards' own text (spec:
docs/enrichment/dossiers/README.md item 4). When a story card's text
changes materially, the dossier loglines that compress it may need a
matching review pass — the dossier bands own that pass (routed via
docs/enrichment/qc/QC-STORY-2026-10-24.md). No action needed
from storytellers beyond the existing card-edit discipline; this note
exists so card edits are not treated as invisible to the rest of the
wiki.

## FLAG FOR SUPERVISOR + OWNER (2026-10-26, strategist-pplx-1026a): DUPLICATE STORY REGISTRATIONS — 22 titles, 23 excess copies
Survey this pass (ls title dedup across content/stories/): 22 story titles
are published under MORE THAN ONE ST number — e.g. "Tolstoy Hides the Rope"
exists as ST348, ST369 AND ST410; "The Tinker's Chains Fall Off in a Field"
as ST390 and ST428; twenty more titles exist twice each (full list: run
`ls content/stories/ | sed 's/^ST[0-9]* — //' | sort | uniq -c | sort -rn | awk '$1>1'`).
Root cause (evidence): supervisor sessions re-registered already-published
drafts — e.g. s1a-002's lane state shows TWO 'published' registrations
15 minutes apart on 2026-10-21 ("supervisor registration this session" then
"supervisor registration ST410"), and story_register.py assigns the next
free ST number with NO title-collision guard. Consequences: duplicate wiki
pages, split backlinks, diluted book chapters.
DECISION NEEDED (owner/supervisor): (1) which copy to keep per title —
recommendation: keep the copy with backlinks completed / latest repair state,
remove the others (file + structure line + _order.json entry + re-point
backlinks); (2) add a title-collision guard to story_register.py before ANY
further registrations; (3) a reconciliation pass over lane state files vs
published pages (several 'ready' drafts in the lanes are already published
under earlier ST numbers — e.g. s1a-002 is 'ready' in state but published as
ST410; registering it again would mint a FOURTH copy — do not register
without the guard).
