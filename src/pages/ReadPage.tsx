import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ReaderControls } from "@/components/ReaderControls";
import { chapters } from "@/content/chapter1";
import { ArrowUpRight } from "lucide-react";

const PREF_KEY = "reader:prefs:v1";

const ReadPage = () => {
  const [fontSize, setFontSize] = useState(17);
  const [lineHeight, setLineHeight] = useState(1.7);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PREF_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (typeof p.fontSize === "number") setFontSize(p.fontSize);
        if (typeof p.lineHeight === "number") setLineHeight(p.lineHeight);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({ fontSize, lineHeight }));
    } catch {
      /* ignore */
    }
  }, [fontSize, lineHeight]);

  // Derived sizing — keep proportional hierarchy
  const headingScale = fontSize / 17;
  const paragraphStyle = { fontSize: `${fontSize}px`, lineHeight };

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader eyebrow={`Read mode · ${chapters.length} chapters`} title="Full text read" />

      <ReaderControls
        fontSize={fontSize}
        lineHeight={lineHeight}
        onFontSize={setFontSize}
        onLineHeight={setLineHeight}
      />

      <article className="px-5 pt-6">
        <div className="space-y-16">
          {chapters.map((chapter) => (
            <section key={chapter.number} id={`ch-${chapter.number}`} className="scroll-mt-20">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
                Chapter {chapter.number}
              </div>
              <h1
                className="mt-2 font-display leading-tight text-ink text-balance"
                style={{ fontSize: `${1.85 * headingScale}rem` }}
              >
                {chapter.title}
              </h1>
              <div className="mt-10 space-y-12">
                {chapter.groups.map((group) => (
                  <section key={group.id} id={group.id} className="scroll-mt-20">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: `hsl(${group.hue} 90% 65%)` }}
                      />
                      <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                        {chapter.number}.{group.number}
                      </span>
                    </div>
                    <h2
                      className="mt-2 font-display text-ink text-balance"
                      style={{ fontSize: `${1.45 * headingScale}rem` }}
                    >
                      {group.title}
                    </h2>
                    <p
                      className="mt-1 font-display italic text-ink-soft text-pretty"
                      style={{ fontSize: `${0.9 * headingScale}rem` }}
                    >
                      {group.tagline}
                    </p>

                    <div className="mt-6 space-y-10">
                      {group.concepts.map((c) => (
                        <div key={c.id} className="reading-column">
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                              {c.number}
                            </span>
                            <span className="h-px flex-1 bg-border" />
                            <Link
                              to={`/c/${c.id}`}
                              className="inline-flex items-center gap-1 text-[10px] text-accent"
                            >
                              open <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          </div>
                          <h3
                            className="mt-2 font-display text-ink text-balance"
                            style={{ fontSize: `${1.2 * headingScale}rem` }}
                          >
                            {c.title}
                          </h3>
                          {c.full.map((p, i) => (
                            <p
                              key={i}
                              className="mt-3 font-display text-ink-soft text-pretty"
                              style={paragraphStyle}
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 mb-4 rounded-2xl border border-dashed border-border p-5 text-center">
          <div className="font-display text-base text-ink">End of available chapters</div>
        </div>
      </article>

      <BottomNav />
    </div>
  );
};

export default ReadPage;
