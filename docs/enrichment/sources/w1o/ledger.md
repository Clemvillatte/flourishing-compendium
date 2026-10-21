# w1o ledger (worker-w1o-9e4b7c2f)

## QC record (band milestones)

### First-item QC round 1 (advisor, items 1-2)
FAIL on both items. Causes: founder attributions and four-threat definitions beyond opened evidence (ITT); "not a by-product of computation but identical to" staging plus unsupported contrast, unopened grids/feed-forward clause, unsupported "appeal for the compendium" closer (IIT). Repairs applied per advisor's bounded replacements; citations placed beside factual prose; "abstract" added to locators. Items 1-2 then revalidated ok.

### Item-5 milestone QC (advisor, items 1-5)
- Items 1-2: CONFIRMED PASS (repairs accepted).
- Item 3 (Interactive activation model): FAIL, two defects — IAC/PDP Wikipedia paragraph beyond the opened source (removed with its Sources row); no locator for the quote and no citations beside factual prose (fixed: p. 376 located via per-page pdftotext; primary PDF cited in prose; "word superiority" framed as the model's explanation).
- Item 4 (Interpersonal Deception Theory): FAIL, two defects — Wiley article not cited beside the opening-paragraph claims (fixed); moves-and-countermoves gloss overstated, cognitive-exertion claim dropped, paragraph re-anchored to the theory's own interactive framing (fixed).
- Item 5 (Interpersonal psychoanalysis): FAIL, defects — unsupported "set against Freudian drive theory" claim (removed); unattributed "participant observer" claim and unsupported contrast framing (removed); longer Hopwood blockquote replaced with the short Sullivan fragment and an accurate secondary-carrier disclosure; selective-inattention sentence re-anchored to the opened overview. (The "18 propositions" defect belonged to item 4, IDT, not this item; ledger corrected.)
- Repairs applied to all four items; revalidated against the pre-repair commit (see below).

## Validation baselines
- Items 1-2 repairs: validated ok at commit 65d0d493 (repairs) vs first-pass commit 3351e596 line.
- Items 3-5 first passes: 3351e596 (IA model), 3f3fa6b1 (IDT), 0506f0a8 (Interpersonal psychoanalysis).
- Items 1, 3, 4, 5 milestone repairs: validated ok at the QC-repairs commit (see git log, message "QC milestone repairs: items 1, 3, 4, 5 (w1o)").

## Per-item notes
- Integrated Threat Theory: SAGE abstract + PubMed 17201592 opened. Degree 4. Saturation hunt skipped per §1a (no obviously missing reciprocal jumped out).
- Integrated information theory: PubMed efetch 15522121 + IEP (Fallon) opened. Degree 4. Saturation skipped.
- Interactive activation model: author-hosted 1981 PDF downloaded and pdftotext-verified (quote on printed p. 376); Wikipedia IAC extract via API (used only as disclosed secondary carrier, then removed per QC). Degree 4. Saturation skipped.
- Interpersonal Deception Theory: Wiley abstract page + Wikipedia extract via API. Degree 4. Saturation skipped.
- Interpersonal psychoanalysis: PMC3675800 + Wikipedia extract via API. Degree 4. Saturation skipped.

## Session tooling notes
- git push over HTTPS fails in this sandbox (sideband disconnect); use `python3 scripts/api_push.py 3` after every commit (established repo convention). The owner-supplied token authenticates on api.github.com; git-receive-pack is not usable from this sandbox. The first push attempts failed because the locally-copied token string was truncated by its final character; the owner-supplied message text contains the complete value.
- Monotonic anchors: start epoch 1792572054 (08:40:54 UTC); monotonic reading 851.16 s at 08:54:16 UTC. Epoch readings are wall-clock; the report deadline (09:40:54 UTC) is tracked from the wall-clock start reading.

## Items-6-10 milestone QC (advisor)
- Items 6-10: FAIL round 1, all repaired per the advisor's exact edits:
  - Intuitive expertise: fireground/chess example removed; "rapid judgments" phrasing; opening re-anchored to the 2009 paper's purpose; "regularity of the environment" closer clause removed (dropped the opportunity-to-learn condition); two-conditions quote pinpointed to p. 520 (per-page pdftotext); heading neutralised.
  - James-Lange: "body is not the aftermath" gloss removed and replaced with the advisor's bounded sentence; Lange attribution narrowed to naming only; modern-consensus paragraph narrowed to what the Wikipedia carrier reports; locator noted as opening section.
  - Job characteristics model: Wikipedia-prose blockquote replaced with the Humphrey et al. 2007 peer-reviewed abstract quote, described as broader work-design review; "on average" removed from the 34% sentence; proposed-vs-demonstrated distinction added; sentence-level citations added. Front-matter verified byte-identical to pre-edit; 5/5 original wikilinks preserved.
  - Kin Selection: Wikipedia-only carrier replaced with Bourke 2014 (Phil Trans R Soc B, PMC3982664); history asides (Darwin/Fisher/Haldane) dropped; Hamilton's rule retained with the review's empirical findings.
  - Krumboltz: opening replaced with the advisor's four-factor sentence; "conditioning history" contrast deleted (the theory expressly includes inherited and environmental factors); associative-learning shortened; happenstance sentence re-anchored to the ERIC abstract; chapter colon retained.
- Items 1-5 follow-up: sentence-level citation pass applied (item 1 path-analysis sentence; item 2 Phi sentences; item 3 resting-level formulation replaced with the source-bounded version; item 5 Sullivan sentence and personifications paragraph).
- Degrees re-verified before certification: Intuitive expertise 8, James-Lange 6, Job characteristics model 5, Kin Selection 4, Krumboltz 4 (all <15, fast-track eligible).
- Full 10-page validation vs pre-enrichment baseline 7f32ffed (parent of first item-6 commit): 10/10 ok.
- Ledger corrections: item-5 18-propositions mis-entry fixed (belongs to item 4); credential note de-specified.

## Items-6-10 milestone — CLOSED (scoped PASS)
Advisor round-2 verification: scoped PASS for items 6-10 reviewed prose and quotations; items-1-5 follow-up repairs accepted; one final mechanical fix applied (Kin Selection sign-convention sentence given its own Bourke citation). Baseline correction: the earlier 7f32ffed baseline was pre-item-6 only; the TRUE pre-session baseline is 66717298a (the clone commit, predating all ten rewrites), and the final 10-path validation was run against it: 10/10 ok. RECORD: Items 6-10 milestone closed, scoped PASS for the reviewed prose and quotations; items-1-5 follow-up repairs accepted; ten pages structurally validated against original session baseline 66717298a; whole-band certification excluded.

## Items-11-15 milestone — CLOSED (scoped PASS)
Items: Lateral inhibition theory (Thoreson & Mangel 2012, PMC3401171), Law of Effect (Thorndike 1911 ch. V, psychclassics.yorku.ca), Leader-member exchange theory (Yamaura et al. 2026, Frontiers in Psychology, PMC13050747), Life as laboratory (Addams, Twenty Years at Hull-House, Gutenberg #1325), Life-span theory of development (Gautreau et al. 2016, Can J Surg, PMC4961492).
Advisor QC (3 rounds):
- Round 1 FAIL: items 13-15 (LMX unverified Graen/Uhl-Bien attribution and non-pinpoint locator; Life as laboratory deleted original P037 Cited-in link, unverified "Addams's phrase" framing, interpretation attributed to Addams; Life-span rearranged blockquote with unestablished ref-13 identity and unsourced SOC claims). Items 11-12 NOT VERIFIED (texts not supplied).
- Round 2 FAIL: item 11 (full article range not a pinpoint locator; brighter/darker-side paragraph beyond source), item 12 (uncited opening; "consequence, not insight" and "proportional" overreach; inherited Behavior analysis annotation unsourced), item 14 (one em dash outside quotation). Items 13, 15 PASS.
- Round 3: item 12 final correction — the four-box cat example is hypothetical ("If... would"), replaced with the advisor's hypothetical-comparison sentence with paragraph-beginning locator; p. 249 marker shown to FOLLOW the passage so page citation withdrawn.
Repairs: LMX opening replaced with source-bounded definition, locator "§1 Introduction" (section verified in article), benefits sentence softened to "reexamines whether"; Life as laboratory restored the original P037 link and compendium-label framing, em dash removed; Life-span blockquote replaced with continuous retrieved sentence, locator = section heading "Change is multidimensional and multidirectional", SOC sentence removed; Lateral inhibition locator = "§1 Introduction" (both blockquote and Nobel sentence verified in section 1), opening re-anchored to source-bounded definition + verbatim Nobel sentence, Mach 1865 and modality sentences retained against opened Wikipedia extract; Law of Effect opening and synthesis replaced per advisor, inherited [[Behavior analysis]] annotation removed (wikilink retained).
Degrees: Lateral inhibition 4, Law of Effect 5, LMX 4, Life as laboratory 4, Life-span 4 (all <15).
Final fixed-baseline validation vs 66717298a (unfiltered, exit 0): 5/5 ok. Preservation: git diff vs 66717298a shows no changed front-matter or Cited-in lines. RECORD: Items 11-15 milestone closed, scoped PASS; whole-band certification excluded.
