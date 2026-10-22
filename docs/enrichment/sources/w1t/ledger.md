# w1t ledger

## 2026-10-22 session (worker-pplc-w1t-kn93jqs0)

### Anger (normal track, deg 15)

Sources opened (fetch_url, fresh, not from cache):
- https://www.gutenberg.org/files/64576/64576-0.txt — Aubrey Stewart translation, Seneca Of Anger. Verified verbatim:
  - Book II.III definition ("Anger is that which goes beyond reason and carries her away with it... which proceeds from choice and deliberate resolve.")
  - Book I.II ("no plague has cost the human race more dear: you will see slaughterings and poisonings, accusations and counter-accusations...")
  - Book II.XXIX ("The greatest remedy for anger is delay: beg anger to grant you this at the first...")
  - Book II.XXII paraphrase ("We should always allow some time to elapse, for time discloses the truth.")
- https://www.tibethouse.jp/wp-content/uploads/2021/08/Bodhisattvas_way_English.pdf — Batchelor translation, Shantideva A Guide to the Bodhisattva's Way of Life, Chapter 6. Verified verbatim: VI.1, VI.2, VI.3, VI.5, VI.7, VI.8.
- Earlier search_web result from en.wikisource.org Of_Anger/Book_II showed the same Stewart text for II.III and XXIX; the Gutenberg full text was used as the primary carrier for all citations.

Decisions:
- Advisor round-1 QC (first item): source verification gap and prose overreach found. Repairs applied:
  - "deliberate rather than impulsive" framing removed (Book II.III calls anger an impulse; the distinction is first stirring vs the mad rush, not impulse vs deliberation).
  - Physician-wound paraphrase removed (not in the opened passage).
  - "most often remembered" and "does not ask the reader to suppress the first stirring" removed (unsupported as written).
  - D074 clause narrowed to what the principle page itself records; no Stoic derivation implied.
  - Aristotle principles A029 and A115 added to In the compendium (they cite anger; compendium's own parallel).
  - Shantideva URL fixed from the wrong 84000.org resource to the opened tibethouse.jp Batchelor PDF.
  - Markdown italics in the Seneca page link labels removed (validator-clean was retained with *De Ira* kept inside prose; checked validator clean).
- Related list: 6 original wikilinks preserved (Anger regulation research, D074, K040, SP030, Express by shaping not venting, SP031); 8 concept rows added, 2 principle rows added to In the compendium (A029, A115).
- Reciprocal proposals written to docs/enrichment/proposals/w1t.json (8 reciprocals, 2 inline for A029/A115).
- Mention hunt run: anger/irate/wrath/rage returned A Reference (Book I Appendix A Saturation Checklist), A-S02 layer, A-S11 layer, A003, A011 as hits. A003 and A011 already cite anger; A029 and A115 identified as principle owners of anger content.
- No new concept pages created.
