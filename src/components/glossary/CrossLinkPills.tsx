import { useNavigate } from 'react-router-dom';
import { buildFormulaPath, buildGlossaryTermPath, buildThinkerPath } from '@/config/site-navigation';
import { toSeoSlug } from '@/config/reference-utils';

const GEEKTOME_BASE = 'https://geektome.lovable.app/letter';

interface CrossLinkPillsProps {
  symbolLinks?: Record<string, string>;
  formulaLinks?: string[];
  thinkerLinks?: string[];
  glossaryLinks?: string[];
}

function Pill({
  emoji,
  label,
  onClick,
  href,
}: {
  emoji: string;
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const cls =
    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium ' +
    'bg-primary/8 text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/40 ' +
    'transition-all cursor-pointer whitespace-nowrap';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[11px]">{emoji}</span>
        <span className="truncate max-w-[120px]">{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <span className="text-[11px]">{emoji}</span>
      <span className="truncate max-w-[120px]">{label}</span>
    </button>
  );
}

function slugToLabel(slug: string) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function CrossLinkPills({
  symbolLinks,
  formulaLinks,
  thinkerLinks,
  glossaryLinks,
}: CrossLinkPillsProps) {
  const navigate = useNavigate();

  const hasAny =
    (symbolLinks && Object.keys(symbolLinks).length > 0) ||
    (formulaLinks && formulaLinks.length > 0) ||
    (thinkerLinks && thinkerLinks.length > 0) ||
    (glossaryLinks && glossaryLinks.length > 0);

  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {/* Symbol links → GeekToMe */}
      {symbolLinks &&
        Object.entries(symbolLinks).map(([symbol, slug]) => (
          <Pill
            key={`sym-${symbol}`}
            emoji="🔤"
            label={symbol}
            href={`${GEEKTOME_BASE}/${slug}`}
          />
        ))}

      {/* Formula links → /formulas?q= */}
      {formulaLinks?.map((f) => (
        <Pill
          key={`formula-${f}`}
          emoji="📐"
          label={slugToLabel(f)}
          onClick={() => navigate(buildFormulaPath(toSeoSlug(f)))}
        />
      ))}

      {/* Thinker links → /masterminds?q= */}
      {thinkerLinks?.map((t) => (
        <Pill
          key={`thinker-${t}`}
          emoji="🧠"
          label={slugToLabel(t)}
          onClick={() => navigate(buildThinkerPath(t))}
        />
      ))}

      {/* Glossary cross-links → /glossary?term= */}
      {glossaryLinks?.map((g) => (
        <Pill
          key={`gloss-${g}`}
          emoji="📖"
          label={slugToLabel(g)}
          onClick={() => navigate(buildGlossaryTermPath(g))}
        />
      ))}
    </div>
  );
}
