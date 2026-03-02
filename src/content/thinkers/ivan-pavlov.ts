import type { Question } from '../types';

export const pavlovQuestions: Question[] = [
  {
    id: 96090, topic: 'ivan-pavlov', difficulty: 'easy',
    question: 'Pavlov\'s classical conditioning experiments showed that dogs could learn to:',
    options: ['Salivate at the sound of a bell after repeated pairing with food', 'Solve simple math problems', 'Recognize their own reflection', 'Navigate complex mazes'],
    correctIndex: 0,
    explanation: 'By repeatedly pairing a neutral stimulus (bell) with food, Pavlov showed dogs would eventually salivate at the bell alone — demonstrating learned associations.',
    realWorld: 'Classical conditioning explains phenomena from phobias to advertising (pairing products with pleasant feelings).',
    hint: 'The bell started as meaningless but became a signal for food.',
  },
  {
    id: 96091, topic: 'ivan-pavlov', difficulty: 'hard',
    question: 'In Pavlovian conditioning, "extinction" occurs when:',
    options: ['The conditioned stimulus is repeatedly presented without the unconditioned stimulus', 'The animal dies', 'The response becomes permanent', 'A new stimulus replaces the original'],
    correctIndex: 0,
    explanation: 'Extinction is the gradual weakening of a conditioned response when the CS (bell) is repeatedly presented without the US (food). However, the association isn\'t fully erased — spontaneous recovery can occur.',
    realWorld: 'Exposure therapy for phobias is based on extinction: repeatedly facing the feared stimulus without harm reduces the fear response.',
    hint: 'The learned response fades when the prediction is no longer accurate.',
  },
  {
    id: 96092, topic: 'ivan-pavlov', difficulty: 'sota',
    question: 'Modern neuroscience has shown that Pavlovian prediction errors are encoded by:',
    options: ['Dopamine neurons in the VTA, firing for unexpected rewards and pausing for unexpected omissions', 'Only the hippocampus', 'Motor cortex exclusively', 'Serotonin pathways in the brainstem'],
    correctIndex: 0,
    explanation: 'Schultz et al. (1997) showed dopamine neurons encode reward prediction errors (RPE) — firing above baseline for better-than-expected outcomes and below for worse — directly implementing Pavlovian learning.',
    realWorld: 'This discovery bridges Pavlov and AI: temporal-difference learning in reinforcement learning (TD-learning) uses the same RPE mechanism.',
    hint: 'These neurons respond not to reward itself, but to the surprise of reward.',
  },
];
