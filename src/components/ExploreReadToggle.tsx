import { Link, useLocation } from "react-router-dom";

/**
 * Toggle pill: Explore / Read — sits in hero area, matches reference.
 */
export function ExploreReadToggle() {
  const { pathname } = useLocation();
  const inRead = pathname.startsWith("/read");
  return (
    <div className="inline-flex items-center rounded-full bg-surface-2 p-1">
      <Link
        to="/"
        className={`rounded-full px-5 py-1.5 font-display text-[14px] transition-colors ${
          !inRead ? "bg-surface text-ink shadow-soft" : "text-ink-muted"
        }`}
      >
        Explore
      </Link>
      <Link
        to="/read"
        className={`rounded-full px-5 py-1.5 font-display text-[14px] transition-colors ${
          inRead ? "bg-surface text-ink shadow-soft" : "text-ink-muted"
        }`}
      >
        Read
      </Link>
    </div>
  );
}
