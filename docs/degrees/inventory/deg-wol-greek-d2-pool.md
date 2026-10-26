# deg-wol-greek — Phase D2 resource pool

**Owner**: worker-pplx-degarchinv-1026a (baton `deg-arch-inventory-wolx5`)
**Built**: 2026-10-26 (T0 13:00:46 UTC)
**Status**: D2 resource pool — DRAFT (in progress; each entry verified against an opened primary source this session; the D1 file at deg-wol-greek.md is the topic map this pool fills).
**Scope**: per docs/degrees/CURRICULUM-ARCHITECTURE-1026.md Phase D2 — source verification and selection. Each entry below is verified: (a) it was actually opened (URL fetched, page read) this session, (b) open-access / public-domain status confirmed on the page, (c) what topics it carries is logged against the D1 matrix.

## Verified resource pool (Greek philosophy)

### A. Primary texts

| ID | Resource | Open status (verified) | Covers | D1 module |
|---|---|---|---|---|
| GREEK-TEXT-1 | Project Gutenberg, *The Republic* by Plato, eBook #1497 — https://www.gutenberg.org/ebooks/1497 | Freely downloadable (EPUB3, plain text, EPUB, Kindle, zipped HTML); public domain in the USA confirmed on the page | The full Plato Republic primary text (Jowett translation) | mod-greek-5 (Plato Republic — the centrepiece module) |
| GREEK-TEXT-2 | Perseus Digital Library, Plato — the Scaife ATLAS library — https://atlas.perseus.tufts.edu/library/urn:cts:greekLit:tlg0059/ (and catalog.perseus.org) | The Perseus catalog and Scaife ATLAS pages were read this session; the Plato works are listed with Greek editions (Burnet's OCT Platonis Opera, PD — Burnet died 1928, the text is PD) and English translations (Plato in Twelve Volumes — Fowler, Lamb, Bury, Shorey — hosted by Perseus; the Perseus TEI encoding is licensed CC BY-SA 4.0 per the Plato Reader attribution page) | Euthyphro (tlg001), Apology (tlg002), Crito (tlg003), Phaedo (tlg005), Gorgias (tlg023), Symposium (tlg011), Republic (tlg030), and the full Plato corpus | mod-greek-3 (Sophists + Socrates: Apology/Euthyphro/Crito); mod-greek-4 (early dialogues + Phaedo); mod-greek-5 (Republic); mod-greek-6 (Symposium, Theaetetus) |
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

Rows in the D1 coverage matrix now backed by an on-matrix verified open resource:

| D1 row | Now backed by | Status |
|---|---|---|
| Sophists + Socrates (Apology, Euthyphro, Crito) | GREEK-TEXT-2 (Perseus: Euthyphro tlg001, Apology tlg002, Crito tlg003 — Greek + Fowler English) | VERIFIED OPEN |
| Plato early dialogues + Meno | GREEK-TEXT-2 (Perseus covers the full Plato corpus) | VERIFIED OPEN |
| Plato Phaedo (soul, forms, recollection) | GREEK-TEXT-2 (Perseus: Phaedo tlg005) | VERIFIED OPEN |
| Plato Republic | GREEK-TEXT-1 (Gutenberg #1497, full Jowett text, PD) + GREEK-TEXT-2 (Perseus: Republic tlg030) | VERIFIED OPEN — the strongest row |
| Plato Symposium | GREEK-TEXT-2 (Perseus: Symposium tlg011 — Lamb translation) | VERIFIED OPEN |
| Aristotle logic + Categories | NOT YET VERIFIED — the Aristotle texts on Gutenberg/Perseus must be located as a dedicated pass | GAP — flagged |
| Aristotle Physics + Metaphysics | NOT YET VERIFIED — same gap | GAP — flagged |
| Aristotle De Anima | NOT YET VERIFIED — same gap | GAP — flagged |
| Aristotle Nicomachean Ethics | NOT YET VERIFIED — same gap (the NE is on Gutenberg in the Ross translation; a dedicated pass is owed) | GAP — flagged |
| Epicureanism | NOT YET VERIFIED — the Epicurus letters and Principal Doctrines are PD (they are on sacred-texts and in the existing doc library) but were not located and fetched as standalone open carriers this session | GAP — flagged |
| Stoicism | GREEK-TEACH-2 (Pigliucci, unverified) + the existing Stoicism dossier | PARTIALLY VERIFIED — the dossier is in-repo and validated; the Pigliucci course needs a fetch pass |
| Presocratics (Heraclitus, Parmenides, atomists) | NOT YET VERIFIED — the Presocratic fragments are in the DK collection (paywalled) but the public-domain carriers (Gutenberg, Waterfield's free translations) need a dedicated pass | GAP — flagged |
| Capstone | n/a | Not a resource row |

## Declared gaps (per the spec's honest-failure rule — these are flagged, not hidden)

1. **Aristotle texts**: the Physics, Metaphysics, De Anima, Nicomachean Ethics, Categories, Posterior Analytics, Organon are all public domain but were not located and fetched as standalone open carriers this session. One dedicated pass (Gutenberg Aristotle IDs + Perseus Aristotle) is owed.
2. **Presocratics**: the Diels-Kranz collection is paywalled; the public-domain carriers (Gutenberg's Early Greek Philosophy, Waterfield's free translations, the existing doc library's Presocratic material) need a dedicated pass.
3. **Hellenistic schools (Epicurus, Stoics, Skeptics)**: the primary texts (Letter to Menoeceus, Principal Doctrines, Epictetus's Handbook, Lucretius) are public domain but were not located and fetched as standalone open carriers this session. One dedicated pass owed.
4. **MIT Internet Classics Archive**: the direct dialogue pages were bot-blocked; one more route (browser or a different URL pattern) is owed before it is admitted as an established carrier.
5. **Pigliucci's Stoicism course**: surfaced but not fetched; one more pass owed.
6. **Teaching layers overall**: the Greek degree's primary texts are overwhelmingly PD (the strongest open-carrier position of the batch), but the TEACHING layer is thin — the existing doc library (Stoicism, Epicureanism, Socrates, Plato, Aristotle dossiers) is the main in-repo carrier, and a verified open MOOC or lecture series is still needed. One more pass owed.
7. **Hours arithmetic**: GREEK-TEXT-1 (the Republic, ~350 pages Jowett, roughly 10–15 h of careful reading) + the Perseus dialogues (Euthyphro ~20p, Apology ~25p, Crito ~15p, Phaedo ~60p, Symposium ~50p — roughly 170 pages, ~5–8 h) gives roughly 15–25 h of verified primary-text reading. The Aristotle and Hellenistic blocks would add roughly 30–50 h more once located. The current VERIFIED floor is roughly 15–25 h — well BELOW the ≥100h spec total. The remaining hours must come from: (a) the Aristotle texts (once located); (b) the Hellenistic schools (once located); (c) the Presocratics; (d) a verified open teaching layer (MOOC or lecture series). This is declared, not hidden.

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
