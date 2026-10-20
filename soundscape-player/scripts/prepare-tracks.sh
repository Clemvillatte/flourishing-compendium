#!/usr/bin/env bash
# prepare-tracks.sh — turn any folder of audio files into an FCPlayer set.
#
# Usage:
#   scripts/prepare-tracks.sh <input-dir> [output-dir]
#
# - Collects audio files from the input dir, sorts them globally by name
#   (NOT grouped by extension), and writes them into the output dir.
# - With ffmpeg: converts each to a uniform AAC segment
#   (32 kHz stereo, ~128 kbps), zero-padded as segment_0000.aac, …
# - Without ffmpeg: copies each file as-is with a zero-padded base name and
#   its ORIGINAL extension (format must be browser-decodable: AAC/MP3/WAV/
#   OGG/M4A) and prints a segments[] mount config listing the actual files.
# - Prints the exact FCPlayer.mount() config to paste into the page.
#
# Notes:
# - Order is filename order — name your files so alphabetical sort matches
#   the intended play order.
# - The last segment carries the loop fade-out; the first should start gently.
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "usage: $0 <input-dir> [output-dir]" >&2
  exit 1
fi

IN="$1"
OUT="${2:-assets/audio/segments}"

if [ ! -d "$IN" ]; then
  echo "error: input dir not found: $IN" >&2
  exit 1
fi

mkdir -p "$OUT"

# collect audio files, sorted globally by name (case-insensitive)
mapfile -t FILES < <(find "$IN" -maxdepth 1 -type f \
  \( -iname '*.aac' -o -iname '*.m4a' -o -iname '*.mp3' \
     -o -iname '*.wav' -o -iname '*.ogg' -o -iname '*.flac' \) | sort -f)

if [ "${#FILES[@]}" -eq 0 ]; then
  echo "error: no audio files found in $IN" >&2
  exit 1
fi

HAVE_FFMPEG=0
command -v ffmpeg >/dev/null 2>&1 && HAVE_FFMPEG=1
if [ "$HAVE_FFMPEG" = "0" ]; then
  echo "note: ffmpeg not found — files will be copied as-is (extensions preserved)."
fi

i=0
SEG_LIST=()
for f in "${FILES[@]}"; do
  if [ "$HAVE_FFMPEG" = "1" ]; then
    name=$(printf 'segment_%04d.aac' "$i")
    ffmpeg -y -v error -i "$f" -c:a aac -b:a 128k -ar 32000 -ac 2 "$OUT/$name"
    SEG_LIST+=("\"$name\"")
  else
    ext="${f##*.}"
    name=$(printf 'segment_%04d.%s' "$i" "$ext")
    cp "$f" "$OUT/$name"
    SEG_LIST+=("\"$name\"")
  fi
  i=$((i + 1))
done

echo "wrote $i segment(s) to $OUT"
echo ""
echo "Paste this into the page (adjust title/subtitle and the dir path):"
echo ""
if [ "$HAVE_FFMPEG" = "1" ]; then
  cat <<EOF
FCPlayer.mount({
  title: 'Focus Soundscape',
  subtitle: '$i tracks · study set',
  source: { dir: 'assets/audio/$(basename "$OUT")/', pattern: 'segment_%04d.aac', count: $i }
});
EOF
else
  echo "FCPlayer.mount({"
  echo "  title: 'Focus Soundscape',"
  echo "  subtitle: '$i tracks · study set',"
  echo "  segments: ["
  for s in "${SEG_LIST[@]}"; do echo "    'assets/audio/$(basename "$OUT")/${s//\"/}',"; done
  echo "  ]"
  echo "});"
fi
