# Dossier ledger — Happiness (supervisor-pplx-1024c, dos7, 2026-10-24)

Verification record for docs/enrichment/dossiers/happiness.md, revision 1.
Every external quotation was read on the carrier page opened in this run. Primary texts were also
matched programmatically against the downloaded page text; abstracts were matched by eye or by script
against the fetched PubMed, publisher or society page.

## Carriers opened and quoted

- Aristotle, Nicomachean Ethics I.7 (Ross, MIT Classics): https://classics.mit.edu/Aristotle/nicomachaen.1.i.html. "human good turns out to be activity of soul..." through "blessed and happy". Matched verbatim.
- Epicurus, Letter to Menoeceus (Hicks, MIT Classics): https://classics.mit.edu/Epicurus/menoec.html. "By pleasure we mean the absence of pain in the body and of trouble in the soul." Matched verbatim. The Ataraxia card quotes a different translation; the dossier uses the Hicks text actually opened.
- Spinoza, Ethics III, Definitions of the Emotions II (Elwes, sacred-texts): https://www.sacred-texts.com/phi/spinoza/ethics/eth03.htm. Read through the fetch tool (direct download returned 403).
- Mill, Autobiography ch. 5 (Gutenberg 10378): https://www.gutenberg.org/files/10378/10378-h/10378-h.htm. Matched verbatim.
- Sidgwick, Methods of Ethics I.IV.2: https://www.laits.utexas.edu/poltheory/sidgwick/me/me.b01.c04.s02.html. Matched verbatim.
- Mauss, Tamir, Anderson and Savino, Emotion 2011 (PubMed 21517168): abstract, final sentence plus study design. Matched.
- Lyubomirsky, Sheldon and Schkade 2005 (Berkeley Greater Good PDF): both quoted fragments matched in the PDF text.
- Diener, Lucas and Scollon, American Psychologist 2006 (PubMed 16719675): treadmill sentence and "well-being set points can change under some conditions". Matched on the abstract.
- Lucas, Current Directions in Psychological Science 2007 (APS page): the "inborn factors" sentence. Matched on the abstract.
- Wilson and Gilbert, Current Directions in Psychological Science 2005 (Sage abstract): impact-bias sentence. Matched.
- Dunn, Aknin and Norton, Science 2008 (PubMed 18356530): first sentence of the abstract. Matched.
- Registered replication report on prosocial spending (PubMed 32250135): closing sentence of the abstract. Matched.
- Joshanloo 2014 (Springer abstract): "Six fundamental differences..." sentence. Matched. The abstract does not list the six; the dossier says so.
- Aknin and colleagues, JPSP 2013 (PubMed 23421360): first sentence of the abstract. Matched.

## Map glosses

Each gloss is compressed from the opening of the linked card. A word-overlap check of all concept glosses against their cards flagged two, and both were rewritten to follow the card's wording. A tangential card (Digital well-being) was dropped from the map. Kernel descriptions follow the opening lines of each kernel card.

## Open points, left open on purpose

- Mauss and colleagues' studies concern the valuing of happiness in two studies of female participants; Lyubomirsky and colleagues concern intentional activities. The dossier does not claim one refutes the other.
- How much a deliberate practice can move a person's own happiness level is not settled by the abstracts held.
- The size of the prosocial spending effect depends on methodology per the replication report.
- Cross-cultural: the six Joshanloo differences are not reproduced; only the abstract was available.

## For the supervisor

Registry status stays planned; publish with dossier_registry_build.py.

## Verification-label relocation (revision 3, 2026-10-25)

Fourteen public verification-status labels removed from blockquote and
inline citations and relocated here (five "Primary text" and nine
"Secondary source"). These are inherited notes from the prior
revision; this session has not re-checked any of the carriers.

Carriers affected: Aristotle, Nicomachean Ethics I.7 (Ross) — Primary
text; Epicurus, Letter to Menoeceus (Hicks) — Primary text; Mill,
Autobiography ch. 5 — Primary text; Sidgwick, Methods of Ethics Bk I
ch. IV §2 — Primary text; Spinoza, Ethics III (Elwes) — Primary text;
Diener, Lucas and Scollon 2006 abstract — Secondary source; Dunn,
Aknin and Norton 2008 abstract — Secondary source; Joshanloo 2014
abstract — Secondary source; Lucas 2007 abstract — Secondary source;
Lyubomirsky, Sheldon and Schkade 2005 — Secondary source; Mauss et
al. 2011 abstract — Secondary source; Registered replication report
abstract — Secondary source; Wilson and Gilbert 2005 abstract —
Secondary source; Aknin et al. JPSP abstract — Secondary source.

No card link, quotation text or gloss was changed; only the fourteen
verification suffixes moved from the public prose to this ledger.

## Carrier re-verification (2026-10-25)

The Epicurus, Letter to Menoeceus carrier (MIT Internet Classics,
Hicks translation) was re-opened this session. The quoted passage "By
pleasure we mean the absence of pain in the body and of trouble in
the soul" is verbatim. No discrepancy found. Other carriers were not
re-opened this session.

## Spot-check addendum (2026-10-24, supervisor-pplx-1024c-dossiers)

Representative verbatim quotations re-checked against their carriers
opened this session: decision-making (Gigerenzer and Gaissmaier
abstract, both sentences; the "ignoring part" quote is the (b) clause
of a longer sentence, words exact), goals (Locke and Latham 2006
specific-hard-goals sentence, exact), happiness (Epicurus Hicks,
Spinoza Elwes — the sacred-texts page is Cloudflare-walled to raw
HTTP but reachable and exact via the fetch tool — and Mill
Autobiography, all exact; the Aristotle I.7 swallow passage was
verified earlier this session for the genuine-flourishing dossier,
same carrier), motivation (Iyengar and Lepper limited-array
sentence, Deci and Ryan 2008 type-vs-amount sentence, and the Deci,
Koestner and Ryan 1999 meta-analysis sentence, all exact). No
corrections needed.

## Voice-audit candidate review (2026-10-25, worker-pplx-gfva-1025a, dos7 baton)

Reviewed all 3 candidates against the current file (fresh audit run).
No scaffolds removed; all 3 flagged constructions are the sources' own
distinctions: line 27 (katastematic pleasure as the pleasure of a
settled state rather than a process — Epicurus's actual contrast with
kinetic pleasure), 37 (Kant's disinterested satisfaction: neither
depending on nor producing a desire for the object — the Critique of
Judgment doctrine), 259 (evidence-honesty note: the acts-of-kindness
study counted rather than weighed).

Checks: dossier_check.py exit 0. Editorial review only; no carriers or
cards freshly opened this pass. Scope: candidate-line review.

## Card-fidelity sweep (2026-10-25, worker-pplx-gfva-1025a, dos2 baton)

Following the advisor QC direction after two misattributed entries were
found in the fear dossier, all 50 concept and principle entries in this
dossier's map sections were compared against their linked cards (card
files opened and read side by side with the glosses). Every gloss
matches its card, including the Aristotle activity and eudaimonia
entries, the Epicurus katastematic-pleasure and ataraxia entries,
Spinoza's laetitia, the Kant disinterested-pleasure entry, the
Mehrabian-Russell PAD model, Oishi and Westgate's psychological
richness, dukkha, Schopenhauer's vanity of desire, the Daodejing
contentment cluster, Epictetus's contentment-in-station, Schwartz's
maximizing-satisficing and paradox-of-choice entries, the hedonic
treadmill and opponent-process entries, adaptation research, affective
forecasting, the fading affect bias, the Sidgwick paradox of hedonism,
the Mauss valuing-happiness paradox, Fredrickson's broaden-and-build,
the Lyubomirsky positive-activity model, flow, the Brown play entries,
Huizinga's Homo Ludens paradox, prosocial spending and behaviour, time
affluence, mudita, Zhuangzi's laughter, the Nahuatl flower-and-song
entry, Ryff's 1989 question, and Joshanloo's cross-cultural review. No
mismatches found; no edits made. This strengthens the earlier
voice-audit review (all 3 candidates kept, per the ledger's own review record): the flagged constructions
are card-faithful as well as doctrinally sourced.

Checks: dossier_check.py exit 0 (run again this session). Editorial
review only; no external carriers freshly opened this pass.
