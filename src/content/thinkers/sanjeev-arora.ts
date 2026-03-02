import type { Question } from '../types';

export const sanjeevAroraQuestions: Question[] = [
  {
    id: 421220,
    topic: 'sanjeev-arora',
    difficulty: 'sota',
    question: 'The PCP Theorem states that NP = PCP(r(n), q(n)). What are the parameters r and q?',
    options: [
      'r = O(log n) random bits, q = O(1) query bits',
      'r = O(n) random bits, q = O(n) query bits',
      'r = O(1) random bits, q = O(log n) query bits',
      'r = O(√n) random bits, q = O(√n) query bits'
    ],
    correctIndex: 0,
    explanation: 'The PCP Theorem (Arora, Lund, Motwani, Sudan, Szegedy) proves NP = PCP(O(log n), O(1)): every NP proof can be verified by reading only a constant number of bits, using logarithmically many random coins.',
    realWorld: 'This theorem is the foundation of hardness-of-approximation results that determine which optimization problems admit efficient approximate solutions.',
    hint: 'The verifier uses very few random bits and reads a constant number of proof bits.'
  },
  {
    id: 421221,
    topic: 'sanjeev-arora',
    difficulty: 'sota',
    question: 'What major consequence does the PCP Theorem have for approximating MAX-3SAT?',
    options: [
      'It is NP-hard to approximate MAX-3SAT within some constant factor better than 7/8',
      'MAX-3SAT can always be solved exactly in polynomial time',
      'Random assignment achieves optimal approximation',
      'MAX-3SAT is in P when the number of variables is bounded'
    ],
    correctIndex: 0,
    explanation: 'Håstad used the PCP Theorem to show it is NP-hard to approximate MAX-3SAT beyond the 7/8 ratio achieved by random assignment, establishing that the trivial algorithm is essentially optimal.',
    realWorld: 'This hardness result affects constraint satisfaction in scheduling, planning, and circuit design.',
    hint: 'Random assignment satisfies 7/8 of 3SAT clauses. Can any polynomial algorithm do better?'
  },
  {
    id: 421222,
    topic: 'sanjeev-arora',
    difficulty: 'sota',
    question: 'Arora\'s PTAS for Euclidean TSP achieves what type of approximation guarantee?',
    options: [
      '(1+ε)-approximation in time n^{O(1/ε)} for points in ℝ²',
      'Exact solution in O(n log n) time',
      '2-approximation using minimum spanning tree',
      'O(log n)-approximation via LP relaxation'
    ],
    correctIndex: 0,
    explanation: 'Arora designed a polynomial-time approximation scheme (PTAS) for TSP in Euclidean space, achieving a (1+ε) approximation ratio for any ε > 0, with running time polynomial in n for fixed ε.',
    realWorld: 'This enables near-optimal routing for delivery logistics, circuit board drilling, and DNA sequencing assembly.',
    hint: 'A PTAS means you can get arbitrarily close to optimal by paying more computation time.'
  },
];
