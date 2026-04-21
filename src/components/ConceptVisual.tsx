import { type VisualKind } from "@/content/chapter1";

interface Props {
  kind: VisualKind;
  hue?: number;
  className?: string;
  large?: boolean;
}

/**
 * ConceptVisual — abstract dark-mode illustrations.
 * SVG-based, themed via the concept group hue with the lime accent.
 */
export function ConceptVisual({ kind, hue = 78, className = "", large = false }: Props) {
  const accent = `hsl(${hue} 90% 65%)`;
  const accentSoft = `hsl(${hue} 90% 65% / 0.18)`;
  const accentGlow = `hsl(${hue} 90% 65% / 0.35)`;
  const ink = "hsl(var(--ink))";
  const inkMuted = "hsl(var(--ink-muted))";
  const surface = "hsl(var(--surface-2))";
  const lime = "hsl(78 95% 62%)";

  const size = large ? "h-48 sm:h-64" : "h-32";

  return (
    <div className={`relative w-full ${size} overflow-hidden rounded-2xl ${className}`}>
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`glow-${kind}-${hue}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill={surface} />
        <rect width="400" height="240" fill={`url(#glow-${kind}-${hue})`} />
        {render(kind, { accent, accentSoft, accentGlow, ink, inkMuted, lime })}
      </svg>
    </div>
  );
}

function render(
  kind: VisualKind,
  c: { accent: string; accentSoft: string; accentGlow: string; ink: string; inkMuted: string; lime: string },
) {
  switch (kind) {
    case "mountain":
      return (
        <g>
          <path d="M0 180 L60 130 L120 160 L180 110 L240 150 L320 100 L400 140 L400 240 L0 240 Z" fill={c.accentSoft} />
          <path d="M0 220 L80 150 L140 190 L220 90 L300 170 L400 130 L400 240 L0 240 Z" fill="hsl(240 14% 4%)" opacity="0.95" />
          <circle cx="220" cy="90" r="5" fill={c.accent} className="animate-pulse-soft" />
          <line x1="220" y1="90" x2="370" y2="50" stroke={c.accent} strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
          <line x1="220" y1="90" x2="60" y2="60" stroke={c.accent} strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
          <circle cx="320" cy="50" r="16" fill={c.accent} opacity="0.9" />
        </g>
      );

    case "sources":
      return (
        <g>
          {[80, 160, 240, 320].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="120" r="32" fill="none" stroke={c.ink} strokeWidth="1" opacity={0.4} />
              <circle cx={x} cy="120" r={6 + i * 3} fill={c.accent} opacity={0.5 + i * 0.15} />
              <line x1={x} y1="160" x2={x} y2="200" stroke={c.ink} strokeWidth="1" opacity="0.25" />
            </g>
          ))}
          <line x1="40" y1="200" x2="360" y2="200" stroke={c.ink} strokeWidth="1" opacity="0.2" />
        </g>
      );

    case "lineage":
      // Traditional knowledge — a chain of figures passing a glow hand to hand across generations
      return (
        <g>
          <line x1="40" y1="160" x2="360" y2="160" stroke={c.ink} strokeWidth="1" strokeDasharray="2 5" opacity="0.3" />
          {[70, 150, 230, 310].map((x, i) => (
            <g key={i} opacity={0.55 + i * 0.12}>
              {/* head */}
              <circle cx={x} cy="105" r="10" fill="none" stroke={c.ink} strokeWidth="1.4" />
              {/* body */}
              <path d={`M${x - 14} 160 Q${x} 125 ${x + 14} 160`} fill="none" stroke={c.ink} strokeWidth="1.4" />
              {/* glow held forward */}
              <circle cx={x + 22} cy="138" r={i === 3 ? 7 : 4} fill={c.accent} opacity={0.7 + i * 0.1} />
            </g>
          ))}
          {/* passing arcs */}
          {[110, 190, 270].map((x, i) => (
            <path
              key={i}
              d={`M${x} 138 Q${x + 20} 110 ${x + 40} 138`}
              fill="none"
              stroke={c.accent}
              strokeWidth="1.2"
              strokeDasharray="2 3"
              opacity="0.7"
            />
          ))}
        </g>
      );

    case "pillar":
      // Authoritative knowledge — a single tall classical pillar with a seal/crest above
      return (
        <g>
          {/* light beam from above */}
          <path d="M200 20 L150 220 L250 220 Z" fill={c.accentSoft} opacity="0.6" />
          {/* seal */}
          <circle cx="200" cy="48" r="18" fill={c.accent} />
          <circle cx="200" cy="48" r="11" fill="none" stroke="hsl(240 14% 6%)" strokeWidth="1.2" />
          {/* capital */}
          <rect x="160" y="78" width="80" height="12" fill={c.ink} opacity="0.85" rx="2" />
          {/* shaft with flutes */}
          <rect x="172" y="92" width="56" height="110" fill={c.ink} opacity="0.85" />
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={184 + i * 11}
              y1="94"
              x2={184 + i * 11}
              y2="200"
              stroke="hsl(240 14% 4%)"
              strokeWidth="1"
              opacity="0.7"
            />
          ))}
          {/* base */}
          <rect x="156" y="202" width="88" height="14" fill={c.ink} opacity="0.9" rx="2" />
          {/* small figures looking up */}
          <circle cx="90" cy="210" r="4" fill={c.inkMuted} />
          <circle cx="310" cy="210" r="4" fill={c.inkMuted} />
        </g>
      );

    case "hand":
      // Experiential knowledge — a hand touching a flame; the spark of direct experience
      return (
        <g>
          {/* flame */}
          <path
            d="M250 70 Q235 105 250 130 Q265 110 270 90 Q278 110 268 135 Q255 160 240 145 Q225 130 240 105 Q243 88 250 70 Z"
            fill={c.accent}
            opacity="0.9"
          />
          <path
            d="M250 95 Q244 115 252 130 Q260 118 258 105 Q255 95 250 95 Z"
            fill="hsl(240 14% 6%)"
            opacity="0.6"
          />
          {/* spark rays */}
          {[-30, -15, 0, 15, 30].map((deg, i) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            const x1 = 252 + Math.cos(rad) * 55;
            const y1 = 110 + Math.sin(rad) * 55;
            const x2 = 252 + Math.cos(rad) * 75;
            const y2 = 110 + Math.sin(rad) * 75;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.accent} strokeWidth="1.2" opacity="0.6" />;
          })}
          {/* hand reaching from left */}
          <path
            d="M40 200 L130 175 L150 165 L165 158 L175 162 L168 175 L155 180 L148 188 L160 192 L150 200 L135 198 L40 215 Z"
            fill="none"
            stroke={c.ink}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* fingertip glow at flame contact */}
          <circle cx="178" cy="160" r="6" fill={c.accent} opacity="0.8" />
        </g>
      );


    case "challenge":
      return (
        <g>
          <circle cx="200" cy="120" r="60" fill="none" stroke={c.ink} strokeWidth="1.5" opacity="0.6" />
          <circle cx="200" cy="120" r="40" fill={c.accentSoft} stroke={c.accent} strokeWidth="1" />
          <text x="200" y="125" textAnchor="middle" fill={c.ink} fontSize="11" fontFamily="Fraunces, serif" fontStyle="italic">
            theory
          </text>
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const rad = (a * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 110;
            const y1 = 120 + Math.sin(rad) * 110;
            const x2 = 200 + Math.cos(rad) * 70;
            const y2 = 120 + Math.sin(rad) * 70;
            return (
              <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.accent} strokeWidth="1.5" markerEnd="url(#arrow-d)" />
            );
          })}
          <defs>
            <marker id="arrow-d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill={c.accent} />
            </marker>
          </defs>
        </g>
      );

    case "cycle":
      return (
        <g>
          <circle cx="200" cy="120" r="80" fill="none" stroke={c.ink} strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
          {["normal", "anomaly", "crisis", "shift"].map((label, i) => {
            const a = (i * 90 - 90) * (Math.PI / 180);
            const x = 200 + Math.cos(a) * 80;
            const y = 120 + Math.sin(a) * 80;
            return (
              <g key={label}>
                <circle cx={x} cy={y} r={i === 3 ? 11 : 7} fill={i === 3 ? c.accent : c.ink} opacity={i === 3 ? 1 : 0.7} />
                <text x={x} y={y + 28} textAnchor="middle" fill={c.inkMuted} fontSize="10" fontFamily="Inter">
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
          <rect x="40" y="50" width="140" height="140" fill="none" stroke={c.ink} strokeWidth="1.5" rx="12" opacity="0.7" />
          <rect x="220" y="50" width="140" height="140" fill={c.accent} rx="12" />
          <line x1="200" y1="60" x2="200" y2="180" stroke={c.ink} strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          <text x="110" y="125" textAnchor="middle" fill={c.ink} fontSize="14" fontFamily="Fraunces, serif" fontStyle="italic">A</text>
          <text x="290" y="125" textAnchor="middle" fill="hsl(240 14% 6%)" fontSize="14" fontFamily="Fraunces, serif" fontStyle="italic">B</text>
        </g>
      );

    case "versus":
      // Kuhn vs Popper — left: a tree being carefully pruned (gradual correction)
      // right: a sudden burst/explosion replacing the old (paradigm shift)
      return (
        <g>
          {/* divider */}
          <line x1="200" y1="30" x2="200" y2="210" stroke={c.ink} strokeWidth="1" strokeDasharray="3 5" opacity="0.35" />

          {/* LEFT — Popper: pruned tree */}
          <g>
            {/* trunk */}
            <path d="M100 200 L100 130" stroke={c.ink} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
            {/* main branches */}
            <path d="M100 150 L70 120" stroke={c.ink} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path d="M100 140 L130 110" stroke={c.ink} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path d="M100 130 L100 90" stroke={c.ink} strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            {/* healthy leaves */}
            <circle cx="70" cy="115" r="10" fill={c.accent} opacity="0.9" />
            <circle cx="130" cy="105" r="10" fill={c.accent} opacity="0.9" />
            <circle cx="100" cy="82" r="11" fill={c.accent} opacity="0.95" />
            {/* pruned (cut) branch — small stump with X */}
            <path d="M100 160 L75 165" stroke={c.inkMuted} strokeWidth="1.5" opacity="0.6" />
            <line x1="72" y1="161" x2="80" y2="169" stroke={c.accent} strokeWidth="1.4" />
            <line x1="80" y1="161" x2="72" y2="169" stroke={c.accent} strokeWidth="1.4" />
            {/* label */}
            <text x="100" y="225" textAnchor="middle" fill={c.inkMuted} fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">POPPER</text>
          </g>

          {/* RIGHT — Kuhn: burst / paradigm shift */}
          <g>
            {/* faded old paradigm circle */}
            <circle cx="300" cy="120" r="34" fill="none" stroke={c.inkMuted} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            {/* explosion rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const inner = 26;
              const outer = deg % 60 === 0 ? 64 : 50;
              const x1 = 300 + Math.cos(rad) * inner;
              const y1 = 120 + Math.sin(rad) * inner;
              const x2 = 300 + Math.cos(rad) * outer;
              const y2 = 120 + Math.sin(rad) * outer;
              return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.accent} strokeWidth="1.6" strokeLinecap="round" />;
            })}
            {/* new paradigm core */}
            <circle cx="300" cy="120" r="20" fill={c.accent} />
            <circle cx="300" cy="120" r="20" fill="none" stroke={c.accent} strokeWidth="1" opacity="0.4" />
            <text x="300" y="225" textAnchor="middle" fill={c.inkMuted} fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2">KUHN</text>
          </g>
        </g>
      );


      return (
        <g>
          {Array.from({ length: 24 }).map((_, i) => (
            <rect
              key={i}
              x={40 + i * 13.5}
              y={120 - i * 4}
              width="8"
              height={20 + i * 4}
              fill={c.accent}
              opacity={0.35 + i * 0.025}
              rx="2"
            />
          ))}
          <line x1="30" y1="200" x2="370" y2="200" stroke={c.ink} strokeWidth="1" opacity="0.3" />
        </g>
      );

    case "lens":
      return (
        <g>
          <circle cx="160" cy="120" r="60" fill="none" stroke={c.ink} strokeWidth="2" opacity="0.7" />
          <circle cx="160" cy="120" r="60" fill={c.accentSoft} />
          <line x1="208" y1="160" x2="280" y2="220" stroke={c.ink} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={130 + i * 20} cy={120} r={2 + i} fill={c.accent} opacity={0.7 + i * 0.08} />
          ))}
          <circle cx="160" cy="120" r="28" fill="none" stroke={c.accent} strokeWidth="0.6" opacity="0.5" />
        </g>
      );

    case "shield":
      return (
        <g>
          <path
            d="M200 40 L280 70 L280 140 Q280 190 200 215 Q120 190 120 140 L120 70 Z"
            fill={c.accentSoft}
            stroke={c.accent}
            strokeWidth="1.5"
          />
          <path
            d="M165 125 L190 150 L240 100"
            fill="none"
            stroke={c.accent}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );

    case "mirror":
      return (
        <g>
          <ellipse cx="200" cy="120" rx="70" ry="90" fill="none" stroke={c.ink} strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="200" cy="120" rx="58" ry="78" fill={c.accentSoft} />
          <circle cx="180" cy="105" r="3" fill={c.ink} />
          <circle cx="220" cy="105" r="3" fill={c.ink} />
          <path d="M180 145 Q200 155 220 145" stroke={c.ink} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="120" y1="60" x2="100" y2="40" stroke={c.accent} strokeWidth="1.5" />
          <line x1="280" y1="60" x2="300" y2="40" stroke={c.accent} strokeWidth="1.5" />
          <line x1="120" y1="180" x2="100" y2="200" stroke={c.accent} strokeWidth="1.5" />
          <line x1="280" y1="180" x2="300" y2="200" stroke={c.accent} strokeWidth="1.5" />
        </g>
      );

    case "circuit":
      return (
        <g>
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
                opacity="0.35"
              />
            </g>
          ))}
          <circle cx="200" cy="120" r="24" fill={c.accent} />
          <text x="200" y="125" textAnchor="middle" fill="hsl(240 14% 6%)" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
            AI
          </text>
        </g>
      );

    default:
      return <circle cx="200" cy="120" r="50" fill={c.accent} opacity="0.85" />;
  }
}
