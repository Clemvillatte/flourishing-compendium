# Thinkers queue — representativeness analysis and proposed extension

Written by supervisor-pplx-1023a (2026-10-23, strategic session; corrected after advisor QC).
Answers the owner's question: "The Thinkers list is 36 — is it representative of the Wiki,
or should more Thinkers be queued?"

## Method and its limits (read first)

Counts are TRIAGE EVIDENCE, not connection verdicts: a file counts once if it names the
thinker (any of the alias spellings), scanned across
`content/{principles,concepts,kernels,thinkers,stories,sayings}` (5,348 files) on
2026-10-23. File-level substring counting is the same evidence style as
`queue-thinkers.json`, but it is NOT identical methodology to the 2026-10-22 mint (whose
exact scan scope is not recorded in the repo), so ranks are comparable in magnitude, not
exactly. Mention presence does not establish that the mention is a substantive
relationship (PROTOCOL-THINKERS.md QC note). The canonical queue
(`docs/enrichment/queue-thinkers.json`, minted 2026-10-22 13:27Z, trimmed to 36
identities at 13:35Z) is the owner's curated artifact; nothing here re-mints it without
sign-off.

## Headline finding (triage)

The queue under-represents the corpus as it stands. Ten absent figures out-rank the
queue's tail (Hume 41, Fromm 42, Hadot 28, Weil 23 at queue mint):

| Candidate | Files naming them (alias union) | Queue-tail comparison | Wiki anchor points (read, not just counted) |
|---|---|---|---|
| Heidegger | 170 | above Marcus Aurelius (163) | E forest; The lived body, The habit body, Wu wei parallels |
| Buber | 90 | above Kahneman (63) | I and Thou; R forest relational ethics |
| Husserl | 89 | above Kahneman (63) | Epoché; phenomenology concepts |
| Patanjali | 80 | above Beck (63) | Y forest (Yoga Sutras), Gradual training, five pillars |
| Whitehead | 78 | above Beck (63) | Process philosophy; P forest |
| Levinas | 75 | above Beck (63) | R forest, ethics of the Other |
| Merleau-Ponty | 72 | above Beck (63) | The lived body, The habit body |
| Shantideva | 55 | above Neff (45) | Bodhicaryavatara-sourced B-forest material |
| Bergson | 52 | above Neff (45) | Durée, P191 joy/creation |
| Ricoeur | 51 | above Neff (45) | narrative identity, hermeneutics |

Second tier (all clear the PROTOCOL-THINKERS 10+ floor): Jaspers 37, Gadamer 36,
Nagarjuna 32, Nishida 29, MacIntyre 28, Dogen 27, Shankara 21, Mencius 19, Nishitani 16.

Correction (2026-10-23, after owner question): Rumi was counted on a substring match that caught "Rumination"; on word-boundary matching Rumi appears in 7 files — BELOW the 10+ floor — and is dropped from the first wave. Mesoamerican audit: the strongest Mesoamerican names in the corpus (Tlamatinime 5,
Nezahualcoyotl 4) sit below the 10-file floor — an honest absence; the queue's own rule
forbids minting passing mentions.

## Forest coverage matrix (queue + extension vs. the wiki's forests)

| Forest | Queue representative | Extension adds |
|---|---|---|
| A Aristotelian | Aristotle, Plato | — |
| D Daoist | Laozi, Zhuangzi, Confucius | — |
| S Stoic | Epictetus, Seneca, Marcus Aurelius, Socrates | — |
| B Buddhist | the Buddha | Shantideva, Nagarjuna, Dogen (second wave) |
| Y Yoga-Vedanta | — | Patanjali (first wave), Shankara (second wave) |
| K Kyoto-School/Tibetan | — | Nishida, Nishitani (second wave) |
| SP Spinozism | Spinoza | — |
| P Pragmatist/Process | Dewey, James | Whitehead (first wave) |
| E Existential/Phenomenology | Kierkegaard, Frankl | Heidegger, Husserl, Merleau-Ponty (first wave) |
| R Relational | — | Buber, Levinas (first wave) |
| M Mesoamerican | — (no candidate clears the floor) | — |
| Psychology | Csikszentmihalyi, Ryan & Deci, Hayes, Gross, Bandura, Kahneman, Beck, Rogers + queue tail | Seligman et al. (T026-T037, already queued) |
| Sayings/poetic voice | — | Rumi (first wave) |

Gap summary: Y, K, R and the phenomenology/process side of E/P have NO queue
representative today; the Mesoamerican forest has no eligible thinker (honest).

## Decision (owner sign-off received 2026-10-23)

OWNER APPROVED: "every tradition should have at least the core thinkers representing
them (as long as they are relevant to our mission)." Executed by supervisor-pplx-1023a
same day: queue-thinkers.json extended to 55 identities (T038-T047 first wave, T048-T056
second wave — the forest anchors plus the tradition voices listed in point 2). Evidence
lists regenerated with word-boundary alias-union scan; counts differ slightly from the
triage table above (alias handling), all clear the 10+ floor. Bands minted: t1e (T038-T047),
t1f (T048-T056). Rumi stays dropped (7 files, below floor); Mesoamerican stays an honest
absence. The original proposal as approved follows.

## Proposal (owner sign-off requested — the queue is the owner's canonical artifact)

1. EXTEND the queue with the eleven first-wave candidates in rank order: Heidegger,
   Buber, Husserl, Patanjali, Whitehead, Levinas, Merleau-Ponty, Rumi, Shantideva,
   Bergson, Ricoeur — IDs T038–T048. Each clears the 10+ floor at least 5x.
2. SECOND WAVE (owner taste call): Nishida, Nagarjuna, Shankara at minimum — so the
   Yoga-Vedanta, Kyoto-School and Madhyamaka anchors each have a thinker; consider also
   Jaspers, Gadamer, MacIntyre, Dogen, Mencius, Nishitani.
3. DO NOT mint Mesoamerican representatives — no candidate clears the floor.
4. Sequencing: mint T026–T037 first (bands t1c/t1d, already open), then the extension.

## Effect

36 → 46 queue identities covering every forest that has an eligible thinker; 12
currently unminted (t1c/t1d), 11 proposed. Graph integration is unaffected: the wiki
graph is UNDIRECTED (a [[wikilink]] from the thinker page already creates the graph
edge), so new pages integrate on mint; reciprocal backlinks remain a navigation and
page-prose improvement, not a graph-edge requirement.
