import type { Question } from '../types';

export const mertonRobertQuestions: Question[] = [
  {
    id: 19401, topic: 'merton-robert', difficulty: 'easy',
    question: 'Robert C. Merton shared the 1997 Nobel Prize for:',
    options: ['Developing a method for pricing derivatives (Black-Scholes-Merton model)', 'Creating the first hedge fund', 'Inventing portfolio optimization', 'Founding modern macroeconomics'],
    correctIndex: 0,
    explanation: 'Merton provided the rigorous mathematical framework for the Black-Scholes option pricing model using continuous-time finance and stochastic calculus.',
    realWorld: 'The Black-Scholes-Merton formula underpins the multi-trillion dollar global derivatives market.',
    hint: 'He made the Black-Scholes formula mathematically rigorous using continuous-time methods.',
  },
  {
    id: 19402, topic: 'merton-robert', difficulty: 'hard',
    question: 'Merton\'s structural model of credit risk treats a firm\'s equity as:',
    options: ['A call option on the firm\'s assets with strike equal to debt face value', 'A bond with fixed coupons', 'A put option on interest rates', 'A forward contract on earnings'],
    correctIndex: 0,
    explanation: 'In Merton (1974), equity = $\\max(V_T - D, 0)$. If assets $V_T < D$ (debt), equity is worthless and the firm defaults. Distance-to-default measures how far assets are from the default boundary.',
    realWorld: 'Moody\'s KMV model, used by banks worldwide, is directly based on Merton\'s structural framework.',
    hint: 'Shareholders have limited liability — their payoff looks like a call option payoff.',
  },
  {
    id: 19403, topic: 'merton-robert', difficulty: 'sota',
    question: 'Merton\'s Intertemporal CAPM (ICAPM) extends the standard CAPM by:',
    options: ['Adding hedging demands — investors hedge against changes in future investment opportunities', 'Using a single-period framework', 'Ignoring risk-free rates', 'Assuming constant volatility'],
    correctIndex: 0,
    explanation: 'ICAPM (1973) shows that in a multi-period world, investors demand compensation not just for market risk but also for changes in the investment opportunity set (interest rates, volatility, etc.).',
    realWorld: 'ICAPM explains why assets correlated with volatility changes command risk premiums beyond the market beta.',
    hint: 'Investors care about both current returns AND how future investment opportunities might change.',
  },
];
