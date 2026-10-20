# p1zo QC record — worker-p1zo-3c8da4f1

## Milestone QC (items 17-21 of the manifest; takeover items 1-5): scoped PASS

Items: SO062, SO070, SO071, SO074, SP003 (2026-10-20).

- Round 1 (advisor): SO062 scoped prose pass (one blocking citation defect: a
  silently-failed blockquote-citation replacement, caught and fixed with an
  asserted anchor); SO070/SO071/SO074/SP003 FAIL (association-vs-intervention
  conflations, measure distinctions, construct conflations, unverified
  prescriptions, one invented scholium fragment in SP003's Sources line).
- Repairs: advisor-supplied wording applied to all four; raw/unprompted
  re-verification of quotes (ANU record for Berry, Lancet full text for
  Hickman, PMC for Holt-Lunstad, ERIC API for Benet-Martínez, Crossref for
  Saad/Chen/Kawachi bibliographic fields); the SP003 Sources fabrication
  removed and replaced with the verified Note I sentence.
- Round 2 (advisor): prose PASS for all five rewritten passages; blocking
  record corrections (fabricated ledger bullet in SP003, historical labels in
  SO070/SO074 ledgers, Chen pages 43-51 -> 1-11 per Crossref, Saad title
  without the unestablished subtitle) applied, validated, pushed.
- Scoped PASS = the reviewed rewritten material only; inherited parallels and
  Practice sections were NOT independently verified.
- Lesson recorded: asserted anchors on every replacement (one silent no-match
  escaped a non-asserted replace and was caught only by advisor QC); ledger
  bullets describing removed text must be rewritten, not just appended to.

## Milestone QC (takeover items 6-10): scoped PASS

Items: SP004, SP006, SP008, SP009, SP011 (2026-10-21).

- Round 1 (advisor): four blockquotes matched the primary text; SP006 blockquote
  had two inserted "the"s; recurring issue was "the compendium's application"
  sentences asserting psychological effects (pain living in the story, mood
  speedometers, arguments quieting down) rather than suggested exercises.
- Repairs applied sequentially with asserted anchors; SP006 quote corrected to
  the exact fragment; SP004 ledger history corrected (inherited paraphrase,
  not a verbatim misquote); SP011 body now cites the IV Preface power-of-action
  passage verbatim; all measuring/effect claims replaced with the advisor's
  exercise framings.
- Round 2 (advisor): scoped PASS for the reviewed rewritten material in all
  five items; closeout corrections applied (SP008 dangling opening fixed;
  SP004/SP008 ledger descriptions brought up to date; explicit-baseline
  validation vs fc8c8bb6b clean: 5 checked, 0 failed).
- Scope: reviewed rewritten material only; inherited parallels and Practice
  sections not independently verified.
- Lesson recorded: two ledger replacements silently skipped for mismatched
  anchors in the closeout round (caught by re-reading the files before
  pushing); every ledger edit now gets an asserted anchor like file edits.

## Milestone QC (takeover items 11-14, final): round 1 FAIL -> repairs applied

Items: SP015, SP023, SP024, SP041 (2026-10-21).

- Round 1 (advisor): FAIL for all four — SP015 opening duplicated the
  blockquote and the plain words made a prediction the proposition does not
  support; SP023's blockquote locator was wrong (the "despised by all men"
  passage sits in the Explanation to Definition XXVIII, Pride, not XXVI,
  Humility — verified by re-reading the uninterrupted XXV-XXIX block) and the
  plain words misread humility as an inaccurate self-estimate; SP024's
  blockquote was truncated mid-sentence and the body slid from same-object
  vacillation to general mood oscillation; SP041 attributed a "keep work with
  no audience" remedy to Spinoza and asserted a "most dangerous" ranking the
  text's "still more absorbed" comparison does not establish.
- Repairs applied sequentially through the state machine (reopen -> repair ->
  validate -> done), each edit with asserted anchors; two overreaching
  reciprocal records withdrawn (Emotional contagion for SP015, Self-efficacy
  for SP023); reader-facing Sources entries made bibliographic (the
  removed-draft accounts stay in the ledgers); band_done NOT set manually —
  the state machine's `finish` command is the authorized writer.
- Baseline validation vs fc8c8bb6b: 4 checked, 0 failed; content, ledger and
  proposal diffs inspected. Round 2 submission pending.
- Round 2 (advisor): SP015 scoped PASS; SP023/SP024/SP041 FAIL — the body
  application and the plain words repeated essentially the same exercise
  wording (the no-replicates requirement), plus SP023's body near-duplicated
  its blockquote, SP024's plain-words first sentence lacked an immediate
  citation, SP041's citation did not immediately follow its first body
  sentence, and two ledger records still carried stale XXVI references or
  the truncated quotation. Full content/ledger/proposal diffs against
  fc8c8bb6b were inspected this round (the round-1 record's --stat check
  overstated what had been inspected; corrected here).
- Round 2 repairs: plain words re-derived as concrete distinct exercises in
  all three items (two-column know/assume list; two-sentence want/avoid
  completion; nobody-watching question); SP023's near-duplicate body sentence
  removed; citations placed immediately after their sentences; SP023/SP024
  ledger records corrected (XXVIII references; complete blockquote entry);
  SP041's inherited "most dangerous" title flagged for supervisor disposition.
  Baseline validation re-run: 4 checked, 0 failed. Round 3 submission pending.
- Inspection-history correction: the round-2 record said the full diffs were
  inspected, but the commands used were --stat and grep-filtered; the round-3
  record corrects this — the complete 363-line diff of all four content
  files, all four ledgers and the proposals file against fc8c8bb6b was
  captured to /tmp/p1zo-final-review.diff and read in full this round.
  Preservation verified: front-matter, parallels sections and principle
  headers unchanged in all four files; only body/plain-words/example/locator
  lines and the new Sources sections changed; the two withdrawn reciprocal
  records correctly absent from the proposals diff.
- Round 3 (advisor): SP015 and SP024 scoped PASS; SP023 needed two targeted
  deletions (uncited bridge sentence; categorical "neither feeling tells you
  what you can actually do" claim); SP041 needed the TIE citation after its
  second body sentence. All applied through the state machine; SP024 ledger
  duplicate passage entry consolidated; baseline validation re-run clean.
  Round 4 (narrow verification) submission pending.
