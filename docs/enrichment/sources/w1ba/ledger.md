# w1ba band ledger (hand-minted 2026-10-22 by supervisor-pplc-bb0dbf40; worker same session)

## 2026-10-22 worker-w1ba-pplc-bb0dbf40

1. **Midlevel terms** — The pending "second rendering" verification of the Twohig & Levin
   quote: BOTH direct fetches of the source were blocked this session (USU DigitalCommons
   PDF and the core.ac.uk accepted-manuscript PDF both served Cloudflare challenge HTML),
   so the passage could NOT be re-verified from a directly opened copy this session.
   Access history, honestly recorded: the USU PDF was opened by the predecessor worker
   (their ledger); the core.ac.uk accepted-manuscript full text was retrieved this session
   via the search engine's indexed rendering of that PDF, which shows the quoted passage
   verbatim ("In ACT we call these midlevel terms... will lack the specificity of the
   actual principle."). The page quote matches that indexed rendering exactly. New opened
   source this session: Bordieri 2021 (Behavior Analysis in Practice 15(1), doi
   10.1007/s40617-021-00575-7, PMC 8854448), fetched directly; its "broad scope / lack
   of precision" sentence is quoted verbatim; SINGLE author (Michael J Bordieri) — an
   earlier draft of this session's edit said "Bordieri et al." and was corrected on the
   advisor's catch. Repairs applied per advisor QC: audit commentary about verification
   removed from prose; the "not from the PBT book" negative claim and the "shared
   handles basic science does not yet supply" gloss removed as unsupported; prose
   expanded past the 150-word minimum on the normal track. Validate ok.
2. **Variation-selection-retention** — VRSCDL quote already verified verbatim by the
   2026-10-21 verify-pbt1 pass against the public Scribd full-text copy (their ledger;
   Scribd 403s for this session, so no fresh open — quote left as verified by that
   opened-carrier record). Body expanded past the 150-word normal-track bar by unpacking
   the acronym's own letters as a clinical checklist (interpretive prose, no new factual
   claims). Sources row corrected per verify-pbt1's routed finding: the quote carrier is
   the book text (Scribd full-text copy, verified by that pass), not the publisher's
   page, which carries bibliographic data only. Validate ok.
3. **Context sensitivity** — Ch 7 definition quote already verified verbatim by the
   verify-pbt1 pass (opened Scribd carrier; their ledger). Body expanded past 150 at the
   normal-track bar using the verified Ch 3 EEMM classification quote (carried on the
   EEMM page's own record, supervisor-verified per verify-pbt1's note) plus interpretive
   prose (the "not insight for its own sake" paragraph is gloss, no new factual claims).
   Sources row re-pointed to the actual quote carrier per verify-pbt1's routed finding.
   Validate ok.
4. **Mediators of change** — Baron & Kenny quote verified by verify-pbt1 (verbatim in the
   book's rendering AND independently vs the original 1986 paper, p. 1173). Expanded the
   body past 150 at the normal-track bar: added the 1986 paper's own intro sentence
   (verbatim, per the same verification record) with natural attribution, the EEMM
   location-of-mediators tie-in (grounded in the verified Ch 3 classification quote), and
   a clinical-reading paragraph (gloss, no new factual claims). Removed the pending-note
   parenthetical from prose (the book's mediation discussion beyond the verified quotes
   remains unopened by this session — scope honestly recorded here: the body now rests
   only on the two verified quotes and the EEMM classification quote). Sources row
   re-pointed to the actual carrier; Baron & Kenny 1986 added as the original source.
   Validate ok.
   REPAIR (same item): the first done marker was pushed with a validator FAIL
   (4 em-dashes in prose, max 3 — the humanizer's dash budget). Dashes reduced to 3
   by rewording two sentences; revalidated ok. The earlier commit message's "validate
   ok" was wrong at the time it was written; this entry records the true sequence.
5. **Tinbergen's four questions** — book quote already verified by verify-pbt1 (Scribd
   carrier; their ledger). Body expanded past 150 at the normal-track bar with NEWLY
   OPENED grounding: Taborsky 2014 (Ethology tribute paper, PDF fetched and read this
   session) quoting Tinbergen 1963 p. 411 verbatim ("equal attention to each of them and
   to their integration") and the Huxley three-problems lineage; the p. 411 quote and
   the lineage are used as quoted in Taborsky's opened text. Final paragraph is gloss
   (the clinical narrowness reading), no new factual claims. Sources rows re-pointed to
   the actual carriers; Tinbergen 1963 + Taborsky 2014 added. Validate ok.

## Band close (2026-10-22, worker-w1ba-pplc-bb0dbf40)
All 5 items done at the normal-track bar (each past 150 prose words, validator ok,
sources opened or carried by verified records, Sources rows re-pointed to actual quote
carriers per the verify-pbt1 finding). Band finished; baton released. No items flagged.
Note: this band was hand-minted by the same session's supervisor pass per the 13:55Z
supervisor note (worker idle); enrichment happened under the worker baton per protocol.

## 2026-10-22 repair pass (advisor milestone QC, worker-w1ba-pplc-bb0dbf40)
All 5 items repaired per advisor review:
- VSR: the "a moment, a week, a life" reading of Dimension/Level was WRONG (dimensions
  are the six psychological dimensions; levels are biophysiological/sociocultural, per
  the verified EEMM quote) — replaced with the grid reading; "lever a clinician can
  actually pull" softened to "one thing to examine"; Sources row audit commentary removed.
- Context sensitivity: "noticing context is the precondition of changing behaviour"
  removed (stronger than the definition establishes); the stuck-pattern sentence now
  reads "on this grid"; Sources rows de-audited.
- Mediators of change: the original 1986 Baron & Kenny paper was OPENED this pass
  (psy.miami.edu full-text PDF, fetched and read): both the "generative mechanism"
  sentence and the "mediators speak to how or why such effects occur" / "moderator
  variables specify when certain effects will hold" sentences verified verbatim; the
  second sentence pair added with attribution. The "localizes the failure to a process"
  overclaim replaced with a question framing. Sources rows de-audited; opened PDF cited.
- Tinbergen: Taborsky citation corrected — Crossref lookup: Ethology 120(3), 224-227,
  2014 (my "Ethology 121" was wrong; author Michael Taborsky). "Read clinically" now
  marks the gloss as a reading. Sources rows de-audited.
- Midlevel terms: Sources row de-audited.
- Validation gate fixed: repairs validated via checked exit code (subprocess returncode),
  not a piped tail that can mask failures.
