# QC: sweep of automated quote non-matches across 42 published dossiers

Agent: worker-pplx-dosr6-1026r. Date: 2026-10-26 (09:52Z). Supervisor post-review requested (no advisor tool on this worker).

## Method

Ran the dossier quote verifier over every published dossier in docs/enrichment/dossiers/ (42 files). Total non-matches: 92 spans. A non-match is a verifier limit (abstract-only carrier, blocked host, OCR text layer, punctuation spacing), not a finding that the quote is wrong. Each span below was re-checked against text from a source opened in this session: the PubMed efetch record for PubMed carriers, or a fetched copy of the carrier page. A span counts as verified only when the opened text contains the quoted wording.

## Verified in this pass (35 spans, all verbatim)

PubMed efetch (17 of 18 PubMed-carried spans): creativity (28259772, 24405359, 22941876), lifes-purpose (10101878), meaning-and-mortality (20097885), right-effort (9599441, 27474142), shame-and-guilt (29303420, three spans), wisdom (29620401, 24405359, 11392856 four spans). The eighteenth, the wisdom span on Sage (PubMed 21728454), was verified in docs/enrichment/qc/QC-dossier-wisdom-nonmatch-reverify-1026r.md and is not repeated here.

Fetched carrier pages:
- Eisenberger and Cameron 1996, American Psychologist, "Detrimental Effects of Reward: Reality or Myth?" (creativity, 2 spans, one sentence containing both).
- Baer 1998, Creativity Research Journal 11(2), "The Case for Domain Specificity of Creativity" (creativity, 1 span).
- Plucker 1998, Creativity Research Journal, "Beware of Simple Conclusions: The Case for Content Generality of Creativity", scispace record (creativity, 2 spans).
- Sujato translation of SN 42.3 on SuttaCentral (right-intention, 1 span).
- Mengzi, Teng Wen Gong I on ctext.org (others, 1 span).
- Sharlow, "Yes, We Have Conscious Will", PhilSci-Archive (agency, 2 spans).
- Cicero, Academica II, Rackham translation on attalus.org (uncertainty, 3 spans; the carrier prints a space before semicolons and brackets, which is why the verifier misses them).
- Ellsberg 1961, "Risk, Ambiguity, and the Savage Axioms" (uncertainty, 4 spans; the dossier's wording matches the source, "neither wish nor tend to conform to the Savage postulates").
- Constant, "Des réactions politiques" (right-speech, 1 span): the French sentences are printed in several opened pages that quote the 1796 text (atelierphilo.fr, the Académie de Paris-region open textbook, Kant's reply as reproduced there); the UQAM host itself refused a fetch.
- Davidson, "How Is Weakness of the Will Possible?" (procrastination, 1 span): the Oxford Academic chapter page shows the sentence in the search excerpt; the host blocks a direct fetch.

## Not re-verified in this pass (57 spans)

These remain as before. Many are documented in the dossier ledgers (cognition six OCR and blocked-host spans; the-self Milinda; wisdom four spans in the QC receipt above; goals AOM span in the supervisor note), but I did not re-open their sources today: attention 2; creation 6; creativity 4 (Lagged multilevel, Schumpeter, Zarathustra spans); executive-functions 2; freedom 1 (Fromm); gratitude 7; happiness 1 (Spinoza); impermanence 1 (Epicurus); lifes-purpose 7; meaning-and-mortality 1; others 3; procrastination 2; right-intention 2; right-livelihood 1; right-speech 1 (Kant, scielo); right-view 2; sadness-and-grief 1 (Seneca); suffering 1; the-self 1; wisdom 4; cognition 6; goals 1.

Suggested next sweep: the 57 spans, starting with undocumented ones in gratitude, lifes-purpose, creation and attention.
