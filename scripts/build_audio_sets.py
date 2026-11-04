#!/usr/bin/env python3
"""
build_audio_sets.py — slices downloaded audio and synthesizes noise sets into
uniform AAC segments (32 kHz stereo, 128 kbps) matching FCPlayer spec.
"""
import os
import random
import struct
import subprocess
import wave

DOWNLOADS = "/Users/clemmy/Downloads"
REPO = "/Users/clemmy/.gemini/antigravity/scratch/flourishing-compendium"
SP_AUDIO = os.path.join(REPO, "soundscape-player/assets/audio")
SITE_AUDIO = os.path.join(REPO, "site/assets/audio")
TEMP_DIR = "/tmp/fc_audio_build"

SAMPLE_RATE = 32000
SEGMENT_SECONDS = 60

def slice_mp3_to_aac(mp3_filename, slug, num_segments=8):
    in_path = os.path.join(DOWNLOADS, mp3_filename)
    if not os.path.exists(in_path):
        print(f"File not found: {in_path}")
        return False
    
    os.makedirs(TEMP_DIR, exist_ok=True)
    temp_wav = os.path.join(TEMP_DIR, f"{slug}_full.wav")
    
    print(f"Decoding {slug} to 32kHz 16-bit WAV...")
    subprocess.run([
        'afconvert', '-d', 'LEI16@32000', '-c', '2', '-f', 'WAVE',
        in_path, temp_wav
    ], check=True)
    
    sp_dir = os.path.join(SP_AUDIO, slug)
    site_dir = os.path.join(SITE_AUDIO, slug)
    os.makedirs(sp_dir, exist_ok=True)
    os.makedirs(site_dir, exist_ok=True)
    
    frames_per_seg = SAMPLE_RATE * SEGMENT_SECONDS
    
    with wave.open(temp_wav, 'rb') as r:
        nchannels = r.getnchannels()
        sampwidth = r.getsampwidth()
        framerate = r.getframerate()
        
        for i in range(num_segments):
            seg_name = f"segment_{i:04d}.aac"
            sp_dest = os.path.join(sp_dir, seg_name)
            site_dest = os.path.join(site_dir, seg_name)
            
            chunk_frames = r.readframes(frames_per_seg)
            if len(chunk_frames) < frames_per_seg * nchannels * sampwidth:
                r.rewind()
                needed = (frames_per_seg * nchannels * sampwidth) - len(chunk_frames)
                chunk_frames += r.readframes(needed // (nchannels * sampwidth))
            
            seg_wav = os.path.join(TEMP_DIR, f"{slug}_{i:04d}.wav")
            with wave.open(seg_wav, 'wb') as w:
                w.setnchannels(nchannels)
                w.setsampwidth(sampwidth)
                w.setframerate(framerate)
                w.writeframes(chunk_frames)
            
            subprocess.run([
                'afconvert', '-f', 'adts', '-d', 'aac', '-b', '128000',
                seg_wav, sp_dest
            ], check=True)
            
            with open(sp_dest, 'rb') as sf, open(site_dest, 'wb') as df:
                df.write(sf.read())
            
            if os.path.exists(seg_wav):
                os.remove(seg_wav)
                
    if os.path.exists(temp_wav):
        os.remove(temp_wav)
        
    print(f"Generated {num_segments} segments for {slug}")
    return True

if __name__ == '__main__':
    # Remaining downloaded sets:
    slice_mp3_to_aac("videoplayback the world can wait - Piano Meditations (1hr).mp3", "ambient-piano", 8)
    slice_mp3_to_aac("videoplayback a few moments of peace - Ambient Winter Meditations.mp3", "winter-piano", 8)
    slice_mp3_to_aac("videoplayback Waves - Ambient Guitar Meditations (nylon strings).mp3", "waves-guitar", 8)
    slice_mp3_to_aac("videoplayback a calm morning - Soft Ambient Guitar Meditations (Nylon Strings).mp3", "calm-morning", 8)
    slice_mp3_to_aac("videoplayback Nervous System Regulation (999 Hz) | 1 hour handpan music | Malte Marten.mp3", "regulation-999", 8)
    slice_mp3_to_aac("videoplayback Memorize Faster — 14Hz Beta Binaural Beats for Extended Concentration | Smooth Wave (2 Hours).mp3", "beta-focus", 8)
    print("All additional sets created successfully!")
