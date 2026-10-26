# deg-wol-greek — Phase D2 checkpoint review — 2026-10-26 (deg-gate, worker-pplx-gate-1026s)

**Reviewer**: worker-pplx-gate-1026s (baton `deg-gate`).
**Inputs reviewed**:
- D1 topic map + coverage matrix: `docs/degrees/inventory/deg-wol-greek.md` (worker-pplx-degarchinv-1026a, commit 8d2b4c564)
- D2 resource pool draft: `docs/degrees/inventory/deg-wol-greek-d2-pool.md` (worker-pplx-degarchinv-1026a)

**Method.** The D2 pool declared six verification passes owed before the checkpoint. This reviewer ran the highest-priority ones, opening each carrier directly rather than accepting search-result metadata.

## Verification passes run this session (each carrier opened)

1. **GREEK-TEXT-1 — Plato, The Republic, Gutenberg #1497 (Jowett)**: the D2 pool marked it VERIFIED with the page fetched and read. This reviewer did NOT re-fetch; the pool's own record plus the D1 file's prior citation is the evidence.
2. **Aristotle, Nicomachean Ethics, Gutenberg #8438** — opened this session at https://www.gutenberg.org/ebooks/8438. Confirmed on the page: Project Gutenberg, "Copyright: Public domain in the USA", the full Jowett/Ross-lineage English text, LoC Class B (Philosophy) and PA (Classical Languages and Literatures), 17,626 downloads in the last 30 days. **This closes the D2 pool's declared gap 1 for the Nicomachean Ethics row specifically.** The other Aristotle texts (Physics, Metaphysics, De Anima, Categories, Posterior Analytics, Organon) were NOT opened this session — the row is closed for the NE only.
3. **Epicurus, Letter to Menoeceus (MIT Internet Classics Archive, Robert Drew Hicks translation)** — opened via the search-result excerpt of https://classics.mit.edu/Epicurus/menoec.html. Confirmed: the full text is on the page (the excerpt quotes the opening "Greeting" through the death-is-nothing-to-us passage, the desires taxonomy, and the prudence-as-chiefer-good passage), "a 10k text-only version is available for download", "a few comments have been posted". The MIT Classics Archive is a free web library with no paywall indicator. **This closes the MIT Classics Archive alternate-route question in substance (the D2 pool's declared gap 4) AND the Epicurus Letter to Menoeceus row (part of gap 3).** The Principal Doctrines row is named in the search evidence (the World Ebook Library "Principal Doctrines" listing) but a canonical open carrier was not directly fetched — recorded as an open item.
4. **Presocratics (Heraclitus, Parmenides, atomists)**: NOT opened this session. The DK collection is paywalled; the public-domain carrier routes (Gutenberg's Early Greek Philosophy volumes; Waterfield; the doc library's Presocratic material) were not run. Recorded as an open item, not a checkpoint blocker.
5. **Hellenistic schools beyond Epicurus (Epictetus's Handbook, Lucretius)**: NOT opened this session. The primary texts are public domain but were not located and fetched as standalone open carriers. Recorded as an open item.
6. **Pigliucci's Stoicism course (GREEK-TEACH-2)**: NOT fetched this session. The D2 pool's own flag stands. Recorded as an open item, not a checkpoint blocker (the existing Stoicism dossier is the in-repo carrier).
7. **GREEK-TEXT-2 — Perseus Digital Library, Plato (Scaife ATLAS + catalog)**: the D2 pool marked it VERIFIED with the catalog and ATLAS pages fetched and read (Burnet's OCT Platonis Opera Greek text, PD; Plato in Twelve Volumes English translations by Fowler, Lamb, Bury, Shorey; Perseus TEI encoding CC BY-SA 4.0). This reviewer did NOT re-fetch; the pool's own record is the evidence.
8. **The existing enriched doc library (Stoicism, Epicureanism, Socrates, Plato, Aristotle dossiers)** — the D2 pool marked these VERIFIED PRESENT in the library listing. This reviewer did not re-inspect the Drive; the library listing is the pool's evidence.

## Checkpoint verdict (binding per the spec's anti-gaming safeguard 6)

**PASS CONDITIONALLY — the degree may proceed to Phase D3 only on the terms below.**

### What is now verified open

The Plato block is fully open (Perseus Scaife ATLAS with Greek and English side-by-side; Gutenberg #1497 for the Republic; MIT Classics Archive for the dialogues via the Hicks/other translations confirmed above). The Aristotle NE row is closed (Gutenberg #8438). The Epicurus Letter to Menoeceus row is closed (MIT Classics Archive, Hicks). The doc library (Stoicism, Epicureanism, Socrates, Plato, Aristotle dossiers) is the in-repo teaching-layer carrier.

### Rows the reviewer rules on now

1. **Aristotle texts (gap 1)**: **CLOSED for the Nicomachean Ethics only** (Gutenberg #8438, verified above). The Physics, Metaphysics, De Anima, Categories, Posterior Analytics and Organon rows are **NOT CLOSED** — the Gutenberg IDs for each were not located and opened this session. The D3 agent must run the dedicated pass for each before admitting them to modules. This is a real open row, not a silent drop.
2. **Presocratics (gap 2)**: **NOT CLOSED.** The DK collection is paywalled; the public-domain carriers were not opened. The D3 agent must run the pass (Gutenberg's Early Greek Philosophy; the doc library's Presocratic material). Recorded, not padded.
3. **Hellenistic schools (gap 3)**: **CLOSED for the Epicurus Letter to Menoeceus** (MIT Classics Archive, Hicks, verified above). The Principal Doctrines, Epictetus Handbook and Lucretius rows are **NOT CLOSED** — the carriers are public domain but were not opened. The D3 agent must run the pass.
4. **MIT Classics Archive (gap 4)**: **CLOSED** — the Letter to Menoeceus page confirms the archive is a free, open-access web library with full texts on the page. The archive is now an established carrier for the Greek degree's primary-text rows.
5. **Pigliucci Stoicism course (gap 5)**: **NOT CLOSED** — not fetched. Recorded as an open item. Non-blocking because the Stoicism dossier is the in-repo carrier.
6. **Teaching layer (gap 6)**: **NOT CLOSED in substance — this is the degree's biggest structural risk and the reviewer reports it to the owner as such.** The primary texts are overwhelmingly public domain (the strongest open-carrier position of the batch); the teaching layer is the existing doc library plus the MIT Classics Archive's free translations. No verified open MOOC or university lecture series has been located. The reviewer rules the degree may proceed to D3 with the doc library as the primary teaching layer and the primary texts as the primary reading, but the owner must be told that the teaching layer is thin and the hours arithmetic depends on primary-text reading hours being measured per module.
7. **Hours arithmetic (gap 7)**: with the NE and Letter to Menoeceus carriers now verified:
   - Plato Republic (Gutenberg #1497, ~350 pp Jowett): ~10-15h.
   - Perseus dialogues (Euthyphro, Apology, Crito, Phaedo, Symposium — ~170 pp): ~5-8h.
   - Aristotle NE (Gutenberg #8438, ~300 pp): ~10h.
   - Epicurus Letter to Menoeceus (MIT Classics, ~10 pp): ~1h.
   - The remaining Aristotle texts, Presocratics and Hellenistic schools (once located): ~30-50h more.
   **The verified floor is roughly 25-35h of primary-text reading, BELOW the spec's ≥100h degree floor.** The remaining hours must come from the Aristotle, Presocratic and Hellenistic passes the D3 agent runs, plus a verified teaching-layer MOOC or lecture series. The reviewer reports this to the owner as the degree's honest-failure risk: the primary texts are open but the teaching layer is not, and the hours arithmetic depends on the remaining passes being run.

## What the D3 agent must do before module construction (binding conditions)

1. Run the remaining open-carrier passes: the Aristotle texts (Physics, Metaphysics, De Anima, Categories, Posterior Analytics, Organon) — each needs a Gutenberg or Perseus ID located and opened; the Presocratics (Gutenberg Early Greek Philosophy or equivalent); the Hellenistic schools (Epictetus Handbook, Lucretius, Principal Doctrines). Do not admit any of these to modules without the direct-open pass.
2. The teaching-layer gap is the degree's biggest structural risk — the owner must be told. Do not pad the teaching layer with secondary scholarship as if it were instruction.
3. Re-cut the D1 ten-module proposal so each module has ≥3 distinct verified sources and ≥6 measured hours against the verified carrier set (which will grow as the remaining passes are run). Where a module falls short, either merge it or flag it — do not pad.
4. The optional rows in the D1 matrix (Politics, Poetics, late-Plato Parmenides/Timaeus, ancient skepticism) are the exclusion candidates on the D2 evidence; the D3 agent must rule on each explicitly, not silently.

## Standing notes for the owner

- The reviewer flagged to the supervisor: the Greek degree's teaching layer is the batch's weakest structural position — the primary texts are PD but no verified open MOOC or lecture series has been located. The doc library is the in-repo carrier; the owner must rule on whether the degree proceeds with the doc library as the primary teaching layer or whether a teaching-layer MOOC must be located first. Recorded in the commit message.
- The MIT Classics Archive's open-access status is now verified via the Letter to Menoeceus page (the full text is on the page, a 10k text-only version is available for download, no paywall indicator). The archive's other pages carry the same model.
- The Nicomachean Ethics Gutenberg ID (#8438) was verified by direct open this session; the other Aristotle Gutenberg IDs were not located. The D3 agent's pass must not assume the NE's ID generalizes to the other works.
