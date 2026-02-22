import type { Question } from '../types';

export const linguisticsQuestions: Question[] = [
  {
    id: 40601, topic: 'linguistics', difficulty: 'easy',
    question: 'Chomsky\'s theory of Universal Grammar proposes that:',
    options: [
      'All human languages share an innate underlying structure — children are born with a "language acquisition device" that constrains possible grammars',
      'All languages are equally easy to learn at any age',
      'Grammar is entirely learned from environmental input',
      'Only Indo-European languages share common structures',
    ],
    correctIndex: 0,
    explanation: 'Chomsky argued that the poverty of stimulus (children learn language from limited, noisy input) implies an innate grammar faculty. All languages share deep structural properties (recursion, phrase structure) despite surface differences.',
    realWorld: 'This theory influenced early NLP (context-free grammars, parse trees) and the debate continues in the age of LLMs — do transformers learn "universal grammar" or something fundamentally different?',
    hint: 'Children learn language too quickly from too little input — something must be innate.',
  },
  {
    id: 40602, topic: 'linguistics', difficulty: 'hard',
    question: 'The distributional hypothesis in computational linguistics states:',
    options: [
      '"You shall know a word by the company it keeps" — words that appear in similar contexts have similar meanings, the foundation of word embeddings',
      'All words are distributed equally across all texts',
      'Word meanings are fixed and context-independent',
      'Only grammatical structure determines meaning',
    ],
    correctIndex: 0,
    explanation: 'Firth (1957) and Harris (1954) proposed that semantic similarity correlates with contextual similarity. This is exactly what Word2Vec, GloVe, and transformer embeddings learn — representing words as vectors where similar meanings cluster together.',
    realWorld: 'Every search engine, chatbot, and translation system relies on this principle. Word2Vec\'s famous example: vector("king") - vector("man") + vector("woman") ≈ vector("queen").',
    hint: '"Bank" near "river" means something different than "bank" near "money" — context determines meaning.',
  },
  {
    id: 40603, topic: 'linguistics', difficulty: 'sota',
    question: 'Large language models challenge traditional linguistics because:',
    options: [
      'They achieve human-level language performance without explicit grammar rules, recursive structure, or innate constraints — suggesting statistical patterns may suffice for linguistic competence',
      'They prove Chomsky was completely correct about Universal Grammar',
      'They cannot process any natural language',
      'They only work for English and no other language',
    ],
    correctIndex: 0,
    explanation: 'LLMs learn language purely from statistical co-occurrence patterns (next-token prediction) with no built-in grammar. Their success challenges the necessity of Chomsky\'s innate grammar hypothesis — though whether they truly "understand" language remains debated.',
    realWorld: 'GPT-4 passes the bar exam, writes poetry, and translates 100+ languages — all from predicting the next word. This has reignited the empiricism vs. nativism debate in cognitive science.',
    hint: 'If a machine can master language from pure statistics, do we really need innate grammar?',
  },
];
