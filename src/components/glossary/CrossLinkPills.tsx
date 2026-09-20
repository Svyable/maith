import { useNavigate } from 'react-router-dom';
import {
  resolveFormulaRouteSlug,
  resolveThinkerRouteSlug,
  shouldLinkGlossaryRelatedId,
} from '@/config/reference-aliases';
import {
  buildFormulaPath,
  buildGlossaryTermPath,
  buildThinkerPath,
} from '@/config/site-navigation';

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

  const resolvedFormulaLinks = (formulaLinks ?? []).flatMap((reference) => {
    const slug = resolveFormulaRouteSlug(reference);
    return slug ? [{ reference, slug }] : [];
  });
  const resolvedThinkerLinks = (thinkerLinks ?? []).flatMap((reference) => {
    const slug = resolveThinkerRouteSlug(reference);
    return slug ? [{ reference, slug }] : [];
  });
  const resolvedGlossaryLinks = (glossaryLinks ?? []).filter(shouldLinkGlossaryRelatedId);

  const hasAny =
    (symbolLinks && Object.keys(symbolLinks).length > 0) ||
    resolvedFormulaLinks.length > 0 ||
    resolvedThinkerLinks.length > 0 ||
    resolvedGlossaryLinks.length > 0;

  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {symbolLinks &&
        Object.entries(symbolLinks).map(([symbol, slug]) => (
          <Pill
            key={'sym-' + symbol}
            emoji="🔤"
            label={symbol}
            href={GEEKTOME_BASE + '/' + slug}
          />
        ))}

      {resolvedFormulaLinks.map(({ reference, slug }) => (
        <Pill
          key={'formula-' + reference}
          emoji="📐"
          label={slugToLabel(reference)}
          onClick={() => navigate(buildFormulaPath(slug))}
        />
      ))}

      {resolvedThinkerLinks.map(({ reference, slug }) => (
        <Pill
          key={'thinker-' + reference}
          emoji="🧠"
          label={slugToLabel(reference)}
          onClick={() => navigate(buildThinkerPath(slug))}
        />
      ))}

      {resolvedGlossaryLinks.map((reference) => (
        <Pill
          key={'gloss-' + reference}
          emoji="📖"
          label={slugToLabel(reference)}
          onClick={() => navigate(buildGlossaryTermPath(reference))}
        />
      ))}
    </div>
  );
}
