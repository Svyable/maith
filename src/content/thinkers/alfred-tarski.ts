import type { Question } from '../types';

export const alfredTarskiQuestions: Question[] = [
  {
    id: 307013,
    topic: 'alfred-tarski',
    difficulty: 'easy',
    question: 'Alfred Tarski is most famous for formalizing what concept in logic and semantics?',
    options: [
      'Truth',
      'Recursion',
      'Randomness',
      'Differentiability'
    ],
    correctIndex: 0,
    explanation: 'Tarski gave one of the most influential formal accounts of truth in logic, especially through his semantic conception of truth.',
    realWorld: 'His work underlies modern logic, semantics, databases, programming languages, and formal reasoning systems.',
    hint: 'Think “the semantic conception of ____.”',
    symbolLinks: {},
    formulaLinks: ['tarski-truth-schema'],
    glossaryLinks: ['truth-schema', 'formal-semantics', 'model-theory'],
  },
  {
    id: 307014,
    topic: 'alfred-tarski',
    difficulty: 'hard',
    question: 'What is Tarski’s Convention T intended to capture?',
    options: [
      'A materially adequate definition of truth',
      'A complete algorithm for proving all theorems',
      'A decision procedure for all arithmetic',
      'A proof that all infinities are equal'
    ],
    correctIndex: 0,
    explanation: 'Convention T requires a truth definition to entail instances like “\'Snow is white\' is true if and only if snow is white.”',
    realWorld: 'It shaped formal semantics, philosophy of language, and the foundations of model theory.',
    hint: 'It is about truth conditions.',
    symbolLinks: {},
    formulaLinks: ['tarski-truth-schema'],
    glossaryLinks: ['truth-schema', 'formal-language', 'model-theory'],
  },
  {
    id: 307015,
    topic: 'alfred-tarski',
    difficulty: 'sota',
    question: 'Why is Alfred Tarski still central in contemporary theoretical computer science and logic?',
    options: [
      'Because model theory, formal semantics, and truth definitions still rely on Tarskian foundations',
      'Because he solved P versus NP',
      'Because he invented the transistor',
      'Because he replaced set theory with category theory'
    ],
    correctIndex: 0,
    explanation: 'Tarski’s work on semantics, definability, model theory, and logical consequence still shapes logic, verification, and theoretical computer science.',
    realWorld: 'Database query semantics, automated reasoning, and formal specification languages all inherit Tarskian ideas.',
    hint: 'Think semantics and models.',
    symbolLinks: {},
    formulaLinks: ['tarski-truth-schema'],
    glossaryLinks: ['model-theory', 'logical-consequence', 'formal-semantics'],
  },
];
