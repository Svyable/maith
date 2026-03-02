import type { Question } from '../types';

export const karpathyQuestions: Question[] = [
  {
    id: 95001, topic: 'andrej-karpathy', difficulty: 'easy',
    question: 'Andrej Karpathy\'s char-rnn demonstrated that recurrent neural networks can:',
    options: ['Generate coherent text character by character', 'Classify images into categories', 'Solve differential equations', 'Compress video files'],
    correctIndex: 0,
    explanation: 'char-rnn showed that RNNs trained on raw text can learn structure (Shakespeare, LaTeX, C code) and generate surprisingly coherent output one character at a time.',
    realWorld: 'This work popularized the idea that neural networks can be creative — inspiring modern text generation in GPT and beyond.',
    hint: 'The model predicts the next character given all previous characters.',
  },
  {
    id: 95002, topic: 'andrej-karpathy', difficulty: 'hard',
    question: 'In Karpathy\'s "Software 2.0" thesis, traditional code is replaced by:',
    options: ['Learned neural network weights optimized on data', 'Quantum computing circuits', 'Genetic algorithms', 'Rule-based expert systems'],
    correctIndex: 0,
    explanation: 'Software 2.0 argues that many programs are better written by optimizing neural network parameters on data than by hand-coding rules — the "code" becomes the weights.',
    realWorld: 'Tesla\'s Autopilot replaced thousands of lines of C++ with neural networks for perception — a direct application of this philosophy.',
    hint: 'The programmer specifies the objective; the optimizer writes the program.',
  },
  {
    id: 95003, topic: 'andrej-karpathy', difficulty: 'sota',
    question: 'Karpathy\'s work on Tesla\'s vision system replaced radar+lidar with:',
    options: ['Pure vision using multi-camera transformer networks', 'LiDAR-only depth sensing', 'Ultrasonic sensor fusion', 'Pre-mapped HD routes'],
    correctIndex: 0,
    explanation: 'Tesla\'s "vision-only" approach uses surround cameras processed by a BEV (bird\'s-eye view) transformer network to construct 3D scenes without lidar or radar.',
    realWorld: 'This approach powers Tesla FSD, demonstrating that cameras alone can achieve autonomous driving at massive scale.',
    hint: 'Humans drive with eyes only — can machines do the same?',
  },
];
