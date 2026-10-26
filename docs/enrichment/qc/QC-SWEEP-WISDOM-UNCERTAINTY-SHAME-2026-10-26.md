# QC sweep: post-map quote misses in wisdom, uncertainty, shame-and-guilt (2026-10-26)

Worker: worker-pplx-audit-1026a (audit baton). Checks run 2026-10-26
09:49-09:58Z (UTC; measured readings 09:51Z and 09:58Z bracket the sweep).

Why this sweep: the dosr-band quote map was written before several
below-bar repairs landed, so quotes ADDED or re-anchored by the repairs
were never machine-verified against their live carriers. A fresh
`dossier_quote_verify.py` run on the three dossiers that showed ZERO misses
at map time (wisdom, uncertainty, shame-and-guilt were all in the map's
clean list) now reports 25 NOT FOUNDs — these are new since the map, not
already-adjudicated items. All 25 were eye-checked on their carriers this
session. Method: cloud browser for PubMed eutils and PMC (the hosts block
the script's urllib fetcher), platform page-fetch for sagepub and
tandfonline (bot-walled in the browser, open to the fetcher), direct PDF
download + pdftotext for the Ellsberg carrier.

## uncertainty — 4 NOT FOUND, all VERBATIM on the carrier

The [Ellsberg PDF](https://sites.socsci.uci.edu/~bskyrms/bio/readings/ellsberg.pdf)
(downloaded and text-extracted this session) contains all four flagged
spans word-for-word: "This corresponds to Savage's Postulate 2, which he
calls the 'Sure-thing Principle' and which bears great weight in the
analysis."; "I propose to indicate a class of choice-situations in which
many otherwise reasonable people neither wish nor tend to conform to the
Savage postulates, nor to the other axiom sets that have been devised.";
"Indeed, it seems out of the question summarily to judge their behavior as
irrational: I am included among them."; "It would seem incautious to rule
peremptorily that the people in question should not allow their perception
of ambiguity, their unease with their best estimates of probability, to
influence their decision". Automated-miss cause: the PDF's text layer has
poor kerning (spaces dropped between words, e.g. "Sure-thingPrinciple"),
which no whitespace normalization can repair — a text-extraction artifact,
not a carrier deviation.

## wisdom — 11 NOT FOUND, all VERBATIM on the carriers

- [Eyal, Steffel and Epley 2018, PubMed 29620401](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=29620401&rettype=abstract&retmode=text)
  (browser, eutils): "Understanding the mind of another person is therefore
  enabled by getting perspective, not simply taking perspective." — final
  sentence of the abstract.
- [Kounios and Beeman 2014, PubMed 24405359](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=24405359&rettype=abstract&retmode=text)
  (browser, eutils): "Insight occurs when a person suddenly reinterprets a
  stimulus, situation, or event to produce a nonobvious, nondominant
  interpretation." — verbatim.
- [Sanderse, tandfonline](https://www.tandfonline.com/doi/full/10.1080/03057240.2018.1497952)
  (platform fetch): "Full virtue and practical wisdom comprise the end of
  neo-Aristotelian moral development, but wisdom cannot be cultivated
  straight away through arguments and teaching." — first sentence of the
  abstract.
- [Javed and Kakul, mdpi](https://www.mdpi.com/2499-6564/71/2/109)
  (browser): "an informed and detached concern with life itself in the face
  of death itself" — verbatim (Erikson quoted in the paper).
- [Grossmann and Kross 2014, sagepub](https://journals.sagepub.com/doi/abs/10.1177/0956797614535400)
  (platform fetch): "no age differences in wise reasoning about personal
  conflicts" — verbatim in the abstract sentence.
- [Baltes and Staudinger 2000, PubMed 11392856](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11392856&rettype=abstract&retmode=text)
  (browser, eutils): all five flagged spans verbatim — "an expert knowledge
  system concerning the fundamental pragmatics of life"; "knowledge and
  judgment about the meaning and conduct of life"; "that organizes and
  orchestrates knowledge toward human excellence in mind and virtue, both
  individually and collectively"; "recognition and management of
  uncertainty"; "Measurement includes think-aloud protocols concerning
  various problems of life associated with life planning, life management,
  and life review".
- [Grossmann et al. 2021, sagepub](https://journals.sagepub.com/doi/abs/10.1177/0956797620969170)
  (platform fetch): "a significant increase in wise reasoning about
  interpersonal challenges" — verbatim in the abstract sentence.

## shame-and-guilt — 10 NOT FOUND, all VERBATIM on the carriers

- [Tangney, Stuewig and Mashek 2007, PMC3083636](https://pmc.ncbi.nlm.nih.gov/articles/PMC3083636/)
  (browser): "According to Lewis (1971), shame involves a negative
  evaluation of the global self; guilt involves a negative evaluation of a
  specific behavior." (appears twice in the dossier — both instances
  verified); "shame corresponds with attempts to deny, hide, or escape the
  shame-inducing situation"; "Guilt, on the other hand, corresponds with
  reparative actions including confessions, apologies, and undoing the
  consequences of the behavior."; "Oh, look at what a horrible thing I
  have done"; "… and aren't I a horrible person" (the carrier prints a
  typographic apostrophe in "aren't" — the words are identical).
- [de Hooge et al. 2018, PubMed 29303420](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=29303420&rettype=abstract&retmode=text)
  (browser, eutils): "Whereas psychology literature typically portrays
  shame as being bad for social relations, motivating social avoidance and
  withdrawal, there are recent indications that shame can be reinterpreted
  as having clear social tendencies in the form of motivating approach and
  social affiliation."; "Two studies (N = 148 and N = 133) using different
  shame inductions both showed people experiencing shame to prefer to be
  together with others (social approach) over being alone (social
  withdrawal)."; "to be together with others (social approach) over being
  alone (social withdrawal)" (substring of the previous sentence).

## Verdict

- 25 of 25 flagged spans VERBATIM on opened carriers; no dossier text
  changes needed. wisdom 34/34, uncertainty 26/26, shame-and-guilt 35/35
  after adjudication.
- Automated-miss causes (recorded, not diagnosed beyond evidence): blocked
  hosts for the script's urllib fetcher (PubMed, PMC, sagepub, tandfonline
  — all passed via browser or platform fetch); the Ellsberg PDF's
  kerning-broken text layer; typographic apostrophes in needles.
- Tool note (no code change made): a future verifier could fetch PubMed
  spans via eutils, journals via a browser-capable fetcher, and normalize
  typographic apostrophes; the Ellsberg class (poor PDF text layer)
  requires eye-checks.
- Combined with the earlier samples this session: 33 flagged spans
  eye-verified verbatim, 0 repairs needed, 0 unresolved.
