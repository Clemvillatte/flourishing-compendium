# Dossier ledger — The Self (worker-pplx-dossiers-1023b, 2026-10-23)

Verification record for docs/enrichment/dossiers/the-self.md, revision 3.
Every quoted fragment was verified against carrier text opened for it. The
revision-3 check was unprompted: carriers were downloaded raw (curl) or
extracted (pdftotext) and each displayed quotation was compared as a
normalized substring of the carrier text, not fetched through an
extraction prompt.

## Quotes verified against raw carrier text (revision 3)

- SN 22.59 (Thanissaro, dhammatalks.org, raw HTML): both passages exact.
  The carrier prints a footnote marker on "Every1 form"; the dossier omits
  the marker, words exact. Locator: the sutta page, aggregate examination.
- Milindapañha 3.1.1 (Rhys Davids): chariot passage exact against the
  e-Buddhism raw HTML, including the carrier's em dashes. Closing dialogue
  questions ("Then is it all these parts of it that are the chariot?" etc.)
  verified against SuttaCentral mil3.1.1 via the fetch tool's rendering;
  SuttaCentral serves a JS shell to raw curl, so the raw-text check could
  not be repeated there. The e-Buddhism text does not carry the closing
  questions; that carrier supports the chariot passage only.
- SEP Śaṅkara (Dalal, raw HTML): "The fundamental thrust...", the
  brahman/ātman sentence, the mutual-superimposition sentence, and both
  avidyā/suffering fragments exact. Locator: the entry's opening overview.
  The carrier prints curly apostrophes; the dossier renders them straight
  (rendering artifact, words exact). All five fragments attributed to
  Dalal's entry, never as Śaṅkara's own words.
- Deikman ch. 1: both passages exact against the Wayback Machine snapshot
  of deikman.com/observing.html (2026-10-05,
  web.archive.org/web/20261005074233/http://www.deikman.com/observing.html).
  CARRIER LIMITATION: deikman.com now returns an "Account Suspended" page
  to direct fetch, so the live site could not be re-verified; the snapshot
  is the recorded carrier for these fragments. The second quotation is
  given with the carrier's own lead-in ("In contrast, we cannot observe
  the observing self...") so the sentence is verbatim from mid-paragraph.
- Markus & Kitayama 1991 (MIT PDF, pdftotext): opening sentence and both
  construal definitions exact. Locator: article opening and the construals
  section; no page numbers observed in the extraction, none cited.
- Kross & Ayduk 2011 (Berkeley PDF, pdftotext): fly-on-the-wall sentence
  and the spontaneous self-distancing sentence exact.
- Grossmann & Kross 2014 (Waterloo PDF, pdftotext): the Solomon's-paradox
  sentences exact (abstract).
- Hayes et al. 2013 (PMC3635495, raw HTML): the self-as-context definition
  passage exact; the carrier prints curly double quotes inside the
  passage, the dossier renders them straight (rendering artifact, words
  exact). Locator: the article body, progress-review section.
- Masuda et al. 2004 (contextualscience PDF, pdftotext): the defusion
  definition (including the printed abstract's "rather than the
  attempting") and the clinical-utility caveat exact. Locator: abstract.
- Godbee & Kangas 2020 (PubMed efetch 33051034): the provisional-evidence
  sentence exact. Locator: abstract.

## Repairs applied in revision 3 (per the second advisor round)

- The pronoun claim removed from the opening; the angle is now framed as a
  question the research makes testable, resting on the verified
  Grossmann & Kross quotes.
- "The two accounts even share a diagnosis of suffering" removed; the
  Advaita stakes are now attributed to Dalal's entry alone.
- The Buddhist position scoped to SN 22.59's aggregate analysis throughout.
- The construals comparison now states the lens treatment as an editorial
  choice; the Vignoles finding stays off the dossier (concept-page pointer
  only).
- K144's description separated: the kernel's adapted questions versus the
  dialogue's own closing questions (both now stated correctly).
- "Coded reasoning" removed; the scope statement rests on the paper's own
  title and abstract wording.
- The Deikman second quotation now carries the carrier's lead-in so it is
  verbatim from mid-paragraph.

## Honest scope notes

- Card-link URLs follow the site's documented deep-link scheme
  (site/assets/app.js, #card=<file or id>); all 22 targets verified
  against actual content/ file names by script. The dossier's card links
  were exercised through the same scheme in the Academy view code.
- ACADEMY INTEGRATION (this pass): a Dossiers view added beside MORE
  VIDEOS and DISCOVERY in site/assets/app.js (window.fcDossiersData +
  renderDossiers + renderDossierDetail + card-link renderer + dossier
  CSS in style.css). Verification level: node --check clean, link
  renderer unit-tested (nested-paren file names handled), render smoke
  test via DOM stubs (1 card, 49 body blocks, missing-ID path). Visual
  rendering in a live browser was NOT inspected this pass — the sandbox
  has no browser; a one-glance check on the Pages deploy (~40 s after
  push) is the remaining step.
- K261's and K144's protocols are labelled in the dossier as the kernel's
  own adaptations, matching how the kernel pages present them.
