import { Link } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { chapter } from "@/content/chapter1";
import { ArrowUpRight } from "lucide-react";

const ReadPage = () => {
  return (
    <div className="min-h-screen paper-grain">
      <TopBar />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">
          READ MODE · CHAPTER {chapter.number}
        </div>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink text-balance md:text-6xl">
          {chapter.title}
        </h1>
        <p className="mt-6 font-display text-xl italic text-ink-soft text-pretty md:text-2xl">
          {chapter.subtitle}
        </p>

        <div className="mt-16 space-y-20">
          {chapter.groups.map((group) => (
            <section key={group.id} className="scroll-mt-24" id={group.id}>
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: `hsl(${group.hue} 65% 52%)` }}
                />
                <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                  REGION {group.number}
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl text-ink text-balance md:text-4xl">
                {group.title}
              </h2>
              <p className="mt-3 font-display text-lg italic text-ink-soft text-pretty">
                {group.tagline}
              </p>

              <div className="mt-10 space-y-14">
                {group.concepts.map((c) => (
                  <div key={c.id} className="reading-column">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                        {c.number}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <Link
                        to={`/c/${c.id}`}
                        className="inline-flex items-center gap-1 text-[11px] text-ink-muted hover:text-accent"
                      >
                        view in atlas <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-ink text-balance">{c.title}</h3>
                    {c.full.map((p, i) => (
                      <p
                        key={i}
                        className="mt-4 font-display text-lg leading-[1.75] text-ink-soft text-pretty"
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

        <div className="mt-24 border-t border-border pt-8 text-center text-xs text-ink-muted">
          End of Chapter 01.
        </div>
      </article>
    </div>
  );
};

export default ReadPage;
