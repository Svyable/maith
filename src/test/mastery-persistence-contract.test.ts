import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const migrationPath = 'supabase/migrations/20260921035500_mastery_concept_evidence.sql';
const sql = readFileSync(migrationPath, 'utf8');

describe('mastery persistence migration contract', () => {
  it('keeps concept evidence append-only and user-readable through RLS', () => {
    expect(sql).toContain('CREATE TABLE public.user_concept_evidence');
    expect(sql).toContain('ALTER TABLE public.user_concept_evidence ENABLE ROW LEVEL SECURITY');
    expect(sql).toContain('CREATE POLICY user_concept_evidence_select_self');
    expect(sql).toContain('FOR SELECT TO authenticated');
    expect(sql).toContain('(select auth.uid()) = user_id');
    expect(sql).toContain('REVOKE ALL ON TABLE public.user_concept_evidence FROM anon, authenticated');
    expect(sql).toContain('GRANT SELECT ON TABLE public.user_concept_evidence TO authenticated');
  });

  it('keeps privileged writes out of the exposed public function', () => {
    expect(sql).toContain('CREATE OR REPLACE FUNCTION private.submit_quiz_session_impl');
    expect(sql).toContain('SECURITY DEFINER');
    expect(sql).toContain('CREATE OR REPLACE FUNCTION public.submit_quiz_session');
    expect(sql).toContain('SECURITY INVOKER');
    expect(sql).toContain('REVOKE ALL ON FUNCTION public.submit_quiz_session');
    expect(sql).toContain('TO authenticated');
  });

  it('preserves idempotent session submission before applying aggregates', () => {
    expect(sql).toContain('ON CONFLICT (client_session_id) DO NOTHING');
    expect(sql).toContain('IF v_session_id IS NULL THEN');
    expect(sql).toContain('ON CONFLICT (user_id, client_session_id, question_id, concept_id) DO NOTHING');
  });

  it('removes both historical submit_quiz_session overload identities', () => {
    const drops = sql.match(/DROP FUNCTION IF EXISTS public\.submit_quiz_session/g) ?? [];
    expect(drops).toHaveLength(2);
  });
});
