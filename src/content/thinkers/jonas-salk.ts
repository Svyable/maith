// salk.ts
import type { Question } from '../types';

export const salkQuestions: Question[] = [
  {
    id: 50060,
    topic: 'jonas-salk',
    difficulty: 'easy',
    question: 'Salk polio vaccine preparation method?',
    options: [
      'Inactivated Mahoney (type 1) + MEF1 (type 2) + Saukett (type 3) via 0.01% formaldehyde, 37°C/10 days',
      'Live attenuated Sabin oral trivalent',
      'mRNA-encoded VP1 capsid',
      'Recombinant VP1 protein subunits'
    ],
    correctIndex: 0,
    explanation: 'Monkey kidney cell culture → formalin inactivation preserves conformationally-dependent neutralizing epitopes.',
    realWorld: '1955: 1.8M children vaccinated → 90% case reduction.',
    hint: 'Formaldehyde kills virus but keeps it recognizable to antibodies.'
  },
  {
    id: 50061,
    topic: 'jonas-salk',
    difficulty: 'hard',
    question: 'Salk 1954 Francis Field Trial design?',
    options: [
      'Double-blind placebo-controlled: 650k vaccinated, 750k placebo, 350k observed (total 1.8M)',
      'Open-label observational',
      'Case-control retrospective',
      'Crossover design'
    ],
    correctIndex: 0,
    explanation: 'Test area: 142/221k cases (vaccinated) vs 57/200k (placebo) → 71% efficacy. Observers unblinded post-trial.',
    realWorld: 'Largest clinical trial in history.',
    hint: 'Massive blinded study → dramatic efficacy signal.'
  },
  {
    id: 50062,
    topic: 'jonas-salk',
    difficulty: 'sota',
    question: 'Poliovirus receptor targeted by Salk IPV?',
    options: [
      'CD155 (poliovirus receptor, nectin-like 5) α-helical Ig superfamily',
      'ACE2 (SARS-CoV-2 receptor)',
      'Sialic acid (influenza HA binding)',
      'CD46 (measles, vaccine strain affinity)'
    ],
    correctIndex: 0,
    explanation: 'Salk\'s IPV blocks CD155 binding via steric hindrance of canyon epitopes.',
    realWorld: 'Determines tissue tropism (gut neurons spared).',
    hint: 'Virus door molecule targeted by vaccine antibodies.'
  }
];
