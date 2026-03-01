// mullis.ts
import type { Question } from '../types';

export const mullisQuestions: Question[] = [
  {
    id: 50050,
    topic: 'mullis',
    difficulty: 'easy',
    question: 'PCR cycle: denaturation → annealing → what polymerase condition?',
    options: [
      '72°C extension: Taq k_cat≈150 nt/min, 2^n amplification',
      '37°C Klenow fragment',
      '95°C hot-start activation',
      '55°C primer dimer melting'
    ],
    correctIndex: 0,
    explanation: 'Thermostable Taq from Thermus aquaticus survives 95°C denaturation; 10^6 cycles lifetime.',
    realWorld: 'Enables automated high-throughput amplification.',
    hint: 'Heat-proof enzyme copies during hot extension phase.'
  },
  {
    id: 50051,
    topic: 'mullis',
    difficulty: 'hard',
    question: 'qPCR efficiency calculated as?',
    options: [
      'E=10^(-1/slope)≈2 (100% doubling) from ΔC_t vs log[DNA]',
      'E=C_t ratio of unknowns',
      'E=2^ΔC_t absolute quantification',
      'E=1.8 universal assumption'
    ],
    correctIndex: 0,
    explanation: 'Standard curve slope -3.32±0.3 → E=1.9-2.1. Poor efficiency = inhibitors/contamination.',
    realWorld: 'C_t validation for diagnostics/COVID testing.',
    hint: 'Standard curve slope reveals doubling efficiency.'
  },
  {
    id: 50052,
    topic: 'mullis',
    difficulty: 'sota',
    question: 'Taq polymerase survives how many denaturation cycles?',
    options: [
      '≈10^6 cycles at 95°C (t_1/2≈40 min, total activity preserved)',
      '100 cycles (hot-start needed)',
      '10^3 cycles (proofreading variants)',
      '10^9 cycles (Pfu polymerase)'
    ],
    correctIndex: 0,
    explanation: 'T_opt=72°C, half-life 40 min at 95°C. 30 cycles × 2 min = 1% activity loss.',
    realWorld: 'Defines PCR reagent cost/performance.',
    hint: 'Lasts through ∼million heat shocks.'
  }
];
