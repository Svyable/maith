import type { Question } from '../types';

export const popperQuestions: Question[] = [
  {
    id: 13325,
    topic: 'karl-popper',
    difficulty: 'easy',
    question:
      'Popper’s demarcation criterion says a theory is “scientific” only if it is falsifiable. What does falsifiable mean in practice?',
    options: [
      'It makes risky predictions that could, in principle, be shown false by some possible observation',
      'It is widely believed by scientists',
      'It has been verified by many confirming examples',
      'It is expressed in mathematical equations'
    ],
    correctIndex: 0,
    explanation:
      'Falsifiability means there exists a conceivable test outcome that would contradict the theory. Popper emphasizes “conjectures and refutations,” not accumulation of confirmations.',
    realWorld:
      'A model that predicts a quantitative relationship $y=mx+b$ can be tested by checking whether observed $(x,y)$ systematically violate that form beyond uncertainty.',
    hint: 'Ask: “What evidence would prove it wrong?”'
  },
  {
    id: 13326,
    topic: 'karl-popper',
    difficulty: 'easy',
    question:
      'Popper argued that confirmations do not logically prove universal laws (problem of induction). Which statement captures this?',
    options: [
      'Even if you observe many white swans, it does not logically entail “all swans are white,” but one black swan refutes it',
      'If you observe many white swans, the law becomes mathematically true',
      'Induction works only for physics, not biology',
      'A single confirming case is enough to prove a theory'
    ],
    correctIndex: 0,
    explanation:
      'Universal generalizations can’t be proven by finite confirmations, but they can be falsified by a counterexample.',
    realWorld:
      'In ML: high training accuracy doesn’t prove generalization; a distribution shift can falsify performance claims.',
    hint: 'One counterexample beats a million confirmations.'
  },
  {
    id: 13327,
    topic: 'karl-popper',
    difficulty: 'hard',
    question:
      'Popper distinguishes “corroboration” from “verification.” After a theory survives severe tests, Popper says it is:',
    options: [
      'Corroborated (supported for now), but never proven true once-and-for-all',
      'Verified (therefore certain and final)',
      'Inductively guaranteed with probability 1',
      'Unscientific because it was not falsified'
    ],
    correctIndex: 0,
    explanation:
      'Severe testing increases a theory’s standing relative to rivals, but Popper denies that this yields certainty. Scientific knowledge remains provisional.',
    realWorld:
      'Engineering validation: passing stress tests increases confidence but doesn’t entail “cannot fail” under all conditions.',
    hint: 'Popper hates the word “proved” for empirical theories.'
  },
  {
    id: 13328,
    topic: 'karl-popper',
    difficulty: 'hard',
    question:
      'Popper also emphasized that “ad hoc” modifications can immunize theories from falsification. Which change is most “ad hoc” in Popper’s sense?',
    options: [
      'Adding a clause “unless an invisible force intervenes” solely to block a refuting observation, without new testable predictions',
      'Refining a parameter estimate and predicting new measurements',
      'Replacing a model with one that predicts additional phenomena',
      'Publishing measurement uncertainty and updating error bars'
    ],
    correctIndex: 0,
    explanation:
      'An ad hoc patch that only protects the theory from refutation—without increasing testable content—reduces falsifiability and scientific value in Popper’s framework.',
    realWorld:
      'Good model revisions create *new* risky predictions, e.g., a corrected equation that forecasts a previously unmeasured regime.',
    hint: 'Does the patch add new ways to fail, or only remove failures?'
  },
  {
    id: 13329,
    topic: 'karl-popper',
    difficulty: 'sota',
    question:
      'In ML evaluation, a Popper-like “severe test” mindset is best approximated by which practice?',
    options: [
      'Out-of-sample evaluation, stress tests, and targeted search for counterexamples (e.g., adversarial inputs) that could refute robustness claims',
      'Maximizing training likelihood $\\max_\\theta \\sum_t \\log p_\\theta(w_t\\mid w_{<t})$ and stopping there',
      'Reporting only the best benchmark score from many tries',
      'Avoiding evaluation because models are too complex'
    ],
    correctIndex: 0,
    explanation:
      'Popper wants tests that could falsify your claim. In ML, that means stronger holdouts, distribution shifts, adversarial testing, and transparent pre-registered evaluation protocols.',
    realWorld:
      'Red-teaming and robustness benchmarks exist because impressive average-case scores can hide brittle failure modes.',
    hint: 'Try to break it, not just celebrate it.'
  }
];