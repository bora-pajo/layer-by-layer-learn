import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptCard } from "@/components/ConceptCard";
import { ExploreReadToggle } from "@/components/ExploreReadToggle";
import { chapter, allConcepts } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const { visited } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader eyebrow={`CH · ${chapter.number} / ${String(allConcepts.length).padStart(2, "0")}`} />

      {/* Hero — clean, generous */}
      <section className="px-6 pt-4 pb-2 animate-fade-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-ink-muted uppercase">
          Chapter {chapter.number === "01" ? "One" : chapter.number}
        </div>
        <h1 className="mt-3 font-display text-[44px] leading-[1.02] text-ink text-balance">
          {chapter.title.split(" ").slice(0, -1).join(" ")}{" "}
          <em className="italic font-display">{chapter.title.split(" ").slice(-1)}.</em>
        </h1>

        {/* Progress + toggle row */}
        <div className="mt-7 flex items-center gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-1 h-1 overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full bg-ink transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-ink-muted shrink-0">{pct}%</span>
          </div>
          <ExploreReadToggle />
        </div>
      </section>

      {/* Regions */}
      <section className="pt-8">
        <div className="space-y-8 pb-10">
          {chapter.groups.map((group) => (
            <article key={group.id} id={group.id} className="scroll-mt-20">
              <header className="flex items-center gap-2 px-6 pb-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: `hsl(${group.hue} 70% 55%)` }}
                />
                <span className="font-mono text-[11px] font-semibold tracking-wide text-ink">
                  {group.number}
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-muted">
                  · {group.title}
                </span>
              </header>

              <div className="space-y-2 px-3">
                {group.concepts.map((c) => (
                  <ConceptCard
                    key={c.id}
                    concept={c}
                    hue={group.hue}
                    visited={visited.has(c.id)}
                    category={group.tagline.split(".")[0].split(",")[0].toLowerCase().slice(0, 16) || "epistemology"}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-6 mb-6 rounded-2xl border border-dashed border-border p-5 text-center">
          <div className="font-display text-base text-ink">End of Chapter 01</div>
          <div className="mt-1 text-xs text-ink-muted">
            More chapters coming soon.
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
