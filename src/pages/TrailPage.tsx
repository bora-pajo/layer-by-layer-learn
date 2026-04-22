import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { allConcepts } from "@/content/chapter1";
import { useProgress, LAYERS, type Layer } from "@/hooks/useProgress";
import { useTabs } from "@/hooks/useTabs";
import { RotateCcw, StickyNote, X, Play, Footprints } from "lucide-react";

const LAYER_PATH: Record<Layer, string> = {
  glance: "",
  brief: "/more",
  example: "/example",
  full: "/read",
};
const LAYER_LABEL: Record<Layer, string> = {
  glance: "Glance",
  brief: "Brief",
  example: "Example",
  full: "Full text",
};

const TrailPage = () => {
  const { visited, store, reset } = useProgress();
  const { tabs, remove } = useTabs();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  const tabbedConcepts = tabs
    .slice()
    .sort((a, b) => b.tabbedAt - a.tabbedAt)
    .map((t) => ({ tab: t, concept: allConcepts.find((c) => c.id === t.id) }))
    .filter((x) => !!x.concept);

  // Trail entries — concepts you've explored, ordered by most recent.
  const trail = Object.entries(store)
    .map(([id, p]) => ({ concept: allConcepts.find((c) => c.id === id), progress: p }))
    .filter((x) => !!x.concept)
    .sort((a, b) => b.progress.lastVisited - a.progress.lastVisited);

  const completedCount = trail.filter(
    (t) => LAYERS.every((l) => t.progress.layers[l]),
  ).length;

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader eyebrow="Your trail" title="Where you've been" />

      {/* Trail summary */}
      <section className="px-5 pt-6">
        <div className="rounded-3xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <Footprints className="h-4 w-4 text-accent" />
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">YOUR TRAIL</span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-5xl text-ink">{visited.size}</span>
            <span className="font-display text-base text-ink-muted">
              / {allConcepts.length} concepts opened
            </span>
          </div>
          <div className="mt-1 font-mono text-[11px] text-ink-muted">
            {completedCount} fully explored across all layers
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full bg-accent transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          {visited.size > 0 && (
            <button
              onClick={reset}
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-ink-muted hover:text-ink"
            >
              <RotateCcw className="h-3 w-3" /> Reset trail
            </button>
          )}
        </div>
      </section>

      {/* Trail list — concepts with per-layer dots and resume buttons */}
      <section className="px-5 pt-8">
        <h2 className="font-display text-xl text-ink mb-3">Recently explored</h2>
        {trail.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
            <Footprints className="mx-auto h-6 w-6 text-ink-muted" />
            <p className="mt-2 font-display text-base text-ink">No trail yet</p>
            <p className="mt-1 text-[12px] text-ink-soft">
              Open any concept and the layers you visit will show up here.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {trail.map(({ concept, progress }) => {
              const c = concept!;
              const accent = `hsl(${c.hue} 60% 50%)`;
              const completed = LAYERS.filter((l) => progress.layers[l]).length;
              const isComplete = completed === LAYERS.length;
              return (
                <li key={c.id}>
                  <div className="rounded-2xl border border-border bg-surface p-3">
                    <Link to={`/c/${c.id}`} className="block">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: accent }}
                        />
                        <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                          {c.number}
                        </span>
                        <span className="ml-auto font-mono text-[10px] text-ink-muted">
                          {isComplete ? "complete" : `${completed}/${LAYERS.length} layers`}
                        </span>
                      </div>
                      <div className="mt-1 font-display text-[16px] text-ink line-clamp-2">
                        {c.title}
                      </div>
                    </Link>

                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5" aria-hidden>
                        {LAYERS.map((l) => {
                          const done = !!progress.layers[l];
                          return (
                            <span
                              key={l}
                              title={`${LAYER_LABEL[l]}${done ? " · explored" : ""}`}
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                background: done ? accent : "hsl(var(--surface-2))",
                                boxShadow: done ? "none" : "inset 0 0 0 1px hsl(var(--border))",
                              }}
                            />
                          );
                        })}
                      </div>
                      <Link
                        to={`/c/${c.id}${LAYER_PATH[progress.lastLayer]}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-background active:scale-95 transition-transform"
                      >
                        <Play className="h-3 w-3 fill-background" />
                        <span className="font-mono text-[10px] tracking-widest uppercase">
                          Resume {LAYER_LABEL[progress.lastLayer]}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Tabs section */}
      <section className="px-5 pt-8 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <StickyNote className="h-4 w-4 text-accent" />
          <h2 className="font-display text-xl text-ink">Your tabs</h2>
          <span className="ml-auto font-mono text-[10px] tracking-widest text-ink-muted">
            {tabs.length}
          </span>
        </div>
        {tabbedConcepts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
            <p className="font-display text-base text-ink">No tabs yet</p>
            <p className="mt-1 text-[12px] text-ink-soft">
              Open any concept and tap the bookmark icon to mark it.
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

      <BottomNav />
    </div>
  );
};

export default TrailPage;
