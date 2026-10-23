# Thinkers queue — representativeness analysis and proposed extension

Written by supervisor-pplx-1023a (2026-10-23, strategic session). Answers the owner's
question: "The Thinkers list is 36 — is it representative of the Wiki, or should more
Thinkers be queued?"

## Method

Corpus mention counts were re-measured on 2026-10-23 across
`content/{principles,concepts,kernels,thinkers,stories}` (file-level: a file counts once
if it names the thinker; this matches the evidence style of `queue-thinkers.json`). The
canonical queue (`docs/enrichment/queue-thinkers.json`, minted 2026-10-22 13:27Z, trimmed
to 36 identities at 13:35Z) was NOT regenerated — it is a curated snapshot. The comparison
below is the queue as committed vs. the corpus as it stands today.

## Headline finding

The queue is NOT representative of the wiki as it stands. Ten named figures with heavy
corpus presence are absent, and several of them out-rank most of the queue:

| Candidate | Corpus files naming them | Would rank (vs current queue) | Wiki anchor points |
|---|---|---|---|
| Heidegger | 170 | between Epictetus (190) and Marcus Aurelius (163) — top 15 | E forest, The lived body, Wu wei parallels, ~30 w1-band concepts |
| Buber | 90 | above Kahneman (63) | I and Thou, Relational philosophies (R forest) |
| Husserl | 89 | above Kahneman (63) | Epoché, Phenomenology, E forest |
| Patanjali | 80 | above Beck (63) | Y forest (Yoga Sutras), Gradual training |
| Whitehead | 78 | above Beck (63) | Process philosophy, P forest |
| Levinas | 75 | above Beck (63) | R forest, ethics of the Other |
| Merleau-Ponty | 72 | above Beck (63) | The lived body, The habit body |
| Rumi | 68 | above Seligman (61) | Sayings, Sufi material in stories |
| Bergson | 52 | above Neff (45) | Durée, process thought |
| Ricoeur | 51 | above Neff (45) | Narrative identity, hermeneutics |

Second tier (above the queue's 10-mention floor, PROTOCOL-THINKERS.md): Gadamer (36),
Jaspers (36), Shantideva (37), Nishida (29), Shankara (32), Nagarjuna (29), MacIntyre
(28), Hadot — already queued. Notable near-floor: Nishitani (16), Dogen (14+15), Mencius
(19), Camus (19).

## Why the gap exists

The 2026-10-22 queue mint ranked candidates by *principles-page* mentions at that moment.
The gap figures are anchored in *concepts* (I and Thou, Epoché, Process philosophy, The
lived body, Phenomenology, Durée) and in the E/R/P forests' body text — the very pages
that remain in the concepts tail (ct2) and were written after or outside the queue's
scan. The wiki's forests (Mesoamerican, Yoga-Vedanta, Kyoto-School/Tibetan, Relational,
Existential/Phenomenology) are otherwise under-weighted: no Kyoto School thinker
(Nishida 29, Nishitani 16), no Yoga-Vedanta thinker (Shankara 32, Patanjali 80), no
Tibetan voice beyond the queue's implicit coverage, no Mesoamerican figure (the corpus
names none above the floor — honest absence, not an omission to force).

## Proposal (owner sign-off requested — the queue is the owner's canonical artifact)

1. EXTEND the queue with the ten data-justified candidates above, in rank order:
   Heidegger, Buber, Husserl, Patanjali, Whitehead, Levinas, Merleau-Ponty, Rumi,
   Bergson, Ricoeur — IDs T038–T047. Each clears the 10+ entries floor by 5x.
2. CONSIDER a second wave (owner taste call): Nishida, Nishitani, Shankara, Nagarjuna,
   Shantideva, Gadamer, Jaspers, MacIntyre, Dogen, Mencius — these cover the Kyoto
   School, Yoga-Vedanta, Madhyamaka, hermeneutics and virtue-ethics voices the wiki
   leans on. Recommend taking Nishida (Kyoto-School anchor), Nagarjuna (Madhyamaka
   anchor) and Shankara (Vedanta anchor) at minimum so every forest has a thinker.
3. DO NOT mint Mesoamerican or forced-representative thinkers — the corpus does not name
   any above the floor; the queue's own rule (PROTOCOL-THINKERS.md) forbids passing
   mentions.
4. Sequencing: mint T026–T037 first (bands t1c/t1d, already open), then the extension.

## Effect

With the ten-candidate extension, 36 → 46 queue identities covering every forest the wiki
actually cites; 12 currently unminted (t1c/t1d), 10 proposed. Graph integration is
unaffected: thinkers already render as nodes; new pages follow PROTOCOL-THINKERS.md.
