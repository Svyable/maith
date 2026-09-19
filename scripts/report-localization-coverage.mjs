import {
  buildQuestionCoverage,
  getCoreLocaleCodes,
  getSourceQuestionIndex,
} from './localization-coverage.mjs';

const sourceQuestionIndex = getSourceQuestionIndex();
const locales = getCoreLocaleCodes().filter((locale) => locale !== 'en');
const coverage = locales.map((locale) => buildQuestionCoverage(locale, sourceQuestionIndex));

console.log('Question localization coverage');
console.log('locale | translated | floor | delta | source | coverage');
console.log('-------|------------|-------|-------|--------|---------');
for (const item of coverage) {
  const delta = item.deltaFromFloor >= 0
    ? `+${item.deltaFromFloor}`
    : String(item.deltaFromFloor);
  console.log(
    `${item.locale.padEnd(6)} | ${String(item.translated).padStart(10)} | ${String(item.floor).padStart(5)} | ${delta.padStart(5)} | ${String(item.totalSource).padStart(6)} | ${item.percent.toFixed(1).padStart(7)}%`,
  );
}

const topicTotals = new Map();
for (const topic of sourceQuestionIndex.values()) {
  topicTotals.set(topic, (topicTotals.get(topic) || 0) + 1);
}

const visibleTopics = [...topicTotals.keys()]
  .filter((topic) => coverage.some((item) => (item.byTopic.get(topic) || 0) > 0))
  .sort();

console.log('\nCoverage by topic (translated/source)');
console.log(['topic', ...locales].join(' | '));
console.log(['---', ...locales.map(() => '---')].join(' | '));
for (const topic of visibleTopics) {
  const total = topicTotals.get(topic);
  const cells = coverage.map((item) => `${item.byTopic.get(topic) || 0}/${total}`);
  console.log([topic, ...cells].join(' | '));
}

const incomplete = coverage.flatMap((item) =>
  item.incomplete.map((id) => `${item.locale}:q.${id}`),
);
const unknown = coverage.flatMap((item) =>
  item.unknown.map((id) => `${item.locale}:q.${id}`),
);
const regressions = coverage
  .filter((item) => item.deltaFromFloor < 0)
  .map((item) => `${item.locale}:${item.translated}/${item.floor}`);

if (incomplete.length) console.log(`\nIncomplete: ${incomplete.join(', ')}`);
if (unknown.length) console.log(`\nUnknown IDs: ${unknown.join(', ')}`);
if (regressions.length) console.log(`\nBelow baseline: ${regressions.join(', ')}`);
