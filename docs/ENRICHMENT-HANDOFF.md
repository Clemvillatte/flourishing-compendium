# ENRICHMENT HANDOFF (blank-slate agent: start here)

Owner: Clemvillatte. Repo: github.com/Clemvillatte/flourishing-compendium (GitHub connector must be connected; push to `main` deploys via GitHub Pages in ~40 s).
The site/mobile work is documented separately in `docs/MOBILE-HANDOFF.md`. THIS file covers the content-enrichment programme.

## Mission (owner's words, condensed)
Many concept pages are weak (one seed line, no definition or explanation). Enrich them to the standard of the Dao and De pages
(`docs/enrichment/EXEMPLARS.md`). Work in order of most connections (degree) to fewest. Concepts first, then the rest of the wiki, then
review/rewrite the old principles. Verify connection saturation (semantic, contextual, epistemic, thematic). Purpose: inspiration,
serendipity and material for essays on Genuine Flourishing, alleviation of suffering, wisdom development. Humanise all text
(`docs/enrichment/HUMANIZER-SKILL.md`). ZERO hallucination: every fact verified in a consulted source. Keep this handoff current at every milestone.

## How to resume (5 steps)
0. `git pull`; claim a band on `docs/enrichment/TASKBOARD.md` (parallel-agent rules are there; the lead is the w1a agent). Then read `docs/enrichment/PROTOCOL.md` (the per-concept workflow, template, rules) and `EXEMPLARS.md`.
1. `python3 scripts/enrich_stats.py --show 60` lists weak concepts by degree; skip anything already done (check your batch file and `docs/enrichment/progress.json`).
2. Enrich concepts one at a time, in degree order within your band; save after each (see PROTOCOL.md §7).
3. After each wave: `python3 scripts/enrich_validate.py` (must be all ok) -> the LEAD ONLY runs `python3 scripts/enrich_apply.py` (applies cross-link proposals; it edits other bands' files) -> validate again -> `python3 scripts/build.py` (must succeed) -> lead merges batch logs into `progress.json` -> update the STATUS table below -> commit -> push.
4. Quality control: have an independent reviewer (different model or fresh sub-agent) re-verify a sample of claims per wave against the cited URLs; record the result under "QC log".

## Tooling (all in `scripts/`, stdlib only)
- `enrich_stats.py`: rebuilds the site's link graph (wikilinks, undirected), ranks weak entries (`--type concept|principle|...`, `--weak N`) -> `docs/enrichment/queue-<type>s.json`.
- `enrich_find.py`: `title | mention | neighbors | context | resolve` corpus queries for saturation checks.
- `enrich_validate.py`: guards (front-matter unchanged, no original link lost, links resolve, prose 150-480 words, source URL present, banned AI vocabulary, dash budget).
- `enrich_apply.py`: applies `reciprocal` and `inline` link proposals deterministically.

## Facts about the data
- 2,261 concepts; 2,189 had < 120 prose words at the start (most are a single seed line like `"Care" — Noddings, Caring` plus a list of principles that cite it). Only ~61 were rich.
- Edge = `[[wikilink]]` anywhere in an entry body, resolved by `file` or `id`, undirected. Concept degree max at start: 42 (Ubuntu).
- Concept files end with "Cited in ..." lists of principles: these are real edges, never delete them.
- Principles are NOT to be rewritten in the concept pass (separate later pass; many are weak/old).

## STATUS
(updated by the lead agent at each milestone; per-agent detail in `batches/*.json`)

| Milestone | State |
|---|---|
| Tooling + protocol written | done |
| Coordination: taskboard + parallel rules | done |
| Wave 1 (top-degree concepts) | in progress (w1a: Agent A; w1b-w1e open on TASKBOARD.md) |

## QC log
(empty)

## Open flags / missing concepts reported by workers
(see `docs/enrichment/batches/*.json` -> `flagged`, `missing_concepts`)
