import { t } from '@/i18n';

type FieldSlug =
  | 'all'
  | 'mathematics'
  | 'physics'
  | 'chemistry'
  | 'biology-medicine'
  | 'computer-science'
  | 'earth-space'
  | 'engineering'
  | 'finance'
  | 'cfa-program'
  | 'cpa-exam'
  | 'actuarial-exams'
  | 'mba-core'
  | 'law-ethics'
  | 'medical-sciences'
  | 'data-science'
  | '2024-sota'
  | '2025-sota'
  | '2026-sota'
  | (string & {}); // allow unknown slugs without crashing

const FIELD_META: Record<string, { emoji: string; label: string }> = {
  all: { emoji: '🌐', label: 'All Fields' },
  mathematics: { emoji: '📐', label: 'Mathematics' },
  physics: { emoji: '⚛️', label: 'Physics' },
  chemistry: { emoji: '🧪', label: 'Chemistry' },
  'biology-medicine': { emoji: '🧬', label: 'Biology & Medicine' },
  'computer-science': { emoji: '💻', label: 'Computer Science' },
  'earth-space': { emoji: '🌍', label: 'Earth & Space' },
  engineering: { emoji: '⚙️', label: 'Engineering' },
  finance: { emoji: '📈', label: 'Finance' },
  'cfa-program': { emoji: '🏛️', label: 'CFA Program' },
  'cpa-exam': { emoji: '📋', label: 'CPA Exam' },
  'actuarial-exams': { emoji: '📐', label: 'Actuarial Exams' },
  'mba-core': { emoji: '🎓', label: 'MBA Core' },
  'law-ethics': { emoji: '⚖️', label: 'Law & Ethics' },
  'medical-sciences': { emoji: '🏥', label: 'Medical Sciences' },
  'data-science': { emoji: '📡', label: 'Data Science' },
  '2024-sota': { emoji: '⚡', label: '2024 SOTA' },
  '2025-sota': { emoji: '🧠', label: '2025 SOTA' },
  '2026-sota': { emoji: '🚀', label: '2026 SOTA' },
};

function normalizeLabel(s: string) {
  return s
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function TermMeta({
  field,
  topic,
  className = '',
}: {
  field?: FieldSlug;
  topic?: string | null;
  className?: string;
}) {
  const meta = field ? FIELD_META[field] : undefined;
  const fieldEmoji = meta?.emoji ?? '🏷️';
  const fieldLabel = meta?.label ?? (field ? normalizeLabel(field) : t('glossary.unknownField'));

  return (
    <div className={`flex items-center gap-2 text-[10px] ${className}`}>
      {/* Field chip */}
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-secondary border border-border text-muted-foreground uppercase tracking-wider">
        <span className="text-[11px]">{fieldEmoji}</span>
        <span>{fieldLabel}</span>
      </span>

      {/* Topic chip (optional) */}
      {topic ? (
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/40 border border-border/60 text-muted-foreground uppercase tracking-wider">
          <span className="text-[11px]">🏷️</span>
          <span className="truncate max-w-[140px]">{topic}</span>
        </span>
      ) : null}
    </div>
  );
}