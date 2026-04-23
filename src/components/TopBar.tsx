import { Link, useLocation } from "react-router-dom";
import { Compass, BookOpen } from "lucide-react";

export function TopBar() {
  const location = useLocation();
  const inRead = location.pathname.startsWith("/read");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">CH · 01</div>
          <div className="h-4 w-px bg-border" />
          <div className="font-display text-base text-ink group-hover:text-accent transition-colors">
            Full text read
          </div>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-1 text-xs">
          <Link
            to="/"
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
              !inRead ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Explore</span>
          </Link>
          <Link
            to="/read"
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
              inRead ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Read</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
