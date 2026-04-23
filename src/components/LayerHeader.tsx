import { Link, useNavigate } from "react-router-dom";
import { X, Network, Bookmark, BookmarkCheck } from "lucide-react";
import { useTabs } from "@/hooks/useTabs";

interface Props {
  conceptId?: string;
  eyebrow?: string;
  /** chapter position info — when provided, shows the dashed segment progress bar */
  index?: number;
  total?: number;
  hue?: number;
  variant?: "tinted" | "paper";
  showTab?: boolean;
}

/**
 * LayerHeader — shared header used across the 3 layer screens.
 * Close (X) on the left, eyebrow + position centered, atlas/jump on the right.
 * Below: dashed segment progress bar tracking chapter position.
 */
export function LayerHeader({
  conceptId,
  eyebrow,
  index,
  total,
  hue = 258,
  variant = "tinted",
  showTab = false,
}: Props) {
  const navigate = useNavigate();
  const { isTabbed, toggleTab } = useTabs();
  const tabbed = conceptId ? isTabbed(conceptId) : false;

  const accent = `hsl(${hue} 70% 55%)`;

  return (
    <header
      className="px-5 pt-3"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 0.75rem)" }}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink active:scale-95 transition-transform shadow-soft"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex-1 min-w-0 text-center">
          {typeof index === "number" && typeof total === "number" && (
            <div className="font-mono text-[12px] tracking-wide text-ink">
              <span className="font-semibold">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-ink-muted"> / </span>
              <span className="text-ink-muted">{String(total).padStart(2, "0")}</span>
            </div>
          )}
          {eyebrow && (
            <div className="mt-0.5 font-display text-[13px] italic text-ink-soft truncate">
              {eyebrow}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showTab && conceptId && (
            <button
              onClick={() => toggleTab(conceptId)}
              aria-label={tabbed ? "Remove tab" : "Tab this page"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink active:scale-95 transition-transform shadow-soft"
            >
              {tabbed ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>
          )}
          <Link
            to="/"
            aria-label="Chapter map"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink active:scale-95 transition-transform shadow-soft"
          >
            <Network className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </header>
  );
}
