import { readFileSync, readdirSync } from 'node:fs';

const directory = new URL('../src/i18n/locales/', import.meta.url);
const files = readdirSync(directory).filter((file) => /^[a-z]{2}\.json$/.test(file)).sort();
const dictionaries = Object.fromEntries(files.map((file) => [file.slice(0, 2), JSON.parse(readFileSync(new URL(file, directory), 'utf8'))]));
const baseline = dictionaries.en;
const baselineKeys = Object.keys(baseline).sort();
const placeholders = (value) => [...String(value).matchAll(/\{\{([^}]+)\}\}/g)].map((match) => match[1]).sort();
let failed = false;

for (const [locale, dictionary] of Object.entries(dictionaries)) {
  const keys = Object.keys(dictionary).sort();
  const missing = baselineKeys.filter((key) => !(key in dictionary));
  const extra = keys.filter((key) => !(key in baseline));
  const mismatched = baselineKeys.filter((key) => key in dictionary && placeholders(baseline[key]).join('|') !== placeholders(dictionary[key]).join('|'));
  if (missing.length || extra.length || mismatched.length) {
    failed = true;
    console.error(`${locale}: missing=${missing.join(',') || 'none'} extra=${extra.join(',') || 'none'} placeholders=${mismatched.join(',') || 'none'}`);
  }
}

const questionDirectory = new URL('../src/i18n/locales/questions/', import.meta.url);
const questionFields = ['question', 'options.0', 'options.1', 'options.2', 'options.3', 'explanation', 'realWorld', 'hint'];
const minQuestionCoverage = 17;
const questionCoverage = [];

for (const locale of Object.keys(dictionaries).filter((locale) => locale !== 'en').sort()) {
  const fileUrl = new URL(`${locale}.json`, questionDirectory);
  let dictionary;
  try {
    dictionary = JSON.parse(readFileSync(fileUrl, 'utf8'));
  } catch (error) {
    failed = true;
    console.error(`${locale}: missing or invalid question locale file`);
    continue;
  }

  const questionIds = [...new Set(
    Object.keys(dictionary)
      .map((key) => key.match(/^q\.(\d+)\./)?.[1])
      .filter(Boolean),
  )].sort((a, b) => Number(a) - Number(b));

  const incomplete = questionIds.filter((id) =>
    questionFields.some((field) => !(`q.${id}.${field}` in dictionary)),
  );

  if (incomplete.length) {
    failed = true;
    console.error(`${locale}: incomplete translated questions=${incomplete.join(',')}`);
  }

  if (questionIds.length < minQuestionCoverage) {
    failed = true;
    console.error(`${locale}: translated questions=${questionIds.length}, required>=${minQuestionCoverage}`);
  }

  questionCoverage.push(`${locale}:${questionIds.length}`);
}

if (failed) process.exit(1);
console.log(`Locale integrity passed: ${files.length} locales, ${baselineKeys.length} matching keys, placeholders preserved.`);
console.log(`Question localization coverage passed: ${questionCoverage.join(' · ')} (minimum ${minQuestionCoverage} per translated locale).`);
