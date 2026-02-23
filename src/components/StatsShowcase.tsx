import { motion } from 'framer-motion';

interface StatItem {
  value: string | number;
  label: string;
  emoji: string;
}

interface StatsShowcaseProps {
  stats: StatItem[];
}

export function StatsShowcase({ stats }: StatsShowcaseProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-3 text-center group hover:border-primary/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-lg block mb-0.5">{stat.emoji}</span>
            <p className="text-xl font-bold font-mono-code text-foreground">{stat.value}</p>
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
