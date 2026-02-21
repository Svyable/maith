import type { Question } from '../types';

export const godelQuestions: Question[] = [
  {
    id: 10151,
    topic: 'godel',
    difficulty: 'easy',
    question: 'Gödel\'s first incompleteness theorem states:',
    options: [
      'Any consistent formal system powerful enough for arithmetic contains true statements that cannot be proved within it',
      'Every mathematical statement is either true or false',
      'All axiom systems are inconsistent',
      'Mathematics can be reduced to pure logic',
    ],
    correctIndex: 0,
    explanation: 'Gödel (1931) proved that in any consistent system containing basic arithmetic, there exist statements that are true but unprovable — shattering Hilbert\'s dream of a complete, consistent foundation for all mathematics.',
    realWorld: 'This implies no AI can ever prove all mathematical truths from a fixed set of axioms — there will always be truths beyond any formal system.',
    hint: 'Think "this statement cannot be proved" — if it\'s provable, contradiction; if not, it\'s true but unprovable.',
  },
  {
    id: 10152,
    topic: 'godel',
    difficulty: 'hard',
    question: 'Gödel\'s proof technique relies on:',
    options: [
      'Encoding metamathematical statements as numbers (Gödel numbering) so the system can refer to itself',
      'Cantor\'s diagonal argument applied to real numbers',
      'Constructing an explicit counterexample to the parallel postulate',
      'Using transfinite induction on ordinal numbers',
    ],
    correctIndex: 0,
    explanation: 'Gödel assigned unique numbers to every symbol, formula, and proof, allowing arithmetic to "talk about itself." He then constructed a sentence equivalent to "I am not provable" — creating an undecidable statement.',
    realWorld: 'Self-reference in computation (quines, fixed points, reflection) all trace back to Gödel\'s encoding technique.',
    hint: 'The key trick is making mathematics able to talk about its own proofs.',
  },
  {
    id: 10153,
    topic: 'godel',
    difficulty: 'sota',
    question: 'Gödel\'s second incompleteness theorem implies:',
    options: [
      'No consistent system can prove its own consistency — you always need a stronger system',
      'All mathematical proofs require infinite steps',
      'Arithmetic is inconsistent and contradictory',
      'The axiom of choice is independent of ZFC',
    ],
    correctIndex: 0,
    explanation: 'The second theorem shows that a consistent system $T$ cannot prove "Con($T$)" — its own consistency statement. To prove $T$ consistent, you need a stronger system, whose consistency also cannot be self-proved. It\'s turtles all the way down.',
    realWorld: 'This limits formal verification: no software system can fully verify its own correctness — you always need an external trusted base.',
    hint: 'If a system could prove itself consistent, it would actually be inconsistent.',
  },
];
