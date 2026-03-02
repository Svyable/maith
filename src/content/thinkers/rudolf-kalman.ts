import type { Question } from '../types';

export const rudolfKalmanQuestions: Question[] = [
  {
    id: 19001, topic: 'rudolf-kalman', difficulty: 'easy',
    question: 'The Kalman filter is used to:',
    options: ['Optimally estimate the state of a dynamic system from noisy measurements', 'Compress audio signals', 'Train neural networks', 'Sort large datasets'],
    correctIndex: 0,
    explanation: 'The Kalman filter recursively estimates the state of a linear dynamic system by combining a prediction step (from a model) with a measurement update (from noisy sensors).',
    realWorld: 'Every GPS receiver, spacecraft, and self-driving car uses the Kalman filter for navigation.',
    hint: 'It fuses predictions with measurements — giving more weight to whichever is more precise.',
  },
  {
    id: 19002, topic: 'rudolf-kalman', difficulty: 'hard',
    question: 'The Kalman gain $K_k$ determines:',
    options: ['How much to trust the measurement vs. the prediction at each step', 'The learning rate of a neural network', 'The bandwidth of a filter', 'The number of iterations needed'],
    correctIndex: 0,
    explanation: 'The Kalman gain $K_k = P_{k|k-1}H^T(HP_{k|k-1}H^T + R)^{-1}$ balances prediction uncertainty ($P$) against measurement noise ($R$). High $K$ trusts measurements more; low $K$ trusts the model more.',
    realWorld: 'Apollo spacecraft navigation used Kalman filtering to blend star tracker, radar, and IMU data.',
    hint: 'If the measurement is very noisy ($R$ large), $K$ is small — trust the model more.',
  },
  {
    id: 19003, topic: 'rudolf-kalman', difficulty: 'sota',
    question: 'The Extended Kalman Filter (EKF) handles nonlinear systems by:',
    options: ['Linearizing the system dynamics around the current estimate using Jacobians', 'Using particle sampling', 'Solving the full nonlinear Bayesian posterior', 'Applying deep learning to the state estimate'],
    correctIndex: 0,
    explanation: 'The EKF approximates nonlinear dynamics $f(x)$ by its Jacobian $F = \\partial f/\\partial x$ at the current estimate. This first-order linearization enables the standard Kalman update equations to be applied.',
    realWorld: 'SpaceX Falcon 9 landing uses EKF-based state estimation for real-time trajectory control.',
    hint: 'Linearize via Taylor expansion — keep only the first-order term (the Jacobian).',
  },
];
