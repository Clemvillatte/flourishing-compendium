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
1. `git pull`; read `docs/enrichment/PROTOCOL.md` (the per-concept workflow, template, rules) and `EXEMPLARS.md`.
2. `python3 scripts/enrich_stats.py --show 60` lists weak concepts by degree; skip anything in `docs/enrichment/progress.json` ("done").
3. Enrich in batches of ~5 concepts (parallel sub-agents are fine; each writes only its own concept files plus `proposals/<batch>.json` and `batches/<batch>.json`).
4. After each wave: `python3 scripts/enrich_validate.py` (must be all ok) -> `python3 scripts/enrich_apply.py` (applies cross-link proposals) -> validate again -> `python3 scripts/build.py` (must succeed) -> merge batch logs into `progress.json` -> update the STATUS table below -> commit -> push.
5. Quality control: have an independent reviewer (different model or fresh sub-agent) re-verify a sample of claims per wave against the cited URLs; record the result under "QC log".

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
(updated by the lead agent at each milestone)

| Milestone | State |
|---|---|
| Tooling + protocol written | done |
| Wave 1 (top-degree concepts) | in progress |

## QC log
(empty)

## Open flags / missing concepts reported by workers
(see `docs/enrichment/batches/*.json` -> `flagged`, `missing_concepts`)
