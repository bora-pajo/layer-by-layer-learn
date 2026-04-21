import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptVisual } from "@/components/ConceptVisual";
import { allConcepts, chapter, getAdjacent, getConcept } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { useTabs } from "@/hooks/useTabs";
import { ArrowRight, ChevronDown, BookOpen, List, X, NotebookPen, StickyNote } from "lucide-react";

type Layer = 1 | 2 | 3;

const ConceptPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const concept = getConcept(id);
  const { markVisited } = useProgress();
  const { tabs, isTabbed, toggleTab, setNote: persistNote, getNote, remove } = useTabs();
  const [layer, setLayer] = useState<Layer>(1);
  const [showJump, setShowJump] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNoteState] = useState("");

  const tabbed = concept ? isTabbed(concept.id) : false;

  useEffect(() => {
    setLayer(1);
    setShowJump(false);
    setShowTabs(false);
    setShowNotes(false);
    if (concept) {
      markVisited(concept.id);
      setNoteState(getNote(concept.id));
    }
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTabs(true)}
              aria-label="Your tabbed pages"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink active:scale-95 transition-transform"
            >
              <StickyNote className="h-4 w-4" />
              {tabs.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-accent px-1 text-[9px] font-mono font-bold text-accent-foreground">
                  {tabs.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowJump(true)}
              aria-label="Jump to concept"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink active:scale-95 transition-transform"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        }
      />

      {/* Progress — chapter position + layer depth */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-ink-muted">
          <span style={{ color: `hsl(${concept.hue} 90% 65%)` }}>●</span>
          <span>{group.title.toUpperCase()}</span>
          <span className="ml-auto">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        {/* Chapter progress bar */}
        <div
          className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label="Chapter progress"
        >
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${((index + 1) / total) * 100}%`,
              background: `hsl(${concept.hue} 90% 65%)`,
            }}
          />
        </div>
        {/* Layer depth dots */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-widest text-ink-muted">DEPTH</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setLayer(n as Layer)}
                aria-label={`Go to layer ${n}`}
                className={`h-1.5 rounded-full transition-all ${
                  n <= layer ? "w-6 bg-accent" : "w-3 bg-surface-2 hover:bg-border"
                }`}
              />
            ))}
          </div>
          <span className="ml-1 font-mono text-[9px] tracking-widest text-ink-muted">
            L{layer}/3
          </span>
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

      {/* Layer 1 CTA — directly after the glance */}
      {layer === 1 && (
        <section className="px-5 pt-5">
          <button
            onClick={() => setLayer(2)}
            className="group flex w-full items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground active:scale-[0.99] transition-transform"
          >
            <span className="font-display text-base font-medium">Learn a little more</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </section>
      )}

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

          {/* Layer 2 CTA — placed AFTER the brief content */}
          {layer === 2 && (
            <button
              onClick={() => setLayer(3)}
              className="mt-3 group flex w-full items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground active:scale-[0.99] transition-transform"
            >
              <span className="font-display text-base font-medium">Go deeper · read full text</span>
              <BookOpen className="h-5 w-5" />
            </button>
          )}
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
          <button
            onClick={() => setLayer(2)}
            className="mt-3 flex w-full items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 text-ink active:scale-[0.99] transition-transform"
          >
            <span className="font-display text-base">Collapse to brief</span>
            <ChevronDown className="h-5 w-5 rotate-180" />
          </button>
        </section>
      )}

      {/* Tab this page (post-it style) + Notes */}
      <section className="px-5 pt-8">
        <div className="relative">
          {/* Sticky-tab button — looks like a thin post-it sticking out of the page edge */}
          <button
            onClick={() => concept && toggleTab(concept.id)}
            aria-pressed={tabbed}
            className="group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border border-border bg-surface px-4 py-4 text-left transition-colors active:scale-[0.99]"
            style={{ paddingLeft: "2.25rem" }}
          >
            {/* The "post-it tab" sticking out from the left edge */}
            <span
              aria-hidden
              className={`absolute left-[-6px] top-1/2 -translate-y-1/2 h-12 w-7 rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.25)] transition-all ${
                tabbed ? "rotate-[-3deg]" : "rotate-[-8deg] opacity-60 group-hover:opacity-100 group-hover:rotate-[-3deg]"
              }`}
              style={{
                background: tabbed
                  ? `hsl(${concept.hue} 90% 65%)`
                  : `hsl(${concept.hue} 40% 35%)`,
              }}
            />
            <div className="flex-1">
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">
                {tabbed ? "TABBED" : "MARK THIS PAGE"}
              </div>
              <div className="mt-0.5 font-display text-[15px] text-ink">
                {tabbed ? "This page is tabbed" : "Stick a tab on this page"}
              </div>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-ink-muted">
              {tabbed ? "REMOVE" : "ADD"}
            </span>
          </button>

          {/* Notes toggle */}
          <button
            onClick={() => setShowNotes((s) => !s)}
            aria-expanded={showNotes}
            className={`mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 transition-colors ${
              showNotes
                ? "border-accent bg-accent/15 text-ink"
                : "border-border bg-surface text-ink-soft hover:text-ink"
            }`}
          >
            <NotebookPen className="h-4 w-4" />
            <span className="font-display text-sm">
              {note ? "Edit your note" : "Add a margin note"}
            </span>
          </button>
        </div>

        {showNotes && (
          <div className="mt-3 rounded-2xl border border-border bg-surface p-4 animate-fade-up">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">MARGIN NOTE</div>
              <span className="font-mono text-[9px] tracking-widest text-ink-muted">SAVED LOCALLY</span>
            </div>
            <textarea
              value={note}
              onChange={(e) => {
                setNoteState(e.target.value);
                if (concept) persistNote(concept.id, e.target.value);
              }}
              placeholder="Write what this concept sparks for you…"
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-border bg-surface-2 px-3 py-2 font-display text-[15px] leading-relaxed text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[11px] text-ink-muted">Sign in (coming soon) to sync across devices.</span>
            </div>
          </div>
        )}
      </section>

      {/* Tabs side drawer — list of all tabbed pages */}
      {showTabs && (
        <div
          className="absolute inset-0 z-50 animate-fade-in"
          onClick={() => setShowTabs(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-foreground/40" />
          <div
            className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm border-l border-border bg-surface flex flex-col animate-fade-in"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">YOUR</div>
                <div className="font-display text-lg text-ink">Tabbed pages</div>
              </div>
              <button
                onClick={() => setShowTabs(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {tabs.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <StickyNote className="h-8 w-8 text-ink-muted" />
                <p className="mt-3 font-display text-base text-ink">No tabs yet</p>
                <p className="mt-1 text-[13px] text-ink-soft">
                  Tap the sticky tab on any page to mark it. Your tabs will live here for quick return.
                </p>
              </div>
            ) : (
              <ul className="flex-1 overflow-y-auto px-3 py-3">
                {tabs
                  .slice()
                  .sort((a, b) => b.tabbedAt - a.tabbedAt)
                  .map((t) => {
                    const c = allConcepts.find((x) => x.id === t.id);
                    if (!c) return null;
                    return (
                      <li key={t.id} className="mb-2">
                        <div className="relative rounded-xl border border-border bg-surface-2 p-3 pl-5">
                          <span
                            aria-hidden
                            className="absolute left-[-4px] top-3 h-8 w-3 rounded-sm rotate-[-6deg] shadow-[1px_1px_0_rgba(0,0,0,0.25)]"
                            style={{ background: `hsl(${c.hue} 90% 65%)` }}
                          />
                          <Link
                            to={`/c/${c.id}`}
                            onClick={() => setShowTabs(false)}
                            className="block"
                          >
                            <div className="font-mono text-[10px] tracking-widest text-ink-muted">
                              {c.number}
                            </div>
                            <div className="mt-0.5 font-display text-[15px] text-ink line-clamp-2">
                              {c.title}
                            </div>
                            {t.note && (
                              <div className="mt-1.5 line-clamp-2 text-[12px] italic text-ink-soft">
                                “{t.note}”
                              </div>
                            )}
                          </Link>
                          <button
                            onClick={() => remove(t.id)}
                            aria-label="Remove tab"
                            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-ink-muted hover:text-ink"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
        </div>
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
          <div className="absolute inset-0 bg-foreground/40" />
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
