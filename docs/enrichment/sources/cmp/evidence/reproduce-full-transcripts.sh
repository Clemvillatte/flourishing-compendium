#!/bin/bash
# Exact reproduction commands for evidence/full-*.txt (complete vosk
# transcripts of the six previously sampled CMP recordings).
# Executed 2026-10-22, 13:29:25 to 13:32:52 UTC (see transcribe-run.log).
# Environment: python3 3.14, vosk pip package, vosk-model-small-en-us-0.15
# from https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip

set -e
cd "$(dirname "$0")/../work" 2>/dev/null || cd .

UA="Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0"

# 1. Download the recordings (URLs as printed in the CMP1 rows; tb30 URL
#    is the libsyn URL printed in the saved source page tb30.html).
curl -sL -A "$UA" -o tb30.mp3 "https://traffic.libsyn.com/secure/tarabrach/2017-08-02-Meditation-Open-Awareness-Relaxing-Back-30-TaraBrach.mp3"
curl -sL -A "$UA" -o palouse-lk.mp3 "https://palousemindfulness.com/disks/lovingkindness.mp3"
curl -sL -A "$UA" -o palouse-walk.mp3 "https://palousemindfulness.com/disks/walking-meditation.mp3"
curl -sL -A "$UA" -o mc-mu.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Mu-meditation-intro.mp3"
curl -sL -A "$UA" -o mc-restful.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Restful-awareness.mp3"
curl -sL -A "$UA" -o mc-space-feelings.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Space-for-feelings.mp3"

# 2. Durations (ffprobe), all matching the ledger values:
#   tb30 1800.007 s, palouse-lk 797.094 s, palouse-walk 379.057 s,
#   mc-mu 713.007 s, mc-restful 901.006 s, mc-space-feelings 611.007 s
for f in tb30 palouse-lk palouse-walk mc-mu mc-restful mc-space-feelings; do
  ffprobe -v error -show_entries format=duration -of default=nw=1 "$f.mp3"
done

# 3. Vosk model (small en-us 0.15)
curl -sL -o vosk-model-small-en-us-0.15.zip \
  https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip
python3 -c "import zipfile; zipfile.ZipFile('vosk-model-small-en-us-0.15.zip').extractall('.')"

# 4. Full transcription over the entire file (no time limit). See
#    run_transcribe.sh for the exact python invocation executed; the
#    execution log is transcribe-run.log.
#    Per file: ffmpeg -y -loglevel error -i <mp3> -ar 16000 -ac 1 <wav>
#    then vosk KaldiRecognizer(model, 16000) fed all frames of the wav.
bash run_transcribe.sh
