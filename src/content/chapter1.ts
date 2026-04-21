// Content model for the Atlas
// Each concept holds 3 layers: glance (visual + few words), brief (short prose), full (deep text)
// Architecture is built so real chapter text can be pasted into `full` later.

export type VisualKind =
  | "mountain"
  | "sources"
  | "lineage"
  | "pillar"
  | "hand"
  | "challenge"
  | "cycle"
  | "compare"
  | "spectrum"
  | "lens"
  | "shield"
  | "mirror"
  | "circuit"
  | "default";

export interface Concept {
  id: string;
  number: string;       // e.g. "1.2a"
  title: string;
  glance: string;       // 6–14 words
  brief: string;        // 2–4 sentences
  full: string[];       // paragraphs — paste real text here
  visual: VisualKind;
  keyTerms?: string[];
}

export interface ConceptGroup {
  id: string;
  number: string;
  title: string;
  tagline: string;      // one editorial line
  hue: number;          // HSL hue for accent shading
  concepts: Concept[];
}

export const chapter = {
  number: "01",
  title: "The Purpose of Research",
  subtitle: "An atlas of how we come to know things — and how we know that we know.",
  groups: [
    {
      id: "what-is-research",
      number: "01",
      title: "What Is Research?",
      tagline: "The difference between information and knowledge.",
      hue: 200,
      concepts: [
        {
          id: "info-vs-knowledge",
          number: "1.1",
          title: "Information is not knowledge",
          glance: "Information tells. Knowledge understands.",
          brief:
            "We swim in information all day, but information alone is not knowledge. Knowledge is what happens when we make sense of information — interpret it, use it, and understand why it matters.",
          full: [
            "One of the primary purposes of research is to advance knowledge — not knowledge for its own sake, but knowledge that helps humans understand the world. Yet many people confuse knowledge with information, and that is not surprising. We live in a world of constant information.",
            "Information tells us something. It gives us a piece of meaning, such as 'class starts at 8 a.m.' But that information alone does not imply knowledge. Knowledge is understanding the information: what it means, how to use it, why it matters, and sometimes why it happened.",
            "We can have information without knowledge — that happens all the time — but we cannot really have knowledge without information. Research is how we turn the second into the first, systematically.",
          ],
          visual: "compare",
          keyTerms: ["information", "knowledge", "understanding"],
        },
      ],
    },
    {
      id: "how-knowledge",
      number: "02",
      title: "How Knowledge Is Built",
      tagline: "Four sources, one climb.",
      hue: 35,
      concepts: [
        {
          id: "traditional",
          number: "2.1",
          title: "Traditional knowledge",
          glance: "Passed hand to hand, generation to generation.",
          brief:
            "Traditional knowledge is carried across generations through community, culture, and family. It is not unscientific — it is observed, refined, and preserved through practice.",
          full: [
            "Traditional knowledge — as the title suggests — comes from tradition. It is passed down across generations, shared with our community, culture, and close family. Think of the farming practices of Amish communities or the fishing practices of Indigenous groups.",
            "There is logic, rationale, reasoning, and often careful observation wrapped into traditional knowledge. Just because it is traditional does not mean it is irrational; it simply means this is how the knowledge was passed down.",
          ],
          visual: "lineage",
          number: "2.2",
          title: "Authoritative knowledge",
          glance: "We trust it because of who said it.",
          brief:
            "Authoritative knowledge rests on the credibility of its source — a judge, doctor, professor, institution. We accept it not because we fully understand it, but because we trust the authority delivering it.",
          full: [
            "Authoritative knowledge is based on the source — someone we believe to be especially qualified on a subject. The key point is not that we fully understand all of it ourselves, but that the person or institution delivering it carries authority.",
            "This type of knowledge is authoritative because of the social and institutional credibility granted to it — not necessarily because every recipient has deep understanding of it.",
          ],
          visual: "sources",
        },
        {
          id: "experiential",
          number: "2.3",
          title: "Experiential knowledge",
          glance: "You learned it because you lived it.",
          brief:
            "Experiential knowledge starts with doing rather than with abstraction. A child touches something hot and immediately knows. It is deep understanding, but it begins firsthand.",
          full: [
            "Differently from any other kind of knowledge, experiential knowledge comes from doing something. Authoritative and traditional knowledge are often taught in the abstract first; experiential knowledge starts with the practical application.",
            "Children touch something hot and they know not to put their hands there anymore. It hurts. Experiential knowledge comes from experience, from feeling, from doing, from living through something.",
          ],
          visual: "sources",
        },
        {
          id: "scientific",
          number: "2.4",
          title: "Scientific knowledge",
          glance: "Systematic. Testable. Repeatable.",
          brief:
            "Scientific knowledge emerges from human curiosity refined into method. It is systematic, reasonable, testable, and observable in ways that can be repeated, examined, and sometimes refuted.",
          full: [
            "How did scientific knowledge come about? Most likely through human curiosity — the need to observe nature and eventually try to test it. Early observations may well have been carried as traditional knowledge before formalized methods emerged.",
            "Scientific knowledge is systematic, reasonable, testable, and observable in such a way that it can be repeated, examined, and sometimes even refuted.",
          ],
          visual: "sources",
        },
        {
          id: "reality-vs-knowledge",
          number: "2.5",
          title: "Reality vs. knowledge",
          glance: "Climb higher. The mountain stays larger than the view.",
          brief:
            "Reality exists whether we understand it or not. Knowledge is our attempt to interpret it. Research is the climb — better tools, more discipline, a wider view — but never the whole summit.",
          full: [
            "Conducting scientific research surely gets us closer to reality; however, reality and knowledge are two different things. Reality exists whether we fully understand it or not. Knowledge is our attempt to explain, interpret, and make sense of that reality.",
            "A useful image is climbing a mountain. The closer we climb, the more we are able to see. Our view expands. Certain things become clearer. But that does not mean we have reached the top, or that nothing lies beyond what we can currently see.",
            "Research helps us continue the climb. It allows us to move upward with more care, more discipline, and better tools. Research is the process. Scientific knowledge is the product.",
          ],
          visual: "mountain",
          keyTerms: ["reality", "knowledge", "epistemology"],
        },
      ],
    },
    {
      id: "popper",
      number: "03",
      title: "Popper's Falsifiability",
      tagline: "A theory is scientific only if it can be wrong.",
      hue: 14,
      concepts: [
        {
          id: "falsifiability",
          number: "3.1",
          title: "Falsifiability",
          glance: "If nothing could disprove it, it isn't science.",
          brief:
            "Karl Popper argued that a theory is scientific only if it makes claims that could, in principle, be shown false. The theory must take a risk — it must say something the world could contradict.",
          full: [
            "Popper believed that a theory is scientific only if it makes claims that could, in principle, be shown to be false. A theory must take a risk. It must say something clear enough about the world that evidence could challenge it.",
            "He criticized systems such as Marxism and psychoanalysis as too flexible in responding to evidence. Einstein's general relativity, by contrast, made bold claims that could be tested and potentially disproven — and that, for Popper, made it scientific.",
            "Knowledge, in Popper's view, grows through ongoing testing and correction. A theory is proposed, challenged, tested, and revised when it fails. Like pruning a tree: you don't uproot it for every weak branch — you cut what does not hold and let the rest grow stronger.",
          ],
          visual: "challenge",
          keyTerms: ["falsifiability", "Popper", "testability"],
        },
      ],
    },
    {
      id: "kuhn",
      number: "04",
      title: "Kuhn's Scientific Revolutions",
      tagline: "Science doesn't only inch forward. Sometimes it leaps.",
      hue: 280,
      concepts: [
        {
          id: "normal-science",
          number: "4.1",
          title: "Normal science",
          glance: "The accepted way of doing things.",
          brief:
            "Normal science is the long, calm period when researchers work inside a shared framework — asking the kinds of questions that framework allows and trusting its tools.",
          full: [
            "Most scientists, most of the time, work within a shared paradigm. Kuhn called this 'normal science' — solving the puzzles that the current framework defines as worth solving, using the methods it considers legitimate.",
          ],
          visual: "cycle",
        },
        {
          id: "paradigm",
          number: "4.2",
          title: "Paradigm",
          glance: "The shared lens that decides what counts as a question.",
          brief:
            "A paradigm is the accepted way of thinking, asking, and solving in a field. It tells researchers what is worth studying — and quietly, what isn't.",
          full: [
            "For Kuhn, a paradigm is the shared framework of a scientific community — the accepted theories, methods, instruments, and standards. It guides what questions get asked and what counts as a good answer.",
          ],
          visual: "cycle",
          keyTerms: ["paradigm", "Kuhn"],
        },
        {
          id: "anomaly",
          number: "4.3",
          title: "Anomaly",
          glance: "Something the paradigm cannot explain.",
          brief:
            "Anomalies are observations the current framework cannot account for. At first they are dismissed or ignored — but they accumulate.",
          full: [
            "Anomalies are findings that don't fit. Within normal science, a few anomalies are tolerable; they're treated as puzzles, measurement errors, or problems for later. But as anomalies pile up, confidence in the paradigm begins to weaken.",
          ],
          visual: "cycle",
        },
        {
          id: "crisis",
          number: "4.4",
          title: "Crisis",
          glance: "Too many anomalies. The framework wobbles.",
          brief:
            "When anomalies accumulate beyond what the paradigm can absorb, the field enters crisis. Confidence drops; alternative explanations begin to compete for attention.",
          full: [
            "Crisis is the moment when the existing paradigm can no longer make sense of what researchers are seeing. The community starts entertaining ideas it would have dismissed before. The ground gets soft.",
          ],
          visual: "cycle",
        },
        {
          id: "revolution",
          number: "4.5",
          title: "Revolution",
          glance: "A new way of seeing breaks through.",
          brief:
            "A revolution is a non-cumulative leap — an older paradigm is replaced, in whole or in part, by an incompatible new one. Kuhn noted these breakthroughs often come from those new to the field.",
          full: [
            "Kuhn wrote: 'Scientific revolutions are here taken to be those non-cumulative developmental episodes in which an older paradigm is replaced in whole or in part by an incompatible new one.' He also observed that 'almost always the men who achieve these fundamental inventions of a new paradigm have been either very young or very new to the field whose paradigm they change.'",
          ],
          visual: "cycle",
        },
        {
          id: "paradigm-shift",
          number: "4.6",
          title: "Paradigm shift",
          glance: "What was radical becomes the new normal.",
          brief:
            "After a revolution, the new paradigm is gradually accepted and itself becomes normal science — until its own anomalies begin to surface.",
          full: [
            "The cycle is not a straight line. After the paradigm shift, the new framework settles in and becomes the next normal science. The whole structure begins again, on different ground.",
          ],
          visual: "cycle",
          keyTerms: ["paradigm shift"],
        },
      ],
    },
    {
      id: "kuhn-vs-popper",
      number: "05",
      title: "Kuhn vs. Popper",
      tagline: "Two pictures of how science actually moves.",
      hue: 250,
      concepts: [
        {
          id: "kuhn-vs-popper",
          number: "5.1",
          title: "Two pictures of progress",
          glance: "Pruning the tree, or burning the orchard.",
          brief:
            "Popper saw knowledge as continuous testing and correction — gradual, critical, cumulative. Kuhn saw long stretches of conformity broken by dramatic revolutions. Most contemporary scholars say both are right, in different ways.",
          full: [
            "Popper believed a theory is scientific only if it makes claims that could be falsified. Knowledge advances through ongoing testing and revision — gradual, criticism-driven, like pruning a tree.",
            "Kuhn was less interested in a single rule for science and more interested in how scientific communities actually work. For him, science is built around shared paradigms, with long periods of normal work interrupted by major disruptions.",
            "Where does this leave us? Many contemporary scholars say both thinkers help us understand something important. Knowledge can advance through careful testing and revision, but it can also change through larger shifts in how an entire field understands its central problems.",
          ],
          visual: "compare",
        },
      ],
    },
    {
      id: "qualitative",
      number: "06",
      title: "Qualitative Research",
      tagline: "Insight, depth, and the texture of experience.",
      hue: 160,
      concepts: [
        {
          id: "qualitative",
          number: "6.1",
          title: "Qualitative research",
          glance: "Listening for meaning, not just measuring.",
          brief:
            "Qualitative research seeks insight, depth, and detail. It often uses inductive reasoning — beginning with specific observations and moving toward broader understanding, sometimes generating new theory.",
          full: [
            "Qualitative research aims at gaining insight and depth into whatever topic we want to know about. We are not satisfied with simply gathering facts; we want emotion, events, experiences, perspectives, and detail.",
            "A solid qualitative study looks at an issue from various perspectives and attempts to build a richer picture. We can use careful description to bring out minutiae the typical eye might miss.",
            "Qualitative research is often based on inductive reasoning — beginning with specific observations and moving to a broader understanding, which often leads to creating new theories. Researchers follow the meaning in the data and pursue what appears most significant.",
          ],
          visual: "lens",
          keyTerms: ["inductive reasoning", "qualitative"],
        },
      ],
    },
    {
      id: "quantitative",
      number: "07",
      title: "Quantitative Research",
      tagline: "Designed in advance. Measured at scale.",
      hue: 210,
      concepts: [
        {
          id: "quantitative",
          number: "7.1",
          title: "Quantitative research",
          glance: "Plan it precisely. Then measure.",
          brief:
            "Quantitative research front-loads the design. It uses deductive reasoning — starting with broad theory, narrowing to a testable hypothesis, then collecting data systematically to test it.",
          full: [
            "Quantitative research starts with a lot of work up front, before the data are collected. The design is essential because any shortcomings will likely appear in the results. Quantitative researchers know exactly what data are going to be analyzed, how they will be collected, and what procedures will be used.",
            "Quantitative research is commonly based on deductive reasoning — beginning with a broad theory that leads to a specific idea ready to be tested. Precalculations and strong organization give the quantitative researcher the ability to capture large amounts of data.",
          ],
          visual: "spectrum",
          keyTerms: ["deductive reasoning", "quantitative"],
        },
      ],
    },
    {
      id: "mixed",
      number: "08",
      title: "Mixed Methods",
      tagline: "Words and numbers, in conversation.",
      hue: 175,
      concepts: [
        {
          id: "convergent",
          number: "8.1",
          title: "Convergent design",
          glance: "Collect both at once. Compare.",
          brief:
            "Qualitative and quantitative data are gathered in parallel and analyzed separately, then compared to see whether they converge on the same picture.",
          full: [
            "In a convergent design, both strands of data are collected at roughly the same time, analyzed independently, and then merged. The goal is triangulation — checking whether different kinds of evidence point the same way.",
          ],
          visual: "compare",
        },
        {
          id: "explanatory-sequential",
          number: "8.2",
          title: "Explanatory sequential",
          glance: "Numbers first. Then ask why.",
          brief:
            "Quantitative data come first and reveal patterns; qualitative data follow to explain those patterns in human terms.",
          full: [
            "In an explanatory sequential design, the quantitative phase comes first. Once the patterns are visible, qualitative work — interviews, focus groups, case studies — is used to explain what those numbers actually mean to the people involved.",
          ],
          visual: "spectrum",
        },
        {
          id: "exploratory-sequential",
          number: "8.3",
          title: "Exploratory sequential",
          glance: "Listen first. Then measure.",
          brief:
            "Qualitative work comes first — to surface ideas, themes, or instruments — and is followed by quantitative work to test or generalize them.",
          full: [
            "In an exploratory sequential design, qualitative inquiry leads. It surfaces categories, builds instruments, or develops theory. The quantitative phase then tests or measures what the qualitative phase uncovered.",
          ],
          visual: "spectrum",
        },
        {
          id: "embedded",
          number: "8.4",
          title: "Embedded design",
          glance: "One method nested inside the other.",
          brief:
            "One strand plays a supporting role inside a larger study driven by the other — for example, a small qualitative thread inside a large trial.",
          full: [
            "In an embedded design, one type of data is collected within a study primarily driven by the other. A clinical trial, for instance, might embed brief interviews with participants to capture experience alongside outcomes.",
          ],
          visual: "compare",
        },
      ],
    },
    {
      id: "ai",
      number: "09",
      title: "Artificial Intelligence in Research",
      tagline: "A powerful tool. Not a substitute for thinking.",
      hue: 220,
      concepts: [
        {
          id: "ai-uses",
          number: "9.1",
          title: "Uses of AI",
          glance: "A faster ramp to ideas, sources, and structure.",
          brief:
            "AI can help generate angles, refine search terms, organize notes, simplify dense literature, draft code, clean transcripts, and tighten writing. It widens what a researcher can absorb in the same time.",
          full: [
            "AI can help in the early stages — moving from a broad interest to a focused topic, generating keywords, possible angles, subtopics, and questions. It can suggest related concepts during literature search and help organize notes across readings.",
            "It can simplify dense, terminology-heavy peer-reviewed work into digestible pieces, providing a ramp between academia and new researchers. In qualitative work, it may help clean transcripts or suggest preliminary codes; in quantitative work, it may help explain procedures or write code.",
            "It can also support writing — improving grammar, tightening structure, helping you start when you are stuck. But many writers prefer to keep their human voice. AI does not have one.",
          ],
          visual: "circuit",
        },
        {
          id: "ai-limits",
          number: "9.2",
          title: "Limits of AI",
          glance: "It can sound right while being wrong.",
          brief:
            "AI can produce confident, polished language that is simply incorrect — inventing references, misstating theories, oversimplifying. It also lacks lived experience and can reproduce bias from its training data.",
          full: [
            "AI can produce language that sounds confident and polished even when it is wrong. It may invent references, misstate theories, confuse authors, or present inaccurate summaries as facts. This is one of the most dangerous things about AI: it can sound highly competent while being completely mistaken.",
            "AI also lacks lived experience, disciplinary judgment, and real understanding. It does not know what it is like to interview a participant or wrestle with messy data. It can imitate language about those things, but imitation is not understanding.",
            "Bias is another limitation. AI is trained on enormous amounts of human-produced material that can reflect existing stereotypes, inequalities, and blind spots. AI should not be confused with evidence: a suggestion is not a source, a summary is not an analysis.",
          ],
          visual: "shield",
        },
        {
          id: "ai-responsible",
          number: "9.3",
          title: "Responsible use of AI",
          glance: "Verify. Disclose. Protect. Judge.",
          brief:
            "Used responsibly, AI is a valuable assistant. That requires verifying its output, being transparent about its use, protecting participant privacy, and applying your own judgment to anything it produces.",
          full: [
            "First, verify what AI produces. If it gives you a definition, theory summary, source, or interpretation, check it against reliable materials. Verification is not optional.",
            "Second, remain transparent. Different instructors, institutions, and journals have different expectations for disclosing AI use; follow them carefully. Passing AI-generated writing off as fully your own is a serious problem.",
            "Third, protect privacy. Sensitive interview data, private participant information, and restricted datasets should never be dropped into AI tools carelessly.",
            "Fourth, use judgment. AI can help brainstorm interview questions, but cannot tell you whether they are ethically appropriate or culturally sensitive in your context.",
          ],
          visual: "shield",
        },
      ],
    },
    {
      id: "ethics",
      number: "10",
      title: "Ethics and Researcher Responsibility",
      tagline: "The treatment of participants comes first. Always.",
      hue: 0,
      concepts: [
        {
          id: "ethics",
          number: "10.1",
          title: "Ethical principles",
          glance: "Informed consent. Confidentiality. No coercion. No conflict.",
          brief:
            "Research ethics protect the rights and wellbeing of participants. The core obligations include informed consent, confidentiality, voluntary participation, and disclosure of conflicts of interest.",
          full: [
            "Research ethics are the rules and regulations primarily concerned with protecting the rights of people who participate in research. The ethical treatment of participants should always come first.",
            "Informed consent means giving participants a clear, written explanation of the study, its potential risks and benefits, and other important considerations — in their own language when needed.",
            "Confidentiality is the researcher's promise not to disclose identifiable information about participants. Anonymity is stronger still: even the researcher cannot identify the participant.",
            "Voluntary participation must be genuinely voluntary — never coerced by power dynamics. And conflicts of interest, where the study may protect a sponsor or outside agenda, must be disclosed openly.",
          ],
          visual: "shield",
          keyTerms: ["informed consent", "confidentiality", "anonymity", "conflict of interest"],
        },
        {
          id: "tuskegee",
          number: "10.2",
          title: "Why this matters: Tuskegee",
          glance: "Forty years. Six hundred men. No consent. No treatment.",
          brief:
            "From 1932–1972, the U.S. Public Health Service studied untreated syphilis in 600 Black men without informing them or offering the penicillin that became standard in 1942. The harm — and the lasting damage to trust — is why these rules exist.",
          full: [
            "Between 1932 and 1972, the U.S. Public Health Service and the Tuskegee Institute studied the effects of syphilis on the human body. Researchers recruited 600 Black men but never disclosed the study's focus; the men were told they were being treated for 'bad blood.'",
            "Two-thirds had syphilis. Even after penicillin was validated as effective in 1942, none of them received treatment. The study continued for 30 more years and only ended after a leak to the press in the early 1970s.",
            "Only 74 participants survived. Around 40 of their wives were also infected, and 19 children were born with syphilis. The tragedy is measured not only in the people directly harmed, but in the lasting damage to trust — particularly within the Black community.",
          ],
          visual: "shield",
        },
      ],
    },
    {
      id: "bias",
      number: "11",
      title: "Bias, Reflexivity, Objectivity",
      tagline: "The researcher is part of the instrument.",
      hue: 45,
      concepts: [
        {
          id: "objectivity",
          number: "11.1",
          title: "Objectivity & reflexivity",
          glance: "See it from many angles. Then notice your own.",
          brief:
            "Objectivity means trying to see something without letting personal preference take over. Reflexivity adds honesty: noticing the lens you bring — your background, beliefs, and assumptions — and how it may shape your work.",
          full: [
            "Objectivity means trying to perceive something from different angles without allowing personal preferences or judgments to take over. Pure objectivity may be impossible, but we can get closer to it.",
            "Reflexivity is the companion practice — reflecting on who we are, what we assume, and how our background, beliefs, and experiences may shape the research process. Reflexivity does not give up on objectivity; it makes us honest about the lens we bring.",
          ],
          visual: "mirror",
          keyTerms: ["objectivity", "reflexivity", "subjectivity"],
        },
        {
          id: "biases",
          number: "11.2",
          title: "Common biases",
          glance: "Selective observation. Overconfidence. Overgeneralization.",
          brief:
            "Three biases recur in research: focusing only on what fits our theory; trusting our own judgment too much; and drawing big conclusions from too few cases.",
          full: [
            "Selective observation happens when we focus on a specific occurrence or group instead of paying attention to the whole sample — failing, consciously or not, to notice what contradicts our theory.",
            "Overconfidence bias is the researcher's overconfidence in their own abilities, intelligence, or critical thinking — strong enough that they overlook details the study needs.",
            "Overgeneralization happens when we use a small number of cases to draw conclusions about an entire population. We see something once or twice and assume that is how it 'always happens.'",
            "We cannot eliminate all our biases, but we can reduce them — by following accepted rules and being honest about what we bring to the process.",
          ],
          visual: "mirror",
          keyTerms: ["selective observation", "overconfidence", "overgeneralization"],
        },
      ],
    },
  ] satisfies ConceptGroup[],
};

export type Chapter = typeof chapter;

// Flatten for navigation
export const allConcepts: Array<Concept & { groupId: string; groupTitle: string; hue: number }> =
  chapter.groups.flatMap((g) =>
    g.concepts.map((c) => ({ ...c, groupId: g.id, groupTitle: g.title, hue: g.hue })),
  );

export function getConcept(id: string) {
  return allConcepts.find((c) => c.id === id);
}

export function getAdjacent(id: string) {
  const idx = allConcepts.findIndex((c) => c.id === id);
  return {
    prev: idx > 0 ? allConcepts[idx - 1] : null,
    next: idx >= 0 && idx < allConcepts.length - 1 ? allConcepts[idx + 1] : null,
    index: idx,
    total: allConcepts.length,
  };
}
