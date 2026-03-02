import type { Question } from '../types';

export const aristotleQuestions: Question[] = [
  {
    id: 60010, topic: 'aristotle', difficulty: 'easy',
    question: 'Aristotle\'s system of deductive reasoning, using premises to reach a conclusion, is called:',
    options: [
      'Syllogistic logic — "All men are mortal; Socrates is a man; therefore Socrates is mortal"',
      'Inductive reasoning from specific observations to general laws',
      'Dialectical reasoning through opposing arguments',
      'Analogical reasoning by comparing similar cases',
    ],
    correctIndex: 0,
    explanation: 'Aristotle formalized the syllogism in his "Organon" — the first systematic treatment of deductive logic. A syllogism has two premises and a conclusion, with the validity determined purely by logical form.',
    realWorld: 'Syllogistic logic was the foundation of Western reasoning for 2,000 years and directly influenced the development of mathematical logic, computer science, and AI.',
    hint: 'It involves a major premise, a minor premise, and a conclusion.',
  },
  {
    id: 60011, topic: 'aristotle', difficulty: 'hard',
    question: 'Aristotle\'s "four causes" framework explains an object through material, formal, efficient, and:',
    options: [
      'Final cause ($telos$) — the purpose or end goal the object serves',
      'Temporal cause — when the object came into existence',
      'Spatial cause — where the object is located',
      'Relational cause — how the object connects to other objects',
    ],
    correctIndex: 0,
    explanation: 'The four causes (aitiai) are: material (what it\'s made of), formal (its shape/structure), efficient (what made it), and final (its purpose). The final cause ($telos$) was central to Aristotle\'s teleological worldview.',
    realWorld: 'Teleological thinking influenced biology (function explains form), engineering design (purpose drives structure), and even modern AI goal-directed behavior.',
    hint: 'Think about "why does this thing exist?" — its purpose.',
  },
  {
    id: 60012, topic: 'aristotle', difficulty: 'sota',
    question: 'Aristotle\'s law of excluded middle states that for any proposition $P$:',
    options: [
      '$P \\lor \\neg P$ must be true — every proposition is either true or false, with no third option',
      '$P \\land \\neg P$ can sometimes be true for vague predicates',
      'Truth values form a continuous spectrum between 0 and 1',
      '$P$ is only meaningful if empirically verifiable',
    ],
    correctIndex: 0,
    explanation: 'The law of excluded middle ($P \\lor \\neg P$) is one of Aristotle\'s three laws of thought, alongside non-contradiction ($\\neg(P \\land \\neg P)$) and identity ($P \\rightarrow P$). These became the axioms of classical logic.',
    realWorld: 'Intuitionistic logic (Brouwer, Heyting) rejects excluded middle for constructive proofs. This debate shapes modern type theory, proof assistants (Lean, Coq), and the foundations of mathematics.',
    hint: 'A statement must be true or false — there\'s no middle ground in classical logic.',
  },
];
