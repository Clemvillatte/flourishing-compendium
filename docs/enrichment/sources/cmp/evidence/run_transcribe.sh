#!/bin/bash
set -x
cd /home/user/workspace/cmp_verify
exec > transcribe.log 2>&1
echo "=== UTC start $(date -u) ==="
python3 - <<'EOF'
import json, subprocess, wave, os
from vosk import KaldiRecognizer, Model
model = Model("vosk-model-small-en-us-0.15")
names = ["palouse-lk", "palouse-walk", "mc-mu", "mc-restful", "mc-space-feelings", "tb30"]
for k in names:
    wav = f"{k}.wav"
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", f"{k}.mp3", "-ar", "16000", "-ac", "1", wav], check=True)
    rec = KaldiRecognizer(model, 16000)
    out = []
    with wave.open(wav, "rb") as w:
        while True:
            data = w.readframes(4000)
            if len(data) == 0:
                break
            if rec.AcceptWaveform(data):
                out.append(json.loads(rec.Result()).get("text", ""))
        out.append(json.loads(rec.FinalResult()).get("text", ""))
    text = " ".join(t for t in out if t)
    with open(f"full-{k}.txt", "w") as f:
        f.write(text)
    print(f"DONE {k} words={len(text.split())} duration_sec={w.getnframes()/w.getframerate() if False else ''}", flush=True)
    os.remove(wav)
print("ALL TRANSCRIPTS DONE")
EOF
echo "=== UTC end $(date -u) ==="
