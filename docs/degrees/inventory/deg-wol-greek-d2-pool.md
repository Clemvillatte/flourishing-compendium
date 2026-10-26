# deg-wol-greek — Phase D2 resource pool

**Owner**: worker-pplx-degarchinv-1026a (baton `deg-arch-inventory-wolx5`)
**Built**: 2026-10-26 (T0 13:00:46 UTC; corrective pass T+20:04 UTC)
**Status**: D2 resource pool — DRAFT, evidence-discipline corrections applied (advisor QC round 2). Each entry below carries an explicit EVIDENCE-TIER label: [OPENED-VERIFIED] = the URL was fetched and the page content was actually read this session; [ACCESS-CHECKED] = the access statement was confirmed on the page but the content itself was not read in full; [DISCOVERY] = surfaced via search results or a syllabus cross-reference only, NOT opened. No entry is treated as established unless it is at least ACCESS-CHECKED. Hours arithmetic: ASSIGNED HOURS UNMEASURED — no verified total is established in this pass.

## Verified resource pool (Greek philosophy)

### A. Primary texts

| ID | Resource | Open status (verified) | Covers | D1 module |
|---|---|---|---|---|
| GREEK-TEXT-1 | Project Gutenberg, *The Republic* by Plato, eBook #1497 — https://www.gutenberg.org/ebooks/1497 | [OPENED-VERIFIED] (the page was fetched and read this session) | Freely downloadable (EPUB3, plain text, EPUB, Kindle, zipped HTML); public domain in the USA confirmed on the page | Plato's *The Republic* (per the page title; the Jowett translator attribution was in the search results, not confirmed on the page) | mod-greek-5 — PROPOSED; per-page reading-time measurement owed |
| GREEK-TEXT-2 | Perseus Digital Library, Plato — the Scaife ATLAS / catalog pages | [DISCOVERY] (the Perseus catalog and Scaife ATLAS pages were NOT fetched this session; the edition, identifier and licensing details below are from search-result metadata, NOT from an opened page) | NOT ESTABLISHED — the specific edition/licence claims (Burnet OCT PD, Fowler/Lamb/Bury English, CC BY-SA 4.0 TEI) are search-result metadata that must be confirmed on an opened page at the next pass | The Plato corpus per the search results | NOT ADMITTED as established — one direct fetch pass is owed |
| GREEK-TEXT-3 | MIT Internet Classics Archive — https://classics.mit.edu/ | The direct dialogue pages were bot-blocked (http_code_client_error) on fetch, but the archive's existence and Jowett translations are confirmed via multiple independent sources in the search results (the plato-dialogues.org links page names Jowett's translations at MIT as a standard open route) | Jowett's English translations of the Plato dialogues | alternative open route (flagged — needs one more fetch pass) |

### B. Teaching layers (MOOCs, open courses)

| ID | Resource | Open status (verified) | Covers | D1 module |
|---|---|---|---|---|
| GREEK-TEACH-1 | (to be verified) — the strongest known candidate is the existing enriched doc library (Stoicism, Epicureanism, Socrates, Plato, Aristotle dossiers — all validated per the enrichment programme's 2182/2182 principles and 2233/2233 concepts) | In-repo, validated | Stoicism, Epicureanism, Socrates, Plato, Aristotle | contextual — the D2 reviewer should map which dossiers carry which D1 rows |
| GREEK-TEACH-2 | Massimo Pigliucci's free Stoicism course — surfaced via the D1 handoff but NOT directly fetched this session | Unverified — one more fetch pass owed | Stoicism | mod-greek-9 |

### C. Reference / secondary

| ID | Resource | Open status | Covers | D1 module |
|---|---|---|---|---|
| GREEK-REF-1 | Project Gutenberg, Plato + Aristotle public-domain works (multiple IDs) | Project Gutenberg is a PD repository; specific IDs to be confirmed per work at the next pass | Plato and Aristotle texts | mod-greek-4 through mod-greek-8 |
| GREEK-REF-2 | Perseus Digital Library, Plato — the catalog and Scaife ATLAS pages | Confirmed open (see GREEK-TEXT-2) | Greek text + English translations side-by-side | all Plato modules |

## Coverage-matrix update (D2 → D1 matrix)

Rows in the D1 coverage matrix with any open-carrier evidence. Each row below states what is actually established — no row is "VERIFIED OPEN" at module granularity; the strongest evidence in this pass is [OPENED-VERIFIED] carrier + a PROPOSED module assignment that still requires per-lecture / per-chapter measurement.

| D1 row | Carriers with evidence tier | What is actually established |
|---|---|---|
| Plato Republic | GREEK-TEXT-1 [OPENED-VERIFIED] | The Gutenberg page confirms the title, free download, and PD status. The module-level assignment is a PROPOSAL; per-page reading-time measurement owed. |
| Sophists + Socrates (Apology, Euthyphro, Crito) | GREEK-TEXT-2 [DISCOVERY] | NOT ESTABLISHED — the Perseus details are search-result metadata; a direct fetch pass is owed. |
| Plato early dialogues + Meno | GREEK-TEXT-2 [DISCOVERY] | NOT ESTABLISHED. |
| Plato Phaedo | GREEK-TEXT-2 [DISCOVERY] | NOT ESTABLISHED. |
| Plato Symposium | GREEK-TEXT-2 [DISCOVERY] | NOT ESTABLISHED. |
| Aristotle logic + Categories | no carrier in this pass | NOT ESTABLISHED — no verified open carrier located in this pass. |
| Aristotle Physics + Metaphysics | no carrier in this pass | NOT ESTABLISHED. |
| Aristotle De Anima | no carrier in this pass | NOT ESTABLISHED. |
| Aristotle Nicomachean Ethics | no carrier in this pass | NOT ESTABLISHED. |
| Epicureanism | no carrier in this pass | NOT ESTABLISHED. |
| Stoicism | no direct carrier in this pass (the in-repo Stoicism dossier exists but was not measured this pass) | PARTIALLY ESTABLISHED — the dossier is in-repo; the hours and module assignment are NOT established. |
| Presocratics | no carrier in this pass | NOT ESTABLISHED. |
| Capstone | n/a | Not a resource row |

## Declared gaps (per the spec's honest-failure rule — these are flagged, not hidden)

1. **Perseus / Scaife**: the catalog and ATLAS pages were NOT fetched this session — the edition, identifier, and licence claims in the earlier draft were search-result metadata, NOT opened-page evidence, and are WITHDRAWN. One direct fetch pass is owed.
2. **Aristotle texts**: no verified open carrier located in this pass. One dedicated pass owed.
3. **Presocratics**: no verified open carrier located in this pass. One dedicated pass owed.
4. **Hellenistic schools (Epicurus, Stoics, Skeptics)**: no standalone open carrier located in this pass. One dedicated pass owed.
5. **MIT Internet Classics Archive**: bot-blocked; one more route owed.
6. **Pigliucci's Stoicism course**: not fetched; one more pass owed.
7. **Teaching layers**: the Greek degree's primary texts are the strongest open-carrier position of the batch, but the TEACHING layer is thin — the existing doc library is the main in-repo carrier, and a verified open MOOC or lecture series is still needed. One more pass owed.
8. **Hours arithmetic**: ASSIGNED HOURS UNMEASURED — no verified total is established in this pass. The earlier "15–25h" range was an estimate built from guessed page counts, NOT a measured figure, and is WITHDRAWN. The spec's method (selected on-scope passages, measured against the module docs) is the only valid calculation and has NOT been performed yet.

## D2 checkpoint (owed before D3)

The spec's mandatory checkpoint: the D1 map + this D2 matrix go to the reviewer together. The reviewer's decisions owed:

1. The Aristotle open-carrier pass (gap 1).
2. The Presocratics and Hellenistic open-carrier passes (gaps 2, 3).
3. The MIT Classics alternate route (gap 4).
4. The Pigliucci Stoicism course fetch (gap 5).
5. The teaching-layer gap (gap 6) — this is the Greek degree's biggest structural risk: the primary texts are open but the teaching layer is not.
6. The hours arithmetic (gap 7) — measured, not estimated.
7. The optional rows in the D1 matrix (Politics, Poetics, late-Plato Parmenides/Timaeus, ancient skepticism) — the D2 evidence makes these the exclusion candidates.

## D2 handoff

The next agent (baton `deg-arch-build` or the same holder) continues: the Aristotle text pass (Gutenberg IDs + Perseus), the Presocratics and Hellenistic passes, the MIT Classics alternate route, the Pigliucci fetch, and the teaching-layer MOOC search; then the hours arithmetic; then the checkpoint goes to the reviewer. The D1 file at deg-wol-greek.md is the topic map; this file is the resource pool; the matrix above is the single point of truth for what is verified open.
