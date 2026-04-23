import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LayerHeader } from "@/components/LayerHeader";
import { JumpDrawer } from "@/components/JumpDrawer";
import { ArrowRight } from "lucide-react";
import { getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { useTheme } from "@/hooks/useTheme";

/**
 * Layer 1 — Visual poster. Tinted full-bleed background, white visual card,
 * large serif title, "TAP FOR MORE" pill that goes to Layer 2.
 */
const Layer1Page = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { markLayer } = useProgress();
  const [showJump, setShowJump] = useState(false);

  useEffect(() => {
    if (concept) markLayer(concept.id, "glance");
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      const adj = concept ? getAdjacent(concept.id) : null;
      if (e.key === "ArrowRight" && adj?.next) navigate(`/c/${adj.next.id}`);
      if (e.key === "ArrowLeft" && adj?.prev) navigate(`/c/${adj.prev.id}`);
      if (e.key === "Enter" || e.key === " ") concept && navigate(`/c/${concept.id}/more`);
      if (e.key === "Escape") navigate("/");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [concept, navigate]);

  if (!concept) {
    return (
      <div className="phone-shell">
        <div className="px-6 py-20 text-center">
          <h1 className="font-display text-2xl text-ink">Concept not found.</h1>
          <Link to="/" className="mt-6 inline-block text-accent underline">Back to home</Link>
        </div>
      </div>
    );
  }

  const { next } = getAdjacent(concept.id);

  // Soft tinted background using the concept hue (theme-aware)
  const { theme } = useTheme();
  const tint = theme === "dark" ? `hsl(${concept.hue} 30% 12%)` : `hsl(${concept.hue} 75% 92%)`;

  return (
    <div
      className="phone-shell relative animate-fade-in"
      style={{ background: tint, minHeight: "100dvh" }}
    >
      <LayerHeader
        conceptId={concept.id}
        hue={concept.hue}
        variant="tinted"
        showTab
      />

      <section className="flex flex-col items-center justify-center px-6 pt-10 pb-40 min-h-[calc(100dvh-160px)]">
        <h1 className="text-center font-display text-[40px] leading-[1.05] text-ink text-balance max-w-[340px]">
          {concept.title}.
        </h1>

        <p className="mt-6 text-center font-serif text-[18px] leading-[1.5] text-ink text-balance max-w-[340px]">
          {concept.brief}
        </p>
      </section>

      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-3"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
      >
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(`/c/${concept.id}/more`)}
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

export default Layer1Page;
