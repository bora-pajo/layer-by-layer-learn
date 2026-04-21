import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConceptVisual } from "@/components/ConceptVisual";
import { LayerHeader } from "@/components/LayerHeader";
import { LayerFooter } from "@/components/LayerFooter";
import { JumpDrawer } from "@/components/JumpDrawer";
import { chapter, getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";

/**
 * Layer 1 — Visual poster. Tinted full-bleed background, white visual card,
 * large serif title, "TAP FOR MORE" pill that goes to Layer 2.
 */
const Layer1Page = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { markVisited } = useProgress();
  const [showJump, setShowJump] = useState(false);

  useEffect(() => {
    if (concept) markVisited(concept.id);
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
          <Link to="/" className="mt-6 inline-block text-accent underline">Back to atlas</Link>
        </div>
      </div>
    );
  }

  const { prev, next, index, total } = getAdjacent(concept.id);
  const group = chapter.groups.find((g) => g.id === concept.groupId)!;

  // Soft tinted background using the concept hue
  const tint = `hsl(${concept.hue} 75% 92%)`;

  return (
    <div
      className="phone-shell relative animate-fade-in"
      style={{ background: tint, minHeight: "100dvh" }}
    >
      <LayerHeader
        conceptId={concept.id}
        eyebrow={`${group.number} · ${group.title}`}
        index={index}
        total={total}
        hue={concept.hue}
        variant="tinted"
        showTab
      />

      {/* Centerpiece — visual + title + tap-for-more */}
      <section className="flex flex-col items-center justify-center px-6 pt-6 pb-32 min-h-[calc(100dvh-200px)]">
        <button
          onClick={() => navigate(`/c/${concept.id}/more`)}
          className="block w-full max-w-[300px] active:scale-[0.99] transition-transform"
          aria-label="Tap for more"
        >
          <ConceptVisual kind={concept.visual} hue={concept.hue} large />
        </button>

        <h1 className="mt-8 text-center font-display text-[40px] leading-[1.05] text-ink text-balance max-w-[320px]">
          {concept.title}.
        </h1>

        <button
          onClick={() => navigate(`/c/${concept.id}/more`)}
          className="mt-6 rounded-full bg-surface px-5 py-2 font-mono text-[10px] tracking-[0.22em] text-ink-soft shadow-soft active:scale-95 transition-transform"
        >
          TAP FOR MORE
        </button>
      </section>

      <LayerFooter
        prevId={prev?.id}
        nextId={next?.id}
        centerLabel="Learn more"
        centerIcon="plus"
        onCenter={() => navigate(`/c/${concept.id}/more`)}
        onMenu={() => setShowJump(true)}
      />

      <JumpDrawer open={showJump} onClose={() => setShowJump(false)} currentId={concept.id} />
    </div>
  );
};

export default Layer1Page;
