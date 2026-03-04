interface PaperPillProps {
  paper: { title: string; url: string; venue?: string; year?: number };
  className?: string;
}

export function PaperPill({ paper, className = '' }: PaperPillProps) {
  return (
    <a
      href={paper.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors ${className}`}
    >
      <span>📄</span>
      <span className="font-medium text-foreground">{paper.title}</span>
      {paper.venue && <span className="text-muted-foreground/70">· {paper.venue}</span>}
      <span className="text-muted-foreground">↗</span>
    </a>
  );
}
