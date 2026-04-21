import { type VisualKind } from "@/content/chapter1";

interface Props {
  kind: VisualKind;
  hue?: number;
  className?: string;
  large?: boolean;
}

/**
 * ConceptVisual — abstract editorial illustrations.
 * SVG-based, animated, themed via the concept group hue.
 * Each visual is a metaphor, not decoration.
 */
export function ConceptVisual({ kind, hue = 14, className = "", large = false }: Props) {
  const accent = `hsl(${hue} 65% 52%)`;
  const accentSoft = `hsl(${hue} 65% 52% / 0.15)`;
  const ink = "hsl(var(--ink))";
  const inkSoft = "hsl(var(--ink-muted))";

  const size = large ? "h-72 md:h-96" : "h-40";

  return (
    <div className={`relative w-full ${size} overflow-hidden rounded-2xl ${className}`}>
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {render(kind, { accent, accentSoft, ink, inkSoft })}
      </svg>
    </div>
  );
}

function render(
  kind: VisualKind,
  c: { accent: string; accentSoft: string; ink: string; inkSoft: string },
) {
  switch (kind) {
    case "mountain":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          {/* distant range */}
          <path d="M0 180 L60 130 L120 160 L180 110 L240 150 L320 100 L400 140 L400 240 L0 240 Z" fill={c.accentSoft} />
          {/* near mountain */}
          <path d="M0 220 L80 150 L140 190 L220 90 L300 170 L400 130 L400 240 L0 240 Z" fill={c.ink} opacity="0.92" />
          {/* climber dot */}
          <circle cx="220" cy="90" r="4" fill={c.accent} className="animate-pulse-soft" />
          {/* sight lines */}
          <line x1="220" y1="90" x2="370" y2="50" stroke={c.accent} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
          <line x1="220" y1="90" x2="60" y2="60" stroke={c.accent} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
          {/* sun */}
          <circle cx="320" cy="50" r="14" fill={c.accent} opacity="0.9" />
        </g>
      );

    case "sources":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          {[80, 160, 240, 320].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="120" r="32" fill="none" stroke={c.ink} strokeWidth="1.2" opacity={0.9 - i * 0.1} />
              <circle cx={x} cy="120" r={6 + i * 3} fill={c.accent} opacity={0.4 + i * 0.18} />
              <line x1={x} y1="160" x2={x} y2="200" stroke={c.ink} strokeWidth="1" opacity="0.4" />
            </g>
          ))}
          <line x1="40" y1="200" x2="360" y2="200" stroke={c.ink} strokeWidth="1" opacity="0.3" />
        </g>
      );

    case "challenge":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          {/* theory orb */}
          <circle cx="200" cy="120" r="60" fill="none" stroke={c.ink} strokeWidth="1.5" />
          <circle cx="200" cy="120" r="40" fill={c.accentSoft} />
          <text x="200" y="125" textAnchor="middle" fill={c.ink} fontSize="11" fontFamily="Fraunces, serif" fontStyle="italic">
            theory
          </text>
          {/* arrows of evidence */}
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const rad = (a * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 110;
            const y1 = 120 + Math.sin(rad) * 110;
            const x2 = 200 + Math.cos(rad) * 70;
            const y2 = 120 + Math.sin(rad) * 70;
            return (
              <g key={a}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.accent} strokeWidth="1.5" markerEnd="url(#arrow)" />
              </g>
            );
          })}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill={c.accent} />
            </marker>
          </defs>
        </g>
      );

    case "cycle":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <circle cx="200" cy="120" r="80" fill="none" stroke={c.ink} strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
          {["normal", "anomaly", "crisis", "shift"].map((label, i) => {
            const a = (i * 90 - 90) * (Math.PI / 180);
            const x = 200 + Math.cos(a) * 80;
            const y = 120 + Math.sin(a) * 80;
            return (
              <g key={label}>
                <circle cx={x} cy={y} r={i === 3 ? 10 : 7} fill={i === 3 ? c.accent : c.ink} opacity={i === 3 ? 1 : 0.85} />
                <text x={x} y={y + 28} textAnchor="middle" fill={c.ink} fontSize="10" fontFamily="Inter" opacity="0.8">
                  {label}
                </text>
              </g>
            );
          })}
        </g>
      );

    case "compare":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <rect x="40" y="50" width="140" height="140" fill="none" stroke={c.ink} strokeWidth="1.5" rx="8" />
          <rect x="220" y="50" width="140" height="140" fill={c.accent} opacity="0.92" rx="8" />
          <line x1="200" y1="60" x2="200" y2="180" stroke={c.ink} strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
          <text x="110" y="125" textAnchor="middle" fill={c.ink} fontSize="14" fontFamily="Fraunces, serif" fontStyle="italic">A</text>
          <text x="290" y="125" textAnchor="middle" fill="hsl(var(--paper))" fontSize="14" fontFamily="Fraunces, serif" fontStyle="italic">B</text>
        </g>
      );

    case "spectrum":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          {Array.from({ length: 24 }).map((_, i) => (
            <rect
              key={i}
              x={40 + i * 13.5}
              y={120 - (i * 4)}
              width="8"
              height={20 + i * 4}
              fill={c.accent}
              opacity={0.3 + i * 0.03}
              rx="1"
            />
          ))}
          <line x1="30" y1="200" x2="370" y2="200" stroke={c.ink} strokeWidth="1" opacity="0.5" />
        </g>
      );

    case "lens":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <circle cx="160" cy="120" r="60" fill="none" stroke={c.ink} strokeWidth="2" />
          <circle cx="160" cy="120" r="60" fill={c.accentSoft} />
          <line x1="208" y1="160" x2="280" y2="220" stroke={c.ink} strokeWidth="6" strokeLinecap="round" />
          {/* details inside */}
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={130 + i * 20} cy={120} r={2 + i} fill={c.accent} opacity={0.6 + i * 0.1} />
          ))}
          <circle cx="160" cy="120" r="28" fill="none" stroke={c.ink} strokeWidth="0.6" opacity="0.4" />
        </g>
      );

    case "shield":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <path
            d="M200 40 L280 70 L280 140 Q280 190 200 215 Q120 190 120 140 L120 70 Z"
            fill={c.accentSoft}
            stroke={c.ink}
            strokeWidth="1.5"
          />
          <path
            d="M165 125 L190 150 L240 100"
            fill="none"
            stroke={c.ink}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    case "mirror":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <ellipse cx="200" cy="120" rx="70" ry="90" fill="none" stroke={c.ink} strokeWidth="1.5" />
          <ellipse cx="200" cy="120" rx="58" ry="78" fill={c.accentSoft} />
          {/* face suggestion */}
          <circle cx="180" cy="105" r="3" fill={c.ink} />
          <circle cx="220" cy="105" r="3" fill={c.ink} />
          <path d="M180 145 Q200 155 220 145" stroke={c.ink} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* reflection lines */}
          <line x1="120" y1="60" x2="100" y2="40" stroke={c.accent} strokeWidth="1" />
          <line x1="280" y1="60" x2="300" y2="40" stroke={c.accent} strokeWidth="1" />
          <line x1="120" y1="180" x2="100" y2="200" stroke={c.accent} strokeWidth="1" />
          <line x1="280" y1="180" x2="300" y2="200" stroke={c.accent} strokeWidth="1" />
        </g>
      );

    case "circuit":
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          {[60, 120, 180, 240, 300, 340].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={60 + (i % 2) * 120} r="5" fill={c.accent} />
              <line
                x1={x}
                y1={60 + (i % 2) * 120}
                x2={x + 30}
                y2={120}
                stroke={c.ink}
                strokeWidth="1"
                opacity="0.5"
              />
            </g>
          ))}
          <circle cx="200" cy="120" r="22" fill={c.ink} />
          <text x="200" y="125" textAnchor="middle" fill="hsl(var(--paper))" fontSize="10" fontFamily="JetBrains Mono">
            AI
          </text>
        </g>
      );

    default:
      return (
        <g>
          <rect width="400" height="240" fill="hsl(var(--paper))" />
          <circle cx="200" cy="120" r="50" fill={c.accent} opacity="0.85" />
        </g>
      );
  }
}
