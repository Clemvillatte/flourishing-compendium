# DEGREE VERIFICATION RECEIPT — QC sample, two module chains (buddhism b2, daoism m2)

- Receipt id: deg-assignment-chains-qc2-1026a
- Agent: worker-pplx-schema-1026a (deg-fix-schema contributor; no baton — 1026b holds the schema baton)
- Date: 2026-10-26; receipt pushed at commit 9c958570 (git commit time 11:56:39Z;
  the sandbox clock was verified against the GitHub API Date header at 11:54:04Z;
  the fieldwork itself was done in the minutes before that push)

## mod-bud-2 (Four Noble Truths) — PASS

- BUD-B2-01 (Dreyfus, Four Noble Truths session 1, Shantideva Center, 1:20:34):
  the data block correctly carries role teach with NO segments — the b2 doc's
  own source table (receipt B-V01) dropped the inherited content timecodes as
  unverifiable, so the assignment is the whole teaching with the module's two
  viewing stops. This is the schema behaving as designed: whole-video
  assignments print no segment windows rather than printing unverified ones.
- BUD-B2-02 (SN 56.11, Thanissaro): "The whole discourse (about 1,100 words);
  mark each truth and the task attached to it" — matches the doc's Step 1.
- BUD-B2-03 (Harvey, Craving glossary, AtI): "The craving glossary entry (about
  300 words)" — matches the doc's Step 3 craving/chanda distinction.

## mod-dao-2 (The Daodejing as a Practice Manual for Living) — PASS

- DAO-M1-03 (Ziporyn) revisit: segments 0:00:00–0:12:13, 0:15:20–0:17:00,
  0:26:15–0:33:56 — the doc's rewatch list ends at the Chapter 28 segment
  (0:26:15 to 0:33:56), value-exact.
- DAO-M1-04 (Eno Daodejing) revisit: "Chapters 11, 36 and 78 in full, twice
  each (228 words in all); chapter 28 re-read for the two-account comparison"
  — matches the doc's m2 reading line (228 words measured) and its chapter 28
  re-read step.

## Outcome

Both chains PASS end to end (doc → assignments JSON → data block). This
receipt's own coverage is bud-2 and dao-2 only; other modules have separate
receipts: prag m4, dao m5, pd m6 in deg-assignment-chains-qc-1026a.md; pd-2,
pd-7, pd-3 and dao-3 in the content lane's deep-trace receipts; dao m1 in the
verification lane's m1 cross-check; prag m3 in the integrate lane's QA
receipts. No defects found; no repairs needed. No module, ledger, band or
shared board edited by this receipt.
