#!/usr/bin/env python3
"""
build_audio_sets.py — slices downloaded audio and synthesizes noise sets into
uniform 16x60s AAC segments (32 kHz stereo, 128 kbps) matching FCPlayer spec.
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
NUM_SEGMENTS = 16

def slice_mp3_to_aac(mp3_filename, slug, num_segments=16):
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
            
            # Read chunk
            chunk_frames = r.readframes(frames_per_seg)
            if len(chunk_frames) < frames_per_seg * nchannels * sampwidth:
                # If audio is shorter, loop or rewind from beginning
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
            
            # Copy byte-identical to site
            with open(sp_dest, 'rb') as sf, open(site_dest, 'wb') as df:
                df.write(sf.read())
            
            if os.path.exists(seg_wav):
                os.remove(seg_wav)
                
    if os.path.exists(temp_wav):
        os.remove(temp_wav)
        
    print(f"Generated {num_segments} segments for {slug}")
    return True

def generate_noise_set(slug, kind, num_segments=16):
    sp_dir = os.path.join(SP_AUDIO, slug)
    site_dir = os.path.join(SITE_AUDIO, slug)
    os.makedirs(sp_dir, exist_ok=True)
    os.makedirs(site_dir, exist_ok=True)
    os.makedirs(TEMP_DIR, exist_ok=True)
    
    frames_per_seg = SAMPLE_RATE * SEGMENT_SECONDS
    print(f"Synthesizing {kind} noise set ({num_segments}x60s)...")
    
    # State for filters across segments for continuous evolution
    # Brown state
    brown_l, brown_r = 0.0, 0.0
    # Pink state (Paul Kellet 3-pole/6-pole)
    b0_l = b1_l = b2_l = b3_l = b4_l = b5_l = b6_l = 0.0
    b0_r = b1_r = b2_r = b3_r = b4_r = b5_r = b6_r = 0.0
    
    for i in range(num_segments):
        seg_name = f"segment_{i:04d}.aac"
        sp_dest = os.path.join(sp_dir, seg_name)
        site_dest = os.path.join(site_dir, seg_name)
        seg_wav = os.path.join(TEMP_DIR, f"{slug}_{i:04d}.wav")
        
        with wave.open(seg_wav, 'wb') as w:
            w.setnchannels(2)
            w.setsampwidth(2)
            w.setframerate(SAMPLE_RATE)
            
            frames = bytearray()
            for _ in range(frames_per_seg):
                wl = random.uniform(-1.0, 1.0)
                wr = random.uniform(-1.0, 1.0)
                
                if kind == 'white':
                    sl = int(wl * 0.4 * 32767)
                    sr_val = int(wr * 0.4 * 32767)
                elif kind == 'pink':
                    # Paul Kellet filter
                    b0_l = 0.99886 * b0_l + wl * 0.0555179
                    b1_l = 0.99332 * b1_l + wl * 0.0750759
                    b2_l = 0.96900 * b2_l + wl * 0.1538520
                    b3_l = 0.86650 * b3_l + wl * 0.3104856
                    b4_l = 0.55000 * b4_l + wl * 0.5329522
                    b5_l = -0.7616 * b5_l - wl * 0.0168980
                    pink_l = b0_l + b1_l + b2_l + b3_l + b4_l + b5_l + b6_l + wl * 0.5362
                    b6_l = wl * 0.115926
                    
                    b0_r = 0.99886 * b0_r + wr * 0.0555179
                    b1_r = 0.99332 * b1_r + wr * 0.0750759
                    b2_r = 0.96900 * b2_r + wr * 0.1538520
                    b3_r = 0.86650 * b3_r + wr * 0.3104856
                    b4_r = 0.55000 * b4_r + wr * 0.5329522
                    b5_r = -0.7616 * b5_r - wr * 0.0168980
                    pink_r = b0_r + b1_r + b2_r + b3_r + b4_r + b5_r + b6_r + wr * 0.5362
                    b6_r = wr * 0.115926
                    
                    sl = int(max(min(pink_l * 0.18, 0.95), -0.95) * 32767)
                    sr_val = int(max(min(pink_r * 0.18, 0.95), -0.95) * 32767)
                elif kind == 'brown':
                    brown_l = (brown_l + 0.02 * wl) / 1.02
                    brown_r = (brown_r + 0.02 * wr) / 1.02
                    sl = int(max(min(brown_l * 3.5, 0.95), -0.95) * 32767)
                    sr_val = int(max(min(brown_r * 3.5, 0.95), -0.95) * 32767)
                
                frames.extend(struct.pack('<hh', sl, sr_val))
            w.writeframes(frames)
            
        subprocess.run([
            'afconvert', '-f', 'adts', '-d', 'aac', '-b', '128000',
            seg_wav, sp_dest
        ], check=True)
        
        with open(sp_dest, 'rb') as sf, open(site_dest, 'wb') as df:
            df.write(sf.read())
            
        if os.path.exists(seg_wav):
            os.remove(seg_wav)
            
    print(f"Generated {num_segments} segments for {slug}")
    return True

if __name__ == '__main__':
    # 1. Music sets
    slice_mp3_to_aac("videoplayback changing pace - Ambient Piano Meditations (soft felt).mp3", "felt-piano", 16)
    slice_mp3_to_aac("videoplayback the world can wait - Piano Meditations (1hr).mp3", "piano-meditations", 16)
    slice_mp3_to_aac("videoplayback Dawn - Sunrise Guitar Meditations (Nylon Strings).mp3", "nylon-guitar", 16)
    slice_mp3_to_aac("videoplayback Waves - Ambient Guitar Meditations (nylon strings).mp3", "waves-guitar", 16)
    slice_mp3_to_aac("videoplayback S. L. Weiss - London Suite IV - Evangelina Mascardi, baroque lute.mp3", "baroque-lute", 16)
    slice_mp3_to_aac("videoplayback Still Waters | Calm Handpan Music for Deep Rest & Inner Peace (2 hours) | Changeofcolours.mp3", "still-waters", 16)
    
    # 2. Noise sets
    generate_noise_set("brown-noise", "brown", 16)
    generate_noise_set("pink-noise", "pink", 16)
    generate_noise_set("white-noise", "white", 16)
    print("All audio sets created successfully!")
