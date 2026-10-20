# Enrichment protocol (read fully before touching a page)

Goal: turn thin concept pages into pages the owner can mine for inspiration, serendipity and essay material on
Genuine Flourishing, alleviation of suffering and wisdom development. Standard = `EXEMPLARS.md` (Dao, De).
Voice = `HUMANIZER-SKILL.md` (read it; its rules are binding). Facts = verified, or omitted.

OUT OF SCOPE: story pages (`content/stories/`) and the stories pipeline (`PROTOCOL-STORIES.md`)
are handled only by agents holding the Storyteller prompt. Do not edit them; flag issues to
the supervisor.

## 0. Tooling (run from repo root; no install needed)
| Need | Command |
|---|---|
| Next candidates (highest degree first) | `python3 scripts/enrich_stats.py --show 40` then skip ids in `docs/enrichment/progress.json` |
| How the compendium uses the concept | `python3 scripts/enrich_find.py neighbors "<id>"` and `... context <principle-id>...` |
| Unlinked mentions elsewhere (saturation) | `python3 scripts/enrich_find.py mention "<term>" "<variant>" --concept "<id>" --max 60` |
| Does a concept/kernel already exist? | `python3 scripts/enrich_find.py title "<text>"` ; `... resolve "<id>"...` |
| Validate your edits | `python3 scripts/enrich_validate.py` (all modified) or pass paths |

## 1. Per-concept workflow
0. IS IT A CONCEPT? A concept is an individual object with a clearly defined meaning and
   context: a named thing a tradition or science actually defines (standard: The having
   mode, Beginner's mind, Premeditatio malorum). It is NOT a principle (imperative or
   normative claim, e.g. "Pursue becoming, not arrival"), NOT a comparison ("X versus Y"
   — create the granular components instead), and NOT an invented term no source defines.
   If the page you took is one of these, or you find one while working, flag it in
   `concept-namespace-audit.md` (do not enrich it as a concept) and follow its process
   rules. Verify in an opened source that the term is defined before writing a concept
   page; zero hallucination applies to the concept's existence itself.
1. READ the file in `content/concepts/<id>.md`. The one-line seed (e.g. "Care" — Noddings, Caring) names the tradition/source. Keep the front-matter byte-for-byte.
2. READ how the compendium uses it: the entries under "Cited in ..." (titles + `context`), and the facet headings. The page must say what the compendium's principles do with the concept (cite their IDs and titles accurately).
3. RESEARCH with `search_web`, `fetch_url`, `search_academic`. Prefer: Stanford Encyclopedia of Philosophy, IEP, Britannica, primary texts (chapter/section), review articles/meta-analyses (PubMed, journals), university presses. Verify: definition, origin (who, when, which work), key distinctions, main criticisms or limits, empirical status for psychology claims (including failed replications / small effects when they exist).
4. WRITE the page (section 2). Humanise (section 3).
5. SATURATE connections (section 4).
6. VALIDATE (`enrich_validate.py`) and fix every ERR. Log in your batch file (section 6).

## 1a. Fast-track bar for empty or very poor concepts (owner directive, 2026-10-20)

**Eligibility is per item, by connections (owner rule, 2026-10-20): a concept page with
FEWER THAN 15 connections (graph degree < 15) is fast-track eligible; a concept with 15 or
more connections follows the NORMAL track even when its page is thin.** Check the current
degree (`python3 scripts/enrich_find.py neighbors "<id>"`), not just the stale queue. The
item must sit inside the worker's OWNED band manifest, have no unresolved QC or correction
findings, and not be under another live baton. An already-adequate page gets the light check
(skip-ahead rule, §1). A page under live QC corrections remains a normal item.

**The bar.** Accurate minimal content, enough for a writer to understand what the concept
is and get the gist:

- ONE verbatim definition-or-passage quote from ONE opened authoritative source (SEP/IEP,
  a primary text, or a peer-reviewed source), formatted as a blockquote with locator and
  source link. Zero-hallucination and verbatim rules apply unchanged (any quoted words
  must match the opened source word-for-word).
- A short accurate synthesis: what the concept is, who defined it (if the opened source
  names them), and one distinction or piece of context the quote does not carry.
- The `## Sources` line with the opened URL; the Cited-in list, front-matter and all
  existing wikilinks preserved unchanged.
- One source is the default scope, not an absolute prohibition: nothing prevents more where
  useful, but keep every claim within the opened evidence and keep the ledger
  (§1 step 3 evidence standard: no source-supported claim turned into an invention).
- The IS IT A CONCEPT check (§1 step 0) comes first, unchanged. The advisor QC cadence
  (first item, milestones) and the humanizer rules are unchanged.
- Skip the saturation hunt (§4) and cross-link proposals unless an obviously missing
  reciprocal jumps out; note that in the batch log. Full §1-§4 applies to normal items.
- Validate with `python3 scripts/enrich_validate.py --fast-track <file>`: the fast-track
  profile waives the prose word MINIMUM for the item; the maximum and the source-URL,
  metadata, link, protected-section and humanizer checks are unchanged. Mark the item done
  with a note that it was fast-track enriched.

Calibration example: `content/concepts/Working memory capacity limits.md` (Cowan 2001).

**Where the fast-track items live.** The entire weak-concept queue (2,189 items) is already
assigned across manifests w1a-w1af, so no new wf-bands can be minted without double
assignment. The 27 never-claimed tail bands (w1f-w1z, w1aa-w1af — 1,879 items; w1f is now
claimed) hold most of the pool: claiming one and working its <15-connection items at this bar
is the fast-band pipeline. Their ≥15-connection items follow the normal track. Daoist and
Buddhist concepts are worked first within a band where identifiable (many tail items are
tradition-neutral psychology concepts). Available tail bands are published on the TASKBOARD.

## 2. Page template (after unchanged front-matter)

Skimmability rule (added 2026-10-19, owner request): the page must be scannable. Use short
paragraphs (2-4 sentences) and `###` subheadings in sentence case between them. Never bold text
in prose (validator ERR); subheadings carry the visual hierarchy. Standalone verbatim source
quotes go on their own blockquote line (`> "..."` followed by the source link) — the site renders
them as a gold callout, and the validator excludes quote lines from the prose word count.

```
<opening paragraph: plain definition, original-language term, where it comes from (primary text + locator)>

### <short sentence-case label for the idea's core or history>
<1-2 short paragraphs>

### <short label for the key debate, distinction or evidence>
<1-2 short paragraphs, include the best objection or limit>

### In the compendium
<bulleted list, NOT a dense paragraph: one line per principle, `[[P### — Title]]` followed by a
short clause on what the principle does with the concept; one line per cross-tradition parallel
(comparisons marked as comparisons); optional line on how the stories illustrate it>

## Related concepts

- [[Existing Concept]] — one short clause saying HOW it connects (not just "related")
- ... (5 to 12 lines; semantic, contextual, epistemic and thematic neighbours that EXIST in the repo)

## Sources

- [Author, Work (year), locator](https://...) — what this source supports
- ... every page you actually consulted, as a markdown link; books without URLs link to where the
  quote or claim is verifiable (publisher page, verified excerpt, scholarly PDF)
- keep the original citation lines that were already there (hyperlink them too when they carry a URL)

## Cited in <whatever heading was there>

(keep exactly as found: every original [[link]] line stays; you may fix obvious duplicate lines, never delete a link)
```
Paragraph plan (adapt; do not mechanically repeat one skeleton across pages):
- P1: plain definition, original-language term in script when relevant, where it comes from (primary text + locator), what it is NOT if a common misreading exists.
- P2: the idea's depth: key distinction, internal debate, evidence status or textual detail that makes the reader smarter. Include the best objection or limit when one exists.
- P3: the compendium's use: which principle IDs carry it and what they do with it (read them first), plus verified cross-tradition resonances (use "resembles", "parallels"; never claim historical influence unless a source says so).
- Optional P4: a usable essay angle: a real tension, an under-noticed bridge between traditions, a question the concept raises for suffering or wisdom. Must follow from verified material; mark interpretation as interpretation.

## 3. Voice rules (summary; full text in HUMANIZER-SKILL.md)
- Plain, specific, calm. A knowledgeable person talking to a curious adult. Concrete nouns, real names, real chapter numbers.
- Avoid: significance inflation, "serves as/stands as", promotional adjectives, vague attribution ("scholars say"), rule-of-three padding, "not just X but Y" staging, synonym cycling, -ing tails ("highlighting...", "underscoring..."), generic upbeat endings, bold, emojis, curly-quote inconsistency, title-case headings. Dashes: max 3 per page (prefer commas, colons, parentheses).
- Vary sentence length. Use "is" and "has". First person never. Do not address the reader as "you" except where quoting a principle.
- Technical terms are welcome when defined once.

Speed directive (owner, 2026-10-19): same binding rules as the principles protocol —
advisor QC only on the first item and every 5th (plus when uncertain), no separate draft
file per item (write to content/ and push WIP), one commit per item, research in batches
(one source opening serves several concepts), skip-ahead on pages that already meet the
bar. Target <= 5 minutes per simple item. Zero hallucination, opened sources, validator
clean, humanised text — the quality bar does not move.

## 4. Connection saturation (the part that makes the wiki a wiki)
For each concept find every sensible neighbour and make the edge exist:
- semantic: synonyms, near-synonyms, opposites, parent/child concepts, same idea in other traditions
- contextual: same thinker/work/school, same practice or situation, same historical debate
- epistemic: methods, theories, evidence or critiques about it; what it presupposes; what it explains
- thematic: flourishing, suffering, wisdom, virtue, attention, relationship, death, etc.
Method: (a) `neighbors` to see current edges; (b) `title` searches for variants; (c) `mention` searches for the term and its variants in principles/stories/kernels to catch unlinked uses; (d) skim candidate concept titles in the same domain.
Then:
- put 5-12 best EXISTING concept/kernel links in this page's `## Related concepts` with a "how" clause. Targets must exist (`resolve`).
- write cross-link proposals (shared files are applied later by a script; DO NOT edit other entries yourself):
  `docs/enrichment/proposals/<batch>.json`
  ```json
  { "reciprocal": [ {"into": "Wu wei", "link": "Dao", "why": "the pattern wu wei aligns with"} ],
    "inline":     [ {"into": "AF021", "concept": "Ubuntu", "phrase": "Ubuntu: I am because we are"} ] }
  ```
  `reciprocal` = add this concept to another concept/kernel's Related list (use for every Related line you wrote). `inline` = an entry (usually a principle) names the concept in plain text but does not link it; give the EXACT phrase as it appears. Only propose inline links when the entry really means the concept (check the snippet); never for generic words ("care" in "take care").
  The `why` clause is copied verbatim onto the public page. Write a short, reader-facing
  explanation of the relationship, not a justification to the supervisor. Put audit notes
  such as “stub page”, “cites no principle”, “rewritten body” and “opened source” in `notes`,
  not `why`. An existing link is a navigation choice, not evidence for an outside fact.
- do not invent concept pages as a side effect of enriching one page. Owner rule (2026-10-19):
  you MAY add a new concept page when, and only when, (a) it is relevant to the wiki goal — guiding
  people toward alleviating suffering, wisdom and genuine, adaptive flourishing — (b) no existing
  concept already represents it (check with `title`/`resolve` searches, plus `mention` for unlinked
  uses), and (c) you have a real source for a one-line seed. In that case: create
  `content/concepts/<Name>.md` with the standard front-matter (copy the pattern from an existing
  concept in the same domain; `id`, `file` and `type` correct), seed body, validate, then enrich it
  fully per this protocol in the same session if time allows. Log it in the batch file under
  `new_concepts` with the source. If it cannot be created in-session, fall back to `missing_concepts`.

## 5. Absolute rules
1. No invented facts, quotes, citations, dates, page numbers or effect sizes. If a claim is not confirmed in a source you opened, delete it or weaken it to what the source supports. Quotation marks only for text you saw verbatim.
2. Do not edit front-matter. Do not remove any original `[[link]]`. Do not touch `site/`, `scripts/`, or other entries (proposals only).
3. Principles are out of scope for rewriting (they get their own pass later).
4. Keep the owner's compendium voice for how principles are described: quote principle titles exactly as in the file.
5. Never use the compendium itself as evidence for an outside fact.
6. If a concept is too ambiguous to write honestly (generic word with no clear tradition), write for the sense the linked principles use, say so in one sentence, and flag it in the batch log.

## 6. Batch log (required)
`docs/enrichment/batches/<batch>.json`:
```json
{ "batch": "w1-a", "done": ["Ubuntu", "Care"], "flagged": {"Care": "ambiguous: Noddings vs generic"},
  "missing_concepts": [{"title": "Ethics of care", "seed": "Noddings 1984; Tronto 1993", "why": "..."}],
  "sources_checked": 34 }
```

## 7. SAVE EARLY AND OFTEN (non-negotiable)
Anything not pushed to GitHub is lost if the session or trial ends. State transitions use
`python3 scripts/enrich_state.py <band> start|done <Concept>` (see TASKBOARD.md rule 2).
After EVERY state change, and at least every ~15 minutes of work (mid-concept WIP commits are
recoverable), run: `scripts/enrich_save.sh "enrich: <concept> (<band>)"` — it commits, pushes,
and verifies the remote head; it fails loudly if the push does not land.
