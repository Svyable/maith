import type { Question } from '../types';

export const ilyaQuestions: Question[] = [
  {
    id: 95016, topic: 'ilya', difficulty: 'easy',
    question: 'Ilya Sutskever co-authored the AlexNet paper that won ImageNet 2012 by using:',
    options: ['Deep convolutional neural networks trained on GPUs', 'Support vector machines with RBF kernels', 'Random forests with hand-crafted features', 'Bayesian neural networks'],
    correctIndex: 0,
    explanation: 'AlexNet used ReLU activations, dropout, GPU training, and data augmentation — innovations that made deep CNNs practical and dominant.',
    realWorld: 'AlexNet\'s victory is widely considered the "Big Bang" of modern deep learning, triggering the AI revolution across all industries.',
    hint: 'Two GPUs, five convolutional layers, and a dramatic error reduction.',
  },
  {
    id: 95017, topic: 'ilya', difficulty: 'hard',
    question: 'The sequence-to-sequence (seq2seq) framework co-developed by Sutskever maps:',
    options: ['Variable-length input sequences to variable-length output sequences via encoder-decoder architecture', 'Fixed-length vectors to fixed-length vectors', 'Images to captions using CNNs only', 'Graphs to adjacency matrices'],
    correctIndex: 0,
    explanation: 'Seq2seq uses an encoder RNN to compress input into a fixed vector, then a decoder RNN to generate output — enabling machine translation, summarization, and dialogue.',
    realWorld: 'Google Translate used seq2seq as its backbone from 2016, dramatically improving translation quality for 100+ languages.',
    hint: 'Encoder compresses, decoder generates — bridging two sequences.',
  },
  {
    id: 95018, topic: 'ilya', difficulty: 'sota',
    question: 'Sutskever\'s new company SSI (Safe Superintelligence Inc.) focuses exclusively on:',
    options: ['Building safe superintelligence as a single focused goal', 'Cloud computing infrastructure', 'Consumer chatbot products', 'Open-source model releases'],
    correctIndex: 0,
    explanation: 'SSI pursues superintelligence with safety as the core constraint — no products, no distractions, just the singular goal of safe ASI.',
    realWorld: 'SSI raised $1B+ in 2024, reflecting the belief that the path to superintelligence requires dedicated safety-first organizations.',
    hint: 'The company name says it all — three words, one mission.',
  },
];
