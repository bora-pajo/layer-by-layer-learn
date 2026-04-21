import { useEffect, useState } from "react";

const KEY = "atlas:visited";

export function useProgress() {
  const [visited, setVisited] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(Array.from(visited)));
    } catch {
      /* ignore */
    }
  }, [visited]);

  function markVisited(id: string) {
    setVisited((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  function reset() {
    setVisited(new Set());
  }

  return { visited, markVisited, reset };
}
