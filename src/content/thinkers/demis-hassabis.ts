import type { Question } from '../types';

export const demisHassabisQuestions: Question[] = [
  {
    id: 12001,
    topic: 'demis-hassabis',
    difficulty: 'easy',
    question: 'DeepMind\'s AlphaGo defeated the world Go champion by combining:',
    options: [
      'Deep neural networks with Monte Carlo Tree Search (MCTS) for value and policy estimation',
      'Brute-force search of all possible Go positions',
      'Hand-crafted heuristics from expert Go players',
      'Genetic algorithms that evolved game strategies',
    ],
    correctIndex: 0,
    explanation: 'AlphaGo used a policy network to suggest moves and a value network to evaluate positions, combined with MCTS to search ahead. AlphaZero later achieved this from pure self-play with no human data.',
    realWorld: 'AlphaGo\'s 2016 victory over Lee Sedol was a watershed moment for AI, proving deep learning could master intuition-heavy domains.',
    hint: 'It combines learning (neural nets) with planning (tree search).',
  },
  {
    id: 12002,
    topic: 'demis-hassabis',
    difficulty: 'hard',
    question: 'AlphaFold 2 predicts protein 3D structure by:',
    options: [
      'Using an attention-based architecture (Evoformer) on multiple sequence alignments to predict inter-residue distances and angles',
      'Simulating molecular dynamics at the atomic level',
      'Searching a database of known protein structures for the closest match',
      'Using generative adversarial networks to generate plausible folds',
    ],
    correctIndex: 0,
    explanation: 'AlphaFold 2 uses the Evoformer module — a novel transformer architecture that processes evolutionary (MSA) and structural (pair) representations iteratively, achieving atomic-level accuracy on the protein folding problem.',
    realWorld: 'AlphaFold has predicted structures for 200+ million proteins, accelerating drug discovery, enzyme engineering, and understanding of diseases.',
    hint: 'Evolution encodes structural information in sequence alignments — the model learns to read it.',
  },
  {
    id: 12003,
    topic: 'demis-hassabis',
    difficulty: 'sota',
    question: 'Hassabis\'s neuroscience background influenced DeepMind\'s approach through:',
    options: [
      'Drawing on hippocampal memory systems (experience replay) and dopamine-like reward signals in RL agents',
      'Building neural networks that exactly replicate the human visual cortex',
      'Using fMRI brain scans to initialize neural network weights',
      'Creating agents that pass the Turing test by mimicking human conversation',
    ],
    correctIndex: 0,
    explanation: 'Experience replay (storing and replaying past experiences) was inspired by hippocampal replay during sleep. The reward prediction error in DQN mirrors dopamine signaling in the brain. This neuroscience-AI bridge is central to DeepMind\'s philosophy.',
    realWorld: 'Experience replay is now standard in deep RL (DQN, SAC, TD3). The neuroscience-AI loop continues to produce insights in both directions.',
    hint: 'The brain replays memories during sleep to consolidate learning — DQN does the same thing.',
  },
];
