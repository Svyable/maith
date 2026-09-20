import type { Question } from '../types';

export const sophieWilsonQuestions: Question[] = [
  {
    id: 9263016,
    topic: 'sophie-wilson',
    difficulty: 'easy',
    question: 'Which processor architecture did Sophie Wilson help design at Acorn?',
    options: ['ARM', 'MIPS', 'SPARC', 'x86'],
    correctIndex: 0,
    explanation: 'Wilson co-designed the Acorn RISC Machine, or ARM, architecture with Steve Furber in the 1980s.',
    realWorld: 'ARM cores became foundational to mobile devices, embedded systems, consumer electronics, and increasingly servers and laptops.',
    hint: 'Its name originally expanded to Acorn RISC Machine.',
  },
  {
    id: 9263017,
    topic: 'sophie-wilson',
    difficulty: 'hard',
    question: 'What design philosophy most strongly shaped the original ARM processor?',
    options: [
      'Microcoded variable-length instructions',
      'Stack-only arithmetic instructions',
      'Reduced instruction set computing',
      'Decimal-coded business arithmetic',
    ],
    correctIndex: 2,
    explanation: 'The original ARM design followed reduced instruction set computing principles, favoring a compact and regular instruction set that could execute efficiently.',
    realWorld: 'RISC ideas help processor designers simplify pipelines, improve energy efficiency, and scale implementations across many device classes.',
    hint: 'The “R” in the original ARM name points to this philosophy.',
  },
  {
    id: 9263018,
    topic: 'sophie-wilson',
    difficulty: 'sota',
    question: 'What does a processor instruction set architecture primarily define?',
    options: [
      'The transistor material used in a chip',
      'The operations, registers, and encodings visible to software',
      'The physical dimensions of the package',
      'The cooling system required by the processor',
    ],
    correctIndex: 1,
    explanation: 'An instruction set architecture specifies the programmer-visible contract between software and hardware, including instructions, registers, data types, and encodings.',
    realWorld: 'A stable ISA lets many different processor implementations run compatible software while changing their internal microarchitecture.',
    hint: 'Think of the boundary between compiled code and the processor.',
    sources: [{ title: 'Sophie Wilson', url: 'https://computerhistory.org/profile/sophie-wilson/', publisher: 'Computer History Museum' }],
    reviewedAt: '2026-09-20',
  },
];
