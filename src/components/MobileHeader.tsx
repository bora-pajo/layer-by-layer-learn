import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  title?: string;
  eyebrow?: string;
  back?: boolean;
  right?: ReactNode;
}

/**
 * Compact mobile header with optional back button + eyebrow.
 */
export function MobileHeader({ title, eyebrow, back = false, right }: Props) {
  const navigate = useNavigate();
  return (
    <header
      className="sticky top-0 z-30 glass border-b border-border"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex items-center gap-2 px-4 py-3">
        {back ? (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink active:scale-95 transition-transform"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : (
          <Link to="/" className="flex items-center gap-2" aria-label="Atlas home">
            <div className="h-8 w-8 rounded-xl bg-accent flex items-center justify-center">
              <span className="font-display text-sm font-bold text-accent-foreground">A</span>
            </div>
            <span className="font-display text-base text-ink">Atlas</span>
          </Link>
        )}

        <div className="flex-1 min-w-0">
          {eyebrow && (
            <div className="font-mono text-[9px] tracking-[0.2em] text-ink-muted uppercase truncate">
              {eyebrow}
            </div>
          )}
          {title && (
            <div className="font-display text-base text-ink truncate">{title}</div>
          )}
        </div>

        {right}
      </div>
    </header>
  );
}
