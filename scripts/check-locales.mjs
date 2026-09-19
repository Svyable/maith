import { readFileSync } from 'node:fs';
import {
  FOUNDATION_QUESTION_IDS,
  LOCALES_DIRECTORY,
  QUESTION_FIELDS,
  getCoreLocaleCodes,
  getSourceQuestionIndex,
  inspectQuestionDictionary,
  loadQuestionDictionary,
} from './localization-coverage.mjs';

const localeCodes = getCoreLocaleCodes();
const dictionaries = Object.fromEntries(
  localeCodes.map((locale) => [
    locale,
    JSON.parse(readFileSync(new URL(`${locale}.json`, LOCALES_DIRECTORY), 'utf8')),
  ]),
);
const baseline = dictionaries.en;
const baselineKeys = Object.keys(baseline).sort();
const placeholders = (value) =>
  [...String(value).matchAll(/\{\{([^}]+)\}\}/g)].map((match) => match[1]).sort();
const sourceQuestionIndex = getSourceQuestionIndex();
let failed = false;

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  const keys = Object.keys(dictionary).sort();
  const missing = baselineKeys.filter((key) => !(key in dictionary));
  const extra = keys.filter((key) => !(key in baseline));
  const mismatched = baselineKeys.filter(
    (key) =>
      key in dictionary &&
      placeholders(baseline[key]).join('|') !== placeholders(dictionary[key]).join('|'),
  );

  if (missing.length || extra.length || mismatched.length) {
    failed = true;
    console.error(
      `${locale}: missing=${missing.join(',') || 'none'} extra=${extra.join(',') || 'none'} placeholders=${mismatched.join(',') || 'none'}`,
    );
  }
}

const questionCoverage = [];
for (const locale of localeCodes.filter((locale) => locale !== 'en')) {
  let dictionary;
  try {
    dictionary = loadQuestionDictionary(locale);
  } catch (error) {
    failed = true;
    console.error(`${locale}: missing or invalid question locale file`);
    continue;
  }

  const inspection = inspectQuestionDictionary(dictionary, sourceQuestionIndex);
  const missingFoundation = FOUNDATION_QUESTION_IDS.filter((id) =>
    QUESTION_FIELDS.some((field) => !(`q.${id}.${field}` in dictionary)),
  );

  if (inspection.incomplete.length) {
    failed = true;
    console.error(
      `${locale}: incomplete translated questions=${inspection.incomplete.join(',')}`,
    );
  }

  if (inspection.unknown.length) {
    failed = true;
    console.error(
      `${locale}: translations reference unknown question ids=${inspection.unknown.join(',')}`,
    );
  }

  if (missingFoundation.length) {
    failed = true;
    console.error(
      `${locale}: missing foundation questions=${missingFoundation.join(',')}`,
    );
  }

  if (inspection.complete.length < FOUNDATION_QUESTION_IDS.length) {
    failed = true;
    console.error(
      `${locale}: translated questions=${inspection.complete.length}, required>=${FOUNDATION_QUESTION_IDS.length}`,
    );
  }

  questionCoverage.push(`${locale}:${inspection.complete.length}`);
}

if (failed) process.exit(1);
console.log(
  `Locale integrity passed: ${localeCodes.length} locales, ${baselineKeys.length} matching UI keys, placeholders preserved.`,
);
console.log(
  `Question localization passed: canonical foundation ${FOUNDATION_QUESTION_IDS.length} questions complete in every translated locale; ${questionCoverage.join(' · ')}.`,
);
