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
  subtitle: "How we come to know things — and how we know that we know.",
  groups: [
    {
      id: "knowledge",
      number: "01",
      title: "Knowledge",
      tagline: "What knowledge is, and what it is not.",
      hue: 200,
      concepts: [
        {
          id: "information-vs-knowledge",
          number: "1.1",
          title: "Information vs. Knowledge",
          glance: "Your For You Page knows a thousand facts about the world before breakfast.",
          brief: "Let me start with something that happens to every one of you every single morning. You wake up, you reach for your phone, and within about four seconds you have absorbed what I would generously call a firehose of information.",
          full: [
            "Let me start with something that happens to every one of you every single morning. You wake up, you reach for your phone, and within about four seconds you have absorbed what I would generously call a firehose of information. Election results. Someone's dog. A recipe you'll never cook.",
            "Stock prices. A war. A meme. Now, here is the question I want you to sit with: how much of that did you actually know by the time you put the phone down? I don't mean \"did you see it.\" I mean, can you explain it, defend it, apply it, teach it to someone else?",
            "That is the line. Information is just stuff arriving at you. Knowledge is the result of doing something with that stuff — wrestling with it, questioning it, placing it next to what you already understand. The entire social media economy is built on moving information. It is almost allergic to producing knowledge, because knowledge is slow and information is fast, and attention is money. So when I ask you to build knowledge in this course, I am asking you to do the unfashionable thing — to slow down and make sense of what you are receiving. That is research, at its most basic level.",
          ],
          visual: "compare",
          example: {
            title: "In one image",
            body: [
              "Your For You Page knows a thousand facts about the world before breakfast. None of that is knowledge until you understand why it matters, what's true in it, and what to do with it.",
            ],
          },
        },
        {
          id: "scientific-knowledge-is-just-one-kind-of-knowledge",
          number: "1.2",
          title: "Scientific knowledge is just one kind of knowledge",
          glance: "Your grandmother's recipe for getting a baby to sleep is not scientific knowledge.",
          brief: "I want to kill a snobbish habit before it takes root. There is a tendency among newly minted research students to walk out of their first methods class and start dismissing everything that is not peer-reviewed.",
          full: [
            "I want to kill a snobbish habit before it takes root. There is a tendency among newly minted research students to walk out of their first methods class and start dismissing everything that is not peer-reviewed. Your mother's folk remedy? Unscientific. Your grandfather's fishing advice? Unscientific.",
            "The way your auntie knows it is going to rain from the way her knee aches? Unscientific. Stop. Scientific knowledge is a particular kind of knowledge — one that gets built through a particular system of testing and observation. It is powerful, and it is what this course is about. But it is not the only kind of knowledge that has ever helped a human being survive.",
            "Traditional knowledge has kept communities alive for thousands of years. Authoritative knowledge is how you know not to grab the hot pan when the chef tells you not to. Experiential knowledge is what you earned the first and only time you touched a hot stove. All real. All useful. Scientific knowledge is distinctive because it is systematic, testable, and repeatable — that is what earns its authority. But don't confuse distinctive with superior in every sense.",
          ],
          visual: "sources",
          example: {
            title: "In one image",
            body: [
              "Your grandmother's recipe for getting a baby to sleep is not scientific knowledge. It is also not wrong. Those are two different claims.",
            ],
          },
        },
        {
          id: "reality-vs-knowledge",
          number: "1.3",
          title: "Reality vs. Knowledge",
          glance: "The map is not the territory.",
          brief: "Here is perhaps the most humbling idea in the philosophy of science, and I want you to hold it close throughout your careers. Reality is there.",
          full: [
            "Here is perhaps the most humbling idea in the philosophy of science, and I want you to hold it close throughout your careers. Reality is there. Reality is doing its thing whether you study it or not. Your knowledge about reality is your best attempt to describe it. Those are not the same.",
            "I love the mountain-climbing image the textbook uses, and I'll add to it. Every researcher is climbing. The higher you climb, the more you can see. You see patterns you couldn't see from the valley. But at no point do you ever reach the peak and declare, \"I now see everything.\" Anyone in science who tells you they do is either selling you something or hasn't climbed high enough to see how much mountain remains.",
            "This is why humility is not a soft skill in research. It is a methodological requirement. Your findings are provisional. They are the view from where you happen to be standing today. Tomorrow, someone will climb higher.",
          ],
          visual: "mountain",
          example: {
            title: "In one image",
            body: [
              "The map is not the territory. A map of Manhattan that fits in your pocket is useful precisely because it leaves things out.",
            ],
          },
        },
        {
          id: "research-is-the-process-scientific-knowledge-is-th",
          number: "1.4",
          title: "Research is the process; scientific knowledge is the product",
          glance: "Your finished recipe is knowledge.",
          brief: "Students often ask me, \"Why do we spend so much time on methodology? Just tell me the findings.\" And I understand the impulse.",
          full: [
            "Students often ask me, \"Why do we spend so much time on methodology? Just tell me the findings.\" And I understand the impulse. The findings are the exciting part. The findings get on the news.",
            "But imagine someone hands you a stunning claim — \"couples who argue daily are actually happier\" — with no description of how they figured it out. Do you believe it? Of course not. Not yet.",
            "Because the how is what converts a statement into knowledge. Research is the engine room. It is less glamorous than the ballroom upstairs, but nothing is happening in that ballroom without the engine. Every single time you read a paper, a headline, or a LinkedIn post claiming a dramatic new finding, the first question your research-trained brain should fire off is: how did they come to know this? Because the answer to that question is where the credibility lives.",
          ],
          visual: "cycle",
          example: {
            title: "In one image",
            body: [
              "Your finished recipe is knowledge. The chopping, the tasting, the failed first attempt — that's methodology. Without the method, the finished dish is just a rumor.",
            ],
          },
        },
      ],
    },
    {
      id: "popper-kuhn",
      number: "02",
      title: "Popper & Kuhn",
      tagline: "How knowledge is tested, and how it shifts.",
      hue: 14,
      concepts: [
        {
          id: "popper-s-falsifiability",
          number: "2.1",
          title: "Popper's falsifiability",
          glance: "\"Mercury retrograde explains why things go wrong\" can't be falsified — whatever happens, someone…",
          brief: "Karl Popper, wonderful philosopher, sharp as anything, gave us the single cleanest test you can apply to any claim: what evidence, if you saw it, would make you change your mind? If the answer is \"no evidence could ever change my mind,\" then congratulations, you've left the realm of science and entered the realm of belief.",
          full: [
            "Karl Popper, wonderful philosopher, sharp as anything, gave us the single cleanest test you can apply to any claim: what evidence, if you saw it, would make you change your mind? If the answer is \"no evidence could ever change my mind,\" then congratulations, you've left the realm of science and entered the realm of belief. Popper watched his intellectual contemporaries in the 1920s and 30s make these sweeping theories — Marxism, Freudian psychoanalysis — and he noticed something sneaky. No matter what happened in the world, the theory always had an answer.",
            "The revolution didn't happen? Ah, false consciousness. The patient got worse? Ah, repression.",
            "And Popper said: wait a minute. If nothing can disprove it, what is it actually claiming? Meanwhile, Einstein had said: here are three specific predictions about the bending of light — if they don't happen, my theory is wrong. That is science. That is a theory willing to die for its claims. Popper's challenge to you, and to your own future research, is this: be brave enough to state your claims clearly enough that they could be wrong.",
          ],
          visual: "challenge",
          example: {
            title: "In one image",
            body: [
              "\"Mercury retrograde explains why things go wrong\" can't be falsified — whatever happens, someone will say mercury did it. That's why it isn't science.",
            ],
          },
        },
        {
          id: "knowledge-grows-by-putting-ideas-at-risk",
          number: "2.2",
          title: "Knowledge grows by putting ideas at risk",
          glance: "Netflix doesn't find its best shows by defending the ones it has.",
          brief: "There is a deep, almost counterintuitive truth in Popper's work, and it is this: knowledge does not grow by proving things true. Knowledge grows by trying like hell to prove them wrong and noticing what survives.",
          full: [
            "There is a deep, almost counterintuitive truth in Popper's work, and it is this: knowledge does not grow by proving things true. Knowledge grows by trying like hell to prove them wrong and noticing what survives. Think about that for a moment. Your instinct, when you have a hypothesis you love, is to go looking for evidence that confirms it.",
            "That is human. That is natural. That is also a trap. Because the world is enormous, and you can find confirming evidence for almost anything if you squint hard enough.",
            "The discipline of science is the opposite instinct — to point your firepower at your own theory and see if it can survive the shelling. The theories that survive repeated attacks — those are the ones worth trusting. Not forever. Just until someone hits them with something bigger. So please, please do not fall in love with your hypothesis. Fall in love with testing it.",
          ],
          visual: "shield",
          example: {
            title: "In one image",
            body: [
              "Netflix doesn't find its best shows by defending the ones it has. It kills them. That's how the catalog gets better.",
            ],
          },
        },
        {
          id: "kuhn-s-normal-science-paradigms",
          number: "2.3",
          title: "Kuhn's normal science & paradigms",
          glance: "Most scientists are not the people who invented chemistry.",
          brief: "Kuhn comes along and essentially says: Popper is describing a fantasy. Look at what scientists actually do all day.",
          full: [
            "Kuhn comes along and essentially says: Popper is describing a fantasy. Look at what scientists actually do all day. Most of them aren't on the barricades trying to burn down their own discipline. Most of them are doing careful, painstaking, often unglamorous work inside a framework that their entire community has already agreed on. He called this normal science, and he meant it as a description, not a dig. Normal science is how almost all knowledge gets built — slowly, within the rules of the game.",
            "Your paradigm tells you what counts as a question worth asking. What methods are respectable. What evidence is admissible. What gets you published and what gets you laughed out of the room. Every discipline has one. Physics has one.",
            "Psychology has one. Gender studies has one. And most of the work within those disciplines is about extending and refining the existing framework, not overturning it. This is not a bad thing. This is how science mostly moves. Which leads us, beautifully, into the question — what happens when the framework starts to not work?",
          ],
          visual: "cycle",
          example: {
            title: "In one image",
            body: [
              "Most scientists are not the people who invented chemistry. They are the people doing beautiful, patient work inside the chemistry we already have. That is normal science.",
            ],
          },
        },
        {
          id: "change-comes-through-crisis-not-steady-correction",
          number: "2.4",
          title: "Change comes through crisis, not steady correction",
          glance: "The iPhone didn't win because BlackBerry gradually improved.",
          brief: "Here is where Kuhn gets dramatic, and I'll confess I love this part of his work. He says big scientific change doesn't come from gentle correction.",
          full: [
            "Here is where Kuhn gets dramatic, and I'll confess I love this part of his work. He says big scientific change doesn't come from gentle correction. It comes from crisis. For a long time, anomalies pile up. Little results that don't fit. Observations that the paradigm can sort of explain, if you squint. Problems that get labeled \"interesting edge cases.\" Scientists, being loyal to their paradigm, set these aside.",
            "But the pile grows. And at some point, the pile of exceptions gets bigger than the rule. The framework starts to wobble. That is the crisis. And out of the crisis, someone — often someone young, often someone new to the field — proposes a completely different way of seeing the problem. If it sticks, you have a scientific revolution. The old way doesn't get improved; it gets replaced.",
            "Geocentric universe, out. Heliocentric universe, in. Classical physics, out. Relativity and quantum, in. These were not corrections. These were regime changes. And the crucial insight for you is this: we are probably living inside paradigms right now that will look, in fifty years, as strange as the geocentric model looks to us today. We just don't know yet which ones.",
          ],
          visual: "spectrum",
          example: {
            title: "In one image",
            body: [
              "The iPhone didn't win because BlackBerry gradually improved. BlackBerry was doing fine. Then the rules of the game changed overnight, and the old paradigm couldn't compete.",
            ],
          },
        },
        {
          id: "popper-and-kuhn-are-both-right",
          number: "2.5",
          title: "Popper and Kuhn are both right",
          glance: "A phone gets a little better every year — that's Popper.",
          brief: "Students love to ask me: so who was right, Popper or Kuhn? And I always smile, because it is the wrong question.",
          full: [
            "Students love to ask me: so who was right, Popper or Kuhn? And I always smile, because it is the wrong question. They are describing different phenomena. Popper is describing how individual claims within a paradigm get tested, refined, and replaced.",
            "That happens constantly. Every day. Every good study is a little act of Popperian trial by fire. Kuhn is describing what happens occasionally, at the level of the entire field, when enough trials by fire have accumulated to call the whole framework into question.",
            "Both are happening in every scientific discipline at every moment. Most of what scientists do is Popperian — small-scale testing. Every once in a while, that small-scale testing triggers something bigger, and you get a Kuhnian shift. Think of it this way: Popper describes the day-to-day weather. Kuhn describes the climate. They are not competing; they are operating at different scales.",
          ],
          visual: "versus",
          example: {
            title: "In one image",
            body: [
              "A phone gets a little better every year — that's Popper. Then one year the whole category changes and you don't have a \"phone\" anymore, you have a \"smartphone.\" That's Kuhn.",
            ],
          },
        },
        {
          id: "newcomers-drive-paradigm-shifts",
          number: "2.6",
          title: "Newcomers drive paradigm shifts",
          glance: "Instagram wasn't built by Kodak.",
          brief: "This is the point in Kuhn's book where I always look at my undergraduates and I say, pay attention, this one's for you. Kuhn himself noticed that the big framework-shattering ideas in science tend to come from people who are either very young or very new to the field.",
          full: [
            "This is the point in Kuhn's book where I always look at my undergraduates and I say, pay attention, this one's for you. Kuhn himself noticed that the big framework-shattering ideas in science tend to come from people who are either very young or very new to the field. And when you think about it, it makes total sense. If you've spent thirty years mastering a paradigm, that paradigm is your career.",
            "You've built grants around it, collaborators around it, a reputation around it. The cost of admitting it might be wrong is enormous. But a first-year graduate student? They've got nothing to lose.",
            "They look at the paradigm and say, \"wait — why do we do it this way?\" And that question, which the insiders have stopped asking, is often the crowbar that opens the next paradigm. So when you feel like the new kid who doesn't know what they're doing — that is actually your superpower. Protect it. The longer you stay in this work, the harder it becomes to ask the obvious questions. Ask them now.",
          ],
          visual: "lens",
          example: {
            title: "In one image",
            body: [
              "Instagram wasn't built by Kodak. It was built by two people in their twenties who hadn't spent thirty years believing film was the future.",
            ],
          },
        },
      ],
    },
    {
      id: "methodology",
      number: "03",
      title: "Methodology",
      tagline: "Choosing the right tool for the question.",
      hue: 280,
      concepts: [
        {
          id: "no-single-best-method",
          number: "3.1",
          title: "No single \"best\" method",
          glance: "You don't ask \"is a hammer better than a screwdriver?\" You ask \"what am…",
          brief: "One of the more exhausting debates in the social sciences, which I hope you will refuse to participate in, is the ongoing tribal warfare between qualitative and quantitative researchers. Each side thinks the other is doing something slightly embarrassing.",
          full: [
            "One of the more exhausting debates in the social sciences, which I hope you will refuse to participate in, is the ongoing tribal warfare between qualitative and quantitative researchers. Each side thinks the other is doing something slightly embarrassing. The quantitative people think qualitative work is glorified journalism. The qualitative people think quantitative work is dehumanizing reductionism.",
            "Both sides are wrong and both sides are boring. The real answer, the grown-up answer, is that your method has to fit your question. If I want to know how many young adults in this country are experiencing anxiety, I need numbers. Lots of them.",
            "If I want to know what it feels like to be one of those young adults — what they do at 3 a.m., what they've stopped telling their parents — numbers will fail me completely. I need stories. Different questions, different tools. And the best researchers I've ever known are fluent in both.",
          ],
          visual: "compare",
          example: {
            title: "In one image",
            body: [
              "You don't ask \"is a hammer better than a screwdriver?\" You ask \"what am I trying to build?\"",
            ],
          },
        },
        {
          id: "qualitative-research-inductive-depth",
          number: "3.2",
          title: "Qualitative research = inductive, depth",
          glance: "A journalist who spends six months inside one community and comes out understanding it…",
          brief: "Qualitative research is often misunderstood as \"the easy one\" because there is no statistics, and I want to correct that immediately. It is not easy.",
          full: [
            "Qualitative research is often misunderstood as \"the easy one\" because there is no statistics, and I want to correct that immediately. It is not easy. It is a different kind of hard. Quantitative work asks you to be a careful engineer — everything planned, everything measured.",
            "Qualitative work asks you to be a careful listener — open, patient, willing to let the data tell you something you weren't expecting. It is inductive, which means you start with observation and let the pattern rise from the bottom up. You do not walk into your interviews clutching a theory. You walk in with your ears open.",
            "And here is the tension: you still have to be systematic. It is not \"let's just have a chat and see what happens.\" There are rigorous protocols, coding schemes, careful documentation, reflexivity journals. Qualitative research at its best is deep empathy married to methodological discipline. That marriage is hard. When it works, it produces insight that no spreadsheet could ever surface.",
          ],
          visual: "lineage",
          example: {
            title: "In one image",
            body: [
              "A journalist who spends six months inside one community and comes out understanding it deeply — that's inductive qualitative work. They didn't start with a theory. They let the theory emerge.",
            ],
          },
        },
        {
          id: "quantitative-research-deductive-breadth",
          number: "3.3",
          title: "Quantitative research = deductive, breadth",
          glance: "A/B testing — you have a hypothesis, you set up a controlled measurement, you…",
          brief: "Quantitative work is the opposite of jazz. It is very much composed.",
          full: [
            "Quantitative work is the opposite of jazz. It is very much composed. Almost all the hard thinking happens before a single data point is collected. You start with a theory — someone else's, usually — and you deduce a specific, measurable prediction from it. If Vygotsky's theory about social learning is right, then children in friendly environments should learn faster than children in isolated ones. That is your hypothesis.",
            "Now you have to design an instrument precise enough to detect the difference. You have to select a sample large enough to tell signal from noise. You have to decide, in advance, what will count as an answer. Once the study begins, you are largely locked in. If you suddenly change the questionnaire halfway through, you've destroyed your own data. This is why quantitative research rewards foresight.",
            "You are trying to anticipate every way the universe could confuse you before you start measuring it. And what you gain, in exchange for that rigidity, is reach. You can study 600 people. You can study 60,000. You can make claims about populations, not just individuals. It is a trade — specificity for depth in exchange for breadth of scope.",
          ],
          visual: "sources",
          example: {
            title: "In one image",
            body: [
              "A/B testing — you have a hypothesis, you set up a controlled measurement, you run it on thousands of users, you let the numbers answer. Classic deductive quantitative work.",
            ],
          },
        },
        {
          id: "depth-vs-breadth-trade-off",
          number: "3.4",
          title: "Depth vs. breadth trade-off",
          glance: "A documentary filmmaker versus a Pew Research poll.",
          brief: "I want you to internalize something, because it will save you from a lot of methodological confusion later: depth and breadth are trade-offs, not a hierarchy. The qualitative researcher knows twelve people extraordinarily well.",
          full: [
            "I want you to internalize something, because it will save you from a lot of methodological confusion later: depth and breadth are trade-offs, not a hierarchy. The qualitative researcher knows twelve people extraordinarily well. The quantitative researcher knows twelve thousand people superficially.",
            "Which is better? That is a nonsense question. They are different goods.",
            "If you need to know whether a new policy will work across an entire state, you need the twelve thousand. If you need to know why the policy worked for some and failed for others, you need the twelve. A mature research field needs both, always, in conversation. When I read a paper that only uses one, I am always asking — what did they miss by not doing the other? Which is a healthy question to carry into every paper you'll ever read.",
          ],
          visual: "versus",
          example: {
            title: "In one image",
            body: [
              "A documentary filmmaker versus a Pew Research poll. Both tell you about youth mental health. Neither could have been the other.",
            ],
          },
        },
        {
          id: "mixed-methods-four-designs-each-with-a-purpose",
          number: "3.5",
          title: "Mixed methods — four designs, each with a purpose",
          glance: "Convergent = running two cameras at the same wedding.",
          brief: "Mixed methods gets marketed as \"the best of both worlds,\" and that is almost true, with an important caveat: it is also the most expensive of both worlds. You are doing twice the work.",
          full: [
            "Mixed methods gets marketed as \"the best of both worlds,\" and that is almost true, with an important caveat: it is also the most expensive of both worlds. You are doing twice the work. So the design you choose really matters, and this is where students often glaze over, but please don't.",
            "Convergent is when you want corroboration — you run qualitative and quantitative at the same time on the same phenomenon and see if they agree. Explanatory sequential is when the numbers gave you a weird result and now you need stories to explain it. Exploratory sequential is the reverse — you heard something interesting in interviews and now you need numbers to see if it scales.",
            "Embedded is when one method is the main event and the other plays a supporting role. Pick wrong, and you have doubled your work for no reason. Pick right, and you get an answer neither method alone could have given you.",
          ],
          visual: "circuit",
          example: {
            title: "In one image",
            body: [
              "Convergent = running two cameras at the same wedding. Explanatory sequential = numbers first, then interviews to explain the weird results. Exploratory sequential = interviews first, then a survey to see if it generalizes. Embedded = a main dish with a side that enriches it.",
            ],
          },
        },
      ],
    },
    {
      id: "ai-in-research",
      number: "04",
      title: "AI in Research",
      tagline: "Powerful tool, fallible assistant.",
      hue: 160,
      concepts: [
        {
          id: "ai-is-a-tool-not-a-researcher",
          number: "4.1",
          title: "AI is a tool, not a researcher",
          glance: "GPS will get you to the restaurant.",
          brief: "Let me say something about AI that I suspect every one of you needs to hear, whether you want to or not. AI is a tool.",
          full: [
            "Let me say something about AI that I suspect every one of you needs to hear, whether you want to or not. AI is a tool. That is not a dismissal — tools are extraordinary things. The printing press was a tool. The microscope was a tool. They changed what was humanly possible.",
            "AI is in that company. But none of those tools ever replaced the thinker. The microscope didn't discover bacteria. Pasteur did, using a microscope. You need to hold that distinction close. When you use AI in your research, you are Pasteur with the microscope.",
            "The tool is not the researcher. The tool has no stake in the question. It doesn't care whether the answer is right. You care. You have to care. Because if you don't, there is no one in the room who does.",
          ],
          visual: "circuit",
          example: {
            title: "In one image",
            body: [
              "GPS will get you to the restaurant. It will not tell you whether you should be going to dinner with that person.",
            ],
          },
        },
        {
          id: "information-knowledge-distinction-applies-to-ai",
          number: "4.2",
          title: "Information/knowledge distinction applies to AI",
          glance: "ChatGPT can give you ten paragraphs about Kuhn in twenty seconds.",
          brief: "Remember the very first distinction I made — information versus knowledge? AI is basically an industrial-scale information machine.",
          full: [
            "Remember the very first distinction I made — information versus knowledge? AI is basically an industrial-scale information machine. It will generate fluent, polished, footnote-ready text on nearly anything, faster than you can read it. That is impressive. That is also exactly where the danger lives, because it feels like knowledge.",
            "It reads like knowledge. It has the shape of knowledge. But knowledge requires that a mind has wrestled with the material and understood it. And AI hasn't done that. You haven't done that, if you just copy-pasted the output.",
            "So when I see a student submit an assignment that is clearly AI-generated, what bothers me isn't the ethical violation, though that is real. What bothers me is that the student has robbed themselves of the only part that matters — the act of understanding. AI can give you the information. Only you can turn it into knowledge. Don't outsource the most important part.",
          ],
          visual: "compare",
          example: {
            title: "In one image",
            body: [
              "ChatGPT can give you ten paragraphs about Kuhn in twenty seconds. That is information. It is not you understanding Kuhn.",
            ],
          },
        },
        {
          id: "ai-can-be-confidently-wrong",
          number: "4.3",
          title: "AI can be confidently wrong",
          glance: "It will cite a paper that doesn't exist, in a journal that doesn't exist,…",
          brief: "I want to warn you about the single most dangerous feature of large language models, and it is this: they produce wrong information with exactly the same tone and polish as they produce right information. There is no tell.",
          full: [
            "I want to warn you about the single most dangerous feature of large language models, and it is this: they produce wrong information with exactly the same tone and polish as they produce right information. There is no tell. When a human being doesn't know something, their voice usually gives them away. They hedge. They stumble.",
            "Their sentences get mushier. AI does none of this. It will invent a source, misattribute a quotation, confuse two theorists, and hand it to you in prose so smooth you'd publish it. This is not a bug that will be fixed in the next version. This is what these systems are — pattern completers, not truth-tellers.",
            "So the rule, for the rest of your lives in research: verify. Every citation. Every claim. Every statistic. If AI told you, it is a hypothesis, not a fact. Treat it as such.",
          ],
          visual: "challenge",
          example: {
            title: "In one image",
            body: [
              "It will cite a paper that doesn't exist, in a journal that doesn't exist, by an author who sounds plausible — and it will do it with perfect punctuation. The confidence is the trap.",
            ],
          },
        },
        {
          id: "ai-carries-bias",
          number: "4.4",
          title: "AI carries bias",
          glance: "Ask an AI image generator for \"a CEO\" and see who shows up in…",
          brief: "Every AI system you have ever used was trained on an enormous pile of text or images that humans produced. And humans, collectively, are biased.",
          full: [
            "Every AI system you have ever used was trained on an enormous pile of text or images that humans produced. And humans, collectively, are biased. Our writing is biased. Our photographs are biased.",
            "Our internet is absolutely dripping with bias. So the models that learn from us inherit it — not because the engineers wanted them to, but because you can't extract the biases from the training data without gutting the data itself. The model doesn't know it is biased. It can't.",
            "It just reproduces patterns. Which means if you are using AI to generate research questions, to draft surveys, to interpret themes, to describe populations — you are, without any malicious intent, importing a set of assumptions you didn't choose and can't see. The researcher's job here is to stay alert. Don't assume the tool is neutral. No tool ever is. Your job is to be the check on it.",
          ],
          visual: "mirror",
          example: {
            title: "In one image",
            body: [
              "Ask an AI image generator for \"a CEO\" and see who shows up in the first ten images. The training data has opinions, even when the model doesn't know it.",
            ],
          },
        },
        {
          id: "the-ethics-of-ai-rest-with-the-user",
          number: "4.5",
          title: "The ethics of AI rest with the user",
          glance: "The knife didn't do anything wrong.",
          brief: "There is a very comfortable idea floating around right now that AI is somehow a moral agent — that it can be ethical or unethical, responsible or irresponsible. I want you to reject that framing entirely.",
          full: [
            "There is a very comfortable idea floating around right now that AI is somehow a moral agent — that it can be ethical or unethical, responsible or irresponsible. I want you to reject that framing entirely. AI has no ethics. It has no intentions.",
            "It cannot be held accountable because there is no one home to hold accountable. The ethics of AI, every time, are the ethics of the human being pressing the buttons. If you use AI to fabricate data, that is academic dishonesty — and it is your dishonesty, not the machine's. If you use AI to analyze sensitive interview data without proper consent, that is a confidentiality violation — and it is your violation.",
            "The tool doesn't absolve you. It never has, with any tool. You are responsible for what you do with what you are given. In research, that responsibility is the entire job.",
          ],
          visual: "shield",
          example: {
            title: "In one image",
            body: [
              "The knife didn't do anything wrong. You did.",
            ],
          },
        },
        {
          id: "ai-is-not-a-source-a-participant-or-a-substitute-f",
          number: "4.6",
          title: "AI is not a source, a participant, or a substitute for analysis",
          glance: "\"My AI says Gen Z values authenticity\" is not a finding.",
          brief: "There is a sloppy habit creeping into student work that I want to head off at the pass. People are starting to treat AI output as if it were evidence.",
          full: [
            "There is a sloppy habit creeping into student work that I want to head off at the pass. People are starting to treat AI output as if it were evidence. \"I asked ChatGPT and it said…\" — stop. That is not a citation.",
            "That is not a source. That is the output of a statistical guessing machine, and it has no standing in a research paper. Similarly: if you are doing qualitative analysis and you ask AI to identify themes in your interview data, AI's suggestions are not analysis. They are hypotheses.",
            "You still have to go back to the data and verify whether those themes are really there, whether they hold up, whether they misrepresent your participants. AI can speed up the labor. It cannot do the thinking. And the thinking is what you are being paid, trained, and trusted to do.",
          ],
          visual: "lens",
          example: {
            title: "In one image",
            body: [
              "\"My AI says Gen Z values authenticity\" is not a finding. Gen Z saying it is.",
            ],
          },
        },
      ],
    },
    {
      id: "ethics",
      number: "05",
      title: "Ethics",
      tagline: "Why every method rests on this foundation.",
      hue: 350,
      concepts: [
        {
          id: "ethics-come-first",
          number: "5.1",
          title: "Ethics come first",
          glance: "The participant who walks into your study in good faith is owed more than…",
          brief: "Everything we have talked about today — methodology, theory, paradigms, AI — all of it sits on top of a foundation that we have not yet named directly, and that foundation is research ethics. People are not data points.",
          full: [
            "Everything we have talked about today — methodology, theory, paradigms, AI — all of it sits on top of a foundation that we have not yet named directly, and that foundation is research ethics. People are not data points. They are people.",
            "They are entrusting you, often at some personal risk, with information about their lives. The moment a participant walks into your study, they have extended you a piece of their trust, and you are absolutely obligated to protect it. Informed consent is not bureaucratic theater.",
            "Confidentiality is not a courtesy. These are promises. And the reason they are promises rather than suggestions is that research, done badly, has historically hurt real human beings. Which brings us, unavoidably, to Tuskegee.",
          ],
          visual: "shield",
          example: {
            title: "In one image",
            body: [
              "The participant who walks into your study in good faith is owed more than a polite thank-you. They are owed protection.",
            ],
          },
        },
        {
          id: "history-matters-tuskegee-is-not-a-footnote",
          number: "5.2",
          title: "History matters — Tuskegee is not a footnote",
          glance: "The distrust many Black Americans have of the medical system did not come from nowhere.",
          brief: "I want to talk about Tuskegee, and I want to talk about it carefully, because it matters and because it is easy to treat it as a historical curiosity. Between 1932 and 1972 — and note those dates, because 1972 is not ancient history, it is within the lifetime of people you know — the United States Public Health Service conducted a study on hundreds of Black men in Alabama who had syphilis.",
          full: [
            "I want to talk about Tuskegee, and I want to talk about it carefully, because it matters and because it is easy to treat it as a historical curiosity. Between 1932 and 1972 — and note those dates, because 1972 is not ancient history, it is within the lifetime of people you know — the United States Public Health Service conducted a study on hundreds of Black men in Alabama who had syphilis. The researchers deliberately withheld treatment. Even after penicillin was proven effective in 1942, they withheld it. For thirty more years.",
            "They lied to the participants. They lied to the participants' families. Men died. Wives were infected. Children were born with congenital syphilis.",
            "And when this was finally exposed in the 1970s, it was exposed through a journalist, not a whistleblower inside the profession. The legacy of Tuskegee is not just the people who died. It is the multigenerational distrust of medical research in the Black community, which persists today, and which costs lives. When I teach ethics, I teach Tuskegee not as a cautionary tale but as a debt. Every rule in your IRB packet is written in the suffering of people who did not need to suffer. Do not treat those rules as paperwork.",
          ],
          visual: "pillar",
          example: {
            title: "In one image",
            body: [
              "The distrust many Black Americans have of the medical system did not come from nowhere. It was earned, by researchers, over forty years of deliberate harm.",
            ],
          },
        },
        {
          id: "objectivity-is-imperfect-but-still-required",
          number: "5.3",
          title: "Objectivity is imperfect but still required",
          glance: "You can't remove your fingerprints from the work.",
          brief: "There is a long, slightly tedious philosophical debate about whether perfect objectivity is possible, and my honest answer, after a career of doing this, is: probably not. You are a human being.",
          full: [
            "There is a long, slightly tedious philosophical debate about whether perfect objectivity is possible, and my honest answer, after a career of doing this, is: probably not. You are a human being. You bring a perspective. Your perspective affects what you notice, what you measure, what you write down, what you ignore.",
            "That is the bad news. The good news is that imperfect objectivity is still enormously better than no objectivity at all. You may not be able to eliminate your bias, but you can reduce it, acknowledge it, triangulate against it, submit it to peer review, and design studies that let other researchers check your work. The goal isn't perfection.",
            "The goal is honest discipline. Someone who claims to be perfectly objective is lying to you or to themselves. Someone who says, \"here are my assumptions, here are the steps I took to limit their influence, here is what you should watch for\" — that person you can trust. That person is doing the work.",
          ],
          visual: "mirror",
          example: {
            title: "In one image",
            body: [
              "You can't remove your fingerprints from the work. You can wash your hands, though.",
            ],
          },
        },
        {
          id: "reflexivity-complements-objectivity",
          number: "5.4",
          title: "Reflexivity complements objectivity",
          glance: "The filmmaker who acknowledges their own perspective in the voiceover is often more trustworthy…",
          brief: "Reflexivity is an idea I wish every discipline had adopted sooner than it did. The old ideal in science was that the researcher should be invisible — a neutral lens, no fingerprints, no point of view.",
          full: [
            "Reflexivity is an idea I wish every discipline had adopted sooner than it did. The old ideal in science was that the researcher should be invisible — a neutral lens, no fingerprints, no point of view. Qualitative researchers, especially, pushed back on that and said: that is not possible, and pretending it is makes us less rigorous, not more.",
            "Reflexivity is the practice of being honest about who you are in the work. If I am studying religious communities and I grew up in one, that shapes what I hear and what I miss — and acknowledging it is not a weakness, it is methodological honesty. Reflexivity doesn't mean the study becomes about you.",
            "It means you show your work. You tell the reader where you stood when you took the measurement. That transparency is what lets other researchers evaluate what you saw. Invisible researchers aren't neutral — they are just hidden, and hidden influences are the most dangerous kind.",
          ],
          visual: "lens",
          example: {
            title: "In one image",
            body: [
              "The filmmaker who acknowledges their own perspective in the voiceover is often more trustworthy than the one who pretends to be invisible.",
            ],
          },
        },
        {
          id: "common-bias-traps-selective-observation-overconfid",
          number: "5.5",
          title: "Common bias traps: selective observation, overconfidence, overgeneralization",
          glance: "Selective observation = watching only the TikToks that confirm your thesis.",
          brief: "There are three bias traps that I want you to have on permanent mental alert throughout your research lives, because they are subtle and they get everyone. First, selective observation.",
          full: [
            "There are three bias traps that I want you to have on permanent mental alert throughout your research lives, because they are subtle and they get everyone. First, selective observation. This is the one where you, without meaning to, notice the data points that support your hypothesis and just sort of… don't notice the ones that don't. It happens quietly. You are not being dishonest; you are being human. The defense is systematic documentation — write everything down, even the stuff that annoys you. Second, overconfidence bias.",
            "You are smart. You got into a good program. You got here. You are used to being the sharpest person in most rooms. That confidence, unchecked, will cause you to miss things because you didn't think you needed to look twice. Check twice anyway. Third, overgeneralization.",
            "You interviewed eight people. You found a pattern. The pattern does not necessarily hold for eighty thousand people. Resist the urge to make your small beautiful finding explain the whole world. These three biases are not flaws of bad researchers. They are features of all researchers. The only protection is knowing they are there and building your methods to catch them.",
          ],
          visual: "mirror",
          example: {
            title: "In one image",
            body: [
              "Selective observation = watching only the TikToks that confirm your thesis. Overconfidence = believing you've cracked it because you're smart. Overgeneralization = \"my three friends think this, so Gen Z thinks this.\"",
            ],
          },
        },
        {
          id: "subjectivity-is-a-double-edged-sword",
          number: "5.6",
          title: "Subjectivity is a double-edged sword",
          glance: "Your perspective is what lets you notice the question nobody else was asking.",
          brief: "I want to end on something that might feel like it contradicts everything I've just said, but trust me, it doesn't. Subjectivity — the fact that you are a specific person with a specific history who sees the world a particular way — is the very thing we've just spent an hour warning you against.",
          full: [
            "I want to end on something that might feel like it contradicts everything I've just said, but trust me, it doesn't. Subjectivity — the fact that you are a specific person with a specific history who sees the world a particular way — is the very thing we've just spent an hour warning you against. And it is also, paradoxically, the thing that will make your research interesting. A research field full of perfectly objective, interchangeable researchers would be deadly boring. It would notice nothing new.",
            "It would ask no original questions. Every original research question in history came from some specific human noticing something specific about the world that their training hadn't told them to notice. That is subjectivity in its creative register. So the goal is not to eliminate your subjectivity. The goal is to put it to work on the right side of the ledger — let it fuel your curiosity, your hypothesis-generation, your interpretation — while keeping it on a short leash during your measurement and analysis.",
            "The best researchers I've known were not the most neutral. They were the most self-aware. They knew exactly where their perspective was helping them see, and exactly where it was threatening to blind them. You can aim for that. It is the work of a lifetime, but it is worth every minute.",
          ],
          visual: "spectrum",
          example: {
            title: "In one image",
            body: [
              "Your perspective is what lets you notice the question nobody else was asking. It's also what stops you from noticing the answer nobody was expecting. Same source, both effects.",
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
import { chapter3 } from "./chapter3";
export const chapters = [chapter, chapter2, chapter3];

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

