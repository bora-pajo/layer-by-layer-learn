import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LayerHeader } from "@/components/LayerHeader";
import { JumpDrawer } from "@/components/JumpDrawer";
import { allConcepts, chapter, getAdjacent, getConcept } from "@/content/chapter1";

/**
 * Layer 2 — "A little more" sheet. Cream paper, eyebrow, title, brief,
 * key term chips, related-concept card, bottom CTAs: Read full text + Skip.
 */
const Layer2Page = () => {
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
      if (e.key === "Escape") navigate(`/c/${id}`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [id, navigate]);

  if (!concept) return null;

  const { next } = getAdjacent(concept.id);
  const group = chapter.groups.find((g) => g.id === concept.groupId)!;

  // Pick a "if you like this, see…" — next concept in same group, or next overall
  const related =
    group.concepts.find((c) => c.id !== concept.id) ??
    allConcepts.find((c) => c.id !== concept.id);

  const accent = `hsl(${concept.hue} 60% 50%)`;

  return (
    <div className="phone-shell relative animate-fade-in" style={{ minHeight: "100dvh" }}>
      <LayerHeader
        conceptId={concept.id}
        eyebrow={`${group.number} · ${group.title}`}
        hue={concept.hue}
        variant="paper"
        showTab
      />

      <section className="px-6 pt-6 pb-40">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
          />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
            Layer 02 · A little more
          </span>
        </div>

        <h1 className="mt-4 font-display text-[32px] leading-[1.08] text-ink text-balance">
          {concept.title}.
        </h1>

        <p className="mt-5 font-display text-[18px] leading-[1.55] text-ink-soft text-pretty">
          {concept.brief}
        </p>

        {concept.keyTerms && concept.keyTerms.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {concept.keyTerms.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-[12px] font-display"
                style={{
                  background: `hsl(${concept.hue} 80% 94%)`,
                  color: accent,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {related && (
          <Link
            to={`/c/${related.id}`}
            className="mt-7 block rounded-2xl bg-surface-2 p-4 active:scale-[0.99] transition-transform"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                  If you like this, see
                </div>
                <div className="mt-1.5 font-display text-[18px] text-ink leading-tight">
                  {related.title}
                </div>
                <div className="text-[12px] text-ink-muted">{related.glance}</div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" />
            </div>
          </Link>
        )}
      </section>

      {/* Bottom action bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-3"
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
            <span className="font-display text-[15px]">Skip</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <JumpDrawer open={showJump} onClose={() => setShowJump(false)} currentId={concept.id} />
    </div>
  );
};

export default Layer2Page;
