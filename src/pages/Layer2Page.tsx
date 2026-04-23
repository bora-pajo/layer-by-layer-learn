import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LayerHeader } from "@/components/LayerHeader";
import { JumpDrawer } from "@/components/JumpDrawer";
import { getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";

/**
 * Layer 2 — "A little more". Just title + brief, with two CTAs:
 * Go deeper → example, Next concept → next layer 1.
 */
const Layer2Page = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const [showJump, setShowJump] = useState(false);
  const { markLayer } = useProgress();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (concept) markLayer(concept.id, "brief");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "Escape") navigate(`/c/${id}`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [id, navigate]);

  if (!concept) return null;

  const { next } = getAdjacent(concept.id);

  return (
    <div className="phone-shell relative animate-fade-in" style={{ minHeight: "100dvh" }}>
      <LayerHeader
        conceptId={concept.id}
        hue={concept.hue}
        variant="paper"
        showTab
      />

      <section className="px-6 pt-6 pb-44">
        <h1 className="font-display text-[32px] leading-[1.08] text-ink text-balance">
          {concept.title}.
        </h1>

        <p className="mt-5 font-display text-[18px] leading-[1.55] text-ink-soft text-pretty">
          {concept.brief}
        </p>
      </section>

      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-3 glass border-t border-border"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
      >
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(concept.example ? `/c/${concept.id}/example` : `/c/${concept.id}/read`)}
            className="flex h-12 flex-1 max-w-[200px] items-center justify-center gap-2 rounded-full bg-ink px-6 text-background shadow-lift active:scale-[0.98] transition-transform"
          >
            <span className="font-display text-[15px] font-medium">Go deeper</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => (next ? navigate(`/c/${next.id}`) : navigate("/"))}
            disabled={!next}
            className="flex h-12 flex-1 max-w-[200px] items-center justify-center gap-2 rounded-full bg-surface px-6 text-ink shadow-soft active:scale-[0.98] transition-transform disabled:opacity-40"
          >
            <span className="font-display text-[15px]">Next concept</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <JumpDrawer open={showJump} onClose={() => setShowJump(false)} currentId={concept.id} />
    </div>
  );
};

export default Layer2Page;
