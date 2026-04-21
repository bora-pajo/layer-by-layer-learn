import { Link } from "react-router-dom";
import { ConceptVisual } from "./ConceptVisual";
import { type Concept } from "@/content/chapter1";
import { ArrowRight } from "lucide-react";

interface Props {
  concept: Concept & { hue?: number };
  hue: number;
  visited?: boolean;
  category?: string;
  variant?: "snap" | "stack";
}

/**
 * ConceptCard — clean horizontal row matching the reference design.
 * Pastel tile on left, number + category + title on right, subtle arrow.
 */
export function ConceptCard({ concept, hue, visited, category = "epistemology" }: Props) {
  return (
    <Link
      to={`/c/${concept.id}`}
      className="group lift block rounded-[28px] bg-surface px-3 py-3 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Open concept: ${concept.title}`}
    >
      <div className="flex items-center gap-3">
        <ConceptVisual kind={concept.visual} hue={hue} />
        <div className="min-w-0 flex-1 pr-1">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[12px] font-semibold tracking-wide"
              style={{ color: `hsl(${hue} 60% 45%)` }}
            >
              {concept.number.replace(".", "").padStart(2, "0").slice(0, 2)}
            </span>
            <span className="text-[12px] text-ink-muted">{category}</span>
          </div>
          <h3 className="mt-0.5 font-display text-[19px] leading-[1.15] text-ink text-balance line-clamp-2">
            {concept.title}.
          </h3>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
