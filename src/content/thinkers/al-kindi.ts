import type { Question } from '../types';

export const alKindiQuestions: Question[] = [
  {
    id: 31710, topic: 'al-kindi', difficulty: 'easy',
    question: 'Al-Kindi (801–873) is known as the "Father of Arab Philosophy." What mathematical technique did he pioneer in cryptography?',
    options: [
      'Frequency analysis — the systematic method of breaking substitution ciphers by counting letter frequencies in ciphertext and matching them to known language statistics.',
      'The Caesar cipher — shifting each letter by a fixed number of positions in the alphabet.',
      'The Vigenère cipher — using a keyword to create a polyalphabetic substitution.',
      'Public-key cryptography — using two different keys for encryption and decryption.'
    ],
    correctIndex: 0,
    explanation: 'In his manuscript *On Deciphering Cryptographic Messages*, al-Kindi described the first known systematic method for breaking ciphers: count the frequency of each symbol in the ciphertext, then map the most frequent to the most common letter in the target language (e.g., "alif" in Arabic). This made simple substitution ciphers obsolete.',
    realWorld: 'Frequency analysis remained the primary codebreaking technique for nearly 1,000 years, until polyalphabetic ciphers (Vigenère) were developed specifically to defeat it.',
    hint: 'He realized that every language has a fingerprint — some letters appear far more often than others.',
  },
  {
    id: 31711, topic: 'al-kindi', difficulty: 'hard',
    question: 'Al-Kindi wrote *On the Use of the Indian Numerals*, helping transmit the Hindu-Arabic numeral system to the Islamic world. What made this system revolutionary compared to Roman numerals?',
    options: [
      'Positional (place-value) notation with a zero symbol — the value of each digit depends on its position, enabling compact representation of arbitrarily large numbers and efficient algorithms for arithmetic ($+, -, \\times, \\div$).',
      'The use of base-12 (duodecimal) counting, which has more divisors than base-10, making fractions simpler.',
      'The inclusion of negative numbers and a minus sign, allowing representation of debts and temperatures.',
      'The use of separate symbols for odd and even numbers, enabling faster parity-based computation.'
    ],
    correctIndex: 0,
    explanation: 'Roman numerals (MCMLXIV) are additive/subtractive — position doesn\'t determine value. Hindu-Arabic numerals use positional notation: "305" means $3 \\times 10^2 + 0 \\times 10^1 + 5 \\times 10^0$. The zero placeholder makes this possible. Al-Kindi helped transmit this system from Indian mathematicians (Brahmagupta) through the Islamic world to Europe.',
    realWorld: 'Try multiplying MCMLXIV by CDXLVII in Roman numerals — it\'s essentially impossible. Positional notation enables the standard algorithms taught in elementary school.',
    hint: 'The position of a digit tells you its value — "3" in "300" means something very different from "3" in "30."',
  },
  {
    id: 31712, topic: 'al-kindi', difficulty: 'sota',
    question: 'Al-Kindi applied mathematics to music theory. What was his key mathematical contribution to the science of sound?',
    options: [
      'He systematized the relationship between string lengths and musical intervals using integer ratios, extending Pythagorean tuning theory and classifying consonance/dissonance mathematically. He described the octave (2:1), fifth (3:2), fourth (4:3), and compound intervals as arithmetic operations on ratios.',
      'He proved that sound waves travel at a finite speed by timing thunder after lightning, deriving $v = d/t$ for sound propagation.',
      'He discovered resonance by showing that two identically tuned strings vibrate sympathetically, deriving the resonance condition $f_1 = f_2$.',
      'He constructed the first equal-tempered musical scale using $f_n = f_0 \\cdot 2^{n/12}$, dividing the octave into 12 equal semitones.'
    ],
    correctIndex: 0,
    explanation: 'Al-Kindi wrote over a dozen treatises on music theory, treating it as a branch of mathematics. He classified intervals by the simplicity of their ratios: simpler ratios (2:1, 3:2) produce more consonant sounds. He also described rhythm mathematically and linked the emotional effects of music to mathematical properties of intervals.',
    realWorld: 'The mathematical theory of musical intervals that al-Kindi systematized is still the foundation of music theory, from Western classical harmony to digital audio processing.',
    hint: 'Simple integer ratios produce beautiful harmonies — he turned this Pythagorean insight into a complete mathematical system.',
  },
];
