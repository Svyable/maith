import type { Question } from '../types';

export const darrellDuffieQuestions: Question[] = [
  {
    id: 32180, topic: 'darrell-duffie', difficulty: 'easy',
    question: 'Darrell Duffie is one of the most influential financial economists. What is the Duffie-Singleton framework for credit risk?',
    options: [
      'A reduced-form model where the defaultable bond price is: $$P(t,T) = \\mathbb{E}^Q\\left[\\exp\\left(-\\int_t^T (r_s + \\lambda_s(1-\\delta)) \\, ds\\right)\\right]$$ where $r_s$ is the risk-free rate, $\\lambda_s$ is the hazard rate (default intensity), and $\\delta$ is the recovery rate. Default arrives as a Cox process (doubly stochastic Poisson) with intensity $\\lambda_t$. This separates credit risk into probability of default (PD via $\\lambda$) and loss given default (LGD via $1-\\delta$).',
      'A structural model where default occurs when the firm\'s asset value $V_t$ falls below the debt barrier $B$.',
      'A model where credit spreads equal expected loss: $s = \\lambda \\cdot (1-\\delta)$ with constant parameters.',
      'A model where default is predicted by the Altman Z-score: $Z = 1.2X_1 + 1.4X_2 + \\ldots$'
    ],
    correctIndex: 0,
    explanation: 'Duffie-Singleton (1999) showed that defaultable bonds can be priced like default-free bonds with an adjusted short rate $r + \\lambda(1-\\delta)$. This elegant "as-if" result makes the model tractable: any term structure model can be extended to credit by adding a hazard rate process. The framework naturally handles stochastic default intensity and recovery, and extends to multi-name credit (CDOs, basket CDS) via correlated hazard rates.',
    realWorld: 'The Duffie-Singleton framework is the industry standard for pricing CDS, corporate bonds, and counterparty risk (CVA/DVA). It underlies the credit risk models at every major bank and rating agency.',
    hint: 'Price defaultable bonds like default-free bonds — but add a "hazard rate × loss" spread to the discount rate.',
    formulaLinks: ['credit-risk', 'hazard-rate'],
  },
  {
    id: 32181, topic: 'darrell-duffie', difficulty: 'hard',
    question: 'Duffie developed the theory of over-the-counter (OTC) market structure. What is his key finding about search and bargaining in OTC markets?',
    options: [
      'OTC markets are modeled as search-and-bargaining economies: traders meet counterparties at Poisson rate $\\lambda$ and negotiate prices via Nash bargaining. The equilibrium spread is: $$s = \\frac{\\text{adverse selection cost}}{1 + \\lambda / r} + \\frac{\\text{inventory cost}}{\\lambda}$$ As search intensity $\\lambda \\to \\infty$, the OTC market converges to a competitive (Walrasian) market with zero spreads. The key insight: OTC illiquidity arises from search frictions, not just asymmetric information.',
      'OTC markets are always more efficient than exchanges because bilateral negotiation reveals true values.',
      'OTC market prices follow a random walk identical to exchange-traded prices — venue doesn\'t matter.',
      'OTC markets exist solely because of regulatory arbitrage — they would disappear under perfect regulation.'
    ],
    correctIndex: 0,
    explanation: 'Duffie, Gârleanu, and Pedersen (2005, 2007) introduced search theory from labor economics into financial markets. They showed that the $6+ trillion daily FX market and $40+ trillion corporate bond market can be understood as matching problems: dealers serve as intermediaries who bridge the time gap between natural buyers and sellers, earning a spread for providing this service.',
    realWorld: 'This framework influenced post-2008 regulation: central clearing mandates, trade reporting requirements, and electronic trading platforms for OTC derivatives all aim to increase $\\lambda$ (search intensity) and reduce intermediation rents.',
    hint: 'OTC markets are like job markets — finding a counterparty takes time, and dealers charge for matching.',
    formulaLinks: ['otc-markets', 'search-theory'],
  },
  {
    id: 32182, topic: 'darrell-duffie', difficulty: 'sota',
    question: 'Duffie (with Strulovici) developed the theory of "dark pool" equilibrium. What determines whether traders use dark pools vs. lit exchanges?',
    options: [
      'Traders face a tradeoff: dark pools offer zero market impact (midpoint execution) but uncertain fill rates, while lit exchanges offer certain execution but with price impact. In equilibrium, an investor with urgency $\\theta$ uses the dark pool if: $$\\underbrace{\\frac{1}{2}s_{\\text{lit}}}_{\\text{spread saved}} > \\underbrace{\\theta \\cdot \\Delta t_{\\text{delay}}}_{\\text{cost of waiting}}$$ Patient traders ($\\theta$ low) prefer dark pools; urgent traders prefer lit markets. As dark pool usage increases, lit market spreads widen (adverse selection from cream-skimming), creating a fragility spiral.',
      'Dark pools are always preferred because they offer anonymity — there is no reason to use lit exchanges.',
      'Traders choose randomly between dark and lit venues — the equilibrium split is 50/50.',
      'Only institutional traders use dark pools; retail traders always use lit exchanges due to regulation.'
    ],
    correctIndex: 0,
    explanation: 'Duffie\'s dark pool model explains the "paradox of dark liquidity": as more uninformed traders migrate to dark pools to avoid impact, the remaining lit market becomes more adversely selected (higher fraction of informed flow), causing market makers to widen spreads. This makes dark pools even more attractive, potentially leading to a "death spiral" for lit markets. The model predicts optimal dark pool market share of ~30-40% — roughly matching empirical US equity market fragmentation.',
    realWorld: 'This analysis directly influenced SEC regulation of dark pools and the debate over payment for order flow (PFOF). Understanding Duffie\'s equilibrium is essential for market structure design at exchanges, regulators, and electronic market makers.',
    hint: 'Patient traders save the spread in dark pools; but if too many go dark, the lit market deteriorates for everyone.',
    formulaLinks: ['dark-pools', 'market-microstructure'],
  },
];
