# Owner update: non-concept nodes, thinker pages, and the concept-tail plan

Issued with owner authorization on 22 October 2026 (session of worker-sup-5e8a3c7f,
supervisor baton). This update supplements OPERATIONS and both content protocols.
It does not transfer existing band ownership. The owner reviewed the remaining
concept backlog (978 pages not recorded done in any w-band) and issued three
directives, recorded here verbatim in substance.

## Directive 1 — Delete non-concept nodes

The owner: "All items that are NOT concepts, namely something that isn't a clearly
defined object with a unique representation, was supposed to be deleted. I have NO
use of nodes such as 'Allport' or 'Crenshaw' for creativity and idea-generation —
it is noise."

A body-pattern scan (zero prose + seed line of the form "Name — years.") found
exactly 25 person/organization-index pages in content/concepts/, all never
enriched, all backlinked ONLY from SO-principle pages' "Cited in psychology
parallences" sections (1–3 links each):

Allport, Asch, Axelrod, Benet-Martínez et al, Berry, Biglan et al, Bourdieu,
Bronfenbrenner, Castro et al, Chida et al, Crenshaw, Eisenbruch, Ericsson et al,
Holt-Lunstad et al, Marmot, Meyer, OECD, Phinney, Putnam, Ridgeway, Sampson et al,
Tajfel et al, Uchida et al, Verduyn et al, Whitbeck et al.

DELETION MAP requirements for the executing worker (advisor-reviewed):
- This is a supervisor-level cleanup, not a worker exception to the queue rule.
- Biglan et al is ASSIGNED in the w1q manifest (unfinished) — its assignment must
  be retired in the band state/manifest, not just deleted.
- All 25 are in queue-concepts.json — remove them there too, noting that rank
  shifts must not disturb frozen manifests (inspect how enrich_manifest.py reads
  ranks before editing).
- Backlink removal: READ each inbound context in the ~30 SO principle pages.
  Preserve author names, dates and citations as ordinary text; retarget to an
  existing concept link where the context clearly points at one; otherwise remove
  only the wikilink markup. Record owner-directed link removals explicitly.
- Validate changed principle pages against the PRE-CHANGE baseline (the lost-link
  validator must see the removal as owner-authorized, not silently bypassed).
- Check links across ALL content and navigation/registration files (aliases,
  fragments), not just the site build.
- The owner's criterion ALSO applies to already-done pages: future passes should
  flag person-index-style nodes among recorded-done concepts for disposition.
  Named theories/techniques containing a surname (e.g. "Maslow's hierarchy") are
  NOT deletion candidates. Ambiguous cases get flagged, not heuristically deleted.

## Directive 2 — Mint and connect the genuine concept stubs

The owner: "All the near-empty stubs should be minted and connected. 'Aisthesis'
and 'Wabi-sabi' are good examples because all of these are important!"

- After the 25 deletions, mint new concept bands from the cleaned
  queue-concepts.json via scripts/enrich_manifest.py (standard band sizes,
  degree-ordered; the manifest tool avoids collisions with existing ownership).
  Only genuinely unassigned stubs are mintable; assigned-but-unfinished items
  (e.g. Antidotes to afflictions in w1q) stay in their current bands.
- "Connected" is part of the directive: enrichment must add Related-concepts
  links, not just prose. Aisthesis and Wabi-sabi are the owner's named examples
  of high-priority stubs.
- Word-count caveat for planners: the earlier "838 thin / 32 mid / 83 substantial"
  split counted headings, Sources rows and wikilinks as words — recompute with
  prose-only counts before treating any page as already-substantial.

## Directive 3 — Thinker pages (new node type)

The owner: "We could have a node for all the important thinkers and contributors
to the principles on the wiki — a rich and relevant page to understand their
story, their why, their core ideas and their legacy."

- The deleted person-INDEX pages are noise; what the owner wants instead is a
  proper THINKER page type: rich biographical pages (story / why / core ideas /
  legacy) for the important contributors behind the principles.
- OPEN DESIGN QUESTIONS for the owner (do not guess): page type name and
  frontmatter schema (new type "thinker"?), where they live (content/thinkers/?),
  how principle/concept pages link to them (new section convention?), naming
  (full name "Gordon Allport" vs surname), and scope (which thinkers qualify —
  presumably those already named in Cited-in sections and Sources).
- Until the owner answers these, do NOT mass-create thinker pages. A pilot of a
  few (owner-suggested) is the right scale to propose the format.

## Deferred (owner did NOT select)

- "Verify and bless the 83 substantial pages" was proposed and not chosen —
  substantial length alone is neither completion nor reduced source-QC. Leave as
  a separate deferred workstream unless the owner revives it.

## Execution order (advisor-reviewed)

1. Sync, take supervisor baton, read this doc + OPERATIONS before acting.
2. Reconcile pages/queue/manifests/done-lists with their actual schemas (the
   "978 unqueued" figure includes assigned-but-unfinished items).
3. Prepare the 25-node deletion map (inbound contexts, retained attributions,
   replacement links where justified, assignment retirement for Biglan et al).
4. Apply and push the bounded cleanup; validate against pre-change baseline.
5. Mint bands from genuinely unassigned eligible stubs only.
6. Begin enrichment on Aisthesis and Wabi-sabi with source verification and
   first-item advisor QC — minting alone does not fulfill "minted and connected".
