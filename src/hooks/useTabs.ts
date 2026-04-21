import { useEffect, useState } from "react";

const KEY = "roro:tabs";

export type TabbedItem = {
  id: string;
  tabbedAt: number;
  note?: string;
};

export function useTabs() {
  const [tabs, setTabs] = useState<TabbedItem[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(tabs));
    } catch {
      /* ignore */
    }
  }, [tabs]);

  function isTabbed(id: string) {
    return tabs.some((t) => t.id === id);
  }

  function toggleTab(id: string) {
    setTabs((prev) =>
      prev.some((t) => t.id === id)
        ? prev.filter((t) => t.id !== id)
        : [...prev, { id, tabbedAt: Date.now() }],
    );
  }

  function setNote(id: string, note: string) {
    setTabs((prev) => {
      const exists = prev.some((t) => t.id === id);
      if (!exists) return [...prev, { id, tabbedAt: Date.now(), note }];
      return prev.map((t) => (t.id === id ? { ...t, note } : t));
    });
  }

  function getNote(id: string) {
    return tabs.find((t) => t.id === id)?.note ?? "";
  }

  function remove(id: string) {
    setTabs((prev) => prev.filter((t) => t.id !== id));
  }

  return { tabs, isTabbed, toggleTab, setNote, getNote, remove };
}
