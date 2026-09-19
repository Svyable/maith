import { GlossaryScreen } from '@/components/glossary/GlossaryScreen';
import { SiteShell } from '@/components/layout/SiteShell';

export default function Glossary() {
  return (
    <SiteShell>
      <main className="relative flex-1 py-6 w-full mx-auto">
        <GlossaryScreen />
      </main>
    </SiteShell>
  );
}
