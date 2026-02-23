import type { Question } from '../types';

export const shapleyQuestions: Question[] = [
  {
    id: 20800,
    topic: 'shapley',
    difficulty: 'hard',
    question: 'The Gale-Shapley "deferred acceptance" algorithm for stable matching has which computational complexity?',
    options: ['$O(n^2)$ in the worst case', '$O(n \\log n)$', '$O(n^3)$', '$O(2^n)$'],
    correctIndex: 0,
    explanation: 'With $n$ proposers and $n$ receivers, each proposer can be rejected at most $n-1$ times, giving $O(n^2)$ worst case — efficiently finding a stable matching.',
    realWorld: 'The National Resident Matching Program uses this algorithm to match ~40,000 medical graduates to hospital residencies annually.',
    hint: 'Each of $n$ proposers might need to try all $n$ options in the worst case.',
  },
  {
    id: 20801,
    topic: 'shapley',
    difficulty: 'sota',
    question: 'The Shapley value $\\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!(n-|S|-1)!}{n!}[v(S \\cup \\{i\\}) - v(S)]$ satisfies which uniqueness property?',
    options: ['It is the unique allocation satisfying efficiency, symmetry, linearity, and null player axioms', 'It always gives equal shares', 'It maximizes the minimum payout', 'It only applies to zero-sum games'],
    correctIndex: 0,
    explanation: 'Shapley proved this is the only way to fairly distribute value among coalition members satisfying four natural axioms — a result of profound elegance.',
    realWorld: 'SHAP values in machine learning (SHapley Additive exPlanations) use this formula to explain individual predictions of any ML model.',
    hint: 'Four axioms uniquely determine this allocation — that\'s what makes it special.',
  },
  {
    id: 20802,
    topic: 'shapley',
    difficulty: 'easy',
    question: 'Shapley won the Nobel Prize in Economics for his work on stable matching. What is the classic framing of the stable matching problem?',
    options: ['The stable marriage problem (matching pairs with preferences)', 'The traveling salesman problem', 'The knapsack problem', 'The prisoner\'s dilemma'],
    correctIndex: 0,
    explanation: 'The problem asks: can we match $n$ men and $n$ women such that no unmatched pair would prefer each other over their current partners? Gale-Shapley proved yes.',
    realWorld: 'Beyond hospitals, it\'s used for school choice, organ donor matching, and even assigning students to courses.',
    hint: 'It\'s about finding matches where no one wants to "elope" with someone else\'s partner.',
  },
];
