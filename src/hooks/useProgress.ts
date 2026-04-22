import { useEffect, useState } from "react";

/**
 * Per-concept progress across the 4 layers (glance/brief/example/full).
 * Stored in localStorage so the trail persists between visits.
 */
export type Layer = "glance" | "brief" | "example" | "full";
export const LAYERS: Layer[] = ["glance", "brief", "example", "full"];

export interface ConceptProgress {
  layers: Partial<Record<Layer, number>>; // layer -> last-visited timestamp
  lastLayer: Layer;
  lastVisited: number;
}

const KEY = "atlas:progress:v2";
const LEGACY_KEY = "atlas:visited";

type Store = Record<string, ConceptProgress>;

function loadInitial(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Store;
    // Migrate from the old visited-set format
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const ids: string[] = JSON.parse(legacy);
      const now = Date.now();
      const migrated: Store = {};
      ids.forEach((id, i) => {
        migrated[id] = {
          layers: { glance: now - (ids.length - i) * 1000 },
          lastLayer: "glance",
          lastVisited: now - (ids.length - i) * 1000,
        };
      });
      return migrated;
    }
  } catch {
    /* ignore */
  }
  return {};
}

export function useProgress() {
  const [store, setStore] = useState<Store>(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(store));
    } catch {
      /* ignore */
    }
  }, [store]);

  function markLayer(id: string, layer: Layer) {
    setStore((prev) => {
      const now = Date.now();
      const existing = prev[id];
      const layers = { ...(existing?.layers ?? {}), [layer]: now };
      return {
        ...prev,
        [id]: { layers, lastLayer: layer, lastVisited: now },
      };
    });
  }

  // Backwards-compat shim: marking "visited" === marking the glance layer.
  function markVisited(id: string) {
    markLayer(id, "glance");
  }

  function reset() {
    setStore({});
  }

  // Derived helpers
  const visited = new Set(Object.keys(store));

  function getProgress(id: string): ConceptProgress | undefined {
    return store[id];
  }

  function layersCompleted(id: string): number {
    const p = store[id];
    if (!p) return 0;
    return LAYERS.filter((l) => p.layers[l]).length;
  }

  function lastVisitedConcept(): { id: string; layer: Layer } | null {
    let best: { id: string; layer: Layer; ts: number } | null = null;
    for (const [id, p] of Object.entries(store)) {
      if (!best || p.lastVisited > best.ts) {
        best = { id, layer: p.lastLayer, ts: p.lastVisited };
      }
    }
    return best ? { id: best.id, layer: best.layer } : null;
  }

  return {
    visited,
    store,
    markVisited,
    markLayer,
    reset,
    getProgress,
    layersCompleted,
    lastVisitedConcept,
  };
}
