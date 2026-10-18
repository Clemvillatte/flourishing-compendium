# The Flourishing Compendium

A static philosophy and psychological-science wiki: 5,700+ principles, kernels, concepts, stories and sayings, linked in a knowledge graph.

This repository is the wiki's permanent home. The site is hosted free on **GitHub Pages** and every edit — from any browser, no tools or accounts beyond GitHub needed — rebuilds the site automatically in about a minute.

## How the pieces fit

```
content/          ← THE SOURCE OF TRUTH: one markdown file per entry
data-src/         ← small static data (randomiser packs, authored examples)
site/             ← the site itself (index.html, assets) — no data committed
scripts/build.py  ← assembles content/ into site/data/*.json.gz
.github/workflows/deploy.yml ← on every push: build + publish to Pages
```

The build is deterministic: the same markdown always produces the same data files.

## Editing an entry (two ways)

### 1. In the site itself (nicest)
Open the site → open any entry → click **Edit ✏️**. You get a large editor with live preview, a formatting toolbar, and `[[wiki link]]` autocomplete. **Save to GitHub** commits the change; the site rebuilds itself.

First-time setup: click **⚙** in the top bar and paste a GitHub token:
1. On github.com, go to Settings → Developer settings → Fine-grained tokens → Generate new token.
2. Give it access to **only this repository**, with **Contents: Read and write**.
3. Paste it into ⚙ Settings in the site. It stays in your browser and is only ever sent to api.github.com.

### 2. On github.com (simplest)
Click any file under `content/` → the pencil icon → edit → Commit. Markdown only; the site renders it.

## Deleting an entry
Open the entry → **Edit ✏️** → at the bottom left of the editor there is a small **"Delete this entry"** link. Click it twice (the second click confirms). The entry's file is removed and the site rebuilds itself. Nothing is ever truly lost: GitHub keeps the full history, so a deleted entry can be restored from the repository's commit history if you ever change your mind.

## Adding a new entry
Click **+ Add** in the top bar of the site, choose the type (concept, principle, kernel, story, saying), write, create. It becomes a new markdown file and appears after the rebuild.

## Markdown format of an entry

```
---
schema: 0
id: D001
type: principle
title: Align your life with the Dao
file: D001 — Align your life with the Dao
tags: ["daoism"]
discipline: Daoism
number: "1"
---
The entry body — markdown with [[wiki links]].

<!-- fc: reflections
First reflection question
%%
Second question
-->
```

- `schema` selects the field-set (leave as-is on existing entries; `0` for new principles/kernels, `2` for new concepts/stories/sayings).
- `file` is both the filename and the link target other entries use — keep it stable or update references.
- Reflections (optional) are the questions shown on principle cards; separate multiple questions with a line containing `%%`.
- The order of entries comes from `content/_order.json`; new files are appended automatically. To rename or delete an entry, rename/delete its markdown file **and** update the manifest accordingly.

## Working locally (optional)

```bash
python3 scripts/build.py --src .   # builds site/data/*.json.gz
python3 -m http.server -d site 8123  # preview at http://localhost:8123
```

## History and safety

Every edit is a git commit: nothing can be lost, and any change can be reverted from the repository's commit history. The data is plain markdown — no proprietary format, no lock-in.
