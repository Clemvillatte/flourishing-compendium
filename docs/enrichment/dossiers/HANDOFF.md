# Dossiers band handoff — read this first

Written 2026-10-23/24 by worker-pplx-dossiers-1023b and 1024, for any
blank-slate agent taking the dossiers baton. Everything below is what a
new agent needs to continue without this conversation.

## The mission, in the owner's words

The Dossiers project is the owner's special mission, run on the dossiers
worker baton. Guiding aim of the whole wiki: "Guiding people on the
process to alleviate suffering, detach from the self-as-object, cultivate
wisdom and genuinely flourish in an uncertain and overwhelming world
through Philosophy and Psychological Sciences."

The owner's binding format decision (2026-10-23): every dossier has three
sections, fusing three earlier proposals — Theme-Based Compilation /
Theme-Based Areas of divergence / Theme-Based practice. Location: the
Academy, as a Dossiers view beside MORE VIDEOS and DISCOVERY.

## Owner feedback of 2026-10-24 — this supersedes the v1 spec

The owner reviewed the first exemplar (The Self, v1 = narrow 12-entry
format) and set a new standard. Verbatim substance, do not lose it:

1. EXHAUSTIVENESS. "The idea is mostly to provide an exhaustive
   synthesis on-theme, the exhaustivity is mostly measured by the fact
   that most point of view and aspects are mentioned; so it is more that
   we don't want to forget aspects, concepts and POV, but we don't want
   to overload the Dossier with extensive and dense prose, one should be
   able to say 'I want to talk about anger', open the dossier and have
   a whole overview of the different takes on Anger they could find in
   the wiki."
   Translation: map, not essay. Every aspect/concept/POV the wiki holds
   on the theme appears; each entry stays concise (a line or two plus
   card links); dense prose is the failure mode. A reader opens the
   dossier and gets the whole overview.

2. SIDE TOC. A sticky table of contents on the side (not at the
   beginning) to navigate the headers quickly. Required in the Academy
   view; becomes necessary once dossiers are long.

3. PRACTICE SECTION — the Variation–Selection(+Retention) model, in the
   owner's words: "explaining the aspects that might need variation (to
   become adaptive and lead to genuine flourishing), selection is the
   different kernels that have been selected as ways to provide this
   variations in people's lives, the Retention aspect isn't always
   something we can easily integrate to the dossier, as it depends on
   individuals and their context, we can't fully predict that a
   variation will be retained, but we don't want to tell this either
   to people because we don't want them not to try. Retention is just
   what people keep because it works for them."
   Translation: the practice section has three movements —
   (a) Variation: name what needs to vary in a person's life on this
   theme (the maladaptive pattern, and the adaptive direction);
   (b) Selection: the chosen kernels, presented as the selected sources
   of that variation, each with its card link;
   (c) Retention: a light closing note phrased only as "what people keep
   because it works for them". Do NOT add disclaimers that retention
   can't be predicted — the owner explicitly does not want readers
   discouraged from trying.

4. DECISION TAKEN: rebuild The Self as the first exhaustive exemplar
   (owner chose "Rebuild The Self" over starting Attention/Cognition/
   Decision-Making when offered the choice).

5. REVISED TOPIC LIST. The owner wants "very clear dossiers, like
   commonplace books on specific topics like 'Cognition' 'Attention',
   'Decision-Making' etc." The abstract v1 titles are gone. Working
   list (proposed to the owner, not yet owner-ratified beyond the
   three named): Cognition, Attention, Decision-Making, Memory,
   Emotion, Perception, Habit, Motivation and Goals, Belief, Anger
   (the owner's own example), Wisdom and Judgement. Anger is clearly
   wanted — it was the owner's illustration of the format.

## Current state of the deliverables

- docs/enrichment/dossiers/the-self.md — The Self v1 (narrow exemplar,
  12 entries). HISTORICAL once the rebuild lands; keep until the v2
  rebuild replaces it, then delete or archive per owner preference.
- docs/enrichment/dossiers/README.md — index + v1 structure spec +
  v1 future list. NEEDS UPDATE to the v2 spec above (exhaustive map
  format, side TOC, Variation–Selection(+Retention) practice section,
  revised topic list).
- docs/enrichment/sources/dossiers/the-self.md — evidence ledger for
  v1. All v1 quotes are verified word-for-word against opened sources;
  this record stays valid for whatever v1 material survives into v2.
- site/assets/app.js + site/assets/style.css — the Academy Dossiers
  view, live and browser-verified. Architecture: window.fcDossiersData
  (a manually maintained transcription of the dossier markdown, block
  list with t: h/h2/p/q/n types), renderDossiers (grid),
  renderDossierDetail (band + body), dossierRich (rich-link renderer:
  [label](card:File) and [label](url:...) with HTML escaping and
  nested-paren handling), dossierCardUrl. CSS: .dossier-* classes at
  the end of style.css. A Dossiers button sits in renderAcademyHome
  beside MORE VIDEOS and DISCOVERY; view branches for 'dossiers' and
  'dossierDetail' in renderAcademy.
- The v2 rebuild IS DONE (2026-10-23, supervisor-pplx-895565b1 + concurrent
  verification passes by k1c/maintenance/ui workers): the-self.md is now the
  exhaustive map (140 concepts + 16 kernels + 2 sayings + SE shelves,
  169 card links all verified), with side TOC and Variation-Selection-
  Retention practice blocks in the Academy view. Known-good generator:
  python3 scripts/dossier_build.py (extracts glosses from the entry pages
  itself, writes the markdown AND splices the fcDossiersData into
  site/assets/app.js; rerun after editing MAP/OVERRIDES/KERNELS in the
  script). CAUTION: hand-polished glosses now live in the markdown of
  record; a rebuild regenerates them from the pages, so sync any manual
  markdown edits into the script's OVERRIDES or they will be lost.
- CONCURRENT-WORKER CAUTION: the Academy view data lives in the
  window.fcDossiersData block inside site/assets/app.js. It is GENERATED
  from the dossier markdown (scripts/dossier_build.py). If your rebase
  conflicts on app.js, DO NOT resolve it by keeping your side of the
  fcDossiersData block: take the code side, then regenerate the data from
  the markdown of record (python3 scripts/dossier_build.py writes
  markdown AND data together; or re-splice just the data). Two restores
  were needed on 2026-10-23 because merges kept dropping it.
  Remaining verification gap: live-browser check of the deployed view
  (sticky TOC, vs blocks, card links) was done by asset fetch + DOM-stub
  render test, not a real browser pass.

## Corpus survey (done 2026-10-23, from titles)

- ~256 entries carry "Self" in the title (concepts/kernels/principles).
- Related clusters by title: Identity 52, Mind 116, Awareness 28,
  Narrat* 26, Ego 20, Witness/Observer 5, Choice 17, Habit 43,
  Identity-stability clusters.
- The sweep for the v2 rebuild must cover ALL of these plus
  Atman/Anatta/Brahman/Advaita, ego dissolution, self-concept,
  self-esteem/self-compassion, self-efficacy, self-talk, narrative
  identity, minimal self, social identity, interdependent self, etc.
  Sweep by title regex first, then by tag/frontmatter, then by
  full-text grep for stragglers; organize into subthemes covering
  every POV (philosophical, contemplative, psychological, cultural).
  Known v1 subthemes to keep: what the self is taken to be; the
  observing self; the narrative self; the cultural/relational self;
  the self and suffering; deconstruction of the self.
- For future topics: the wiki has NO entries titled Cognition/
  Attention/Decision-Making/Memory/Emotion/Perception — those topics
  are covered inside specific entries (focused-attention meditation,
  attention restoration, mind-wandering, flow; heuristics, biases,
  choice overload/architecture, fast-and-frugal; etc.). Dossiers on
  those topics must be built by sweeping content, not titles.

## Verification standard (binding, from the owner)

- No hallucination: every fact and quote comes from a source actually
  opened (web search + fetch). The owner's primary-source library is
  docs/PRIMARY-SOURCES.md. Check it first.
- Humanise all reader-facing text per docs/enrichment/HUMANIZER-SKILL.md
  (no AI vocabulary, no em dashes outside quoted matter, no bold labels,
  no workflow language on reader-facing pages).
- Every quote: verified word-for-word against the raw text (curl or
  pdftotext), recorded in the evidence ledger
  (docs/enrichment/sources/dossiers/<slug>.md). Reader-facing phrasing:
  "Primary text; quoted passages checked" style, never session/baton/
  ledger/QC language.
- Card links: [label](https://clemvillatte.github.io/flourishing-compendium/#card=<encodeURIComponent(file or id)>);
  verify every target against actual content/ file names by script
  before pushing.
- Known carrier flags: deikman.com is suspended to curl — the recorded
  carrier is the Wayback snapshot (see ledger); SuttaCentral pages are
  JS-rendered — raw curl cannot re-verify, use the fetch tool's
  rendering; Masuda et al. 2004 PDF prints "rather than the attempting"
  (kept as printed, noted in ledger).

## Operations (how to work this band)

- Repo: Clemvillatte/flourishing-compendium. Clone via token in the
  remote URL (owner provides a fine-grained PAT per session; if the
  remote 401s, the owner must issue a new token).
- Push protocol: git push over HTTPS fails ("could not read Username").
  Use: timeout 90 scripts/enrich_save.sh "<msg>" (commits locally,
  fails at push — expected) then timeout 120 python3 scripts/api_push.py
  (prints "pushed via API: <hash>"; retries rebase races itself).
- Baton: python3 scripts/baton.py status / clock-in dossiers <agent> /
  release dossiers <agent>. Refresh remote status on every resume. The
  baton JSON change does not auto-commit — commit it explicitly.
- House rules: never edit other bands' files or progress/queues; never
  run enrich_apply.py; save after every item.
- The site files (site/assets/app.js, style.css) are shared assets
  outside the save helper's worker path filter — commit them manually
  (git add site/assets/... && git commit && api_push). The owner has
  explicitly authorized dossiers work touching them for this mission.
- The Academy view's data is a MANUAL transcription of the dossier
  markdown: after editing the markdown, mirror the change in
  window.fcDossiersData, then node --check, then a DOM-stub render test.
- Deploy: GitHub Actions (deploy.yml) rebuilds Pages; concurrent pushes
  by other bands cancel in-flight deploys (cancel-in-progress), so the
  live site can lag by a few minutes. Verify in a browser with cache
  disabled (CDP Page.reload ignoreCache) — the app.js is served with a
  ?v=<commit> cache-buster, so a stale index.html can pin an old
  asset. Bypass-cache reload before judging the deploy.
- Advisor: use it as planner and final verifier (the owner asked for
  the work to be "carefully thought-through aided by Advisor").

## Next steps, in order

1. DONE: The Self rebuilt as the v2 exhaustive exemplar (see Current
   state above). README.md updated to the v2 spec; the-self.md v1 is
   superseded.
2. Live-browser verification pass on the deployed Academy Dossiers view
   (cache-busted reload; check sticky TOC on desktop, collapse on
   narrow screens, vs blocks, card links opening cards).
3. Extend the Academy view: sticky side TOC for dossier headers; the
   restructured practice section (variation / selection / retention
   blocks) in both markdown and the view's data/renderer.
4. Verify in browser (band layout, TOC navigation, card links), push,
   update the ledger, release the baton, report to the owner.

## Session history (commits on main)

- fa87cc25 baton claim (v1 session)
- 6ce4e938 v1 dossier + index + ledger (rev1)
- 6c7f9b75 rev2 (generalizations removed, card links, further reading)
- 1056c557 rev3 (full raw-text quote verification, wording repairs)
- 145b2f950 docs for Academy integration
- 80eecec2 Academy view code (app.js + style.css)
- 512d859c band layout fix (title/subtitle stacking)
- c6660e20 ledger/README record live-browser verification
- e0677250 baton release (v1 session close)
- 2026-10-23T13:24:30Z worker-pplx-dossiers-1024 clocked in (current
  holder at time of writing; handoff written under this baton)

## Worker session record (worker-pplx-dossiers-1025, 2026-10-23)

The dossiers baton was held by the supervisor; this worker ran the
verification and second-dossier work alongside. All commits pushed to
origin/main.

Verification of The Self v2:
- 160 card targets verified against content/ file names (script); 0
  unresolved. Markdown and Academy data in exact parity (links, headings,
  quotes).
- 14 map entries truncated mid-sentence by the build script (ellipsis)
  completed from the linked concept pages' own opening text; 2 more
  non-ellipsis truncations (Self-regulation "ch.", Ego depletion "Hagger
  et al.") completed the same way.
- Two sayings printed the literal word "None" as their description; both
  given short source-faithful descriptions.
- Em-dash separators normalized to colons/commas in all non-quoted text
  (161 markdown lines, 12 Academy blocks) per the HUMANIZER rule.
- Two contradictory evidence labels corrected in the Academy data (Dalal/
  SEP -> Scholarly interpretation; Hayes et al. -> Scholarly review).

Renderer fixes (site/assets/app.js):
- Card URL double-encoding fixed: dossierCardUrl now decodes before
  encoding, so The%20witness no longer becomes The%2520witness.
- dossierRich extended to convert plain markdown carrier links
  ([label](https://...)) in quote attributions into anchors; they
  previously rendered as literal text on both dossiers.

Second dossier: Anger (the owner's own example of the format):
- 40 card entries across 7 subthemes, 5 verified quotes (Seneca De Ira
  II.III, I.II, II.XXIX; Shantideva VI.1; Aristotle NE IV.5 in the
  divergence section), 2 divergence research questions reduced to the one
  genuine Aristotle-vs-Seneca disagreement after the Carlsmith
  subsection was moved to the map as a research finding, VSR practice
  with 6 kernels.
- All quote carriers opened and verified this session (Gutenberg, Internet
  Classics, tibethouse PDF, PMC, PubMed-via-search). NE II.7 locator
  corrected after the carrier was opened (Book IV.9 is about shame).
- One invented entry ("Hatred never ceases by hatred") removed: no wiki
  card exists.
- Anger was lost from the Academy view in a concurrent regeneration
  (commit 6a7fa2c) and restored (commit 5982449).

Live verification: both dossiers confirmed rendering on the Pages deploy
(TOC, entries, quotes, practice steps, card links, carrier links), at the
commit the deploy had reached. The Pages deploy lags origin/main by
several minutes due to concurrent pushes; final state verified
programmatically on origin/main.

Flagged for other bands:
- The concept page "Righteous indignation (nemesis)" carries the wrong
  NE IV.9 locator; the passage is in Book II chapter 7. See the anger
  ledger, revision 4-5.
- scripts/dossier_build.py depends on /tmp/glosses.json, which does not
  survive sessions; it needs the gloss file regenerated or vendored.
