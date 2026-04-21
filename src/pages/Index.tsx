import { Link } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { ConceptCard } from "@/components/ConceptCard";
import { chapter, allConcepts } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { visited } = useProgress();
  const pct = Math.round((visited.size / allConcepts.length) * 100);

  return (
    <div className="min-h-screen paper-grain">
      <TopBar />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8 animate-fade-up">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-ink-muted">
              <span>CHAPTER 01</span>
              <span className="h-px w-12 bg-ink/30" />
              <span>{allConcepts.length} CONCEPTS</span>
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink text-balance md:text-7xl">
              {chapter.title}.
            </h1>
            <p className="mt-6 max-w-xl font-display text-lg italic text-ink-soft text-pretty md:text-xl">
              {chapter.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#atlas"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-transform hover:-translate-y-0.5"
              >
                Enter the atlas
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/read"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink hover:border-ink"
              >
                Read linearly instead
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4 animate-fade-up [animation-delay:120ms]">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-paper">
              <div className="font-mono text-[10px] tracking-widest text-ink-muted">HOW IT WORKS</div>
              <ol className="mt-4 space-y-4">
                {[
                  ["1", "Glance", "A picture and a few words. Get the idea fast."],
                  ["2", "Brief", "A short, plain explanation. Two minutes."],
                  ["3", "Full", "The complete passage, when you want depth."],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-4">
                    <span className="font-display text-2xl text-accent leading-none">{n}</span>
                    <div>
                      <div className="font-display text-base text-ink">{t}</div>
                      <div className="text-xs text-ink-muted text-pretty">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              {visited.size > 0 && (
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between text-xs text-ink-muted">
                    <span>Your trail</span>
                    <span className="font-mono">{visited.size} / {allConcepts.length}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-accent transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Atlas */}
      <section id="atlas" className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-12 flex items-end justify-between border-b border-ink/10 pb-6">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-ink-muted">THE ATLAS</div>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Eleven concept regions.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ink-muted md:block">
            Wander freely. Click any card to peel back its layers.
          </p>
        </div>

        <div className="space-y-24">
          {chapter.groups.map((group, gi) => (
            <article key={group.id} id={group.id} className="scroll-mt-24">
              <header className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: `hsl(${group.hue} 65% 52%)` }}
                    />
                    <span className="font-mono text-[10px] tracking-widest text-ink-muted">
                      REGION {group.number}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-ink text-balance md:text-3xl">
                    {group.title}
                  </h3>
                </div>
                <p className="md:col-span-7 md:col-start-6 font-display text-lg italic text-ink-soft text-pretty">
                  {group.tagline}
                </p>
              </header>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.concepts.map((c) => (
                  <ConceptCard key={c.id} concept={c} hue={group.hue} groupId={group.id} />
                ))}
              </div>

              {gi < chapter.groups.length - 1 && (
                <div className="mt-24 ink-rule" aria-hidden />
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted">
          <div className="font-mono tracking-widest">THE ATLAS · CHAPTER 01</div>
          <div className="font-display italic">A new way of reading research methods.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
