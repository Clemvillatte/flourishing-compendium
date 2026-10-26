# QC sample: dosr5 close (motivation Q1) — 2026-10-26 02:30Z, worker-pplx-verify-1026b (audit baton)

Sample: dosr5's per-question verdict for motivation, question 1, "Do rewards
undermine intrinsic motivation?" — recorded PASS by worker-pplx-pragmatism-1026a
("competing meta-analyses, opposite bottom lines on the same proposition").

Method: independent re-open of both cited carriers, fresh fetches (no cache).

- Deci, Koestner and Ryan 1999 (Psychological Bulletin), eutils abstract:
  opened verbatim. The dossier's quote ("As predicted,
  engagement-contingent, completion-contingent, and performance-contingent
  rewards significantly undermined free-choice intrinsic motivation
  (d = -0.40, -0.36, and -0.28, respectively), as did all rewards, all
  tangible rewards, and all expected rewards.") matches the opened record
  word for word, including the effect sizes. The dossier's "meta-analysis of
  128 studies" framing matches the record's opening line.
- Cameron, Banko and Pierce (The Behavior Analyst), PMC2731358: opened.
  "Our results suggest that in general, rewards are not harmful to motivation
  to perform a task." — verbatim match. "Rewards given for low-interest
  tasks enhance free-choice intrinsic motivation." — verbatim match. The
  article explicitly names the Deci, Koestner and Ryan 1999 meta-analysis
  and its "pervasive negative effects of reward", so the two meta-analyses
  are in direct published opposition on the same proposition.

Result: PASS verdict CONFIRMED by independent source re-open. Quotes genuine,
bottom lines opposite, same proposition. The dosr5 full-read close survives
sampling; no repair owed.

Scope note: one verdict sampled from the band's twelve. Sample only; the other
verdicts rest on the closing worker's own verification runs recorded in
docs/enrichment/batches/dosr5.json.

# QC sample 2: dosr2 close (freedom Q1) — 2026-10-26 02:28Z, worker-pplx-verify-1026b

Sample: dosr2's per-question verdict for freedom, question 1, "Is the liberty
that binds still liberty?" — recorded PASS by the dosr2 model close (Constant
explicitly reads Rousseau's transposition as furnishing deadly pretexts).

Method: independent re-open of the cited carrier (archive.org djvu plain text
of the 1820 Cours de politique constitutionnelle printing of the 1819 speech),
fresh fetch.

Result: all three Constant quotes in the section are verbatim on the opened
carrier — "furnished deadly pretexts for more than one kind of tyranny" with
its full transposition sentence, "steeped in ancient views which are no
longer valid", and "the individual, almost always sovereign in public
affairs, was a slave in all his private relations". PASS verdict CONFIRMED;
no repair owed.

# Adjudication: cognition's 3 automated NOT FOUNDs — 2026-10-26 02:29Z, worker-pplx-verify-1026b

The three pre-existing automated non-matches in cognition.md (flagged in
QC-BAND-QUOTE-MAP-2026-10-26.md, unresolved per the advisor QC of the dosr3
close) were adjudicated via alternate routes this session:

1. Tversky and Kahneman 1974 (Science.org carrier, blocked to fetchers):
   CONFIRMED VERBATIM against the paper's own text — the UCI full-text
   reproduction (sites.socsci.uci.edu, Skyrmss reading PDF) prints the
   Summary section word for word as quoted, including the American
   'judgments' spelling the dossier carries; PubMed 17835457 and
   scienceopen.com reproduce the abstract with a British 'judgements'
   variant, which is the index's rendering, not the paper's.
2. Hayes, Strosahl and Wilson 1999 as quoted in Bernstein et al. 2015
   (PMC5103165): the quote IS on the carrier (verified by direct curl of
   the live PMC page), but the dossier rendered the carrier's semicolon as
   a comma ('the world understood, structured reality' ->
   'the world understood; structured reality'). REPAIRED this session;
   the automated check will still report NOT FOUND because PMC blocks the
   verifier's fetcher, not because of a mismatch.
3. Gigerenzer 1996 (Columbia PDF): CONFIRMED VERBATIM by direct download
   and text extraction of the live PDF — 'vague heuristics have directed
   attention away from detailed models of cognitive processes and toward
   post-hoc accounts of alleged errors' appears word for word.

Net: 2 of 3 were fetcher blocks (quotes genuine); 1 was a real punctuation
deviation, now fixed. cognition.md re-checked (dossier_check exit 0,
density 0 dense) and registry-rebuilt after the repair.
