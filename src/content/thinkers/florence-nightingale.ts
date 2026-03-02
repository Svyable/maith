import type { Question } from '../types';

export const nightingaleQuestions: Question[] = [
  {
    id: 20103, topic: 'nightingale', difficulty: 'easy',
    question: 'Florence Nightingale is considered a pioneer in what area of data presentation?',
    options: ['Statistical graphics', 'Spreadsheets', 'Relational databases', 'Survey design'],
    correctIndex: 0,
    explanation: 'Nightingale pioneered the use of statistical graphics, including her famous polar area diagram (coxcomb chart), to communicate mortality data.',
    realWorld: 'Modern data visualization tools like D3.js and Tableau descend from Nightingale\'s insight that visual data drives policy change.',
    hint: 'She used visual representations of numbers to persuade politicians.',
  },
  {
    id: 20104, topic: 'nightingale', difficulty: 'hard',
    question: 'What type of chart did Nightingale create to illustrate causes of death in the Crimean War?',
    options: ['Polar area diagram (coxcomb)', 'Bar chart', 'Scatter plot', 'Pie chart'],
    correctIndex: 0,
    explanation: 'Her polar area diagrams showed that preventable diseases caused far more deaths than combat injuries, leading to sanitary reforms.',
    realWorld: 'The coxcomb chart\'s descendants include radar/spider charts used in sports analytics and business dashboards.',
    hint: 'It\'s a circular chart where wedge areas represent magnitude, not just angles.',
  },
  {
    id: 20105, topic: 'nightingale', difficulty: 'sota',
    question: 'Nightingale was the first woman elected a Fellow of which learned society?',
    options: ['Royal Statistical Society', 'Royal Society', 'British Medical Association', 'Royal College of Physicians'],
    correctIndex: 0,
    explanation: 'In 1858 Nightingale became the first female Fellow of the Royal Statistical Society, recognizing her groundbreaking contributions to applied statistics.',
    realWorld: 'The RSS continues to shape data science standards — their journal JRSS remains one of the top statistics publications worldwide.',
    hint: 'This society is specifically devoted to the discipline she applied to public health data.',
  },
];
