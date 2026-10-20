# QC handoff: p1w repairs from worker-p1w-6c93f2ad (2026-10-20)

**To**: worker-p1w-7cd8c5ce (current p1w owner) and supervisor-tmp1
**From**: worker-p1w-6c93f2ad (p1w owner 05:27-07:00Z; baton went stale mid-repair and was taken over per the rules — no dispute with the takeover)

## What happened

At the item-5 milestone (after E005, E006, E020, E025, E032) the advisor QC **failed E032** and ordered reopen+repair of **E020, E025, E006**. I completed all four repairs locally (each validated vs baseline `c2a3ee47`) but the page-image verification took over 30 minutes without a baton clock-in, my baton went stale, and the band was taken over before my repair commit could be pushed. The repairs are below in full so the current owner can apply or adapt them. Nothing in this file changes any band state; it is a handoff record.

## URGENT: E025 locator correction (applies to the current origin state of E025)

The E025 page on origin still cites the de-severance blockquote as "§23, H.139" and the closeness quote as "§23, H.140". **These are wrong.** In the Macquarrie-Robinson edition the English page numbers are the running heads ("Being and Time 139") and the German SZ pagination is the marginal numbers; the archive.org OCR interleaves them.

Verified on page images served from the archive item (IIIF leaves, rendered and read visually):

- De-severance blockquote: **M&R p. 139, German marginal H.105** (leaf 134; wording verified character-for-character, including the em dash and the comma-heavy punctuation).
- "In Dasein there lies an essential tendency towards closeness" + "conquest of remoteness": **M&R p. 140, also H.105** (leaf 135; the tendency sentence is printed in italics). Page-image check of the German page break: the marginal H.106 marker on M&R p. 140 sits at the line beginning "'measure' anything...", well BELOW both sentences, so both sit on H.105, not H.106. Cite them as H.105 / M&R p. 140.
- §22 equipment sentence ("has a different closeness, which is not to be ascertained by measuring distances"): **M&R p. 135, H.102** (leaf 130).

Also: the E025 ledger called the §22 quotation OCR-clean; the page image shows the printed word "different" with broken/degraded glyphs (OCR rendered it "diffe.ent"). The word is "different", but the print is degraded there; the ledger should say so rather than "OCR-clean".

Corrected Sources line for E025:

```
- [Heidegger, Being and Time, trans. Macquarrie and Robinson, full text (archive.org)](https://archive.org/details/being-and-time-martin-heidegger-1962) — §22 closeness of the ready-to-hand (M&R p. 135, H.102); §23 de-severance (M&R p. 139, H.105), conquest of remoteness and tendency towards closeness (M&R p. 140, also H.105)
```

## E020 repair (advisor order: narrow to what the SEP entry reports)

The advisor found the origin E020 body claims more than SEP says ("made of the body", "dependence runs one way", movement-first, "stopped cohering", wrist injury "does not touch the mind"). Repaired body (replaces everything between the principle statement and the Stories section; blockquote unchanged):

```
Merleau-Ponty's Phenomenology of Perception develops its account of the body through an extended case study of Schneider, a brain-damaged patient studied by Gelb and Goldstein. As the [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/merleau-ponty/) summarizes, Schneider lacks the ability to project into virtual space, and his injury has disrupted what Merleau-Ponty calls the "intentional arc," which

> projects around us our past, our future, our human milieu, our physical situation, our ideological situation, and our moral situation, or rather, that ensures that we are situated within all of these relationships. (Merleau-Ponty, Phenomenology of Perception, p. 170/137, as quoted in [Toadvine, SEP](https://plato.stanford.edu/entries/merleau-ponty/))

The same entry describes Merleau-Ponty's account of sensing as a reciprocal exchange of question and answer, quoting him: "The sensible gives back to me what I had lent to it, but I received it from the sensible in the first place" (p. 259/222). On this description, the perceiving body and the perceived thing are equally active and receptive. The compendium applies the account as a noticing practice: take perception as an activity in its own right, one your body performs with things, ahead of any description you give it.

(Merleau-Ponty, Phenomenology of Perception, pp. 170/137 and 259/222, as quoted in Toadvine, SEP.)

**Plain words**
Perceiving is something a living body does with a world. Your body takes up an attitude toward a thing; the thing answers with what it will show. Sensing runs as question and answer. The practice is to catch that exchange happening: notice your body settling toward a thing before you have words for the situation.

*For example:* Standing at an unfamiliar door, a hand may already be reaching for where a handle usually sits. The reach is perception working ahead of description.

## Sources

- [Toadvine, "Maurice Merleau-Ponty", Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/merleau-ponty/) — Schneider case summary and intentional-arc quotation (PP: 170/137); sensing-as-reciprocal-exchange quotation (PP: 259/222), quoted secondhand
```

Reciprocal proposal (Embodiment <- E020) why-clause replacement — the current one repeats the unsupported claim:

```
E020 presents Merleau-Ponty's Schneider case and the intentional-arc quotation, connecting this concept's lived-body discussion to Phenomenology of Perception.
```

## E006 repair (advisor order: distinguish the epoché from the daily-life analogy)

Replaces the third paragraph, Plain words, and For example (blockquote and opening paragraph unchanged):

```
Husserl's epoché is a step in phenomenological inquiry: the suspension serves the examination of consciousness, and §§31-32 do not themselves extend it to everyday situations. The compendium borrows the gesture as a daily-life exercise, and the borrowing is an analogy rather than the method itself: when an automatic interpretation catches you, set it out of action without denying or doubting it, and ask what then appears.

(Husserl, 1913/1982, Ideas I, §§31-32.)

**Plain words**
What Husserl suspends is a whole attitude toward a world; what the exercise suspends is one reading of one situation. The exercise keeps his two cautions from §32: you are not calling the reading false, and you are not doubting the facts it is about. You set it out of action for a moment and look at what is left.

*For example:* A curt four-word text arrives at 6:50 in the evening and reads as rejection. Name the reading, set it aside without deciding it is false, and re-describe the bare fact: four words, sent at a time she is usually driving. The rejection reading then sits as one possibility among others.
```

## E032: alternative primary-source version (available if preferred)

The current origin E032 is SEP-based (secondhand quotes, disclosed). Per the owner's priority on verbatim primary-source quotes, an alternative version exists, verified against the actual Barnes translation scan (archive.org item "beingn-and-nothingness", 1957 printing, image-only PDF; quotes located via the item's djvu OCR and then verified word-for-word on rendered page images):

- Bad-faith passage on **printed p. 56** (not 56-57; verified on the page image, comma after "engendered" confirmed; "facticity"/"transcendence" italicized in print).
- Café-waiter and Plato's Republic passages on **printed p. 83** (verified on the page image).

Full alternative body:

```
In his discussion of bad faith, Sartre distinguishes facticity and transcendence as aspects of human reality that can be coordinated. His later discussion describes someone as choosing the meaning of a situation without choosing their position in it. These passages distinguish the circumstances someone encounters from how they take them up.

> The basic concept which is thus engendered, utilizes the double property of the human being, who is at once a facticity and a transcendence. These two aspects of human reality are and ought to be capable of a valid coordination. But bad faith does not wish either to coordinate them nor to surmount them in a synthesis. (Sartre, Being and Nothingness, Part One, ch. 2, Barnes trans., p. 56, [full scan (archive.org)](https://archive.org/details/beingn-and-nothingness))

The compendium uses this distinction as a reflection exercise: describe an existing situation separately from the projects you are considering within it.

(Sartre, Being and Nothingness, trans. Barnes, 1957 printing, Part One, ch. 2 and Part Two, ch. 1.)

**Plain words**
Try separating two questions: what is already the case, and what will I do next? Your present circumstances do not answer the second question for you. A proposed action still has to start from those circumstances.

*For example:* Imagine someone employed as a waiter who wants to become a sailor. For the exercise, they describe their current employment, then identify an action toward the new work. Calling themselves a sailor would not establish that they already held that role.

## Sources

- [Sartre, Being and Nothingness, trans. Hazel Barnes, 1957 printing, full scan (archive.org)](https://archive.org/details/beingn-and-nothingness) — Part One, ch. 2 (Bad Faith), p. 56: facticity-transcendence coordination; Part Two, ch. 1, p. 83: choosing the meaning of a situation without choosing one's position
```

Reciprocal proposal (Facticity <- E032) why-clause:

```
E032 works out Sartre's pairing of facticity with transcendence via the bad-faith passage (p. 56) and the p. 83 discussion of choosing a situation's meaning, connecting this concept to its coordinate pole.
```

PDF-to-printed-page offset for the scan: PDF page = printed page + 66 (calibrated visually on two headers). My E032 ledger draft was never pushed; the origin ledger supersedes it, and the verification details are recorded above.

## State note

My unpushed local state changes (reopen/done markers for E020/E025/E006/E032 under the QC correction reasons) were discarded with the takeover; no p1w state was pushed by me after 06:30Z. The E005, E006, E020, E025 items I marked done before the takeover are unaffected.
