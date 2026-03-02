import { cfaLevel1Questions, cfaLevel2Questions, cfaLevel3Questions } from './questions';
import type { Question } from '../types';

export const cfaQuestions: Question[] = [
  ...cfaLevel1Questions,
  ...cfaLevel2Questions,
  ...cfaLevel3Questions,
];

export { cfaLevel1Questions, cfaLevel2Questions, cfaLevel3Questions };
