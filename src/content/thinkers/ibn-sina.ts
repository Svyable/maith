import type { Question } from '../types';

export const ibnSinaQuestions: Question[] = [
  {
    id: 97110, topic: 'ibn-sina', difficulty: 'easy',
    question: 'Ibn Sina (Avicenna)\'s "Canon of Medicine" (1025 CE) was significant because:',
    options: ['It systematized all known medical knowledge into a unified framework and remained the standard medical textbook in Europe and the Islamic world for over 500 years', 'It was the first book to describe surgery', 'It introduced the germ theory of disease', 'It cataloged only herbal remedies'],
    correctIndex: 0,
    explanation: 'The Canon organized medicine into five books covering general principles, simple drugs (~800 substances), organ-specific diseases, systemic diseases, and compound drugs — a comprehensive medical encyclopedia.',
    realWorld: 'The Canon was used as a primary medical textbook at European universities (Montpellier, Leuven) until the mid-17th century.',
    hint: 'The most influential medical textbook in history, used for half a millennium.',
  },
  {
    id: 97111, topic: 'ibn-sina', difficulty: 'hard',
    question: 'Ibn Sina introduced the concept of clinical trials by requiring that:',
    options: ['Drug testing must follow specific rules: use on pure (uncomplicated) disease, test at multiple doses, observe consistency across cases, and test on humans (not only animals)', 'Drugs be tested only on animals first', 'All medicines be derived from a single source', 'Treatments be approved by religious authorities'],
    correctIndex: 0,
    explanation: 'In Book II of the Canon, Ibn Sina laid out seven rules for drug testing — including testing on uncomplicated disease, observing dose-response, requiring reproducibility, and testing on the target species.',
    realWorld: 'These principles anticipate modern clinical trial methodology by ~800 years, including concepts of confounding, dose-response, and generalizability.',
    hint: 'He insisted on systematic rules for testing whether a drug actually works.',
  },
  {
    id: 97112, topic: 'ibn-sina', difficulty: 'sota',
    question: 'Ibn Sina described the concept of quarantine ("al-Arba\'iniya" = 40 days). Modern quarantine duration is optimized using:',
    options: ['The incubation period distribution: quarantine duration $T_q$ is set so $P(\\text{symptom onset} \\leq T_q) \\geq 0.99$, typically the 99th percentile of the incubation period', 'A fixed 14-day period for all diseases', 'The time until antibody detection', 'The duration of fever only'],
    correctIndex: 0,
    explanation: 'For COVID-19: median incubation ~5 days, 99th percentile ~14 days. Quarantine duration $T_q$ satisfies $\\int_0^{T_q} f(t) dt \\geq 0.99$, where $f(t)$ is the incubation period density (often lognormal or Weibull).',
    realWorld: 'Optimal quarantine policies balance public health protection against economic and psychological costs — a direct extension of Ibn Sina\'s original insight.',
    hint: 'Set quarantine long enough to catch 99% of cases based on the disease\'s incubation period.',
  },
];
