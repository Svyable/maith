import { readFile } from 'node:fs/promises';
import { allQuestions } from '../src/content/index';
import { allBonafideQuestions } from '../src/content/bonafides/index';
import { allThinkerQuestions } from '../src/content/thinkers/index';
import { CONTENT_COUNTS, QUESTION_COUNTS } from '../src/config/content-stats';
import { CONTENT_TOPICS, LEGACY_TOPIC_ALIASES, QUESTION_PACKS } from '../src/config/content-registry';
import { FIELDS } from '../src/config/fields';

type QuestionLike = (typeof allQuestions)[number];
const errors: string[] = [];
const warnings: string[] = [];
const fail = (message: string) => errors.push(message);

const duplicates = <T>(values: T[]) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
const duplicateIds = duplicates(allQuestions.map(({ id }) => id));
if (duplicateIds.length) fail(`Duplicate standard question IDs: ${duplicateIds.join(', ')}`);

const duplicateSlugs = duplicates(CONTENT_TOPICS.map(({ slug }) => slug));
if (duplicateSlugs.length) fail(`Duplicate canonical topic slugs: ${duplicateSlugs.join(', ')}`);

const topicMap = new Map(CONTENT_TOPICS.map((topic) => [topic.slug, topic]));
const unknownTopics = [...new Set(allQuestions.map(({ topic }) => topic).filter((topic) => !topicMap.has(topic)))];
if (unknownTopics.length) fail(`Unknown standard question topics: ${unknownTopics.join(', ')}`);

for (const [alias, target] of Object.entries(LEGACY_TOPIC_ALIASES)) {
  if (!topicMap.has(alias)) fail(`Legacy alias is not registered: ${alias}`);
  if (!topicMap.has(target)) fail(`Legacy alias ${alias} targets unknown topic ${target}`);
  if (alias === target) fail(`Legacy alias ${alias} targets itself`);
}

const fieldMap = new Map(FIELDS.map((field) => [field.slug, field]));
for (const topic of CONTENT_TOPICS.filter((entry) => entry.kind === 'standard-quiz' && entry.available)) {
  const field = fieldMap.get(topic.field);
  if (!field) fail(`Available topic ${topic.slug} has unknown field ${topic.field}`);
  else if (!field.topics.includes(topic.slug)) fail(`Field ${topic.field} does not include ${topic.slug}`);
  if (!topic.loaderGroups.length) fail(`Available topic ${topic.slug} has no question loader group`);
}
for (const field of FIELDS.filter((entry) => entry.slug !== 'all')) {
  for (const slug of field.topics) {
    const topic = topicMap.get(slug);
    if (!topic) fail(`Field ${field.slug} references unknown topic ${slug}`);
    else if (topic.field !== field.slug) fail(`Field mismatch for ${slug}: ${field.slug} vs ${topic.field}`);
  }
}

const groupTopics = new Map<string, Set<string>>();
for (const pack of QUESTION_PACKS) {
  const module = await import(`../src/content/${pack.group}/index.ts`) as Record<string, unknown>;
  const questions = pack.exports.flatMap((name) => {
    const value = module[name];
    if (!Array.isArray(value)) {
      fail(`Pack ${pack.group} does not export ${name}`);
      return [] as QuestionLike[];
    }
    return value as QuestionLike[];
  });
  if (pack.includeInStandardQuiz && questions.length === 0) fail(`Standard question pack ${pack.group} is empty`);
  groupTopics.set(pack.group, new Set(questions.map(({ topic }) => topic)));
}
for (const topic of CONTENT_TOPICS.filter((entry) => entry.kind === 'standard-quiz' && entry.available)) {
  for (const group of topic.loaderGroups) {
    if (!groupTopics.get(group)?.has(topic.slug)) fail(`Loader group ${group} does not contain topic ${topic.slug}`);
  }
}

// Vault questions intentionally remain in the historical standard pool. No other special pool may leak into it.
const standardObjects = new Set(allQuestions);
const leakedBonafides = allBonafideQuestions.filter((question) => standardObjects.has(question));
const leakedThinkers = allThinkerQuestions.filter((question) => standardObjects.has(question));
if (leakedBonafides.length) fail(`Bonafide questions leaked into standard pool: ${leakedBonafides.length}`);
if (leakedThinkers.length) fail(`Thinker questions leaked into standard pool: ${leakedThinkers.length}`);
const unexpectedMixedPacks = QUESTION_PACKS.filter((pack) => pack.kind !== 'standard-quiz' && pack.includeInStandardQuiz && pack.kind !== 'vault');
if (unexpectedMixedPacks.length) fail(`Unexpected special packs in standard pool: ${unexpectedMixedPacks.map(({ group }) => group).join(', ')}`);

const actualCounts = Object.fromEntries([...new Set(allQuestions.map(({ topic }) => topic))].sort().map((topic) => {
  const questions = allQuestions.filter((question) => question.topic === topic);
  return [topic, {
    easy: questions.filter(({ difficulty }) => difficulty === 'easy').length,
    hard: questions.filter(({ difficulty }) => difficulty === 'hard').length,
    sota: questions.filter(({ difficulty }) => difficulty === 'sota').length,
    total: questions.length,
  }];
}));
if (CONTENT_COUNTS.questions !== allQuestions.length || JSON.stringify(QUESTION_COUNTS) !== JSON.stringify(actualCounts)) {
  fail('Generated question counts have drifted; run generate:content-stats');
}
for (const [topic, counts] of Object.entries(actualCounts)) {
  const represented = [counts.easy, counts.hard, counts.sota].filter(Boolean).length;
  if (represented === 1) warnings.push(`${topic} has only one difficulty represented`);
}

const inventory = JSON.parse(await readFile(new URL('../docs/content-inventory.json', import.meta.url), 'utf8')) as { totals?: { questions?: number }; topics?: unknown[] };
if (inventory.totals?.questions !== allQuestions.length || inventory.topics?.length !== Object.keys(actualCounts).length + new Set(allBonafideQuestions.map(({ topic }) => topic)).size) {
  fail('Generated content inventory has drifted; run generate:content-stats');
}

warnings.forEach((warning) => console.warn(`WARN: ${warning}`));
if (errors.length) {
  errors.forEach((error) => console.error(`ERROR: ${error}`));
  process.exit(1);
}
console.log(`Content integrity passed: ${allQuestions.length} standard questions, ${CONTENT_TOPICS.length} registered topics, ${QUESTION_PACKS.length} loader groups.`);