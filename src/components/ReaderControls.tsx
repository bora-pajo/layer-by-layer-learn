import { Minus, Plus, AlignJustify } from "lucide-react";

interface Props {
  fontSize: number;
  lineHeight: number;
  onFontSize: (n: number) => void;
  onLineHeight: (n: number) => void;
}

const FONT_MIN = 14;
const FONT_MAX = 24;
const LH_OPTIONS = [1.5, 1.7, 1.9, 2.1];

/**
 * ReaderControls — sticky bar offering A-/A+ font size and a line-spacing cycle.
 * Persisted by the parent via localStorage.
 */
export function ReaderControls({ fontSize, lineHeight, onFontSize, onLineHeight }: Props) {
  const cycleLineHeight = () => {
    const idx = LH_OPTIONS.findIndex((v) => Math.abs(v - lineHeight) < 0.01);
    const next = LH_OPTIONS[(idx + 1) % LH_OPTIONS.length];
    onLineHeight(next);
  };

  return (
    <div
      className="sticky top-0 z-30 glass border-b border-border"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex items-center justify-between gap-2 px-5 py-2.5">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
          Reader
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-surface shadow-soft">
            <button
              onClick={() => onFontSize(Math.max(FONT_MIN, fontSize - 1))}
              aria-label="Decrease font size"
              disabled={fontSize <= FONT_MIN}
              className="flex h-8 w-8 items-center justify-center rounded-l-full text-ink-muted hover:text-ink hover:bg-surface-2 disabled:opacity-40 transition-colors"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="font-mono text-[10px] text-ink-muted px-1 min-w-[28px] text-center">
              {fontSize}
            </span>
            <button
              onClick={() => onFontSize(Math.min(FONT_MAX, fontSize + 1))}
              aria-label="Increase font size"
              disabled={fontSize >= FONT_MAX}
              className="flex h-8 w-8 items-center justify-center rounded-r-full text-ink-muted hover:text-ink hover:bg-surface-2 disabled:opacity-40 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            onClick={cycleLineHeight}
            aria-label="Change line spacing"
            className="flex h-8 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-ink-muted hover:text-ink hover:bg-surface-2 shadow-soft transition-colors"
          >
            <AlignJustify className="h-3.5 w-3.5" />
            <span className="font-mono text-[10px]">{lineHeight.toFixed(1)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
