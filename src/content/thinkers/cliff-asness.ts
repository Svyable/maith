import type { Question } from '../types';

export const cliffAsnessQuestions: Question[] = [
  {
    id: 32170, topic: 'cliff-asness', difficulty: 'easy',
    question: 'Cliff Asness co-founded AQR Capital Management and is known for systematic factor investing. What is the "value and momentum everywhere" finding?',
    options: [
      'Value (buying cheap, selling expensive) and momentum (buying recent winners, selling losers) are profitable in virtually every asset class — equities, bonds, currencies, and commodities — and their returns are negatively correlated: $$r_{\\text{combined}} = w_V \\cdot r_{\\text{value}} + w_M \\cdot r_{\\text{momentum}}$$ with $\\text{Corr}(r_V, r_M) \\approx -0.5$. This negative correlation means combining them roughly doubles the Sharpe ratio.',
      'Value and momentum only work in US large-cap equities and fail in other asset classes due to higher transaction costs.',
      'Value and momentum are two names for the same factor — they are 90% correlated.',
      'Value works in equities and momentum works in commodities, but not vice versa.'
    ],
    correctIndex: 0,
    explanation: 'Asness, Moskowitz, and Pedersen (2013) showed that value (long cheap/short expensive based on book-to-market, carry, or yield) and momentum (long recent winners/short losers over 12-1 month horizon) are profitable across 8 diverse markets spanning equities (US, UK, Europe, Japan), bonds, currencies, and commodities. The negative correlation is a "hedge fund in a bottle" — diversification from negatively correlated premia.',
    realWorld: 'AQR manages ~$100B using systematic factor strategies. Their research showed that much of hedge fund "alpha" is actually exposure to well-known factors — a finding that accelerated the growth of "smart beta" and factor ETFs.',
    hint: 'Cheap assets and trending assets are profitable everywhere — and they offset each other\'s drawdowns.',
  },
  {
    id: 32171, topic: 'cliff-asness', difficulty: 'hard',
    question: 'Asness documented the "value spread" as a timing signal for factor returns. What is this concept?',
    options: [
      'The value spread measures how cheap "value stocks" are relative to "growth stocks" compared to historical norms: $$\\text{VS}_t = \\frac{B/M_{\\text{value, }t}}{B/M_{\\text{growth, }t}} \\Big/ \\text{median}\\left(\\frac{B/M_{\\text{value}}}{B/M_{\\text{growth}}}\\right)$$ When the spread is wide (value is historically cheap relative to growth), future value factor returns are higher. The spread reached historic extremes in 1999-2000 (tech bubble) and 2020 (COVID growth rally), predicting strong subsequent value recoveries.',
      'The value spread is the bid-ask spread of value stocks minus growth stocks — a measure of liquidity.',
      'The value spread is the difference between book value and market value for the median stock.',
      'The value spread is the correlation between the value factor and the market factor — measuring systematic risk.'
    ],
    correctIndex: 0,
    explanation: 'Asness showed that the value spread has strong predictive power for future HML returns: a 1-standard-deviation widening predicts ~3% additional annual return to value over the subsequent 5 years. During the "quant winter" of 2018-2020, the value spread reached levels wider than the dot-com bubble, leading Asness to famously argue that value was "cheaper than ever" — which was vindicated by the 2021-2022 value rally.',
    realWorld: 'Factor timing based on valuation spreads is practiced by AQR, DFA, and many pension funds. It\'s a key input for asset allocation decisions involving hundreds of billions of dollars.',
    hint: 'When value stocks are extremely cheap relative to growth, value tends to outperform going forward.',
  },
  {
    id: 32172, topic: 'cliff-asness', difficulty: 'sota',
    question: 'AQR\'s research identified "quality minus junk" (QMJ) as a distinct factor. What does QMJ capture?',
    options: [
      'QMJ is long high-quality stocks (profitable, growing, safe, well-managed) and short low-quality "junk" stocks. Quality is measured by a composite score: $$\\text{Quality} = z(\\text{Profitability}) + z(\\text{Growth}) + z(\\text{Safety}) + z(\\text{Payout})$$ where $z(\\cdot)$ denotes cross-sectional z-scores. Profitability = gross profits/assets (Novy-Marx); Growth = 5-year earnings growth; Safety = low leverage + low earnings volatility; Payout = high dividends + buybacks. QMJ earns $\\sim 4\\%$/year with Sharpe $\\sim 0.5$.',
      'QMJ is long high-P/E stocks and short low-P/E stocks — the opposite of the value factor.',
      'QMJ measures the quality of a company\'s management team based on CEO tenure and board independence.',
      'QMJ is the residual return after controlling for market, size, value, and momentum — pure unexplained alpha.'
    ],
    correctIndex: 0,
    explanation: 'Asness, Frazzini, and Pedersen (2019) showed that QMJ is a robust factor that: (1) earns positive average returns globally, (2) is not explained by other known factors, (3) has performed well during market crashes (flight to quality), and (4) has a "price of quality" that varies over time — when quality is cheap, future QMJ returns are higher. The factor confirms Buffett\'s intuition: high-quality companies at reasonable prices outperform over time.',
    realWorld: 'QMJ-style factors are now embedded in hundreds of billions of "quality" ETFs and smart beta products. AQR showed that Warren Buffett\'s alpha can be largely explained by systematic exposure to value, quality, and low-risk factors — demystifying the "Oracle of Omaha."',
    hint: 'Buy profitable, growing, safe companies. Sell unprofitable, shrinking, risky "junk." It works everywhere.',
  },
];
