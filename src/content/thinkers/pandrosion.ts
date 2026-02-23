import type { Question } from '../types';

export const pandrosionQuestions: Question[] = [
  {
    id: 20200, topic: 'pandrosion', difficulty: 'easy',
    question: 'Pandrosion, a female mathematician in Alexandria (~320 AD), was mentioned in critiques by which later mathematician?',
    options: ['Pappus of Alexandria', 'Euclid', 'Archimedes', 'Ptolemy'],
    correctIndex: 0,
    explanation: 'Pappus devoted a section of his Collection to criticizing Pandrosion\'s methods — ironically preserving her name for history as a respected teacher at the Alexandrian school.',
    realWorld: 'Many ancient mathematicians are known only through references by their critics — a reminder that academic debate has always driven progress.',
    hint: 'This 4th-century mathematician compiled an 8-volume summary of Greek mathematics.',
  },
  {
    id: 20201, topic: 'pandrosion', difficulty: 'hard',
    question: 'Pandrosion proposed a geometric construction for which classical problem that Pappus criticized?',
    options: ['Doubling the cube (two mean proportionals)', 'Squaring the circle', 'Trisecting an angle', 'Constructing a regular heptagon'],
    correctIndex: 0,
    explanation: 'Pandrosion offered a solution to finding two mean proportionals (equivalent to cube doubling). Pappus objected to her method but acknowledged the problem\'s importance.',
    realWorld: 'The Delian problem (doubling the cube) was one of three classical problems that drove Greek mathematics for centuries and influenced the development of algebraic geometry.',
    hint: 'This problem reduces to finding $x$ and $y$ such that $a/x = x/y = y/2a$.',
  },
  {
    id: 20202, topic: 'pandrosion', difficulty: 'sota',
    question: 'Pandrosion predates Hypatia by roughly how many decades, making her possibly the earliest named female mathematical teacher?',
    options: ['~50–70 years', '~10 years', '~200 years', '~500 years'],
    correctIndex: 0,
    explanation: 'Pandrosion was active around 320 AD while Hypatia was born ~360 AD, making Pandrosion the earliest named female mathematician with a documented teaching role.',
    realWorld: 'Recovering the names of pre-Hypatia women in mathematics challenges the assumption that Hypatia was an isolated case.',
    hint: 'Pappus wrote his Collection around 320 AD; Hypatia was murdered in 415 AD.',
  },
];
