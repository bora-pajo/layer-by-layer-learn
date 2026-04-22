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
  | "versus"
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
  example?: {
    title: string;      // short headline for the applied example
    body: string[];     // 1–3 paragraphs of an applied, real-world scenario
  };
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
          glance: "Information is fast and unprocessed. Knowledge takes time and understanding.",
          brief:
            "We swim in information all day, but information alone is not knowledge. Knowledge is what happens when we make sense of information — interpret it, use it, and understand why it matters.",
          full: [
            "One of the primary purposes of research is to advance knowledge — not knowledge for its own sake, but knowledge that helps humans understand the world. Yet many people confuse knowledge with information, and that is not surprising. We live in a world of constant information.",
            "Information tells us something. It gives us a piece of meaning, such as 'class starts at 8 a.m.' But that information alone does not imply knowledge. Knowledge is understanding the information: what it means, how to use it, why it matters, and sometimes why it happened.",
            "We can have information without knowledge — that happens all the time — but we cannot really have knowledge without information. Research is how we turn the second into the first, systematically.",
          ],
          visual: "compare",
          keyTerms: ["information", "knowledge", "understanding"],
          example: {
            title: "The weather forecast",
            body: [
              "Information: your phone says '70% chance of rain at 4 PM.' That's a fact, delivered fast.",
              "Knowledge: a farmer reads the same forecast and decides to harvest now, knowing how this field drains, what stage the crop is at, and how a wet week would compound. Same data — but interpreted, contextualized, and acted on.",
            ],
          },
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
          example: {
            title: "Grandmother's sourdough",
            body: [
              "A grandmother teaches her granddaughter to bake sourdough — when the starter is ready, how the dough should feel, why you slash the loaf before the oven. None of it is written down.",
              "The know-how has been refined across generations of trial and error. It is rigorous in its own way, and most of it would survive a chemist's scrutiny — but it travels by hand and voice, not by paper.",
            ],
          },
        },
        {
          id: "authoritative",
          number: "2.2",
          title: "Authoritative knowledge",
          glance: "We trust it because of who said it.",
          brief:
            "Authoritative knowledge rests on the credibility of its source — a judge, doctor, professor, institution. We accept it not because we fully understand it, but because we trust the authority delivering it.",
          full: [
            "Authoritative knowledge is based on the source — someone we believe to be especially qualified on a subject. The key point is not that we fully understand all of it ourselves, but that the person or institution delivering it carries authority.",
            "This type of knowledge is authoritative because of the social and institutional credibility granted to it — not necessarily because every recipient has deep understanding of it.",
          ],
          visual: "pillar",
          example: {
            title: "The doctor's diagnosis",
            body: [
              "Your doctor tells you the chest pain is muscular, not cardiac. You don't read the ECG yourself or review the differential — you accept the conclusion because of the institution, the training, and the license behind it.",
              "That trust isn't blind; it's social. The credibility of the source is doing most of the epistemic work.",
            ],
          },
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
          visual: "hand",
          example: {
            title: "Learning to ride a bike",
            body: [
              "No one ever truly learned to ride a bike from a textbook. You can read about balance, momentum, and counter-steering all day — and still fall the first time you try.",
              "What teaches you is the skinned knee, the wobble, the moment your body finds the line. The knowledge lives in the doing.",
            ],
          },
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
          example: {
            title: "Does this drug actually work?",
            body: [
              "A pharmaceutical company tests a new blood-pressure drug. They define the population, randomly assign participants to drug or placebo, blind the doctors and the patients, and pre-register what they'll measure.",
              "Months later, the trial is run again by an independent lab. Same procedure, similar result. Now the claim has the shape of scientific knowledge: systematic, testable, repeatable, and open to being wrong.",
            ],
          },
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
          example: {
            title: "Pluto, briefly a planet",
            body: [
              "For 76 years, Pluto was a planet. In 2006, after better telescopes revealed many similar bodies in the outer solar system, astronomers redefined 'planet' and Pluto was reclassified.",
              "Pluto itself didn't change. Reality stayed exactly where it was. What changed was our knowledge — the categories and explanations we use to make sense of what's out there.",
            ],
          },
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
          example: {
            title: "Eddington's eclipse, 1919",
            body: [
              "Einstein's general relativity predicted that light from distant stars would bend by a precise amount as it passed the Sun. If the bending was wrong, the theory was wrong — full stop.",
              "During a solar eclipse in 1919, Arthur Eddington photographed stars near the Sun's edge and measured the deflection. It matched. The theory had taken a real risk and survived — and that, for Popper, is what made it scientific in the first place.",
            ],
          },
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
          example: {
            title: "Adding decimal places to a constant",
            body: [
              "For decades, physicists have measured the gravitational constant with ever-finer precision — refining apparatus, controlling for vibration, pinning down another decimal place.",
              "Nobody is questioning gravity. The framework is accepted; the work is sharpening what's inside it. That's normal science: careful, important, unglamorous puzzle-solving.",
            ],
          },
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
          example: {
            title: "What economics decides to count",
            body: [
              "Mainstream economics has long centered on rational actors, markets, and equilibrium. That paradigm shapes which questions feel serious (How does a tax change consumer behavior?) and which feel fringe (How do social norms reshape what counts as 'rational'?).",
              "Behavioral economists eventually pushed the second kind of question into the mainstream. The paradigm didn't just answer questions — it had been quietly deciding which questions were worth asking.",
            ],
          },
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
          example: {
            title: "Mercury's wobbling orbit",
            body: [
              "Newtonian physics predicted Mercury's orbit beautifully — almost. There was a tiny precession in its perihelion that the equations couldn't quite account for.",
              "For decades, this was treated as a measurement quirk or a missing planet (the imagined 'Vulcan'). It wasn't until Einstein that the anomaly was explained — by replacing the framework, not by patching it.",
            ],
          },
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
          example: {
            title: "Physics around 1900",
            body: [
              "By the late 1800s, classical physics was supposed to be nearly finished. Then black-body radiation, the photoelectric effect, and atomic spectra all refused to behave.",
              "The community didn't quietly add a footnote — it entered open crisis. Within twenty years, ideas that had once sounded absurd (quanta, wave-particle duality) were on the table because nothing else could explain what was being seen.",
            ],
          },
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
          example: {
            title: "Plate tectonics",
            body: [
              "For most of the 20th century, geologists treated continents as fixed. Alfred Wegener's idea that they drifted was dismissed for decades — partly because he was a meteorologist, not a geologist.",
              "When seafloor-spreading evidence finally accumulated in the 1960s, the field flipped. The new framework wasn't a refinement of the old one — it replaced it. Outsiders, again, helped force the leap.",
            ],
          },
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
          example: {
            title: "Bacteria and ulcers",
            body: [
              "For decades, stomach ulcers were 'obviously' caused by stress and spicy food. Then Marshall and Warren proposed that a bacterium — H. pylori — was the real culprit. The medical community resisted; Marshall famously drank a culture of it himself to prove the point.",
              "Today, treating ulcers with antibiotics is the standard of care. The radical claim quietly became the textbook answer — which is exactly when the next anomaly gets ready to surface.",
            ],
          },
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
          visual: "versus",
          example: {
            title: "How a vaccine actually gets accepted",
            body: [
              "Popper's view: each candidate vaccine is a falsifiable claim. Trials test it; if efficacy or safety fails, the claim is killed and a new one is proposed. Knowledge prunes forward.",
              "Kuhn's view: behind the trials sits a whole paradigm — germ theory, immunology, statistical inference, regulatory norms. When mRNA vaccines arrived, the paradigm itself stretched and shifted under public, political, and scientific pressure. Both lenses describe something real about what happened.",
            ],
          },
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
          example: {
            title: "Why patients skip their meds",
            body: [
              "A health researcher wants to understand why diabetic patients in a clinic are skipping medication. Instead of a survey, she sits with twenty patients for long, open conversations.",
              "Themes start to surface: cost, side effects, distrust of the doctor, a complicated relationship with feeling 'sick.' She didn't know what she'd find before she started — and the categories that emerge become the foundation for new theory and, eventually, better questionnaires.",
            ],
          },
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
          example: {
            title: "Does class size affect test scores?",
            body: [
              "Theory predicts that smaller classes should improve learning. A researcher operationalizes this: she defines 'small' (≤18) and 'large' (≥28), picks the standardized test, locks the analysis plan, and pre-registers the hypothesis before touching any data.",
              "Then she pulls scores from 4,000 classrooms. Because the design was nailed down up front, the result — whichever way it goes — is a clean test of the prediction, not a story massaged out of the numbers.",
            ],
          },
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
          example: {
            title: "Remote work satisfaction",
            body: [
              "A company runs a survey of 800 employees scoring satisfaction with remote work, while at the same time conducting 30 in-depth interviews. Both data sets are analyzed independently.",
              "The numbers say satisfaction is high. The interviews surface loneliness and blurred work-life boundaries. The two strands meet — and the convergence (and tension) tells a richer story than either alone.",
            ],
          },
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
          example: {
            title: "Why is this school underperforming?",
            body: [
              "A district analyzes test scores across 40 schools and identifies one that consistently underperforms relative to demographics. The numbers flag the where — but not the why.",
              "Researchers then go in: interviews with teachers, focus groups with students, observation of classrooms. The qualitative phase explains what the quantitative phase could only point at.",
            ],
          },
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
          example: {
            title: "Designing a new burnout scale",
            body: [
              "Existing burnout questionnaires don't seem to fit gig-economy workers. So a research team starts qualitatively — interviewing 25 drivers and freelancers about exhaustion, control, and meaning.",
              "From those interviews they draft items, refine them, and then run the new scale on 1,500 workers to test reliability and structure. Listening built the instrument; measurement validated it.",
            ],
          },
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
          example: {
            title: "A trial with a human thread",
            body: [
              "A large randomized trial tests a new chemotherapy regimen. The primary outcomes are biomedical — survival, recurrence, side-effect rates.",
              "Inside that trial, a small qualitative arm interviews a subset of patients about quality of life and decision-making. The numbers carry the study; the embedded interviews keep the human experience visible inside it.",
            ],
          },
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
          example: {
            title: "Ramping into a literature review",
            body: [
              "A first-year grad student wants to study 'misinformation,' but the topic is huge. She asks an AI to suggest sub-angles, neighboring fields, and possible search terms.",
              "Within an hour she has a richer map of the territory: keywords she didn't know, related theories, candidate authors. She still has to read the actual papers — but she's no longer staring at a blank page.",
            ],
          },
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
          example: {
            title: "The fabricated citation",
            body: [
              "A student asks an AI to summarize debates on a niche topic. The answer is fluent, structured, and includes a citation to a 2017 paper by a plausible-sounding author in a real journal.",
              "The paper does not exist. The journal is real, the author has published — but not that article. Confident, polished, completely wrong: the most dangerous failure mode of these tools.",
            ],
          },
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
          example: {
            title: "Cleaning interview transcripts — carefully",
            body: [
              "A researcher uses AI to clean up filler words in interview transcripts. Before doing so, she removes participant names and identifying details, checks her IRB protocol, and notes the AI use in her methods section.",
              "She also spot-checks the cleaned transcripts against the originals to make sure no meaning was quietly altered. Verification, transparency, privacy, judgment — all four, every time.",
            ],
          },
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
          example: {
            title: "An interview study, done right",
            body: [
              "A researcher studying caregiver stress meets each participant with a written consent form in their preferred language, explains risks (emotional discomfort) and benefits (none direct), and emphasizes that they can stop at any time.",
              "Names are replaced with codes. Recordings are encrypted. The funder — a healthcare network with a stake in the findings — is disclosed in every publication. None of this is optional; it's the floor.",
            ],
          },
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
          example: {
            title: "Why consent forms exist",
            body: [
              "Imagine being told for forty years that you were being treated, while researchers actively withheld a cure that had existed since 1942. That is not a thought experiment — it happened, to 600 men in Macon County, Alabama.",
              "Every modern requirement — informed consent, IRB review, the right to withdraw, mandatory disclosure — exists because, without them, this is what 'research' has been allowed to mean.",
            ],
          },
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
          example: {
            title: "The researcher in her own study",
            body: [
              "A sociologist who grew up working-class is studying how working-class students navigate elite universities. Pretending she has no relationship to the topic would be dishonest — and would quietly shape her interview questions anyway.",
              "Instead, she writes a positionality statement: what she brings, what she might miss, what she might over-see. That doesn't eliminate the lens — it makes the lens visible to her readers, and to herself.",
            ],
          },
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
          example: {
            title: "Three small failures, one weak study",
            body: [
              "A researcher convinced that a wellness app 'works' quotes mostly the participants who loved it (selective observation). She trusts her read of the interviews so completely that she skips a second coder (overconfidence). She concludes from 12 users that the app helps 'people with anxiety' (overgeneralization).",
              "None of these on its own is fatal. Together, they are the difference between a finding and a story the researcher wanted to tell.",
            ],
          },
        },
      ],
    },
  ] satisfies ConceptGroup[],
};

export type Chapter = typeof chapter;

// Multi-chapter registry. Add new chapters here.
import { chapter2 } from "./chapter2";
export const chapters = [chapter, chapter2];

// Flatten for navigation across all chapters
export const allConcepts: Array<
  Concept & { groupId: string; groupTitle: string; hue: number; chapterNumber: string }
> = chapters.flatMap((ch) =>
  ch.groups.flatMap((g) =>
    g.concepts.map((c) => ({
      ...c,
      groupId: g.id,
      groupTitle: g.title,
      hue: g.hue,
      chapterNumber: ch.number,
    })),
  ),
);

export function getConcept(id: string) {
  return allConcepts.find((c) => c.id === id);
}

export function getGroup(groupId: string) {
  for (const ch of chapters) {
    const g = ch.groups.find((g) => g.id === groupId);
    if (g) return g;
  }
  return undefined;
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

