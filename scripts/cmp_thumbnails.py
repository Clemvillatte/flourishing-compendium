#!/usr/bin/env python3
"""Generate the 640x400 labeled session thumbnails for the CMP practice gallery.

Reads academy/thumbnails-manifest.json and (re)generates any thumbnail whose
target file under site/ is missing, downloading the public-domain source image
from its source_image_url when no local copy is supplied. Layout matches the
existing CMP thumbnails (measured from s10.jpg):

- 640x400 JPEG, source art cover-cropped (scale to fill, center crop)
- dark scrim gradient over the bottom third (transparent ~y=230, strong at bottom)
- practice label: uppercase, gold (211,173,78), DejaVu Serif Bold ~30px, at (30, ~297)
- time label: length_label, cream (245,239,223), DejaVu Serif Bold ~44px, at (30, ~332)

Usage: python3 scripts/cmp_thumbnails.py [--local NAME=PATH ...]
"""
import json
import sys
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

Image.MAX_IMAGE_PIXELS = None

FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
GOLD = (211, 173, 78)
CREAM = (245, 239, 223)
SCRIM = (24, 22, 15)
W, H = 640, 400


def cover_crop(im):
    im = im.convert('RGB')
    sw, sh = im.size
    scale = max(W / sw, H / sh)
    nw, nh = round(sw * scale), round(sh * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    x, y = (nw - W) // 2, (nh - H) // 2
    return im.crop((x, y, x + W, y + H))


def add_scrim(base):
    scrim = Image.new('L', (1, H))
    for y in range(H):
        if y < 230:
            a = 0
        else:
            a = int(225 * ((y - 230) / (H - 230)) ** 1.4)
        scrim.putpixel((0, y), a)
    scrim = scrim.resize((W, H))
    dark = Image.new('RGB', (W, H), SCRIM)
    base.paste(dark, (0, 0), scrim)
    return base


def render(source_im, practice_label, length_label):
    base = add_scrim(cover_crop(source_im))
    d = ImageDraw.Draw(base)
    f_small = ImageFont.truetype(FONT, 30)
    f_big = ImageFont.truetype(FONT, 44)
    d.text((30, 292), practice_label.upper(), font=f_small, fill=GOLD)
    d.text((30, 328), length_label, font=f_big, fill=CREAM)
    return base


def main():
    local = {}
    args = sys.argv[1:]
    if args and args[0] == '--local':
        for a in args[1:]:
            k, v = a.split('=', 1)
            local[k] = v
    manifest = json.load(open('academy/thumbnails-manifest.json', encoding='utf-8'))
    made = 0
    for e in manifest:
        out = Path('site') / e['generated_file']
        if out.exists():
            continue
        src = local.get(e['generated_file'])
        if src:
            im = Image.open(src)
        else:
            req = urllib.request.Request(e['source_image_url'], headers={'User-Agent': 'Mozilla/5.0'})
            im = Image.open(BytesIO(urllib.request.urlopen(req, timeout=60).read()))
        render(im, e['practice_label'], e['length_label']).save(out, quality=85)
        made += 1
        print(f'made {out} from {src or e["source_image_url"]}')
    print(f'{made} thumbnails generated')


if __name__ == '__main__':
    main()
