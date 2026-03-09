import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const GEEKTOME_BASE = 'https://geektome.lovable.app/letter';

interface LatexRendererProps {
  text: string;
  className?: string;
  /** Maps symbol key (e.g. "n", "\\log") → geektome slug (e.g. "nu", "lambda") */
  symbolLinks?: Record<string, string>;
}

// Splits plain text into segments of markdown links and plain text
function parseMarkdownLinks(raw: string): { type: 'text' | 'link'; text: string; href?: string }[] {
  const result: { type: 'text' | 'link'; text: string; href?: string }[] = [];
  const linkRe = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(raw)) !== null) {
    if (m.index > last) result.push({ type: 'text', text: raw.slice(last, m.index) });
    result.push({ type: 'link', text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < raw.length) result.push({ type: 'text', text: raw.slice(last) });
  return result;
}

/**
 * Find the best matching symbolLink for a LaTeX math string.
 * For simple expressions like "n", "O", "\log" → direct match.
 * Returns the geektome URL or null.
 */
function findSymbolUrl(math: string, symbolLinks: Record<string, string>): string | null {
  const trimmed = math.trim();
  // Direct key match (e.g. "n" → "nu")
  if (symbolLinks[trimmed]) {
    return `${GEEKTOME_BASE}/${symbolLinks[trimmed]}`;
  }
  // Check for simple symbol-only patterns like "f(n)", "T(n)", "O()"
  // Only link single-symbol simple expressions, not complex multi-symbol formulas
  if (trimmed.length <= 4) {
    for (const [key, slug] of Object.entries(symbolLinks)) {
      if (trimmed === key) {
        return `${GEEKTOME_BASE}/${slug}`;
      }
    }
  }
  return null;
}

export function LatexRenderer({ text, className = '', symbolLinks }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    // Split on LaTeX $...$
    const parts = text.split(/(\$[^$]+\$)/g);

    parts.forEach((part) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        const url = symbolLinks ? findSymbolUrl(math, symbolLinks) : null;

        const span = document.createElement('span');
        try {
          katex.render(math, span, { throwOnError: false, displayMode: false });
        } catch {
          span.textContent = math;
        }

        if (url) {
          const a = document.createElement('a');
          a.href = url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'inline-flex items-baseline border-b border-dotted border-primary/60 hover:border-solid hover:border-primary transition-colors cursor-pointer';
          a.title = `Learn about this symbol on GeekToMe`;
          a.appendChild(span);
          containerRef.current?.appendChild(a);
        } else {
          containerRef.current?.appendChild(span);
        }
      } else {
        // Parse markdown links within plain text segments
        const segments = parseMarkdownLinks(part);
        segments.forEach((seg) => {
          if (seg.type === 'link') {
            const a = document.createElement('a');
            a.href = seg.href!;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = seg.text;
            a.className = 'text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid';
            containerRef.current?.appendChild(a);
          } else {
            const span = document.createElement('span');
            span.textContent = seg.text;
            containerRef.current?.appendChild(span);
          }
        });
      }
    });
  }, [text, symbolLinks]);

  return <div ref={containerRef} className={className} />;
}
