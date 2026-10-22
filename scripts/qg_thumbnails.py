#!/usr/bin/env python3
"""Generate the Qi Gong gallery thumbnails (640x400, labeled) and the manifest.

Reads the curated 80-image assignment (docs/enrichment/sources/qg/final_images.json),
renders site/assets/academy/sessions/q000.jpg ... q079.jpg per the CMP style spec
(cover-cropped PD art, dark bottom scrim, gold practice label ~30px DejaVu Serif
Bold at (30,297), cream length label ~44px at (30,332)), and writes
academy/thumbnails-manifest-qg.json with real source titles.

Run from the repo root:
    python3 scripts/qg_thumbnails.py
"""
import json
import os
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ASSIGN = Path('docs/enrichment/sources/qg/final_images.json')
OUTDIR = Path('site/assets/academy/sessions')
MANIFEST = Path('academy/thumbnails-manifest-qg.json')

GOLD = (211, 173, 78)
CREAM = (245, 239, 223)
SCRIM = (39, 35, 26)
W, H = 640, 400


def find_font(size, bold=True):
    cands = []
    for root in ('/usr/share/fonts', '/usr/local/share/fonts', os.path.expanduser('~/.fonts')):
        if not os.path.isdir(root):
            continue
        for dirpath, _, files in os.walk(root):
            for f in files:
                fl = f.lower()
                if 'dejavuserif' in fl and (bold and ('bold' in fl or fl.endswith('serif-bold.ttf'))):
                    cands.append(os.path.join(dirpath, f))
                elif 'dejavuserif' in fl and not bold:
                    cands.append(os.path.join(dirpath, f))
    if not cands:
        raise SystemExit('DejaVu Serif not found')
    return ImageFont.truetype(cands[0], size)


def cover_crop(im):
    iw, ih = im.size
    scale = max(W / iw, H / ih)
    nw, nh = round(iw * scale), round(ih * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    x, y = (nw - W) // 2, (nh - H) // 2
    return im.crop((x, y, x + W, y + H))


def scrim(im):
    ov = Image.new('L', (1, H), 0)
    px = ov.load()
    for y in range(H):
        if y < 240:
            v = 0
        else:
            t = (y - 240) / (H - 240)
            v = int(235 * (t ** 1.6))
        px[0, y] = v
    alpha = ov.resize((W, H))
    dark = Image.new('RGB', (W, H), SCRIM)
    return Image.composite(dark, im, alpha)


def label(im, practice_label, length_label):
    d = ImageDraw.Draw(im)
    f1 = find_font(30)
    f2 = find_font(44)
    d.text((30, 297), practice_label.upper(), font=f1, fill=GOLD)
    d.text((30, 332), length_label, font=f2, fill=CREAM)
    return im


def main():
    rows = json.load(ASSIGN.open())
    OUTDIR.mkdir(parents=True, exist_ok=True)
    manifest = []
    for i, row in enumerate(rows):
        src = Image.open(row['file']).convert('RGB')
        im = cover_crop(src)
        im = scrim(im)
        im = label(im, row['practice_label'], row['length_label'])
        out = OUTDIR / f'q{i:03d}.jpg'
        im.save(out, 'JPEG', quality=85)
        manifest.append({
            'session_index': i,
            'title': row['title'],
            'practice_type': row['practice_type'],
            'practice_label': row['practice_label'],
            'length_label': row['length_label'],
            'generated_file': f'assets/academy/sessions/q{i:03d}.jpg',
            'source_image_url': row['source_image_url'],
            'source_title': row['source_title'],
        })
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=1))
    print(f'{len(manifest)} thumbnails written to {OUTDIR}, manifest at {MANIFEST}')


if __name__ == '__main__':
    main()
