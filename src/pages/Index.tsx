import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptCard } from "@/components/ConceptCard";
import { ExploreReadToggle } from "@/components/ExploreReadToggle";
import { chapters, allConcepts } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const { visited } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  const handleJump = (chapterNumber: number) => {
    const el = document.getElementById(`chapter-${chapterNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader
        eyebrow={`${chapters.length} CHAPTERS · ${String(allConcepts.length).padStart(2, "0")} CONCEPTS`}
      />

      {/* Hero — clean, generous */}
      <section className="px-6 pt-4 pb-2 animate-fade-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-ink-muted uppercase">
          An atlas of research
        </div>
        <h1 className="mt-3 font-display text-[44px] leading-[1.02] text-ink text-balance">
          How we come to <em className="italic font-display">know.</em>
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

      {/* Chapter tabs — sticky so users can jump between chapters */}
      <div className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted shrink-0 mr-1">
            Chapters
          </span>
          {chapters.map((ch) => (
            <button
              key={ch.number}
              onClick={() => handleJump(ch.number)}
              className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink hover:bg-surface-2 transition-colors"
            >
              <span className="text-ink-muted mr-1.5">0{ch.number}</span>
              {ch.title}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <section className="pt-6">
        <div className="space-y-12 pb-10">
          {chapters.map((chapter) => (
            <div key={chapter.number} id={`chapter-${chapter.number}`} className="scroll-mt-24">
              {/* Chapter heading */}
              <div className="px-6 pb-4">
                <div className="font-mono text-[11px] tracking-[0.22em] text-ink-muted uppercase">
                  Chapter {chapter.number}
                </div>
                <h2 className="mt-2 font-display text-[26px] leading-[1.1] text-ink text-balance">
                  {chapter.title}.
                </h2>
                <p className="mt-2 font-display text-[14px] italic text-ink-soft text-pretty">
                  {chapter.subtitle}
                </p>
              </div>

              <div className="space-y-8">
                {chapter.groups.map((group) => (
                  <article key={group.id} id={group.id} className="scroll-mt-20">
                    <header className="flex items-center gap-2 px-6 pb-3">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: `hsl(${group.hue} 70% 55%)` }}
                      />
                      <span className="font-mono text-[11px] font-semibold tracking-wide text-ink">
                        {chapter.number}.{group.number}
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
            </div>
          ))}
        </div>

        <div className="mx-6 mb-6 rounded-2xl border border-dashed border-border p-5 text-center">
          <div className="font-display text-base text-ink">End of available chapters</div>
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
