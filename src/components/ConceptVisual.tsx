import { motion } from "framer-motion";
import { type VisualKind } from "@/content/chapter1";
import { useTheme } from "@/hooks/useTheme";

interface Props {
  kind: VisualKind;
  hue?: number;
  className?: string;
  large?: boolean;
  /** Enable subtle motion. Default true on `large` (Layer 1), off on small tiles. */
  animated?: boolean;
}

/**
 * ConceptVisual — soft pastel tile with an inner card holding a minimal SVG mark.
 * Theme-aware: light mode uses pastel + white; dark mode uses deep tinted + dark inner card.
 */
export function ConceptVisual({ kind, hue = 258, className = "", large = false, animated }: Props) {
  const motionOn = animated ?? large;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tileBg = isDark ? `hsl(${hue} 35% 18%)` : `hsl(${hue} 75% 94%)`;
  const innerBg = isDark ? `hsl(${hue} 22% 11%)` : `hsl(0 0% 100%)`;
  const stroke = isDark ? `hsl(${hue} 75% 80%)` : `hsl(${hue} 60% 45%)`;
  const strokeSoft = isDark ? `hsl(${hue} 45% 55%)` : `hsl(${hue} 55% 70%)`;
  const fill = isDark ? `hsl(${hue} 80% 72%)` : `hsl(${hue} 70% 55%)`;

  const wrap = large
    ? "aspect-square w-full max-w-[300px] mx-auto"
    : "aspect-square w-[88px] sm:w-[100px]";

  return (
    <div
      className={`${wrap} rounded-[28px] flex items-center justify-center ${className}`}
      style={{ background: tileBg }}
    >
      <div
        className={`${large ? "w-[78%] h-[78%]" : "w-[72%] h-[72%]"} rounded-2xl flex items-center justify-center`}
        style={{
          background: innerBg,
          boxShadow: isDark
            ? "0 1px 2px hsl(0 0% 0% / 0.3)"
            : "0 1px 2px hsl(240 15% 10% / 0.04)",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%]" fill="none">
          {render(kind, { stroke, strokeSoft, fill }, motionOn)}
        </svg>
      </div>
    </div>
  );
}

type C = { stroke: string; strokeSoft: string; fill: string };

function render(kind: VisualKind, c: C, animate: boolean) {
  switch (kind) {
    case "lineage":
      // Traditional knowledge — horizon lines drift gently; the accented line carries a traveling dot.
      return (
        <g strokeLinecap="round">
          {[30, 42, 66, 78].map((y, i) => (
            <motion.path
              key={y}
              d={`M15 ${y} Q50 ${y - 4} 85 ${y}`}
              stroke={c.strokeSoft}
              strokeWidth="1"
              animate={animate ? { y: [0, -1.2, 0, 1.2, 0] } : undefined}
              transition={animate ? { duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 } : undefined}
            />
          ))}
          <motion.path
            d="M15 54 Q50 48 85 54"
            stroke={c.stroke}
            strokeWidth="2"
            animate={animate ? { y: [0, -0.8, 0, 0.8, 0] } : undefined}
            transition={animate ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
          />
          <motion.circle
            r="2.5"
            fill={c.fill}
            animate={animate ? { cx: [20, 80, 20], cy: [52, 50, 52] } : { cx: 50, cy: 51 } as any}
            transition={animate ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
            {...(!animate && { cx: 50, cy: 51 })}
          />
        </g>
      );

    case "pillar":
      // Authoritative — central "A" with concentric authority rings
      return (
        <g>
          <circle cx="50" cy="50" r="32" stroke={c.strokeSoft} strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="20" stroke={c.stroke} strokeWidth="1.5" />
          <text x="50" y="56" textAnchor="middle" fontSize="14" fontFamily="Fraunces, serif" fontStyle="italic" fill={c.stroke}>A</text>
        </g>
      );

    case "hand":
      // Experiential — spiral slowly draws itself, then a dot pulses at center.
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round">
          <motion.path
            d="M50 50 m 0 -22 a 22 22 0 1 1 -0.1 0 m 4 4 a 18 18 0 1 0 0.1 0 m -4 4 a 14 14 0 1 1 -0.1 0 m 4 4 a 10 10 0 1 0 0.1 0 m -4 4 a 6 6 0 1 1 -0.1 0"
            animate={animate ? { pathLength: [0, 1], opacity: [0.4, 1] } : undefined}
            transition={animate ? { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } : undefined}
          />
          <motion.circle
            cx="50" cy="50" r="2" fill={c.fill} stroke="none"
            animate={animate ? { scale: [1, 1.6, 1], opacity: [1, 0.6, 1] } : undefined}
            transition={animate ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" } : undefined}
            style={{ transformOrigin: "50px 50px" }}
          />
        </g>
      );

    case "sources":
      // Scientific — data points pop in one by one, then loop.
      return (
        <g>
          <rect x="18" y="18" width="64" height="64" rx="4" stroke={c.strokeSoft} strokeWidth="1" fill="none" />
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`h${i}`} x1="18" y1={34 + i * 16} x2="82" y2={34 + i * 16} stroke={c.strokeSoft} strokeWidth="0.5" opacity="0.5" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`v${i}`} x1={34 + i * 16} y1="18" x2={34 + i * 16} y2="82" stroke={c.strokeSoft} strokeWidth="0.5" opacity="0.5" />
          ))}
          {[[32, 62], [44, 50], [56, 56], [68, 42], [40, 70], [62, 68]].map(([x, y], i) => (
            <motion.circle
              key={i} cx={x} cy={y} r="2" fill={c.fill}
              style={{ transformOrigin: `${x}px ${y}px` }}
              animate={animate ? { scale: [0, 1.3, 1, 1, 0], opacity: [0, 1, 1, 1, 0] } : undefined}
              transition={animate ? { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3, times: [0, 0.15, 0.3, 0.85, 1] } : undefined}
            />
          ))}
        </g>
      );

    case "mountain":
      // Reality vs knowledge — wave with point on it, dashed beneath (the map is not the territory)
      return (
        <g fill="none" strokeLinecap="round">
          <path d="M15 55 Q35 35 50 55 T85 55" stroke={c.stroke} strokeWidth="2" />
          <path d="M15 62 Q35 42 50 62 T85 62" stroke={c.strokeSoft} strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="55" cy="55" r="2.5" fill={c.fill} />
          <circle cx="51" cy="61" r="1.5" fill={c.strokeSoft} />
        </g>
      );

    case "challenge":
      // Falsifiability — heartbeat traces left-to-right on loop.
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="30" width="64" height="40" rx="4" stroke={c.strokeSoft} strokeWidth="1" fill="none" />
          <motion.path
            d="M22 50 L36 50 L42 38 L48 62 L54 44 L60 56 L66 50 L78 50"
            animate={animate ? { pathLength: [0, 1, 1], opacity: [0.3, 1, 0.3] } : undefined}
            transition={animate ? { duration: 2.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 1] } : undefined}
          />
        </g>
      );

    case "cycle":
      // Normal science — atom / orbital structure (Kuhn's normal puzzle-solving)
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="1.4">
          <ellipse cx="50" cy="50" rx="30" ry="12" />
          <ellipse cx="50" cy="50" rx="30" ry="12" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="12" transform="rotate(-60 50 50)" />
          <circle cx="50" cy="50" r="3" fill={c.fill} stroke="none" />
          <circle cx="22" cy="50" r="2" fill={c.stroke} stroke="none" />
          <circle cx="78" cy="50" r="2" fill={c.stroke} stroke="none" />
        </g>
      );

    case "compare":
      // Information vs knowledge — bold # divider between i and k
      return (
        <g>
          <text
            x="50"
            y="64"
            textAnchor="middle"
            fontSize="58"
            fontFamily="Fraunces, serif"
            fontWeight="700"
            fill={c.stroke}
          >
            #
          </text>
          <text x="22" y="46" textAnchor="middle" fontSize="13" fontFamily="Fraunces, serif" fontStyle="italic" fill={c.strokeSoft}>i</text>
          <text x="78" y="62" textAnchor="middle" fontSize="13" fontFamily="Fraunces, serif" fontStyle="italic" fill={c.fill}>k</text>
        </g>
      );

    case "versus":
      // Kuhn vs Popper — split square: left fine pruning lines, right concentric burst
      return (
        <g fill="none" strokeLinecap="round">
          {/* Popper side — branching prune */}
          <line x1="28" y1="70" x2="28" y2="40" stroke={c.stroke} strokeWidth="1.5" />
          <line x1="28" y1="50" x2="20" y2="42" stroke={c.stroke} strokeWidth="1.2" />
          <line x1="28" y1="46" x2="36" y2="38" stroke={c.stroke} strokeWidth="1.2" />
          <circle cx="28" cy="38" r="2.5" fill={c.fill} stroke="none" />
          {/* divider */}
          <line x1="50" y1="22" x2="50" y2="78" stroke={c.strokeSoft} strokeWidth="0.8" strokeDasharray="2 3" />
          {/* Kuhn side — concentric rings (paradigm) */}
          <circle cx="72" cy="50" r="14" stroke={c.strokeSoft} strokeWidth="1" />
          <circle cx="72" cy="50" r="9" stroke={c.stroke} strokeWidth="1.4" />
          <circle cx="72" cy="50" r="3" fill={c.fill} stroke="none" />
        </g>
      );

    case "spectrum":
      // Quantitative — ascending bars
      return (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={20 + i * 11} y={70 - i * 8} width="7" height={10 + i * 8} rx="1.5" fill={c.fill} opacity={0.5 + i * 0.08} />
          ))}
          <line x1="16" y1="74" x2="84" y2="74" stroke={c.stroke} strokeWidth="1" />
        </g>
      );

    case "lens":
      // Qualitative — magnifying glass
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="2" strokeLinecap="round">
          <circle cx="42" cy="42" r="20" />
          <line x1="58" y1="58" x2="74" y2="74" />
          <circle cx="42" cy="42" r="10" stroke={c.strokeSoft} strokeWidth="1" />
        </g>
      );

    case "shield":
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M50 18 L75 28 V50 Q75 70 50 82 Q25 70 25 50 V28 Z" fill={c.strokeSoft} fillOpacity="0.3" />
          <path d="M40 50 L48 58 L62 42" strokeWidth="2" />
        </g>
      );

    case "mirror":
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="1.5">
          <ellipse cx="50" cy="50" rx="20" ry="28" />
          <circle cx="44" cy="46" r="1.5" fill={c.stroke} />
          <circle cx="56" cy="46" r="1.5" fill={c.stroke} />
          <path d="M44 58 Q50 62 56 58" strokeLinecap="round" />
        </g>
      );

    case "circuit":
      return (
        <g fill="none" stroke={c.stroke} strokeWidth="1.4">
          <circle cx="50" cy="50" r="10" fill={c.fill} stroke="none" />
          <text x="50" y="54" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600" fill="white">AI</text>
          {[0, 90, 180, 270].map((deg) => {
            const r = (deg * Math.PI) / 180;
            const x = 50 + Math.cos(r) * 28;
            const y = 50 + Math.sin(r) * 28;
            return (
              <g key={deg}>
                <line x1={50 + Math.cos(r) * 12} y1={50 + Math.sin(r) * 12} x2={x} y2={y} stroke={c.strokeSoft} strokeWidth="1" />
                <circle cx={x} cy={y} r="2.5" fill={c.stroke} />
              </g>
            );
          })}
        </g>
      );

    default:
      return <circle cx="50" cy="50" r="18" fill={c.fill} />;
  }
}
