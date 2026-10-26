# Dossiers band handoff — read this first

## STEP 0 RESULTS (2026-10-26 00:14Z, worker-pplx-dosr1-1026a — CATALOGUE-WIDE SURVEY, commit 9b4af3605)

dosr1 checked and CLOSED (claim 00:10:45Z, close 00:13:00Z): all four of its dossiers (frustration, gratitude,
right-effort, right-intention) are ALREADY at the 3-5 bar with repairs landed
2026-10-25 (details in `batches/dosr1.json`). [SUPERSEDED 2026-10-26: the "already at bar"
assessment for right-effort was later overturned by advisor QC under the strict
same-proposition test — see the DOSR1 REPAIR note below and the current
`batches/dosr1.json`.] The QC-entry-7 below-bar list is
STALE for dosr1 and is probably stale for other bands too — RUN THE STEP 0
CHECK before repairing anything from it. Remaining free bands at check time:
dosr2-dosr7.

DOSR1 REPAIR CANDIDATE (2026-10-26, worker-pplx-dosr1-1026a, same session; certification PENDING supervisor QC): advisor QC
had downgraded right-effort to 2 certified + 1 unresolved comparison (below the
strict bar). A fourth heading, "Is willpower a reservoir that effort drains?",
was added to right-effort.md — Baumeister et al. 1998 (JPSP) affirming the limited
shared-resource model vs Hagger et al. 2016 multilab RRR (23 labs, N=2,141) whose
result is NULL-COMPATIBLE (d = 0.04, CI [-0.07, 0.15]) — an absence of detection,
not an explicit denial. All four quotes verbatim on
eutils carriers (PMIDs 9599441, 27474142); the section carries an honest-limits
paragraph to this effect. The advisor's final review RESTORED the below-bar flag as
PENDING: 2 certified + 1 candidate + 1 qualified comparison. SUPERVISOR DECISIONS:
(1) certify or reject the depletion candidate; (2) whether the qualified
Buddhist/Daoist comparison stays or is replaced. Details in `batches/dosr1.json`.

SURVEY EXTENSION (same session, 00:13:57Z, commit 9b4af3605, read-only across the free bands): the
same STEP 0 check was run on ALL 24 dossiers of dosr2-dosr7. Result: EVERY
ONE carries 3-4 questions under a `Where the traditions genuinely disagree`
heading, is published in registry.json, and the three dosr7 old-map
restructures (creation, creativity, procrastination) are converted (GF-model
shape, disagreement sections present — consistent with "old-map conversions
landed" in the project state). Counts: dosr2 (3/3/4/4), dosr3 (3/3/3/3),
dosr4 (3/3/3/3), dosr5 (3/3/3/3), dosr6 (3/3/4/3), dosr7 (4/3/3/3). Site
data spot-markers present on app.js for gratitude, right-effort, right-view,
genuine-flourishing. CAVEAT (method, honest): counts and headings verified for
all; per-question substantiation (affirm/deny test) was read in full only for
the four dosr1 dossiers — the other 24 were verified by section presence,
question count and registry/site status, not by full re-reading. A worker who
takes a band should still read their four sections in full before declaring
the band done. CONCLUSION (narrowed after advisor QC): all 28 repair-pass dossiers have
3-4 disagreement headings and are published — the below-bar LIST is stale —
but heading counts do NOT establish substantiation; substantive per-band review
remains necessary. dosr2 is the model close: full unfiltered section reads with
per-question verdicts under the same-proposition test (`batches/dosr2.json`).
Band holders should verify-and-close that way, not repair from the stale list,
and flag genuinely below-bar items to the supervisor if found.

DOSR6 SUBSTANTIVE CLOSE (2026-10-26, worker-pplx-dosr6-1026b, baton held
02:20:51Z-02:37Z, released clean): the band's four disagreement sections were
read in full under the same-proposition test across five advisor QC rounds
(rounds 3-5 on the uncertainty repairs). FINAL STATE: right-action 3/3
strict-certified (taking-life SN 45.8 vs Aquinas; akrasia Aristotle vs
Socrates, narrowed; character robustness Hursthouse/Pettigrove vs Doris),
sadness-and-grief 3/3 (detachment vs continuing bonds; grief-work vs
dual-process; Cicero judgment vs natural force, qualified), the-self 2
certified BELOW BAR (Q1 SN 22.59 vs Advaita and Q4 Markus-Kitayama flagged;
needs a primary passage excluding the enduring witnessing self), uncertainty
3/3 AT BAR after repair (K&T/Gigerenzer 1996 single-event norm dispute;
Savage/Ellsberg sure-thing principle; Arcesilaus/Zeno sage's assent via
Cicero Academica 2; the Sextus/Descartes doubt pairing is a QUALIFIED
COMPARISON, not certified). Registry rebuilt for uncertainty (deecfb60f);
post-close independent verification: all 26 quotes re-confirmed on opened
carriers (661572172); the 4 Ellsberg quotes remain documented OCR-degraded
exceptions, read from the opened PDF via prompted extraction. The survey
count 3/3/4/3 above is superseded for dosr6: the-self is 2 certified below
bar. SUPERVISOR DECISIONS: (1) the-self primary-verification repair or
below-bar acceptance; (2) the earlier 'uncertainty at bar' record at e517df687
was premature and is superseded by 7deec4e0e + deecfb60f. Details in
`batches/dosr6.json`.

DOSR7 SUBSTANTIVE CLOSE (2026-10-26, worker-pplx-deg-gate-1026b, baton
02:16:29Z to release): the band's STEP 0 close was structural only; all
four disagreement sections were read in full under the same-proposition
test, with four repair rounds landing opened primaries. FINAL STATE:
right-livelihood 4/4 strict-certified (natural slavery; rewards;
work-as-life with the Weber/Zinzendorf ch. V note-24 primary; burnout
continuum with Maslach/Schaufeli/Leiter 2001); creation 3/3;
procrastination 3/3 (incl. Davidson primary from The Essential Davidson
chapter page); creativity 3 strict-certified + 1 null-replication
comparison (Baird 2012 vs Murray 2024, right-effort class) — all four
AT THE 3-5 BAR. All flagged quote verifications adjudicated on opened
carriers with documented exceptions (16 verbatim, 2 parser false
positives, 1 provenance-limited); source-ledger entries appended for
every new primary (sources/dossiers/<slug>.md). Live site verified
serving the rebuilt registry data. Band complete; baton released.

## ROUTE (2026-10-25/26, strategist-pplx-1026a, supervisor): REPAIR BANDS
The 28-item disagreement repair pass + 3 old-map restructures are chunked into
bands dosr1-dosr7 (batons minted, free). Band contents, rules and the worker
count: `docs/enrichment/PIPELINE-2026-10-26.md`. Take a band with
`python3 scripts/baton.py clock-in dosr<N> <your-id>`. Everything else below
still applies.

## CURRENT ORDERS (2026-10-25, owner validated; supersedes everything below that conflicts)

OWNER DIRECTIVE 2026-10-25 (d) — repair ruling, new mints, site tab:

1. THE 3-5 QUESTION BAR IS RATIFIED. The owner has commissioned a
   sustained disagreement-building REPAIR PASS: every dossier must be
   STATE-OF-THE-ART — Qualitative, Compelling, Interesting, Engaging,
   Insightful, Exhaustive. The 28 below-bar dossiers (list in
   OPERATIONS.md supervisor QC entry 7: 0 questions — frustration,
   gratitude, right-effort, right-intention, right-mindfulness,
   right-view, freedom; 1 — agency, anger, cognition, goals, others,
   right-concentration, right-speech, suffering, acceptance, creation,
   right-livelihood; 2 — affect, attention, motivation,
   overload-overwhelm, right-action, sadness-and-grief, the-self,
   uncertainty) are REPAIR ITEMS, published or not. Build GENUINE
   substantiated disagreements from opened primary sources — never
   manufacture them to hit the count (advisor QC guidance stands);
   document the exhaustive search in the ledger. A per-dossier exception
   may still be requested ONLY after genuine effort, flagged on the
   Owner-Board for the owner — no blanket exceptions.
2. LANE 4 (suffering, acceptance, freedom) IS UNBLOCKED by the same
   ruling: repair their disagreement sections to the bar. Their previous
   exception requests are answered: repair, don't wait.
3. NEW DOSSIERS MINTED by owner directive: leisure (band dos34,
   Flourishing & Wisdom section) and executive-functions (band dos35,
   The Mind's Life section). Both planned; batons free; the full GF
   model and 3-5 bar apply from the start. ART: no unassigned works
   remain in the owner's collection — art for leisure,
   executive-functions, creation, creativity and procrastination is
   pending the owner; flag, don't block writing on it.
4. SITE: Dossiers is now its own TAB after Academy (owner directive,
   implemented by the launcher session 2026-10-25: index.html tab
   button, app.js dossiers hijack + initDossiers wiring, route and
   back-button entry points routed through it).

OWNER DIRECTIVE 2026-10-25 (b, later same day — publication and load):

1. PUBLISH-THEN-REVIEW replaces supervisor-only publication. When your
dossier passes `dossier_check.py`, quote verification (with documented
exceptions in the ledger), the density check and advisor QC, PUBLISH IT
YOURSELF: flip only your own dossier's entry to `"published"` in
`registry.json`, run `python3 scripts/dossier_registry_build.py
--rebuild=<slug>`, push, and add one line to
`docs/enrichment/OWNER-BOARD.md` (see its rules). The supervisor (or
assistant supervisor) then reviews the PUBLISHED dossier per
`SUPERVISOR-REVIEW.md` and records the verdict; a failed review flips
the entry back to `"planned"` with a flag on the Owner-Board. Do not
publish a dossier that has not passed its checks — the point is review
after publication, not skipping review.
2. ASSISTANT SUPERVISOR: a second `assistant-supervisor` baton exists
(take via `python3 scripts/baton.py clock-in assistant-supervisor
<agent>`). Take it when the supervisor queue is overloaded — see the
trigger and duties in OPERATIONS.md ("Assistant supervisor"). It
processes mechanical supervisor jobs (registry flips, rebuilds,
post-publication reviews, verdict logging); anything needing owner
judgment still goes to the Owner-Board as a flag.
3. OWNER-BOARD: every agent appends one short dated line to
`docs/enrichment/OWNER-BOARD.md` on taking/releasing a baton,
publishing, or hitting a blocker. Keep it cheap; rules are in the file.

The owner validated Genuine Flourishing as the exemplar. The earlier "candidate awaiting validation / do not launch the rollout" gate is lifted. The goal is NOT a copy of the old four-section map format: every dossier is rewritten as one interwoven thread, as GF is. Wisdom is already rewritten and pushed (`wisdom.md`); read it beside GF.

Read in this order: `genuine-flourishing.md` end to end, `DOSSIER-MODEL.md` (binding shape, pace and cognitive-load rules), `wisdom.md`, `HUMANIZER-SKILL.md`. An old map-format dossier is raw material only: reuse its verified links and quotes after re-reading each source passage, never its structure.

Every dossier must have: a `## Where the traditions genuinely disagree` section (only disagreements the sources support); every quotation opened and matched (`python3 scripts/dossier_quote_verify.py <file.md>` fetches each URL and matches the wording; "NOT FOUND" for PubMed, SAGE, Taylor and Francis or MDPI usually means a blocked fetch, so open the page another way and confirm by eye, or drop the quote); `dossier_check.py` passing; art (already assigned in `registry.json` for all planned dossiers); a ledger in `docs/enrichment/sources/dossiers/<id>.md`.

Publish bar (owner-approved): checker passes, every quote verified, an independent review finds no glib or formulaic prose, art set. The owner vetoes from the per-batch list afterwards.

Who touches what (AMENDED by owner directive 2026-10-25, publish-then-review): workers write only their own `docs/enrichment/dossiers/<id>.md` and ledger, and may flip ONLY their own dossier's registry entry to published and run `dossier_registry_build.py --rebuild=<slug>` for it once it passes the checks named in the current orders. Do NOT edit other dossiers' registry entries, `site/assets/app.js`, `site/assets/style.css`, `progress.json` or the queues; the supervisor reviews published dossiers and can flip one back with a flag. Commit your files with explicit paths, then `git pull --rebase origin main` before push.

Scope: all 35 registered dossiers, the new suffering, acceptance, freedom, impermanence entries, and creation, creativity, procrastination. Impermanence replaces a standalone meaning-and-mortality dossier (Life's Purpose already covers meaning; raw material is `meaning-and-mortality.md`).

Before you call a dossier done: read `SUPERVISOR-REVIEW.md` (verdicts and the self-check, including the new `scripts/dossier_density.py` which flags paragraphs that stack five or more card links). A main body that is one `## The map: ...` section is the old format and will be sent back.

Lanes (claim one by a baton commit naming it; lane sizes fit one worker):
1. right-view, right-intention, right-speech, right-action
2. right-livelihood, right-effort, right-mindfulness, right-concentration
3. gratitude, fear, sadness-and-grief, shame-and-guilt
4. frustration, suffering, acceptance, freedom
5. impermanence, creation, creativity, procrastination
6. affect, anger, anxiety, happiness
7. cognition, decision-making, attention, the-self
8. motivation, goals, agency, behaviour
Second wave: others, body, uncertainty, overload-overwhelm, lifes-purpose.

Already-drafted creation (rev 7), creativity and procrastination are in the old map shape: restructure them, do not just polish.

---

## (Superseded gate, kept for history) Newest owner correction: readable synthesis and approval gate

The owner rejected the GF passage beginning "Its goal research adds..."
as cognitively overloading and impossible to read, navigate or comprehend.
Do not produce an accumulation of quotes and source summaries. Write a
connected, enjoyable synthesis in short, meaningful units, with useful
subheadings and unobtrusive links. Keep detailed checking apparatus in
the ledger. Source fidelity and real disagreements remain mandatory.

This supersedes older instructions below that put verification labels or
a quotation for every position in the public reading path. Read the
current README and HUMANIZER-SKILL. `dossier_check.py` now rejects public
checking labels and prose paragraphs over 150 visible words. That is a
mechanical floor, not a target or a substitute for a human reading.

GF is a candidate awaiting the owner's explicit validation. Do not launch
the planned six-agent rollout or copy its unfinished form as an exemplar.
The next supervisor must preserve this gate and review actual prose,
not just resolved links and successful builds.

Written 2026-10-23/24 by worker-pplx-dossiers-1023b and 1024, for any
blank-slate agent taking the dossiers baton. Everything below is what a
new agent needs to continue without this conversation.

## The mission, in the owner's words

The Dossiers project is the owner's special mission, run on the dossiers
worker baton. Guiding aim of the whole wiki: "Guiding people on the
process to alleviate suffering, detach from the self-as-object, cultivate
wisdom and genuinely flourish in an uncertain and overwhelming world
through Philosophy and Psychological Sciences."

The owner's binding format decision (2026-10-23, extended 2026-10-24):
every dossier has FOUR sections, fusing three earlier proposals plus the
owner-directed Story section — Theme-Based Compilation /
Theme-Based Areas of divergence / Theme-Based practice / Theme-Based
story (the 4th, after Practice; see Operations update 4 below). Location:
the Academy, as a Dossiers view beside MORE VIDEOS and DISCOVERY.

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

## Owner feedback of 2026-10-24 (second round) — meta-text openers banned

The owner reviewed the published dossiers and rejected the formulaic
opener every one of them had absorbed from the first exemplars:
"This dossier is a map, not an essay. A reader who thinks ... The lines
are short on purpose ... The compendium's wider aim runs through the
page". In the owner's words it sounds "extremely AI and lame" on top of
being unnecessary. The correction is two-sided: fix every dossier that
carries it, and change the exemplars and modalities (README structure
item 5, the checker's banned-phrase rule) so no agent replicates it.

What the owner wants instead: an opening that starts from the theme's
own substance — a definition, a proposition, a complement, a
contradiction, a solution, anything — decided by thinking about what is
most suitable to the dossier at hand in its reality and context, not by
following a formula. OWNER CLARIFICATION, same day: the ban is not
limited to the quoted excerpts; it is any type of meta-text that sounds
AI-generated — "How to read this page", "This dossier takes/maps...",
narration of what the lines are doing, editorial-process notes, page-
self-description of any kind. Where a boundary with a neighbouring
dossier needs stating, state it as a fact about the theme, not about the
page. The owner's stated fear: exemplars lead to some sort of
industrial formulaic output. So: "map, not essay" in item 1 above was
an internal design instruction about coverage and line length; it was
never meant to be quoted back to readers. The v2 structural rules
(exhaustive coverage, concise lines, divergences, practice, story) all
stand unchanged.

Direction for the flagship: the owner wants a version of Genuine
Flourishing that feels less like a plain list of concepts and
principles and more like an interwoven, coherent and engaging thread, a
conversation being created to explore the topic. If it is good it
becomes the new exemplar and the other dossiers are reworked to match.
The owner's own sketch of a possible direction for it: define
flourishing, link it to its common root with "flower", see what it
seems to mean for people at first glance, introduce some conflict, then
define "genuine", both in its meaning of true and in its Latin root
(genus), and let those threads run through the material.

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
  2026-10-24 UPDATE: the current compile path for view data is
  scripts/dossier_registry_build.py (registry + published markdown ->
  fcDossiersData; read-only with respect to markdown; `--rebuild=<slug>`
  for revisions). app.js itself is SUPERVISOR-ONLY for dossier workers —
  if it conflicts, hand it to the supervisor rather than regenerating.
  (Verification gap CLOSED 2026-10-24: real cloud-browser passes on the
  Pages deploy — grid, filters, detail, roadmap, narrow viewport — see
  the session records in handoff.md.)

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

- 2026-10-24 UPDATE (4), owner-directed 4TH SECTION — every dossier now
  carries a Story section after Practice: `## Story: the stories that
  carry the theme`, holding the compendium's stories that best
  represent the theme's aspects, each with a story card link and a
  one-line logline (a concrete incident, compressed from the story
  card's own text, which the writer must actually open and read; no
  abstract morals, no restating the cards' historical or psychological
  claims). Subthemes mirror the map's aspects; the kernels stay in
  Practice. Spec: README.md structure item 4. Enforcement:
  scripts/dossier_check.py requires the section, with a migration list
  of published dossiers that do not have it yet — every one of those
  must be enriched with the section (that is owner-directed work, not
  optional): enrich the dossier, run the checker, then flag completion
  in a commit message; the supervisor removes the slug from
  STORY_MIGRATION in dossier_check.py (the list and the shared checker
  are supervisor-owned; workers never edit them).
  Exemplars with the section done: the-self.md and anger.md.
- 2026-10-24 UPDATE (3): owner-directed SECTION REDESIGN — the ten
  EEMM-mirrored groups are replaced by FIVE sections: Flourishing &
  Wisdom (flagship, first), Extended Evolutionary Meta Model (exactly
  the model's own dossiers: the six ACASMO dimensions plus Body and
  Others as its two levels of selection), The Affective Life (Anger,
  Anxiety, Happiness), The Mind's Life (Decision-Making, Goals,
  Agency), Life Challenges (Uncertainty, Overload & Overwhelm). The
  section rules are BINDING and written in README.md — read them
  before minting or moving any dossier. The grid chips now filter by
  these five sections; the EEMM eyebrow uses the short form 'EEMM'.
- 2026-10-24 UPDATE: the dossier programme is now banded. Worker bands
  dos1-dos4 are minted (see `../bands/dos*-manifest.json` and
  `../batches/dos*.json`); one dossier per band, supervisor-owned
  integration. The single `dossiers` baton is the supervisor/integrator
  baton. Workers: read HANDOFF.md, README.md, DISAMBIGUATION.md and
  ART-GALLERY.md here, then your band manifest. Writers own only their
  dossier markdown + evidence ledger + band state; the registry
  (registry.json), the Academy data (app.js) and the art are
  SUPERVISOR-ONLY. Pre-push check (mandatory):
  `python3 scripts/dossier_check.py docs/enrichment/dossiers/<slug>.md`
  (exit 0 required; card links must resolve, and at least one quoted
  passage must carry an external carrier link). For REVISIONS to an
  already-published dossier, the supervisor runs
  `python3 scripts/dossier_registry_build.py --rebuild=<slug>` — the
  ordinary command without `--rebuild` intentionally skips
  already-present dossiers to protect hand-checked data.
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
2. DONE (2026-10-24): live-browser verification pass on the deployed
     Academy Dossiers view, plus the category/art upgrade — see the
   2026-10-24 session record in handoff.md (filter chips, per-card
   artwork, number plate removed, In-preparation roadmap).
3. PUBLICATION PIPELINE (supervisor-only, 2026-10-24): when a writer
   finishes a dossier markdown, flip its status to 'published' in
   registry.json, run `python3 scripts/dossier_registry_build.py`
   (compiles newly published dossiers from their markdown into the
   fcDossiersData block; existing dossier bodies are never
   regenerated; deterministic), then `node --check site/assets/app.js`,
   a DOM-stub render test, then commit site/assets/app.js manually
   (outside the save helper's path filter) and api_push; verify the
   Pages deploy with a cache-busted reload. Do NOT run
   scripts/dossier_build.py just to refresh view data: it regenerates
   the markdown of record from its own MAP/OVERRIDES and can
   overwrite hand-polished glosses.
4. Workers (dos1-dos4) build dossier content per their band
   manifests; the supervisor integrates per step 3.

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

## Programme status, 2026-10-24 (supervisor-pplx-1024c, end of run)

Published (15): genuine-flourishing, wisdom, lifes-purpose, affect, anger, anxiety, happiness, cognition, decision-making, attention, the-self, motivation, goals, uncertainty, overload-overwhelm. All pass scripts/dossier_check.py (exit 0) and app.js is in sync with the markdown (a full --rebuild of all 15 produced no diff).

Planned and banded, not started: agency (dos14), behaviour (dos15), others (dos16), body (dos17), and the 2026-10-24 second mint (supervisor-pplx-1024g): the Noble Eightfold Path section — right-view (dos18), right-intention (dos19), right-speech (dos20), right-action (dos21), right-livelihood (dos22), right-effort (dos23), right-mindfulness (dos24), right-concentration (dos25) — plus four affective states: gratitude (dos26), fear (dos27), sadness-and-grief (dos28), shame-and-guilt (dos29). Artwork for the twelve new planned dossiers is pending supervisor assignment from the owner's collection. The Dossiers grid now groups cards under labelled section dividers (owner-directed 2026-10-24); renderDossiers builds one section wrapper per group and the filter counts cards, not dividers (regression test: scripts/tests/test_dossier_sections.py).

Notes for the next writer:
- Pre-computed title inventories in some manifests were copied from other bands; run your own title sweep and full-text sweep.
- The newest checker bans em dashes in Story loglines; use a colon, semicolon or comma.
- Verify every quotation against text you actually opened; do not rely on memory of an abstract. One quote in this run (Baumeister 1998) was caught and corrected in a verification pass because the real abstract reads "reports experiment results suggesting that...".
- Do not cite Ariely and Wertenbroch 2002 as evidence. A replication preprint (SSRN 5053636) reports the result does not replicate, and its PubMed record shows a retraction notice. The wiki card "Commitment devices (Ariely & Wertenbroch)" needs a note and a replacement carrier (concept band decision).
- Decision-making, motivation, uncertainty, overload-overwhelm and goals each hold two to four divergences; their ledgers list candidate additional divergences under "Open points" for any revision pass.
- Possible future standalone Stress dossier (about 17 stress cards), proposed in the anxiety ledger.

## Session note (2026-10-24, supervisor-pplx-1024c-dossiers)

The dossiers baton ran a corpus-wide quote-fidelity sweep this
session. Every published dossier now has a carrier-verification
record for its verbatim quotations: the mints by their workers
(suffering, acceptance, freedom, meaning-and-mortality, fear,
gratitude, anxiety, anger, affect, decision-making, goals, happiness,
motivation, the-self, body), and nine more by this session (wisdom,
genuine-flourishing, lifes-purpose, attention, cognition,
uncertainty, behaviour, others, overload-overwhelm). Two body
corrections came out of the sweep, both advisor-QC driven: the
Baumeister quotation in overload-overwhelm (fragment "suggesting"
vs the carrier's "These results suggest") and the suffering
purpose-question framing (three bounded different-questions). All 35
dossiers pass dossier_check; the two touched bodies also pass the
voice audit. The verification method is recorded honestly in each
ledger (phrase-location vs full-passage comparison); the others.md
ledger carries both this session's pass and the dos16 worker's
stronger consolidated pass. The nature candidate stays in the
backlog pending an owner placement decision. Ledger certifications
from this session were reviewed in three advisor QC rounds and
corrected where they overstated.

## Verification sweep (2026-10-25 02:10Z, worker-pplx-b65d2ee8)

Corpus-wide mechanical sweep, no files edited (other bands' dossiers
untouched; flags only): all 40 dossier markdown files pass
dossier_check.py. dossier_density.py flags dense paragraphs in six:
behaviour.md line 79 (5 links in 92 words), creation.md line 26 (4
in 99), genuine-flourishing.md line 59 (4 in 63; includes external
carrier links), right-intention.md line 74 (5 in 113), right-speech.md
line 90 (6 in 106), sadness-and-grief.md line 54 (5 in 94). Read at
reader level these are flowing reference paragraphs rather than
catalogues, but they sit over the density bar the supervisor set;
each is a small split-or-reasoning fix for its own band. Goals
(dos13) released pending supervisor review: one-divergence exception
requested, registry rebuild needed, supervisor-review row to re-read
(ledger rev 4.6, commit c6156bb74).

### dos20 label reconciliation — 2026-10-25, supervisor launcher-pplx-1025n

The dos20 manifest and baton map to right-speech (mint 3, Noble
Eightfold Path) and that mapping is authoritative. Two anger-lane work
streams were nevertheless logged under the dos20 label on 2026-10-25:
the Nearby-terms addition and quote-flag follow-up (worker-pplx-
dos20-1025z) and the span repair (worker-pplx-1025i, holding the
dos20 baton at the time). Both were supervisor/dossiers-band anger
work, not dos20 band work; the ledger entries themselves are accurate
and need no content change. Future readers: "dos20" in the anger
ledger and the 2026-10-25 baton history of 1025i refers to the baton
happened to be held, not to the band's dossier. Routed from the dos28
worker's flag (df5f420).

> 2026-10-26T08:15Z — dosr4 (worker-pplx-dosr4-1026e): SUBSTANTIVE-PARTIAL close on full
> reads of all four sections (others, right-speech, suffering, acceptance); per-question
> verdicts all AT BAR under the same-proposition test; eight quote verifications on opened
> carriers this pass (Marcus V.8, Hayes 2006 PDF, Hofmann & Asmundson eutils, Epictetus
> Enchiridion 8 + equanimity line, Nietzsche EH and BGE 9/225, Job 4:7); one repair applied
> (acceptance line-5 translation label Long→Carter, opened-page confirmation); Liezi forum
> carrier weakness flagged, not repaired; Hofmann 2008 Wiley paywalled, not re-opened;
> remaining quote verifications enumerated in batches/dosr4.json and owed to the next
> holder; band NOT declared complete on a partial-verification record.
