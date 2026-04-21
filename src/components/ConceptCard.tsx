import { Link } from "react-router-dom";
import { ConceptVisual } from "./ConceptVisual";
import { type Concept } from "@/content/chapter1";

interface Props {
  concept: Concept;
  hue: number;
  groupId: string;
}

export function ConceptCard({ concept, hue, groupId }: Props) {
  return (
    <Link
      to={`/c/${concept.id}`}
      className="group block lift rounded-2xl border border-border bg-card p-5 shadow-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Open concept: ${concept.title}`}
    >
      <ConceptVisual kind={concept.visual} hue={hue} />
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-mono text-[10px] tracking-widest text-ink-muted">{concept.number}</span>
        <span
          className="h-px flex-1"
          style={{ background: `hsl(${hue} 65% 52% / 0.4)` }}
        />
      </div>
      <h3 className="mt-2 font-display text-xl leading-snug text-ink text-balance group-hover:text-accent transition-colors">
        {concept.title}
      </h3>
      <p className="mt-2 text-sm text-ink-muted text-pretty">{concept.glance}</p>
    </Link>
  );
}
