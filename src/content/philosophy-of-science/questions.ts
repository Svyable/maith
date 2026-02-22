import type { Question } from '../types';

export const philosophyScienceQuestions: Question[] = [
  {
    id: 41101, topic: 'philosophy-of-science', difficulty: 'easy',
    question: 'Karl Popper\'s criterion of falsifiability states that:',
    options: [
      'A theory is scientific only if it makes predictions that could potentially be proven wrong — unfalsifiable claims are not science',
      'All scientific theories are eventually proven false',
      'Science can only study observable phenomena',
      'A theory is true if it has not been falsified yet',
    ],
    correctIndex: 0,
    explanation: 'Popper distinguished science from pseudoscience by falsifiability: "All swans are white" is scientific (one black swan falsifies it). "The universe is guided by an invisible force" is not (no possible observation disproves it).',
    realWorld: 'String theory faces criticism for being unfalsifiable (it makes no unique testable predictions). ML models face similar issues: a model that "explains everything" (overfitting) actually explains nothing.',
    hint: 'If nothing could possibly prove your theory wrong, it\'s not science — it\'s faith.',
  },
  {
    id: 41102, topic: 'philosophy-of-science', difficulty: 'hard',
    question: 'Thomas Kuhn\'s "paradigm shifts" describe science as:',
    options: [
      'Alternating between periods of "normal science" (puzzle-solving within a paradigm) and revolutionary shifts when anomalies accumulate beyond what the current paradigm can explain',
      'A steady, linear accumulation of knowledge',
      'Purely driven by individual genius without social influence',
      'Completely relative with no objective progress',
    ],
    correctIndex: 0,
    explanation: 'Kuhn argued that science isn\'t cumulative — it undergoes revolutions. Newtonian → Einsteinian physics, classical → quantum mechanics were paradigm shifts where the fundamental framework changed, not just the details.',
    realWorld: 'The shift from symbolic AI to deep learning (2012-present) is a Kuhnian paradigm shift in computer science. The old paradigm\'s practitioners didn\'t gradually adopt neural nets — the field underwent a revolution.',
    hint: 'Science doesn\'t progress smoothly — it has revolutions where the entire framework changes.',
  },
  {
    id: 41103, topic: 'philosophy-of-science', difficulty: 'sota',
    question: 'The "Chinese Room" argument (Searle, 1980) challenges AI by arguing:',
    options: [
      'A system can manipulate symbols according to rules and produce correct outputs without any understanding — syntactic processing ≠ semantic comprehension',
      'Chinese is too complex for computers to process',
      'Only Chinese-speaking programmers can build AI',
      'AI systems must be built in China to work properly',
    ],
    correctIndex: 0,
    explanation: 'Searle imagines a person in a room who follows English instructions to manipulate Chinese symbols, producing perfect Chinese responses — without understanding Chinese. He argues computers similarly process syntax without semantics.',
    realWorld: 'The Chinese Room is directly relevant to LLMs: GPT-4 produces coherent text by predicting tokens — but does it "understand"? This philosophical question has practical implications for AI safety, rights, and regulation.',
    hint: 'Following rules perfectly ≠ understanding. Can a machine truly understand, or just simulate understanding?',
  },
];
