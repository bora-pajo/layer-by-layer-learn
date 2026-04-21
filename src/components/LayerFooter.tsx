import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Menu, Plus } from "lucide-react";

interface Props {
  prevId?: string | null;
  nextId?: string | null;
  /** Path suffix to use for prev/next, e.g. "" or "/more" */
  suffix?: string;
  /** Center action: label + onClick */
  centerLabel: string;
  centerIcon?: "plus" | "arrow";
  onCenter: () => void;
  onMenu?: () => void;
}

/**
 * LayerFooter — bottom controls bar used on Layer 1 and Layer 2.
 * Left/right round buttons for prev/next concept, center pill for primary action,
 * small round button for menu (jump/tabs).
 */
export function LayerFooter({
  prevId,
  nextId,
  suffix = "",
  centerLabel,
  centerIcon = "plus",
  onCenter,
  onMenu,
}: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-2"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
    >
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => prevId && navigate(`/c/${prevId}${suffix}`)}
          disabled={!prevId}
          aria-label="Previous concept"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink shadow-soft active:scale-95 transition-transform disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={onCenter}
          className="flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-background shadow-lift active:scale-[0.98] transition-transform"
        >
          <span className="font-display text-[15px] font-medium">{centerLabel}</span>
          {centerIcon === "plus" ? <Plus className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        {onMenu && (
          <button
            onClick={onMenu}
            aria-label="Jump menu"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink shadow-soft active:scale-95 transition-transform"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}

        <button
          onClick={() => nextId && navigate(`/c/${nextId}${suffix}`)}
          disabled={!nextId}
          aria-label="Next concept"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink shadow-soft active:scale-95 transition-transform disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
