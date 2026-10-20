# p1zc source ledger

Short, item-keyed evidence notes (owner decision 2026-10-20, PROTOCOL-PRINCIPLES item 7).

## S105 — Handle insults with equanimity
- Source opened: Epictetus, Enchiridion, Elizabeth Carter translation, MIT Classics
  (https://classics.mit.edu/Epictetus/epicench.html) — fetched via fetch_url and curl;
  byline "Translated by Elizabeth Carter" confirmed on the page and by web search
  (Online Books Page, LibriVox, Gutenberg listings).
- Quotation: Ench. 20, "Remember, that not he who gives ill language or a blow
  insults... you will more easily command yourself." — verified verbatim against the
  opened page text (full chapter 20 including the "Try, therefore" sentence).
- Dropped: Ench. 42 inline fragment (removed per advisor QC round 1: quote-period
  fidelity + standalone-blockquote rule).
- Limitations: Discourses, Meditations and Seneca De Ira locators in the inherited
  locator line were NOT opened this item; psychology parallels (Beck 1976,
  Alberti & Emmons 2001) not source-checked. Plain words is source-bounded to the
  Ench. 20 gain-time advice per advisor QC round 2.
- QC: round 1 FAIL (attribution unverified "Higginson" — corrected to Carter; unsupported
  generalizations; plain-words misreading; Ench. 42 quote handling), round 2 two narrow
  repairs applied (plain words source-bounded; proposal why clauses labelled as
  comparison), round 3 pending.
- Plain-words replicate (38% on plain-words-replicates.md) replaced.
- Round 3: PASS (advisor, scoped to the rewritten passages). Closeout: validator ok vs
  explicit baseline 0998a787; diff delta = body + plain words + new Sources section only;
  front-matter, principle statement, locator line, For example, all wikilinks and the
  reflections comment unchanged. DONE.

## S119 — Begin the morning with premeditation
- Skip-ahead light check: body and Plain words already at the bar (plain words is a
  genuine re-derivation; not on the replicates list). Missing verbatim quote added.
- Source opened: Marcus Aurelius, Meditations, Casaubon translation, Project Gutenberg
  (https://www.gutenberg.org/files/2680/2680-h/2680-h.htm) — fetched and extracted raw.
- Quotation: morning passage "Betimes in the morning say to thyself... truly good and
  truly bad." — verified verbatim against the extracted text; in this edition the passage
  sits at I.15 (most modern numberings II.1, which the inherited locator line uses).
- Body, Plain words, For example, parallels untouched; saturation already reciprocal
  (Morning intention, Premeditatio malorum, Implementation intentions all cite S119);
  no new proposals needed. Validator ok. DONE (no advisor QC due: item 2, cadence = item 6).

## S123 — Read and reflect on philosophical texts daily
- Skip-ahead light check: body and Plain words already at the bar (meal-plain-words is a
  genuine re-derivation, grounded by Seneca's own food image). Missing verbatim quote added.
- Source opened: Seneca, Moral Letters to Lucilius, Letter 2, Gummere translation, Wikisource
  (https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_2) — fetched twice
  (quote wording + section contiguity verified).
- Quotation: "Be careful, however... firm hold in your mind." (contiguous, Letter 2 §2) +
  ellipsis-marked food fragment "Food does no good... as soon as it is eaten;" (§3 opening).
- Saturation already reciprocal (7 concept pages cite S123); not on replicates list;
  no new proposals. Validator ok. DONE (no advisor QC due: item 3).

## S127 — Practise the discipline of not wanting
- Skip-ahead light check: body and Plain words at the bar; missing verbatim quote added.
- Source opened: same MIT Classics Carter Enchiridion (see S105) — chapter 2 text
  extracted and verified character-for-character.
- Quotation: Ench. 2 "For the present, totally suppress desire... any less proper means."
- Saturation reciprocal (4 concept pages cite S127); not on replicates list; no new
  proposals. Validator ok. DONE (no advisor QC due: item 4).

## S129 — Practise the discipline of attention
- Skip-ahead light check: body and Plain words at the bar; missing verbatim quote added.
- Source opened: same MIT Classics Carter Enchiridion — chapter 1 tail passage verified
  character-for-character (Carter reads "rough and harsh appearance"; other editions
  differ — checked against the opened text, not a secondary snippet).
- Quotation: Ench. 1 "Work, therefore, to be able to say to every rough and harsh
  appearance... it is nothing to you."
- Saturation reciprocal (5 concept pages cite S129); not on replicates list; no new
  proposals. Validator ok. DONE (no advisor QC due: item 5; next QC at item 6).

## ITEM-6 QC INCIDENT (S127/S129 quote fidelity, corrected 2026-10-20)
- The item-6 advisor QC challenged the S127/S129 quote verifications. Re-extraction of
  the opened MIT Carter Enchiridion showed both inserted quotes deviated from the
  opened source: S129 read "Work, therefore, to be able to say to every rough and
  harsh appearance" (source: "Work, therefore to be able to say to every harsh
  appearance"); S127 followed a secondary search-snippet wording ("things not in our
  own control... they are such as that you have no occasion for desire") rather than
  the opened text. Both corrected to the exact source wording and re-verified by
  programmatic substring check against the extracted page text ("S127 verified: True",
  "S129 verified: True"). The earlier "character-for-character" ledger claims for
  S127/S129 were wrong and are superseded by this entry. S105 (Ench. 20) and S119
  (Casaubon Med. I.15) re-verified by the same programmatic check: both True.
- Lesson recorded: quote from the opened extraction only; never from search snippets;
  verify with programmatic substring checks before marking done.

## SE021 — Recognise contingent self-worth (item 6, advisor QC due)
- Sources opened: (1) Crocker & Wolfe 2001, Psychological Review 108(3) 593-623,
  squarespace PDF copy — definition p. 594; fluctuation mechanism p. 596; (2) Crocker
  & Park 2011, Contingencies of Self-Worth, Handbook of Self and Identity chapter,
  buffalo.edu PDF — instability/depression sentence; external-vs-internal contingencies
  sentence (both quotes verified against the opened extractions).
- Repairs applied per advisor round 1: "the stake has a mechanics" passage replaced
  with a source-bounded paraphrase; second inline quote removed (instability sentence
  now a standalone blockquote); seven-domain aside dropped; plain words replaced with
  the advisor's version; inherited portfolio For example replaced with a labelled
  imagined illustration; Practice rewritten as a compendium exercise; psychology
  parallels rewritten (blanket "fragile/worse outcomes" and unverified "Crocker et al.
  2003 depression and anxiety" claims replaced with scoped claims grounded in the
  opened handbook chapter; the 2003 citation removed from the body locator).
- Round 2 pending. Validator ok.

## S119/S127 reopen + repair (advisor item-6 round 2)
- S119: "Marcus begins each day" habit claim replaced with "Marcus records the exercise as
  a morning rehearsal"; Plain words "Marcus did this every morning" replaced; nurse
  example's promised resilience ("isn't knocked sideways") replaced with a labelled
  imagined illustration ending in a decided response.
- S127: body rewritten to explain Epictetus's temporary suspension instruction and its
  stated disappointment rationale (ch. 2 opened text); "Each desire you drop returns
  attention and freedom" and the quieter-head benefit claim removed; For example
  replaced with a labelled imagined illustration. Both re-validated; marked done again.
- SE021 closeout: both PDFs downloaded and text extracted directly (pdftotext); q1
  verified on printed p. 594 (running header), handbook instability sentence on printed
  p. 310, external-vs-internal finding on p. 320 (bibliography: Leary & Tangney eds.,
  Handbook of Self and Identity 2nd ed., Guilford 2011); handbook locator p. 310 added
  to the blockquote and Sources; psychology parallel rescoped to the first-semester
  finding; "A later handbook chapter by the same program states" replaced with
  "Crocker and Park write:".

## ROUND-3 corrections (advisor caught real failures)
- S119 repairs had NOT landed (reopen command failed silently and the chained edit
  script was skipped); now applied with asserted anchors and verified in the file.
  Ledger history corrected: the earlier "S119 repaired" entry was wrong.
- Handbook locators corrected by per-page (form-feed) inspection: the instability
  sentence sits on the PDF page whose printed number is 311 (previous p. 310 claim
  was wrong; the earlier formfeed-marker method missed opposite-side running
  headers). External-vs-internal finding spans printed pp. 319-320. Blockquote,
  psychology parallel and Sources line all updated to these locators (asserted).
- SE021 Sources line for the handbook replaced with the full bibliographic entry
  (Leary & Tangney eds., Handbook of Self and Identity 2nd ed., Guilford 2011).
- S127 Plain words generalization ("most of what you want is not up to you")
  replaced with the bounded application.
- All six items validated vs pre-edit baseline 0998a787: 0 failed.

## Saturation hunts (mention tool, items 1-6)
- S119: hunted "premeditation", "morning rehearsal" — Mental simulation research (stub,
  cites K275 but not S119) identified and proposed; Morning intention, Implementation
  intentions, Education as growth already cite S119.
- S123: hunted "digest", "limited number of authors" — no additional links warranted
  (Bibliotherapy research and Deliberate practice already cite S123).
- S127: hunted "suppress desire" — Natural and necessary already cites S127; A007
  (in-band, last item) is the Aristotelian counterpart, to be handled when A007 comes up.
- S129: "The discipline of attention" and "Prosochē" already cite S129 — no additional
  links warranted.
- SE021: hunted "contingent self-worth" — Self-compassion and Amor sui (right
  self-love) both discuss contingent self-worth without citing SE021; both proposed.
  Contingencies of self-worth (Crocker), Contingent self-esteem, Kernis, The inner
  citadel already cite SE021.
- Three new reciprocal proposals appended to proposals/p1zc.json (Mental simulation
  research, Self-compassion, Amor sui).

## S129 mention hunt (round-5 closeout) + clause bounding
- Hunted "assent" and "impression" via the mention tool: Clarity of mind, Cognitive
  defusion, Decentering, Cognitive reappraisal inspected. Clarity of mind describes
  the Stoic sobriety of assent without citing S129 — proposed (bounded clause).
  The other three already carry S045/S047 (the more specific examine-impression
  principles); left unproposed (editorial call, recorded here).
- All three round-4 proposal clauses replaced with the advisor's labelled-comparison
  wordings (no empirical-equivalence claims).
- MILESTONE 1 (items S105, S119, S123, S127, S129, SE021): SCOPED PASS — the reviewed
  passages, quotations, locators, humanizer repairs and saturation checks pass; this is
  NOT independent certification of every inherited claim (inherited parallels and
  unopened locator references remain flagged in the per-item notes above).

## SE025 — Cultivate self-compassion (item 7)
- Source opened: Neff 2003, Self and Identity 2(2) 85-101, author-hosted PDF
  (self-compassion.org) — downloaded and extracted with pdftotext; definition p. 85,
  harsher-than-to-others sentence p. 87, needed-actions sentence p. 88, all verified
  by substring check against the extraction (q1, q2 True; q3 matches except the PDF
  ligature "difﬁcult" rendered as "difficult" and curly apostrophe rendered straight —
  typographic normalizations, noted here).
- Body rewritten: Neff's definition blockquote + friend-standard foothold (p. 87
  sentence) + not-indulgence grounding (p. 88 sentence). Plain words re-derived
  (was a replicate: re-listed the body's definition and components).
- Inherited psychology parallels (MacBeth & Gumley r = -0.54; Neff & Vonk 2009) NOT
  source-checked this item — flagged, not certified. Practice section and For example
  kept (For example is concrete; the friend question matches the page's framing).
- Saturation: 7 concept pages already cite SE025; "inner critic" hunt shows those
  pages relate to SE017, not SE025; no additional links warranted. Validator ok.

## SE032 — Cultivate an inner ally (item 8)
- Source opened: Kross et al. 2014, JPSP 106(2) 304-324, author-lab-hosted PDF —
  downloaded, pdftotext extraction; abstract conclusion verified by substring check
  (True). Locator: p. 304 (abstract page; article pages 304-324).
- Body: added the Kross conclusion blockquote + a grounded address/distancing sentence
  (self-distancing claim grounded in the opened abstract's "using non-first-person
  pronouns and one's own name... enhances self-distancing"). Plain words re-derived
  (was semi-replicate: re-quoted the critic/ally dichotomy).
- Inherited psychology parallels (Morin 2005; Brinthaupt 2009; Dobson 2012) NOT
  source-checked this item — flagged, not certified. Practice, For example, parallels
  kept. Saturation: 5 concept pages already cite SE032 (incl. Distanced self-talk
  (Kross)); mention hunt for "self-talk" surfaced no uncited natural targets; no
  additional links warranted. Validator ok. DONE (no advisor QC due: item 8).

## SE040 — Recognise identity and culture (item 9)
- Source opened: Markus & Kitayama 1991, Psychological Review 98(2) 224-253, MIT-hosted
  PDF — downloaded, pdftotext extraction; abstract quote (p. 224) and Geertz inner
  fragment (p. 226) verified by substring checks (True). Locator for the abstract:
  p. 224 (first page).
- Body: added the abstract blockquote + Geertz-quoted construal fragment + a practical
  consequence sentence. Plain words re-derived (was a replicate of the body's opening).
- Inherited psychology parallels (Oyserman et al. 2002; Benet-Martínez & Haritatos 2005;
  Huynh et al. 2011) NOT source-checked this item — flagged, not certified. Practice,
  For example, parallels kept. Saturation: 6 concept pages already cite SE040; mention
  hunt "cultural limits" surfaced no uncited natural targets; no additional links
  warranted. Validator ok. DONE (no advisor QC due: item 9).

## SE049 — Recognise the social self (item 10)
- Source opened: William James, The Principles of Psychology (1890), chapter X,
  psychclassics.yorku.ca — fetched and extracted; "as many social selves" passage
  verified by substring check (True), printed p. 294.
- Body: added the James blockquote (three sentences, contiguous in the source).
  Plain words (already a genuine re-derivation) and For example kept.
- Inherited psychology parallels (Andersen & Chen 2002; Chen et al. 2006; Showers &
  Zeigler-Hill 2007; McConnell 2011) NOT source-checked this item — flagged, not
  certified. Saturation: 6 concept pages already cite SE049; no additional links
  warranted. Validator ok. DONE (no advisor QC due: item 10; next at item 11).

## SE050 — Manage social comparison (item 11, advisor QC)
- Source opened: Festinger 1954, Human Relations 7(2) 117-140, humanscience.org archive
  copy — downloaded, pdftotext; Hypotheses I and II verified character-for-character.
  LOCATOR NOTE: the archive PDF lacks printed page numbers; the blockquote now cites
  "Hypotheses I-II" (advisor-corrected; the earlier pp. 117-118 derivation was not
  supported by the opened copy's formatting). Article range 117-140 in Sources only.
- Advisor round-1 repairs applied: unsupported generalizations removed ("automatic",
  "almost never fair", envy/smugness breeding, "the only comparison that pays", the
  "whatever the comparison target happens to be" closer); body replaced with the
  advisor's source-bounded version; Plain words replaced; For example replaced with
  a labelled imagined illustration; social-media parallel reduced to a bare reference
  (Vogel 2014/Fardouly 2015 not opened, flagged); Practice replaced with the
  compendium exercise. Festinger's "in many instances, perhaps most" sentence removed
  with the old body (subsumed by the advisor's body wording).
- Mention hunt: "comparison" too generic; specific candidates inspected: Envy and
  Self-Evaluation Maintenance Theory do not cite SE050 (both proposed, bounded
  clauses); Affect as information already cites SO031 (related principle; no
  proposal). Validator ok vs baseline. Round 2 pending.
- Round 2: scoped PASS. Closeout applied: audit narration removed from the public
  parallels bullet (kept here in the ledger); Socrates attribution reduced to the
  bare original reference. DONE.

## SE059 — Cultivate self-efficacy (item 12)
- Source opened: Bandura 1977, Psychological Review 84(2) 191-215, susana.org full copy —
  downloaded, pdftotext; both quoted sentences verified by substring check (True),
  p. 191 (abstract page, article first page).
- Body: added the founding-statement blockquote (effort/persistence determination +
  four sources, both from the opened abstract) + a sentence tying the four sources
  to the page's Practice line. Plain words (already a genuine re-derivation) and
  For example kept.
- Inherited parallels (Bandura 1997; Stajkovic & Luthans 1998) NOT source-checked —
  flagged, not certified. Saturation: 5 concept pages already cite SE059 (incl.
  Mastery experiences, Social learning theory); no additional links warranted.
  Validator ok. DONE (no advisor QC due: item 12).

## SE063 — Self-concordant goals (item 13)
- Source opened: Sheldon & Elliot 1999, JPSP 76(3) 482-497, PubMed abstract record
  (PMID 10101878) — fetched; the three quoted sentences verified verbatim against the
  opened page. No PDF copy needed (abstract carries the model's dual-role statement).
- Body: added the dual-role blockquote (definition + sustained effort + well-being
  benefit). Plain words (already a genuine re-derivation) and For example kept.
- Inherited parallels (Sheldon et al. 2004; Kasser & Ryan 1993; Kasser 2002) NOT
  source-checked — flagged, not certified. Saturation: 5 concept pages already cite
  SE063 (incl. Self-concordant goal pursuit over time, Intrinsic versus extrinsic
  goals); no additional links warranted. Validator ok. DONE (no advisor QC due: item 13).

## SE071 — Recognise self and trauma (item 14)
- Source opened: Cloitre et al. 2019, "Complex post-traumatic stress disorder: a new
  diagnosis in ICD-11", BJPsych Advances (cambridge.org PDF) — downloaded, pdftotext;
  the ICD-11 CPTSD definition sentences in Box 1 verified by substring checks (True).
- Body: added the DSO (disturbances in self-organisation) definition blockquote + a
  sentence tying the "fragments self" framing to the diagnostic domains. The clinical
  treatment-seeking advice (body + Practice) is appropriate for a trauma item and kept.
- Inherited parallels (van der Kolk 2014; Herman 1992; Cloitre et al. 2011) NOT
  source-checked — flagged, not certified. Saturation: 5 concept pages already cite
  SE071 (incl. The shattered self); no additional links warranted. Validator ok.
  DONE (no advisor QC due: item 14).

## SE076 — Recognise clinical self-symptoms (item 15, halfway)
- Source opened: WHO depression fact sheet (who.int) — fetched; the depressive-episode
  symptom passage verified verbatim against the opened page (incl. "feelings of
  excessive guilt or low self-worth").
- Body: added the WHO symptom-list blockquote + a clinical-first-question sentence.
  Plain words (already a genuine re-derivation) and For example kept; the
  seek-evaluation advice is appropriate for this clinical item and kept.
- Inherited parallels (APA 2022; Linehan 1993; Young et al. 2003) NOT source-checked —
  flagged, not certified. Saturation: 5 concept pages already cite SE076; no additional
  links warranted. Validator ok. DONE (no advisor QC due: item 15; next at item 16).

## SE080 + SE071/SE076 advisor round-1 repairs (item 16 QC)
- SE080: body replaced with the advisor's bounded version (philosophical starting
  point, not settled finding); "traffic" gloss deleted (the by-relation claim went
  with it); Plain words, For example, Practice replaced with the advisor's versions;
  psychology parallels reduced to bare references (ACT observing-self claim unverified);
  "The self as useful fiction" replaced with "Personal identity (Hume, Treatise, I.4.6)";
  the bundle sentence restored as a bounded second sentence (verbatim, substring-verified
  against the opened Gutenberg text) after the validator flagged 27 < 40 prose words.
- SE001 Related-concepts clause: SE001's body read; it does present McAdams's
  life-story model as quoted ("we invent stories to make sense of our own lives"), so
  the inherited clause's description is accurate; retained.
- SE071: "This is a specific clinical pattern requiring trauma-specific treatment"
  replaced with the compendium-advice framing; "The fragmenting is not a metaphor"
  replaced with the pattern-description framing (the ICD-11 quote calls these
  disturbances in self-organisation).
- SE076: the WHO blockquote now preserves the source's bulleted list format instead
  of semicolon prose (the earlier compression mislabelled the result verbatim).
- Mention hunts: "personal identity" and "bundle of perceptions" — The bundle theory
  (Hume concept page) does not cite SE080 (proposed, bounded); Identity, Skandha,
  Narrative identity inspected, no proposals (they relate to SE001/Anatta more
  directly). All three files validate; SE080 validates 0 failed. Round 2 pending.

## Round-2 repairs (SE080/SE071/SE076)
- SE080: Related-concepts clause reduced to the narrative-identity comparison.
- SE071: body/Plain words/For example/Practice replaced with bounded versions; the
  Cambridge article's authorship VERIFIED from the PDF first page — the article is
  Brewin, C. R. (2020), BJPsych Advances 26, 145-152, doi 10.1192/bja.2019.48 (the
  earlier "Cloitre et al., 2019" attribution was WRONG and has been corrected on the
  page and in Sources; ICD-11 definition quote re-verified against the opened text);
  psychology parallels reduced to bare references.
- SE076: body/Plain words/For example bounded to the opened WHO depression material
  (cross-diagnostic list and "not a project, an appointment" framing removed);
  parallels reduced to bare references; Practice kept (practical advice framing).
- Both items flagged in the band state pending round-3 acceptance. All three files
  validate vs baseline 0998a787 (0 failed).
