# PROTOCOL-STORIES — the Storyteller pipeline

Two enrichment pipelines run side by side and never merge:

- **Enrichment pipeline** (PROTOCOL.md, PROTOCOL-PRINCIPLES.md): workers enrich principle and concept pages inside bands (p1a…, w1a…).
- **Stories pipeline** (this document): storytellers produce new **narrative objects** — real people, biographical accounts, parables, myths, metaphors, fiction — that support, illustrate and integrate principles for the owner's essays on genuine flourishing, alleviation of suffering and wisdom development.

**Hard separation rules:**
- Only agents holding the **Storyteller prompt** may work lanes, drafts, story pages or story tools. Ordinary workers do not touch story pages or the stories pipeline, even inside their band, even if a story is cited by their principle body. Discovering a defective story? Propose via a supervisor note; do not edit it.
- Storytellers **never** write to principle/concept pages, band manifests, queues, progress.json, or shared pipeline files — not even to append backlinks, not even to a released band. Every wiring of a story into principle pages is done by the **Supervisor** at integration (see "Integration", below).
- The supervisor's normal handoffs stay in force: QC via advisor, handoff currency, TASKBOARD coordination.
- A stale baton is not permission to cross roles. A storyteller does not become supervisor, and a worker does not become storyteller, because a baton went stale.

## Lanes and claiming

- Storyteller lanes are named **s1a, s1b, s1c, …** Claim one the same way workers claim bands:
  `python3 scripts/baton.py clock-in s1a <name>` — keep the fresh clock-in rule (20 min).
- Lane scope is assigned centrally on `docs/enrichment/STORIES-TASKBOARD.md` (the registry): target principles, the missing angle, stories already in flight. Two stories for the same principle are allowed only when their recorded angles differ.
- Tellers avoid ordinary worker bands entirely. Drafts live in **lane-owned paths**: `docs/enrichment/drafts/<lane>/` (e.g. `drafts/s1a/s1a-001.md`), keyed by the lane-local id — NOT by `ST###`, which the Supervisor assigns only at publish.
- **Tell three or fewer stories at a time.** Work them in parallel only when research is asynchronous (reading a biography while another story waits on source verification). One story at a time is the default.
- Push via `scripts/enrich_save.sh` after every draft milestone and every ~10 minutes; sessions die without warning. Any storyteller can push lane state; tellers must not change another lane's data.
- If the supervisor baton is stale, tellers **hold the hand-off**: notes in handoff.md / STORIES-TASKBOARD, no direct principle-page or registration work. If they touch state, do it via a TASKBOARD ROUTE for the supervisor to apply — never by hand into shared files.

## The standard: a story page must be Principle-Exhaustive

The page must give an essay writer the clear idea, the gist, by reading the page alone — able to talk about it in an essay, or consult the sources for more depth. A story page is principle-exhaustive when:

1. **Complete arc.** The narrative carries the full situation → complication → turn → outcome. It can be retold from the page alone; no teaser-ellipsis ("read the source for what happened next"), no untold half. An essay writer who has read only this page can recount the story accurately.
2. **Principle-complete.** The story must carry the principle's whole arc — its set-up, its operation, its consequence — not one facet. If a good story cannot honestly carry every facet (a parable on one movement of the principle), the draft names which facets it does NOT carry, so the lane can commission the complementary angle later.
3. **The principle must be stated, not implied.** The mapping is explicit on the page: the writer must be able to identify the principle from the page, and each principle link is justified in one short explicit clause (who, where, what happened, why it matters for the principle) — mirroring the public-why clauses the enrichment pipeline uses.
4. **Interpretation, not embellishment.** No invented dialogue, invented motives, invented scene-setting, invented chronology, or fictional mechanisms dressed as fact. Parables, myths and fiction are labelled as such (genre is stated in the provenance line); real people are cited only with claims the opened sources support. The compendium's own reading is the interpretation paragraph, and it reads as interpretation, not as the source's voice.
5. **Verified text, verified claim.** Every quote verbatim from an opened source with a locator (chapter/verse/passage), every factual claim traceable to that source. "Read at" URLs the agent never actually opened are not evidence; name the access event in the ledger. Paraphrase is marked as paraphrase.
6. **Gist-first.** The opening italic provenance line and first paragraph deliver the gist. An essay writer should grasp what the story is and why it matters for the principle within the first ~80 words.
7. **Essay-service.** The page alone must let the writer (a) state the principle accurately, (b) retell the story accurately enough to use it in an essay, (c) quote it with correct citation, (d) know where to go deeper. If any of these fails, the story is not done.
8. **No cheap novel-to-essay shortcuts.** "Same-age bestseller / leadership-business memoir" carries no weight; depth and aptness outrank familiarity.

## Quality bar (non-negotiable, same as the enrichment pipeline)

- **Zero hallucination.** No facts or quotes that do not come from a source the agent actually opened (web search + fetch; the owner's primary-source library is in `docs/PRIMARY-SOURCES.md`). Fabricated characters, unverifiable meetings, or invented monasteries = pipeline breach, story rejected.
- **Humanised text** per `docs/enrichment/HUMANIZER-SKILL.md`.
- **Coverage matrix in the draft's front matter** (template below): one row per facet of the principle, what narrative text carries it, and what source supports it. A rejected QC item is returned with `returned` and a reason.

### Draft template (lane path, e.g. `docs/enrichment/drafts/s1a/s1a-001.md`)

```markdown
---
lane: s1a
local-id: s1a-001
status: researching | drafting | qc_pending | ready | returned
target-principles: [D080]
target-angles: "qiwu (D080): Cook Ding told from the point of view of the ox"
evidence:
  - source: "Legge trans., Zhuangzi ch. 1"
    url: https://example.org/zhuangzi-1
    accessed: 2026-10-20
    quotes: ["The cook... verbatim"]
coverage-matrix:
  - facet: "the principle's set-up"
    carried-by: "para 1"
    supported-by: "Legge ch.1 ¶4"
---

<Narrative and page content here — same format as a published story page>

## QC notes
- 2026-10-20 advisor QC (first item): ...fixes applied...
```

## Workflow (per story)

1. **Research.** Use web search + fetch; open every source you cite. Deep digging beats famous retellings — a story that is not "already everywhere" is a plus, provided it is verifiable. Note access events in the evidence ledger.
2. **Draft** in the lane path with the front matter above. Prose words 150–480 (target band ~250–450; 150 is a floor, not a goal — a principle-exhaustive story usually needs more than the bare minimum).
3. **Check** with `python3 scripts/story_check.py <draft> --context draft` (or `--context published` for a published page). It enforces: word range, banned phrases, staging patterns, no bold in prose, dash budget, link resolution, sources URL, Principles section.
4. **QC.** First item and every 5th: advisor QC per the supervisor QC process; also `check_rule` (markdownlint-style) — see the QC checklist at the bottom of this file. Fix; re-run story_check.
5. **Freeze.** Mark the draft `status: ready`. The story then goes to `published_backlinks_pending` (page live, backlinks waiting) or `rejected`.
6. **Push** via `scripts/enrich_save.sh` (or direct git push) after every milestone.
7. **Integration (Supervisor only).** For a ready story the supervisor:
   - runs `python3 scripts/story_register.py <draft> --id ST### --dry-run`, then without `--dry-run`;
   - validates (structural + story_check `--context published`), builds, and pushes;
   - records the ST id assignment and the published target in the registry;
   - writes the backlinks into the principle pages' `## Stories` sections — **only if that principle's band is not live**; if it is live, defer the backlink or ROUTE the exact append to the band owner;
   - routes any rejected draft back with `returned` + reason.
   The registration tool refuses to touch protected targets and fails without partial writes.

## The QC checklist (supervisors, reviewers)

- [ ] Narrative complete on the page (retellable without the source)?
- [ ] Principle mapping explicit; each principle link justified in one short clause?
- [ ] Every factual claim traced to an opened source; quotes verbatim with locators?
- [ ] Genre stated in the provenance line; fiction labelled fiction?
- [ ] Interpretation reads as interpretation, not as source voice?
- [ ] Gist lands in the first ~80 words?
- [ ] Evidence ledger present with access events?
- [ ] Coverage matrix names the facets not carried?
- [ ] Humanizer pass done (no AI vocabulary, no staging patterns)?
- [ ] Links resolve; Sources section has URLs; word budget within 150–480?
