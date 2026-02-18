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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { questionId, selectedIndex, locale } = await req.json() as {
      questionId: number;
      selectedIndex: number;
      locale?: string;
    };

    if (typeof questionId !== 'number' || typeof selectedIndex !== 'number') {
      throw new Error('questionId and selectedIndex are required numbers');
    }

    const allQuestions = await getQuestions();
    const question = allQuestions.find(q => q.id === questionId);

    if (!question) {
      return new Response(JSON.stringify({ error: 'Question not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const correct = question.correctIndex === selectedIndex;

    // Apply translations to explanation and realWorld
    const translations = await getTranslations(locale ?? 'en');
    const prefix = `q.${questionId}`;
    const explanation = translations[`${prefix}.explanation`] ?? question.explanation;
    const realWorld = translations[`${prefix}.realWorld`] ?? question.realWorld;

    return new Response(JSON.stringify({
      correct,
      correctIndex: question.correctIndex,
      explanation,
      realWorld,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
