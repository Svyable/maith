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

if (failed) process.exit(1);
console.log(`Locale integrity passed: ${files.length} locales, ${baselineKeys.length} matching keys, placeholders preserved.`);
