# Ledger: sadness-and-grief

## Registry context

- Registry id: `sadness-and-grief`, band dos28 (mint 7, owner-directed editorial grouping).
- State: `review` in `docs/enrichment/batches/dos28.json` (worker notes below); registry status left `planned` for the supervisor to flip.
- The band's first task per `docs/enrichment/bands/dos28-manifest.json` and the DISAMBIGUATION row: test the sadness-as-state versus grief-as-process boundary from opened sources and flag any split proposal with the matrix as evidence.

## Boundary matrix row (test result)

Row 69 of `docs/enrichment/dossiers/DISAMBIGUATION.md` was updated from EDITORIAL GROUPING to PROVISIONAL. Test result: the boundary holds as a matter of structure. The APA material separates grief from depression (waves intermixed with positive memories; self-esteem maintained) and is episodic in its waves; the dual-process model gives grief its process structure (oscillation between loss- and restoration-oriented coping); the family's sadness entries (Gibran's On Joy and Sorrow, Inside Out's Sadness) treat sorrow as deep and constitutive, which is grief's register rather than a passing mood's. **No split proposal is made.** The compendium's sadness material is thin but grief-adjacent in register, and the grouping keeps both sides legible.

## Quote verifications (all opened this session, word-for-word)

- Stroebe & Schut 1999 abstract, dual-process model: quoted in full from the PDF carrier on the Grief's oscillation model card (wendyvanmieghem.com mirror). Verbatim.
- Zhuangzi 18 (Legge, ctext): wife-death passage quoted; matches the Grief for what passes card's own ctext carrier. CORRECTION (rev 2): an earlier note claimed the card's Google Sites carrier returned HTTP 429; that 429 belonged to the fear band's Seneca De Beneficiis carrier, not this card. The card lists ctext, SEP Zhuangzi and Giles as carriers; no failed fetch occurred here.
- Seneca Letter 63 (Wikisource, Gummere): four sentences quoted verbatim. FLAG for S070: the card's quotes "Let not your eyes be dry, nor yet overflow" and "Let us have many memories, but not poignant ones" are NOT verbatim in the Wikisource Gummere text; the closest printed sentences are "Let not the eyes be dry when we have lost a friend, nor let them overflow" and "Let us see to it that the recollection of those whom we have lost becomes a pleasant memory to us." Either a different translation sits behind the card or the quotes are paraphrase; the card needs source repair.
- Gibran, The Prophet, On Joy and Sorrow (Gutenberg 58585): chapter quoted verbatim; the card's full-poem quote checks out.
- APA, What Is Depression (psychiatry.org): two grief-versus-depression sentence pairs quoted verbatim. Minor wording flag for AF051: the card has "often mixed with positive memories of the deceased"; the carrier prints "often intermixed with positive memories of the deceased."
- Cunsolo & Ellis 2018 (uwosh PDF, p. 276): three sentences quoted verbatim, matching K348's quotes.

## Card-carried material used without quoting

- PGD thresholds (ICD-11 six months; DSM-5-TR twelve months, adults) from the S062 card.
- Continuing-bonds findings (Klass et al. 1996; Stroebe et al. 2012) from the Continuing bonds card.
- Epictetus Enchiridion XVI teaching (keep company, groan with, not inwardly) from the S114 card.
- Dhammapada 212 and SN 56.11 from the B108 card.

## Divergences

None claimed. The classical prescriptions and the clinical thresholds answer different questions (who sets the stop on grieving: pattern, proportion, duration-and-impairment), and the dossier states them as complementary rather than manufacturing an incompatibility. The unresolved question is recorded as such in the Retention paragraph.

## Revision history

- Revision 1 (this push): initial dossier, v2 format. Nearby terms block, boundary test (no split proposed), grief-as-work, classical prescriptions, sorrow and its fruit, grief beyond death, failure modes, four stories, retention, sources. Checker exit 0 required before push.

## Revision history (rev 2, advisor QC applied)

- Boundary verdict softened: the opened clinical sources distinguish grief from depression and model bereavement coping; they do not directly establish the sadness-as-state versus grief-as-process boundary, and the dossier no longer claims the boundary "holds". No split proposed; grouping retained provisionally; the DISAMBIGUATION row wording was softened to match.
- Manufactured-convergence fixes in Retention: the PGD thresholds are no longer presented as a "stop" anyone sets for the griever; the Cantares observation no longer equated with the dual-process model; the "youth and relationships" extension attributed to the Grief for what passes card was removed (the card does not make that claim; it is about the drumming-on-the-tub story, and it leaves open whether that counts as grief proper).
- Newly verified carriers (rev 2): PGD thresholds (Psychiatria Polska PDF, ICD-11 "more than 6 months at a minimum" and DSM-5-TR "at least 12 months ago" quoted); Stroebe et al. 2012 continuing-bonds "fail to recover over time" sentence (Utrecht PDF). Both previously card-carried claims are now directly sourced.
- Cunsolo & Ellis attribution corrected ("For Butler, and others"); article title corrected ("...as a mental health response to climate change"); Stroebe & Schut label corrected (one summary sentence, not the full abstract); Gibran label corrected (excerpts, not the full chapter).
- Editorial apparatus removed from public prose: "the boundary the band must test" header, the minting sentence, "Verdict:" line, matrix references, and the ledger-flag notes in the Sources section.
- S070 source-repair flag stands (quotes not verbatim in the Wikisource Gummere carrier).

## S070 flag sharpened (~T+28)

The S070 quotes were also checked against the Standard Ebooks Gummere text of Letter 63 (S062's carrier): it prints the same wording as Wikisource ("Let not the eyes be dry when we have lost a friend, nor let them overflow" / "Let us see to it that the recollection of those whom we have lost becomes a pleasant memory to us."). S070's shorter quotes are therefore not verbatim in either Gummere carrier; the card either paraphrases or uses a different translation. Source repair still needed.

## Voice-audit candidate review (2026-10-25, worker-pplx-gfva-1025a, dos28 baton)

Reviewed all 9 candidates against the current file (fresh audit run).
No scaffolds removed; all 9 flagged constructions carry real contrasts or
honest scope notes: line 5 (sadness as working state vs defect — the
Sorrow's fruit framing), 16 (the clinical material separates grief from
depression rather than sadness from grief — a precise scoping
statement about what the sources do and do not establish), 22 (grief as
process vs state — the dual-process model's claim), 24 (the sources "do
not directly establish the sadness-as-state versus grief-as-process
boundary" — exactly the honest scoping the project requires), 32
(respite as adaptive coping vs failure — the model's point), 46
(Seneca's Letter 63 draws the line at proportion rather than absence —
accurate to the quoted letter), 54 (S070's identity limit: grief kept
company with but not become the person — the principle's own framing),
102 (neither a shared stopping rule nor a genuine incompatibility —
honest neither-nor about unlike claim types), 118 (ledger note: the
article invokes Butler's reading rather than reporting it as a measured
finding — attribution honesty).

Checks: dossier_check.py exit 0. Editorial review only; no carriers or
cards freshly opened this pass. Scope: candidate-line review.

## Card-fidelity sweep (2026-10-25, worker-pplx-gfva-1025a, dos2 baton)

Following the advisor QC direction after two misattributed entries were
found in the fear dossier, the four concept entries in this dossier's
map were compared against their linked cards (card files opened and
read side by side with the glosses): Stroebe and Schut's dual-process
oscillation model, Klass-Silverman-Nickman continuing bonds (with the
2012 longitudinal limit carried), the Zhuangzi drumming-on-the-tub
reading, and complicated grief research. All four glosses match their
cards. No mismatches found; no edits made.

Checks: dossier_check.py exit 0 (run again this session). Editorial
review only; no external carriers freshly opened this pass.

## GF-model rewrite (2026-10-25, worker-pplx-dos28-1025h, dos28 baton)

Restructured docs/enrichment/dossiers/sadness-and-grief.md from the
map format to the owner-validated GF interwoven format per
docs/enrichment/dossiers/DOSSIER-MODEL.md (modeled on
genuine-flourishing.md and wisdom.md), per CURRENT ORDERS.

What was done:

- Question added under the title ("What is grief asking of the person
  grieving, and who sets when the work is done?"); first-person intro
  written; Nearby terms kept (6 bullets).
- Map entries rewoven into question-headed threads: state vs course of
  work, what the work consists of, how long and by what measure, what
  sorrow is made of, grief beyond death, when grief goes wrong.
- Where-the-traditions-genuinely-disagree section built (3 questions,
  each side held, turn-on stated, first-person lean): Should grieving
  be limited by prescription (Seneca proportion vs B108 "sets no
  deadline for feeling better")? Detachment or continued relationship
  (older clinical picture vs continuing bonds, Stroebe 2012 condition)?
  What brings grief to its stop: proportion or understanding (Seneca
  vs Zhuangzi)?
- Practice VSR section built from the four held practice cards (K319,
  B108, K348, R124), each kernel's protocol taken from its card.
- Story section moved to the final position (checker requirement);
  the old Sources section was removed from the dossier (the ledger
  carries the source list; exemplars carry no Sources section).
- Card-link set identical to the previous revision (diff of extracted
  #card= targets: identical).
- Stroebe & Schut dosage sentence newly quoted verbatim (it was
  previously paraphrased), with the same PDF carrier.

Quote verification (this session): dossier_quote_verify.py checked 15
quotes; 5 NOT FOUND, all blocked-or-extraction failures, each
confirmed by eye against an opened carrier:
- Stroebe & Schut 1999 summary + dosage sentences: present verbatim in
  the fetched PDF (extraction drops fi-ligatures, which broke the
  automatic match; confirmed by eye).
- Cunsolo & Ellis 2018 Butler and value-questioning sentences: present
  verbatim in the fetched PDF (superscript citation numbers and a
  line-break hyphen broke the automatic match; confirmed by eye).
- Zhuangzi 18 Legge passage: ctext returned a bot-wall page to this
  sandbox; the passage confirmed verbatim against mirrors of the Legge
  "Texts of Taoism" wording (opened via web search results).

Checks: dossier_check.py exit 0 (37 card links, 17 headers, 16
external carriers); density 0; voice audit clean. Registry status
left "planned" for the supervisor to flip and publish.

## Advisor-QC correction pass (2026-10-25, worker-pplx-dos28-1025h, dos28 baton)

Advisor QC on the first GF draft flagged source-integrity issues; all
fixed and re-verified in this pass:

- Disagreement section rebuilt. Two questions rejected by the advisor
  as manufactured (Seneca proportion vs B108 no-deadline: proportion
  and time are different axes and can coexist; Seneca proportion vs
  Zhuangzi tracing: different approaches, not incompatible answers,
  and "both traditions agree that grief ends" is not established by
  the passages). The section now holds three questions with both sides
  explicitly held: (1) detachment vs continued relationship (Freud-
  1917-informed dominant view vs Klass et al. 1996, both documented on
  the Continuing bonds card, conditioned by Stroebe 2012 and the 2023
  79-study review "unable to confirm"); (2) deep persistent sorrow as
  disorder vs depth (PGD thresholds vs Gibran valuation and the Aztec
  co-presence, with impairment as the turn-on); (3) moderation vs
  accompaniment (Seneca's bound vs the Cantares Mexicanos). The
  unsupported psychological generalisation ("tends to go underground")
  and the "writer's taste" overclaim were deleted.
- Zhuangzi passage now verified against an actually fetched full-text
  carrier: The Writings of Kwang-dze, Legge translation, full PDF at
  https://metis.ethz.ch/wp-content/uploads/2023/03/Zhuangzi_EnglishLegge.pdf
  (all three quoted excerpts confirmed verbatim by pdftotext match).
  This supersedes the earlier search-excerpt confirmation; ctext
  remains bot-walled from this sandbox.
- The four PDF extraction mismatches (Stroebe & Schut fi-ligatures;
  Cunsolo & Ellis superscripts and line-break hyphen) are confirmed
  verbatim by eye in the fetched PDFs and are recorded separately from
  the ctext case.
- Verifier limitation recorded: dossier_quote_verify.py skips
  quotation paragraphs whose only URLs are card links, so its pass does
  not cover card-carried quotes (Dhammapada on B108, Epictetus on
  S114); those remain card-carried per past-session verification.
- Variation paragraph: the avoidance-prolongs claim is now anchored to
  the R124 card's meta-analysis statement ("prolonged avoidance of
  grief is associated with worse health outcomes and increased
  emotional distress over time") instead of "the later empirical
  literature". R124 kernel now uses R124's actual protocol (regular
  emotional expression through writing, in a supportive setting);
  the naming protocol stays attributed to K348.
- Humanizer em-dash rule applied to prose in both dos27 and dos28
  dossiers (fear.md and sadness-and-grief.md): zero prose em dashes
  outside quoted matter and link titles (verified by scan).
- Inventory wrappers reduced ("the family's cleanest treatment",
  "the family's statement", "the other edge of the same cloth",
  "the wisdom traditions" narrowed to Gibran and the Aztec songs).

Checks re-run: dossier_check.py exit 0 both files (fear: 46 card
links; sadness-and-grief: 38 card links, the Continuing bonds link
added); density 0; voice audit clean. Registry status left "planned"
for the supervisor.
