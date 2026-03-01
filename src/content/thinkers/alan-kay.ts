// alan-kay.ts
import type { Question } from '../types';

export const alanKayQuestions: Question[] = [
  {
    id: 40030,
    topic: 'alan-kay',
    difficulty: 'easy',
    question: 'Alan Kay defined OOP as?',
    options: [
      'Objects communicating via messages ($obj\\rightarrow msg$)',
      'Classes + inheritance hierarchies',
      'SIMULA procedure calls',
      'Functional reactive programming'
    ],
    correctIndex: 0,
    explanation: '"Objects sending messages like biological cells" ($OOP = biology$, not hierarchies).',
    realWorld: 'Smalltalk → Java/C++/Python OOP (despite misunderstanding his vision).',
    hint: 'Objects talk to each other, don\'t share guts.',
  },
  {
    id: 40031,
    topic: 'alan-kay',
    difficulty: 'hard',
    question: 'Kay\'s 1972 Dynabook was?',
    options: [
      'Portable computer for children ($2lb$, notebook-sized)',
      'Mainframe terminal',
      'AI theorem prover',
      'Vector graphics workstation'
    ],
    correctIndex: 0,
    explanation: '$9\\times12\\times0.5"$, $2lb$ tablet for kids to learn programming/math/art.',
    realWorld: 'iPad (38 years later) matches exact specs.',
    hint: 'Laptop/tablet before either existed.',
  },
  {
    id: 40032,
    topic: 'alan-kay',
    difficulty: 'sota',
    question: 'Kay\'s Smalltalk implemented what late binding?',
    options: [
      'Dynamic dispatch: $msg(obj) \\rightarrow obj.handle(msg)$ at runtime',
      'Static typing + inheritance',
      'Template metaprogramming',
      'Monads/IO'
    ],
    correctIndex: 0,
    explanation: 'Message not understood → obj finds/creates handler dynamically ($everything\\ is\\ object$).',
    realWorld: 'JavaScript/Ruby dynamic dispatch, Objective-C message passing.',
    hint: 'Object decides how to handle message when it arrives.',
  }
];
