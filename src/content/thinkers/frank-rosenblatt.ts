import type { Question } from '../types';

export const rosenblattQuestions: Question[] = [
  {
    id: 20450,
    topic: 'rosenblatt',
    difficulty: 'hard',
    question: 'The Perceptron Convergence Theorem guarantees that the perceptron learning algorithm converges in finite steps if and only if:',
    options: ['The data is linearly separable', 'The data is normalized', 'The learning rate is less than 1', 'The data has no outliers'],
    correctIndex: 0,
    explanation: 'The theorem proves convergence only when a separating hyperplane exists — for non-linearly-separable data, the algorithm cycles forever.',
    realWorld: 'This limitation motivated the development of SVMs (soft margins), kernel methods, and eventually deep neural networks.',
    hint: 'The key condition is geometric: can a hyperplane perfectly separate the classes?',
  },
  {
    id: 20451,
    topic: 'rosenblatt',
    difficulty: 'sota',
    question: 'Minsky & Papert\'s 1969 critique showed single-layer perceptrons cannot compute XOR. What is the minimum network architecture that can?',
    options: ['Two-layer network with 2 hidden neurons', 'Single neuron with polynomial activation', 'Three-layer network with 100 neurons', 'A recurrent network'],
    correctIndex: 0,
    explanation: 'A two-layer network with just 2 hidden units and appropriate weights can compute XOR — the simplest non-linearly-separable function.',
    realWorld: 'This "XOR problem" caused the first AI winter; its resolution with multi-layer networks eventually led to deep learning.',
    hint: 'XOR needs just one hidden layer — how many neurons in that layer?',
  },
  {
    id: 20452,
    topic: 'rosenblatt',
    difficulty: 'easy',
    question: 'What was the name of Rosenblatt\'s physical perceptron machine built in 1958?',
    options: ['Mark I Perceptron', 'ENIAC', 'Colossus', 'UNIVAC'],
    correctIndex: 0,
    explanation: 'The Mark I Perceptron was a room-sized machine using potentiometers as adjustable weights, designed for image recognition.',
    realWorld: 'It was one of the first hardware implementations of machine learning, predating modern GPUs by 60 years.',
    hint: 'It shares its name with a famous naval computing project.',
  },
];
