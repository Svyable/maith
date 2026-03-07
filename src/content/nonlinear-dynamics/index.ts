import { nonlinearDynamicsEasyQuestions, nonlinearDynamicsHardQuestions, nonlinearDynamicsSotaQuestions } from './questions';
import type { Question } from '../types';

export const nonlinearDynamicsQuestions: Question[] = [
  ...nonlinearDynamicsEasyQuestions,
  ...nonlinearDynamicsHardQuestions,
  ...nonlinearDynamicsSotaQuestions,
];
