import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { allConcepts, chapter } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { useTabs } from "@/hooks/useTabs";
import { Sparkles, RotateCcw, StickyNote, X } from "lucide-react";

const TrailPage = () => {
  const { visited, reset } = useProgress();
  const { tabs, remove } = useTabs();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  const tabbedConcepts = tabs
    .slice()
    .sort((a, b) => b.tabbedAt - a.tabbedAt)
    .map((t) => ({ tab: t, concept: allConcepts.find((c) => c.id === t.id) }))
    .filter((x) => !!x.concept);

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader eyebrow="Your tabs" title="Tabbed pages" />

      <section className="px-5 pt-6">
        <div className="rounded-3xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <StickyNote className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">YOUR TABS</span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-5xl text-ink">{tabs.length}</span>
            <span className="font-display text-base text-ink-muted">pages tabbed</span>
          </div>
          <p className="mt-2 text-[12px] text-ink-soft">
            Like sticky notes on a real book — quick markers to return to the ideas you want to keep close.
          </p>
        </div>
      </section>

      <section className="px-5 pt-6">
        <h2 className="font-display text-xl text-ink mb-3">Your tabbed pages</h2>
        {tabbedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
            <StickyNote className="mx-auto h-6 w-6 text-ink-muted" />
            <p className="mt-2 font-display text-base text-ink">No tabs yet</p>
            <p className="mt-1 text-[12px] text-ink-soft">
              Open any concept and tap the sticky tab on the page to mark it.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {tabbedConcepts.map(({ tab, concept }) => (
              <li key={tab.id}>
                <div className="relative rounded-2xl border border-border bg-surface p-3 pl-5">
                  <span
                    aria-hidden
                    className="absolute left-[-4px] top-3 h-9 w-3 rounded-sm rotate-[-6deg] shadow-[1px_1px_0_rgba(0,0,0,0.25)]"
                    style={{ background: `hsl(${concept!.hue} 90% 65%)` }}
                  />
                  <Link to={`/c/${concept!.id}`} className="block pr-8">
                    <div className="font-mono text-[10px] tracking-widest text-ink-muted">
                      {concept!.number}
                    </div>
                    <div className="mt-0.5 font-display text-[15px] text-ink line-clamp-2">
                      {concept!.title}
                    </div>
                    {tab.note && (
                      <div className="mt-1.5 line-clamp-2 text-[12px] italic text-ink-soft">
                        “{tab.note}”
                      </div>
                    )}
                  </Link>
                  <button
                    onClick={() => remove(tab.id)}
                    aria-label="Remove tab"
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-ink-muted hover:text-ink"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="px-5 pt-8 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-xl text-ink">Your trail</h2>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted">
            {visited.size} / {allConcepts.length}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full bg-accent transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
        {visited.size > 0 && (
          <button
            onClick={reset}
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-ink-muted hover:text-ink"
          >
            <RotateCcw className="h-3 w-3" /> Reset trail
          </button>
        )}
      </section>

      <BottomNav />
    </div>
  );
};

export default TrailPage;
