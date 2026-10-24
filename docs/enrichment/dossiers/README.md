# Dossiers index

A dossier is a commonplace book for one theme: the whole overview of what the
compendium holds on it, where its traditions genuinely disagree, and how the
theme is practiced. Every quoted passage is checked against a source that was
opened for it.

> For agents: see [HANDOFF.md](HANDOFF.md) before working this band. The
> owner's direction of 2026-10-24 (exhaustive map format, side TOC,
> Variation-Selection(+Retention) practice section, revised topic list)
> supersedes the v1 spec below where they differ.

## Structure (binding for every dossier, v2)

1. **Theme-Based Compilation** — an exhaustive map, not a curated sampler:
   every aspect, concept and point of view the wiki holds on the theme,
   grouped into subthemes by the questions they help answer. Concise lines,
   not dense prose: a reader should open the dossier on any theme (say,
   anger) and see the whole overview of takes the wiki offers. Each entry
   names what it contributes and carries its own evidence status. A
   checked quotation certifies only the quoted passage, never the whole
   linked page.
2. **Theme-Based Areas of divergence** — the theme's real disagreements,
   developed properly and framed as research questions. Each must first
   show that the traditions are answering the same question, then quote
   each position from an opened carrier, then state what remains
   unresolved. Contrasts presented as disagreements by mere juxtaposition
   are not admitted.
3. **Theme-Based practice** — structured on the Variation-Selection
   (+Retention) model. Variation: the aspects of the theme that may need
   to vary in a person's life to become adaptive and lead to genuine
   flourishing. Selection: the existing practice kernels chosen as ways
   to provide that variation, each with a situation, a source-faithful
   action and its evidence limits. Retention: a light closing note —
   what people keep because it works for them. The practice page carries
   a sticky side table of contents for quick navigation of its headers.
4. **Theme-Based story** (owner-directed 2026-10-24, after Practice, with
   the kernels staying in Practice) — the compendium's stories that best
   represent the theme's aspects, gathered in one place: each story gets
   a card link and a one-line logline, a concrete incident or turning
   point compressed from the story card's own text, never an abstract
   moral. Grouped under subthemes that mirror the map's aspects. The
   loglines retell the wiki's own story cards at narrative level and do
   not restate the cards' historical or psychological claims. Follows
   the same principle as the map: concise lines, not dense prose, and
   every fact comes from a story file the writer actually opened.
   Existing dossiers without the section must be enriched with it: the
   checker carries a migration list (see dossier_check.py) and a
   dossier leaves the list only when its Story section lands.

Reader-facing evidence phrases (never workflow terms): "Primary text; quoted
passage checked", "Scholarly interpretation; cited passage checked", "Study
abstract; quoted passage checked", "Further reading; not assessed".

## Dossiers

1. [The Self](the-self.md) — the v2 exemplar, rebuilt 2026-10-23 to the
   exhaustive standard: every entry the title sweep holds on the self
   (140 concept cards + 16 practice kernels + 2 classical sayings), mapped
   across ten subthemes, plus the wiki's own Self shelves (SE hub + its
   seven layers), two divergences, and the Variation-Selection-Retention
   practice section. The 145 principle pages bearing "self" in the title
   are deliberately not listed inline: every concept card carries onward to
   the principles that cite it, so the map stays a map. One off-theme
   title match (The self-evident, on Aristotle's demonstration) is
   excluded and noted in the dossier. The v1 narrow version is superseded
   (history in the git log); its verified quotes were carried into v2.
   Evidence record:
   [sources/dossiers/the-self.md](../sources/dossiers/the-self.md),
   v2 rebuild record + revision 4.1 addendum.

2. [Anger](anger.md) — the second dossier in the v2 format, built to the
   same standard (owner named Anger as the format illustration). Evidence
   record: [sources/dossiers/anger.md](../sources/dossiers/anger.md),
   revision 1.

## Roadmap and navigation (2026-10-24, owner-directed)

The canonical registry is [registry.json](registry.json): every dossier
with its section, status, scope, nearby terms and artwork.
The Academy grid filters by five sections:

| Section | Dossiers |
|---|---|
| Flourishing & Wisdom (flagship, first) | Genuine Flourishing, Wisdom, Life's Purpose |
| Extended Evolutionary Meta Model | Affect, Cognition, Attention, Self, Motivation, Behaviour, Others, Body |
| The Affective Life | Anger, Anxiety, Happiness, Gratitude*, Fear*, Sadness & Grief*, Shame & Guilt* |
| The Mind's Life | Decision-Making, Goals, Agency |
| Life Challenges | Uncertainty, Overload & Overwhelm |
| The Noble Eightfold Path | Right View*, Right Intention*, Right Speech*, Right Action*, Right Livelihood*, Right Effort*, Right Mindfulness*, Right Concentration* |

(* = planned, in the roadmap below; minted 2026-10-24 by owner direction — one
dossier per path factor, and affective states beyond Anger, Anxiety and
Happiness that pass the disambiguation three-part test. The remaining
affective candidates — Envy, Compassion, Loneliness, Love, Hope, Awe, Pride,
Equanimity — sit in the registry backlog with scope-review questions.)

### Section rules (binding for any future worker)

1. **Flourishing & Wisdom** is the flagship section and always first: the
   eudaimonic trio (what a good life is, how to tell it from its
   counterfeits, what a life is for).
2. **The Extended Evolutionary Meta Model section holds EXACTLY the
   model's own dossiers** — the six ACASMO dimensions (Affect,
   Cognition, Attention, Self, Motivation, Behaviour) plus its two
   levels of selection (Body = biophysiological, Others =
   sociocultural). Nothing else ever goes in it; the section mirrors
   the model one-to-one and is never extended beyond it.
3. **Themed sections are reader-facing life themes holding the SPECIFIC
   dossiers, not the EEMM umbrellas.** The Affective Life holds specific
   affective states (Anger, Anxiety, Happiness); The Mind's Life holds
   the practical mind (Decision-Making, Goals, Agency); Life Challenges
   holds cross-cutting challenges (Uncertainty, Overload & Overwhelm).
4. **A family umbrella stays in the EEMM section; its specific family
   members live in the themed section** (Affect is EEMM, Anger is The
   Affective Life; Motivation is EEMM, Goals and Agency are The Mind's
   Life).
5. **A themed section must hold at least three dossiers a reader would
   expect together.** A new theme is minted only when three or more
   planned dossiers cluster; until then the candidate sits in the
   registry backlog.

Near-synonym terms (Stress, Worry, Angst...) are handled by the
disambiguation policy in [DISAMBIGUATION.md](DISAMBIGUATION.md), not by
minting every title. The v1 abstract titles (Suffering and the second
wound; Desire, craving and enough; Agency, effort and non-forcing;
Living with uncertainty; Compassion without self-abandonment; Love and
nonattachment; Impermanence, grief and loss; Meaning, mortality and
contribution) are retired; their material resurfaces inside the topical
dossiers. Backlog candidates live at the end of the registry.

Each dossier card carries artwork from the owner's collection; the
assignment and rationale are in [ART-GALLERY.md](ART-GALLERY.md),
and writers never select thumbnails (supervisor-owned).

Worker bands for the dossier programme: dos1 (Genuine Flourishing),
dos2 (Affect), dos3 (Cognition), dos4 (Attention) — manifests in
`../bands/dos*-manifest.json`. Four writers plus one supervisor is the
recommended launch.

## Location and status

Dossiers stage in this folder, in the wiki's card-link format so every entry
is one click from the live site. The owner's stated destination is the
Academy, as a Dossiers view beside MORE VIDEOS and DISCOVERY. That view is
wired (site/assets/app.js, window.fcDossiersData + renderers) and verified
live in a browser on the Pages deploy: tab, grid, detail, quotes with
attributions, card links opening wiki cards, back navigation. The markdown of
record for each dossier stays in this folder; the view's data is compiled
from the registry and the published markdown by
scripts/dossier_registry_build.py (deterministic, read-only with respect to
the markdown; use `--rebuild=<slug>` for a revision to an already-published
dossier). Do NOT run scripts/dossier_build.py just to refresh view data —
it regenerates the markdown and can overwrite hand-polished glosses — and
the detail view carries a sticky side table of contents built from the
headers.
