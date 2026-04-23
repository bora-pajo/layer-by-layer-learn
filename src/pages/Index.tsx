import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, BookOpen, Play } from "lucide-react";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptCard } from "@/components/ConceptCard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { chapters, allConcepts } from "@/content/chapter1";
import { useProgress, LAYERS, type Layer } from "@/hooks/useProgress";

const LAYER_PATH: Record<Layer, string> = {
  glance: "",
  brief: "/more",
  example: "/example",
  full: "/read",
};
const LAYER_LABEL: Record<Layer, string> = {
  glance: "Glance",
  brief: "More",
  example: "Example",
  full: "Full text",
};

const Index = () => {
  const { visited, store, lastVisitedConcept } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);
  const [activeChapter, setActiveChapter] = useState(chapters[0]?.number);

  const resume = lastVisitedConcept();
  const resumeConcept = resume ? allConcepts.find((c) => c.id === resume.id) : null;

  const handleSelectChapter = (chapterNumber: string | number) => {
    setActiveChapter(chapterNumber as typeof activeChapter);
    // Scroll back up to the chapter heading so the new material is in view
    requestAnimationFrame(() => {
      const el = document.getElementById(`chapter-${chapterNumber}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const activeChapterData = chapters.find((c) => c.number === activeChapter) ?? chapters[0];

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader
        eyebrow={`${chapters.length} CHAPTERS · ${String(allConcepts.length).padStart(2, "0")} CONCEPTS`}
      />

      {/* Hero — clean, generous */}
      <section className="px-6 pt-4 pb-2 animate-fade-up">
        <h1 className="font-display text-[44px] leading-[1.02] text-ink text-balance">
          Research <em className="italic font-display">Methods.</em>
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
        </div>

        {/* Resume card — appears when a trail exists */}
        {resume && resumeConcept && (
          <Link
            to={`/c/${resumeConcept.id}${LAYER_PATH[resume.layer]}`}
            className="mt-5 group flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft active:scale-[0.99] transition-transform hover:bg-surface-2"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ background: `hsl(${resumeConcept.hue} 60% 50%)` }}
            >
              <Play className="h-3.5 w-3.5 text-background fill-background" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                Resume · {LAYER_LABEL[resume.layer]}
              </div>
              <div className="mt-0.5 font-display text-[15px] text-ink truncate">
                {resumeConcept.title}
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0" aria-hidden>
              {LAYERS.map((l) => {
                const done = !!store[resumeConcept.id]?.layers[l];
                return (
                  <span
                    key={l}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: done
                        ? `hsl(${resumeConcept.hue} 60% 50%)`
                        : "hsl(var(--surface-2))",
                      boxShadow: done ? "none" : "inset 0 0 0 1px hsl(var(--border))",
                    }}
                  />
                );
              })}
            </div>
          </Link>
        )}
      </section>

      {/* Chapter selector — sticky dropdown that scales to many chapters */}
      <div className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="px-6 py-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="group flex w-full items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <BookOpen className="h-4 w-4 shrink-0 text-ink-muted" />
              <span className="font-mono text-[10px] text-ink-muted shrink-0">
                Ch. {String(activeChapterData.number).padStart(2, "0")}
              </span>
              <span className="font-display text-[14px] text-ink truncate flex-1 text-left">
                {activeChapterData.title}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[280px] max-h-[70vh] overflow-y-auto bg-surface border-border"
            >
              <div className="px-3 pt-2 pb-1 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                {chapters.length} chapters
              </div>
              {chapters.map((ch) => {
                const isActive = ch.number === activeChapter;
                return (
                  <DropdownMenuItem
                    key={ch.number}
                    onSelect={() => handleSelectChapter(ch.number)}
                    className={`flex items-start gap-3 px-3 py-2.5 cursor-pointer ${
                      isActive ? "bg-accent-soft" : ""
                    }`}
                  >
                    <span className="font-mono text-[11px] text-ink-muted w-7 pt-0.5 shrink-0">
                      {String(ch.number).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-[14px] leading-tight text-ink text-balance">
                        {ch.title}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] text-ink-muted">
                        {ch.groups.reduce((n, g) => n + g.concepts.length, 0)} concepts
                      </div>
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Chapters — only the selected chapter is shown */}
      <section className="pt-6">
        <div key={activeChapterData.number} className="space-y-12 pb-10 animate-fade-up">
          {[activeChapterData].map((chapter) => (
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
                          layerProgress={store[c.id]?.layers}
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
