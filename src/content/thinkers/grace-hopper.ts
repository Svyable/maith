import type { Question } from '../types';

export const graceHopperQuestions: Question[] = [
  {
    id: 21101, topic: 'grace-hopper', difficulty: 'easy',
    question: 'Grace Hopper\'s most significant contribution to computing was:',
    options: ['Developing the first compiler and pioneering machine-independent programming languages (COBOL)', 'Building the first personal computer', 'Inventing the mouse', 'Creating the Unix operating system'],
    correctIndex: 0,
    explanation: 'Hopper created the first compiler (A-0, 1952) and led development of COBOL (1959). She proved that programs could be written in English-like syntax and automatically translated to machine code.',
    realWorld: 'COBOL still processes 95% of ATM transactions and 80% of in-person transactions — $3 trillion in daily commerce runs on Hopper\'s language.',
    hint: 'She proved you could write programs in human-readable language — the machine could translate them automatically.',
  },
  {
    id: 21102, topic: 'grace-hopper', difficulty: 'hard',
    question: 'Hopper popularized the term "debugging" after:',
    options: ['Finding an actual moth causing a relay malfunction in the Harvard Mark II computer', 'Running a static analysis tool on COBOL code', 'Using a debugger tool she invented', 'Reading about bugs in Charles Babbage\'s notes'],
    correctIndex: 0,
    explanation: 'In 1947, a moth was found stuck in a relay of the Mark II. Hopper taped it in the logbook with the note "First actual case of bug being found." While the term pre-dates this, she popularized it.',
    realWorld: 'The term "debugging" is used universally in software engineering. The original moth is preserved at the Smithsonian Institution.',
    hint: 'It was a literal insect causing a hardware failure — she taped it into the logbook.',
  },
  {
    id: 21103, topic: 'grace-hopper', difficulty: 'sota',
    question: 'Hopper\'s philosophy that "it\'s easier to ask forgiveness than permission" influenced:',
    options: ['Agile development, rapid prototyping, and the Silicon Valley "move fast and break things" culture', 'Waterfall project management', 'Formal verification methods', 'Military procurement processes'],
    correctIndex: 0,
    explanation: 'As a Navy rear admiral and computing pioneer, Hopper championed pragmatic innovation over bureaucratic approval. Her insistence on practical results over theoretical perfection shaped modern software culture.',
    realWorld: 'The phrase is now a Python programming principle (EAFP — Easier to Ask Forgiveness than Permission) where try/except is preferred over checking conditions first.',
    hint: 'Don\'t wait for approval — build it, show it works, then get buy-in. This became a core tech industry philosophy.',
  },
];
