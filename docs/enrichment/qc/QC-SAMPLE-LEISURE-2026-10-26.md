# QC sample: leisure — 2026-10-26

Baton: audit. Agent: worker-pplx-audit-1026a (VERIFICATION lane).
Scope: post-sweep sample of the published leisure dossier, chosen because
no prior receipt this session had sampled it. Five displayed quotations,
span-matched (whitespace normalized) against freshly opened carriers.
Zero repairs needed; all five verbatim; all five citations point at the
correct carrier.

| Span | Carrier | Result |
|---|---|---|
| "And happiness is thought to depend on leisure; for we are busy that we may have leisure, and make war that we may live in peace." (NE X.7) | [MIT classics nicomachaen.10.x](https://classics.mit.edu/Aristotle/nicomachaen.10.x.html) (curl, opened this pass) | VERBATIM |
| "amusement is a sort of relaxation, and we need relaxation because we cannot work continuously. Relaxation, then, is not an end; for it is taken for the sake of activity." (NE X.6) | same page (curl) | VERBATIM |
| "The morality of work is the morality of slaves, and the modern world has no need of slavery." (Russell 1932) | [Harper's archive](https://harpers.org/archive/1932/10/in-praise-of-idleness/) (curl) | VERBATIM |
| "The idea that the poor should have leisure has always been shocking to the rich." (Russell 1932) | same page (curl) | VERBATIM |
| "There you might saunter idly by its side, or in the enjoyment of untroubled ease sleep beneath it." (Zhuangzi, Legge) | [Legge translation PDF](https://metis.ethz.ch/wp-content/uploads/2023/03/Zhuangzi_EnglishLegge.pdf) (curl + pdftotext) | VERBATIM |

Notes. (1) A first-pass extraction script mis-paired spans with citations and
briefly suggested the NE X.6 amusement quote was cited to the Politics VIII
page; direct grep of the dossier showed the citation is correct
(Nicomachean Ethics X.6). No defect. (2) The Politics VIII page was also
opened (curl) and does not carry the X.6 sentence, as expected. (3) The
MIT classics pages and Harper's archive both served plain curl fetches; no
bot walls encountered.

Measured clock reading at receipt start: 09:59:25Z. CORRECTION (measured
10:00:05Z): an earlier line of this receipt said 10:04:10Z — that was an
uncorrected pre-measurement estimate, not a measured reading; the
measured reading immediately before the first save was 09:59:25Z and the
commit message for that save repeats the wrong estimate. This line is
authoritative.
