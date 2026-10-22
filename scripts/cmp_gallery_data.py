#!/usr/bin/env python3
"""Derive the deg-cmp practice-session dataset from the CMP1 wiki page tables.

The CMP1 page (academy/CMP1 — *.md, an Academy-owned file outside the
worker content/ tree) is the canonical
human-editable source for the practice gallery. This script parses its seven
session tables into the structured fields the in-app gallery needs
(practice_type, duration_minutes, url, guide, host, thumbnail) and prints the
result as JSON on stdout, plus the practice-type x time matrix on stderr.

Run from the repo root:
    python3 scripts/cmp_gallery_data.py > /tmp/sessions.json

Thumbnail policy (owner change 3, revised): every session uses a generated
640x400 image in site/assets/academy/sessions/ with the practice type and
time burned into the pixels. The images are public-domain artworks (and
period photographs) curated per session from the Public Domain Image Archive;
academy/thumbnails-manifest.json records each session's source image URL,
source title, and generated file, and is the source of truth for the mapping.
This script reads that manifest; rows missing from the manifest fall back to
the per-practice-type artwork in site/assets/academy/.

Rows with no single-session duration (multi-lesson courses, paid academies)
carry duration_minutes: null and keep their printed label; they appear in the
gallery only when the time filter is "All".
"""
import json
import re
import sys
from pathlib import Path

PAGE = Path('academy/CMP1 — Contemplative & Mental Practices — A Year of Practice.md')

MANIFEST = None
_mp = Path('academy/thumbnails-manifest.json')
if _mp.exists():
    MANIFEST = {str(e['session_index']): e for e in json.load(_mp.open())}

# shelf heading -> practice_type key (stable ids used by the app)
SHELVES = [
    ('### Focused attention: the breath (FAM)', 'fam', 'Focused attention (breath)'),
    ('### Open monitoring (OMM)', 'omm', 'Open monitoring'),
    ('### Loving-kindness and compassion (LKM)', 'lkm', 'Loving-kindness'),
    ('### Body scan, deep rest, and NSDR', 'bodyscan', 'Body scan / deep rest / NSDR'),
    ('### Daoist stillness', 'daoist', 'Daoist stillness'),
    ('### Zen guided sitting', 'zen', 'Zen guided sitting'),
    ('### Walking meditation', 'walking', 'Walking meditation'),
]

# per-practice-type artwork (existing files in site/assets/academy/)
ART = {
    'fam': 'assets/academy/mind.jpg',
    'omm': 'assets/academy/contemplative.jpg',
    'lkm': 'assets/academy/relational.jpg',
    'bodyscan': 'assets/academy/wellbeing.jpg',
    'daoist': 'assets/academy/qigong.jpg',
    'zen': 'assets/academy/hero.jpg',
    'walking': 'assets/academy/philosophy.jpg',
}

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
    return None, txt  # courses / structured programs


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
    shelf_idx = {h: i for i, (h, _, _) in enumerate(SHELVES)}
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
        if ln.startswith('### '):  # next section (Who is guiding etc.)
            cur = None
            continue
        m = re.match(r'\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|\s*([^|]+)\|\s*([^|]+)\|', ln)
        if not m:
            continue
        title, url, guide_cell, length = m.groups()
        sec, length_txt = parse_length(length)
        guide, host = split_guide(guide_cell)
        yid = yt_id(url)
        thumb = None
        if MANIFEST is not None:
            row = MANIFEST.get(str(len(sessions)))
            if row:
                thumb = row['generated_file']
        if thumb is None:
            thumb = f'https://i.ytimg.com/vi/{yid}/mqdefault.jpg' if yid else ART[cur[0]]
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
