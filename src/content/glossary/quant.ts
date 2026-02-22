import type { GlossaryTerm } from './types';

export const quantTerms: GlossaryTerm[] = [
  { id: 'black-scholes', field: 'quant', term: 'Black–Scholes Model', definition: 'A model for pricing European options using stock price, strike, volatility, time to expiry, and risk-free rate: $C = S\\,N(d_1) - Ke^{-rT}N(d_2)$.', example: 'Every options trading desk uses Black-Scholes or its extensions.' },
  { id: 'sharpe-ratio', field: 'quant', term: 'Sharpe Ratio', definition: 'Risk-adjusted return: $S = \\frac{R_p - R_f}{\\sigma_p}$. Higher is better—more return per unit of risk.', example: 'Hedge funds target Sharpe ratios above 1.0 for investor appeal.' },
  { id: 'var', field: 'quant', term: 'Value at Risk (VaR)', definition: 'The maximum expected loss over a given time horizon at a specified confidence level (e.g., 95% VaR).', example: 'Banks use VaR to determine capital reserves for regulatory compliance.' },
  { id: 'stochastic-process', field: 'quant', term: 'Stochastic Process', definition: 'A collection of random variables indexed by time, modelling systems that evolve probabilistically.', example: 'Stock prices are modelled as geometric Brownian motion.' },
  { id: 'monte-carlo', field: 'quant', term: 'Monte Carlo Simulation', definition: 'Using repeated random sampling to estimate numerical results, especially for problems with many degrees of freedom.', example: 'Pricing exotic derivatives with path-dependent payoffs.' },
  { id: 'alpha-finance', field: 'quant', term: 'Alpha (α)', definition: 'Excess return of an investment relative to a benchmark index. Positive alpha means the strategy beat the market.', example: 'A fund returning 12% when the S&P returned 10% has α = 2%.' },
];
