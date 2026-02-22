import type { Question } from '../types';

export const psychologyQuestions: Question[] = [
  {
    id: 41301, topic: 'psychology', difficulty: 'easy',
    question: 'Kahneman\'s "System 1 vs System 2" framework describes:',
    options: [
      'Two modes of thinking: System 1 (fast, automatic, intuitive) and System 2 (slow, deliberate, analytical) — most cognitive biases arise from System 1 shortcuts',
      'Two different brain hemispheres',
      'Two stages of memory formation',
      'Two types of intelligence (verbal and spatial)',
    ],
    correctIndex: 0,
    explanation: 'System 1 handles ~98% of daily decisions using heuristics (mental shortcuts). It\'s fast but prone to biases (anchoring, availability, representativeness). System 2 is effortful and logical but lazy — it often endorses System 1\'s snap judgments.',
    realWorld: 'This framework explains why smart people make irrational decisions. It\'s applied in behavioral economics (nudges), UX design (reducing cognitive load), and AI alignment (training models to reason deliberately).',
    hint: 'Fast thinking (gut feeling) vs. slow thinking (careful analysis) — we mostly use the fast one.',
  },
  {
    id: 41302, topic: 'psychology', difficulty: 'hard',
    question: 'The replication crisis in psychology revealed that:',
    options: [
      'Over 60% of classic psychology experiments failed to replicate when repeated with larger samples and pre-registered methods — threatening the field\'s empirical foundations',
      'All psychology experiments are perfectly reproducible',
      'Only neuroscience experiments have replication issues',
      'Replication is unnecessary if the original study was published',
    ],
    correctIndex: 0,
    explanation: 'The Open Science Collaboration (2015) found only 36% of 100 psychology studies replicated. Causes include p-hacking, small samples, publication bias (only positive results published), and questionable research practices.',
    realWorld: 'This crisis transformed scientific practice: pre-registration (commit to analysis before data collection), registered reports, open data/code, and larger sample sizes are now standard. It also affects ML research — many published results don\'t replicate.',
    hint: 'When scientists tried to repeat famous experiments with better methods, most didn\'t work.',
  },
  {
    id: 41303, topic: 'psychology', difficulty: 'sota',
    question: 'Computational cognitive science models human cognition as:',
    options: [
      'Approximate Bayesian inference under resource constraints — the brain computes posterior beliefs from prior knowledge and sensory evidence, but uses efficient approximations due to limited neural bandwidth',
      'A simple lookup table of stimulus-response pairs',
      'Pure logical deduction without any uncertainty',
      'Random behavior with no underlying computational principles',
    ],
    correctIndex: 0,
    explanation: 'The Bayesian brain hypothesis models perception, learning, and decision-making as probabilistic inference: $P(\\text{world}|\\text{data}) \\propto P(\\text{data}|\\text{world})P(\\text{world})$. Resource-rational analysis explains biases as optimal under constraints.',
    realWorld: 'This framework explains optical illusions (priors override data), placebo effects (expectations shape perception), and why AI alignment is hard (human preferences are probabilistic and context-dependent).',
    hint: 'The brain is a prediction machine — combining prior beliefs with new evidence, approximately.',
  },
];
