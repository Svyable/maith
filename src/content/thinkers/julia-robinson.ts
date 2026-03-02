import type { Question } from '../types';

export const robinsonQuestions: Question[] = [
  {
    id: 20212, topic: 'julia-robinson', difficulty: 'easy',
    question: 'Julia Robinson made foundational contributions to the solution of which of Hilbert\'s 23 problems?',
    options: ['Hilbert\'s 10th problem (Diophantine equations)', 'Hilbert\'s 1st (Continuum Hypothesis)', 'Hilbert\'s 3rd (Dehn\'s theorem)', 'Hilbert\'s 8th (Riemann Hypothesis)'],
    correctIndex: 0,
    explanation: 'Robinson\'s work was crucial to proving that Hilbert\'s 10th problem — deciding whether a Diophantine equation has integer solutions — is undecidable.',
    realWorld: 'Undecidability results like this define the fundamental limits of what algorithms can solve, impacting cryptography and automated theorem proving.',
    hint: 'This problem asks whether there is an algorithm to determine if polynomial equations have integer solutions.',
  },
  {
    id: 20213, topic: 'julia-robinson', difficulty: 'hard',
    question: 'The MRDP theorem (resolving Hilbert\'s 10th) was completed by Yuri Matiyasevich building on Robinson\'s work. What does MRDP stand for?',
    options: ['Matiyasevich-Robinson-Davis-Putnam', 'Mathematical Recursion Decision Procedure', 'Modular Recursive Diophantine Process', 'Multi-Resolution Decision Problem'],
    correctIndex: 0,
    explanation: 'The MRDP theorem (1970) showed that every recursively enumerable set is Diophantine, proving no algorithm can decide all Diophantine equations.',
    realWorld: 'This undecidability result is analogous to Turing\'s halting problem — there are inherent limits to what computers can decide.',
    hint: 'Named after four mathematicians whose combined work over decades solved the problem.',
  },
  {
    id: 20214, topic: 'julia-robinson', difficulty: 'sota',
    question: 'Robinson was the first woman elected to which division of the National Academy of Sciences?',
    options: ['Mathematics section', 'Physics section', 'Engineering section', 'Computer Science section'],
    correctIndex: 0,
    explanation: 'In 1976, Robinson became the first female mathematician elected to the National Academy of Sciences, and later the first woman president of the American Mathematical Society.',
    realWorld: 'Her election broke barriers and paved the way for women in mathematical research institutions worldwide.',
    hint: 'She was elected to the NAS in the specific section matching her discipline.',
  },
];
