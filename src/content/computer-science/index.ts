import { computerScienceQuestions } from './questions';
import { modelsQuestions } from './models';

const allCSQuestions = [...computerScienceQuestions, ...modelsQuestions];
export { allCSQuestions as computerScienceQuestions, modelsQuestions };
