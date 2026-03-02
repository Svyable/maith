import type { Question } from '../types';

export const johnTukeyQuestions: Question[] = [
  {
    id: 96100, topic: 'john-tukey', difficulty: 'easy',
    question: 'John Tukey coined the term "bit" (binary digit) and invented:',
    options: ['The box plot and exploratory data analysis (EDA)', 'The bar chart', 'SQL databases', 'The spreadsheet'],
    correctIndex: 0,
    explanation: 'Tukey pioneered EDA — the philosophy of using visual and summary tools (box plots, stem-and-leaf plots) to understand data before fitting models.',
    realWorld: 'Every time you see a box plot in a research paper or dashboard, you\'re using Tukey\'s invention.',
    hint: 'He believed in looking at data before testing hypotheses.',
  },
  {
    id: 96101, topic: 'john-tukey', difficulty: 'hard',
    question: 'Tukey co-invented the Fast Fourier Transform (FFT) algorithm, which reduced DFT computation from $O(n^2)$ to:',
    options: ['$O(n \\log n)$', '$O(n)$', '$O(\\log n)$', '$O(n^3)$'],
    correctIndex: 0,
    explanation: 'The Cooley-Tukey FFT (1965) recursively decomposes the DFT into smaller transforms, achieving $O(n \\log n)$ — one of the most important algorithms in scientific computing.',
    realWorld: 'FFT enables digital audio, medical imaging (MRI, CT), telecommunications, and virtually all signal processing.',
    hint: 'It uses a divide-and-conquer strategy on the transform.',
  },
  {
    id: 96102, topic: 'john-tukey', difficulty: 'sota',
    question: 'Tukey\'s philosophical distinction between "exploratory" and "confirmatory" data analysis influenced:',
    options: ['Modern data science workflows that separate hypothesis generation from hypothesis testing', 'Only traditional statistics', 'Database management only', 'Computer hardware design'],
    correctIndex: 0,
    explanation: 'Tukey argued that exploring data (EDA) should precede confirming hypotheses (CDA) — a principle now embedded in every data science pipeline (EDA → feature engineering → modeling → validation).',
    realWorld: 'The modern data science mantra "look at your data first" is Tukey\'s legacy. Tools like pandas profiling and Jupyter notebooks embody his philosophy.',
    hint: 'He said: "Far better an approximate answer to the right question than an exact answer to the wrong question."',
  },
];
