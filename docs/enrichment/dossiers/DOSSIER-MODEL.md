# Dossier model (working spec, derived from the validated GF exemplar)

Owner validation: 2026-10-25. The exemplar is `genuine-flourishing.md`. Read it end to end before writing a dossier. This page records what it does so that a writer can reproduce the method, not the wording. Never copy its sentences or its examples.

## The one idea

A dossier is one continuous thread of thought. Each paragraph answers the question the previous paragraph raised, and the last sentence of a paragraph is usually the hinge into the next. A reader should never feel they are walking down a list of sources.

## Shape (binding)

1. `# Title`, then one question as a blockquote.
2. Two or three short paragraphs in the first person, saying why this theme matters and what the dossier will ask of it. Plain, specific, no throat-clearing.
3. `### Nearby terms`: four to six bullets that separate the theme from its neighbours (each says what is different, with card and source links).
4. `## <Theme-specific heading>`: the main body, in `###` subsections. Each subsection is a movement of the argument and its heading names the question or tension, not a school or a source type.
5. `## Where the traditions genuinely disagree`: three to five `###` headings phrased as real questions. Open with a concrete case when it helps. State each side faithfully, say what the disagreement turns on, then (briefly, in the first person) where the writer leans and why. Only disagreements the sources support.
6. `## Practice: ...`: opens with `::Variation::` and `::Selection::` paragraphs, then grouped numbered practices that link to cards, each two sentences: what to do, what to notice. A `::Retention::` line closes when the dossier has one.
7. `## Story: ...` (last section): short intro, then `###` groups of story cards, one or two sentences each, with the story card linked.

## Pace and cognitive load

- One idea per paragraph. Paragraphs run 60 to 130 words; the checker fails anything over 150 visible words.
- Introduce at most two new named positions per paragraph. If a third is needed, start a new paragraph that opens with the connection.
- Put the question before the answer. "But an aim is not yet a measure: what would count as evidence?" works because the reader wants the next paragraph.
- Alternate: a position, then the pressure on it, then the next position. Do not stack three summaries in a row.
- Quote sparingly. A block quote is for wording that carries something the paraphrase would lose; verbatim, from an opened source, with the carrier linked in the attribution.
- Name what kind of claim it is: a philosophical proposal, a study finding, a convention. Keep caveats (cross-sectional, one study, contested) where the source has them.
- Links are woven into the sentence: the card link on the concept, the source link on the claim it supports. No bare link lists, no verification labels in the public text.

## Voice

Direct statements. The writer says "I" where a judgment is being made and keeps it short. Avoid "not just X but Y" contrasts used for effect, tidy aphorisms, rhetorical triplets, words such as journey, landscape, profound, tapestry. Follow `docs/enrichment/HUMANIZER-SKILL.md`. Every sentence should be one a careful person would say aloud to a friend.

## Evidence rules (unchanged)

Open every carrier relied on. Quote only wording you saw. Card links must resolve (`scripts/dossier_check.py`). Record what was opened, and anything uncertain, in the ledger under `docs/enrichment/sources/dossiers/`. An old map-format dossier is raw material, not a draft: reuse its verified links and quotes, but re-read each source passage before reusing a claim in new words.

## Done means

`dossier_check.py` passes; no paragraph over 150 words; a reader test (read the whole text aloud, mark every place the thread breaks or a term appears before it is introduced, fix them); the disagreement section is present; the Story section is last; art is assigned; the registry entry is `published` and `dossier_registry_build.py` has been run.
