import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { LayerHeader } from "@/components/LayerHeader";
import { JumpDrawer } from "@/components/JumpDrawer";
import { getAdjacent, getConcept, getGroup } from "@/content/chapter1";
import { useTheme } from "@/hooks/useTheme";

/**
 * Layer 2.5 — "Example of how this applies".
 * Shows a concrete, real-world scenario for the concept.
 */
const ExamplePage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const [showJump, setShowJump] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "Escape") navigate(`/c/${id}/more`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [id, navigate]);

  if (!concept) return null;

  const { next } = getAdjacent(concept.id);
  const group = getGroup(concept.groupId)!;

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? `hsl(${concept.hue} 75% 75%)` : `hsl(${concept.hue} 60% 50%)`;
  const cardBg = isDark ? `hsl(${concept.hue} 30% 14%)` : `hsl(${concept.hue} 75% 96%)`;
  const cardBorder = isDark ? `hsl(${concept.hue} 35% 28%)` : `hsl(${concept.hue} 55% 85%)`;

  const example = concept.example;

  return (
    <div className="phone-shell relative animate-fade-in" style={{ minHeight: "100dvh" }}>
      <LayerHeader
        conceptId={concept.id}
        eyebrow={`${group.number} · ${group.title}`}
        hue={concept.hue}
        variant="paper"
        showTab
      />

      <section className="px-6 pt-6 pb-44">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
          />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
            Layer 02½ · In practice
          </span>
        </div>

        <h1 className="mt-4 font-display text-[28px] leading-[1.1] text-ink text-balance">
          {concept.title}.
        </h1>
        <p className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">
          Example of how this applies
        </p>

        {example ? (
          <div
            className="mt-6 rounded-2xl border p-5"
            style={{ background: cardBg, borderColor: cardBorder }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" style={{ color: accent }} />
              <span
                className="font-mono text-[10px] tracking-[0.22em] uppercase"
                style={{ color: accent }}
              >
                Scenario
              </span>
            </div>
            <h2 className="mt-2 font-display text-[22px] leading-[1.15] text-ink text-balance">
              {example.title}
            </h2>
            <div className="mt-4 space-y-4">
              {example.body.map((p, i) => (
                <p
                  key={i}
                  className="font-display text-[16px] leading-[1.6] text-ink-soft text-pretty"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-6 font-display text-[15px] text-ink-muted">
            An applied example for this concept is coming soon.
          </p>
        )}

        <Link
          to={`/c/${concept.id}/more`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to brief
        </Link>
      </section>

      {/* Bottom action bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-3 glass border-t border-border"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
      >
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(`/c/${concept.id}/read`)}
            className="flex h-12 flex-1 max-w-[220px] items-center justify-center gap-2 rounded-full bg-ink px-6 text-background shadow-lift active:scale-[0.98] transition-transform"
          >
            <span className="font-display text-[15px] font-medium">Read full text</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => (next ? navigate(`/c/${next.id}`) : navigate("/"))}
            className="flex h-12 items-center gap-2 rounded-full bg-surface px-5 text-ink shadow-soft active:scale-[0.98] transition-transform"
          >
            <span className="font-display text-[15px]">Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <JumpDrawer open={showJump} onClose={() => setShowJump(false)} currentId={concept.id} />
    </div>
  );
};

export default ExamplePage;
