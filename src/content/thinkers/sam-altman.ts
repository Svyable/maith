import type { Question } from '../types';

export const samAltmanQuestions: Question[] = [
  {
    id: 495004, topic: 'sam-altman', difficulty: 'easy',
    question: 'OpenAI\'s mission, championed by Sam Altman, is to ensure that AGI:',
    options: ['Benefits all of humanity', 'Maximizes corporate profit', 'Replaces all human workers', 'Remains classified technology'],
    correctIndex: 0,
    explanation: 'OpenAI\'s charter states its primary fiduciary duty is to humanity — ensuring artificial general intelligence is safe and broadly beneficial.',
    realWorld: 'This mission drove the release of ChatGPT to the public, democratizing access to advanced AI for education, coding, and creative work.',
    hint: 'The organization\'s name itself suggests openness and accessibility.',
  },
  {
    id: 495005, topic: 'sam-altman', difficulty: 'hard',
    question: 'The scaling hypothesis that Altman\'s OpenAI bet on states that:',
    options: ['Increasing model size, data, and compute yields emergent capabilities', 'Smaller models always outperform larger ones', 'Architecture matters more than scale', 'Training data quality is irrelevant'],
    correctIndex: 0,
    explanation: 'The scaling laws (Kaplan et al., 2020) showed predictable performance improvements with more parameters, data, and compute — leading to GPT-3 and GPT-4.',
    realWorld: 'This bet led to GPT-4, which passed the bar exam, medical licensing exams, and coding interviews — capabilities that emerged only at scale.',
    hint: 'More compute → more capability, following a power law.',
  },
  {
    id: 495006, topic: 'sam-altman', difficulty: 'sota',
    question: 'OpenAI\'s "o1" reasoning model introduced a paradigm called:',
    options: ['Chain-of-thought reasoning at inference time (test-time compute)', 'Pre-training on synthetic data only', 'Reinforcement learning from human feedback only', 'Mixture of experts routing'],
    correctIndex: 0,
    explanation: 'o1 uses extended chain-of-thought at inference time, spending more compute "thinking" before answering — a shift from scaling training to scaling test-time compute.',
    realWorld: 'o1 achieved expert-level performance on PhD-level physics, competition math, and complex coding challenges by reasoning step-by-step.',
    hint: 'Instead of training bigger, think longer at inference time.',
  },
];
