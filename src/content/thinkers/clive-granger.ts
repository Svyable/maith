// granger.ts
import type { Question } from '../types';

export const grangerQuestions: Question[] = [
  {
    id: 69600,
    topic: 'clive-granger',
    difficulty: 'easy',
    question: 'Granger causality tests?',
    options: [
      'X Granger-causes Y if past X improves Y forecasts',
      'Correlation coefficient',
      'Cointegration test',
      'Spectral coherence'
    ],
    correctIndex: 0,
    explanation: 'F-test: VAR lags of X excluded from Y equation.',
    realWorld: 'Macro forecasting, pairs trading.',
    hint: 'Predictive information flow.'
  },
  {
    id: 69601,
    topic: 'clive-granger',
    difficulty: 'hard',
    question: 'Granger test VAR(p) specification?',
    options: [
      'Y_t = ∑ α_i Y_{t-i} + ∑ β_i X_{t-i} + ε_t; test β_i=0',
      'Simple AR(1)',
      'OLS bivariate regression',
      'Spectral regression'
    ],
    correctIndex: 0,
    explanation: 'Block exogeneity F-test on coefficients.',
    realWorld: 'Lead-lag relationships.',
    hint: 'Past X excluded from Y equation?'
  },
  {
    id: 69602,
    topic: 'clive-granger',
    difficulty: 'sota',
    question: 'Granger non-causality condition?',
    options: [
      'E[Y_t | I_t] = E[Y_t | I_{t|Y}] (Y info suffices)',
      'Perfect correlation',
      'Lead-lag zero',
      'Cointegration present'
    ],
    correctIndex: 0,
    explanation: 'Past X adds no information beyond past Y.',
    realWorld: 'Causal ordering identification.',
    hint: 'Forecast improvement test.'
  },
  {
    id: 69603,
    topic: 'clive-granger',
    difficulty: 'hard',
    question: 'Instantaneous Granger causality?',
    options: [
      'Residual covariance Ω_{XY} ≠ 0 after VAR orthogonalization',
      'Lead-lag only',
      'Frequency domain',
      'Nonlinear test'
    ],
    correctIndex: 0,
    explanation: 'Contemporaneous correlation after conditioning.',
    realWorld: 'Multivariate VAR decomposition.',
    hint: 'Current X helps predict current Y.'
  },
  {
    id: 69604,
    topic: 'clive-granger',
    difficulty: 'sota',
    question: 'Granger vs Toda-Yamamoto?',
    options: [
      'TY: levels VAR regardless of cointegration (MLE consistent)',
      'Requires stationarity',
      'Frequency domain only',
      'Nonlinear VAR'
    ],
    correctIndex: 0,
    explanation: 'Extra lag corrects non-stationarity bias.',
    realWorld: 'Macro/policy causality.',
    hint: 'Works with I(1) without pretesting.'
  },
  {
    id: 69605,
    topic: 'clive-granger',
    difficulty: 'easy',
    question:
      'In time-series econometrics, what does it mean to say “$X$ Granger-causes $Y$”?',
    options: [
      '$X$ Granger-causes $Y$ if past values of $X$ contain information that helps predict $Y_t$ beyond past values of $Y$ alone',
      '$X$ and $Y$ have a high contemporaneous correlation',
      '$X$ causes $Y$ in the structural, philosophical sense',
      '$X$ and $Y$ are cointegrated'
    ],
    correctIndex: 0,
    explanation:
      'Granger causality is about predictive content: if including lagged $X$ significantly improves forecasts of $Y$, then $X$ Granger-causes $Y$. It does not imply true structural causation.',
    realWorld:
      'Used in macroeconomics (GDP → inflation?), finance (lead–lag in asset returns), and neuroscience (signal flow between regions).',
    hint:
      'It’s about forecast improvement using past information.'
  },
  {
    id: 69606,
    topic: 'clive-granger',
    difficulty: 'hard',
    question:
      'In a VAR($p$) framework, the standard Granger causality test for “$X$ does not Granger-cause $Y$” is implemented how?',
    options: [
      'Estimate $Y_t=\\sum_{i=1}^p \\alpha_i Y_{t-i}+\\sum_{i=1}^p \\beta_i X_{t-i}+\\varepsilon_t$ and test $H_0:\\beta_1=\\cdots=\\beta_p=0$ (joint F/Wald test)',
      'Run a simple AR(1) on $Y_t$ and check if $X_t$ is correlated with residuals',
      'Test whether $\\mathrm{corr}(X_t,Y_t)=0$',
      'Perform PCA and compare eigenvalues'
    ],
    correctIndex: 0,
    explanation:
      'The null of non-causality is that all lagged coefficients on $X$ in the $Y$ equation are jointly zero. A Wald or F-test is used.',
    realWorld:
      'This “block exogeneity” test is standard in VAR-based policy analysis and macro forecasting.',
    hint:
      'Test whether all lagged $X$ coefficients vanish.'
  },
  {
    id: 69607,
    topic: 'clive-granger',
    difficulty: 'sota',
    question:
      'Formally, let $\\mathcal{I}_t$ be the information set including past $X$ and $Y$, and $\\mathcal{I}_t^{(Y)}$ only past $Y$. Which condition expresses Granger non-causality of $X$ for $Y$?',
    options: [
      '$\\mathbb{E}[Y_t\\mid \\mathcal{I}_{t-1}]=\\mathbb{E}[Y_t\\mid \\mathcal{I}_{t-1}^{(Y)}]$',
      '$\\mathrm{corr}(X_t,Y_t)=0$',
      '$X_t$ and $Y_t$ are independent for all $t$',
      '$Y_t$ is stationary'
    ],
    correctIndex: 0,
    explanation:
      'If conditioning on past $X$ does not change the conditional expectation of $Y_t$ beyond past $Y$, then $X$ does not Granger-cause $Y$.',
    realWorld:
      'Clarifies that Granger causality is conditional predictability, not mere correlation or independence.',
    hint:
      'Does adding past $X$ change the conditional expectation?'
  },
  {
    id: 69608,
    topic: 'clive-granger',
    difficulty: 'hard',
    question:
      'In a multivariate VAR with residual covariance matrix $\\Omega$, what is often meant by “instantaneous Granger causality”?',
    options: [
      'After conditioning on lags, contemporaneous innovations are correlated (off-diagonal elements of $\\Omega$ are nonzero)',
      '$X_{t-1}$ predicts $Y_t$ but not vice versa',
      'There is cointegration between $X$ and $Y$',
      'Causality exists only at certain frequencies'
    ],
    correctIndex: 0,
    explanation:
      'If residuals remain correlated after controlling for lagged terms, there is contemporaneous dependence—sometimes called instantaneous causality (though it is not directional without further identification).',
    realWorld:
      'Important in structural VARs, where additional identification (e.g., Cholesky ordering) is needed to interpret shocks.',
    hint:
      'Look at the covariance of current shocks.'
  },
  {
    id: 69609,
    topic: 'clive-granger',
    difficulty: 'sota',
    question:
      'The Toda–Yamamoto procedure modifies standard Granger testing when variables may be integrated or cointegrated. What is its key idea?',
    options: [
      'Estimate a VAR in levels with $p+d_{max}$ lags (where $d_{max}$ is max integration order) and test only the first $p$ lags',
      'Difference all variables until stationary and ignore long-run relations',
      'Use frequency-domain spectral regression instead of VAR',
      'Apply nonlinear kernel regression instead of linear VAR'
    ],
    correctIndex: 0,
    explanation:
      'Toda–Yamamoto avoids pretesting for cointegration by overfitting the VAR with extra lags, ensuring valid asymptotic inference for Wald tests.',
    realWorld:
      'Common in macro and policy analysis where unit roots and cointegration are pervasive and pretests can distort inference.',
    hint:
      'Add extra lags to protect the Wald test.'
  }
];
