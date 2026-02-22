import type { Question } from '../types';

export const roboticsQuestions: Question[] = [
  {
    id: 40201, topic: 'robotics', difficulty: 'easy',
    question: 'A PID controller in robotics adjusts motor output based on:',
    options: [
      'Proportional error, Integral of past errors, and Derivative of error change — $u(t) = K_p e + K_i \\int e\\,dt + K_d \\frac{de}{dt}$',
      'Only the current sensor reading',
      'A pre-recorded sequence of movements',
      'Random perturbations to find optimal actions',
    ],
    correctIndex: 0,
    explanation: 'PID combines three terms: P (corrects current error), I (eliminates steady-state offset by accumulating past errors), D (dampens oscillation by anticipating future error). Tuning K_p, K_i, K_d is the core challenge.',
    realWorld: 'PID controllers run in virtually every industrial robot, drone stabilization system, cruise control, and 3D printer. Over 95% of industrial control loops use some form of PID.',
    hint: 'Three letters, three jobs: fix NOW, fix PAST accumulation, anticipate FUTURE change.',
  },
  {
    id: 40202, topic: 'robotics', difficulty: 'hard',
    question: 'SLAM (Simultaneous Localization and Mapping) is challenging because:',
    options: [
      'The robot must build a map of an unknown environment while simultaneously tracking its own position within that map — a chicken-and-egg problem',
      'Robots already know perfect maps of all environments',
      'GPS works perfectly indoors and underground',
      'Cameras can directly measure distance without computation',
    ],
    correctIndex: 0,
    explanation: 'SLAM requires estimating both the robot\'s pose and the environment map simultaneously. Errors in one affect the other. Solutions include Extended Kalman Filter SLAM, particle filters (FastSLAM), and graph-based optimization.',
    realWorld: 'Every self-driving car, delivery robot, and AR headset uses SLAM. Apple\'s ARKit and Google\'s ARCore perform visual SLAM in real-time on your phone.',
    hint: 'You need a map to know where you are, but you need to know where you are to build a map.',
  },
  {
    id: 40203, topic: 'robotics', difficulty: 'sota',
    question: 'Foundation models for robotics (RT-2, π₀) aim to solve:',
    options: [
      'The generalization gap — training a single vision-language-action model that transfers manipulation skills to novel objects and environments without task-specific fine-tuning',
      'Making robots move faster than humans',
      'Replacing all sensors with a single camera',
      'Eliminating the need for any training data',
    ],
    correctIndex: 0,
    explanation: 'RT-2 (Google) and π₀ (Physical Intelligence) treat robotic control as a vision-language problem: the model sees an image, reads a text instruction, and outputs motor actions. Pre-training on internet-scale data provides world knowledge that transfers to manipulation.',
    realWorld: 'These models can follow instructions like "pick up the bag of chips" in unseen kitchens — a capability that would have required months of task-specific programming just two years ago.',
    hint: 'The same idea as LLMs — pre-train on massive data, then generalize to new tasks without retraining.',
  },
];
