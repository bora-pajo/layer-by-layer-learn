// Chapter 2 — Formulating a Research Question
// Same content model as chapter1.ts. Glance/brief/full/example fields written
// in the same editorial voice and condensed from the source manuscript.

import type { ConceptGroup } from "./chapter1";

export const chapter2 = {
  number: "02",
  title: "Formulating a Research Question",
  subtitle:
    "From a vague interest to a question the world can actually answer.",
  groups: [
    {
      id: "ch2-choosing-topic",
      number: "01",
      title: "Choosing a Research Topic",
      tagline: "Start with what you can't stop reading about.",
      hue: 28,
      concepts: [
        {
          id: "passion-first",
          number: "1.1",
          title: "Passion comes first",
          shortTitle: "Passion comes first",
          glance: "Researchers don't pick topics. Topics pick them.",
          brief:
            "A research career isn't a 9-to-5; it's an obsession that crawls under your skin. Before method or theory, ask what already keeps your attention — the headlines you stop on, the questions you keep googling.",
          full: [
            "Here is a secret about researchers: they don't feel that conducting research is a burden. They love the topic they are investigating. They love reading about it, can spend hours analyzing data, and can talk passionately about it for hours.",
            "We often picture researchers as hermits invested in a boring pursuit. The truth is the opposite. Research crawls under your skin and becomes an obsession — closer to a deeply engaging video game where you cannot rest until you reach the next level.",
            "If you are not sure what you love yet, take a day and observe yourself. Notice what news you stop on, what you repeatedly search for, what you can argue about for hours. By the end of the day, you'll have a candidate.",
          ],
          visual: "hand",
          keyTerms: ["topic", "curiosity"],
          example: {
            title: "A day of attention",
            body: [
              "A first-year student isn't sure what to study, so for one day she just watches herself: which TikToks she rewatches, which headlines she stops on, which conversations she leans into.",
              "By dinner she sees a pattern — almost everything that grabbed her was about loneliness in college. Not 'mental health' in the abstract, but specifically how dorms, schedules, and phones shape it. That's not a research question yet — but it's a topic she'll actually finish.",
            ],
          },
        },
        {
          id: "fundamental-vs-applied",
          number: "1.2",
          title: "Fundamental vs. applied research",
          shortTitle: "Fundamental vs. applied",
          glance: "Explain how the world works — or fix something specific in it.",
          brief:
            "Fundamental research builds broad explanations of how the world works, often without a direct use case. Applied research targets a specific problem and looks for a workable answer. Both are necessary, and both feed each other.",
          full: [
            "Fundamental research looks at the world at large and tries to generate new ideas or explanations about how it works and why. It collects information about large groups of people and may have no immediate application — but it gives us the principles other work later builds on.",
            "Applied research, on the other hand, seeks to solve a specific societal problem or uncover more information about a particular issue. It explores why people behave a certain way so we can find a workable response, and its findings have direct implications in practice.",
            "Theories of migration are fundamental: researchers don't intervene in migrants' lives, they try to understand the human condition behind mass movement. A study comparing active vs. traditional classrooms for children with ADHD-like behaviors is applied: it points toward an intervention.",
          ],
          visual: "compare",
          keyTerms: ["fundamental research", "applied research"],
          example: {
            title: "Two researchers, one phenomenon",
            body: [
              "Researcher A asks: why do people migrate? She builds a theory connecting economics, social status, and family networks across decades of census data. No migrant in her sample will benefit directly from her paper.",
              "Researcher B asks: why are recently arrived migrants in this city under-using the free clinic two blocks from their housing? She interviews 30 families and pilots a multilingual outreach program. Same broad domain — completely different shape of question.",
            ],
          },
        },
        {
          id: "narrowing-topic",
          number: "1.3",
          title: "Narrowing the topic",
          glance: "Pin down the constructs. Pin down the population.",
          brief:
            "A topic becomes a research question when you've named two things precisely: the constructs you care about, and the population you're studying. 'Society' becomes 'fathers'; 'education' becomes 'public elementary schools.'",
          full: [
            "Two features turn a broad interest into a research question: the constructs of interest (the main concepts around your topic) and the population of interest. A construct is a concept like health or knowledge — measurable in some form once you pin it down.",
            "If you tell someone 'I'm interested in how society makes decisions,' they may interpret it completely differently from your intentions. Are you talking about buying property, choosing a movie, picking a medical therapy? Specificity is what lets a stranger immediately understand what you're studying.",
            "Then narrow the population: students, parents, teachers? Public schools, private, charter, Montessori? Maybe by 'parents' you actually mean fathers, because their perspective is missing from the literature. Now the topic reads: fathers' perspectives about the quality of public elementary education in the United States — clear, finite, researchable.",
          ],
          visual: "lens",
          keyTerms: ["construct", "population of interest"],
          example: {
            title: "From 'health' to a real question",
            body: [
              "A student says she wants to study 'children's health.' The advisor presses: lungs? heart? Maybe ADHD, ODD, autism. Okay — what about them? How they start, who diagnoses them, how parents notice, whether meds work?",
              "After ten minutes she lands on: 'How do parents of elementary school children, ages 6–10, decide their child needs to be checked for emotional and behavioral problems?' Same starting word, completely different study.",
            ],
          },
        },
      ],
    },
    {
      id: "ch2-operationalization",
      number: "02",
      title: "Operationalization of Constructs",
      tagline: "Turning ideas into things you can actually measure.",
      hue: 200,
      concepts: [
        {
          id: "construct",
          number: "2.1",
          title: "What is a construct?",
          glance: "An abstract idea you can't measure directly — yet.",
          brief:
            "A construct is a concept central to your study (self-esteem, trust, quality of life) that doesn't come with a built-in measuring stick. The work of research is to break it down until parts of it can be observed.",
          full: [
            "A construct is a concept related to your topic — health, knowledge, self-esteem, well-being — that is possible to measure in one form or another, but not directly. Constructs are general, abstract, and often understood differently by different people.",
            "Conceptualization is the process of breaking a construct into smaller, clearer pieces so we know the precise meaning of each. It is the first step toward operationalizing them. Once we have those smaller pieces, we can turn them into specific variables we actually collect.",
          ],
          visual: "default",
          keyTerms: ["construct", "conceptualization"],
          example: {
            title: "Unpacking 'quality of education'",
            body: [
              "Two researchers say they're studying 'quality of education.' One means standardized test scores. The other means how engaged students feel in class. Same word — different studies, different findings, different policy implications.",
              "Conceptualization is the unglamorous work of forcing yourself (and your reader) to say which one you mean before you collect a single data point.",
            ],
          },
        },
        {
          id: "operationalization",
          number: "2.2",
          title: "Operationalization",
          shortTitle: "Operationalization",
          glance: "Turning constructs into measurable variables.",
          brief:
            "Operationalization is the move from a construct to a concrete way of measuring it. Self-esteem becomes three Likert items about worth, likability, and failure — that's the measurable form the abstract idea now takes.",
          full: [
            "Operationalization refers to turning our constructs into actual variables that we can measure. A variable measures a specific feature or aspect of a construct and can take different values for each participant.",
            "Take self-esteem. Dictionary.com calls it a 'favorable impression of oneself.' If you ask people 'what do you think of yourself?' you're measuring their perception of their self-esteem, not self-esteem itself. To get closer, you might break it into worth, likability, and the inverse — feeling like a failure — and use a four-point Likert scale (strongly agree to strongly disagree) for each.",
            "For widely studied constructs, you usually don't need to reinvent the instrument. Validated scales for self-esteem, depression, trust, and dozens of others already exist and have been tested across many studies.",
          ],
          visual: "sources",
          keyTerms: ["operationalization", "variable", "Likert scale"],
          example: {
            title: "Self-esteem in three questions",
            body: [
              "A researcher operationalizes self-esteem with three statements: 'I feel I am a person of worth,' 'I generally like myself,' 'I often feel like a failure.' Each is rated 1 (strongly agree) to 4 (strongly disagree).",
              "She also operationalizes gender — adding it as a fourth column on the questionnaire. Now an abstract construct lives in a spreadsheet she can analyze.",
            ],
          },
        },
        {
          id: "ethics-operationalization",
          number: "2.3",
          title: "Ethics in measurement",
          glance: "How you ask matters as much as what you ask.",
          brief:
            "Operationalization isn't ethically neutral. The wording of a question can re-traumatize, condescend, or smuggle in assumptions. Sensitive constructs need sensitive instruments — and sometimes a warning before participants begin.",
          full: [
            "The ethical rules of research must be considered when operationalizing constructs. Questions need to be formulated in a way that will not cause harm. We need to think about how participants will feel reading our items.",
            "Some harm is obvious — asking trauma survivors to relive details may cause emotional and psychological distress. Other harms are subtler. 'Is language a barrier for you when you see a doctor?' embeds the assumption that the participant speaks a different language and that this language is a barrier. A more open prompt — 'tell me about your interactions with doctors' — lets the participant lead.",
            "Sometimes we can't avoid distressing material because the study's focus requires it. Then we tell participants up front that questions may trigger distress, that participation is voluntary, and that they may stop at any time.",
          ],
          visual: "shield",
          keyTerms: ["informed consent", "harm", "wording"],
          example: {
            title: "A small change in wording",
            body: [
              "Original item: 'How much does your accent get in the way of being understood at work?' Assumes accent, assumes interference.",
              "Revised: 'Tell me about a recent conversation at work — what went well, what was hard.' The same construct (workplace communication) gets at the same insight without telling the participant what their experience is supposed to be.",
            ],
          },
        },
      ],
    },
    {
      id: "ch2-variables",
      number: "03",
      title: "Types of Variables",
      tagline: "Not all variables in your study play the same role.",
      hue: 258,
      concepts: [
        {
          id: "independent-dependent",
          number: "3.1",
          title: "Independent & dependent variables",
          glance: "The one that predicts. The one that responds.",
          brief:
            "The independent variable is the predictor — the one you think explains variation. The dependent variable is the outcome — the surprise you're hoping it explains. The same variable can switch roles in a different study.",
          full: [
            "The independent variable is the explanatory or predicting variable — the one you think explains variation in something else. It is often a constant for the participant (e.g., gender). The dependent variable is the outcome — the one you hope is influenced by the independent variable.",
            "These roles are unique to each study. The same variable can be a dependent variable in one study and an independent variable in another. If you ask whether the amount of makeup someone wears relates to their self-esteem, makeup is independent and self-esteem is dependent. Flip the question — does self-esteem influence how much makeup people wear? — and the roles flip too.",
          ],
          visual: "versus",
          keyTerms: ["independent variable", "dependent variable"],
          example: {
            title: "Sleep → grades, or grades → sleep?",
            body: [
              "Study A asks whether hours of sleep predict GPA. Sleep is independent, GPA is dependent.",
              "Study B asks whether students with falling grades start sleeping less from stress. Now GPA is independent and sleep is dependent. The variables didn't change — the question did.",
            ],
          },
        },
        {
          id: "control-variables",
          number: "3.2",
          title: "Control variables",
          shortTitle: "Control variables",
          glance: "The other things you must hold steady.",
          brief:
            "Control variables aren't the focus of your study, but ignoring them lets other explanations sneak in. Income, age, education, and parental status often quietly explain the differences you thought you'd discovered.",
          full: [
            "When we control for something, we're saying we've taken into account that this variable could influence the outcome. Control variables aren't directly related to the focus of the study, but they're crucial for isolating the relationship you actually care about.",
            "Imagine concluding that gender explains self-esteem differences in your sample — when in fact most boys came from single-parent, low-income households and most girls didn't. Without controlling for income and family structure, you're describing those differences and calling them 'gender.'",
            "Common controls include income, gender, education level, race and ethnicity. Less obvious controls are study-specific: religiosity for one project, marital status for another. Reading the methods sections of similar studies is the fastest way to build your list.",
          ],
          visual: "sources",
          keyTerms: ["control variable", "bias"],
          example: {
            title: "Did the program work — or did the volunteers?",
            body: [
              "An after-school tutoring program looks like a clear success: kids who attended scored higher on year-end tests than kids who didn't. But the kids who attended also had more involved parents, higher baseline grades, and more stable housing.",
              "Control for those, and the program effect mostly evaporates. The intervention wasn't useless — it just wasn't doing the heavy lifting the raw numbers suggested.",
            ],
          },
        },
        {
          id: "confounding-disturbance",
          number: "3.3",
          title: "Confounding & disturbance variables",
          shortTitle: "Confounding variables",
          glance: "The lurkers you didn't see coming.",
          brief:
            "Confounding variables warp your independent variable so that the dependent variable becomes untrustworthy. Disturbance (extraneous) variables sit in the background and quietly distort the outcome — sometimes invisibly.",
          full: [
            "Confounding variables influence the independent variable so that results from the dependent variable become untrustworthy. Unlike controls, they often can't be predicted at design time — they only become apparent during data collection or analysis.",
            "Disturbance variables — also called extraneous variables — lurk in the background and distort the dependent variable. They reflect common characteristics of participants we never collected and may never identify. They aren't related to the independent variable, but they shape what you see anyway.",
            "Imagine a study on Facebook use and socialization showing no effect — until you realize all 40 participants happened to be single, with active dating-driven coffee schedules. Marital status was the confounder. Or recall the cheesecake-and-weight-gain study from Chapter 1, where most customers turned out to be new mothers (and breastfeeding burns calories). That's the extraneous variable nobody asked about.",
          ],
          visual: "challenge",
          keyTerms: ["confounding variable", "disturbance variable", "extraneous variable"],
          example: {
            title: "The bakery next to the breastfeeding center",
            body: [
              "A researcher tests whether eating a lot of cheesecake correlates with weight gain over a year. The relationship is weirdly weak.",
              "Then she walks to the bakery and notices: it's two doors down from a lactation support center. Most of her sampled customers are postpartum women who happen to be burning calories breastfeeding. The disturbance variable was right there on the sidewalk.",
            ],
          },
        },
        {
          id: "moderators-mediators",
          number: "3.4",
          title: "Moderators & mediators",
          shortTitle: "Moderators & mediators",
          glance: "One bends the relationship. The other can break it.",
          brief:
            "A moderator strengthens or weakens an existing relationship without erasing it. A mediator can erase the relationship entirely by intervening between the independent and dependent variables.",
          full: [
            "Moderators strengthen or weaken an already-established relationship between the independent and dependent variables. They can make a relationship appear stronger or weaker, but the underlying link still exists.",
            "Take alcohol consumption and liver damage. The relationship is real — but it's stronger for women than men, and weaker for people with low body fat who exercise regularly. Gender and weight are moderators here.",
            "Mediators are stronger. A mediator intervenes between the main variables and can make the relationship disappear entirely. If a school director secretly preps students to over-report study hours, the well-known relationship between studying and grades may vanish in your survey — not because it isn't real, but because the director's prep mediated it away.",
          ],
          visual: "versus",
          keyTerms: ["moderator", "mediator"],
          example: {
            title: "Study hours and grades — meet the principal",
            body: [
              "A team surveys 100 students on weekly study hours and end-of-term grades. Bizarrely, no relationship.",
              "It turns out the principal — eager to make the school look good — coached every student on what to report. The principal's coaching mediated the entire study right out of existence. The real relationship between studying and grades was never the problem; the measurement pipeline was.",
            ],
          },
        },
      ],
    },
    {
      id: "ch2-hypotheses",
      number: "04",
      title: "Types of Hypotheses",
      tagline: "A prediction precise enough that data could prove it wrong.",
      hue: 14,
      concepts: [
        {
          id: "hypothesis",
          number: "4.1",
          title: "What is a hypothesis?",
          glance: "A specific prediction about what your data will show.",
          brief:
            "A hypothesis is a statement that predicts a specific phenomenon or behavior. It belongs to quantitative work — qualitative studies don't use them — and it goes further than a hunch by saying exactly how variables should relate.",
          full: [
            "A hypothesis is a statement that predicts a specific phenomenon or behavior. It makes a prediction about how people will respond to your research question. Hypotheses live in quantitative work; qualitative studies don't use them.",
            "Where a research question asks, a hypothesis claims. 'Television watching is associated with women's self-esteem' is a hypothesis. 'More hours of television watching are associated with lower self-esteem in women' is a sharper one — it predicts not just that the variables relate, but how.",
          ],
          visual: "challenge",
          keyTerms: ["hypothesis", "prediction"],
          example: {
            title: "From hunch to claim",
            body: [
              "A student suspects that students who eat breakfast do better on morning tests. That's a hunch.",
              "Her hypothesis: 'Students who eat a meal within 90 minutes of a 9 AM exam will score, on average, higher than students who do not.' Now it's specific enough that one term of data can prove her wrong.",
            ],
          },
        },
        {
          id: "alternative-null",
          number: "4.2",
          title: "Alternative & null hypotheses",
          glance: "We test the null. We never accept it.",
          brief:
            "The alternative hypothesis (H₁, H₂, …) predicts a relationship. The null hypothesis (H₀) says there isn't one. Statistical tests target the null — and you can only reject it or fail to reject it, never accept it.",
          full: [
            "An alternative hypothesis is your prediction — based on theory and prior literature — about what the data will show. It states the kind of relationship between variables you expect, sometimes including how one variable should change with another. A study can have several alternative hypotheses (H₁, H₂, H₃, …).",
            "For each alternative, there is a null hypothesis (H₀) claiming there is no relationship between the variables. The null is what we actually test. We try to reject it in favor of the alternative.",
            "There are only two outcomes: reject the null in favor of the alternative, or fail to reject the null. We never accept the null. Failing to reject is not the same as proving 'no relationship' — that would be a different study, designed to test the null directly.",
          ],
          visual: "versus",
          keyTerms: ["alternative hypothesis", "null hypothesis", "rejection"],
          example: {
            title: "Music and athletes",
            body: [
              "H₁: Athletes who listen to music ≥4 hours/day perform better than those who listen <4 hours/day. H₀: Music listening and sport performance are unrelated for college athletes.",
              "After the season, the data don't show a clear difference. The researcher doesn't say 'music is unrelated to performance.' She says 'we failed to reject the null' — which is a much smaller and more honest claim.",
            ],
          },
        },
        {
          id: "directional-nondirectional",
          number: "4.3",
          title: "Directional & nondirectional hypotheses",
          shortTitle: "Directional or not",
          glance: "Predict the direction — or just predict the link.",
          brief:
            "A directional hypothesis specifies which way the relationship goes (more X, less Y). A nondirectional one only predicts that a relationship exists, often phrased as a research question.",
          full: [
            "A directional hypothesis predicts a specific course for your variables. 'The younger a person is, the more empathy they will show toward endangered animals' specifies direction — younger predicts more empathy.",
            "A nondirectional hypothesis predicts a relationship without committing to direction. 'Boys and girls perceive rape differently' claims a difference but doesn't say which group will score higher on which dimension. These are often expressed as research questions because the researcher isn't ready to predict how the variables will behave.",
          ],
          visual: "spectrum",
          keyTerms: ["directional hypothesis", "nondirectional hypothesis"],
          example: {
            title: "Two ways to ask the same thing",
            body: [
              "Directional: 'Adults who use social media >3 hours/day will report higher loneliness scores than those who use it <1 hour/day.'",
              "Nondirectional: 'Adults' loneliness scores differ by social media use.' Both are testable — but the first commits, and the second hedges. Which one you choose depends on what the literature already supports.",
            ],
          },
        },
        {
          id: "open-ended",
          number: "4.4",
          title: "Open-ended questions",
          glance: "When you don't have a prediction — only curiosity.",
          brief:
            "If you don't yet have variables, just constructs and curiosity, you may be heading into a qualitative study. Open-ended questions invite stories and meaning rather than measurement.",
          full: [
            "Sometimes you don't have a prediction about how variables will behave. You may not even have variables — just constructs and a lot of curiosity. That usually points toward a qualitative study rather than a quantitative one.",
            "In a qualitative design, we have constructs but we don't try to measure them. There are no variables, no hypotheses. We capture information through words and definitions, and our questions are open-ended: 'How do people react to a chaotic situation?' will only reveal answers by sitting with the people we're studying.",
            "Quantitative studies sometimes include open-ended questions inside an otherwise numeric survey. That doesn't make the study qualitative — it just means those answers will be analyzed separately, often by grouping responses by some characteristic like gender. Variables and hypotheses still belong to the quantitative side of the house.",
          ],
          visual: "lens",
          keyTerms: ["qualitative", "open-ended", "exploratory"],
          example: {
            title: "Listening before counting",
            body: [
              "A researcher wants to understand how nurses cope with the first death of a patient. She has no hypothesis — what would she even predict?",
              "She sits with twelve nurses for an hour each and asks open-ended questions: 'Tell me about that day. What do you remember about the hours after?' The point is not to test a claim. The point is to find out what claims would even be worth testing later.",
            ],
          },
        },
      ],
    },
    {
      id: "ch2-visualizing",
      number: "05",
      title: "Visualizing a Research Question",
      tagline: "Draw the question before you try to answer it.",
      hue: 160,
      concepts: [
        {
          id: "visual-model",
          number: "5.1",
          title: "Sketch the question",
          glance: "Circles for constructs, rectangles for variables, arrows for direction.",
          brief:
            "Once your question, constructs, variables, and controls start to make sense, draw them. A simple diagram with circles, rectangles, arrows, and + / – signs makes assumptions visible — and almost always reveals a gap.",
          full: [
            "Once everything connected to your study starts to make sense, the best thing to do is to put it on paper — visually. Circles for your constructs. Rectangles for your variables. Arrows from independent to dependent variables to show the relationship. A + or – in the corner of a circle to show the direction of a hypothesis.",
            "Take a researcher who hypothesizes that more exercise leads to healthier eating. Two big constructs: exercise, and quality of food. Draw two circles, an arrow from exercise to food quality, and a + on each — that's a directional hypothesis, on paper.",
            "Then unpack each construct. Exercise: what type? cardio, strength, walking, daily activity? How often? How many hours? Food quality: what counts as healthy? frozen meals, sugar, soda, cooking at home? Each question becomes a candidate variable on the diagram.",
            "Finally, add controls: gender, work status, income — anything that could make someone eat well or badly regardless of exercise. The diagram won't be the final model. But it will surface a missing variable or a fuzzy construct in five minutes that would have taken weeks to find in your data.",
          ],
          visual: "lineage",
          keyTerms: ["visualization", "model", "controls"],
          example: {
            title: "Exercise → eating, on a napkin",
            body: [
              "Two circles: 'exercise' and 'food quality,' each with a + in the corner. An arrow from exercise to food quality. Off the exercise circle, three rectangles: type, frequency, hours/week. Off the food circle: cooks at home (yes/no), servings of fruit/veg, frozen meals/week.",
              "Underneath, three small rectangles labeled 'controls': gender, full-time work, income. The whole question now fits on one page — and the moment you sketch it, you notice you forgot 'access to a kitchen,' which probably matters more than half your variables.",
            ],
          },
        },
      ],
    },
  ] satisfies ConceptGroup[],
};
