import { examPQuestions, examFMQuestions, examFAMQuestions } from './questions';
import { examSRMQuestions } from './exam-srm';
import { examALTAMQuestions } from './exam-altam';
import { examASTAMQuestions } from './exam-astam';
import { examPAQuestions } from './exam-pa';
import { examMASIQuestions, examMASIIQuestions } from './exam-mas';
import type { Question } from '../types';

export const actuarialQuestions: Question[] = [
  ...examPQuestions,
  ...examFMQuestions,
  ...examFAMQuestions,
  ...examSRMQuestions,
  ...examALTAMQuestions,
  ...examASTAMQuestions,
  ...examPAQuestions,
  ...examMASIQuestions,
  ...examMASIIQuestions,
];

export { examPQuestions, examFMQuestions, examFAMQuestions, examSRMQuestions, examALTAMQuestions, examASTAMQuestions, examPAQuestions, examMASIQuestions, examMASIIQuestions };
