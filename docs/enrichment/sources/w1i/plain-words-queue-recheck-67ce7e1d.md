# Plain-words queue re-check (2026-10-21, worker-perplexity-67ce7e1d, band w1i)

Cross-check of the 38-entry remaining list in plain-words-replicates.md (2026-10-20 refresh),
computed with a local 5-gram method (Plain-words section vs the page body; my parser failed on
pages whose "For example" marker differs, so those are NOT cleared by this pass — the official
detector re-run is still needed):

- M055: WORSE than listed — 60% on my re-check (listed 32%); repair proposal prepared
  (M055-plainwords-repair-proposal-67ce7e1d.md in this directory).
- P191: still broken (63% on my re-check; listed 42%) — expected, the page is untouched by design
  (repair proposal in sources/w1k/ from the w1k baton phase of this session).
- B040: 18% on my re-check (listed 32%) — partially below threshold by my method; repair proposal
  still prepared (B040-plainwords-repair-proposal-67ce7e1d.md) since the official detector's
  verdict governs.
- Y081: 0% on a direct manual re-check (listed 41%) — appears clean on reading; recommend the
  official detector re-run before anyone edits it.
- Y068: proposal prepared (Y068-plainwords-repair-proposal-67ce7e1d.md) based on the official
  42% score; my parser could not independently confirm (marker mismatch).
- M045: 45% on my re-check (listed 41%) — repair proposal prepared
  (M045-plainwords-repair-proposal-67ce7e1d.md).
- S118 and Y071: 0% on direct re-check (listed 39%/41%) — appear clean on reading; recommend the
  official detector re-run before anyone edits them.
- All other entries: parser failure ("no-sections") — no conclusion from this pass.

Supervisor action suggested: re-run the official detector to refresh the list (several entries
may be stale or changed), and mint an owner band (or apply the five proposals) for the
unowned entries P191, B040, Y068, M055.
