import { allQuestions } from '../src/content/index';
import { CONCEPTS } from '../src/config/concepts';

const mappedQuestions = allQuestions.filter((question) => (question.conceptIds?.length ?? 0) > 0);
const mappedQuestionIds = new Set(mappedQuestions.map(({ id }) => id));

const rows = CONCEPTS.map((concept) => {
  const questions = allQuestions.filter((question) => question.conceptIds?.includes(concept.id));
  return {
    concept: concept.id,
    topic: concept.topics.join(','),
    questions: questions.length,
    easy: questions.filter(({ difficulty }) => difficulty === 'easy').length,
    hard: questions.filter(({ difficulty }) => difficulty === 'hard').length,
    sota: questions.filter(({ difficulty }) => difficulty === 'sota').length,
    primary: questions.filter(({ conceptIds }) => conceptIds?.[0] === concept.id).length,
    prerequisites: concept.prerequisites.length,
  };
});

console.log(
  `Mastery coverage: ${mappedQuestionIds.size}/${allQuestions.length} standard questions mapped ` +
  `(${((mappedQuestionIds.size / allQuestions.length) * 100).toFixed(1)}%), ${CONCEPTS.length} concepts registered.`,
);
console.table(rows);

const thin = rows.filter(({ questions }) => questions < 2);
if (thin.length) {
  console.log(`Pilot concepts with fewer than 2 mapped questions: ${thin.map(({ concept }) => concept).join(', ')}`);
}
