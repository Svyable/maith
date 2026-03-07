import { plasmaPhysicsEasyQuestions, plasmaPhysicsHardQuestions, plasmaPhysicsSotaQuestions } from './questions';
import type { Question } from '../types';

export const plasmaPhysicsQuestions: Question[] = [
  ...plasmaPhysicsEasyQuestions,
  ...plasmaPhysicsHardQuestions,
  ...plasmaPhysicsSotaQuestions,
];
