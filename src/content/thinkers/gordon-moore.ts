import type { Question } from '../types';

export const mooreQuestions: Question[] = [
  {
    id: 20470,
    topic: 'moore',
    difficulty: 'hard',
    question: 'Moore\'s original 1965 prediction stated transistor density would double every how many months?',
    options: ['12 months (later revised to 24)', '6 months', '36 months', '48 months'],
    correctIndex: 0,
    explanation: 'Moore initially predicted annual doubling; he revised it to biennial doubling in 1975. The industry settled on roughly 18-24 months.',
    realWorld: 'This prediction became a self-fulfilling prophecy: the semiconductor industry used it as a roadmap for R&D investment for 50+ years.',
    hint: 'His original 1965 paper had a more aggressive timeline than what we commonly cite.',
  },
  {
    id: 20471,
    topic: 'moore',
    difficulty: 'sota',
    question: 'As of 2024, leading-edge transistors use which technology node, and what physical phenomenon threatens further scaling?',
    options: ['3nm GAA-FET; quantum tunneling through gate oxide', '14nm FinFET; heat dissipation', '45nm planar; wire resistance', '7nm SOI; cosmic ray interference'],
    correctIndex: 0,
    explanation: 'At 3nm, gate-all-around (GAA) FETs replace FinFETs. Below ~1nm gate oxide thickness, quantum tunneling causes uncontrollable leakage current.',
    realWorld: 'TSMC and Samsung\'s 3nm chips power the latest smartphones and AI accelerators, pushing the atomic limits of fabrication.',
    hint: 'The latest chips use a transistor architecture where the gate wraps entirely around the channel.',
  },
  {
    id: 20472,
    topic: 'moore',
    difficulty: 'easy',
    question: 'Gordon Moore co-founded which semiconductor company?',
    options: ['Intel', 'AMD', 'Texas Instruments', 'Qualcomm'],
    correctIndex: 0,
    explanation: 'Moore co-founded Intel in 1968 with Robert Noyce, building the company that would dominate the microprocessor industry for decades.',
    realWorld: 'Intel\'s x86 architecture became the foundation of the personal computer revolution.',
    hint: 'The company whose processors powered most PCs for decades.',
  },
];
