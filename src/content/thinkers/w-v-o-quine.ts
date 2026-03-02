import type { Question } from '../types';

export const quineQuestions: Question[] = [
  {
    id: 20660,
    topic: 'w-v-o-quine',
    difficulty: 'hard',
    question: 'A "quine" in computer science is a program that produces its own source code as output. Which property must the program satisfy?',
    options: ['It takes no input and outputs exactly its own source code', 'It reads its own file from disk', 'It uses reflection APIs', 'It requires a compiler flag'],
    correctIndex: 0,
    explanation: 'A true quine must not read any external input (including its own source file) — it must generate its source purely from internal logic.',
    realWorld: 'Quines demonstrate the power of self-reference in computation and are related to Kleene\'s recursion theorem in computability theory.',
    hint: 'No cheating — it can\'t read its own file. It must reconstruct itself from nothing.',
  },
  {
    id: 20661,
    topic: 'w-v-o-quine',
    difficulty: 'sota',
    question: 'Quine\'s philosophical thesis of "ontological relativity" argues that:',
    options: ['The meaning of terms is underdetermined by all possible evidence (indeterminacy of translation)', 'All ontologies are equally valid', 'Mathematics has no ontological commitments', 'Scientific theories are purely syntactic'],
    correctIndex: 0,
    explanation: 'Quine argued that the reference of terms cannot be uniquely determined — two translation manuals can be empirically equivalent yet map words to different objects.',
    realWorld: 'This insight prefigures problems in NLP: word embeddings capture distributional meaning but not reference — the "grounding problem" in AI.',
    hint: '"Gavagai!" — does the native speaker mean "rabbit," "undetached rabbit parts," or "temporal rabbit slice"?',
  },
  {
    id: 20662,
    topic: 'w-v-o-quine',
    difficulty: 'easy',
    question: 'Quine\'s famous sentence "Yields falsehood when preceded by its quotation" is an example of:',
    options: ['A self-referential paradox related to the Liar Paradox', 'A valid logical proof', 'A tautology', 'A mathematical equation'],
    correctIndex: 0,
    explanation: 'The full sentence — "\'Yields falsehood when preceded by its quotation\' yields falsehood when preceded by its quotation" — is true if and only if it\'s false.',
    realWorld: 'This elegant construction inspired the naming of self-replicating programs ("quines") in computer science.',
    hint: 'Apply the instruction to itself and see what happens.',
  },
];
