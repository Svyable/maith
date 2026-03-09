import type { Question } from '../types';

export const albertKyleQuestions: Question[] = [
  {
    id: 32120, topic: 'albert-kyle', difficulty: 'easy',
    question: 'Albert "Pete" Kyle\'s 1985 paper is one of the most cited in finance. What is Kyle\'s model of informed trading?',
    options: [
      'A strategic market microstructure model with three players: (1) an informed trader who knows the asset\'s true value $v$, (2) noise traders who submit random orders $u \\sim N(0, \\sigma_u^2)$, and (3) a market maker who sets prices efficiently given total order flow $y = x + u$. The equilibrium price is $p = \\mu + \\lambda y$ where $\\lambda = \\sigma_v / (2\\sigma_u)$ is "Kyle\'s lambda" — the price impact per unit of order flow.',
      'A model where all traders are equally informed and prices follow a random walk with no information content in order flow.',
      'A model of insider trading where the informed trader submits market orders that are immediately detected by the exchange.',
      'A model where the market maker has superior information and extracts rents from uninformed traders via wide spreads.'
    ],
    correctIndex: 0,
    explanation: 'Kyle\'s key insights: (1) the informed trader trades gradually, mixing her orders with noise to avoid detection — she submits $x = \\beta(v - \\mu)$ where $\\beta = \\sigma_u/\\sigma_v$. (2) The market maker cannot distinguish informed from uninformed flow, so she uses total flow $y$ to update the price. (3) Information is incorporated into prices gradually, not instantly. (4) Kyle\'s lambda $\\lambda$ measures market "depth" — the inverse of liquidity.',
    realWorld: 'Kyle\'s lambda is estimated daily by quant firms and regulators to measure market liquidity, detect insider trading, and calibrate execution algorithms. It\'s the foundation of the VPIN (Volume-Synchronized Probability of Informed Trading) measure.',
    hint: 'The informed trader hides among the noise traders. The market maker infers information from total order flow.',
    formulaLinks: ['kyle-lambda'],
  },
  {
    id: 32121, topic: 'albert-kyle', difficulty: 'hard',
    question: 'In Kyle\'s continuous-time model, how does information get incorporated into prices?',
    options: [
      'Information is revealed linearly over time: $p_t = \\mathbb{E}[v | \\mathcal{F}_t^y]$ where $\\mathcal{F}_t^y$ is the filtration of aggregate order flow. The price follows $dp_t = \\lambda \\, dy_t$ where $dy_t = \\beta(v - p_t) dt + \\sigma_u dW_t$. The informed trader\'s optimal intensity is $\\beta = 1/(\\lambda(T-t))$, so she trades more aggressively as the deadline $T$ approaches. All private information is revealed by time $T$: $p_T = v$.',
      'Information is incorporated in discrete jumps at random Poisson times — prices are constant between jumps.',
      'Prices immediately reflect all information at time 0 due to rational expectations — no gradual revelation.',
      'Information is never fully incorporated — the informed trader retains her edge indefinitely.'
    ],
    correctIndex: 0,
    explanation: 'The continuous-time Kyle model has a beautiful structure: the informed trader chooses intensity to equalize the rate of information revelation across time. The residual information $\\Sigma_t = \\text{Var}(v | \\mathcal{F}_t^y)$ decays linearly: $\\Sigma_t = \\sigma_v^2(1 - t/T)$. Kyle\'s lambda is constant: $\\lambda = \\sigma_v / (2\\sigma_u\\sqrt{T})$. The model predicts that market depth is proportional to noise trader activity and inversely proportional to volatility.',
    realWorld: 'Kyle\'s continuous model is the basis for measuring the "information share" of different trading venues, understanding why markets are more liquid when more noise traders participate, and calibrating dark pool execution strategies.',
    hint: 'The informed trader spaces out her information revelation evenly — trading faster as the deadline nears.',
    formulaLinks: ['kyle-lambda', 'market-microstructure'],
  },
  {
    id: 32122, topic: 'albert-kyle', difficulty: 'sota',
    question: 'Kyle (2015) proposed a unified theory of market microstructure based on "market-clearing invariance." What is the invariance hypothesis?',
    options: [
      'The distribution of risk-adjusted returns per trade, measured in units of "business time" (volume clock), is invariant across stocks and time: $$\\tilde{r}_j = \\frac{\\text{return per trade}}{\\text{bet size}} \\sim \\text{invariant distribution}$$ Specifically, if $V$ is daily volume, $\\sigma$ is daily volatility, and $P$ is price, then the "trading activity" $I = \\sigma^2 P^2 V^{-1/3}$ determines market impact: $\\lambda \\propto I^{1/3}$. Kyle\'s lambda scales as $\\lambda \\propto \\sigma/(PV)^{1/3}$.',
      'All stocks have the same bid-ask spread in percentage terms — spreads are invariant across market caps.',
      'The Sharpe ratio of market making is constant across all securities at approximately 0.5 annualized.',
      'Order book shape (depth as a function of distance from mid-price) is identical for all stocks after rescaling by average spread.'
    ],
    correctIndex: 0,
    explanation: 'The invariance hypothesis is a deep scaling law: it predicts cross-sectional relationships between volume, volatility, spreads, and market impact using a single parameter. The key prediction — $\\lambda \\propto \\sigma/(PV)^{1/3}$ — has been empirically confirmed across thousands of stocks. It implies that a "bet" (the fundamental unit of informed trading) has a universal distribution, regardless of whether it\'s Apple or a small-cap stock.',
    realWorld: 'Quant execution desks use invariance-based impact models to predict transaction costs across different stocks without stock-specific calibration. It\'s also used by regulators to identify abnormal trading patterns.',
    hint: 'A universal scaling law connecting volume, volatility, and price impact — the same physics governs all stocks.',
    formulaLinks: ['kyle-lambda', 'market-impact'],
  },
];
