import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { LatexRenderer } from '@/components/LatexRenderer';
import { useTheme } from '@/hooks/useTheme';
import { useVaultProgress } from '@/hooks/useVaultProgress';
import { VAULT_ENTRIES, type VaultEntry } from '@/config/vault';
import { vaultQuestions } from '@/content/vault';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lock, Unlock, Check, X, RotateCcw } from 'lucide-react';

// ── Sub-components ───────────────────────────────────────────

function SecrecyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-3 rounded-sm transition-colors ${
            i < level
              ? level >= 9 ? 'bg-destructive' : level >= 7 ? 'bg-accent' : 'bg-primary'
              : 'bg-muted-foreground/15'
          }`}
        />
      ))}
      <span className="text-[10px] font-mono text-muted-foreground ml-1">{level}/10</span>
    </div>
  );
}

function ClassificationBadge({ entry }: { entry: VaultEntry }) {
  const isStillClassified = entry.declassifiedYear.toLowerCase().includes('still');
  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${
      isStillClassified
        ? 'bg-destructive/15 text-destructive border-destructive/40'
        : 'bg-success/15 text-success border-success/40'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isStillClassified ? 'bg-destructive animate-pulse' : 'bg-success'}`} />
      {isStillClassified ? 'STILL CLASSIFIED' : 'DECLASSIFIED'}
    </div>
  );
}

// ── Quiz Challenge Modal ─────────────────────────────────────

interface ChallengeModalProps {
  entryIndex: number;
  entry: VaultEntry;
  onSuccess: () => void;
  onClose: () => void;
}

function ChallengeModal({ entryIndex, entry, onSuccess, onClose }: ChallengeModalProps) {
  const question = vaultQuestions[entryIndex] ?? null;
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<'pending' | 'correct' | 'wrong'>('pending');

  if (!question) return null;

  const handleAnswer = (idx: number) => {
    if (result !== 'pending') return;
    setSelected(idx);
    if (idx === question.correctIndex) {
      setResult('correct');
      setTimeout(onSuccess, 1200);
    } else {
      setResult('wrong');
    }
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-card border border-destructive/30 rounded-2xl p-5 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-4 h-4 text-destructive" />
          <span className="text-xs font-bold text-destructive uppercase tracking-wider">
            Level {entryIndex + 1} — Unlock Challenge
          </span>
        </div>

        <h3 className="text-sm font-semibold text-foreground mb-1">
          Unlock: {entry.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">Answer correctly to declassify this entry.</p>

        {/* Question */}
        <div className="bg-background/60 rounded-xl border border-border/40 p-4 mb-4">
          <LatexRenderer
            text={question.question}
            className="text-sm font-medium text-foreground leading-relaxed"
          />
        </div>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {question.options.map((opt, i) => {
            let stateClass = 'bg-secondary/50 hover:bg-secondary border-border/40 text-foreground';
            if (selected !== null) {
              if (i === question.correctIndex) {
                stateClass = 'bg-success/15 border-success/50 text-success';
              } else if (i === selected && result === 'wrong') {
                stateClass = 'bg-destructive/15 border-destructive/50 text-destructive';
              } else {
                stateClass = 'bg-secondary/30 border-border/20 text-muted-foreground';
              }
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={result !== 'pending'}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${stateClass} ${
                  result === 'pending' ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <span className="font-bold mr-2 text-muted-foreground">{optionLabels[i]}.</span>
                <LatexRenderer text={opt} className="inline text-sm" />
              </button>
            );
          })}
        </div>

        {/* Result feedback */}
        <AnimatePresence>
          {result === 'correct' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 rounded-xl bg-success/15 border border-success/30 text-success text-sm font-semibold"
            >
              <Check className="w-4 h-4" />
              <span>DECLASSIFIED! Unlocking…</span>
            </motion.div>
          )}
          {result === 'wrong' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/15 border border-destructive/30 text-destructive text-sm font-semibold">
                <X className="w-4 h-4" />
                <span>ACCESS DENIED — Wrong answer</span>
              </div>
              <button
                onClick={() => { setSelected(null); setResult('pending'); }}
                className="w-full py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ── Vault Card ───────────────────────────────────────────────

function VaultCard({
  entry,
  index,
  isUnlocked,
  onChallenge,
}: {
  entry: VaultEntry;
  index: number;
  isUnlocked: boolean;
  onChallenge: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.35) }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isUnlocked
          ? 'bg-card/80 backdrop-blur-sm border-border/60 hover:border-destructive/30 cursor-pointer'
          : 'bg-card/30 backdrop-blur-sm border-border/30 cursor-pointer'
      }`}
      onClick={() => {
        if (isUnlocked) setExpanded(!expanded);
        else onChallenge();
      }}
    >
      {/* Top-secret corner stripe */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className={`absolute top-3 -right-6 rotate-45 text-[8px] font-bold px-6 py-0.5 tracking-widest ${
          isUnlocked
            ? 'bg-destructive/80 text-destructive-foreground'
            : 'bg-muted-foreground/40 text-muted'
        }`}>
          {isUnlocked ? 'TOP SECRET' : 'LOCKED'}
        </div>
      </div>

      {/* Level number */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <span className="text-xs font-bold font-mono text-muted-foreground/60">
          LVL {index + 1}
        </span>
        {isUnlocked ? (
          <Unlock className="w-3 h-3 text-success" />
        ) : (
          <Lock className="w-3 h-3 text-muted-foreground/50" />
        )}
      </div>

      <div className={`relative p-5 pt-8 ${!isUnlocked ? 'select-none' : ''}`}>
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <span className={`text-2xl flex-shrink-0 ${!isUnlocked ? 'opacity-40 blur-[2px]' : ''}`}>
            {entry.domainEmoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className={`font-display font-bold text-base leading-tight ${
              isUnlocked ? 'text-foreground' : 'text-muted-foreground/60'
            }`}>
              {isUnlocked ? entry.name : '█████ ██████████'}
            </h3>
            {entry.codename && (
              <p className={`text-[10px] font-mono mt-0.5 ${
                isUnlocked ? 'text-accent' : 'text-muted-foreground/30'
              }`}>
                CODENAME: {isUnlocked ? entry.codename : '████████'}
              </p>
            )}
            <p className={`text-xs mt-0.5 ${isUnlocked ? 'text-muted-foreground' : 'text-muted-foreground/30'}`}>
              {isUnlocked ? `${entry.agency} · ${entry.field}` : '██████ · ██████████'}
            </p>
          </div>
        </div>

        {isUnlocked ? (
          <>
            {/* Classification status */}
            <div className="mb-3">
              <ClassificationBadge entry={entry} />
            </div>

            {/* Timeline bar */}
            <div className="rounded-xl bg-background/60 border border-border/40 p-3 mb-3">
              <div className="flex items-center justify-between text-xs">
                <div className="text-center">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Classified</p>
                  <p className="font-bold font-mono text-destructive">{entry.classifiedYear}</p>
                </div>
                <div className="flex-1 mx-3 h-px bg-gradient-to-r from-destructive/60 via-muted-foreground/30 to-success/60" />
                <div className="text-center">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Declassified</p>
                  <p className="font-bold font-mono text-success">{entry.declassifiedYear}</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-foreground/85 leading-relaxed mb-3">{entry.summary}</p>

            {/* Meters */}
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-14">Secrecy</span>
                <SecrecyMeter level={entry.secrecyLevel} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-14">Impact</span>
                <SecrecyMeter level={entry.impact} />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-destructive/30 text-destructive">
                {entry.agency}
              </Badge>
              <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border">
                {entry.domain}
              </Badge>
            </div>

            {/* Expandable details */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-4 text-sm">
                    <div>
                      <p className="text-xs font-bold text-destructive/80 uppercase tracking-wide mb-1">📁 Full Story</p>
                      <p className="text-foreground/90 leading-relaxed">{entry.fullStory}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">👤 Key Figures</p>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.keyFigures.map((f) => (
                          <Badge key={f} variant="secondary" className="text-[10px]">{f}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">⚡ Historical Significance</p>
                      <p className="text-foreground/80 leading-relaxed">{entry.significance}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">🌍 Legacy</p>
                      <p className="text-foreground/80 leading-relaxed">{entry.legacy}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-2 text-center">
              <span className="text-[10px] text-muted-foreground/50">
                {expanded ? '▲ collapse' : '▼ tap to declassify'}
              </span>
            </div>
          </>
        ) : (
          /* Locked state */
          <div className="mt-2 text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
                <Lock className="w-6 h-6 text-muted-foreground/40" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60">
              Answer the challenge question to unlock this level
            </p>
            <button className="px-4 py-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 border border-destructive/30 text-destructive text-xs font-bold transition-colors">
              🔓 Attempt Unlock
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────

export default function Vault() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { isUnlocked, unlockNext, resetProgress, totalUnlocked, totalEntries } = useVaultProgress();
  const [challengeIndex, setChallengeIndex] = useState<number | null>(null);

  const handleChallenge = useCallback((index: number) => {
    setChallengeIndex(index);
  }, []);

  const handleChallengeSuccess = useCallback(() => {
    if (challengeIndex === null) return;
    const entry = VAULT_ENTRIES[challengeIndex];
    if (entry) unlockNext(entry.id);
    // Also unlock the current entry if not already
    // (first entry is always unlocked, but for subsequent ones this is needed)
    setTimeout(() => setChallengeIndex(null), 800);
  }, [challengeIndex, unlockNext]);

  const progressPercent = Math.round((totalUnlocked / totalEntries) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader
        streak={0}
        showStreak={false}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => navigate('/')}
      />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="text-5xl mb-3">🔐</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            The <span className="text-destructive">Vault</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Humanity's greatest classified secrets — unlock them level by level.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-md mx-auto mb-8 space-y-2"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">
              {totalUnlocked}/{totalEntries} DECLASSIFIED
            </span>
            <span className="font-bold text-destructive font-mono">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2.5 bg-muted/50" />
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-muted-foreground/60">
              {vaultQuestions.length} challenge questions
            </p>
            {totalUnlocked > 1 && (
              <button
                onClick={resetProgress}
                className="flex items-center gap-1 text-[10px] text-muted-foreground/50 hover:text-destructive transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </motion.div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VAULT_ENTRIES.map((entry, i) => {
            const unlocked = isUnlocked(entry.id);
            // Can challenge: either unlocked (already done) or the next one to unlock
            const canChallenge = !unlocked && (i === 0 || isUnlocked(VAULT_ENTRIES[i - 1]?.id ?? ''));

            return (
              <VaultCard
                key={entry.id}
                entry={entry}
                index={i}
                isUnlocked={unlocked}
                onChallenge={() => canChallenge ? handleChallenge(i) : undefined}
              />
            );
          })}
        </div>

        <div className="pb-8" />
      </main>

      {/* Challenge Modal */}
      <AnimatePresence>
        {challengeIndex !== null && VAULT_ENTRIES[challengeIndex] && (
          <ChallengeModal
            entryIndex={challengeIndex}
            entry={VAULT_ENTRIES[challengeIndex]}
            onSuccess={handleChallengeSuccess}
            onClose={() => setChallengeIndex(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
