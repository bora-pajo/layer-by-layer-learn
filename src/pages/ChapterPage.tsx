import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { ConceptCard } from "@/components/ConceptCard";
import { chapters } from "@/content/chapter1";
import { useProgress } from "@/hooks/useProgress";

const ChapterPage = () => {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();
  const { visited, store } = useProgress();

  const chapter = chapters.find((c) => String(c.number) === number);

  if (!chapter) {
    return (
      <div className="phone-shell pb-safe">
        <MobileHeader back />
        <div className="px-6 py-20 text-center">
          <h1 className="font-display text-2xl text-ink">Chapter not found.</h1>
          <Link to="/" className="mt-6 inline-block text-accent underline">
            Back to chapters
          </Link>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="phone-shell pb-safe">
      <MobileHeader />

      {/* Back link */}
      <div className="px-5 pt-2">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted hover:text-ink transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          All chapters
        </button>
      </div>

      {/* Chapter heading */}
      <section className="px-6 pt-4 pb-6 animate-fade-up">
        <h1 className="font-display text-[34px] leading-[1.05] text-ink text-balance">
          {chapter.title}
        </h1>
      </section>

      {/* Groups + concepts */}
      <section className="space-y-8 pb-10">
        {chapter.groups.map((group) => (
          <article key={group.id} id={group.id} className="scroll-mt-20">
            <div className="space-y-2 px-3">
              {group.concepts.map((c) => (
                <ConceptCard
                  key={c.id}
                  concept={c}
                  hue={group.hue}
                  visited={visited.has(c.id)}
                  layerProgress={store[c.id]?.layers}
                  category={
                    group.tagline.split(".")[0].split(",")[0].toLowerCase().slice(0, 16) ||
                    "epistemology"
                  }
                />
              ))}
            </div>
          </article>
        ))}
      </section>

      <BottomNav />
    </div>
  );
};

export default ChapterPage;
