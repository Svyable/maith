import { readFileSync, readdirSync } from 'node:fs';

export const LOCALES_DIRECTORY = new URL('../src/i18n/locales/', import.meta.url);
export const QUESTION_DIRECTORY = new URL('../src/i18n/locales/questions/', import.meta.url);
export const COVERAGE_BASELINE_URL = new URL('./localization-baseline.json', import.meta.url);
const CONTENT_DIRECTORY = new URL('../src/content/', import.meta.url);

export const QUESTION_FIELDS = [
  'question',
  'options.0',
  'options.1',
  'options.2',
  'options.3',
  'explanation',
  'realWorld',
  'hint',
];

export const LOCALIZATION_BASELINE = JSON.parse(
  readFileSync(COVERAGE_BASELINE_URL, 'utf8'),
);

const {
  coreQuestionStart,
  coreQuestionEnd,
  additionalQuestionIds,
} = LOCALIZATION_BASELINE.sharedFoundation;

export const FOUNDATION_QUESTION_IDS = [
  ...Array.from(
    { length: coreQuestionEnd - coreQuestionStart + 1 },
    (_, index) => String(coreQuestionStart + index),
  ),
  ...additionalQuestionIds.map(String),
];

export const QUESTION_COVERAGE_FLOORS =
  LOCALIZATION_BASELINE.minimumTranslatedQuestions;

export function getCoreLocaleCodes() {
  return readdirSync(LOCALES_DIRECTORY)
    .filter((file) => /^[a-z]{2}\.json$/.test(file))
    .map((file) => file.slice(0, 2))
    .sort();
}

function walkTypeScriptFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryUrl = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) {
      files.push(...walkTypeScriptFiles(entryUrl));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(entryUrl);
    }
  }
  return files;
}

export function getSourceQuestionIndex() {
  const index = new Map();
  const pattern = /\bid:\s*(\d+)\s*,\s*\n\s*topic:\s*['"]([^'"]+)['"]/g;

  for (const fileUrl of walkTypeScriptFiles(CONTENT_DIRECTORY)) {
    const source = readFileSync(fileUrl, 'utf8');
    for (const match of source.matchAll(pattern)) {
      const [, id, topic] = match;
      const existing = index.get(id);
      if (existing && existing !== topic) {
        throw new Error(`Question id ${id} maps to multiple topics: ${existing}, ${topic}`);
      }
      index.set(id, topic);
    }
  }

  return index;
}

export function loadQuestionDictionary(locale) {
  return JSON.parse(readFileSync(new URL(`${locale}.json`, QUESTION_DIRECTORY), 'utf8'));
}

export function inspectQuestionDictionary(dictionary, sourceQuestionIndex = getSourceQuestionIndex()) {
  const ids = [...new Set(
    Object.keys(dictionary)
      .map((key) => key.match(/^q\.(\d+)\./)?.[1])
      .filter(Boolean),
  )].sort((a, b) => Number(a) - Number(b));

  const incomplete = ids.filter((id) =>
    QUESTION_FIELDS.some((field) => !(`q.${id}.${field}` in dictionary)),
  );
  const unknown = ids.filter((id) => !sourceQuestionIndex.has(id));
  const complete = ids.filter((id) => !incomplete.includes(id) && !unknown.includes(id));

  return { ids, complete, incomplete, unknown };
}

export function buildQuestionCoverage(locale, sourceQuestionIndex = getSourceQuestionIndex()) {
  const dictionary = loadQuestionDictionary(locale);
  const inspection = inspectQuestionDictionary(dictionary, sourceQuestionIndex);
  const byTopic = new Map();

  for (const id of inspection.complete) {
    const topic = sourceQuestionIndex.get(id);
    byTopic.set(topic, (byTopic.get(topic) || 0) + 1);
  }

  const floor = QUESTION_COVERAGE_FLOORS[locale] ?? 0;
  return {
    locale,
    translated: inspection.complete.length,
    floor,
    deltaFromFloor: inspection.complete.length - floor,
    totalSource: sourceQuestionIndex.size,
    percent: sourceQuestionIndex.size
      ? (inspection.complete.length / sourceQuestionIndex.size) * 100
      : 0,
    byTopic,
    ...inspection,
  };
}
