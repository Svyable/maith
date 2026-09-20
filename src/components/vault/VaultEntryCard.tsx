import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { VaultEntry } from '@/config/vault';
import type { VaultEntryAccess } from '@/domain/vault/access';
import { t } from '@/i18n';
import { tVault } from '@/i18n/tVault';

function SecrecyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={
            `w-2 h-3 rounded-sm transition-colors ${
              index < level
                ? level >= 9
                  ? 'bg-destructive'
                  : level >= 7
                    ? 'bg-accent'
                    : 'bg-primary'
                : 'bg-muted-foreground/15'
            }`
          }
        />
      ))}
      <span className="text-[10px] font-mono text-muted-foreground ml-1">
        {level}/10
      </span>
    </div>
  );
}

function ClassificationBadge({ entry }: { entry: VaultEntry }) {
  const isStillClassified =
    entry.declassifiedYear.toLowerCase().includes('still');

  return (
    <div
      className={
        `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${
          isStillClassified
            ? 'bg-destructive/15 text-destructive border-destructive/40'
            : 'bg-success/15 text-success border-success/40'
        }`
      }
    >
      <span
        className={
          `w-1.5 h-1.5 rounded-full ${
            isStillClassified
              ? 'bg-destructive animate-pulse'
              : 'bg-success'
          }`
        }
      />
      {isStillClassified
        ? t('vault.stillClassified')
        : t('vault.statusDeclassified')}
    </div>
  );
}

export function VaultEntryCard({
  entry,
  index,
  access,
  onChallenge,
}: {
  entry: VaultEntry;
  index: number;
  access: VaultEntryAccess;
  onChallenge: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isUnlocked = access === 'unlocked';
  const isSealed = access === 'sealed';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.35) }}
      className="group relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm border-border/60 hover:border-destructive/30 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded((value) => !value)}
    >
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div
          className={
            `absolute top-3 -right-6 rotate-45 text-[8px] font-bold px-6 py-0.5 tracking-widest ${
              isUnlocked
                ? 'bg-success/80 text-success-foreground'
                : isSealed
                  ? 'bg-destructive/80 text-destructive-foreground'
                  : 'bg-muted-foreground/60 text-muted'
            }`
          }
        >
          {isUnlocked
            ? t('vault.statusDeclassified')
            : isSealed
              ? t('vault.statusSealed')
              : t('vault.statusLocked')}
        </div>
      </div>

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
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">
            {entry.domainEmoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-foreground text-base leading-tight">
              {tVault(entry.id, 'name', entry.name)}
            </h3>
            {entry.codename && (
              <p className="text-[10px] font-mono text-accent mt-0.5">
                {t('vault.codename', {
                  name: tVault(
                    entry.id,
                    'codename',
                    entry.codename,
                  ),
                })}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">
              {entry.agency} · {entry.field}
            </p>
          </div>
        </div>

        <div className="mb-3">
          <ClassificationBadge entry={entry} />
        </div>

        <div className="rounded-xl bg-background/60 border border-border/40 p-3 mb-3">
          <div className="flex items-center justify-between text-xs">
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                {t('vault.classified')}
              </p>
              <p className="font-bold font-mono text-destructive">
                {entry.classifiedYear}
              </p>
            </div>
            <div className="flex-1 mx-3 h-px bg-gradient-to-r from-destructive/60 via-muted-foreground/30 to-success/60" />
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                {t('vault.declassified')}
              </p>
              <p className="font-bold font-mono text-success">
                {entry.declassifiedYear}
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-foreground/85 leading-relaxed mb-3">
          {tVault(entry.id, 'summary', entry.summary)}
        </p>

        <div className="space-y-1.5 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">
              {t('vault.secrecy')}
            </span>
            <SecrecyMeter level={entry.secrecyLevel} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">
              {t('vault.impact')}
            </span>
            <SecrecyMeter level={entry.impact} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0.5 border-destructive/30 text-destructive"
          >
            {entry.agency}
          </Badge>
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0.5 border-border"
          >
            {entry.domain}
          </Badge>
        </div>

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
                    <p className="text-xs font-bold text-destructive/80 uppercase tracking-wide mb-1">
                      {t('vault.fullStory')}
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      {tVault(
                        entry.id,
                        'fullStory',
                        entry.fullStory,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      {t('vault.keyFigures')}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.keyFigures.map((figure) => (
                        <Badge
                          key={figure}
                          variant="secondary"
                          className="text-[10px]"
                        >
                          {figure}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      {t('vault.significance')}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {tVault(
                        entry.id,
                        'significance',
                        entry.significance,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      {t('vault.legacy')}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {tVault(entry.id, 'legacy', entry.legacy)}
                    </p>
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
                    {t('vault.lockedMessage')}{' '}
                    <span className="text-destructive font-bold">
                      {t('vault.lockedLabel')}
                    </span>
                  </p>
                  {isSealed && (
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        onChallenge();
                      }}
                      className="px-4 py-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 border border-destructive/30 text-destructive text-xs font-bold transition-colors"
                    >
                      {t('vault.unlockButton')}
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded
              ? t('vault.collapse')
              : isUnlocked
                ? t('vault.tapToRead')
                : t('vault.tapToPreview')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
