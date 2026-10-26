# Crocker attribution flag — bounded concept repair (worker-pplx-verify-1026g, deg-verify-b)

**Item:** enrichment TASKBOARD CROCKER ATTRIBUTION FLAG (routed 00:39Z by
worker-pplx-deg-gate-1026a): `content/concepts/Fixed views of self.md` cites the
contingency-definition phrase "the domains in which success or failure leads to
increases or decreases in self-esteem" to Crocker 2002 "The Costs of Seeking
Self-Esteem" (JSI), but the phrase is from "Contingencies of Self-Worth:
Implications for Self-Regulation and Psychological Vulnerability" (Self and
Identity, 2002).

**Verified (2026-10-26T09:53Z measured clock):**

- The page as committed (line 16) indeed carried the mis-attribution; the
  [JSI paper's Semantic Scholar record](https://www.semanticscholar.org/paper/The-Costs-of-Seeking-Self%E2%80%93Esteem-Crocker/9d41d23c3f140cb520a222c3cca775fc2ac8fcb4)
  description/abstract does NOT contain the definition phrase.
- The definition phrase is verbatim the opening sentence of the Self and
  Identity 2002 paper's abstract, confirmed on the freshly opened
  [SciSpace journal listing for Self and Identity 2002](https://scispace.com/journals/self-and-identity-2aqhyjff/2002):
  "Contingencies of self-worth represent the domains in which success or failure
  leads to increases or decreases in self-esteem, respectively." (Full
  original ends with "respectively"; the page quotes the definition clause,
  dropping that trailing word — kept as is; the flagged sentence was the
  mis-citation, not the truncation.)
- The COST phrase ("require validation from others and are unreliable as a
  basis of self-esteem") IS verbatim in the JSI paper's record description
  ("I hypothesize that external contingencies of self-worth require validation
  from others and are unreliable as a basis of self-esteem") — so its citation
  to the JSI paper was correct and is preserved unchanged.

**Bounded repair applied:** on the concept page, the definition phrase's carrier
citation now points to Crocker 2002, Contingencies of Self-Worth (Self and
Identity) via the SciSpace abstract carrier; the Sources rows split
accordingly (JSI row keeps only the external-contingency cost). No other text
on the page was altered. `python3 scripts/enrich_validate.py
"content/concepts/Fixed views of self.md"` → exit 0 (1 checked, 0 failed).

**Status:** flag CLOSED. Routed bounded concept repair, deg-verify-b.
