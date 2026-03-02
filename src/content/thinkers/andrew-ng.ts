import type { Question } from '../types';

export const andrewNgQuestions: Question[] = [
  {
    id: 495010, topic: 'andrew-ng', difficulty: 'easy',
    question: 'Andrew Ng\'s Coursera machine learning course popularized which learning algorithm?',
    options: ['Linear regression with gradient descent', 'Transformer self-attention', 'Generative adversarial networks', 'Diffusion models'],
    correctIndex: 0,
    explanation: 'Ng\'s iconic ML course starts with linear regression and gradient descent, making these foundational concepts accessible to millions of learners worldwide.',
    realWorld: 'Over 5 million people took this course, kickstarting countless AI careers and democratizing machine learning education globally.',
    hint: 'The simplest supervised learning algorithm — fit a line to data.',
  },
  {
    id: 495011, topic: 'andrew-ng', difficulty: 'hard',
    question: 'Google Brain, co-founded by Ng, demonstrated unsupervised learning at scale by training a network that spontaneously learned to detect:',
    options: ['Cat faces from unlabeled YouTube videos', 'Speech patterns from radio broadcasts', 'Mathematical proofs from textbooks', 'Musical genres from audio streams'],
    correctIndex: 0,
    explanation: 'The 2012 "Google cat" paper used 16,000 CPU cores to train a network on YouTube frames — it learned cat detectors without ever being told what a cat is.',
    realWorld: 'This demonstrated that scale + unsupervised learning could discover meaningful features, foreshadowing the self-supervised revolution in NLP and vision.',
    hint: 'The internet\'s favorite animal appeared in the neurons.',
  },
  {
    id: 495012, topic: 'andrew-ng', difficulty: 'sota',
    question: 'Ng\'s "data-centric AI" movement argues that improving model performance is best achieved by:',
    options: ['Systematically improving data quality rather than model architecture', 'Using larger models with more parameters', 'Designing novel loss functions', 'Increasing training compute exponentially'],
    correctIndex: 0,
    explanation: 'Data-centric AI shifts focus from model-centric (bigger architectures) to improving labels, cleaning data, and curating training sets — often yielding larger gains.',
    realWorld: 'In manufacturing defect detection, relabeling 50 ambiguous images improved accuracy more than switching from ResNet to a model 10× larger.',
    hint: 'Garbage in, garbage out — fix the data, not the model.',
  },
];
