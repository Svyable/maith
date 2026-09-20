import { readFile } from 'node:fs/promises';
import { allQuestions } from '../src/content/index';
import { allBonafideQuestions } from '../src/content/bonafides/index';
import { allThinkerQuestions } from '../src/content/thinkers/index';
import { CONTENT_COUNTS, QUESTION_COUNTS } from '../src/config/content-stats';
import {
  CONTENT_TOPICS,
  LEGACY_PROFESSIONAL_TOPICS,
  LEGACY_TOPIC_ALIASES,
  LEGACY_TOPIC_EXPANSIONS,
  STANDARD_TOPICS,
} from '../src/config/content-registry';
import { BONAFIDE_TOPICS, QUESTION_PACKS } from '../src/config/content-registry-tooling';
import { FIELDS } from '../src/config/fields';
import { CONCEPTS, CONCEPT_MAP } from '../src/config/concepts';
import { QUESTION_GROUPS, TOPIC_TO_GROUPS } from '../src/content/question-loaders';

const REGISTERED_TOPICS = [...CONTENT_TOPICS, ...BONAFIDE_TOPICS];

type QuestionLike = (typeof allQuestions)[number];
const errors: string[] = [];
const warnings: string[] = [];
const fail = (message: string) => errors.push(message);

const duplicates = <T>(values: T[]) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
const duplicateIds = duplicates(allQuestions.map(({ id }) => id));
if (duplicateIds.length) fail(`Duplicate standard question IDs: ${duplicateIds.join(', ')}`);

const duplicateSlugs = duplicates(REGISTERED_TOPICS.map(({ slug }) => slug));
if (duplicateSlugs.length) fail(`Duplicate canonical topic slugs: ${duplicateSlugs.join(', ')}`);

const topicMap = new Map(REGISTERED_TOPICS.map((topic) => [topic.slug, topic]));

const duplicateConceptIds = duplicates(CONCEPTS.map(({ id }) => id));
if (duplicateConceptIds.length) fail(`Duplicate concept IDs: ${duplicateConceptIds.join(', ')}`);

for (const concept of CONCEPTS) {
  if (concept.topics.length === 0) fail(`Concept ${concept.id} must reference at least one topic`);
  if (concept.prerequisites.includes(concept.id)) fail(`Concept ${concept.id} cannot depend on itself`);

  for (const topicSlug of concept.topics) {
    const topic = topicMap.get(topicSlug);
    if (!topic) {
      fail(`Concept ${concept.id} references unknown topic ${topicSlug}`);
      continue;
    }
    if (topic.kind !== 'standard-quiz' || !topic.available) {
      fail(`Concept ${concept.id} must reference selectable standard topics: ${topicSlug}`);
    }
    if (topic.field !== concept.field) {
      fail(`Concept ${concept.id} field mismatch: ${concept.field} vs ${topic.field}`);
    }
  }

  for (const prerequisite of concept.prerequisites) {
    if (!CONCEPT_MAP[prerequisite]) fail(`Concept ${concept.id} has unknown prerequisite ${prerequisite}`);
  }
}

const visitingConcepts = new Set<string>();
const visitedConcepts = new Set<string>();
const conceptPath: string[] = [];
const visitConcept = (id: string) => {
  if (visitedConcepts.has(id)) return;
  if (visitingConcepts.has(id)) {
    const cycleStart = conceptPath.indexOf(id);
    fail(`Concept prerequisite cycle: ${[...conceptPath.slice(cycleStart), id].join(' -> ')}`);
    return;
  }

  const concept = CONCEPT_MAP[id];
  if (!concept) return;
  visitingConcepts.add(id);
  conceptPath.push(id);
  for (const prerequisite of concept.prerequisites) visitConcept(prerequisite);
  conceptPath.pop();
  visitingConcepts.delete(id);
  visitedConcepts.add(id);
};
CONCEPTS.forEach(({ id }) => visitConcept(id));

const mappedConceptIds = new Set<string>();
for (const question of allQuestions) {
  const conceptIds = question.conceptIds ?? [];
  const duplicatesForQuestion = duplicates(conceptIds);
  if (duplicatesForQuestion.length) {
    fail(`Question ${question.id} repeats concept IDs: ${duplicatesForQuestion.join(', ')}`);
  }

  conceptIds.forEach((conceptId, index) => {
    const concept = CONCEPT_MAP[conceptId];
    if (!concept) {
      fail(`Question ${question.id} references unknown concept ${conceptId}`);
      return;
    }
    mappedConceptIds.add(conceptId);
    if (!concept.topics.includes(question.topic)) {
      fail(`Question ${question.id} maps ${conceptId} outside its topic ${question.topic}`);
    }
    if (index === 0 && concept.status === 'deprecated') {
      fail(`Question ${question.id} uses deprecated primary concept ${conceptId}`);
    }
  });
}
for (const concept of CONCEPTS.filter(({ status }) => status === 'active')) {
  if (!mappedConceptIds.has(concept.id)) warnings.push(`Active concept ${concept.id} has no mapped standard questions`);
}

const unknownTopics = [...new Set(allQuestions.map(({ topic }) => topic).filter((topic) => !topicMap.has(topic)))];
if (unknownTopics.length) fail(`Unknown standard question topics: ${unknownTopics.join(', ')}`);

const invalidStandardPoolTopics = [...new Set(
  allQuestions
    .filter((question) => {
      const meta = topicMap.get(question.topic);
      return meta && meta.kind !== 'standard-quiz' && meta.kind !== 'special';
    })
    .map(({ topic }) => topic),
)];
if (invalidStandardPoolTopics.length) {
  fail(`Non-standard content leaked into standard question pool: ${invalidStandardPoolTopics.join(', ')}`);
}

const nonStandardEntries = STANDARD_TOPICS.filter((topic) => topic.kind !== 'standard-quiz');
if (nonStandardEntries.length) fail(`STANDARD_TOPICS contains non-standard content: ${nonStandardEntries.map(({ slug }) => slug).join(', ')}`);

const exposedLegacyProfessionalTopics = LEGACY_PROFESSIONAL_TOPICS.filter((topic) => topic.available || topic.kind !== 'bonafide');
if (exposedLegacyProfessionalTopics.length) {
  fail(`Legacy professional compatibility topics must remain unavailable Bonafide metadata: ${exposedLegacyProfessionalTopics.map(({ slug }) => slug).join(', ')}`);
}

const bonafideTopicMap = new Map(BONAFIDE_TOPICS.map((topic) => [topic.slug, topic]));
const unknownBonafideTopics = [...new Set(allBonafideQuestions.map(({ topic }) => topic).filter((topic) => !bonafideTopicMap.has(topic)))];
if (unknownBonafideTopics.length) fail(`Unknown Bonafide question topics: ${unknownBonafideTopics.join(', ')}`);
for (const topic of BONAFIDE_TOPICS.filter((entry) => entry.available)) {
  if (!allBonafideQuestions.some((question) => question.topic === topic.slug)) {
    fail(`Available Bonafide topic ${topic.slug} has no questions`);
  }
}

for (const [alias, target] of Object.entries(LEGACY_TOPIC_ALIASES)) {
  const aliasMeta = topicMap.get(alias);
  const targetMeta = topicMap.get(target);
  if (!aliasMeta) fail(`Legacy alias is not registered: ${alias}`);
  if (!targetMeta) fail(`Legacy alias ${alias} targets unknown topic ${target}`);
  if (alias === target) fail(`Legacy alias ${alias} targets itself`);
  if (aliasMeta?.available) fail(`Legacy alias ${alias} must not remain selectable`);
  if (targetMeta && (targetMeta.kind !== 'standard-quiz' || !targetMeta.available)) {
    fail(`Legacy alias ${alias} must target an available standard topic: ${target}`);
  }
  if (allQuestions.some((question) => question.topic === alias)) {
    fail(`Legacy alias ${alias} still owns questions; migrate them to ${target}`);
  }
}

for (const [umbrella, targets] of Object.entries(LEGACY_TOPIC_EXPANSIONS)) {
  const umbrellaMeta = topicMap.get(umbrella);
  if (!umbrellaMeta) fail(`Legacy umbrella topic is not registered: ${umbrella}`);
  if (LEGACY_TOPIC_ALIASES[umbrella]) fail(`Legacy topic ${umbrella} cannot be both an alias and an expansion`);
  if (umbrellaMeta?.available) fail(`Legacy umbrella topic ${umbrella} must not remain selectable`);
  if (targets.length < 2) fail(`Legacy umbrella topic ${umbrella} must expand to at least two canonical topics`);
  if (new Set(targets).size !== targets.length) fail(`Legacy umbrella topic ${umbrella} contains duplicate targets`);

  for (const target of targets) {
    const targetMeta = topicMap.get(target);
    if (!targetMeta) {
      fail(`Legacy umbrella topic ${umbrella} targets unknown topic ${target}`);
      continue;
    }
    if (targetMeta.kind !== 'standard-quiz' || !targetMeta.available) {
      fail(`Legacy umbrella topic ${umbrella} must target available standard topics: ${target}`);
    }
    if (umbrellaMeta && targetMeta.field !== umbrellaMeta.field) {
      fail(`Legacy umbrella topic ${umbrella} crosses fields via ${target}`);
    }
  }

  if (allQuestions.some((question) => question.topic === umbrella)) {
    fail(`Legacy umbrella topic ${umbrella} still owns questions; migrate them to canonical targets`);
  }
}

const fieldMap = new Map(FIELDS.map((field) => [field.slug, field]));
const legacyProfessionalFields = new Set(LEGACY_PROFESSIONAL_TOPICS.map((topic) => topic.field));
const leakedProfessionalFields = FIELDS.filter((field) => legacyProfessionalFields.has(field.slug));
if (leakedProfessionalFields.length) {
  fail(`Professional compatibility fields leaked into standard field registry: ${leakedProfessionalFields.map(({ slug }) => slug).join(', ')}`);
}
for (const topic of STANDARD_TOPICS.filter((entry) => entry.available)) {
  const field = fieldMap.get(topic.field);
  if (!field) fail(`Available topic ${topic.slug} has unknown field ${topic.field}`);
  else if (!field.topics.includes(topic.slug)) fail(`Field ${topic.field} does not include ${topic.slug}`);
}
for (const field of FIELDS.filter((entry) => entry.slug !== 'all')) {
  if (field.available && field.topics.length === 0) fail(`Available field ${field.slug} has no selectable standard topics`);
  for (const slug of field.topics) {
    const topic = topicMap.get(slug);
    if (!topic) fail(`Field ${field.slug} references unknown topic ${slug}`);
    else {
      if (topic.field !== field.slug) fail(`Field mismatch for ${slug}: ${field.slug} vs ${topic.field}`);
      if (topic.kind !== 'standard-quiz' || !topic.available) fail(`Field ${field.slug} exposes non-selectable topic ${slug}`);
    }
  }
}

const duplicateGroups = duplicates(QUESTION_PACKS.map(({ group }) => group));
if (duplicateGroups.length) fail(`Duplicate question loader groups: ${duplicateGroups.join(', ')}`);
for (const pack of QUESTION_PACKS) {
  if (pack.module !== `./${pack.group}`) fail(`Pack ${pack.group} has stale module metadata ${pack.module}`);
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
for (const topic of STANDARD_TOPICS.filter((entry) => entry.available)) {
  const matchingGroups = [...groupTopics].filter(([, topics]) => topics.has(topic.slug)).map(([group]) => group);
  if (matchingGroups.length === 0) fail(`Available topic ${topic.slug} has no question loader group`);
}

const expectedGroups = QUESTION_PACKS.filter((pack) => pack.includeInStandardQuiz).map((pack) => pack.group);
const expectedGroupSet = new Set<string>(expectedGroups);
if (JSON.stringify([...QUESTION_GROUPS].sort()) !== JSON.stringify([...expectedGroups].sort())) {
  fail('Generated question loader groups have drifted; run generate:question-loaders');
}
const expectedTopicGroups = Object.fromEntries(
  STANDARD_TOPICS
    .filter((topic) => topic.available)
    .map((topic) => [
      topic.slug,
      [...groupTopics]
        .filter(([group, topics]) => expectedGroupSet.has(group) && topics.has(topic.slug))
        .map(([group]) => group)
        .sort(),
    ]),
);
for (const [topic, groups] of Object.entries(expectedTopicGroups)) {
  const generated = [...(TOPIC_TO_GROUPS[topic] ?? [])].sort();
  if (JSON.stringify(generated) !== JSON.stringify(groups)) {
    fail(`Generated loader mapping drifted for ${topic}; run generate:question-loaders`);
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
console.log(`Content integrity passed: ${allQuestions.length} standard questions, ${REGISTERED_TOPICS.length} registered topics, ${CONCEPTS.length} mastery concepts, ${QUESTION_PACKS.length} loader groups.`);