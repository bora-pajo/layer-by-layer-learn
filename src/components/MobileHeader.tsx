import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import { ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";
import tokoroLogo from "@/assets/tokoro-logo.png";

interface Props {
  title?: string;
  eyebrow?: string;
  back?: boolean;
  right?: ReactNode;
  showThemeToggle?: boolean;
  showLogo?: boolean;
  logoClassName?: string;
}

/**
 * Compact, clean mobile header. RORO logo on left when not back. Optional theme toggle.
 */
export function MobileHeader({ title, eyebrow, back = false, right, showThemeToggle = true, showLogo = true, logoClassName = "h-7" }: Props) {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  return (
    <header
      className="sticky top-0 z-30 glass"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex items-center gap-2 px-5 py-3">
        {back ? (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink active:scale-95 transition-transform"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : showLogo ? (
          <Link to="/" className="flex items-center" aria-label="Tokoro home">
            <img src={tokoroLogo} alt="Tokoro" className={`${logoClassName} w-auto dark:invert-0 invert`} />
          </Link>
        ) : null}

        <div className="flex-1 min-w-0 px-1">
          {eyebrow && (
            <div className="font-mono text-[10px] tracking-[0.18em] text-ink-muted uppercase truncate">
              {eyebrow}
            </div>
          )}
          {title && (
            <div className="font-display text-base text-ink truncate">{title}</div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showThemeToggle && (
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink active:scale-95 transition-transform"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          {right}
        </div>
      </div>
    </header>
  );
}
