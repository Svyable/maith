import type { Question } from '../types';

export const kirchhoffQuestions: Question[] = [
  {
    id: 14501,
    topic: 'Kirchhoffs',
    difficulty: 'easy',
    question: 'Kirchhoffs\'s principle (1883) states that a cryptographic system should be secure even if:',
    options: [
      'Everything about the system is public knowledge, except the key',
      'The attacker knows nothing about the algorithm',
      'The key is shared among multiple users',
      'The system uses a classified, proprietary algorithm',
    ],
    correctIndex: 0,
    explanation: 'Kirchhoffs argued that security must reside in the key alone, not in the secrecy of the algorithm. This principle underlies all modern cryptography: AES, RSA, and SHA are fully public algorithms.',
    realWorld: 'Open-source cryptography (OpenSSL, Signal Protocol) embodies Kirchhoffs\'s principle. "Security through obscurity" — hiding the algorithm — is considered a fundamental anti-pattern.',
    hint: 'The opposite approach — "security through obscurity" — has failed repeatedly throughout history.',
  },
  {
    id: 14502,
    topic: 'Kirchhoffs',
    difficulty: 'hard',
    question: 'Steganography differs from cryptography in that:',
    options: [
      'It hides the existence of the message itself, not just its content',
      'It uses stronger encryption algorithms',
      'It requires quantum computers to break',
      'It was invented after cryptography',
    ],
    correctIndex: 0,
    explanation: 'Cryptography makes a message unreadable; steganography makes it invisible. Modern steganography hides data in LSBs of images, audio spectrograms, or network protocol timing. The two are often combined: encrypt then hide.',
    realWorld: 'Al-Qaeda used steganography to hide messages in online images. Digital watermarking (a form of steganography) protects intellectual property in music, film, and photography.',
    hint: 'Cryptography says "I have a secret." Steganography says "There is no secret here."',
  },
  {
    id: 14503,
    topic: 'Kirchhoffs',
    difficulty: 'sota',
    question: 'Modern neural steganography uses deep learning to:',
    options: [
      'Embed secret images inside cover images with minimal perceptual distortion, trained end-to-end',
      'Break all known encryption algorithms',
      'Generate random keys for AES encryption',
      'Detect hidden messages in satellite imagery',
    ],
    correctIndex: 0,
    explanation: 'Networks like SteganoGAN and HiDDeN train encoder-decoder pairs: the encoder hides a secret payload in a cover image, the decoder extracts it. A discriminator ensures the stego image is visually indistinguishable from the original.',
    realWorld: 'AI steganography is used for invisible watermarking of AI-generated content (C2PA standard), covert communication research, and protecting copyrighted images shared online.',
    hint: 'The encoder-decoder architecture learns to hide information where human vision is least sensitive.',
  },
];
