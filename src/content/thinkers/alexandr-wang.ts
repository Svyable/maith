import type { Question } from '../types';

export const alexandrWangQuestions: Question[] = [
  {
    id: 21250,
    topic: 'alexandr-wang',
    difficulty: 'sota',
    question: 'Scale AI\'s core business model addresses which critical bottleneck in modern ML pipelines?',
    options: [
      'High-quality labeled training data at scale',
      'GPU hardware manufacturing',
      'Model architecture design',
      'Hyperparameter optimization'
    ],
    correctIndex: 0,
    explanation: 'Scale AI provides high-quality data labeling and annotation at massive scale, addressing the data bottleneck that limits ML model performance. Their platform combines human annotators with ML-assisted tools to label images, text, and sensor data.',
    realWorld: 'Scale AI\'s labeled data powers autonomous vehicles (Waymo, Toyota), defense applications, and LLM training including GPT-4.',
    hint: 'The best model architecture is useless without the right training data.'
  },
  {
    id: 21251,
    topic: 'alexandr-wang',
    difficulty: 'sota',
    question: 'In RLHF pipelines that Scale AI supports, what role does human preference data play?',
    options: [
      'Training a reward model that scores outputs for reinforcement learning',
      'Directly updating model weights via backpropagation',
      'Replacing the need for pre-training entirely',
      'Generating synthetic training corpora'
    ],
    correctIndex: 0,
    explanation: 'Human annotators compare model outputs pairwise, and these preferences train a reward model. The reward model then provides the signal for PPO or DPO to align the language model with human values.',
    realWorld: 'RLHF alignment using human preference data is how ChatGPT, Claude, and Gemini are made safe and helpful.',
    hint: 'Humans rank outputs → reward model learns preferences → RL optimizes against that model.'
  },
  {
    id: 21252,
    topic: 'alexandr-wang',
    difficulty: 'sota',
    question: 'What mathematical concept quantifies inter-annotator agreement in data labeling quality?',
    options: [
      'Cohen\'s kappa (κ), adjusting for chance agreement',
      'Pearson correlation between annotator scores',
      'Raw percentage agreement',
      'F1 score of annotations vs. gold standard'
    ],
    correctIndex: 0,
    explanation: 'Cohen\'s kappa κ = (p₀ − pₑ)/(1 − pₑ) measures agreement between annotators while correcting for the probability of chance agreement pₑ. It is the standard metric for annotation quality control.',
    realWorld: 'Data labeling companies use κ thresholds to ensure annotation quality before training safety-critical ML systems like medical AI.',
    hint: 'Raw agreement overestimates quality because annotators might agree by random chance.'
  },
];
