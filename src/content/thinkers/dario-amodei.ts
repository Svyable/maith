import type { Question } from '../types';

export const darioAmodeiQuestions: Question[] = [
  {
    id: 495007, topic: 'dario-amodei', difficulty: 'easy',
    question: 'Anthropic, co-founded by Dario Amodei, focuses primarily on:',
    options: ['AI safety and alignment research', 'Social media algorithms', 'Hardware chip design', 'Video game development'],
    correctIndex: 0,
    explanation: 'Anthropic was founded with AI safety as its core mission, developing techniques like Constitutional AI to make models more honest, harmless, and helpful.',
    realWorld: 'Claude, Anthropic\'s AI assistant, uses Constitutional AI to refuse harmful requests while remaining genuinely helpful for coding, analysis, and writing.',
    hint: 'The company name comes from "anthropic principle" — keeping humans central.',
  },
  {
    id: 495008, topic: 'dario-amodei', difficulty: 'hard',
    question: 'Constitutional AI (CAI), developed at Anthropic, trains models by:',
    options: ['Having the AI critique and revise its own outputs using a set of principles', 'Only using human feedback for every response', 'Removing all safety constraints', 'Training exclusively on academic papers'],
    correctIndex: 0,
    explanation: 'CAI uses a "constitution" of principles. The AI generates responses, critiques them against these principles, and revises — reducing reliance on human labelers.',
    realWorld: 'This approach lets Claude handle nuanced safety decisions at scale without needing millions of human annotations for every edge case.',
    hint: 'The AI acts as its own judge using written rules.',
  },
  {
    id: 495009, topic: 'dario-amodei', difficulty: 'sota',
    question: 'Anthropic\'s research on "scaling monosemanticity" demonstrated that:',
    options: ['Individual features in neural networks can be isolated and interpreted using sparse autoencoders', 'Larger models are always less interpretable', 'Neural networks use distributed representations that can never be decomposed', 'Attention heads correspond one-to-one with human concepts'],
    correctIndex: 0,
    explanation: 'Using sparse autoencoders on Claude\'s activations, Anthropic found interpretable features (like "Golden Gate Bridge" or "deception") — a breakthrough in mechanistic interpretability.',
    realWorld: 'This work could enable "steering" AI behavior by amplifying or suppressing specific features, making safety guarantees more concrete.',
    hint: 'Sparse decomposition reveals what individual neurons are "thinking about."',
  },
];
