import { Link, useLocation } from "react-router-dom";
import { Compass, BookOpen, Sparkles } from "lucide-react";

/**
 * BottomNav — phone-style fixed tab bar.
 * Lives inside the .phone-shell so it stays anchored to the app frame.
 */
export function BottomNav() {
  const { pathname } = useLocation();
  const tabs = [
    { to: "/", label: "Atlas", icon: Compass, active: pathname === "/" || pathname.startsWith("/c/") },
    { to: "/read", label: "Read", icon: BookOpen, active: pathname.startsWith("/read") },
    { to: "/saved", label: "Trail", icon: Sparkles, active: pathname.startsWith("/saved") },
  ];

  return (
    <nav
      aria-label="Primary"
      className="absolute bottom-0 left-0 right-0 z-40 glass border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex items-stretch justify-around px-2 py-2">
        {tabs.map(({ to, label, icon: Icon, active }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              className="flex flex-col items-center gap-1 rounded-2xl px-3 py-2 transition-colors"
            >
              <span
                className={`flex h-9 w-14 items-center justify-center rounded-full transition-all ${
                  active ? "bg-accent text-accent-foreground" : "text-ink-muted"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span
                className={`text-[10px] font-medium tracking-wide ${
                  active ? "text-ink" : "text-ink-muted"
                }`}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
