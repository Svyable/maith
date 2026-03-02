import type { Question } from '../types';

export const shakuntalaDeviQuestions: Question[] = [
  {
    id: 412801,
    topic: 'shakuntala-devi',
    difficulty: 'easy',
    question: 'Shakuntala Devi was called the "Human Computer." In 1980, she entered the Guinness Book of Records for:',
    options: [
      'Multiplying two 13-digit numbers in her head in 28 seconds — faster than a computer of that era',
      'Reciting pi to 10,000 decimal places from memory',
      'Solving a system of 100 simultaneous equations mentally',
      'Computing the cube root of a 20-digit number in under a minute',
    ],
    correctIndex: 0,
    explanation: 'She correctly multiplied 7,686,369,774,870 × 2,465,099,745,779 in 28 seconds at Imperial College London. The computer verification took longer than her calculation. She demonstrated that mental arithmetic could outpace machines.',
    realWorld: 'Her feats inspired research into savant abilities and mental calculation techniques. Modern mental math techniques (Vedic mathematics, Trachtenberg system) are used in competitive mathematics and educational programs worldwide.',
    hint: 'Two 13-digit numbers. 28 seconds. No pen, no paper, no calculator.',
  },
  {
    id: 412802,
    topic: 'shakuntala-devi',
    difficulty: 'hard',
    question: 'Mental calculators like Devi use techniques that parallel certain computational algorithms. Her likely method for rapid multiplication most closely resembles:',
    options: [
      'Cross-multiplication with chunking — breaking numbers into manageable pieces and combining partial products, similar to the Karatsuba algorithm\'s divide-and-conquer approach',
      'Repeated addition stored in a mental lookup table',
      'Binary conversion followed by shift-and-add operations',
      'Fourier transforms of the digit sequences',
    ],
    correctIndex: 0,
    explanation: 'Expert mental calculators chunk large numbers (e.g., 13 digits into groups of 3-4), compute partial products using memorized multiplication tables, and combine results. This mirrors Karatsuba\'s insight that multiplication can be broken into fewer sub-multiplications.',
    realWorld: 'Karatsuba\'s algorithm (1960) showed that multiplication could be faster than O(n²). This led to Schönhage-Strassen and Harvey-van der Hoeven algorithms used in cryptographic libraries and computer algebra systems.',
    hint: 'Divide a big problem into smaller ones — both human and computer strategies.',
  },
  {
    id: 412803,
    topic: 'shakuntala-devi',
    difficulty: 'sota',
    question: 'Devi also wrote one of the first books on homosexuality by an Indian author (1977). In computational neuroscience, her extraordinary abilities suggest:',
    options: [
      'Enhanced working memory and pattern recognition via atypical neural connectivity — possibly involving the intraparietal sulcus and angular gyrus regions specialized for numerical cognition',
      'A fundamentally different brain architecture with additional cortical layers',
      'Perfect eidetic memory allowing instant recall of all multiplication tables up to 1000',
      'Quantum coherence in neural microtubules enabling parallel computation',
    ],
    correctIndex: 0,
    explanation: 'Neuroimaging of mental calculation prodigies shows enhanced connectivity in parietal regions (intraparietal sulcus for quantity, angular gyrus for fact retrieval). They don\'t have "more brain" — they have better-connected numerical circuits, possibly developed through extensive practice from early childhood.',
    realWorld: 'Understanding prodigious calculation informs educational neuroscience (how to teach math better), brain-computer interfaces (decoding numerical representations), and AI (designing neural architectures for arithmetic).',
    hint: 'It\'s not about brain size — it\'s about wiring in the number-processing regions.',
  },
];
