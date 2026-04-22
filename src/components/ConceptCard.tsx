import { Link } from "react-router-dom";
import { ConceptVisual } from "./ConceptVisual";
import { type Concept } from "@/content/chapter1";
import { ArrowRight } from "lucide-react";
import { LAYERS, type Layer } from "@/hooks/useProgress";

interface Props {
  concept: Concept & { hue?: number };
  hue: number;
  visited?: boolean;
  category?: string;
  variant?: "snap" | "stack";
  /** Per-layer completion map for this concept */
  layerProgress?: Partial<Record<Layer, number>>;
}

const LAYER_LABELS: Record<Layer, string> = {
  glance: "Glance",
  brief: "Brief",
  example: "Example",
  full: "Full text",
};

/**
 * ConceptCard — clean horizontal row matching the reference design.
 * Pastel tile on left, number + category + title on right, subtle arrow.
 * 4 dots underneath show how many layers (glance/brief/example/full) you've explored.
 */
export function ConceptCard({ concept, hue, visited, category = "epistemology", layerProgress }: Props) {
  const completed = layerProgress ? LAYERS.filter((l) => layerProgress[l]).length : 0;
  const accent = `hsl(${hue} 60% 45%)`;

  return (
    <Link
      to={`/c/${concept.id}`}
      className="group lift block rounded-[28px] bg-surface px-3 py-3 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Open concept: ${concept.title}. ${completed} of ${LAYERS.length} layers explored.`}
    >
      <div className="flex items-center gap-3">
        <ConceptVisual kind={concept.visual} hue={hue} />
        <div className="min-w-0 flex-1 pr-1">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[12px] font-semibold tracking-wide"
              style={{ color: accent }}
            >
              {concept.number.replace(".", "").padStart(2, "0").slice(0, 2)}
            </span>
            <span className="text-[12px] text-ink-muted">{category}</span>
          </div>
          <h3 className="mt-0.5 font-display text-[19px] leading-[1.15] text-ink text-balance line-clamp-2">
            {concept.title}.
          </h3>

          {/* Layer completion dots */}
          {visited && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="flex items-center gap-1" aria-hidden>
                {LAYERS.map((l) => {
                  const done = !!layerProgress?.[l];
                  return (
                    <span
                      key={l}
                      title={`${LAYER_LABELS[l]}${done ? " · explored" : ""}`}
                      className="h-1.5 w-1.5 rounded-full transition-colors"
                      style={{
                        background: done ? accent : "hsl(var(--surface-2))",
                        boxShadow: done ? "none" : "inset 0 0 0 1px hsl(var(--border))",
                      }}
                    />
                  );
                })}
              </div>
              <span className="font-mono text-[10px] text-ink-muted">
                {completed === LAYERS.length ? "complete" : `${completed}/${LAYERS.length}`}
              </span>
            </div>
          )}
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
