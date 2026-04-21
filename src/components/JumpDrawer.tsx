import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { chapter } from "@/content/chapter1";

interface Props {
  open: boolean;
  onClose: () => void;
  currentId?: string;
}

/**
 * JumpDrawer — bottom sheet listing all groups + concepts for quick navigation.
 */
export function JumpDrawer({ open, onClose, currentId }: Props) {
  if (!open) return null;
  return (
    <div
      className="absolute inset-0 z-50 animate-fade-in"
      onClick={onClose}
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
          <div className="font-display text-lg text-ink">Jump to</div>
          <button
            onClick={onClose}
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
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: `hsl(${g.hue} 70% 55%)` }} />
                <span className="font-mono text-[10px] tracking-widest text-ink-muted">{g.number} · {g.title}</span>
              </div>
              <ul>
                {g.concepts.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/c/${c.id}`}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                        c.id === currentId ? "bg-accent-soft text-ink" : "text-ink-soft"
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
  );
}
