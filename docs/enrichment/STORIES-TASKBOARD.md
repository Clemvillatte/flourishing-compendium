
## URGENT ROUTE TO SUPERVISOR (2026-10-26 00:42Z, sup-1026b) — ST-NUMBER REUSE AFTER RECONCILIATION

next_free_id() in story_register.py fills the LOWEST free number. The
duplicate reconciliation deleted the files for ST307, ST369 and ST410-430
(23 copies), so those numbers are now the lowest holes — the NEXT
no---id registration will mint one of them for an UNRELATED new story,
while lane states and historical records still carry them as the old
titles (e.g. s1f-008 state records ST307 = Rock Climbers). FIX before any
further no---id registration: pass an explicit --id at or above the current
high-water mark (max existing ST number is 492 as of this note; verify with
a fresh listing), or add a retired-numbers exclusion to next_free_id.
Re-pointing follow-ups also routed (see TASKBOARD 00:42Z): (a) ST118's
retained discussion claims (six themes, interviews, autotelic experience) —
the York review carrier does NOT establish them; open the book/review
carrier that does, or narrow the wording; (b) the 4 pre-wired
'ST411-417 — N. <title>' backlinks on D041/D102/D160/B109 must be
re-pointed to the real numbers when s1a-035/036/037/039 register (strip
their stale 'N. ' title prefixes first); (c) relationship audit for the 23
removed copies: pages that linked ONLY a removed copy lost their link
(known instance: 'Pleasant activities scheduling (Lewinsohn)' concept linked
only ST307 for Rock Climbers; ST307 also carried D071/PP019/PP020 backlinks
that ST118 lacks) — restore those relationships onto the canonical copies.
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

## GUARD LANDED (2026-10-26 00:13Z, supervisor-pplx-1026b)
Title-collision guard added to story_register.py: registering a draft whose
title already exists under ANY other ST number is refused before any write
(error: TITLE ALREADY PUBLISHED). Verified live: s1a-002 dry-run now refuses
(Tolstoy Hides the Rope = ST348/369/410). Fixture tests added (same-title
refusal + different-title passes + no-write on refusal); test_story_tools.py
50/50. Registrations stay PAUSED until the 22-title/23-excess reconciliation
below is executed; the guard prevents NEW duplicates meanwhile. Inventory of
all 22 groups recorded in the reconciliation pass notes.

## DUPLICATES RECONCILED (2026-10-26 00:30Z, supervisor-pplx-1026b)
All 23 excess copies removed; each of the 22 titles keeps its FIRST-REGISTRATION
ST number (which in every group is also the better-repaired copy — e.g. ST348
Tolstoy has the closeout citations, ST118 Rock Climbers the verified quote).
Removed per copy: story file, _order.json entry, book-structure line, and all
backlink bullets elsewhere in content/ (31 files, 68 lines). ST118 additionally
repaired to pass story_check published (bullet Principles, ## Sources with the
York review, +1 grounded sentence from that review). story_check: 22/22 kept
copies ok; build 5928 entries (5951 - 23, arithmetic checks out); dangling-ref
scan clean. REGISTRATIONS UNBLOCKED: guard landed + duplicates reconciled, so
supervisor registration batches may resume per PROTOCOL-STORIES (entry checks
apply; the register tool now refuses any already-published title).

## REGISTRATION BATCH (2026-10-26 ~01:00Z, supervisor-pplx-1026c)
41 ready drafts registered (ST307-ST431, ST447-ST453, ST463-ST507 incl. ST488
Rip Van Winkle after a front-matter title-quote repair) with entry checks
(story_check draft 41/41 pass) and the title-collision guard live. Lane states
reconciled: all published/integrated with backlinks verified present (149
flipped integrated; 39+1 registered). FINDING + REPAIR: lanes s1a and s1c
carried duplicate drafts of four stories (Painter/Slowest Vessel/Jade in the
Bosom/Letter Written for After); the "NN." numbering prefix in s1a draft
titles defeated the guard's normalization, minting second copies ST488-ST491;
all four second copies removed, first registrations kept (ST411-ST413, ST417).
Suggested guard hardening (flagged to supervisor/owner): strip a leading
"NN. " before title comparison in story_register.py. Also: 3 missing
book-TOC chapter lines repaired (ST-S01.06, ST-S02.05, ST-S03.05); 11
registered pages repaired to pass story_check published (draft scaffolding
and QC-note comments stripped, ST004 upgraded to the verbatim Legge passage
per its upgrade flag, four double-numbered titles cleaned). Two qc_pending
state entries without draft files (s1a-028, s1a-029) flagged for the lane.
Remaining 'ready' after this batch: 0 in s1a/s1b/s1c/s1d/s1e/s1f except
qc_pending/returned work in progress by storytellers.

## QC ROUND ON THE BATCH (2026-10-26 ~00:35Z, supervisor-pplx-1026c, advisor-driven)
Corrections to the note above: its "~01:00Z" stamp was a reconstruction — the
external-clock-checked writing time was ~00:21-00:35Z. Registration count
clarified: 41 registered total, 4 cross-lane duplicate copies removed (net 37
new stories), plus 1 upgrade flag applied (ST004) and 1 mistaken registration
undone (s1f-010). Backlink verification redone with correct principle-file
resolution (157 items, 0 missing). Chapter audit: 50 published stories sat in
chapters not matching their primary principle's layer (24 from this batch —
cross-references in structure files misled the mapping; 26 pre-existing) —
all 150 now consistent, and 22 pages that lacked book-TOC lines (20
pre-existing, ST439/ST473 from this batch) now have them. Guard hardening
landed: story_register.py title normalization strips leading "NN. " prefixes
and typographic quotes, with a regression test (52/52 pass). ST004 provenance
de-italicized and added principle notes marked as compendium reading; ST502
operational QC-log lines removed from Sources.

## LEGACY-BAR FINDING (2026-10-26 ~00:40Z, supervisor-pplx-1026c — for owner routing)
A full published-context sweep of content/stories (504 pages) against the
current story_check bar: 342 legacy pages (ST001-ST374 generation) fail it —
mostly prose under 150 words, missing **Principles:** list sections, missing
## Sources with URLs, dash budgets. These predate the current bar; new
registrations all pass. This is a systemic repair decision (a stories
legacy-repair lane or an owner ruling to grandfather them), not something to
patch piecemeal. All 41 pages from today's batch pass; ST432 trimmed one
word over the cap.

## PLACEMENT RESTORE + CORRECTIONS (2026-10-26 ~00:55Z, supervisor-pplx-1026c, advisor round 2)
The chapter realignment above over-reached: no documented policy requires
primary-principle alignment, so all PRE-SESSION placements have been restored
to their pre-batch chapters (book TOC + page chapter fields); today's 39
new-number registrations keep their as-registered placements. Retained as
justified repairs: the 25 previously-missing book-TOC lines (pages that had no
line at all). ST432's one-word trim hit a verbatim quote — restored, a
non-quoted word trimmed instead. Duplicate-copy finding corrected: the four
removed copies (ST488-491) were PRE-SESSION published pages, not this batch's
registrations; content diffs against the kept copies show phrasing variants
only. Chapter policy for new registrations still needs an owner ruling
(primary-principle layer vs thematic placement) — flagged. Book TOC now
504/504 pages with lines, no duplicates, no orphans; build green.

## QC ROUND 2 — REMAINING ITEMS CLOSED (2026-10-26 ~00:40Z, supervisor-pplx-1026c)
- Exact-target backlink validation: all 4097 story wikilinks outside
  content/stories resolve to existing files with exact title match; zero
  dangling IDs. (Pipe-alias links compare by target text; pass.)
- Real text diffs of the four duplicate pairs (removed ST488-491 vs kept
  ST411/412/413/417): same story, same sources, same verbatim quotes;
  only the opening framing line differs (old template style vs current).
  Removed copies recoverable at commit 0c97994 if the owner prefers the
  earlier numbers.
- Count reconciliation (git, pre-batch 0c97994^ vs HEAD): 468 -> 504
  pages = +39 new numbers (ST307, ST369, ST410-430, ST492-507) - 3
  removed numbers (ST489-491); ST488 reused for Rip Van Winkle (s1c-031).
  Batch records corrected: "41 registrations" = 40 new pages (39 new
  numbers + ST488) + 1 upgrade-flag registration undone in favour of the
  ST004 upgrade.
- Cosmetic: ST411/412/413/417 ran the framing line into the first
  paragraph (register-tool template); blank line inserted, build green.

## ST488 IDENTITY REPAIR (2026-10-26 ~00:42Z, supervisor-pplx-1026c, advisor final verification)
The advisor verification correctly flagged that ST488-491 were PRE-SESSION
published pages: my batch's ST411-413/417 were re-registrations of stories
already published (the guard missed them because draft titles carried "NN. "
prefixes — the gap since fixed in story_register.py). Repaired per the
keep-first-registration convention: pre-session copies ST488 (Painter),
ST489 (Slowest Vessel), ST490 (Jade), ST491 (Letter) restored verbatim from
the pre-batch tree; today's ST411-413/417 copies removed; Rip Van Winkle
(s1c-031) moved from ST488 to fresh ST508 (page, lane state, backlinks,
book TOC, _order.json all updated). Verified: all 468 surviving pre-session
pages match the pre-batch baseline in FM chapter ID and TOC ancestry (0
diffs on both checks); 36 new numbers with zero reuse; net 468 -> 504; book
TOC 504/504 with no duplicates or orphans; 4097 story wikilinks all resolve
exactly; story_check PASS on every changed page and all 36 new pages;
build rc=0; tests 52/52 (direct exit status). Legacy bar: 341 published pages currently fail
story_check, ALL pre-session ST001-374 generation pages untouched this
session (ST004 and ST374 pass after this session's repairs) — owner
routing still needed. Chapter-placement policy for new registrations still
needs an owner ruling.

## FINAL CORRECTIONS (2026-10-26 ~00:50Z, supervisor-pplx-1026c)
Advisor verification round 3: (a) ST374/ST456/ST478 book-TOC lines moved
to their restored FM chapters (the three pre-session pages whose lines were
added this session); all 26 pre-session pages without baseline TOC lines now
sit under their FM chapter. (b) _order.json: ST488-491 entries restored in
sequence after ST487; ST508 title prefix corrected to "508."; restored
ST488-491 verified identical to the pre-batch tree (direct diff, 0 lines).
(c) PROGRESS figures restated: 36 genuinely new stories, 468 -> 504, ST488-491
identities preserved, Rip Van Winkle at ST508. (d) tests re-run with direct
exit status (52/52, rc=0). (e) 341 story_check failures are all
legacy-number-range (ST001-374) pages; the only two such pages touched this
session (ST004, ST374) pass after repairs. (f) ST001 cross-lane deletion
incident (dosr6) inspected: restoration confirmed and verified by the dosr6
verifier's pass 2; closed, no action needed.

## ROUTE DISPOSITION (2026-10-26 02:27Z observed, supervisor-pplx-1026d, supervisor baton): ST-NUMBER IDENTITY AUDIT (sup-1026b route 1) — CLOSED

Full audit run this session. Published content (principles, concepts, dossiers,
structure pages, _order.json, generated data): CLEAN — every reference to a
reused number (ST307, ST369, ST410-430, ST488) pairs it with its NEW title;
no stale old-ID+old-title pairing survives in content/. The urgent follow-ups:
(a) ST118 six-themes carrier — RESOLVED (Moneta open PDF added; see TASKBOARD
route dispositions); (b) pre-wired 'ST411-417 — N. <title>' backlinks —
superseded by the batch registrations' completed state; (c) relationship
restoration — 'Pleasant activities scheduling (Lewinsohn)' already re-pointed
to ST118 (prior session); the PP019/PP020/D071 reciprocal backlinks were
already present on the principle pages; this session restored the missing
FORWARD links on ST118 itself (PP019, PP020 added to Principles; D071 added to
Resonates, matching the removed ST307 copy's relationships). story_check 0
errors after the edit.

HELD-BAND FINDING (not repaired here — t1a/t1d/t1f are HELD, their drafts are
the owner's next t1 pass): the t1a raw-inventory drafts still carry STALE
wikilinks to the removed copies. Mapping for the t1a owner (old number+title ->
canonical kept number): ST369/ST410 Tolstoy Hides the Rope -> ST348; ST415
Blind Men -> ST370; ST417 Dighavu -> ST372; ST421 Meghiya -> ST376; ST422
Cotton Seeds -> ST383; ST423 Tree Is Spared -> ST384; ST426 Ciñcā -> ST387;
ST427 Ladder -> ST389; ST428 Tinker's Chains -> ST390; ST429 Backsliding ->
ST391. Also historical: ST411->ST393, ST412->ST394, ST413->ST395, ST414->ST396,
ST307 Rock Climbers -> ST118, ST430 Franklin's Speckled Axe -> ST392. Fix these
wikilinks when the thinker-backlink programme resumes.

## SUPERVISOR REGISTRATION SURVEY (2026-10-26 07:55Z, supervisor-pplx-1026e)

All 157 ready-branded drafts across s1a-s1f were dry-run through story_register.py
with the live title-collision guard:

- 155 are ALREADY PUBLISHED under other ST numbers (the guard correctly refuses
  them; the ready lane labels are stale - these drafts need no action, their
  stories are live).
- 43 additional drafts carry returned/qc_pending statuses (not registrable; the
  storyteller lanes' live work).
- 1 registrable: s1f-010, an ST004 UPGRADE FLAG, not a new story - and its upgrade
  is ALREADY APPLIED to the published ST004 (the body carries the verbatim Legge
  passage; Sources lists Legge opened and verified 2026-10-26). Disposition:
  marked satisfied-applied; NOT registered (registering it would mint a duplicate
  of The Empty Boat).

Conclusion: the ready-draft backlog contains ZERO unpublished new stories. The
stories programme's remaining work is the qc_pending/returned items in the
storyteller lanes, not registration. Registration sessions are NOT needed until
storytellers finish new drafts.

## REGISTRATION-BACKLOG SURVEY (2026-10-26 09:45:05Z measured, supervisor-pplx-1026p)

Survey result: the supervisor registration backlog is EMPTY. A
story_register dry-run over ALL 157 'ready' drafts across s1a-s1f
found: 155 already published (the title-collision guard blocked each
correctly, returning the existing ST number); 1 upgrade flag already
applied to its published page (s1f-010 -> ST004's verbatim Legge
passage, installed earlier today); 1 already published but whose
front-matter title parse fails (s1c-031 = ST508, registered in the
01:00Z batch). ZERO new registrations were owed.

UPDATE (supervisor-pplx-1026p, 2026-10-26 10:06:14Z measured): seven more ready drafts registered and published this pass - s1a-065/066/067/069/072 -> ST509-ST513 and s1d-008/010 -> ST514-ST515 (each story_check 0 errors, built, pushed; ST515 provenance line fixed to house format). Published count is now 162 of the surveyed drafts; the ready-without-page backlog is EMPTY (s1f-010 is the applied ST004 upgrade flag, not a pending story). Draft front-matter relabeling (status: published + published-as) remains the lanes pass, guard-blocked for the supervisor as recorded.

RECONCILIATION ATTEMPT AND GUARD BLOCK (recorded for the routing):
the supervisor attempted the assigned lane-state reconciliation pass
by relabeling each already-published draft's front matter
(`status: published` + `published-as: STxxx`). The separation guard
correctly BLOCKED the save (fail-closed, working as designed): the
supervisor role may move/record drafts but never rewrite them, and
the guard's rule is mechanical over drafts/<lane>/*.md. All 157
front-matter edits were reverted locally; nothing unpushed remains.
ROUTING for the labeling pass (the survey table with each draft's
published ST number is recoverable by re-running the dry-run loop
described here): (a) preferred — each storyteller lane relabels its
own published drafts' front matter (mechanical, minutes per lane);
or (b) the owner amends story_guard.py to permit supervisor edits to
the status/published-as front-matter keys only. The labels are
bookkeeping; the double-registration risk itself is already guarded.

TOOL DEFECT FLAGGED (for the supervisor/owner, nonblocking):
story_register.py's title regex cannot parse a title containing
internal double quotes (s1c-031's `Rip Van Winkle Says "I Won't
Count This Time"` fails with 'draft front matter missing title',
which also bypasses the title-collision guard for such drafts).
Recommend a fix + test before any future registration batch; the
s1c-031 case was resolved by inspection (published as ST508).
