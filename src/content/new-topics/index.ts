import {
  electromagnetismQuestions,
  numberTheoryQuestions as foundationNumberTheoryQuestions,
  realAnalysisQuestions,
  riskManagementQuestions,
} from './questions';
import { numberTheoryExpansionQuestions } from './number-theory-expansion';

const numberTheoryQuestions = [...foundationNumberTheoryQuestions, ...numberTheoryExpansionQuestions];

export {
  electromagnetismQuestions,
  numberTheoryQuestions,
  numberTheoryExpansionQuestions,
  realAnalysisQuestions,
  riskManagementQuestions,
};
