import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptCard } from "@/components/ConceptCard";
import { chapter, allConcepts } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const { visited } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);
  const firstUnseen = allConcepts.find((c) => !visited.has(c.id)) ?? allConcepts[0];

  return (
    <div className="phone-shell pb-safe canvas-glow">
      <MobileHeader
        eyebrow={`Chapter ${chapter.number} · ${allConcepts.length} concepts`}
      />

      {/* Hero */}
      <section className="px-5 pt-6 pb-2 animate-fade-up">
        <div className="chip">
          <Sparkles className="h-3 w-3 text-accent" />
          A new way to read
        </div>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink text-balance">
          {chapter.title}.
        </h1>

        <Link
          to={`/c/${firstUnseen.id}`}
          className="group mt-6 flex items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground active:scale-[0.99] transition-transform"
        >
          <div className="text-left">
            <div className="font-mono text-[10px] tracking-widest opacity-70">
              {visited.size === 0 ? "START" : "CONTINUE"}
            </div>
            <div className="font-display text-base font-medium">{firstUnseen.title}</div>
          </div>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Progress */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full bg-accent transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted">
            {visited.size}/{allConcepts.length}
          </span>
        </div>
      </section>

      {/* How it works — compact pills */}
      <section className="px-5 pt-6 pb-2">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["1", "Glance"],
            ["2", "Brief"],
            ["3", "Full"],
          ].map(([n, t]) => (
            <div
              key={n}
              className="rounded-2xl border border-border bg-surface px-3 py-3 text-center"
            >
              <div className="font-display text-xl text-accent leading-none">{n}</div>
              <div className="mt-1 font-mono text-[9px] tracking-widest uppercase text-ink-muted">
                {t}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="pt-6">
        <div className="flex items-end justify-between px-5 pb-3">
          <h2 className="font-display text-2xl text-ink">The map</h2>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted">
            {chapter.groups.length} regions
          </span>
        </div>

        <div className="space-y-10 pb-10">
          {chapter.groups.map((group) => (
            <article key={group.id} id={group.id} className="scroll-mt-20">
              <header className="flex items-baseline justify-between px-5 pb-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: `hsl(${group.hue} 90% 65%)` }}
                    />
                    <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                      {group.number}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg text-ink text-balance">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] italic text-ink-muted text-pretty line-clamp-1">
                    {group.tagline}
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-ink-muted shrink-0 ml-3">
                  {group.concepts.length}
                </span>
              </header>

              {group.concepts.length > 1 ? (
                <div className="scroll-x flex gap-3 overflow-x-auto px-5 pb-1">
                  {group.concepts.map((c) => (
                    <ConceptCard
                      key={c.id}
                      concept={c}
                      hue={group.hue}
                      visited={visited.has(c.id)}
                      variant="snap"
                    />
                  ))}
                </div>
              ) : (
                <div className="px-5">
                  <ConceptCard
                    concept={group.concepts[0]}
                    hue={group.hue}
                    visited={visited.has(group.concepts[0].id)}
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mx-5 mb-6 rounded-2xl border border-dashed border-border p-5 text-center">
          <div className="font-display text-base text-ink">End of Chapter 01</div>
          <div className="mt-1 text-xs text-ink-muted">
            More chapters coming. Same atlas, new regions.
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
