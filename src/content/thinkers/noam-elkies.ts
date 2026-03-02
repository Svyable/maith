import type { Question } from '../types';

export const elkiesQuestions: Question[] = [
  {
    id: 22020,
    topic: 'noam-elkies',
    difficulty: 'hard',
    question: 'Noam Elkies disproved Euler\'s conjecture for fourth powers by finding a counterexample to $a^4 + b^4 + c^4 = d^4$. What was remarkable about his approach?',
    options: [
      'He used elliptic curve theory to construct solutions systematically',
      'He performed an exhaustive computer search up to $10^{12}$',
      'He reduced it to a problem in modular arithmetic',
      'He applied the ABC conjecture conditionally',
    ],
    correctIndex: 0,
    explanation: 'Elkies mapped the problem to rational points on an elliptic curve, finding $2682440^4 + 15365639^4 + 18796760^4 = 20615673^4$, a stunning marriage of classical number theory and modern algebraic geometry.',
    realWorld: 'This technique of converting Diophantine problems to elliptic curve searches now drives modern computational number theory.',
    hint: 'Rational points on curves are a powerful tool for Diophantine equations.',
  },
  {
    id: 22021,
    topic: 'noam-elkies',
    difficulty: 'sota',
    question: 'Elkies holds the record for the largest known rank of an elliptic curve over $\\mathbb{Q}$. What is the current record rank he achieved?',
    options: [
      '28',
      '24',
      '32',
      '20',
    ],
    correctIndex: 0,
    explanation: 'Elkies discovered an elliptic curve of rank at least 28 over $\\mathbb{Q}$, the highest known. Whether ranks are unbounded remains one of the great open problems in arithmetic geometry.',
    realWorld: 'High-rank curves inform the Birch and Swinnerton-Dyer conjecture, a Millennium Prize Problem.',
    hint: 'The rank measures the number of independent rational points of infinite order.',
  },
  {
    id: 22022,
    topic: 'noam-elkies',
    difficulty: 'sota',
    question: 'Elkies became the youngest tenured professor at Harvard at age 26. His work on lattices includes proving optimality of which sphere packing?',
    options: [
      'He contributed key modular form techniques used in Viazovska\'s $E_8$ proof',
      'He proved the $D_4$ lattice is optimal in 4 dimensions',
      'He showed the Leech lattice is the densest in 24 dimensions',
      'He proved the FCC lattice is optimal in 3 dimensions',
    ],
    correctIndex: 0,
    explanation: 'Elkies\'s expertise in modular forms and lattice theory contributed techniques later used in the resolution of the sphere packing problem in dimensions 8 and 24.',
    realWorld: 'Optimal sphere packings underlie error-correcting codes in 5G communications.',
    hint: 'His modular form expertise connected to a 2016 breakthrough.',
  },
];
