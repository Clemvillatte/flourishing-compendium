# Kernel origin display correction

## Owner instruction

The legacy large red footer callout was rejected. Put a small, integrated
origin mention directly above the opening quote area. A practice tradition
is not necessarily a therapy; do not invent a classification for every card.

## Evidence opened

- [MN 22, Thanissaro translation, Access to Insight](https://www.accesstoinsight.org/tipitaka/mn/mn.022.than.html):
  opened 2026-10-25. The raft simile grounds K136's Buddhist inspiration.
  The existing kernel explicitly identifies the scheduled exercise as
  an editorial adaptation, not an empirically tested Buddhist protocol.
  The label reads "Buddhist-inspired practice", not a therapy name or
  an assertion that the modern exercise is canonical.
- [Epictetus, Enchiridion 1, Elizabeth Carter translation](https://classics.mit.edu/Epictetus/epicench.html):
  freshly opened 2026-10-25. The control distinction is the documented
  source of K311's sorting test. Label corrected from CBT to
  "Stoic-inspired practice"; the editorial action step is not called ancient.

## Advisor source/context audit

All 81 initial candidate labels were reviewed against their kernels'
protocols, evidence limitations and citations. Fifteen inherited labels
required removal or qualification. Final metadata: 72 labelled kernels,
244 unlabelled kernels. Navigation groupings remain unchanged.

- Remove unresolved or unsupported affiliations: K200, K315, K357, K368,
  K385, K386, K387, K396, K397.
- Use the specifically documented tradition: K311 and K320
  Stoic-inspired; K374 trauma-informed; K398 and K415 mindfulness.
- K388 retains ACT alone, not the extra CBT taxonomy.
- The other 66 initial candidates showed no material wrong-origin finding
  in the source/context audit. That is not exhaustive external verification
  of every historical lineage.

## Rendering and preservation

Origin metadata is one `Practice: **...**` line before the opening quote.
Both Library and Randomiser use the same Markdown renderer.
Colour remains the owner's previously specified #E34234, as quiet 12px
text with no box, background, border or bold weight.
No protocol, evidence caveat, source, card link or navigation grouping
is changed by this migration. Unclassified practices receive no label.

## Release verification

- Seven origin regression tests and nine Randomiser tests pass.
- Full Python suite passes: 76 tests, including four new storage-adapter
  regressions for native storage, restricted access, existing readable saves
  in full storage, and later quota failure reaching caller error handling.
- Desktop and 375px browser checks confirm K136's 12px, unboxed origin
  immediately precedes the opening blockquote. K123 displays DBT; K200
  displays no unsupported classification.
- Draw, save, history navigation, Graph controls, Academy and Dossiers
  were exercised. Meaning & Mortality's supplied image was decoded
  and visually checked at 1200x914 before thumbnail display.
- A cross-view card route left the Library hidden under academy-mode;
  using the patched global dispatcher repairs that path.
- Save/reload exposed an inherited hardwired memory-only FC_LS adapter.
  Restored normal browser storage with the existing safe memory fallback.
  Browser verification now keeps a saved count of one after reload.
- Hosted preview deployment is blocked by the existing app's storage
  APIs. No production persistence is stripped to bypass that restriction.
  GitHub Pages was opened: the origin line and published third dispute
  were observed; the latest image/routing/persistence build is checked
  against the release workflow rather than assumed from a pushed commit.
