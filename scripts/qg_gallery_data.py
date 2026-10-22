#!/usr/bin/env python3
"""Derive the deg-qigong practice-session dataset from the Academy QG1 page tables.

The QG1 gallery page (academy/QG1 — *.md, an Academy-owned file outside the
worker content/ tree) is the canonical human-editable source for the Qi Gong
practice gallery, migrated from the Library wiki page per the owner's
directive that the Academy is a distinct project (2026-10-22). This script
parses its seventeen session tables into the structured fields the in-app
gallery needs (practice_type, duration_minutes, url, guide, host, thumbnail)
and prints the result as JSON on stdout, plus the shelf x time matrix on
stderr. It follows the same model as scripts/cmp_gallery_data.py.

Run from the repo root:
    python3 scripts/qg_gallery_data.py > /tmp/qg_sessions.json

Thumbnail policy (same as the CMP gallery): every session uses a generated
640x400 image with the practice label and time burned into the pixels, from
public-domain artworks. Qi Gong sessions use their own thumbnail namespace
(qNNN.jpg in site/assets/academy/sessions/) and their own manifest,
academy/thumbnails-manifest-qg.json, so the CMP indexes never collide.
Rows missing from the manifest fall back to the degree artwork.
"""
import json
import re
import sys
from pathlib import Path

PAGE = Path('academy/QG1 — The Qi Gong Degree — A Year of Practice.md')

MANIFEST = None
_mp = Path('academy/thumbnails-manifest-qg.json')
if _mp.exists():
    MANIFEST = {str(e['session_index']): e for e in json.load(_mp.open())}

SHELVES = [
    ('### Five-minute rescues — when the day is already collapsing', 'rescue', 'Five-minute rescues'),
    ('### Ten-minute mornings — the habit-carriers', 'morning', 'Ten-minute mornings'),
    ('### The Eight Brocades (Ba Duan Jin) — the classic set, in every length', 'brocades', 'Ba Duan Jin (Eight Brocades)'),
    ('### Shibashi and gentle flowing forms — moving meditation', 'shibashi', 'Shibashi and flowing forms'),
    ('### Standing practice (zhan zhuang) — the stillness shelf', 'standing', 'Standing (zhan zhuang)'),
    ('### Animal forms — the frolics and the tiger', 'animal', 'Animal forms'),
    ('### Yi Jin Jing — the tendon-changing classic', 'yijinjing', 'Yi Jin Jing'),
    ('### Six Healing Sounds (Liu Zi Jue) — sound and breath', 'liuzijue', 'Six Healing Sounds'),
    ('### Daoyin sets — Ma Wang Dui, Da Wu and other full practices', 'daoyin', 'Daoyin sets'),
    ('### Five elements and seasons — practice with the year', 'seasonal', 'Five elements and seasons'),
    ('### Evening and sleep — the wind-down shelf', 'evening', 'Evening and sleep'),
    ('### Calm under pressure — stress, anxiety, heavy hearts', 'calm', 'Calm under pressure'),
    ('### Walking practice — take it outside', 'walking', 'Walking practice'),
    ('### Seated and chair-based — when standing is not on offer', 'seated', 'Seated and chair-based'),
    ('### Full classes — when you have the hour', 'fullclass', 'Full classes'),
    ('### Tai chi bridge — the first steps toward a second art', 'taichi', 'Tai chi bridge'),
    ('### Breath — the base under everything', 'breath', 'Breath'),
]

ART = 'assets/academy/qigong.jpg'  # degree artwork fallback

BUCKETS = [(5, '≤5 min'), (10, '6–10'), (15, '11–15'), (20, '16–20'),
           (30, '21–30'), (45, '31–45'), (None, '45+')]


def yt_id(url):
    m = re.search(r'youtube\.com/watch\?v=([\w-]{11})', url)
    return m.group(1) if m else None


def parse_length(txt):
    txt = txt.strip()
    m = re.fullmatch(r'(\d+):(\d{2})(?::(\d{2}))?', txt)
    if m:
        if m.group(3):  # H:MM:SS
            return int(m.group(1)) * 3600 + int(m.group(2)) * 60 + int(m.group(3)), txt
        return int(m.group(1)) * 60 + int(m.group(2)), txt
    m = re.fullmatch(r'(\d+)\s*min(?:utes)?', txt, re.I)
    if m:
        return int(m.group(1)) * 60, txt
    return None, txt


def bucket(sec):
    if sec is None:
        return None
    for hi, _ in BUCKETS:
        if hi and sec <= hi * 60:
            return hi
    return '45+'


def split_guide(cell):
    parts = [p.strip() for p in cell.split(',')]
    if len(parts) >= 2:
        return parts[0], ', '.join(parts[1:])
    return cell.strip(), ''


def main():
    lines = PAGE.read_text(encoding='utf-8').splitlines()
    sessions = []
    cur = None
    for ln in lines:
        matched = False
        for h, key, label in SHELVES:
            if ln.startswith(h):
                cur = (key, label)
                matched = True
                break
        if matched or cur is None:
            continue
        if ln.startswith('### '):  # Who is guiding / Notes and honest gaps
            cur = None
            continue
        m = re.match(r'\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|\s*([^|]+)\|\s*([^|]+)\|', ln)
        if not m:
            continue
        title, url, guide_cell, length = m.groups()
        sec, length_txt = parse_length(length)
        guide, host = split_guide(guide_cell)
        thumb = None
        if MANIFEST is not None:
            row = MANIFEST.get(str(len(sessions)))
            if row:
                thumb = row['generated_file']
        if thumb is None:
            thumb = ART
        sessions.append({
            'title': title.strip(),
            'practice_type': cur[0],
            'practice_label': cur[1],
            'duration_minutes': round(sec / 60, 2) if sec is not None else None,
            'length_label': length_txt,
            'url': url,
            'guide': guide,
            'host': host or guide,
            'thumbnail': thumb,
        })

    # matrix
    matrix = {}
    for s in sessions:
        b = bucket(s['duration_minutes'] * 60 if s['duration_minutes'] is not None else None)
        matrix.setdefault(s['practice_type'], {}).setdefault(b, 0)
        matrix[s['practice_type']][b] += 1
    hdr = ['pt'] + [lbl for _, lbl in BUCKETS] + ['no-dur']
    print('\t'.join(hdr), file=sys.stderr)
    keys = [5, 10, 15, 20, 30, 45, '45+', None]
    for _, key, _ in SHELVES:
        row = matrix.get(key, {})
        cells = [str(row.get(k, 0)) for k in keys]
        print('\t'.join([key] + cells), file=sys.stderr)

    json.dump(sessions, sys.stdout, ensure_ascii=False, indent=1)
    print(f'\n{len(sessions)} sessions parsed', file=sys.stderr)


if __name__ == '__main__':
    main()
