# Work order: concept-tail cleanup and connection (self-contained)

Written 2026-10-22 by worker-sup-5e8a3c7f for any blank-slate agent. Everything
needed to execute is in this file plus the two companions below. If context is
missing, read: docs/enrichment/HANDOFF.md, docs/enrichment/OPERATIONS.md,
docs/enrichment/ENRICHMENT-HANDOFF.md, docs/PROTOCOL-PRINCIPLES.md,
docs/PROTOCOL.md (whichever applies to your item type).

## Read first (owner authority)

- docs/enrichment/OWNER-UPDATE-2026-10-22.md — the owner's three directives
  (delete non-concept nodes; mint and connect stubs; thinker-page proposal).
- docs/enrichment/sources/maintenance/person-node-deletion-map.md — the concrete
  25-node deletion map with every backlink line (33 backlinks across ~30
  SO-principle pages).

## Current state (verified 2026-10-22)

- All batons RELEASED; no live workers. Repo clean, all work pushed.
- Concept enrichment: 978 pages NOT recorded done in w-band state files. Of
  those: 25 are person/org index pages (deletion batch 1), the rest are genuine
  concept pages — thin stubs, some mid-state, some already substantial.
  CAVEAT: the "978" includes assigned-but-unfinished items (e.g. Antidotes to
  afflictions is assigned in w1q). Reconcile with actual manifest schemas before
  minting — read bands/*-manifest.json properly (key "concepts", not a bare list).
- Earlier thin/mid/substantial word counts included headings and Sources rows —
  recompute prose-only before treating a page as already-substantial.
- The owner explicitly DEFERRED "verify-and-bless the 83 substantial pages" —
  do not revive it without the owner.

## Task 1 — Delete the 25 person/org index nodes (supervisor-level)

Use the deletion map. Steps, in order:

1. Take the supervisor baton: `python3 scripts/baton.py clock-in supervisor <agent>`; push via `STORY_ROLE=supervisor scripts/enrich_save.sh "<msg>"`.
2. For each of the 25 nodes (list in the deletion map), work the backlinks
   FIRST: open each source page listed, read the line's context. Preserve
   author names/dates as plain text; retarget the link to an existing concept
   page when the context clearly points at one (e.g. a link to [[Asch]] on a
   conformity principle likely wants [[Conformity]]); otherwise strip the
   `[[ ]]` markup and keep the sentence. Do NOT delete whole lines blindly.
3. Validate each edited principle page against the PRE-CHANGE baseline commit
   so the lost-link check sees the owner-authorized removal: `python3
   scripts/enrich_validate.py --base <pre-change-commit> <page>`.
4. Delete the 25 concept files (`git rm`).
5. Retire the Biglan et al assignment in the w1q state/manifest (it is an
   unfinished w1q manifest item — use enrich_state.py missing/reopen as
   appropriate and record why).
6. Remove the 25 entries from docs/enrichment/queue-concepts.json (supervisor
   administration; inspect how enrich_manifest.py consumes ranks first so rank
   shifts cannot disturb frozen manifests).
7. Check links across ALL content + navigation/registration files (aliases,
   fragments) — do not rely on build.py alone. Then run build.py.
8. Record the cleanup in docs/enrichment/OPERATIONS.md supervisor log + ledger.
9. Commit and push after every few nodes; never batch everything unpushed.

Ambiguous person-ish pages beyond the 25: FLAG, don't delete. Named theories
("Maslow's hierarchy") are NOT deletion candidates. The owner's criterion also
applies to already-done pages — flag person-index-style nodes in done lists for
a future disposition pass.

## Task 2 — Mint and connect the concept stubs

1. After Task 1, mint concept bands from the cleaned queue:
   `python3 scripts/enrich_manifest.py <newband> --type concept` (standard
   sizes; the tool avoids collisions with existing ownership).
   Mint ONLY genuinely unassigned stubs — assigned-but-unfinished items stay in
   their bands.
2. "Connected" is part of the directive: each enriched page must gain
   Related-concepts links to existing pages, not just prose. Owner's named
   priority examples: Aisthesis, Wabi-sabi.
3. Enrich per docs/PROTOCOL.md (concepts): state transitions via
   scripts/enrich_state.py, validate with `--fast-track --base <baseline>`,
   save via `STORY_ROLE=<role> scripts/enrich_save.sh` (role from your baton),
   quotes only from carriers you actually opened, per-item ledger notes.
4. First item of a new worker: run advisor QC before marking done.

## Task 3 — Thinker pages (PROPOSED, blocked on owner answers)

The owner wants rich thinker pages (story / why / core ideas / legacy) for the
important contributors to the principles. DO NOT mass-create. Design questions
for the owner: page type name + frontmatter schema; directory (content/thinkers/?);
linking convention from principle/concept pages; naming (full name vs surname);
which thinkers qualify. Propose a small pilot (3–5 thinkers the owner names)
once the owner answers.

## Standing rules (unchanged)

- Never edit another band's files, progress.json, or queues (except
  supervisor-level owner-directed administration as in Task 1, recorded as such).
- Never run enrich_apply.py unless supervisor.
- No hallucination: every fact and quote from a source you actually opened.
- Push after every item and every ~10 minutes; only pushed work survives.
- The owner's criterion for deletion: a node must be "a clearly defined object
  with a unique representation"; scholar-index pages are noise for
  creativity/idea-generation.
