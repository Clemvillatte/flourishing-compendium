# p1zv source ledger

Band: p1zv (Stoic principles S039–S126, ranks 1172–1201). Worker: worker-p1zv-c139f997.

## S039 — Be a good family member (Principle 161)

**Sources opened and raw-verified:**

1. Marcus Aurelius, Meditations, George Long translation, Project Gutenberg #15877 — https://www.gutenberg.org/cache/epub/15877/pg15877.txt — raw text downloaded to qc/med-long.txt (fetch_url crawler blocked; curl used).
   - "From my brother Severus, to love my kin, and to love truth, and to love justice" — Book I. In the raw text the span appears as "From my brother[A] Severus, ..."; the editor's bracketed footnote markers ([A], [C]) are stripped from the quoted span on the page, per standard convention. FULL MATCH with markers.
   - "From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts" — Book I. Raw text has "From my mother,[C] piety...". FULL MATCH with markers.
   - Note: Long's Book I section numbering differs from standard editions, so quotes are located as "Book I, George Long translation" without section numbers.
2. Musonius Rufus, Lecture XIV, "Is marriage a handicap for the pursuit of philosophy?", Cora Lutz translation, TheStoicLife.org — https://sites.google.com/site/thestoiclife/the_teachers/musonius-rufus/lectures/14 — raw HTML downloaded to qc/musonius14.html.
   - "Again when someone said that marriage and living with a wife seemed to him a handicap to the pursuit of philosophy, Musonius said that it was no handicap to Pythagoras, nor to Socrates, nor to Crates, each of whom lived with a wife, and one could not mention better philosophers than these." — FULL MATCH in raw HTML.
   - "marriage, if anything, is manifestly in accord with nature" — inline fragment, FULL MATCH in raw HTML.

**Validator:** ok (first run FAILED: the mother quote as an inline fragment triggered the "not only ... but" staging-pattern check; moved to a standalone blockquote, which the validator exempts).

**Proposals:** 1 reciprocal — Oikeiosis (page read; does not cite S039).

**Verification note:** both Musonius quotes and both Marcus spans verified against raw files in qc/ (med-long.txt, musonius14.html) with whitespace-normalized matching.
