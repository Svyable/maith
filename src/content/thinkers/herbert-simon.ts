import type { Question } from '../types';

export const herbertSimonQuestions: Question[] = [
  {
    id: 13340,
    topic: 'herbert-simon',
    difficulty: 'easy',
    question:
      'Herbert Simon argued humans often “satisfice” rather than optimize. What does satisficing mean in a decision problem where you want to maximize $U(a)$ over actions $a\\in\\mathcal{A}$?',
    options: [
      'Choose the first/available $a$ such that $U(a)\\ge \\tau$ (a threshold of “good enough”), given limited time/compute/information',
      'Compute $\\arg\\max_{a\\in\\mathcal{A}} U(a)$ exactly every time',
      'Pick a uniformly random action to avoid bias',
      'Always follow what an authority figure recommends'
    ],
    correctIndex: 0,
    explanation:
      'Bounded rationality means constraints on search and computation. Instead of exhaustive optimization, agents often use heuristics and stopping rules like “accept if $U(a)$ exceeds threshold $\\tau$.”',
    realWorld:
      'Hiring, apartment search, and shopping often stop after finding an option that meets requirements before exploring the full space.',
    hint: 'It’s “good enough,” not “globally best.”'
  },
  {
    id: 13341,
    topic: 'herbert-simon',
    difficulty: 'easy',
    question:
      'What is the core claim of bounded rationality?',
    options: [
      'Real decision-makers have limited information, limited time, and limited computational capacity, so “perfect utility maximization” is often unrealistic',
      'Humans never reason and only react reflexively',
      'Economics is invalid because math is wrong',
      'All decisions are optimal if people try hard enough'
    ],
    correctIndex: 0,
    explanation:
      'Simon’s critique targets idealized models that assume agents can evaluate all options and compute exact optima. Real agents operate with constraints and heuristics.',
    realWorld:
      'UX design uses defaults and simplification because search costs and attention are scarce.',
    hint: 'Constraints on cognition and information.'
  },
  {
    id: 13342,
    topic: 'herbert-simon',
    difficulty: 'hard',
    question:
      'In computational terms, bounded rationality connects to problems where finding $\\arg\\max_{a\\in\\mathcal{A}}U(a)$ is intractable. Which statement best matches the idea?',
    options: [
      'When exact optimization is too costly (e.g., exponential search), agents use approximation/heuristics with acceptable error or regret',
      'Optimization is always easy if you have enough willpower',
      'Heuristics are always worse than exact solutions in practice',
      'Intractability only happens in games, not real life'
    ],
    correctIndex: 0,
    explanation:
      'Many decision problems are NP-hard or require huge search. Practical agents use heuristics, approximate inference, and bounded search (e.g., beam search), aiming for good performance rather than provable optimality.',
    realWorld:
      'Scheduling and routing often use approximation algorithms because exact solutions may be too slow at scale.',
    hint: '“Too hard to optimize exactly” → approximate.'
  },
  {
    id: 13343,
    topic: 'herbert-simon',
    difficulty: 'hard',
    question:
      'In sequential decision-making, one way to formalize “good enough” is to minimize regret. If optimal return is $V^*$ and your policy yields $V$, regret is $R=V^*-V$. A boundedly rational agent might aim to:',
    options: [
      'Keep expected regret $\\mathbb{E}[R]$ small under computation constraints rather than force $R=0$',
      'Guarantee $R=0$ for all problems without computation',
      'Maximize regret to explore more',
      'Ignore regret and only optimize aesthetics'
    ],
    correctIndex: 0,
    explanation:
      'Regret captures “how far from optimal.” Under bounded resources, we accept nonzero regret but want it controlled. This matches satisficing/approximation logic.',
    realWorld:
      'Online learning algorithms trade compute and data for regret guarantees (e.g., sublinear regret in $T$ in some settings).',
    hint: 'Bounded rationality: control error, don’t demand perfection.'
  },
  {
    id: 13344,
    topic: 'herbert-simon',
    difficulty: 'sota',
    question:
      'Simon also studied organizations as information-processing systems. A modern “Simon-style” view of AI tooling inside firms would emphasize what mechanism?',
    options: [
      'Reducing internal transaction/search/coordination costs by expanding bounded attention and speeding decision cycles (effectively increasing usable compute/knowledge)',
      'Replacing all humans so coordination disappears',
      'Eliminating uncertainty entirely',
      'Making decisions by coin flip to avoid bias'
    ],
    correctIndex: 0,
    explanation:
      'Organizations exist partly to manage bounded rationality via structure and routines. AI tools can alter those bounds (search, summarization, forecasting), shifting what problems are tractable and how coordination happens.',
    realWorld:
      'Teams use copilots, retrieval, and dashboards to reduce information bottlenecks and shorten time-to-decision.',
    hint: 'Think “organizations process information under constraints.”'
  }
];