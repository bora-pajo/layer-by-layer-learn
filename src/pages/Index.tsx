import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
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

  const resume = lastVisitedConcept();
  const resumeConcept = resume ? allConcepts.find((c) => c.id === resume.id) : null;

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader logoClassName="h-10" />

      {/* Hero */}
      <section className="px-6 pt-6 pb-2 animate-fade-up">
        <h1 className="font-display text-[44px] leading-[1.02] text-ink text-balance">
          Research <em className="italic font-display">Methods</em>
        </h1>

        {/* Resume */}
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
          </Link>
        )}
      </section>

      {/* Chapter list — clean picker */}
      <section className="px-3 pt-8">
        <div className="px-3 pb-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
          Chapters
        </div>
        <ul className="space-y-2">
          {chapters.map((ch) => (
            <li key={ch.number}>
              <Link
                to={`/chapter/${ch.number}`}
                className="group lift block rounded-[24px] bg-surface px-4 py-4 shadow-soft hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[11px] font-semibold tracking-wide text-accent w-8 shrink-0">
                    {String(ch.number).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-[19px] leading-[1.15] text-ink text-balance line-clamp-2">
                      {ch.title}
                    </h2>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
