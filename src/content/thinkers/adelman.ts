import type { Question } from '../types';

export const adelmanQuestions: Question[] = [
  {
    id: 20980,
    topic: 'adelman',
    difficulty: 'easy',
    question: "Irma Adelman's pioneering 1960s work involved translating economic growth theories into what computational form?",
    options: [
      'Fortran programs simulating entire developing economies on mainframes',
      'Spreadsheet models for GDP forecasting',
      'Monte Carlo simulations for trade policy',
      'SQL databases of historical economic indicators'
    ],
    correctIndex: 0,
    explanation: "Adelman was among the first economists to write Fortran code that simulated the dynamics of entire national economies on early mainframe computers.",
    realWorld: "Her approach was the direct precursor to modern Computable General Equilibrium (CGE) models used by the World Bank and IMF.",
    hint: "In the 1960s, most economists used pencil and paper — she used computers."
  },
  {
    id: 20981,
    topic: 'adelman',
    difficulty: 'hard',
    question: "Adelman and Morris's computational analysis of early industrialization demonstrated what pattern in income distribution?",
    options: [
      'Income inequality increases sharply before declining (Kuznets inverted-U)',
      'Inequality decreases monotonically with GDP growth',
      'Income distribution remains stable throughout development',
      'Only the top decile gains during industrialization'
    ],
    correctIndex: 0,
    explanation: "Their computational models provided early quantitative evidence for the Kuznets inverted-U hypothesis: inequality worsens during early industrialization then improves.",
    realWorld: "This pattern has been observed in rapidly industrializing countries like China, India, and Brazil.",
    hint: "Think about what happens when workers move from farms to factories."
  },
  {
    id: 20982,
    topic: 'adelman',
    difficulty: 'sota',
    question: "Adelman's CGE (Computable General Equilibrium) models were groundbreaking because they could:",
    options: [
      'Simulate policy counterfactuals for entire economies before implementation',
      'Predict exact stock market movements with high accuracy',
      'Replace the need for national statistical agencies',
      'Solve the socialist economic calculation problem computationally'
    ],
    correctIndex: 0,
    explanation: "CGE models let economists run 'what if?' experiments — modeling how a proposed policy change would ripple through all sectors of an economy simultaneously.",
    realWorld: "Today's trade policy simulations (e.g., Brexit impact models, tariff analyses) are direct descendants of her computational approach.",
    hint: "Think about running experiments on an entire economy without actually changing policy."
  }
];
