# Supervisor review log (dossiers)

Written by the supervisor-role manager, 2026-10-25. Read this before you call a dossier worker-complete. A dossier is published only when it clears this log. Verdicts are about the prose a reader meets, not about whether links resolve.

## How to self-check before asking for review

1. `python3 scripts/dossier_check.py <file>` passes.
2. `python3 scripts/dossier_density.py <file>`: no paragraph with five or more card links, and none with four in under 120 words. The owner rejected a passage that stacked positions; a paragraph that names five theories is a catalogue, however well it is written. Split it into two movements, or choose the two positions that carry the argument and leave the rest to the Practice and Story sections or to the card itself.
3. `python3 scripts/dossier_quote_verify.py <file>` and open by hand whatever it cannot fetch.
4. Read the main body aloud. Mark every place where a term appears before it is introduced and every paragraph that does not answer the question the previous one raised.
5. The model is in `genuine-flourishing.md`, `wisdom.md` and `lifes-purpose.md`. A main body made of one `## The map: ...` section with one paragraph per card is the old format, however many `###` subsections it has. Dissolve it: subsection headings are questions; each paragraph advances an argument; cards are cited as the argument needs them.

## Verdicts so far

| Dossier | Verdict | What to fix |
| --- | --- | --- |
| wisdom, lifes-purpose | Published (supervisor wrote them) | none |
| genuine-flourishing | Exemplar | none |
| affect (dos2) | Thread format, not yet publishable | Nine dense paragraphs (lines 39, 41, 51, 55, 63, 69, 75, 77, 79). The structure section names about ten theories in two paragraphs. Pick the two or three positions the argument needs, give each its own paragraph, and move the rest into the Practice section as links or drop them. |
| goals (dos13) | Thread format, not yet publishable | Six dense paragraphs (lines 29, 31, 35, 37, 49, 51); line 37 has eight card links in 127 words. Same remedy. |
| creativity (dos32) | Good structure, one open item | The Haught-Tromp carrier is unopened: open it or remove every claim that depends on it. Then run the density check. |
| creation (dos31), procrastination (dos33) | Worker-fixed 2026-10-25 | procrastination (dos33) GF-model conversion complete by worker-pplx-dos24-1025a (map header dissolved, all glosses to connected prose, 0 dense, checker exit 0). creation (dos31) GF-model conversion complete by worker-pplx-dos31-1025f (supervisor review PASS, OPERATIONS QC entry 5 addendum 11). Both PUBLISHED 2026-10-25 by assistant-supervisor-1025e (d45551cbc) with art assigned. |
| right-livelihood (dos22), creativity (dos32) | Published 2026-10-25 | Both passed supervisor review earlier (QC entry 3; addendum 8); art assigned by the curation pass (supervisor-approved); checker, density, quote checks green; flipped and published in d45551cbc by assistant-supervisor-1025e. Both remain below the 3-5 disagreement bar (repair items). |
| others, body, uncertainty and the rest of the published map-format set | Worker-fixed 2026-10-25 | others (dos16), uncertainty (dos11), overload-overwhelm (dos12), decision-making (dos9), happiness (dos7), anxiety (dos8), agency (dos14) GF-model conversions complete by worker-pplx-dos24-1025a. Also right-mindfulness (dos24), gratitude (dos26), right-effort (dos23) done earlier this session. All: map header dissolved, all glosses to connected prose, 0 dense, checker exit 0. Remaining old-map dossiers: anger, freedom, meaning-and-mortality, the-self (not in DOS bands, supervisor/dossiers band). frustration (dos30) held by another worker. body already GF-model. right-concentration (dos25) already GF-model. |

Supervisor will update this table as batches arrive. A worker who fixes a row should say so in the ledger and in the commit message; the supervisor then re-reads the dossier and, if it clears, flips it to published.
