# w1c source ledger (takeover worker-p1d-8f3a21c4, 2026-10-20)

Takeover of stale w1c (Agent C, silent ~20h per baton status). Predecessor
state: 20/70 done (batches/w1c.json); proposals/w1c.json carries a mixed
legacy schema (state keys + proposals) — MERGED, never replaced.

## The discipline of attention (item 21, 2026-10-20)

- Opened: Simone Weil, "Reflections on the Right Use of School Studies with
  a View to the Love of God" (1942; in Waiting for God), full text PDF
  at The Matheson Trust —
  https://www.themathesontrust.org/papers/christianity/Weil-Reflections.pdf
  (fetch_url raw text; PDF is OCR'd with occasional artifacts: "effons",
  "hean", "js"; quotes were chosen to avoid OCR-mangled words, or use
  fragments that sidestep them).
- Verbatim quotes on the page, checked against the fetched text:
  - "The key to a Christian conception of studies is the realization that
    prayer consists of attention. It is the orientation of all the attention
    of which the soul is capable toward God."
  - "The intelligence can only be led by desire. For there to be desire,
    there must be pleasure and joy in the work."
  - "the greatest of all efforts perhaps, but it is a negative effort" (fragment)
  - "empty, waiting, not seeking anything, but ready to receive in its naked
    truth the object that is to penetrate it" (fragment)
  - "have no need for anything in this world but people capable of giving
    them their attention" (fragment)
  - "a very rare and difficult thing; it is almost a miracle; it is a
    miracle" (fragment)
  - "The love of our neighbor in all its fullness simply means being able to
    say to him: 'What are you going through?'"
- NOT quoted (famous but from a 1942 letter to Joë Bousquet, not the opened
  essay): "Attention is the rarest and purest form of generosity." Left off
  the page rather than cited from an unopened source.
- Preservation: front-matter, all seed citation lines, all Cited-in links
  kept byte-for-byte; "Simone Weil, Waiting for God" seed line kept as the
  opening line; new Sources entry adds the opened full-text URL.
- Principles described from their own files (S129, AT060, AT008, AT015,
  AT027, AT068, S127, SP082 each read; every principle cited is described
  from its own body text).
- Advisor QC round 2: FAIL. Repairs applied:
  1. Remaining equivalence claims removed (AT008, AT068, S127 clauses
     replaced with the advisor's texts; ACT-Eysenck Related line dropped
     "on the same capacity Weil describes").
  2. Related-target definitions verified from the target pages' own texts
     (Flow: absorption in what one does; ACT-Eysenck: anxiety impairs
     goal-directed control; ACT training: noticing distraction and
     returning attention; Two modes: stimulus-driven vs goal-directed;
     Bare attention: Bishop et al. 2004 before interpretation; Empathy:
     felt understanding of another's experience). Clauses rewritten as
     labelled editorial comparisons/contrasts/pairings; no shared
     mechanisms claimed.
  3. Printed-page locators added to every quotation (pupils' muscles p.109;
     desire p.109; negative effort p.110; empty/waiting p.111; sufferer
     fragments p.113; Grail question p.114; key-to-Christian p.105),
     verified against the PDF's running headers and page-number lines.
  4. Craufurd attribution removed from the PDF citation (the reproduction
     does not name its translator; SEP's Craufurd fact kept only on the
     SEP source line); "original citation kept from the seed" audit aside
     removed from the public Sources; italics removed from the French
     terms.
  5. Proposals: one reciprocal per Related line (7 total), advisor-exact
     clauses; Attention proposal no longer claims the cross-reference
     exists (it is pending apply).
  6. Ledger stale statements corrected (1951, SEP-not-opened, 3
     reciprocals, exact-title).
  Round 3: submitted with WIP checkpoint.
- Proposals: 7 reciprocals (one per Related line: Attention, Bare attention
  in mindfulness practice, Empathy, Flow, Attentional control theory
  (Eysenck), Attentional control training, Two modes of attentional
  control) in proposals/w1c.json, merged with the 8 inherited records.
- Advisor QC: round 1 FAIL (first item of the w1c takeover). Blocking
  repairs applied:
  1. Opening naming claim replaced ("the discipline of attention" is the
     compendium's label, not Weil's own phrase — confirmed by SEP, which
     does not use the phrase); duplicate check completed: the general
     [[Attention]] page exists and covers James/Simon/Bousquet — this page
     now cross-references it and states the division of labour.
  2. Unsupported equivalences removed: Flow "same faculty" (now labelled
     comparison, not identity), Two-modes "maps onto receptive mode",
     ACT-training "trainable-faculty claim in laboratory form",
     Bare-attention "Buddhist counterpart" (its page defines it via Bishop
     et al. 2004; now described from its own definition).
  3. "In the compendium" clauses rewritten with a lead-in labelling all
     bullets as editorial comparisons; S129 clause replaced with the
     advisor's text; SP082 "closest practice" removed (its own text's
     "a discipline of attention" quoted instead); AT068 given a
     relationship clause.
  4. Dates verified via SEP (opened): essay 1942; Waiting for God trans.
     Emma Craufurd (SEP bibliography: 1966 [2009] HarperCollins); the
     unverified "1951" book year removed from the page.
  5. SEP also opened for: French terms (en attente, ne rien chercher),
     WFG 57-65 citation, the characterization of attention as an ethical
     orientation. Added to Sources.
  Proposals revised to match (4 reciprocals: Bare attention, Empathy,
  Flow, Attention).
  Round 2: submitted for re-review.

## Limitations

- Weil's "Attention is the rarest and purest form of generosity" (1942
  letter) is widely quoted but was not opened in a citable full text this
  session; excluded. The general [[Attention]] page covers it with a
  wikiquote citation.
- The Matheson PDF reproduction does not name its translator; no translator
  attribution is made on the page for the PDF (SEP verifies the Craufurd
  translation of the book, cited for that fact only). The PDF's printed
  pagination is 105-116, which differs from the WFG 57-65 pagination SEP
  cites for the essay; page locators on this page are the PDF's own.
- The SEP Simone Weil entry was opened this session (dates, French terms,
  Craufurd translation, attention characterization); cited on the page.
