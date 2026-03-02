import type { Question } from '../types';

export const coaseQuestions: Question[] = [
  {
    id: 13345,
    topic: 'coase',
    difficulty: 'easy',
    question:
      'Ronald Coase argued that markets are not frictionless. What are “transaction costs,” and why do they matter for economic organization?',
    options: [
      'Costs of using the market: search, bargaining, contracting, monitoring, and enforcement; they help explain why firms exist and how exchanges are structured',
      'Only the cost of transportation fuel',
      'Only the cost of producing goods inside factories',
      'A tax that governments always impose on trade'
    ],
    correctIndex: 0,
    explanation:
      'If it is costly to find partners, negotiate, write/verify contracts, and enforce agreements, then sometimes coordinating within a firm (hierarchy) is cheaper than repeated market contracting.',
    realWorld:
      'Supply chains often vertically integrate when contracting is costly or quality is hard to verify.',
    hint: 'It’s the “cost of doing the deal,” not making the thing.'
  },
  {
    id: 13346,
    topic: 'coase',
    difficulty: 'easy',
    question:
      'The classic Coase theorem (in its strongest textbook form) says: if property rights are well-defined and transaction costs are zero, then bargaining will lead to:',
    options: [
      'An efficient outcome regardless of the initial allocation of rights',
      'No trade because bargaining is impossible',
      'An outcome determined purely by government policy',
      'Inefficiency because private bargaining always fails'
    ],
    correctIndex: 0,
    explanation:
      'With zero transaction costs, parties can bargain to internalize externalities. The initial rights affect who pays whom, but (under strong assumptions) not the efficiency of the final allocation.',
    realWorld:
      'Real life has nonzero transaction costs, so institutions, liability rules, and regulation can matter a lot.',
    hint: 'The magic assumption is “zero transaction costs.”'
  },
  {
    id: 13347,
    topic: 'coase',
    difficulty: 'hard',
    question:
      'Coase’s 1937 question “Why do firms exist?” can be stated as a cost comparison. A firm expands until what condition roughly holds between internal coordination cost and market transaction cost?',
    options: [
      'Expand until marginal internal coordination cost equals marginal market transaction cost (at the boundary, they are about the same)',
      'Expand until the firm owns everything',
      'Expand only if internal cost is always zero',
      'Expand until the CEO gets tired (no economic principle)'
    ],
    correctIndex: 0,
    explanation:
      'If organizing one more transaction internally costs less than using the market, the firm tends to internalize it; if it costs more, it tends to outsource. The boundary is where marginal costs roughly balance.',
    realWorld:
      'Modern firms outsource payroll, cloud infrastructure, or logistics when specialized providers reduce transaction and coordination costs.',
    hint: 'It’s a marginal comparison: “make vs buy.”'
  },
  {
    id: 13348,
    topic: 'coase',
    difficulty: 'hard',
    question:
      'Why does the Coase theorem often fail as a practical policy guide even if it is conceptually illuminating? Pick the best “Coasean” reason.',
    options: [
      'Because transaction costs (bargaining, coordination, enforcement) are rarely near zero, so bargaining can be infeasible or inefficient',
      'Because property rights can always be defined perfectly in real life',
      'Because externalities do not exist in practice',
      'Because bargaining always produces exactly equal outcomes for all parties'
    ],
    correctIndex: 0,
    explanation:
      'Nonzero transaction costs—plus strategic behavior, information asymmetries, and large numbers of affected parties—can block or distort bargaining. Coase’s point is precisely to take these frictions seriously.',
    realWorld:
      'Pollution affecting thousands of residents is hard to bargain over: coordination and enforcement are expensive.',
    hint: 'The theorem is strongest when the “friction” term is ~0.'
  },
  {
    id: 13349,
    topic: 'coase',
    difficulty: 'sota',
    question:
      'A digital platform (marketplace/app store) can be interpreted through Coase: it reduces transaction costs. Which formal-ish mapping best matches this idea?',
    options: [
      'Platform lowers $C_{tx}$ (search + trust + payment + enforcement), increasing feasible trades when surplus $S$ satisfies $S > C_{tx}$',
      'Platform raises $C_{tx}$ so fewer trades happen and efficiency rises',
      'Platform eliminates scarcity so economics no longer applies',
      'Platform makes property rights undefined so bargaining becomes perfect'
    ],
    correctIndex: 0,
    explanation:
      'If a potential trade yields surplus $S$ but the costs to execute it are $C_{tx}$, then trade happens when $S-C_{tx}>0$. Platforms can reduce $C_{tx}$ via reputation, escrow, matching, and standardized rules—expanding the set of feasible trades.',
    realWorld:
      'Ratings, identity verification, dispute resolution, and payments infrastructure are transaction-cost reducers that enable trust at scale.',
    hint: 'Trade expands when the platform makes $C_{tx}$ smaller.'
  }
];