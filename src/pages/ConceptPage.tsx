import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { ConceptVisual } from "@/components/ConceptVisual";
import { allConcepts, chapter, getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, ArrowRight, ChevronDown, BookOpen, Map } from "lucide-react";

type Layer = 1 | 2 | 3;

const ConceptPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { markVisited } = useProgress();
  const [layer, setLayer] = useState<Layer>(1);

  useEffect(() => {
    setLayer(1);
    if (concept) markVisited(concept.id);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Keyboard navigation
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
      <div className="min-h-screen paper-grain">
        <TopBar />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="font-display text-3xl text-ink">Concept not found.</h1>
          <Link to="/" className="mt-6 inline-block text-accent underline">Back to the atlas</Link>
        </div>
      </div>
    );
  }

  const { prev, next, index, total } = getAdjacent(concept.id);
  const group = chapter.groups.find((g) => g.id === concept.groupId)!;

  return (
    <div className="min-h-screen paper-grain">
      <TopBar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
          <li>
            <Link to="/" className="inline-flex items-center gap-1.5 hover:text-ink">
              <Map className="h-3.5 w-3.5" /> Atlas
            </Link>
          </li>
          <li aria-hidden>·</li>
          <li>
            <Link to={`/#${group.id}`} className="hover:text-ink">{group.title}</Link>
          </li>
          <li aria-hidden>·</li>
          <li className="font-mono tracking-widest text-ink">{concept.number}</li>
          <li className="ml-auto font-mono text-[10px] tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </li>
        </ol>
      </nav>

      {/* LAYER 1 — GLANCE */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-8 animate-fade-up">
        <div className="flex items-center gap-3">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: `hsl(${concept.hue} 65% 52%)` }}
          />
          <span className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">
            LAYER 1 · GLANCE
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink text-balance md:text-6xl">
          {concept.title}
        </h1>
        <p className="mt-6 max-w-3xl font-display text-2xl italic text-ink-soft text-pretty md:text-3xl">
          {concept.glance}
        </p>

        <div className="mt-10">
          <ConceptVisual kind={concept.visual} hue={concept.hue} large />
        </div>

        {/* Layer toggle */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          {layer === 1 && (
            <button
              onClick={() => setLayer(2)}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-transform hover:-translate-y-0.5"
            >
              Learn a little more
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          )}
          {layer >= 2 && (
            <button
              onClick={() => setLayer(layer === 2 ? 3 : 2)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink hover:border-ink"
            >
              <BookOpen className="h-4 w-4" />
              {layer === 2 ? "Read full text" : "Collapse to brief"}
            </button>
          )}
          {next && (
            <Link
              to={`/c/${next.id}`}
              className="ml-auto inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
            >
              Skip to next
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>

      {/* LAYER 2 — BRIEF */}
      {layer >= 2 && (
        <section className="mx-auto max-w-5xl px-6 py-12 animate-fade-up">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-paper md:p-12">
            <div className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">
              LAYER 2 · BRIEF
            </div>
            <p className="mt-4 reading-column font-display text-xl leading-relaxed text-ink text-pretty md:text-2xl">
              {concept.brief}
            </p>
            {concept.keyTerms && concept.keyTerms.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {concept.keyTerms.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-xs font-mono tracking-wide text-ink-soft"
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
        <section className="mx-auto max-w-3xl px-6 py-16 animate-fade-up">
          <div className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">
            LAYER 3 · FULL TEXT
          </div>
          <div className="mt-6 reading-column">
            {concept.full.map((p, i) => (
              <p
                key={i}
                className="font-display text-lg leading-[1.75] text-ink-soft text-pretty md:text-xl"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Footer nav */}
      <nav className="mx-auto mt-12 max-w-5xl border-t border-border px-6 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {prev ? (
            <Link
              to={`/c/${prev.id}`}
              className="lift group rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </div>
              <div className="mt-2 font-display text-lg text-ink group-hover:text-accent transition-colors">
                {prev.title}
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/c/${next.id}`}
              className="lift group rounded-xl border border-border bg-card p-5 text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs text-ink-muted">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="mt-2 font-display text-lg text-ink group-hover:text-accent transition-colors">
                {next.title}
              </div>
            </Link>
          ) : <div />}
        </div>

        {/* Jump-ahead */}
        <details className="mt-10 group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between border-y border-border py-4 text-sm">
              <span className="font-mono text-[10px] tracking-widest text-ink-muted">JUMP AHEAD</span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </div>
          </summary>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {allConcepts.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/c/${c.id}`}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted ${
                    c.id === concept.id ? "bg-muted" : ""
                  }`}
                >
                  <span className="font-mono text-[10px] text-ink-muted w-10">{c.number}</span>
                  <span className="text-ink">{c.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </div>
  );
};

export default ConceptPage;
