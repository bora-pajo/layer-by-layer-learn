import { Link } from "react-router-dom";
import { ConceptVisual } from "./ConceptVisual";
import { type Concept } from "@/content/chapter1";

interface Props {
  concept: Concept & { hue?: number };
  hue: number;
  visited?: boolean;
  variant?: "snap" | "stack";
}

export function ConceptCard({ concept, hue, visited, variant = "stack" }: Props) {
  const isSnap = variant === "snap";
  return (
    <Link
      to={`/c/${concept.id}`}
      className={`group lift block rounded-3xl border border-border bg-surface p-3 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isSnap ? "min-w-[78%] snap-center" : ""
      }`}
      style={{ scrollSnapAlign: isSnap ? "center" : undefined }}
      aria-label={`Open concept: ${concept.title}`}
    >
      <ConceptVisual kind={concept.visual} hue={hue} />
      <div className="mt-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: `hsl(${hue} 90% 65%)` }}
          />
          <span className="font-mono text-[10px] tracking-widest text-ink-muted">
            {concept.number}
          </span>
        </div>
        {visited && (
          <span className="font-mono text-[9px] tracking-widest text-accent">SEEN</span>
        )}
      </div>
      <h3 className="mt-1.5 px-1 font-display text-lg leading-tight text-ink text-balance">
        {concept.title}
      </h3>
      <p className="mt-1 mb-2 px-1 text-[13px] leading-snug text-ink-muted text-pretty line-clamp-2">
        {concept.glance}
      </p>
    </Link>
  );
}
