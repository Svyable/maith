// engelbart.ts
import type { Question } from '../types';

export const engelbartQuestions: Question[] = [
  {
    id: 40010,
    topic: 'douglas-engelbart',
    difficulty: 'easy',
    question: 'Engelbart\'s 1968 "Mother of All Demos" showed?',
    options: [
      'Mouse + windows + hypertext + collaborative editing',
      'Command line interface (CLI)',
      'Touchscreen gestures',
      'Virtual reality headset'
    ],
    correctIndex: 0,
    explanation: 'Wooden mouse ($2^{10}$ resolution), overlapping windows, clickable hypertext links, shared-screen collaboration.',
    realWorld: 'Complete GUI blueprint XeroxPARC/Apple stole wholesale.',
    hint: 'Live 1968 demo contained everything modern computers do.',
  },
  {
    id: 40011,
    topic: 'douglas-engelbart',
    difficulty: 'hard',
    question: 'Engelbart\'s goal: "augmenting human intellect" means?',
    options: [
      '$H_{aug} = H_{human} \\times I_{system}$ (multiply human capability)',
      'Replace humans with AI',
      'Neural implants for direct brain I/O',
      'Speech-to-text only'
    ],
    correctIndex: 0,
    explanation: 'Bootstrap better tools → humans design better tools → $10^{3\\times}$ productivity growth.',
    realWorld: 'Modern IDEs, no-code platforms, AI assistants follow this philosophy.',
    hint: 'Tools make humans smarter, not replace them.',
  },
  {
    id: 40012,
    topic: 'douglas-engelbart',
    difficulty: 'sota',
    question: 'Engelbart\'s NLS system pioneered what collaboration?',
    options: [
      'Shared-screen real-time editing ($\\Delta x(t)$ cursor coupling)',
      'Email threading',
      'Version control ($git$)',
      'Markup languages (HTML)'
    ],
    correctIndex: 0,
    explanation: 'Multiple cursors on shared screen, simultaneous editing, live video conferencing (1968!).',
    realWorld: 'Google Docs, Figma, VS Code Live Share direct descendants.',
    hint: 'Multiple people typing on same screen simultaneously.',
  }
];
