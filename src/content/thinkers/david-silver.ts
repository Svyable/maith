import type { Question } from '../types';

export const davidSilverQuestions: Question[] = [
  {
    id: 32310, topic: 'david-silver', difficulty: 'easy',
    question: 'David Silver led the AlphaGo project at DeepMind. What was the key algorithmic innovation that beat the world champion at Go?',
    options: [
      'Monte Carlo Tree Search (MCTS) guided by two deep neural networks: a policy network $p_\\sigma(a|s)$ that predicts expert moves (trained on 30M positions) to narrow the search, and a value network $v_\\theta(s)$ that evaluates board positions directly (replacing random rollouts). The combination reduced effective search breadth from $b \\approx 250$ to $\\sim 20$ and depth from $d \\approx 150$ to $\\sim 50$, making Go tractable.',
      'A brute-force minimax search with alpha-beta pruning — the same approach that beat Kasparov in chess.',
      'A pure reinforcement learning agent trained entirely from self-play with no human game data.',
      'A rule-based expert system encoding thousands of Go proverbs and joseki patterns.'
    ],
    correctIndex: 0,
    explanation: 'AlphaGo (2016) combined three ideas: (1) supervised learning on human expert games to initialize the policy network, (2) reinforcement learning via self-play to improve beyond human level ($p_\\rho$ beats $p_\\sigma$ 80% of the time), (3) MCTS with neural network evaluation to search efficiently. The value network $v_\\theta(s) \\approx \\mathbb{E}[z | s, \\pi]$ estimates the probability of winning from position $s$ under policy $\\pi$.',
    realWorld: 'AlphaGo\'s victory over Lee Sedol (4-1, March 2016) was a watershed moment for AI — Go was considered decades away from being solved. The techniques generalized to protein folding (AlphaFold), chip design, and mathematical conjecture generation.',
    hint: 'Not brute force — neural networks learned to focus the search on the most promising moves and positions.',
    formulaLinks: ['mcts', 'policy-gradient'],
  },
  {
    id: 32311, topic: 'david-silver', difficulty: 'hard',
    question: 'Silver\'s AlphaZero learned to play chess, Go, and shogi from scratch. What is the core algorithm?',
    options: [
      'A single neural network $f_\\theta(s) = (\\mathbf{p}, v)$ outputs both move probabilities $\\mathbf{p}$ and position value $v \\in [-1, 1]$. Training loop: (1) self-play using MCTS guided by $f_\\theta$ to generate games, (2) train $f_\\theta$ to predict MCTS-improved policy $\\boldsymbol{\\pi}$ and game outcome $z$: $$\\mathcal{L} = (z - v)^2 - \\boldsymbol{\\pi}^\\top \\log \\mathbf{p} + c\\|\\theta\\|^2$$ No human data, no handcrafted features, no opening books — tabula rasa learning.',
      'A separate policy network and value network trained independently on human game databases.',
      'A genetic algorithm that evolves neural network weights through tournament selection.',
      'A lookup table of 10 billion positions computed by exhaustive retrograde analysis.'
    ],
    correctIndex: 0,
    explanation: 'AlphaZero\'s elegance is in its simplicity: one network, one algorithm, three games. Starting from random play, it achieves superhuman performance in 4 hours (chess), 8 hours (shogi), and 34 hours (Go). The key insight: MCTS acts as a "policy improvement operator" — the search-improved policy $\\boldsymbol{\\pi}$ is strictly better than the raw network policy $\\mathbf{p}$, so training on MCTS outputs creates a virtuous cycle.',
    realWorld: 'AlphaZero discovered novel chess strategies (e.g., king walks, pawn sacrifices) that surprised grandmasters. The approach generalized to MuZero (learned model), which masters games without even knowing the rules.',
    hint: 'One network predicts moves and values. Self-play with search generates better targets. Repeat until superhuman.',
    formulaLinks: ['mcts', 'self-play'],
  },
  {
    id: 32312, topic: 'david-silver', difficulty: 'sota',
    question: 'Silver co-authored the "reward is enough" hypothesis. What does it claim, and what are its implications?',
    options: [
      'The hypothesis states that intelligence and all its associated abilities (perception, language, reasoning, planning, social intelligence) can arise from maximizing a single scalar reward signal in a sufficiently complex environment: $$\\pi^* = \\arg\\max_\\pi \\mathbb{E}\\left[\\sum_{t=0}^\\infty \\gamma^t r_t \\mid \\pi\\right]$$ The claim is that reward maximization is sufficient for general intelligence — no separate modules for vision, language, etc. are needed. A sufficiently capable agent in a rich enough environment will develop all cognitive abilities as instrumental sub-goals.',
      'Intelligence requires at least three separate reward signals: survival, reproduction, and curiosity.',
      'Reward is insufficient — intelligence requires explicit symbolic reasoning modules that cannot emerge from reward.',
      'Only environments with sparse rewards produce intelligent behavior; dense rewards lead to overfitting.'
    ],
    correctIndex: 0,
    explanation: 'Silver et al. (2021) argue that the reward hypothesis is more radical than it appears: it predicts that perception, language, memory, and even creativity emerge as instrumental behaviors when an agent needs them to maximize cumulative reward. The supporting evidence includes AlphaGo (developing intuition), AlphaFold (learning physics), and language models (implicitly maximizing next-token reward). Critics argue this is unfalsifiable or requires environments of unrealistic complexity.',
    realWorld: 'This hypothesis shapes the research direction of DeepMind, OpenAI, and other AGI labs: rather than engineering separate cognitive modules, train a single system end-to-end with reward. It\'s the philosophical foundation of the scaling hypothesis.',
    hint: 'One reward signal, one learning algorithm, one sufficiently complex environment → all of intelligence emerges.',
    formulaLinks: ['reinforcement-learning', 'reward-hypothesis'],
  },
];
