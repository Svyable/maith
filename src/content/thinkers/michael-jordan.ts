import type { Question } from '../types';

export const michaelJordanMLQuestions: Question[] = [
  {
    id: 21240,
    topic: 'michael-jordan-ml',
    difficulty: 'sota',
    question: 'In variational inference, the Evidence Lower Bound (ELBO) decomposes into which two terms?',
    options: [
      'E_q[log p(x,z)] − KL(q(z|x) ∥ p(z))',
      'log p(x) − H(q)',
      'E_q[log p(x|z)] + log p(z)',
      'KL(p ∥ q) + KL(q ∥ p)'
    ],
    correctIndex: 0,
    explanation: 'The ELBO = E_q[log p(x,z)] − KL(q(z|x) ∥ p(z)), which equals log p(x) − KL(q ∥ p(z|x)). Maximizing ELBO simultaneously fits the data and keeps the approximate posterior close to the prior.',
    realWorld: 'ELBO optimization drives Variational Autoencoders (VAEs), used in drug discovery, image generation, and anomaly detection.',
    hint: 'It is a lower bound on the log-evidence that trades off reconstruction and regularization.'
  },
  {
    id: 21241,
    topic: 'michael-jordan-ml',
    difficulty: 'sota',
    question: 'Jordan\'s work on graphical models introduced the distinction between which two fundamental graph structures?',
    options: [
      'Bayesian networks (directed) and Markov random fields (undirected)',
      'Trees and forests',
      'Planar and non-planar graphs',
      'Bipartite and complete graphs'
    ],
    correctIndex: 0,
    explanation: 'Jordan systematized the theory of probabilistic graphical models, distinguishing directed acyclic graphs (Bayesian networks) from undirected models (Markov random fields) and unifying inference algorithms across both.',
    realWorld: 'Graphical models underpin medical diagnosis systems, speech recognition, and causal reasoning in AI.',
    hint: 'One type uses conditional probabilities with arrows; the other uses potential functions on cliques.'
  },
  {
    id: 21242,
    topic: 'michael-jordan-ml',
    difficulty: 'sota',
    question: 'Jordan\'s mean-field variational inference approximates the true posterior by assuming what?',
    options: [
      'The latent variables are mutually independent under the approximate distribution q',
      'The posterior is exactly Gaussian',
      'All latent variables share identical distributions',
      'The prior is uniform over all configurations'
    ],
    correctIndex: 0,
    explanation: 'Mean-field variational inference factorizes q(z) = ∏ᵢ qᵢ(zᵢ), assuming full independence among latent variables. This drastic simplification makes inference tractable for complex models at the cost of ignoring posterior correlations.',
    realWorld: 'Mean-field methods scale to millions of variables in topic modeling (LDA), recommendation systems, and genomics.',
    hint: 'The "mean-field" name comes from statistical physics where each particle sees only the average field.'
  },
];
