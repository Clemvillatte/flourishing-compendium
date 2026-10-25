#!/usr/bin/env python3
"""Cognitive-load check for dossier prose (advisory, not a gate).

Counts card links per body paragraph in the main sections (not Practice or
Story). The owner rejected passages that stack many named positions in one
paragraph. DOSSIER-MODEL.md allows at most two newly introduced named
positions per paragraph; a paragraph with five or more card links is almost
always a catalogue and should be split or cut.

usage: dossier_density.py file.md [more.md]   (exit 0 always; prints findings)
"""
import re, sys

def analyse(path):
    sect = ''
    out = []
    n_par = 0
    links_total = 0
    for i, line in enumerate(open(path, encoding='utf-8'), 1):
        s = line.strip()
        if s.startswith('## '):
            sect = s
            continue
        if sect.startswith('## Practice') or sect.startswith('## Story') or not sect:
            continue
        if not s or s.startswith('#') or s.startswith('>') or s.startswith('::'):
            continue
        s2 = re.sub(r'^[-*]\s+', '', s)
        cards = len(re.findall(r'\]\(https://clemvillatte\.github\.io/flourishing-compendium/#card=', s2))
        words = len(re.sub(r'\]\([^)]*\)', ']', s2).split())
        n_par += 1
        links_total += cards
        if cards >= 5 or (cards >= 4 and words < 120):
            out.append((i, cards, words))
    return n_par, links_total, out

for p in sys.argv[1:]:
    n, t, bad = analyse(p)
    avg = t / n if n else 0
    print('%s: %d paragraphs, %.1f card links per paragraph, %d dense' % (p.split('/')[-1], n, avg, len(bad)))
    for ln, c, w in bad:
        print('   line %d: %d card links in %d words' % (ln, c, w))
