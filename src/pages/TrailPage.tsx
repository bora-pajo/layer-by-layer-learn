import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { allConcepts, chapter } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { Sparkles, RotateCcw } from "lucide-react";

const TrailPage = () => {
  const { visited, reset } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader eyebrow="Your trail" title="Progress" />

      <section className="px-5 pt-6">
        <div className="rounded-3xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">CHAPTER {chapter.number}</span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-5xl text-ink">{visited.size}</span>
            <span className="font-display text-base text-ink-muted">/ {allConcepts.length} seen</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full bg-accent transition-all duration-700" style={{ width: `${pct}%` }} />
          </div>
          {visited.size > 0 && (
            <button
              onClick={reset}
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-ink-muted hover:text-ink"
            >
              <RotateCcw className="h-3 w-3" /> Reset trail
            </button>
          )}
        </div>
      </section>

      <section className="px-5 pt-6 pb-4">
        <h2 className="font-display text-xl text-ink mb-3">All concepts</h2>
        <ul className="space-y-1.5">
          {allConcepts.map((c) => {
            const seen = visited.has(c.id);
            return (
              <li key={c.id}>
                <Link
                  to={`/c/${c.id}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-3 py-3 active:scale-[0.99] transition-transform"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${seen ? "" : "opacity-30"}`}
                    style={{ background: `hsl(${c.hue} 90% 65%)` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm text-ink truncate">{c.title}</div>
                    <div className="text-[11px] text-ink-muted truncate">{c.glance}</div>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-ink-muted shrink-0">
                    {seen ? "SEEN" : c.number}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <BottomNav />
    </div>
  );
};

export default TrailPage;
