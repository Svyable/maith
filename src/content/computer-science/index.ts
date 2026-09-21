import { computerScienceQuestions } from './questions';
import { modelsQuestions } from './models';
import { cryptographyExpansionQuestions } from './cryptography-expansion';

const allCSQuestions = [...computerScienceQuestions, ...modelsQuestions, ...cryptographyExpansionQuestions];
export { allCSQuestions as computerScienceQuestions, modelsQuestions, cryptographyExpansionQuestions };
