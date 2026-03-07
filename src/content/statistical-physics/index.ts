import { statisticalPhysicsEasyQuestions, statisticalPhysicsHardQuestions, statisticalPhysicsSotaQuestions } from './questions';
import type { Question } from '../types';

export const statisticalPhysicsQuestions: Question[] = [
  ...statisticalPhysicsEasyQuestions,
  ...statisticalPhysicsHardQuestions,
  ...statisticalPhysicsSotaQuestions,
];
