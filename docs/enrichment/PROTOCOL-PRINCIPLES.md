# Protocol: the principles pass

Owner directive (2026-10-19): ALL item types need work. Priority: PRINCIPLES. Many principle
pages are poor and AI-generated-sounding: the "Plain words" sections are often just OFF —
weird replicates of the principle instead of explanations — and a VERBATIM SOURCE QUOTE is a
real plus. This protocol governs the principles pass. The concept pass
(`docs/enrichment/PROTOCOL.md`) stays in force for concepts.

Owner priority (2026-10-19): Daoism, Buddhism and Pragmatism first, to state-of-the-art
excellence, then the rest. When you choose items within your band, prefer principles from
those three traditions; when bands are minted, they are minted from those traditions first.

Skimmability (2026-10-19): same rule as concepts — short paragraphs (2-4 sentences),
`###` sentence-case subheadings between them where the body allows, no bold in prose, and
verbatim quotes as standalone blockquote lines (already the format for principle quotes).

Token efficiency (2026-10-19): this wiki is built on Free Trial accounts. Spend tokens only on
meaningful work — reading sources, writing, validating. No filler narration in your notes,
no re-reading files you already have, no redundant searches. Follow the Token-efficient
superskill.

## What a principle page is

Front-matter, then: the blockquote principle statement, the body (explanation, plain words,
for example), then the link sections (Stories, Practice kernels, Psychology parallels,
Philosophy parallels) and the `<!-- fc: reflections -->` comment.

## Per-principle workflow

1. Claim and state: take a principles band on the TASKBOARD (`p1a`, `p1b`, ...), mark the
   principle in-progress in your band state file, save.
2. READ the principle and its linked concepts before writing anything.
3. VERIFY against the primary source. The owner's library is in `docs/PRIMARY-SOURCES.md`
   (Google Drive links); fall back to a citable web edition (Perseus, MIT Classics,
   accesstoinsight, SEP/IEP) when needed. ZERO hallucination: every quote must be copied from
   a source you actually opened, with its locator (book, chapter, Bekker/section/page).
4. REWRITE the body, keeping:
   - the front-matter and the blockquote principle statement untouched;
   - ALL existing links and the reflections comment untouched;
   - the citation locator style (e.g., `(NE I.7, I.13.)`).
   Improve:
   - The explanation: say something true and specific about WHY the principle holds, in the
     source's own terms. Kill AI cadence (see HUMANIZER-SKILL.md; the validator enforces the
     banned list and staging patterns).
   - Add a VERBATIM SOURCE QUOTE where the primary text is available: one short quote that
     carries the principle's core, exactly as a citable translation has it, with locator.
     Format it as a blockquote line with the locator after it. If the existing paraphrase is
     already faithful, keep the paraphrase and add the quote.
   - **Plain words**: must genuinely re-explain the principle in fresh, everyday language —
     what it is actually saying, why it is not obvious, how a person would act on it. If the
     current one merely re-arranges the principle sentence (the owner's complaint), replace
     it. Test: could a smart 15-year-old who has not read the principle statement understand
     the idea from the plain words alone?
   - The *For example* line: concrete and checkable; replace vague ones.
5. VALIDATE: `python3 scripts/enrich_validate.py "<file>"` — principles use 40-300 prose
   words; the missing-Sources-URL case is a warning (cite the primary text with a locator
   instead). Fix every ERR.
6. SATURATE: check `enrich_find.py mention` for the principle's core terms; propose
   cross-links in `docs/enrichment/proposals/<band>.json` (same schema as concepts).
7. Mark done in your state file, run `scripts/enrich_save.sh`, clock in (`baton.py`).

## The model page

R055 (Practise xin) is the exemplar of the finished standard: verbatim Legge quotes with
locators and source links, an explanation that argues rather than repeats, a Plain words
section that re-derives the idea, and the link sections untouched. Read it before your first
principle: `content/principles/R055 — Practise xin (trustworthinessintegrity).md`.

## Quality bar for Plain words (examples)

BAD (a replicate): "Practise gratitude — it recalibrates attention" -> "Gratitude
recalibrates your attention toward the good." (Says nothing the title doesn't.)
GOOD (a re-derivation): "Your attention drifts to what is missing. Listing what you have
been given forces the drift the other way for a minute, and the minute is where the effect
lives."

## Band structure

Principles bands are minted on the TASKBOARD from `docs/enrichment/queue-principles.json`
(weak principles ranked by graph degree): p1a (ranks 1-30), p1b (31-100), p1c (101-170),
p1d (171-240), p1e (241-310). Same state machine, batch files, batons and parallel rules as
concepts. The lead mints more bands as needed.
