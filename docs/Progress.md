# Progress

Owner-facing status of every project and pipeline in this repository.
Updated 2026-10-24 by worker-pplx-dos2/dos3 (enrichment session). The
machine-readable state lives in `docs/enrichment/dossiers/registry.json`
and `docs/enrichment/batches/`; this page is the readable summary.

## Dossiers (the enrichment programme)

One dossier per band; a band is "done" when its dossier passes
`scripts/dossier_check.py` and is pushed; "published" when the
supervisor flips the registry status and the site rebuild picks it up.

| Dossier | Band | Status | Notes |
|---|---|---|---|
| The Self | — | published | exemplar; Story section added |
| Anger | — | published | exemplar |
| Genuine Flourishing | dos1 | published | Story section enriched to 22 loglines (dos1 worker + concurrent merge); two loglines repaired to card text |
| Attention | dos4 | published | Story section added (8 loglines) |
| Affect | dos2 | published | built this session; 2 review rounds; Story section (9 loglines) |
| Cognition | dos3 | planned | built this session; **awaiting supervisor registry flip + publish** |
| Wisdom | dos5 | published | built by dos5 worker this session |
| Life's Purpose | dos6 | planned | in progress by dos6 worker |
| Motivation, Goals, Uncertainty, Overload/Overwhelm | dos10-13 | published | published this session by supervisor |
| Anxiety, Happiness, Decision-Making, others | — | planned | queued in the registry roadmap |

Open items for the supervisor:
- Cognition: registry status is `planned`; the dossier is complete,
  checker-passing and pushed — needs the flip and publish.
- Affect and Cognition body-sweep coverage is recorded as incomplete in
  their ledgers (keyword sweeps surfaced 76/92 candidate cards; top 20
  reviewed; the rest not individually reviewed).

## Story sections (new v2 format requirement, 2026-10-24)

Every dossier now requires a `## Story:` section after Practice. Status:
- Migrated and checker-passing: the-self, anger, genuine-flourishing,
  attention, affect, cognition (all four session dossiers done by their
  workers).
- Still on `STORY_MIGRATION` in `scripts/dossier_check.py`: wisdom
  (owner/supervisor to migrate).
- A QC fidelity sample by the supervisor found 11 of 12 sampled loglines
  faithful; the one routed item (dos6 lifes-purpose ST311) was routed for
  rewrite by its owner.

## Other active pipelines (from the commit stream this session)

- p1s (principle-source passes): active; workers auditing and repairing
  principle quotations and bibliographies (B012, B126, B165, B169, B177,
  B190, B030, P175 and others; items closed as they pass).
- k1e (kernel passes): active; 61/61 items recorded done in one commit
  (K367/K368/K376; K368 attribution repaired from an opened publisher
  page).
- t2a/t2b/t2c (thinker-backlink glosses): active; t2b released
  (worker-scope exhausted), t2a and t2c ongoing.
- Supervisor QC: read-only verification passes run between band items;
  all six Affect quotes and all 22 Genuine-Flourishing loglines passed
  independent raw verification.

## Site features

- Deep links: every card, view, Academy degree/module/practice, the
  gallery, the explorer — and now the Dossiers index and each dossier —
  has its own address (see `docs/DEEP-LINKS.md`).
  - `#view=dossiers` opens the Dossiers index page.
  - `#dossier=<registry slug>` opens that dossier directly
    (e.g. `#dossier=affect`); unknown ids fall back to the default view.
  - The address bar mirrors the open dossier, so the address can be
    copied from the browser like any page.
