// levy.ts
import type { Question } from '../types';

export const levyQuestions: Question[] = [
  {
    id: 69400,
    topic: 'haim-levy',
    difficulty: 'easy',
    question: 'Lévy stable α∈(0,2] has?',
    options: [
      'Power-law tails P(|X|>x) ∼ x^{-α}, infinite variance (α<2)',
      'Gaussian (α=2)',
      'Exponential tails',
      'Bounded support'
    ],
    correctIndex: 0,
    explanation: 'α=2 normal, α=1 Cauchy, α<2 fat tails.',
    realWorld: 'High-frequency returns, insurance losses.',
    hint: 'Extreme events much more likely than normal.'
  },
  {
    id: 69401,
    topic: 'haim-levy',
    difficulty: 'hard',
    question: 'Lévy characteristic function?',
    options: [
      'log φ(t) = iμt - ½γ|t|^α (1-iβ sign(t) tan(πα/2))',
      'Normal φ(t) = e^{iμt-½σ²t²}',
      'Poisson φ(t) = e^{λ(e^{it}-1)}',
      'Student-t characteristic'
    ],
    correctIndex: 0,
    explanation: 'Four parameters: α(stability), β(skew), γ(scale), μ(location).',
    realWorld: 'Stable Paretian modeling.',
    hint: 'Non-Gaussian |t|^α characteristic.'
  },
  {
    id: 69402,
    topic: 'haim-levy',
    difficulty: 'sota',
    question: 'Stable domain of attraction?',
    options: [
      'i.i.d. sums → stable if P(|X|>x) ∼ x^{-α} L(x)',
      'CLT → normal only',
      'LLN convergence only',
      'Bounded variables'
    ],
    correctIndex: 0,
    explanation: 'Regularly varying tails → stable limit (Gnedenko-Kolmogorov).',
    realWorld: 'Financial returns heavy tails.',
    hint: 'Power-law tails → stable convergence.'
  },
  {
    id: 69403,
    topic: 'haim-levy',
    difficulty: 'hard',
    question: 'Lévy α=1.5 financial implication?',
    options: [
      'Infinite variance, finite mean; options smile/jumps',
      'Normal returns (α=2)',
      'Bounded risk',
      'Exponential moments exist'
    ],
    correctIndex: 0,
    explanation: 'E[|X|^{1.5}] = ∞; explains fat option tails.',
    realWorld: 'High-frequency return distributions.',
    hint: 'No variance → Black-Scholes fails.'
  },
  {
    id: 69404,
    topic: 'haim-levy',
    difficulty: 'sota',
    question: 'Lévy measure ν(dx)?',
    options: [
      'ν(dx) = c₊/x^{1+α} 1_{x>0} dx + c₋/|x|^{1+α} 1_{x<0} dx',
      'Gaussian density',
      'Compound Poisson',
      'Variance gamma'
    ],
    correctIndex: 0,
    explanation: 'Jump intensity measure for infinitely divisible processes.',
    realWorld: 'Lévy process option pricing.',
    hint: 'Jump size distribution intensity.'
  }
];
