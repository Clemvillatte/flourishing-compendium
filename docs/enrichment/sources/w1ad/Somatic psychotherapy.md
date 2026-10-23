# w1ad evidence ledger — Somatic psychotherapy (2026-10-23, worker-pplx-w1ad-f6d92b31)

Eligibility: graph degree 4 (<15) → fast-track bar per PROTOCOL.md §1a. Seed body was a
one-liner ("body-based processing of emotion (van der Kolk, 2014)").

## Carriers opened (literal-text verification)

- PMC8515382 — Myers, Sarudiansky, Korman & Baslet (2021), Epilepsy & Behavior Reports.
  Opened twice: LLM-extracted quotes, then RAW HTML downloaded via curl and the quoted
  sentences compared against the tag-stripped literal text (method: regex context grep).
  Verified verbatim: (1) "Body-oriented or somatic psychotherapies encompass clinical
  approaches that explicitly focus on body techniques as a means of neurophysiological
  regulation, therapeutic communication and exploration." (section "Body-centered
  psychotherapies"); (2) "development of somatic awareness through sensory (rather than
  cognitive) resources (such as interoception, proprioception, kinesthesis), lead to
  reduction in psychological distress through neurophysiological regulation techniques";
  (3) "These 'bottom-up' approaches may be considered complementary to traditional
  'top-down' modalities"; (4) "Examples of those therapies include structured modalities
  such as sensorimotor psychotherapy, somatic experiencing, acupoint tapping therapies,
  healing/ therapeutic touch therapies" — this last sentence supports the page's naming
  of the two modalities.
- PMC8458738 — Rosendahl, Sattel & Lahmann (2021), Frontiers in Psychiatry 12:709798.
  Same two-step verification. Verified verbatim: (1) "A total of 2,180 references were
  screened, of which 113 studies were scrutinized in detail and 18 RCTs finally included.
  The observed effect size (ES) demonstrated medium effects of BPT on primary outcomes
  psychopathology and psychological distress."; (2) "body psychotherapy (BPT) appears not
  to be a well-established treatment option."; (3) "proposes to define BPT as a treatment
  employing psychological and bodily means equally" (the review's own sentence describing
  Geuter's definition — kept explicitly second-hand on the page).

## Advisor QC (round 1, corrections applied)

1. MISQUOTE FIXED: the premise quote originally read "reduction of psychological distress";
   the source reads "reduction in psychological distress". Repaired.
2. "best-known named modality" ranking removed; the modalities are now stated from the
   verified "Examples of those therapies" sentence.
3. Unsupported glosses removed: "the idea that emotional responses need bodily completion"
   (Completing the cycle) and the Damasio gloss rewritten from the linked page's own
   account; the Completing the cycle gloss now uses that page's own wording (navigation,
   not an outside-fact claim). Interoception gloss reduced to the verified premise
   (interoception listed as a sensory resource).
4. P143 claim grounded: P143's own text read this session; the In-the-compendium line now
   reports what P143 actually does (psychology parallels line + BI009 pairing).
5. Staged contrasts humanised ("not just the place where symptoms show up", "not only
   through talking") — rewritten affirmatively.
6. Section locator added to the definition blockquote (§ Body-centered psychotherapies).

## Page decisions

- Front matter preserved byte-for-byte; original van der Kolk source line and all wikilinks
  kept; Cited-in blocks unchanged.
- Fast-track scope: no saturation hunt; the four Related concepts already exist and were
  checked with enrich_find (Somatic experiencing deg 0 → file exists; Interoception deg 18;
  Completing the cycle deg 4; Somatic marker hypothesis).
- Validator: ok (fast-track profile).
