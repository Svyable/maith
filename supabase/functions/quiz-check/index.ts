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
    const { questionId, selectedIndex } = await req.json() as {
      questionId: number;
      selectedIndex: number;
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

    return new Response(JSON.stringify({
      correct,
      correctIndex: question.correctIndex,
      explanation: question.explanation,
      realWorld: question.realWorld,
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
