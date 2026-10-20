#!/usr/bin/env bash
# prepare-tracks.sh — turn any folder of audio files into an FCPlayer set.
#
# Usage:
#   scripts/prepare-tracks.sh <input-dir> [output-dir] [count]
#
# - Sorts the input files by name, converts each to a uniform AAC segment
#   (32 kHz stereo, ~128 kbps) with ffmpeg, and writes them zero-padded as
#   segment_0000.aac, segment_0001.aac, … into the output dir.
# - If ffmpeg is not available, files are copied as-is (format must then be
#   browser-decodable: AAC/MP3/WAV/OGG/M4A).
# - Prints the exact FCPlayer.mount() config to paste into the page.
#
# Notes:
# - Order is filename order — name your files so alphabetical sort matches
#   the intended play order.
# - The last segment carries the loop fade-out; the first should start gently.
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "usage: $0 <input-dir> [output-dir] [count]" >&2
  exit 1
fi

IN="$1"
OUT="${2:-assets/audio/segments}"
COUNT="${3:-}"

if [ ! -d "$IN" ]; then
  echo "error: input dir not found: $IN" >&2
  exit 1
fi

mkdir -p "$OUT"

# collect audio files sorted by name
shopt -s nullglob nocaseglob
FILES=()
for f in "$IN"/*.aac "$IN"/*.m4a "$IN"/*.mp3 "$IN"/*.wav "$IN"/*.ogg "$IN"/*.flac; do
  FILES+=("$f")
done
shopt -u nullglob nocaseglob

if [ "${#FILES[@]}" -eq 0 ]; then
  echo "error: no audio files found in $IN" >&2
  exit 1
fi

N="${COUNT:-${#FILES[@]}}"
if [ "$N" -gt "${#FILES[@]}" ]; then N="${#FILES[@]}"; fi

HAVE_FFMPEG=0
command -v ffmpeg >/dev/null 2>&1 && HAVE_FFMPEG=1

i=0
for f in "${FILES[@]}"; do
  [ "$i" -ge "$N" ] && break
  name=$(printf 'segment_%04d.aac' "$i")
  if [ "$HAVE_FFMPEG" = "1" ]; then
    ffmpeg -y -v error -i "$f" -c:a aac -b:a 128k -ar 32000 -ac 2 "$OUT/$name"
  else
    # no ffmpeg: copy as-is; extension must stay browser-decodable
    cp "$f" "$OUT/$name"
    echo "note: ffmpeg not found — copied $f as-is (format must be browser-decodable)"
  fi
  i=$((i + 1))
done

echo "wrote $i segment(s) to $OUT"
echo ""
echo "Paste this into the page (adjust title/subtitle and the dir path):"
echo ""
cat <<EOF
FCPlayer.mount({
  title: 'Focus Soundscape',
  subtitle: '$((i)) tracks · study set',
  source: { dir: 'assets/audio/$(basename "$OUT")/', pattern: 'segment_%04d.aac', count: $i }
});
EOF
