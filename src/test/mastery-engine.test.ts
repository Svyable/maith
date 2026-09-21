import { describe, expect, it } from 'vitest';
import {
  buildAnswerConceptEvidence,
  buildSkipConceptEvidence,
  deriveConceptMastery,
  expandConceptsWithPrerequisites,
  getPracticeConceptIds,
  getConceptBlockerIds,
  selectPracticeCandidates,
} from '@/domain/mastery';

const question = {
  id: 3,
  topic: 'linear-algebra',
  difficulty: 'hard' as const,
  conceptIds: ['eigenvalues-eigenvectors'],
};

describe('concept evidence', () => {
  it('preserves assistance signals for inspectable mastery evidence', () => {
    const evidence = buildAnswerConceptEvidence(question, true, {
      hintUsed: true,
      eliminateUsed: true,
    });

    expect(evidence).toEqual([
      expect.objectContaining({
        conceptId: 'eigenvalues-eigenvectors',
        questionId: 3,
        correct: true,
        hintUsed: true,
        eliminateUsed: true,
        primary: true,
      }),
    ]);
  });

  it('records mapped skips without inventing evidence for unmapped questions', () => {
    expect(buildSkipConceptEvidence(question)).toHaveLength(1);
    expect(buildSkipConceptEvidence({ ...question, conceptIds: undefined })).toEqual([]);
  });
});

describe('deriveConceptMastery', () => {
  it('distinguishes assisted success from independent mastery evidence', () => {
    const assisted = buildAnswerConceptEvidence(question, true, { hintUsed: true });
    const independent = Array.from({ length: 3 }, (_, index) =>
      buildAnswerConceptEvidence({ ...question, id: 10 + index }, true),
    ).flat();

    const [mastery] = deriveConceptMastery([...assisted, ...independent]);

    expect(mastery.status).toBe('mastered');
    expect(mastery.attempts).toBe(4);
    expect(mastery.correct).toBe(4);
    expect(mastery.independentCorrect).toBe(3);
    expect(mastery.assistedCorrect).toBe(1);
    expect(mastery.hardOrSotaCorrect).toBe(4);
  });

  it('carries the latest persisted evidence timestamp into mastery', () => {
    const evidence = [
      ...buildAnswerConceptEvidence(question, true),
      ...buildAnswerConceptEvidence({ ...question, id: 12 }, false),
    ];
    evidence[0].createdAt = '2026-09-18T12:00:00.000Z';
    evidence[1].createdAt = '2026-09-20T12:00:00.000Z';

    const [mastery] = deriveConceptMastery(evidence);
    expect(mastery.lastAttemptAt).toBe('2026-09-20T12:00:00.000Z');
  });

  it('keeps sparse success in developing state', () => {
    const [mastery] = deriveConceptMastery(
      buildAnswerConceptEvidence(question, true),
    );
    expect(mastery.status).toBe('developing');
  });

  it('treats repeated misses as learning evidence rather than mastery', () => {
    const evidence = [
      ...buildAnswerConceptEvidence(question, false),
      ...buildSkipConceptEvidence({ ...question, id: 4 }),
    ];
    const [mastery] = deriveConceptMastery(evidence);
    expect(mastery.status).toBe('learning');
    expect(mastery.accuracy).toBe(0);
  });
});

describe('mastery prerequisite blockers', () => {
  it('treats unseen or developing prerequisites as blockers', () => {
    const mastery = [
      {
        conceptId: 'null-space',
        label: 'Null Space',
        status: 'developing' as const,
        attempts: 1,
        correct: 1,
        independentCorrect: 1,
        assistedCorrect: 0,
        hardOrSotaCorrect: 1,
        accuracy: 1,
        lastAttemptAt: null,
        prerequisiteIds: ['linear-systems'],
      },
      {
        conceptId: 'linear-systems',
        label: 'Linear Systems',
        status: 'developing' as const,
        attempts: 1,
        correct: 1,
        independentCorrect: 1,
        assistedCorrect: 0,
        hardOrSotaCorrect: 0,
        accuracy: 1,
        lastAttemptAt: null,
        prerequisiteIds: ['matrix-multiplication'],
      },
    ];

    expect(getConceptBlockerIds(mastery, 'null-space')).toEqual(['linear-systems']);
    expect(getConceptBlockerIds(mastery, 'linear-systems')).toEqual(['matrix-multiplication']);
  });

  it('does not block on strong prerequisites', () => {
    const mastery = [{
      conceptId: 'linear-systems',
      label: 'Linear Systems',
      status: 'strong' as const,
      attempts: 3,
      correct: 2,
      independentCorrect: 2,
      assistedCorrect: 0,
      hardOrSotaCorrect: 1,
      accuracy: 2 / 3,
      lastAttemptAt: null,
      prerequisiteIds: ['matrix-multiplication'],
    }];

    expect(getConceptBlockerIds(mastery, 'null-space')).toEqual([]);
  });
});

describe('prerequisite-aware practice targeting', () => {
  it('expands weak concepts through transitive prerequisites', () => {
    expect(expandConceptsWithPrerequisites(['matrix-singularity'])).toEqual([
      'matrix-singularity',
      'null-space',
      'linear-systems',
      'matrix-multiplication',
      'matrix-dimensions',
    ]);
  });

  it('uses primary unresolved concepts to build practice targets', () => {
    expect(getPracticeConceptIds([
      { conceptIds: ['matrix-singularity', 'null-space'] },
    ])).toContain('matrix-dimensions');
  });

  it('prefers fresh questions and still covers prerequisite concepts', () => {
    const pool = [
      { id: 1, difficulty: 'hard' as const, conceptIds: ['matrix-singularity'] },
      { id: 2, difficulty: 'hard' as const, conceptIds: ['null-space'] },
      { id: 3, difficulty: 'hard' as const, conceptIds: ['linear-systems'] },
      { id: 4, difficulty: 'easy' as const, conceptIds: ['matrix-dimensions'] },
      { id: 5, difficulty: 'hard' as const, conceptIds: ['matrix-singularity'] },
    ];

    const selected = selectPracticeCandidates(
      pool,
      ['matrix-singularity', 'null-space', 'linear-systems'],
      ['hard'],
      new Set([1]),
      3,
    );

    expect(selected).toHaveLength(3);
    expect(selected.map(({ id }) => id)).not.toContain(1);
    expect(new Set(selected.flatMap(({ conceptIds }) => conceptIds ?? []))).toEqual(
      new Set(['matrix-singularity', 'null-space', 'linear-systems']),
    );
  });
});
