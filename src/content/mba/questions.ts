import type { Question } from '../types';

// ── Corporate Strategy ──
export const mbaStrategyQuestions: Question[] = [
  {
    id: 83100,
    topic: 'mba-strategy',
    difficulty: 'easy',
    question: 'Porter\'s Five Forces framework analyzes industry attractiveness. Which is NOT one of the five forces?',
    options: [
      'Employee satisfaction levels',
      'Threat of new entrants',
      'Bargaining power of suppliers',
      'Threat of substitute products',
    ],
    correctIndex: 0,
    explanation: 'The five forces are: rivalry, new entrants, substitutes, buyer power, and supplier power. Employee satisfaction is not a force.',
    realWorld: 'McKinsey and BCG consultants use Five Forces as a standard framework in strategy engagements.',
    hint: 'The forces are about competitive dynamics, not internal HR metrics.',
  },
  {
    id: 83101,
    topic: 'mba-strategy',
    difficulty: 'hard',
    question: 'A "blue ocean strategy" aims to:',
    options: [
      'Create uncontested market space by making competition irrelevant',
      'Compete head-on with the market leader on price',
      'Acquire all competitors through M&A',
      'Focus exclusively on cost reduction',
    ],
    correctIndex: 0,
    explanation: 'Kim & Mauborgne\'s Blue Ocean Strategy creates new demand through value innovation rather than fighting in existing "red oceans."',
    realWorld: 'Cirque du Soleil created a blue ocean by blending circus and theater, avoiding traditional circus competition.',
    hint: 'It\'s about creating new market space, not fighting in existing markets.',
  },
  {
    id: 83102,
    topic: 'mba-strategy',
    difficulty: 'sota',
    question: 'Platform business models exhibit network effects. In a two-sided market, the "chicken-and-egg" problem refers to:',
    options: [
      'Needing users on both sides but neither joins without the other',
      'Having too many suppliers and not enough demand',
      'The difficulty of setting prices above zero',
      'Regulatory barriers to market entry',
    ],
    correctIndex: 0,
    explanation: 'Two-sided platforms (Uber, Airbnb) must solve cold-start: riders need drivers and vice versa. Subsidies and seeding help bootstrap.',
    realWorld: 'Uber initially subsidized drivers heavily to build supply before demand materialized.',
    hint: 'Both sides of the marketplace depend on each other to join.',
  },
];

// ── Marketing Analytics ──
export const mbaMarketingQuestions: Question[] = [
  {
    id: 83200,
    topic: 'mba-marketing',
    difficulty: 'easy',
    question: 'Customer Lifetime Value (CLV) represents:',
    options: [
      'The total net profit a company expects from a customer over the entire relationship',
      'The cost to acquire a single customer',
      'The price of the most expensive product purchased',
      'The number of years a customer has been active',
    ],
    correctIndex: 0,
    explanation: 'CLV = Σ(margin × retention rate)^t / (1+d)^t, the discounted future profit stream from a customer.',
    realWorld: 'Amazon and Netflix obsess over CLV/CAC ratios to guide acquisition spending.',
    hint: 'It\'s the total value, not just one transaction.',
  },
  {
    id: 83201,
    topic: 'mba-marketing',
    difficulty: 'hard',
    question: 'Multi-touch attribution modeling aims to:',
    options: [
      'Allocate conversion credit across all marketing touchpoints in the customer journey',
      'Attribute 100% credit to the last click only',
      'Ignore digital channels entirely',
      'Measure only brand awareness metrics',
    ],
    correctIndex: 0,
    explanation: 'Multi-touch models (linear, time-decay, Shapley value) distribute credit, overcoming last-click bias.',
    realWorld: 'Google and Meta offer data-driven attribution models using ML to assign fractional credit.',
    hint: 'The customer journey has many touchpoints, not just the last one.',
  },
  {
    id: 83202,
    topic: 'mba-marketing',
    difficulty: 'sota',
    question: 'Marketing Mix Modeling (MMM) using Bayesian methods (e.g., Meta\'s Robyn) improves over traditional regression by:',
    options: [
      'Incorporating prior knowledge and handling adstock/saturation curves with uncertainty quantification',
      'Eliminating the need for any historical data',
      'Only measuring online channels',
      'Assuming linear response to all spending',
    ],
    correctIndex: 0,
    explanation: 'Bayesian MMM encodes priors on diminishing returns (Hill saturation) and carryover (geometric adstock) with credible intervals.',
    realWorld: 'Meta\'s open-source Robyn and Google\'s Meridian are modern Bayesian MMM tools used by major advertisers.',
    hint: 'Bayesian = priors + uncertainty; saturation = diminishing returns.',
  },
];

// ── Operations Management ──
export const mbaOperationsQuestions: Question[] = [
  {
    id: 83300,
    topic: 'mba-operations',
    difficulty: 'easy',
    question: 'The bullwhip effect in supply chains describes:',
    options: [
      'Demand variability amplification as you move upstream from consumer to manufacturer',
      'Decreasing inventory at every stage',
      'Perfect information flow between all partners',
      'Reduced lead times throughout the chain',
    ],
    correctIndex: 0,
    explanation: 'Small demand fluctuations at retail get amplified through ordering patterns, causing huge swings at the manufacturer level.',
    realWorld: 'P&G first documented the bullwhip effect with Pampers diapers — stable consumer demand but volatile factory orders.',
    hint: 'Information distortion causes wild swings upstream.',
  },
  {
    id: 83301,
    topic: 'mba-operations',
    difficulty: 'hard',
    question: 'Little\'s Law states that L = λW, where L is the average number in the system, λ is arrival rate, and W is:',
    options: [
      'Average time a customer spends in the system',
      'The number of servers',
      'The service rate per server',
      'The queue capacity',
    ],
    correctIndex: 0,
    explanation: 'Little\'s Law is universal: it holds for any stable queueing system regardless of distribution assumptions.',
    realWorld: 'Operations managers use L=λW to calculate required WIP inventory or staffing levels.',
    hint: 'It relates three fundamental queueing metrics.',
  },
  {
    id: 83302,
    topic: 'mba-operations',
    difficulty: 'sota',
    question: 'Digital twins in supply chain management provide value primarily by:',
    options: [
      'Simulating the entire supply chain virtually to test scenarios before real-world implementation',
      'Replacing all physical inventory with virtual inventory',
      'Eliminating the need for suppliers',
      'Automating all manual labor in warehouses',
    ],
    correctIndex: 0,
    explanation: 'Digital twins create real-time virtual replicas of physical supply chains, enabling what-if analysis and predictive optimization.',
    realWorld: 'Unilever and Siemens use supply chain digital twins to simulate disruptions and optimize logistics.',
    hint: 'It\'s a virtual model of the real system for simulation and optimization.',
  },
];
