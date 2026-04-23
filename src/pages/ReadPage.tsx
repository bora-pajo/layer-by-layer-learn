import { Link } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { chapters } from "@/content/chapter1";
import { ArrowUpRight } from "lucide-react";

const ReadPage = () => {
  return (
    <div className="phone-shell pb-safe">
      <MobileHeader title="Full text read" />

      <article className="px-5 pt-6">
        <div className="space-y-16">
          {chapters.map((chapter) => (
            <section key={chapter.number} id={`ch-${chapter.number}`} className="scroll-mt-20">
              <h1 className="font-display text-3xl leading-tight text-ink text-balance">
                {chapter.title}
              </h1>

              <div className="mt-10 space-y-12">
                {chapter.groups.map((group) => (
                  <section key={group.id} id={group.id} className="scroll-mt-20">
                    <h2 className="font-display text-2xl text-ink text-balance">
                      {group.title}
                    </h2>

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
                          <h3 className="mt-2 font-display text-xl text-ink text-balance">{c.title}</h3>
                          {c.full.map((p, i) => (
                            <p
                              key={i}
                              className="mt-3 font-display text-[16px] leading-[1.7] text-ink-soft text-pretty"
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
