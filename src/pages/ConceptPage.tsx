import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptVisual } from "@/components/ConceptVisual";
import { allConcepts, chapter, getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { ArrowRight, ChevronDown, BookOpen, List, X, Bookmark, BookmarkCheck, NotebookPen } from "lucide-react";

type Layer = 1 | 2 | 3;

const ConceptPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { markVisited } = useProgress();
  const [layer, setLayer] = useState<Layer>(1);
  const [showJump, setShowJump] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    setLayer(1);
    setShowJump(false);
    if (concept) markVisited(concept.id);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      const adj = concept ? getAdjacent(concept.id) : null;
      if (e.key === "ArrowRight" && adj?.next) navigate(`/c/${adj.next.id}`);
      if (e.key === "ArrowLeft" && adj?.prev) navigate(`/c/${adj.prev.id}`);
      if (e.key === "Escape") navigate("/");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [concept, navigate]);

  if (!concept) {
    return (
      <div className="phone-shell pb-safe">
        <MobileHeader back title="Not found" />
        <div className="px-6 py-20 text-center">
          <h1 className="font-display text-2xl text-ink">Concept not found.</h1>
          <Link to="/" className="mt-6 inline-block text-accent underline">Back to atlas</Link>
        </div>
        <BottomNav />
      </div>
    );
  }

  const { prev, next, index, total } = getAdjacent(concept.id);
  const group = chapter.groups.find((g) => g.id === concept.groupId)!;

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader
        back
        eyebrow={`${group.title} · ${concept.number}`}
        right={
          <button
            onClick={() => setShowJump(true)}
            aria-label="Jump to concept"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink active:scale-95 transition-transform"
          >
            <List className="h-4 w-4" />
          </button>
        }
      />

      {/* Position pill */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink-muted">
          <span style={{ color: `hsl(${concept.hue} 90% 65%)` }}>●</span>
          <span>LAYER {layer} OF 3</span>
          <span className="ml-auto">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* LAYER 1 — GLANCE */}
      <section className="px-5 pt-4 animate-fade-up">
        <h1 className="font-display text-3xl leading-[1.1] text-ink text-balance">
          {concept.title}
        </h1>
        <p className="mt-3 font-display text-lg italic text-ink-soft text-pretty">
          {concept.glance}
        </p>
        <div className="mt-5">
          <ConceptVisual kind={concept.visual} hue={concept.hue} large />
        </div>
      </section>

      {/* Action stack */}
      <section className="px-5 pt-5 space-y-2">
        {layer === 1 && (
          <button
            onClick={() => setLayer(2)}
            className="group flex w-full items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground active:scale-[0.99] transition-transform"
          >
            <span className="font-display text-base font-medium">Learn a little more</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        )}
        {layer === 2 && (
          <button
            onClick={() => setLayer(3)}
            className="group flex w-full items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground active:scale-[0.99] transition-transform"
          >
            <span className="font-display text-base font-medium">Go deeper · read full text</span>
            <BookOpen className="h-5 w-5" />
          </button>
        )}
        {layer === 3 && (
          <button
            onClick={() => setLayer(2)}
            className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 text-ink active:scale-[0.99] transition-transform"
          >
            <span className="font-display text-base">Collapse to brief</span>
            <ChevronDown className="h-5 w-5 rotate-180" />
          </button>
        )}
      </section>

      {/* LAYER 2 — BRIEF */}
      {layer >= 2 && (
        <section className="px-5 pt-6 animate-fade-up">
          <div className="rounded-3xl border border-border bg-surface p-5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">LAYER 2 · BRIEF</div>
            <p className="mt-3 font-display text-lg leading-relaxed text-ink text-pretty">
              {concept.brief}
            </p>
            {concept.keyTerms && concept.keyTerms.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {concept.keyTerms.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] font-mono tracking-wide text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* LAYER 3 — FULL */}
      {layer >= 3 && (
        <section className="px-5 pt-6 animate-fade-up">
          <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">LAYER 3 · FULL TEXT</div>
          <div className="mt-3 reading-column">
            {concept.full.map((p, i) => (
              <p
                key={i}
                className="mb-4 font-display text-[17px] leading-[1.7] text-ink-soft text-pretty"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Footer nav */}
      <nav className="px-5 pt-10 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {prev ? (
            <Link
              to={`/c/${prev.id}`}
              className="lift rounded-2xl border border-border bg-surface p-3"
            >
              <div className="text-[10px] font-mono tracking-widest text-ink-muted">PREV</div>
              <div className="mt-1 font-display text-sm text-ink line-clamp-2">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/c/${next.id}`}
              className="lift rounded-2xl bg-accent text-accent-foreground p-3 text-right"
            >
              <div className="text-[10px] font-mono tracking-widest opacity-70 flex items-center justify-end gap-1">
                NEXT <ArrowRight className="h-3 w-3" />
              </div>
              <div className="mt-1 font-display text-sm line-clamp-2">{next.title}</div>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* Jump-ahead drawer */}
      {showJump && (
        <div
          className="absolute inset-0 z-50 animate-fade-in"
          onClick={() => setShowJump(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-paper-deep/80" />
          <div
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl border-t border-border bg-surface max-h-[80%] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="font-display text-lg text-ink">Jump ahead</div>
              <button
                onClick={() => setShowJump(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="overflow-y-auto px-2 py-2">
              {chapter.groups.map((g) => (
                <li key={g.id} className="mb-3">
                  <div className="px-3 pt-2 pb-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: `hsl(${g.hue} 90% 65%)` }} />
                    <span className="font-mono text-[10px] tracking-widest text-ink-muted">{g.title}</span>
                  </div>
                  <ul>
                    {g.concepts.map((c) => (
                      <li key={c.id}>
                        <Link
                          to={`/c/${c.id}`}
                          onClick={() => setShowJump(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                            c.id === concept.id ? "bg-accent/15 text-ink" : "text-ink-soft"
                          }`}
                        >
                          <span className="font-mono text-[10px] text-ink-muted w-10">{c.number}</span>
                          <span className="font-display text-sm">{c.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default ConceptPage;
