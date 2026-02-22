import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface Question {
  id: number;
  topic: string;
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  realWorld: string;
  hint: string;
}

// Question translations keyed by locale → questionId.field → translated string
type QuestionTranslations = Record<string, Record<string, string>>;

let _questions: Question[] | null = null;
let _translations: QuestionTranslations = {};

async function getQuestions(): Promise<Question[]> {
  if (_questions) return _questions;
  try {
    const mod = await import('../_shared/questions.ts');
    _questions = mod.allQuestions;
    return _questions!;
  } catch {
    return [];
  }
}

async function getTranslations(locale: string): Promise<Record<string, string>> {
  if (locale === 'en' || !locale) return {};
  if (_translations[locale]) return _translations[locale];
  try {
    const mod = await import(`../_shared/questions_${locale}.ts`);
    _translations[locale] = mod.translations ?? {};
    return _translations[locale];
  } catch {
    return {};
  }
}

function translateQuestion(q: Question, translations: Record<string, string>): Question {
  if (!translations || Object.keys(translations).length === 0) return q;
  const prefix = `q.${q.id}`;
  const translated = { ...q };
  if (translations[`${prefix}.question`]) translated.question = translations[`${prefix}.question`];
  if (translations[`${prefix}.hint`]) translated.hint = translations[`${prefix}.hint`];
  if (translations[`${prefix}.explanation`]) translated.explanation = translations[`${prefix}.explanation`];
  if (translations[`${prefix}.realWorld`]) translated.realWorld = translations[`${prefix}.realWorld`];
  translated.options = q.options.map((opt, i) => {
    return translations[`${prefix}.options.${i}`] ?? opt;
  });
  return translated;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topics, difficulties, seenIds, count, locale } = await req.json() as {
      topics?: string[];
      difficulties?: string[];
      seenIds?: number[];
      count?: number;
      locale?: string;
    };

    const allQuestions = await getQuestions();
    const translations = await getTranslations(locale ?? 'en');
    const batchSize = Math.min(count ?? 15, 30);
    const seen = new Set(seenIds ?? []);

    let pool = topics && topics.length > 0
      ? allQuestions.filter(q => topics.includes(q.topic))
      : [...allQuestions];

    // Filter by difficulty levels (skip if all 3 or none selected)
    if (difficulties && difficulties.length > 0 && difficulties.length < 3) {
      pool = pool.filter(q => difficulties.includes(q.difficulty));
    }

    pool = pool.filter(q => !seen.has(q.id));

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Take batch, translate if needed, then STRIP answers but KEEP hint
    const batch = pool.slice(0, batchSize).map(q => {
      const tq = translateQuestion(q, translations);
      const { correctIndex, explanation, realWorld, ...pub } = tq;
      return pub;
    });

    return new Response(JSON.stringify({ questions: batch, remaining: pool.length - batch.length }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
