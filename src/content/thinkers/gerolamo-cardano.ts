import type { Question } from '../types';

export const cardanoQuestions: Question[] = [
  {
    id: 31035,
    topic: 'cardano',
    difficulty: 'easy',
    question: 'Gerolamo Cardano\'s magnum opus, *Ars Magna* (1545), is celebrated as a massive turning point in mathematical history because it contained:',
    options: [
      'The first published algebraic solutions for both cubic and quartic equations.',
      'The first rigorous geometric proof that the square root of two is irrational.',
      'The earliest complete formulation of modern Hindu-Arabic decimal numerals.',
      'The foundational mathematical axioms that ultimately proved heliocentrism.'
    ],
    correctIndex: 0,
    explanation: 'Ars Magna ("The Great Art") was the first major algebra text of the Renaissance. It revealed the highly sought-after formulas for finding the roots of equations containing x^3 (cubic) and x^4 (quartic).',
    realWorld: 'Finding the roots of complex equations is fundamental to modern control theory, robotics, and calculating vibrational frequencies in engineering.',
    hint: 'It solved equations where the unknown variable is raised to the third and fourth powers.',
  },
  {
    id: 31036,
    topic: 'cardano',
    difficulty: 'hard',
    question: 'Cardano’s publication of the cubic formula sparked one of the most bitter feuds in mathematical history because he:',
    options: [
      'Broke a sacred oath to Niccolò Tartaglia, who had revealed the secret cubic solution to him in confidence.',
      'Plagiarized the entire manuscript from an unpublished Persian text written by Omar Khayyam centuries prior.',
      'Falsified his data, claiming the formula worked for all real numbers when it only solved a narrow subset.',
      'Insulted the Pope in the book\'s dedication, leading to his immediate excommunication and house arrest.'
    ],
    correctIndex: 0,
    explanation: 'Tartaglia had independently discovered the cubic solution but kept it a closely guarded secret to win mathematical duels. Cardano begged for it, swore a Christian oath to never publish it, and then published it anyway after finding out Scipione del Ferro had discovered it first.',
    realWorld: 'This highlights the tension between keeping intellectual property as a "trade secret" versus publishing it for global scientific advancement.',
    hint: 'He promised a fellow mathematician he would take the secret to his grave.',
  },
  {
    id: 31037,
    topic: 'cardano',
    difficulty: 'sota',
    question: 'Cardano encountered the "Casus Irreducibilis" when solving certain cubic equations. What unprecedented mathematical leap did this force him to make?',
    options: [
      'He had to compute with square roots of negative numbers to find perfectly valid real-number solutions.',
      'He had to utilize infinitely repeating decimal fractions, inventing the concept of the mathematical limit.',
      'He was forced to abandon algebra entirely and rely on purely geometric compass-and-straightedge proofs.',
      'He had to introduce the concept of non-commutative matrices to resolve the overlapping algebraic roots.'
    ],
    correctIndex: 0,
    explanation: 'In the "irreducible case," Cardano\'s formula produced intermediate terms containing the square root of a negative number, even when all three final roots were purely real integers. Cardano called these numbers "fictitious," but used them anyway, marking the birth of complex numbers.',
    realWorld: 'Complex numbers (containing the imaginary unit i) are now the absolute foundation of quantum mechanics and electrical engineering.',
    hint: 'He had to use numbers that were considered logically impossible at the time to arrive at a normal answer.',
  },
  {
    id: 31038,
    topic: 'cardano',
    difficulty: 'hard',
    question: 'Decades before Pascal and Fermat formalized the field, Cardano wrote *Liber de Ludo Aleae* (Book on Games of Chance). What was his primary motivation?',
    options: [
      'He was a degenerate gambler trying to calculate the exact mathematical odds of winning dice games.',
      'He was commissioned by the Italian banking guild to calculate compound interest and insurance risks.',
      'He wanted to prove philosophically that human free will could overcome mathematically deterministic fate.',
      'He was attempting to model the random epidemiological spread of the bubonic plague across rural Italy.'
    ],
    correctIndex: 0,
    explanation: 'Cardano was a chronic gambler who frequently played dice, cards, and chess to support himself. He applied rigorous mathematical logic to dice combinations to systematically cheat and beat his opponents.',
    realWorld: 'His gambling habits literally birthed the mathematical field of probability, which now governs everything from Wall Street derivatives to machine learning algorithms.',
    hint: 'He wrote the book to figure out how to take other people\'s money at the table.',
  },
  {
    id: 31039,
    topic: 'cardano',
    difficulty: 'hard',
    question: 'Beyond mathematics, Cardano made significant contributions to cryptography by inventing the "Cardan Grille." How did this cipher operate?',
    options: [
      'It used a sheet of paper with strategically cut-out holes to reveal a hidden message within ordinary text.',
      'It employed a series of continuously rotating wooden disks to map one alphabetical character to another.',
      'It translated standard Latin letters into a complex sequence of numerical coordinates mapped to a grid.',
      'It utilized invisible chemical inks that only revealed the encoded message when exposed to extreme heat.'
    ],
    correctIndex: 0,
    explanation: 'The Cardan Grille is a steganographic technique. The sender places a mask with cut-out holes over a blank paper, writes the secret message in the holes, and then removes the mask and fills the rest of the paper with an innocent-sounding letter.',
    realWorld: 'Because the resulting letter looks completely normal, it evades suspicion entirely—a principle still used in modern digital steganography (hiding data inside image pixels).',
    hint: 'You place a physical mask over the document to extract the real words.',
  }
];