import type { Question } from '../types';

export const pearsonQuestions: Question[] = [
  {
    id: 21301, topic: 'karl-pearson', difficulty: 'easy',
    question: 'The Pearson correlation coefficient $r$ measures:',
    options: ['The strength and direction of the linear relationship between two variables, ranging from -1 to +1', 'The causal effect of one variable on another', 'The average of two variables', 'The variance of a single variable'],
    correctIndex: 0,
    explanation: '$r = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\sum(y_i-\\bar{y})^2}}$. r=+1 is perfect positive linear, r=-1 is perfect negative, r=0 means no linear relationship (but possibly nonlinear!).',
    realWorld: 'Finance uses correlation matrices to measure asset co-movement for portfolio diversification. In 2008, underestimated correlations between mortgage-backed securities contributed to the crisis.',
    hint: 'It captures LINEAR association only — a perfect parabola can have r=0.',
  },
  {
    id: 21302, topic: 'karl-pearson', difficulty: 'hard',
    question: 'Pearson\'s chi-squared test $\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$ is used for:',
    options: ['Testing whether observed categorical frequencies differ significantly from expected frequencies', 'Testing whether a continuous variable is normally distributed', 'Comparing means of two groups', 'Measuring correlation between continuous variables'],
    correctIndex: 0,
    explanation: 'The chi-squared test compares observed vs. expected counts in categorical bins. Under H₀, the test statistic follows a χ² distribution with (k-1) degrees of freedom. It requires sufficient expected counts (≥5) per cell.',
    realWorld: 'A/B testing in tech companies uses chi-squared tests to determine if conversion rate differences between variants are statistically significant.',
    hint: 'Sum up (observed - expected)² / expected across all categories — large values suggest the data doesn\'t fit the model.',
  },
  {
    id: 21303, topic: 'karl-pearson', difficulty: 'sota',
    question: 'Principal Component Analysis (PCA), rooted in Pearson\'s (1901) work, finds directions of maximum variance by:',
    options: ['Computing eigenvectors of the covariance matrix — the first eigenvector captures the most variance', 'Random projection to lower dimensions', 'Clustering data into groups', 'Applying kernel functions to the data'],
    correctIndex: 0,
    explanation: 'PCA decomposes the covariance matrix Σ = VΛV^T. The eigenvectors V are principal components, eigenvalues Λ are variance explained. Dimensionality reduction keeps top-k components.',
    realWorld: 'Face recognition (eigenfaces), genomics (population structure from SNPs), and quantitative finance (factor models for risk) all use PCA as a fundamental dimensionality reduction tool.',
    hint: 'Rotate the axes to align with the directions of greatest spread — the covariance matrix tells you where the data varies most.',
  },
];
