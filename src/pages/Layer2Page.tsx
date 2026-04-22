import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, NotebookPen, Sparkles } from "lucide-react";
import { LayerHeader } from "@/components/LayerHeader";
import { JumpDrawer } from "@/components/JumpDrawer";
import { allConcepts, getAdjacent, getConcept, getGroup } from "@/content/chapter1";
import { useTabs } from "@/hooks/useTabs";
import { useTheme } from "@/hooks/useTheme";
import { useProgress } from "@/hooks/useProgress";

/**
 * Layer 2 — "A little more" sheet. Cream paper, eyebrow, title, brief,
 * key term chips, related-concept card, sticky-tab + margin note,
 * bottom CTAs: Read full text + Skip.
 */
const Layer2Page = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const [showJump, setShowJump] = useState(false);
  const { isTabbed, toggleTab, getNote, setNote: persistNote } = useTabs();
  const { markLayer } = useProgress();
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNoteState] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowNotes(false);
    if (concept) {
      setNoteState(getNote(concept.id));
      markLayer(concept.id, "brief");
    }
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
  const group = getGroup(concept.groupId)!;
  const tabbed = isTabbed(concept.id);

  // Pick a "if you like this, see…" — next concept in same group, or next overall
  const related =
    group.concepts.find((c) => c.id !== concept.id) ??
    allConcepts.find((c) => c.id !== concept.id);

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? `hsl(${concept.hue} 75% 75%)` : `hsl(${concept.hue} 60% 50%)`;
  const chipBg = isDark ? `hsl(${concept.hue} 35% 22%)` : `hsl(${concept.hue} 80% 94%)`;
  const chipFg = isDark ? `hsl(${concept.hue} 80% 85%)` : `hsl(${concept.hue} 60% 40%)`;
  const tabIdle = isDark ? `hsl(${concept.hue} 35% 35%)` : `hsl(${concept.hue} 50% 75%)`;

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
                style={{ background: chipBg, color: chipFg }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {concept.example && (
          <button
            onClick={() => navigate(`/c/${concept.id}/example`)}
            className="mt-6 group flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-dashed p-4 text-left active:scale-[0.99] transition-all hover:border-solid"
            style={{ borderColor: accent, background: chipBg }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: accent }}
              >
                <Sparkles className="h-4 w-4 text-background" />
              </span>
              <div className="min-w-0">
                <div
                  className="font-mono text-[10px] tracking-[0.22em] uppercase"
                  style={{ color: chipFg }}
                >
                  See it in practice
                </div>
                <div className="mt-0.5 font-display text-[16px] text-ink leading-tight">
                  Example of how this applies
                </div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0" style={{ color: accent }} />
          </button>
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

        {/* Sticky-tab + margin note */}
        <div className="mt-8">
          <button
            onClick={() => toggleTab(concept.id)}
            aria-pressed={tabbed}
            className="group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-surface px-4 py-4 text-left shadow-soft active:scale-[0.99] transition-transform"
            style={{ paddingLeft: "2.25rem" }}
          >
            {/* Post-it tab sticking out from the left edge */}
            <span
              aria-hidden
              className={`absolute left-[-6px] top-1/2 -translate-y-1/2 h-12 w-7 rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.18)] transition-all ${
                tabbed ? "rotate-[-3deg]" : "rotate-[-8deg] opacity-60 group-hover:opacity-100 group-hover:rotate-[-3deg]"
              }`}
              style={{
                background: tabbed ? accent : tabIdle,
              }}
            />
            <div className="flex-1">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                {tabbed ? "Tabbed" : "Mark this page"}
              </div>
              <div className="mt-0.5 font-display text-[15px] text-ink">
                {tabbed ? "This page is tabbed" : "Stick a tab on this page"}
              </div>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">
              {tabbed ? "REMOVE" : "ADD"}
            </span>
          </button>

          <button
            onClick={() => setShowNotes((s) => !s)}
            aria-expanded={showNotes}
            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 transition-colors ${
              showNotes
                ? "bg-surface text-ink shadow-soft"
                : "bg-surface-2 text-ink-soft hover:text-ink"
            }`}
          >
            <NotebookPen className="h-4 w-4" />
            <span className="font-display text-sm">
              {note ? "Edit your note" : "Add a margin note"}
            </span>
          </button>

          {showNotes && (
            <div className="mt-3 rounded-2xl bg-surface p-4 shadow-soft animate-fade-up">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                  Margin note
                </div>
                <span className="font-mono text-[9px] tracking-widest uppercase text-ink-muted">
                  Saved locally
                </span>
              </div>
              <textarea
                value={note}
                onChange={(e) => {
                  setNoteState(e.target.value);
                  persistNote(concept.id, e.target.value);
                }}
                placeholder="Write what this concept sparks for you…"
                rows={4}
                className="mt-2 w-full resize-none rounded-xl bg-surface-2 px-3 py-2 font-display text-[15px] leading-relaxed text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <div className="mt-2 text-[11px] text-ink-muted">
                Sign in (coming soon) to sync across devices.
              </div>
            </div>
          )}
        </div>
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
