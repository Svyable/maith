import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

function sourceFiles(root: string): string[] {
  return readdirSync(root).flatMap((entry) => {
    const path = join(root, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(entry) ? [path] : [];
  });
}

const SUPABASE_HOOK_EXEMPTIONS = new Set([
  'useAuth.ts',
  'useProfile.ts',
  'useThinkerAchievements.ts',
]);

describe('SOLID architecture boundaries', () => {
  it('keeps page components independent of Supabase adapters', () => {
    const pagesDir = resolve(process.cwd(), 'src/pages');
    const offenders = sourceFiles(pagesDir)
      .filter((path) => readFileSync(path, 'utf8').includes('@/integrations/supabase'))
      .map((path) => path.replace(process.cwd() + '/', ''));

    expect(offenders).toEqual([]);
  });

  it('prevents new hooks from coupling directly to the Supabase client', () => {
    const hooksDir = resolve(process.cwd(), 'src/hooks');
    const offenders = sourceFiles(hooksDir)
      .filter((path) => readFileSync(path, 'utf8').includes('@/integrations/supabase/client'))
      .filter((path) => !SUPABASE_HOOK_EXEMPTIONS.has(path.split('/').pop() ?? ''))
      .map((path) => path.replace(process.cwd() + '/', ''));

    expect(offenders).toEqual([]);
  });

  it('keeps repository contracts independent of infrastructure implementations', () => {
    const domainDir = resolve(process.cwd(), 'src/domain');
    const contractFiles = sourceFiles(domainDir).filter((path) => path.endsWith('/repository.ts'));
    const offenders = contractFiles
      .filter((path) => {
        const source = readFileSync(path, 'utf8');
        return source.includes('@/integrations/')
          || source.includes('react')
          || source.includes('@/hooks/');
      })
      .map((path) => path.replace(process.cwd() + '/', ''));

    expect(offenders).toEqual([]);
  });
});
