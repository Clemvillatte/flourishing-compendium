# Differential Activation Hypothesis of depression (w1e, fast-track)

- Item 36 of w1e; session item 15 by worker-w1e-2f8d4c1a -> advisor milestone QC
  (every 5th item) run on this item. Degree 10 (<15) -> fast-track bar.

## Sources opened

- MacKenzie & Kocovski 2016, "Mindfulness-based cognitive therapy for
  depression: trends and developments" (PMC4876939, fetched). Quote verified
  verbatim (now in prose, locator = section heading "Mindfulness-based
  cognitive therapy"): "for those who have previously experienced relapses,
  small negative mood shifts may produce recurrence, because they can
  activate patterns of depressive thinking that are similar to the thoughts
  experienced in previous depressive episodes."
- Huang et al. 2020, "Cognitive reactivity among high-risk individuals..."
  (PMC7855259, fetched, added in QC round 1). Blockquote verified verbatim:
  "As stated by Teasdale's (1998) differential activation hypothesis (DAH),
  negative cognitions that remain latent in some individuals, even when
  depressive symptoms are in remission, maybe reactivated by life events,
  stress, or negative mood states (Teasdale 1988)." - the article's "maybe"
  is as printed, noted on the page.
- Teasdale, Segal, Williams, Ridgeway, Soulsby & Lau 2000, J Consult Clin
  Psychol 68(4):615-623, PMID 10965637 (PubMed record fetched). Quote verified
  verbatim: "a group intervention designed to train recovered recurrently
  depressed patients to disengage from dysphoria-activated depressogenic
  thinking that may mediate relapse/recurrence." Trial numbers from the
  fetched abstract: n=145, 60 weeks, 3+ episodes reduced relapse, 2 episodes
  not.
- Teasdale 1988 is cited BY the opened sources (Huang et al. attribute the
  DAH to it); the 1988 paper itself was NOT opened. The seed line named
  Teasdale without years.
- Principle contexts read via enrich_find.py context (MO072, P181, BE013,
  MO066, AF036, BE032, BE019, P037).

## Decisions

- Fast-track bar: one blockquote (Huang et al.'s DAH-naming sentence) + short
  synthesis (the MBCT trial, with corrected trial arms: TAU alone vs MBCT in
  addition). Saturation skipped per §1a; Rumination and Mindfulness Related
  lines added one-way without proposals (no obviously missing reciprocal;
  Rumination's clause describes rumination itself, not an equation with all
  depressogenic thinking).
- QC round 2 repairs: MO066 clause replaced with the principle's own subject
  (anhedonia, fatigue, reduced motivation); P037 clause replaced with Dewey's
  test of ideas; the Rumination Related line REMOVED (the opened review does
  not define rumination; per advisor guidance no material added merely to
  avoid the <3 Related-lines warning); the Huang et al. date inconsistency
  (1998 in text vs 1988 citation) and the "maybe" typo both flagged on the
  page rather than silently corrected.
- QC round 1 repairs: seed-line tail "deepening episodes over time" removed
  (unsupported); the categorical "an episode... leaves behind patterns"
  opening replaced with the source-bound formulation; blockquote swapped to
  the DAH-naming sentence; trial arms corrected; ## Field section restored
  (it had been deleted by the first draft's replacement span - caught by the
  advisor, not by the link validator); mechanism bridges removed from the
  compendium clauses (BE013, AF036, BE032); the original [[V1K-S01]] layer
  link kept as a line in In the compendium (restored after a validator catch
  in the first draft).
- Revalidated with --base 74346e04 (pre-enrichment parent of c2c16500): ok.
- Front-matter (schema 2, tags), the Field section and all original links
  preserved unchanged.
