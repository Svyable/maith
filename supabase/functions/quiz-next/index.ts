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

let _questions: Question[] | null = null;

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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topics, seenIds, count } = await req.json() as {
      topics?: string[];
      seenIds?: number[];
      count?: number;
    };

    const allQuestions = await getQuestions();
    const batchSize = Math.min(count ?? 15, 30);
    const seen = new Set(seenIds ?? []);

    let pool = topics && topics.length > 0
      ? allQuestions.filter(q => topics.includes(q.topic))
      : [...allQuestions];

    pool = pool.filter(q => !seen.has(q.id));

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Take batch and STRIP answers but KEEP hint
    const batch = pool.slice(0, batchSize).map(({ correctIndex, explanation, realWorld, ...pub }) => pub);

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
