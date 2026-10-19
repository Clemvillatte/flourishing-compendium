# Advisor QC: AT006 predecessor recovery (read-only), 2026-10-20

Inputs: `predecessor-recovery/handoff-out/AT006-page.md`, `AT006-ledger.md`, `unpushed-AT006.patch`.
Baseline: repo file `flourishing-compendium/content/principles/AT006 — Recognise that attention is trainable — it can be cultivated.md` (blob 8b540331, which is the patch's pre-image; repo HEAD ddd99051).
Source opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC8011594/ (full author manuscript: Abstract to References).

Nothing in the repo, batch files or batons was edited. Patch checks were run only in a scratch copy at /tmp/qc-at006.

## Verdict: FIX. The page can be recovered once the corrections below are made.

All quotes match the article word for word, and no quotes were invented. The blocking problem is the author attribution. There are also four smaller accuracy and scope fixes, and the ledger needs correcting. The protected sections are intact.

## 1. Attribution (blocking)
- The article is **Prakash RS, Fountain-Zaragoza S, Kramer AF, Samimy S, Wegman J (2020). "Mindfulness and Attention: Current State-of-Affairs and Future Considerations." J Cogn Enhanc 4(3):340–367. doi:10.1007/s41465-019-00144-5. PMID 33817547.** Kramer is the third author. "Kramer et al." / "Kramer and colleagues" is wrong in three places: the body sentence, the link text, and the psychology-parallel line.
- The ledger says "search metadata (2018)". The PMC record gives 2020 (published online 23 Jan 2020). Drop the 2018 note and cite the year 2020.

## 2. Quote-by-quote check (all against PMC8011594)
| Page quote | Match | Location in article |
|---|---|---|
| "longitudinal studies of changes in components of attention following mindfulness training" | exact | Abstract, sentence 1 |
| 57 studies; alerting / orienting / executive attention (conflict monitoring) | faithful paraphrase. The article says 57 "retreat studies, non-randomized trials, and randomized controlled trials were identified" | Abstract |
| "Although many non-randomized and retreat studies provide promising evidence of gains in both alerting and conflict monitoring following mindfulness training, evidence from randomized controlled trials, especially those involving active control comparison groups, is more mixed" | exact | Abstract |
| "a promising tool for enhancing cognitive vitality with some methodologically rigorous studies providing support for its impact on select components of attention. However, there is also evidence that refutes such claims." | exact. The source sentence begins "Mindfulness meditation continues to be ..." | Summary and Final Thoughts |
| "inclusion of active comparison groups and explicit attention to the reduction of demand characteristics ... to disentangle the effects of placebo from treatment." | exact apart from the marked ellipsis, which drops only "are needed" | Abstract |

Optional: quote the last sentence in full instead of using the ellipsis: "inclusion of active comparison groups and explicit attention to the reduction of demand characteristics are needed to disentangle the effects of placebo from treatment."

## 3. Mixed-results and scientific-limits claims
- Body and parallel line: "promising gains in alerting and conflict monitoring, with more mixed results in randomised trials with active controls". This is supported by the Abstract.
- **Material omission:** the page names orienting as one of the three categories but does not say how it came out. The article's Orienting section concludes: "Thus, there is weak support in the literature for mindfulness-related benefits for the orienting component of attention." Its Summary says the literature "is mired with conflicting evidence", with "the most promising support for conflict monitoring". Add one sentence (see suggested text).
- Further limits the page could use if there is word budget (optional): fewer than half of the 57 studies had an active control group, and "only 10 out of 57 studies explicitly reported attempts to equate demand characteristics across groups" (Study Design Considerations, §3).
- **Plain words:** "less clear-cut than popular accounts suggest" is not in Prakash et al. It echoes the unopened Van Dam 2018 parallel. Also, "Others, especially those with strong control groups, show mixed results" is not what the review says: it describes the evidence from trials with active controls as "more mixed", not individual studies showing mixed results. Fix both.
- **Example:** "some people improve on some measures, not that everyone does" adds an individual-differences claim that the review does not make. The review's point is about components of attention and study design.
- **Scope section:** it quotes "can be improved" and "the effects are measurable in both behaviour and brain structure". Both phrases were in the original body, which this rewrite deletes, so the reader sees quotation marks around words that are no longer on the page. What is still on the page and still overclaims is the protected Practice line ("Regular meditation, deliberate practice, and attention-friendly environments all improve it"). Point the scope note at that line. "rests on sources not used here" is borderline audit wording; use a neutral scope statement.

## 4. Prose and protected sections
- `enrich_validate.py` on the recovered page, in the scratch copy: **ok** (0 ERR; only the standard two warnings: no Sources URL, no Related concepts).
- Prose words (validator `prose_words`): **264** (limit 40–300). Lines starting with `*`, such as *For example*, are not counted. Any added sentence must be offset by trimming so the total stays at or under 300.
- The front-matter (lines 1–13) and the principle blockquote are byte-identical to the repo file.
- Philosophy parallels (3 wikilinks, aliases unchanged) and the Practice section are byte-identical to the repo file. No reflections comment exists in either version.
- Psychology parallels: only the Tang 2015 / Goleman & Davidson 2017 line changed. It was replaced with the opened review. This is a narrow parallel correction of the kind the supervisor accepted for D003/B027 (`docs/enrichment/SUPERVISOR-QC-2026-10-19.md`), and the ledger records it. Acceptable.
- Lazar 2005, Fox 2014 and Van Dam 2018 are inherited and **unopened**. They are left on the page and must stay listed under the ledger's NOT opened caveat, which they currently are. Tang/Goleman should also stay listed as not opened and removed.
- AT006-page.md is identical to the patch's post-image.

## 5. Patch and safe recovery
- The patch applies cleanly to current HEAD ddd99051 (`git apply --check`: all four hunks).
- **Do not run `git am` on the whole patch.** It modifies `docs/enrichment/batons/p1d.json`, which is a baton clock-in for genuineflourishing42, and it carries the commit message "wip". Recover only the content and ledger files:
  `git apply --include='content/*' --include='docs/enrichment/sources/*' unpushed-AT006.patch`
  Then make the corrections in §6 and run `enrich_validate.py`. The live p1d owner or the supervisor then updates state with `enrich_state.py p1d done AT006` and `sources 82`, rather than applying the batches hunk. The batches hunk does still apply, since HEAD still shows sources_checked 81 and AT006 not done. Baton handling is left to the supervisor.

## 6. Suggested corrected text (drop-in)
Body paragraph 1:
> One review, by Prakash and colleagues (2020), looks at "longitudinal studies of changes in components of attention following mindfulness training". They identified 57 retreat studies, non-randomised trials and randomised controlled trials, and sorted the outcomes into alerting, orienting and executive attention (conflict monitoring). Their reading: "Although many non-randomized and retreat studies provide promising evidence of gains in both alerting and conflict monitoring following mindfulness training, evidence from randomized controlled trials, especially those involving active control comparison groups, is more mixed" (abstract; [Prakash et al., 2020, Mindfulness and Attention](https://pmc.ncbi.nlm.nih.gov/articles/PMC8011594/)). For orienting they find "weak support in the literature for mindfulness-related benefits".

Section "A promising tool, with limits": keep as is, or use the full demand-characteristics sentence. Optionally add the locator "(Summary and Final Thoughts; abstract)".

Scope:
> The Practice line below says meditation, deliberate practice and attention-friendly environments "all improve" attention; this review supports gains on some components of attention, not that blanket claim. Brain-structure change is the claim of the Lazar et al. (2005) and Fox et al. (2014) parallel, not of this review. Environmental design as a way to direct attention is the compendium's addition.

Plain words:
> Attention can be trained, but the evidence is less clear-cut than the principle's wording suggests. Some well-run studies show gains on specific parts of attention, most clearly on handling conflicting signals. Trials with strong control groups give more mixed results, and gains in shifting attention to where it is needed have little support.

Example, last sentence:
> The research supports gains on some measures of attention, not on all of them.

Psychology parallel line:
> - **Mindfulness training and attention**, promising gains in alerting and conflict monitoring, with more mixed results in randomised trials with active controls (Prakash et al., 2020, "Mindfulness and Attention")

Re-check the prose count after editing (target ≤300).

## 7. Ledger corrections
Replace the "Opened" line with:
> - Opened: Prakash, Fountain-Zaragoza, Kramer, Samimy & Wegman (2020), "Mindfulness and Attention: Current State-of-Affairs and Future Considerations", J Cogn Enhanc 4(3):340–367, doi:10.1007/s41465-019-00144-5 (PMC8011594, full author manuscript). Quotes from Abstract, Orienting section summary, and Summary and Final Thoughts; string-matched. Earlier "Kramer et al." attribution corrected (Kramer is third author).

Keep the NOT opened line: Tang 2015 and Goleman & Davidson 2017 (line replaced); Lazar 2005, Fox 2014 and Van Dam 2018 (inherited parallels left unverified). Add: "Plain words no longer relies on Van Dam's 'popular accounts' framing."
