import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
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
import { t } from '@/i18n';

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
      {isStillClassified ? t('vault.stillClassified') : t('vault.statusDeclassified')}
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
            {t('vault.challengeHeader', { level: entryIndex + 1 })}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-foreground mb-1">
          {t('vault.challengeUnlock', { name: entry.name })}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{t('vault.challengePrompt')}</p>

        {/* Question */}
        <div className="bg-background/60 rounded-xl border border-border/40 p-4 mb-4">
          <LatexRenderer text={question.question} className="text-sm font-medium text-foreground leading-relaxed" />
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
              <span>{t('vault.challengeSuccess')}</span>
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
                <span>{t('vault.challengeFail')}</span>
              </div>
              <button
                onClick={() => { setSelected(null); setResult('pending'); }}
                className="w-full py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('vault.tryAgain')}
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
  isSealed,
  onChallenge,
}: {
  entry: VaultEntry;
  index: number;
  isUnlocked: boolean;
  /** Entry is challengeable but not yet solved */
  isSealed: boolean;
  onChallenge: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (isUnlocked) setExpanded(!expanded);
    else if (!expanded) setExpanded(!expanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.35) }}
      className="group relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm border-border/60 hover:border-destructive/30 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      {/* Top-secret corner stripe */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className={`absolute top-3 -right-6 rotate-45 text-[8px] font-bold px-6 py-0.5 tracking-widest ${
          isUnlocked
            ? 'bg-success/80 text-success-foreground'
            : isSealed
              ? 'bg-destructive/80 text-destructive-foreground'
              : 'bg-muted-foreground/60 text-muted'
        }`}>
          {isUnlocked ? t('vault.statusDeclassified') : isSealed ? t('vault.statusSealed') : t('vault.statusLocked')}
        </div>
      </div>

      {/* Level number */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        <span className="text-xs font-bold font-mono text-muted-foreground/60">
          {t('vault.levelLabel', { level: index + 1 })}
        </span>
        {isUnlocked ? (
          <Unlock className="w-3 h-3 text-success" />
        ) : (
          <Lock className="w-3 h-3 text-muted-foreground/50" />
        )}
      </div>

      <div className="relative p-5 pt-8">
        {/* Header — always visible */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">{entry.domainEmoji}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-foreground text-base leading-tight">
              {entry.name}
            </h3>
            {entry.codename && (
              <p className="text-[10px] font-mono text-accent mt-0.5">
                {t('vault.codename', { name: entry.codename })}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">
              {entry.agency} · {entry.field}
            </p>
          </div>
        </div>

        {/* Classification status */}
        <div className="mb-3">
          <ClassificationBadge entry={entry} />
        </div>

        {/* Timeline bar */}
        <div className="rounded-xl bg-background/60 border border-border/40 p-3 mb-3">
          <div className="flex items-center justify-between text-xs">
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{t('vault.classified')}</p>
              <p className="font-bold font-mono text-destructive">{entry.classifiedYear}</p>
            </div>
            <div className="flex-1 mx-3 h-px bg-gradient-to-r from-destructive/60 via-muted-foreground/30 to-success/60" />
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{t('vault.declassified')}</p>
              <p className="font-bold font-mono text-success">{entry.declassifiedYear}</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-foreground/85 leading-relaxed mb-3">{entry.summary}</p>

        {/* Meters */}
        <div className="space-y-1.5 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">{t('vault.secrecy')}</span>
            <SecrecyMeter level={entry.secrecyLevel} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">{t('vault.impact')}</span>
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

        {/* Expanded section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isUnlocked ? (
                <div className="mt-4 pt-4 border-t border-border/40 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-destructive/80 uppercase tracking-wide mb-1">{t('vault.fullStory')}</p>
                    <p className="text-foreground/90 leading-relaxed">{entry.fullStory}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('vault.keyFigures')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.keyFigures.map((f) => (
                        <Badge key={f} variant="secondary" className="text-[10px]">{f}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('vault.significance')}</p>
                    <p className="text-foreground/80 leading-relaxed">{entry.significance}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('vault.legacy')}</p>
                    <p className="text-foreground/80 leading-relaxed">{entry.legacy}</p>
                  </div>
                </div>
              ) : (
                <div className="mt-4 pt-4 border-t border-border/40 text-center space-y-3 py-4">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-destructive/60" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t('vault.lockedMessage')} <span className="text-destructive font-bold">{t('vault.lockedLabel')}</span>
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); onChallenge(); }}
                    className="px-4 py-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 border border-destructive/30 text-destructive text-xs font-bold transition-colors"
                  >
                    {t('vault.unlockButton')}
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded ? t('vault.collapse') : (isUnlocked ? t('vault.tapToRead') : t('vault.tapToPreview'))}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────

export default function Vault() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isUnlocked, unlockEntry, resetProgress, totalUnlocked, totalEntries } = useVaultProgress();
  const [challengeIndex, setChallengeIndex] = useState<number | null>(null);

  const GUEST_LEVEL_CAP = 2; // guests can only unlock up to level 2

  const handleChallenge = useCallback((index: number) => {
    // If guest and trying to go past the cap, redirect to auth
    if (!user && index >= GUEST_LEVEL_CAP) {
      navigate('/auth');
      return;
    }
    setChallengeIndex(index);
  }, [user, navigate]);

  const handleChallengeSuccess = useCallback(() => {
    if (challengeIndex === null) return;
    const entry = VAULT_ENTRIES[challengeIndex];
    if (entry) unlockEntry(entry.id);
    setTimeout(() => setChallengeIndex(null), 800);
  }, [challengeIndex, unlockEntry]);

  const progressPercent = Math.round((totalUnlocked / totalEntries) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader streak={0} showStreak={false} />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <div className="text-5xl mb-3">🔐</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t('vault.title').split('Vault')[0]}<span className="text-destructive">Vault</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">{t('vault.subtitle')}</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="max-w-md mx-auto mb-8 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">
              {t('vault.declassifiedProgress', { count: totalUnlocked, total: totalEntries })}
            </span>
            <span className="font-bold text-destructive font-mono">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2.5 bg-muted/50" />
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-muted-foreground/60">
              {t('vault.challengeQuestions', { count: vaultQuestions.length })}
            </p>
            {totalUnlocked > 1 && (
              <button
                onClick={resetProgress}
                className="flex items-center gap-1 text-[10px] text-muted-foreground/50 hover:text-destructive transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                {t('vault.reset')}
              </button>
            )}
          </div>
        </motion.div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VAULT_ENTRIES.map((entry, i) => {
            const unlocked = isUnlocked(entry.id);
            // Sealed = not unlocked but previous entry IS unlocked (or it's the first entry)
            const prevUnlocked = i === 0 || isUnlocked(VAULT_ENTRIES[i - 1]?.id ?? '');
            const sealed = !unlocked && prevUnlocked;
            return (
              <VaultCard
                key={entry.id}
                entry={entry}
                index={i}
                isUnlocked={unlocked}
                isSealed={sealed}
                onChallenge={() => handleChallenge(i)}
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
