---
schema: 2
id: "TRACE model of speech perception"
type: "concept"
title: "TRACE model of speech perception"
file: "TRACE model of speech perception"
tags: ["theory", "psych/cognition"]
navigation: {"track": "shared", "primaryPath": ["NAV-SHARED", "NAV-SHARED-THEORY", "NAV-TH-COGNITION"], "alternatePaths": []}
---
**TRACE model of speech perception** — McClelland, Elman — speech is recognised through interactive activation of features, phonemes and words in time.

## Field

Cognition · Psychological science
[[ST134 — Ingold's Lines]]

The TRACE model is James McClelland and Jeffrey Elman's 1986 account of how the mind recognises speech: not by matching sound to stored word-shapes one at a time, but by letting small hypotheses about features, phonemes and words excite and inhibit each other as the sound unfolds. Their own summary of the program:

> "We describe a model called the TRACE model of speech perception. The model is based on the principles of interactive activation. Information processing takes place through the excitatory and inhibitory interactions of a large number of simple processing units, each working continuously to update its own activation on the basis of the activations of other units to which it is connected." ([McClelland & Elman, 1986, abstract](https://stanford.edu/~jlmcc/papers/McClellandElman86.pdf))

### Origin

The model appeared in Cognitive Psychology in 1986 (vol. 18, pp. 1-86), written while McClelland was at Carnegie Mellon and Elman at the University of California, San Diego. It grew out of the interactive-activation framework the authors had developed with David Rumelhart for visual word recognition, and it answers a problem that framework's critics had posed: whether perception can really run in both directions, with what a word is shaping how its sounds are heard.

### How the model works

The model is mechanistic, and its parts are the explanation. A very large number of units sit at three levels: feature, phoneme and word. Each unit is a hypothesis that some perceptual object occurs at a particular point in the utterance, and the same detector is copied across many overlapping time slices, which is how the model represents sound unfolding in time. Units that are consistent with each other across levels (a /k/ sound, the word "kiss") excite each other; units that compete within a level ( /k/ versus /g/ ) inhibit each other. The name "Trace" refers to the network itself: the pattern of activation it holds serves as both the processing mechanism and the working memory of the perception so far.

### What it explained

The paper reports that at the word level the model captures what the Marslen-Wilson COHORT model did well, immediate sensitivity to word-initial information, while repairing that model's weakness: TRACE can recover when a word's beginning is underspecified or mispronounced, because evidence keeps flowing both up from the sounds and down from the words.

### In everyday life

Hearing someone speak in a noisy room is what the model is about: a cough can swallow a whole sound of the word "gift", and the listener still hears the word, because the word level fills in for the missing phoneme level. (Illustrative scenario, not a reported simulation from the paper.)

## Related concepts

- [[Cohort model of speech perception]] — the rival the model absorbed and repaired
- [[Interactive activation model]] — the parent framework for visual word recognition
- [[Connectionism]] — the broader school of small-unit networks TRACE belongs to

## Sources

- [McClelland, J. L. & Elman, J. L. (1986), "The TRACE model of speech perception", Cognitive Psychology 18, 1-86 — full text, author-hosted PDF, Stanford](https://stanford.edu/~jlmcc/papers/McClellandElman86.pdf)

## Cited in philosophy parallels
