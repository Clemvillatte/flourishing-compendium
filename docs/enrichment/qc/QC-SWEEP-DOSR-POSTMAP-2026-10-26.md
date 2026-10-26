# QC sweep 2: post-map quote misses in the dosr dossiers (2026-10-26)

Worker: worker-pplx-audit-1026a (audit baton). Checks run 2026-10-26
between the measured 09:46:21Z reading (the previous sweep's push) and the
09:53:42Z reading at which this receipt was pushed; an earlier draft of
this receipt carried a reconstructed "09:58Z and 10:11Z" window — wrong,
corrected here.

Why: after the first sweep (wisdom/uncertainty/shame-and-guilt, receipt
QC-SWEEP-WISDOM-UNCERTAINTY-SHAME-2026-10-26.md), a full re-run of
`dossier_quote_verify.py` over all 24 dosr-band dossiers found MORE new
misses in seven files than the map's original counts (the map predates the
final repair pushes): right-concentration +1, cognition +4, goals +1,
affect +3, attention +2, creativity +3, procrastination +1 (net 15 new;
motivation -2 and right-mindfulness -1 were repaired since the map).
NOTE: an earlier per-file loop printed misaligned output (buffering) that
briefly attributed spans to the wrong files — the lists below were
re-derived with clean single-file runs.

## Verified VERBATIM on opened carriers this sweep

- right-concentration 2/2 — [PMC3627747](https://pmc.ncbi.nlm.nih.gov/articles/PMC3627747/)
  (browser): "There is ample empirical evidence for both the
  fatigue/resource-depletion..." and "Maintaining attention for more than a
  few seconds is essential for mastering everyday life. Yet, our ability
  to stay focused...".
- affect 3/3 — [PMC2367156](https://pmc.ncbi.nlm.nih.gov/articles/PMC2367156/)
  (browser): "This model stands in contrast to theories of basic
  emotions..."; "move away from a strictly basic emotion model..."; "the
  product of two independent neurophysiological systems...".
- attention 2/4 — PMC3627747 ("Maintaining attention...", first check
  above) and [PMC2693206](https://pmc.ncbi.nlm.nih.gov/articles/PMC2693206/)
  (browser): "A widespread style of Buddhist practice consists in
  sustaining selective attention moment by moment on a chosen object...".
- cognition 3/6 — [Tversky and Kahneman 1974, science.org](https://www.science.org/doi/10.1126/science.185.4157.1124)
  (platform fetch): "This article described three heuristics that are
  employed in making judgments under uncertainty: (i) representativeness...";
  [Gigerenzer 1996 PDF](https://sites.stat.columbia.edu/gelman/communication/Gigerenzer1996.pdf)
  (sandbox download): "vague heuristics have directed attention away from
  detailed models of cognitive processes and toward post-hoc accounts of
  alleged errors."; [Haidt 2004 via OpenAlex](https://api.openalex.org/works/doi:10.1037/0033-295X.110.1.197)
  (platform fetch): "This reply responds to their 2 main arguments by
  demonstrating that an intuitionist model allows for malleability and
  flexibility in judgment...".
- creativity 6/10 — [Conner et al., tandfonline](https://www.tandfonline.com/doi/abs/10.1080/17439760.2016.1257049)
  (platform fetch): first sentence of the flagged quote verified verbatim
  ("Lagged multilevel models revealed that people felt higher activated PA
  and flourishing following days when they reported more creative activity
  than usual."); the quote's second sentence was not separately re-confirmed
  on this fetch — PARTIAL, see flags; [PubMed 28259772](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28259772&rettype=abstract&retmode=text)
  and [PubMed 24405359](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24405359&rettype=abstract&retmode=text)
  and [PubMed 22941876](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22941876&rettype=abstract&retmode=text)
  (browser, eutils): serial-order effect, insight-definition and
  Baird mind-wandering spans verbatim; [Schumpeter ch. VII PDF](https://thaleszp.com/files/Schumpeter_creative_dest.pdf)
  (sandbox download + text extraction): "incessantly revolutionizes the
  economic structure from within, incessantly destroying the old one,
  incessantly creating a new one" — the carrier prints a footnote marker
  inside "revolutionizes", correctly omitted from the quotation;
  [Baer 1998, rider.edu PDF](https://www.rider.edu/sites/default/files/2024-05/CaseforSpecificity.pdf)
  (sandbox download): "A growing body of evidence suggests that creative
  performance is domain specific" — verbatim (the PDF's text layer has a
  soft hyphen inside "evidence").
- The two gutenberg.org Zarathustra fragments in creativity were already
  eye-verified verbatim in the map's own spot-checks and were not re-checked.

## Flagged — NOT verified this pass, left for the next verifier

Bounded effort applied; these hosts served challenge/error pages to both
this environment's browser and its page-fetcher:

1. attention x2 — labs.wsu.edu PDF spans ("Mixed results as to whether
   focusing attention on task-relevant stimuli can exclude distractors...";
   "This research indicates that distractor perception can be prevented...").
2. cognition x3 — philarchive HEMC spans (the wayback carrier
   http://web.archive.org/web/20250515152345id_/https://philarchive.org/archive/HECMVI
   returned a client error to the fetcher; the live philarchive page served
   the browser a challenge).
3. goals x1 — aom.org span ("We believe that Ordonez, Schweitzer,
   Galinsky, and Bazerman (2009), in their critique of goal setting...").
4. creativity x2 — the scispace.com citation is suspect: the cited page
   (a journal index for year "199", 0 papers listed) carries NEITHER
   flagged span ("suffers from conceptual, methodological, or logical
   oversights"; "The debate about the content general or specific nature
   of creativity is far from settled"). The next verifier should identify
   the actual paper (likely the CRJ point-counterpoint exchange) and
   re-anchor the citation; possible carrier repair, not a wording repair.
5. procrastination x3 — not attempted before the taper (semanticscholar
   active-procrastination span; OUP weakness-of-will span; the
   web.archive.org rjh221 span). No evidence either way yet.
6. creativity Conner quote — second sentence of the flagged two-sentence
   quote not separately re-confirmed on the opened abstract page.

## Verdict

- 16 span checks verified verbatim this sweep; 0 repairs needed; 0
  confirmed wording deviations.
- 8 flagged spans + 1 partial remain open for the next verification pass
  (blocked hosts or unattempted), documented above with routes tried.
- Combined session totals (both sweeps + the ctext/sample items): 49
  flagged spans eye-verified verbatim, 0 repairs needed, 9 open flags
  handed to the next verifier.

## ADDENDUM (2026-10-26, checks run between the measured 09:53:42Z reading
and this addendum's push; a fresh clock reading is quoted in its commit
message) — the flagged items above, resolved and remaining

- attention x2 (labs.wsu.edu, Lavie 2005) — RESOLVED VERBATIM. The PDF
  was downloaded and text-extracted this pass; the abstract carries both
  flagged spans word-for-word ("Mixed results as to whether focusing
  attention on task-relevant stimuli can exclude distractors from early
  perceptual processing (an 'early' selection effect) or can only prevent
  distractors from controlling behaviour and memory (a 'late' selection
  effect) has fuelled a longstanding debate between early- and
  late-selection views of attention." and "This research indicates that
  distractor perception can be prevented (early selection) when
  processing of task-relevant stimuli involves high perceptual load,
  and that although distractors are perceived in tasks of low perceptual
  load (late selection), their impact on behaviour depends on other types
  of load, such as that on working memory."). The automated miss was a
  blocked-fetch false positive (the host serves the fetcher only).
- procrastination x3 — RESOLVED VERBATIM. Chowdhury 2016
  ([Semantic Scholar page](https://www.semanticscholar.org/paper/f75c5c0d8c30510c44b74e99419e11c9599bc89f),
  opened): the page's abstract text carries "correlational results
  revealed that active procrastination has been mislabeled as a type of
  procrastination that is more appropriately construed as purposeful
  delay with adaptive qualities." word-for-word. Davidson (OUP chapter
  abstract): the direct page open is blocked in this environment (fetcher
  and browser), but the chapter abstract was confirmed verbatim in opened
  search-result content from the OUP page itself, and the same wording is
  quoted identically in two other opened academic carriers (a University
  at Buffalo PDF citing Davidson 1970 p. 93 and a University of Toronto
  course PDF). Holton 1999 x2: the wayback bibliography page (opened)
  carries "Philosophical orthodoxy identifies weakness of will with
  akrasia: the weak willed person is someone who intentionally acts
  against their better judgement" verbatim, and the author-hosted
  Weakness.pdf (downloaded and text-extracted) carries "Weakness of will
  arises, I shall suggest, when agents are too ready to reconsider their
  intentions." verbatim.
- goals x1 (aom.org, Locke and Latham 2009) — RESOLVED VERBATIM. The
  direct page open is blocked in this environment; the publisher abstract
  was confirmed in opened search-result content from the aom.org page:
  "We believe that Ordonez, Schweitzer, Galinsky, and Bazerman (2009), in
  their critique of goal setting, have breached the principles of good
  scholarship. Rather than conducting or integrating research, they chose
  to draw their central theme from anecdotal evidence. Further, they
  employ unrepresentative citations from the literature, the misreporting
  of results, and the use of emotionally laden metaphors rather than
  dispassionate language. Moreover, almost all the pitfalls of goal
  setting they cite, rather than being original, have already been
  published—by us." — word-for-word the dossier quote.
- creativity scispace x2 — RESOLVED VERBATIM, citation flag kept. The
  two flagged spans are Plucker 1998's abstract, confirmed word-for-word
  in opened search-result content from the publisher's page
  ([tandfonline, CRJ 11(2)](https://www.tandfonline.com/doi/pdf/10.1207/s15326934crj1102_8)):
  "Most of this research and theory, however, suffers from conceptual,
  methodological, or logical oversights." and "The debate about the
  content general or specific nature of creativity is far from settled,
  and more comprehensive research programs are necessary if progress is
  to be made in this area." MINOR FLAG for the next pass: the dossier
  cites a scispace journal-index page (which no longer reproduces the
  abstract) — re-anchoring the citation to the publisher DOI would make
  the carrier self-evident; wording needs no change.
- creativity Conner quote — FULLY RESOLVED VERBATIM. A second fetch of
  the publisher abstract page returned the full abstract; BOTH sentences
  of the flagged quote are word-for-word ("Lagged multilevel models
  revealed that people felt higher activated PA and flourishing following
  days when they reported more creative activity than usual. The other
  direction – PA predicting next-day creative activity – was not
  supported, suggesting that the cross-day effect was specific to
  creative activity predicting well-being.").
- cognition philarchive x3 — STILL OPEN. All three routes blocked this
  session: the platform fetcher (client error), the live page (browser
  challenge page), and the wayback carrier (download blocked). No
  evidence either way; handed to the next verifier with routes tried.

Updated session totals: 59 flagged spans eye-verified verbatim across the
four receipts this session; 0 repairs needed; 0 confirmed wording
deviations; 3 spans (philarchive) still open; 1 minor citation re-anchoring
flag (scispace -> publisher DOI).

## ADDENDUM 2 (2026-10-26; measured clock reading 09:57:18Z immediately
before the save, which committed within ~30s) — cognition
philarchive x3 RESOLVED VERBATIM; session flags all closed

The three HEMC spans in cognition are Rupert 2004 ("Challenges to the
Hypothesis of Extended Cognition", Journal of Philosophy 101(8)). The
philarchive and wayback carriers stayed blocked, but the paper's public
full text is hosted by the author's institution
([home.cs.colorado.edu PDF](https://home.cs.colorado.edu/~mozer/Teaching/syllabi/3702/readings/Rupert2004.pdf));
it was downloaded and text-extracted this pass and all three flagged
spans are word-for-word: "According to HEMC, we can properly understand
the traditional subject's cognitive processes only by taking into account
how the agent exploits the surrounding environment to carry out her
cognitive work."; "adopting the past-endorsement criterion undercuts HEC's
motivation, by offering a picture of cognition that seems to fit better
into the explanatory framework offered by HEMC." (the PDF's text layer
drops the hyphen in "past-endorsement" and prints a typographic
apostrophe); "adopting HEC results in a significant loss of explanatory
power or, at the very best, yields only an unmotivated reinterpretation
of results that can, at little cost, be systematically accounted for
within a more conservative framework." Two of the three were also
independently visible in opened search-result content from the same PDF.

Note for the degrees verifiers: this also opens a public full-text
carrier of Rupert 2004 — relevant to the standing deg-verify-b handoff
finding that the Rupert 2004 primary was unreachable on every route
tried (their routes hit a Cloudflare challenge; the Colorado PDF is a
different, open carrier).

FINAL SESSION TALLY (audit lane, worker-pplx-audit-1026a): 62 flagged
spans eye-verified verbatim across five receipts; 0 repairs needed; 0
confirmed wording deviations; 0 open span checks; 1 minor citation
re-anchoring flag kept for the next pass (creativity scispace index ->
publisher DOI); 1 duplicate-OWNER-BOARD-line removal disclosed (rebase
conflict cleanup, identical copy).
