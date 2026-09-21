import { useMemo } from 'react';
import { CONCEPT_MAP } from '@/config/concepts';
import {
  getConceptBlockerIds,
  type ConceptMastery,
} from '@/domain/mastery';
import { t } from '@/i18n';

interface ConceptMasteryPanelProps {
  mastery: ConceptMastery[];
}

const STATUS_ORDER: Record<ConceptMastery['status'], number> = {
  learning: 0,
  developing: 1,
  strong: 2,
  mastered: 3,
};

const STATUS_CLASS: Record<ConceptMastery['status'], string> = {
  learning: 'border-destructive/25 bg-destructive/10 text-destructive',
  developing: 'border-accent/25 bg-accent/10 text-accent',
  strong: 'border-primary/25 bg-primary/10 text-primary',
  mastered: 'border-success/25 bg-success/10 text-success',
};

function statusLabel(status: ConceptMastery['status']): string {
  return t(`profile.mastery${status[0].toUpperCase()}${status.slice(1)}`);
}

export function ConceptMasteryPanel({ mastery }: ConceptMasteryPanelProps) {
  const ordered = useMemo(
    () => [...mastery].sort((a, b) =>
      STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
      || a.accuracy - b.accuracy
      || b.attempts - a.attempts
      || a.label.localeCompare(b.label),
    ),
    [mastery],
  );

  if (ordered.length === 0) return null;

  const summary = ordered.reduce(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { learning: 0, developing: 0, strong: 0, mastered: 0 },
  );

  return (
    <section className="space-y-3" aria-labelledby="concept-mastery-title">
      <div>
        <h3 id="concept-mastery-title" className="text-sm font-bold text-muted-foreground">
          {t('profile.conceptMastery')}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground/80">
          {t('profile.conceptMasterySub')}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {(Object.keys(summary) as ConceptMastery['status'][]).map((status) => (
          <div key={status} className="rounded-xl border border-border bg-card px-2 py-2 text-center">
            <div className="font-mono text-lg font-bold text-foreground">{summary[status]}</div>
            <div className="truncate text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
              {statusLabel(status)}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {ordered.slice(0, 8).map((item) => {
          const blockers = getConceptBlockerIds(mastery, item.conceptId);
          const blockerLabels = blockers
            .map((id) => CONCEPT_MAP[id]?.label ?? id)
            .join(', ');
          const accuracy = Math.round(item.accuracy * 100);

          return (
            <div
              key={item.conceptId}
              className="rounded-xl border border-border bg-card p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-muted-foreground">
                    <span>{t('profile.masteryCorrect', {
                      correct: item.correct,
                      attempts: item.attempts,
                    })}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t('profile.masteryIndependent', {
                      count: item.independentCorrect,
                    })}</span>
                    {item.lastAttemptAt && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{t('profile.masteryLastPracticed', {
                          date: new Date(item.lastAttemptAt).toLocaleDateString(),
                        })}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-bold ${STATUS_CLASS[item.status]}`}>
                  {statusLabel(item.status)}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <div
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={accuracy}
                >
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
                <span className="w-9 text-right font-mono text-[10px] text-muted-foreground">
                  {accuracy}%
                </span>
              </div>

              {blockerLabels && (
                <p className="mt-2 text-[10px] text-muted-foreground">
                  {t('profile.masteryPrerequisites', { concepts: blockerLabels })}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
