import type { Question } from '../types';

export const diophantusQuestions: Question[] = [
  {
    id: 21220, topic: 'diophantus', difficulty: 'sota',
    question: 'Diophantine equations require solutions in which number domain?',
    options: ['Integers (or rational numbers)', 'Real numbers', 'Complex numbers', 'p-adic numbers'],
    correctIndex: 0,
    explanation: 'A Diophantine equation is any polynomial equation where only integer (or rational) solutions are sought. This constraint makes many otherwise simple equations extraordinarily difficult.',
    realWorld: 'RSA cryptography relies on the difficulty of Diophantine problems — factoring $n = pq$ is equivalent to solving a system of Diophantine equations.',
    hint: 'The key constraint is discreteness — no irrational or transcendental solutions allowed.',
  },
  {
    id: 21221, topic: 'diophantus', difficulty: 'sota',
    question: 'Fermat wrote his famous "Last Theorem" marginal note in his copy of which Diophantus work?',
    options: ['Arithmetica', 'Elements', 'Conics', 'Almagest'],
    correctIndex: 0,
    explanation: 'Fermat\'s 1637 marginal note in his copy of Diophantus\'s Arithmetica claimed $a^n + b^n = c^n$ has no integer solutions for $n > 2$ — sparking 358 years of mathematical effort.',
    realWorld: 'The quest to prove Fermat\'s Last Theorem drove the development of algebraic number theory, modular forms, and the Langlands program.',
    hint: 'This 13-volume work from ~250 CE is the foundational text of number theory.',
  },
  {
    id: 21222, topic: 'diophantus', difficulty: 'sota',
    question: 'Diophantus introduced syncopated algebra. What does "syncopated" mean in this context?',
    options: ['Using abbreviations and symbols for unknowns and operations', 'Using fully symbolic notation like modern algebra', 'Writing equations in purely verbal/rhetorical form', 'Using geometric constructions instead of equations'],
    correctIndex: 0,
    explanation: 'Syncopated algebra is intermediate between rhetorical (all words) and symbolic (all symbols). Diophantus used abbreviations like ς for the unknown and Δ for square — a crucial step toward modern notation.',
    realWorld: 'The evolution from rhetorical → syncopated → symbolic algebra took ~2000 years and is one of the greatest notational advances in human intellectual history.',
    hint: 'It\'s the middle stage between "all words" and "all symbols."',
  },
];
