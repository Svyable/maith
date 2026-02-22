import type { Question } from '../types';

export const audioEngineeringQuestions: Question[] = [
  {
    id: 40401, topic: 'audio-engineering', difficulty: 'easy',
    question: 'The Nyquist-Shannon sampling theorem states that to perfectly reconstruct an analog audio signal:',
    options: [
      'You must sample at least twice the highest frequency — CDs use 44.1 kHz because human hearing tops out at ~20 kHz',
      'One sample per cycle is sufficient',
      'Sampling rate doesn\'t matter if bit depth is high enough',
      'You need infinite samples per second',
    ],
    correctIndex: 0,
    explanation: 'Nyquist proved that a bandlimited signal can be perfectly reconstructed from samples taken at ≥2× its maximum frequency. Below this rate, aliasing occurs — high frequencies fold down and corrupt the signal.',
    realWorld: 'CD audio (44.1 kHz), professional audio (96 kHz), and telephone (8 kHz for 4 kHz bandwidth) all follow Nyquist. Anti-aliasing filters remove frequencies above Nyquist before sampling.',
    hint: 'Two samples per cycle of the highest frequency — that\'s the minimum.',
  },
  {
    id: 40402, topic: 'audio-engineering', difficulty: 'hard',
    question: 'The Fast Fourier Transform (FFT) is essential in audio because:',
    options: [
      'It converts time-domain audio signals to frequency-domain in $O(n \\log n)$ time, enabling real-time spectral analysis, EQ, and compression',
      'It makes audio files smaller by removing silence',
      'It only works on digital signals, not analog',
      'It was invented specifically for music production',
    ],
    correctIndex: 0,
    explanation: 'The FFT (Cooley-Tukey, 1965) reduces the DFT from $O(n^2)$ to $O(n \\log n)$. A 1024-point FFT takes ~10,000 operations instead of ~1,000,000, enabling real-time spectral processing.',
    realWorld: 'Every digital EQ, noise cancellation system (AirPods), Auto-Tune pitch correction, and Shazam music identification uses FFT. It\'s running billions of times per second across all devices worldwide.',
    hint: 'It turns sound waves into frequency bars — and does it fast enough for real-time use.',
  },
  {
    id: 40403, topic: 'audio-engineering', difficulty: 'sota',
    question: 'Neural audio codecs (Meta\'s EnCodec, Google\'s SoundStream) compress audio by:',
    options: [
      'Using an encoder-decoder neural network with residual vector quantization (RVQ) to represent audio at 1.5-6 kbps — 10× better than MP3 at comparable quality',
      'Simply applying MP3 compression with larger files',
      'Recording at lower sample rates',
      'Using only lossless compression techniques',
    ],
    correctIndex: 0,
    explanation: 'Neural codecs learn to compress audio into discrete tokens via RVQ: the encoder maps audio to a latent space, then multiple codebooks progressively refine the quantization. The decoder reconstructs high-fidelity audio from these tokens.',
    realWorld: 'EnCodec enables real-time voice calls at 1.5 kbps (vs. 32 kbps for Opus). It also enables text-to-speech (VALL-E, MusicGen) by treating audio as a sequence of discrete tokens — like text.',
    hint: 'A neural network learns to compress audio into tokens — the same tokens that language models can generate.',
  },
];
