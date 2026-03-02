import type { Question } from '../types';

export const thomasBayesQuestions: Question[] = [
  {
    id: 20101, topic: 'thomas-bayes', difficulty: 'easy',
    question: 'Bayes\' theorem states that $P(A|B) = $:',
    options: ['$\\frac{P(B|A)\\,P(A)}{P(B)}$', '$P(A) + P(B) - P(A \\cap B)$', '$\\frac{P(A)}{P(B)}$', '$P(B|A) \\cdot P(B)$'],
    correctIndex: 0,
    explanation: 'Bayes\' theorem inverts conditional probabilities: the posterior P(A|B) combines the likelihood P(B|A) with the prior P(A), normalized by the evidence P(B).',
    realWorld: 'Spam filters use Bayes\' theorem: P(spam|words) ∝ P(words|spam)·P(spam). Naive Bayes classifiers remain competitive baselines in NLP.',
    hint: 'Prior × Likelihood / Evidence = Posterior.',
  },
  {
    id: 20102, topic: 'thomas-bayes', difficulty: 'hard',
    question: 'In Bayesian inference, the choice of prior is controversial because:',
    options: ['It encodes subjective belief, yet strongly influences the posterior when data is scarce', 'It must always be uniform (uninformative)', 'It is uniquely determined by the likelihood function', 'It has no effect on the posterior for any sample size'],
    correctIndex: 0,
    explanation: 'With limited data, the prior dominates the posterior. As data grows, the likelihood overwhelms the prior (Bernstein-von Mises theorem), but for small samples, results can be highly prior-dependent.',
    realWorld: 'Clinical trials with rare diseases have tiny sample sizes — Bayesian analysis with informative priors from previous studies can dramatically improve power vs. frequentist methods.',
    hint: 'With 3 data points, does your starting belief matter? With 3 million?',
  },
  {
    id: 20103, topic: 'thomas-bayes', difficulty: 'sota',
    question: 'Variational inference approximates the true posterior $p(\\theta|x)$ by:',
    options: ['Minimizing $\\text{KL}(q(\\theta) \\| p(\\theta|x))$ over a tractable family $q$, equivalent to maximizing the ELBO', 'Sampling from the posterior using Markov chains', 'Computing the exact posterior via conjugate priors', 'Maximizing the marginal likelihood directly'],
    correctIndex: 0,
    explanation: 'Variational inference turns Bayesian inference into optimization: find $q^* = \\arg\\min \\text{KL}(q \\| p)$. The ELBO (Evidence Lower BOund) is the tractable objective. This scales to millions of parameters where MCMC cannot.',
    realWorld: 'VAEs (Variational Autoencoders) use amortized variational inference — an encoder network outputs $q(z|x)$ parameters, enabling generative modeling of images, molecules, and text.',
    hint: 'KL divergence measures how different q is from the true posterior — minimize it by maximizing a lower bound on log-evidence.',
  },
];
