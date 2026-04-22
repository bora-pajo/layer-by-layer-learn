import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Bookmark, BookmarkCheck, Type } from "lucide-react";
import { getAdjacent, getConcept, getGroup } from "@/content/chapter1";
import { useTabs } from "@/hooks/useTabs";

type FontSize = "sm" | "md" | "lg";
const SIZE_KEY = "roro:reader-size";

/**
 * Layer 3 — Editorial reader. Top progress + close, AA + bookmark on right.
 * Number eyebrow, big serif title, italic blockquote (the brief), drop-cap full text,
 * meta footer (read time + tag), prev/next pagination at bottom.
 */
const Layer3Page = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { isTabbed, toggleTab } = useTabs();
  const [size, setSize] = useState<FontSize>(() => {
    if (typeof window === "undefined") return "md";
    return (localStorage.getItem(SIZE_KEY) as FontSize) || "md";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    localStorage.setItem(SIZE_KEY, size);
  }, [size]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      const adj = concept ? getAdjacent(concept.id) : null;
      if (e.key === "ArrowRight" && adj?.next) navigate(`/c/${adj.next.id}/read`);
      if (e.key === "ArrowLeft" && adj?.prev) navigate(`/c/${adj.prev.id}/read`);
      if (e.key === "Escape") navigate(`/c/${id}/more`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [concept, navigate, id]);

  if (!concept) return null;

  const { prev, next, index, total } = getAdjacent(concept.id);
  const group = getGroup(concept.groupId)!;
  const tabbed = isTabbed(concept.id);

  // Estimate read time
  const wordCount = concept.full.join(" ").split(/\s+/).length;
  const readMin = Math.max(1, Math.round(wordCount / 220));

  // First paragraph drop cap
  const [first, ...rest] = concept.full;
  const firstChar = first?.[0] ?? "";
  const firstRest = first?.slice(1) ?? "";

  const sizeClasses = {
    sm: "text-[15px] leading-[1.65]",
    md: "text-[17px] leading-[1.7]",
    lg: "text-[19px] leading-[1.75]",
  }[size];

  const accent = `hsl(${concept.hue} 60% 50%)`;

  return (
    <div className="phone-shell relative animate-fade-in" style={{ minHeight: "100dvh", paddingBottom: "100px" }}>
      {/* Top scroll-progress bar (chapter position) */}
      <div className="sticky top-0 z-30 glass">
        <div className="h-1 w-full bg-transparent">
          <div
            className="h-full transition-all"
            style={{ width: `${((index + 1) / total) * 100}%`, background: accent }}
          />
        </div>
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 0.5rem)" }}
        >
          <button
            onClick={() => navigate(`/c/${concept.id}/more`)}
            className="flex items-center gap-1 text-ink active:scale-95 transition-transform"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="font-display text-[15px]">Close</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSize((s) => (s === "sm" ? "md" : s === "md" ? "lg" : "sm"))}
              aria-label="Cycle font size"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink active:scale-95 transition-transform"
            >
              <Type className="h-4 w-4" />
            </button>
            <button
              onClick={() => toggleTab(concept.id)}
              aria-label={tabbed ? "Remove tab" : "Tab this page"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink active:scale-95 transition-transform"
            >
              {tabbed ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <article className="px-6 pt-2">
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: accent }}>
          {group.number} · {group.title}
        </div>

        <h1 className="mt-3 font-display text-[36px] leading-[1.05] text-ink text-balance">
          {concept.title}.
        </h1>

        {/* Italic blockquote — the brief */}
        <div className="mt-5 border-l-2 pl-4" style={{ borderColor: accent }}>
          <p className="font-display text-[17px] italic leading-[1.55] text-ink-soft text-pretty">
            {concept.brief}
          </p>
        </div>

        {/* Body — drop cap on first paragraph */}
        {first && (
          <p className={`mt-6 font-display ${sizeClasses} text-ink-soft text-pretty`}>
            <span
              className="float-left mr-2 mt-1 font-display font-medium leading-[0.85]"
              style={{ fontSize: "3.4em", color: accent }}
            >
              {firstChar}
            </span>
            {firstRest}
          </p>
        )}
        {rest.map((p, i) => (
          <p key={i} className={`mt-4 font-display ${sizeClasses} text-ink-soft text-pretty`}>
            {p}
          </p>
        ))}

        {/* Meta footer */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-[11px] tracking-widest uppercase text-ink-muted">
            {readMin} min read
          </span>
          <span className="font-mono text-[11px] text-ink-muted">#{group.id}</span>
        </div>
      </article>

      {/* Prev / position / next */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 glass border-t border-border px-5"
        style={{ paddingTop: "0.75rem", paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              to={`/c/${prev.id}/read`}
              className="flex h-10 items-center gap-1 rounded-full bg-surface-2 pl-2 pr-4 active:scale-95 transition-transform"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="font-display text-[14px] text-ink">Prev</span>
            </Link>
          ) : <div className="w-20" />}

          <div className="font-mono text-[12px] text-ink-muted">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          {next ? (
            <Link
              to={`/c/${next.id}/read`}
              className="flex h-10 items-center gap-1 rounded-full bg-surface-2 pl-4 pr-2 active:scale-95 transition-transform"
            >
              <span className="font-display text-[14px] text-ink">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : <div className="w-20" />}
        </div>
      </div>
    </div>
  );
};

export default Layer3Page;
