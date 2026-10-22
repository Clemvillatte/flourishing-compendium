---
schema: 2
id: "Temporal-difference reinforcement learning"
type: "concept"
title: "Temporal-difference reinforcement learning"
file: "Temporal-difference reinforcement learning"
tags: ["theory", "psych/biophys"]
navigation: {"track": "shared", "primaryPath": ["NAV-SHARED", "NAV-SHARED-THEORY", "NAV-TH-BIOPHYS"], "alternatePaths": []}
---
**Temporal-difference reinforcement learning** — Sutton — agents learn by predicting future reward and updating from prediction errors, the core of dopamine signalling.

Temporal-difference (TD) learning is Richard Sutton's method for learning predictions from streams of experience. The founding 1988 paper introduces the class and marks the break with the conventional approach:

> "TD methods are similarly driven by the error or difference between temporally successive predictions; with them, learning occurs whenever there is a change in prediction over time." (Sutton, [Learning to Predict by the Methods of Temporal Differences](https://link.springer.com/content/pdf/10.1007/BF00115009.pdf), Machine Learning 3, 1988, p. 10)

### What the trick buys

The paper's own example is a weather forecaster. The conventional approach waits for Saturday and compares each day's prediction with what actually happened. The TD approach compares Monday's prediction with Tuesday's: if the forecast moved from a 50 percent chance of rain to 75 percent, that change itself is a signal to strengthen the Monday-style predictions. Learning can therefore begin before the outcome arrives, which is why TD methods, in the paper's summary, "require less memory and less peak computation than conventional methods and they produce more accurate predictions" for most real prediction problems.

The method matters to the compendium mainly through its proposed biology: researchers have argued that the reward-prediction-error signal carried by dopamine neurons matches the TD error term, and the compendium's Schultz page carries that account. The general shape of the algorithm is the part to keep in view: expectations are updated by the gap between what was predicted and what arrived.

### In the compendium

- [[BE004 — Understand that behaviour is learned — skills can be acquired]] — the learning-theory ground the algorithm supplies
- [[P054 — Balance exploration and exploitation]] — the decision problem TD agents face
- [[BE025 — Recognise avoidance as the core maintaining factor of anxiety and fear]] — prediction-error dynamics in the anxiety loop

## Field

Biophysiological · Psychological science

## Cited in philosophy parallels

## Related concepts

- [[Reward prediction error (Schultz)]] — the algorithm whose error term dopamine matches
- [[Habit formation]] — the acquisition process the dopamine signal trains
- [[Shaping (Skinner)]] — the behavioral-level method of the same learning family

## Sources

- [Sutton, Learning to Predict by the Methods of Temporal Differences (1988, Springer PDF)](https://link.springer.com/content/pdf/10.1007/BF00115009.pdf) — TD definition, weatherman example, memory and computation claims

- Sutton, 1988, Machine Learning 3(1), 9-44
