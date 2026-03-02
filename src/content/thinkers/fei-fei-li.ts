import type { Question } from '../types';

export const feiFeiLiQuestions: Question[] = [
  {
    id: 95013, topic: 'fei-fei-li', difficulty: 'easy',
    question: 'Fei-Fei Li\'s ImageNet dataset contains approximately how many labeled images?',
    options: ['14 million images across 20,000+ categories', '1,000 images across 10 categories', '100,000 images across 100 categories', '1 million images across 5 categories'],
    correctIndex: 0,
    explanation: 'ImageNet contains over 14 million hand-labeled images organized into 20,000+ categories using the WordNet hierarchy — a monumental data curation effort.',
    realWorld: 'The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) catalyzed the deep learning revolution when AlexNet won in 2012.',
    hint: 'It took years of crowdsourced labeling via Amazon Mechanical Turk.',
  },
  {
    id: 95014, topic: 'fei-fei-li', difficulty: 'hard',
    question: 'The ImageNet challenge revealed a key insight when AlexNet won in 2012:',
    options: ['Deep CNNs with GPU training could dramatically outperform hand-crafted features', 'SVMs were still superior for image classification', 'Data augmentation was unnecessary', 'Smaller datasets produced better generalization'],
    correctIndex: 0,
    explanation: 'AlexNet\'s 2012 victory (top-5 error: 15.3% vs. 26.2% for the runner-up) proved that deep learning + GPUs + big data was the winning formula for vision.',
    realWorld: 'This single result triggered billions of dollars in AI investment and launched the modern deep learning era across every industry.',
    hint: 'The error rate dropped by nearly 11 percentage points in a single year.',
  },
  {
    id: 95015, topic: 'fei-fei-li', difficulty: 'sota',
    question: 'Li\'s World Labs is building "Large World Models" that aim to:',
    options: ['Generate and understand 3D spatial worlds from visual data', 'Replace all text-based language models', 'Simulate quantum physics experiments', 'Automate financial trading strategies'],
    correctIndex: 0,
    explanation: 'World Labs develops spatial intelligence — AI that understands and generates 3D environments, bridging perception and physical understanding.',
    realWorld: 'Spatial AI could revolutionize robotics, AR/VR, architecture, and autonomous vehicles by giving machines true 3D understanding.',
    hint: 'Beyond 2D images — understanding the full 3D structure of reality.',
  },
];
