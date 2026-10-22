#!/bin/bash
# HISTORICAL COMMAND RECORD, not a runnable reproducer: this file
# documents the commands used on 2026-10-22 to produce evidence/
# full-*.txt. The download and ffprobe commands were executed
# interactively; the transcription itself was executed via
# run_transcribe.sh (preserved unchanged; its log is transcribe-run.log,
# whose 13:29:25 to 13:32:52 UTC timestamps are the transcription
# runner's timestamps, not timestamps of this assembled record).
# The runner also cds to /home/user/workspace/cmp_verify, its
# execution-time working directory; adjust that path to re-run.

# set -e   # (documentation-only file; commands below are the historical record)
# cd "$(dirname "$0")/../work" 2>/dev/null || cd .

UA="Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0"

# 1. Download the recordings (URLs as printed in the CMP1 rows; tb30 URL
#    is the libsyn URL printed in the saved source page tb30.html).
curl -sL -A "$UA" -o tb30.mp3 "https://traffic.libsyn.com/secure/tarabrach/2017-08-02-Meditation-Open-Awareness-Relaxing-Back-30-TaraBrach.mp3"
curl -sL -A "$UA" -o palouse-lk.mp3 "https://palousemindfulness.com/disks/lovingkindness.mp3"
curl -sL -A "$UA" -o palouse-walk.mp3 "https://palousemindfulness.com/disks/walking-meditation.mp3"
curl -sL -A "$UA" -o mc-mu.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Mu-meditation-intro.mp3"
curl -sL -A "$UA" -o mc-restful.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Restful-awareness.mp3"
curl -sL -A "$UA" -o mc-space-feelings.mp3 "https://www.mountaincloud.org/wp-content/uploads/2020/08/Space-for-feelings.mp3"

# 2. Durations (ffprobe), all matching the committed ffprobe-durations.txt:
#   tb30 1800.007000 s, palouse-lk 797.094000 s, palouse-walk 378.758685 s,
#   mc-mu 849.408000 s, mc-restful 812.832000 s, mc-space-feelings 611.304000 s
for f in tb30 palouse-lk palouse-walk mc-mu mc-restful mc-space-feelings; do
  ffprobe -v error -show_entries format=duration -of default=nw=1 "$f.mp3"
done

# 3. Vosk model (small en-us 0.15)
curl -sL -o vosk-model-small-en-us-0.15.zip \
  https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip
python3 -c "import zipfile; zipfile.ZipFile('vosk-model-small-en-us-0.15.zip').extractall('.')"

# 4. Full transcription over the entire file (no time limit). NOT
#    executed by this record: the runner is preserved in run_transcribe.sh
#    (historical execution record; cds to /home/user/workspace/cmp_verify,
#    the working directory used at execution time). The execution log is
#    transcribe-run.log.
#    Per file: ffmpeg -y -loglevel error -i <mp3> -ar 16000 -ac 1 <wav>
#    then vosk KaldiRecognizer(model, 16000) fed all frames of the wav.
# cd "$(dirname "$0")" && bash run_transcribe.sh   # not run by this record
