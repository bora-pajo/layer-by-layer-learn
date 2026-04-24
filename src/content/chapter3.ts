// Chapter 3 — Researching and Writing the Literature Review
// Same content model as chapter1.ts. Glance/brief/full/example fields written
// in the same editorial voice and condensed from the source manuscript.

import type { ConceptGroup } from "./chapter1";

export const chapter3 = {
  number: "03",
  title: "Researching and Writing the Literature Review",
  subtitle:
    "Not a book report — a synthesis that earns the right to ask your question.",
  groups: [
    {
      id: "ch3-defining-litreview",
      number: "01",
      title: "Defining a Literature Review",
      tagline: "It's not a review. It's an argument.",
      hue: 220,
      concepts: [
        {
          id: "what-is-litreview",
          number: "1.1",
          title: "What a literature review actually is",
          glance: "A synthesis of every study, not a list of summaries.",
          brief:
            "The name is a misnomer — a literature review is not a review. It's the synthesis of the entire body of original research on a topic, written as a narrative argument that lands on the question you're about to ask.",
          full: [
            "A literature review is the synthesis of the entire body of literature — meaning all the original research studies — on a specific topic. It is not simply reporting on or summarizing other people's work. It is engaging with them, discussing them, and weaving the body of work together so a reader can understand the state of knowledge in one sitting.",
            "It is expected that you have spent serious time reading these studies, keeping abundant notes, accumulating arguments that support or criticize each one, and systematically organizing them by when they were conducted and what they investigated. All of that knowledge is then synthesized, usually in a narrative form, to inform the reader.",
            "The literature review is often considered the core of the entire work you are proposing. It should inform the new study, point out the gaps on the topic, and even propose how to design potential new studies. Think of it as an argument you are bringing forward to validate the importance of the topic you are selecting.",
          ],
          visual: "lineage",
          keyTerms: ["literature review"],
          example: {
            title: "From summary to synthesis",
            body: [
              "A first draft might read: 'Smith (2018) found X. Lee (2020) found Y. Patel (2022) found Z.' That's a list of summaries — three studies sitting next to each other on a bench.",
              "A synthesis reads differently: 'For most of the 2010s, researchers (Smith, 2018; Lee, 2020) treated X as the main driver. Patel (2022) was the first to show this collapses when you control for Z — opening the door to the question this study now asks.' Same three studies, but they're now in conversation, and they point somewhere.",
            ],
          },
        },
        {
          id: "purpose-of-litreview",
          number: "1.2",
          title: "Why you write one",
          glance: "Prove you know the field. Earn the right to add to it.",
          brief:
            "The literature review has two jobs: show that you genuinely know the body of work on this topic, and build the case that your proposed study fills a real gap. Both are required to defend a study to the scientific community.",
          full: [
            "There are two crucial moments where a researcher faces the scientific public: defending the proposal, and defending the finished study. In both, reviewers look for two things — does this person actually know the literature on this topic, and is the proposed study feasible. The literature review is what answers the first question.",
            "New researchers need to show familiarity with the literature and demonstrate how their work will bring new knowledge or resolve contradictions in the field. The principle matters more than the specific layout — many strategies can produce a strong review, but all of them must demonstrate critical engagement and point clearly toward the gap the study fills.",
            "The body of literature is not a pile of old papers. It is a living thing, constantly reshaped by new findings. A good literature review treats it that way — and shows how the proposed study will further modify and improve it.",
          ],
          visual: "shield",
          example: {
            title: "The committee's two questions",
            body: [
              "A doctoral student walks into her proposal defense. The committee won't grill her on her data — there isn't any yet. They have exactly two things they want to know.",
              "First: 'Have you read enough that we trust you to recognize when you've found something new?' Second: 'Is the gap you're claiming actually a gap, or did three people fill it last year and you missed them?' Her literature review is the only document that answers both.",
            ],
          },
        },
      ],
    },
    {
      id: "ch3-exploring-literature",
      number: "02",
      title: "Exploring the Literature",
      tagline: "Where to look, how to search, what to bring home.",
      hue: 165,
      concepts: [
        {
          id: "databases",
          number: "2.1",
          title: "Libraries and online databases",
          glance: "Your school library is the door. Databases are the shelves.",
          brief:
            "Most fields have a flagship database: PsycInfo for psychology, PubMed for health, ERIC for education, JSTOR for arts and sciences, ProQuest for dissertations. Learn one well — the rest follow the same logic.",
          full: [
            "Despite the romance of the library, online databases place almost everything at your fingertips. The starting point is your library's website, where databases are usually organized alphabetically and by subject. Understanding how to use one is the key to understanding almost all of them.",
            "JSTOR is a nonprofit covering 2,500+ journals across arts and sciences. PubMed, run by the National Library of Medicine, holds 34M+ citations and is the first stop for any health-related topic. ERIC, sponsored by the U.S. Department of Education, has 1.8M+ entries on education. PsycInfo, run by the APA, holds 5M+ entries across psychology and behavioral science. ProQuest Dissertations & Theses Global covers published theses since 1997 — and dissertations are often friendlier than peer-reviewed articles for a researcher in training.",
            "When in doubt, ask a librarian. Larger schools have subject-specialist librarians whose job is to help you navigate the databases in your area, and they're often up to date with new search keywords you wouldn't know to try.",
          ],
          visual: "sources",
          example: {
            title: "Picking the right shelf",
            body: [
              "A nursing student researching teen anxiety opens Google and gets 400 million results. She closes it, goes to her library page, and tries PubMed first — health-focused, peer-reviewed, MeSH keywords. She gets 800 hits, narrows by date, and lands on 40 relevant studies in an afternoon.",
              "Her classmate researching the same population but from a school-counseling angle starts in PsycInfo and ERIC instead. Same topic, different shelf — and the studies they each pull barely overlap.",
            ],
          },
        },
        {
          id: "search-engines-boolean",
          number: "2.2",
          title: "Search engines and Boolean operators",
          glance: "AND narrows. OR widens. NOT excludes. Quotes lock a phrase.",
          brief:
            "Always use 'advanced search.' Combine keywords with AND, OR, NOT to shape the result set. Use quotes to keep a phrase intact, an asterisk to truncate word stems, and search abstracts before full text.",
          full: [
            "Most databases use similar engines (Google Scholar, EBSCOhost, ProQuest) and most students can navigate them quickly. One important habit: always use advanced search. Quick searches return so many results they overwhelm and discourage you.",
            "Boolean operators are the basic vocabulary. Use AND when you want both keywords present, OR when either is acceptable (this widens the search), and NOT to exclude a term. Use quotation marks (\"body image\") when you want two words to appear as a phrase rather than scattered separately. Use an asterisk for truncation: child* will catch child, children, childhood, childish.",
            "Search keywords in the abstract first, not the full text — you'll drown otherwise. If you get too few results, expand to full text. Filter by language and full-text availability when it helps. Spend time learning each database's official subject headings; they're a shortcut into the literature.",
          ],
          visual: "circuit",
          keyTerms: ["Boolean operators"],
          example: {
            title: "Five queries, very different days",
            body: [
              "A student types adolescent depression into PsycInfo: 78,000 results. She tries \"adolescent depression\" AND \"social media\" NOT adult: 1,200. Adds AND (\"longitudinal\" OR \"cohort\"): 180. Limits to abstract, English, last 10 years: 62.",
              "The first search would have taken her a week to skim. The last is an afternoon's work — and she didn't lose anything important. She just stopped reading articles about menopause and adult-onset depression that the database cheerfully kept including.",
            ],
          },
        },
        {
          id: "interlibrary-loan",
          number: "2.3",
          title: "Interlibrary loan",
          shortTitle: "Interlibrary loan",
          glance: "If your library doesn't have it, another library does.",
          brief:
            "Interlibrary loan lets you request articles, books, even DVDs that your library doesn't own. A librarian sources them from affiliated institutions and ships them to you — usually free, sometimes within hours.",
          full: [
            "Interlibrary loan is one of the most underused services in academia. If you find an article that looks perfect but you can't access the full text, look for an interlibrary loan link on the abstract page. Submit a request, and a librarian will search affiliated libraries around the country, then send the article via email.",
            "The same works for books, DVDs, and other materials. Some libraries deliver in a few hours; others take longer depending on their network. Either way, the service makes almost any source reachable.",
            "Beyond your school library, other resources are worth knowing. Public libraries — especially in major cities — have full database access and their own interlibrary systems. Nearby universities often allow non-students to read on campus for free. And the reference list of one excellent study is itself a curated reading list someone else built for you.",
          ],
          visual: "hand",
          keyTerms: ["interlibrary loan"],
          example: {
            title: "The article you couldn't reach",
            body: [
              "A grad student finds the perfect paper — exactly her question, exactly her population, published in 1994 in a journal her university dropped from its subscription in 2009. The PDF wants $42.",
              "She clicks 'request via interlibrary loan' on the abstract page, fills out a form in two minutes, and forgets about it. Eight hours later the PDF lands in her email, free. The librarian found it at a school three states away.",
            ],
          },
        },
        {
          id: "annotated-bibliography",
          number: "2.4",
          title: "Annotated bibliographies",
          glance: "A short summary of every study, written for future-you.",
          brief:
            "An annotated bibliography is a brief summary of each study you read — aim, theory, methods, sample, results, your impressions — kept in a single file. It's the raw material your literature review is built from.",
          full: [
            "Once you have your articles, it's time to read. Quality matters more than quantity. As you read, build an annotated bibliography: a brief summary of each article or book including the focus, methodology, conclusions, and anything that struck you. This is what makes the literature review possible later.",
            "For each entry, capture the basics first: title, authors, journal, volume, issue, DOI, page numbers. Then the substance: (a) the study's aim, (b) the theory or framework it uses (or note that none was mentioned), (c) the type of design — quantitative, qualitative, mixed — and how the question was addressed, (d) the number of participants, (e) the demographic breakdown, (f) the results, (g) the discussion and recommendations, and (h) your own notes, including quotes with page numbers.",
            "There are no hard-and-fast rules. Write it as if you were emailing a friend to explain the article. Don't worry about polish — concentrate on getting all the key facts down so you can write the synthesis from notes instead of re-reading 40 PDFs.",
          ],
          visual: "default",
          keyTerms: ["annotated bibliography"],
          example: {
            title: "One entry, written like an email",
            body: [
              "Bussing & Gary (2001), Harvard Review of Psychiatry. Aim: how parents evaluate ADHD treatments. Theory: none mentioned (worth flagging). Methods: four 2-hour focus groups, 25 parents (12 white, 13 Black; 50% single).",
              "Findings: Black parents leaned toward corporal punishment, religion, strict discipline; white parents favored rewards and behavioral programs. Both groups skeptical of medication — most reported taking kids off meds during summers and holidays. My note: the medication finding is the lead. Useful for the gap argument about parent-driven adherence.",
            ],
          },
        },
      ],
    },
    {
      id: "ch3-organizing-literature",
      number: "03",
      title: "Understanding and Organizing the Literature",
      tagline: "Tables, graphs, patterns. Make the pile of PDFs see-through.",
      hue: 35,
      concepts: [
        {
          id: "guiding-table",
          number: "3.1",
          title: "The guiding table",
          shortTitle: "The guiding table",
          glance: "Every article, every column. The spreadsheet that saves the review.",
          brief:
            "Build a single table with one row per article and columns for ID, year, authors, aim, sample, methods, findings. The table makes patterns visible — and patterns are what the literature review is built from.",
          full: [
            "Spending real time on a detailed table will help tremendously when you sit down to write. A fancy design is a bonus; even a clean, straightforward one does the job. Every peer-reviewed article you've read needs to have its data extracted and arranged side by side so you can actually see the body of literature instead of remembering it.",
            "Useful columns: an ID number, year of publication, authors, the aim of the study, who the respondents were, types of methods, key findings, and any notes about theory or limitations. The columns are the dimensions you'll later use to argue for similarity, difference, or absence.",
            "Once the table exists, you can sort it. By year, you see the timeline. By methodology, you see whether the field has leaned on questionnaires or interviews. By population, you see who's been studied — and, more importantly, who hasn't.",
          ],
          visual: "default",
          example: {
            title: "What the table reveals",
            body: [
              "A student building a literature review on parents of diabetic children fills out a 24-row table. Once it's done she sorts by methodology: 19 of 24 used multiple-choice questionnaires. She sorts by respondent: 22 of 24 surveyed mothers, not fathers.",
              "She didn't know any of that an hour ago. Now her gap argument writes itself: 'The literature has prioritized survey-based, mother-reported data. This study uses in-depth interviews and deliberately recruits both parents.' The table did the heavy lifting.",
            ],
          },
        },
        {
          id: "conceptual-graph",
          number: "3.2",
          title: "Returning to the conceptual graph",
          shortTitle: "The conceptual graph",
          glance: "The variables you mapped in Chapter 2 — now anchor the review to them.",
          brief:
            "The graph of variables and constructs you sketched while formulating your question is also the spine of your literature review. Every section should map back to a node on that graph.",
          full: [
            "Before you write, return to the conceptual graph from Chapter 2 — the one with circles for constructs, arrows for relationships, and rectangles for indicators and controls. The same graph that turned a vague topic into a researchable question is the graph that gives the literature review its shape.",
            "If your study is about exercise and food quality, your review should have visible sections covering what's known about exercise (and how it's been measured), what's known about food quality (and how it's been measured), and what's known about the relationship between them. Anything outside the graph either belongs in a 'background' paragraph or shouldn't be there.",
            "This sounds mechanical. It isn't — it's what stops a literature review from sprawling. The graph is the contract between your question and your reader.",
          ],
          visual: "lens",
          example: {
            title: "From sketch to outline",
            body: [
              "A student's graph has two big circles (exercise, food quality), one arrow between them, and three controls (gender, work status, income). She turns each circle into a section heading: '3.1 What we know about exercise habits in working adults.' '3.2 What we know about food quality.' '3.3 The exercise → food-quality link.' '3.4 Confounds: gender, employment, income.'",
              "Four sections. The graph wrote them. Anything she had read that didn't fit those four headings — even if it was interesting — she set aside.",
            ],
          },
        },
        {
          id: "organizing-work",
          number: "3.3",
          title: "Organizing your work",
          shortTitle: "Organizing your work",
          glance: "Logical path beats fancy structure.",
          brief:
            "Whatever organizing principle you pick — broad-to-narrow, by methodology, by theme — the test is the same: can a friend follow the logic? Disorganized writing is a literature review jumping between methods and theory and a missing perspective in three sentences.",
          full: [
            "Researchers have their own styles. Some go broad-to-narrow. Some organize by subheadings around different study clusters. Some lean on writing craft to keep readers engaged. All are fine, as long as the organization follows a logical path.",
            "Disorganization is the failure mode. A literature review that opens with study methodologies, jumps to theoretical frameworks, then mentions a missing dynamic, then returns to methods is the epitome of scattered. It explores no topic in depth.",
            "One simple test: imagine calling a friend or parent and explaining what the literature says about your topic. How would you walk them through it? That phone-call narrative is the skeleton. Then you write for an audience that already knows the field — adding depth, perspective, and your own assumptions stated openly.",
          ],
          visual: "default",
          example: {
            title: "Two openings, same studies",
            body: [
              "Draft A: 'Smith used surveys. Lee used interviews. Theory of planned behavior was applied by Patel. There's a gap on rural populations.' The reader has no idea what topic this is.",
              "Draft B: 'For two decades, research on adolescent vaping has clustered around two questions: who starts, and who quits. The first wave (Smith, 2018; Lee, 2020) was survey-driven and urban. Patel (2022) opened the second wave by applying the theory of planned behavior — but rural adolescents remain almost entirely absent.' Same studies. Reader knows where they are.",
            ],
          },
        },
        {
          id: "patterns",
          number: "3.4",
          title: "Conceptualizing patterns",
          glance: "Sort by similarity and difference. The same way you sort a sock drawer.",
          brief:
            "Especially with smaller bodies of literature, organize the review around patterns: findings several studies share, findings only one study reports, methods that recur, samples that don't. Patterns are the structure, not an afterthought.",
          full: [
            "We learn early to organize by shape, color, or pattern — and we do it instinctively in everyday life (forks here, spoons there, plastic in this drawer, glass in that one). Organizing a literature review feels unnatural only because it's unfamiliar. The mental move is the same.",
            "When the body of literature is small — say, the literature on parents of children diagnosed with ADHD — patterns become a powerful organizing principle. A reader scanning a few studies notices that at least four show teachers, not parents, are usually the first to spot the problem. Several show parents going through a trial-and-error period with medication. One study finds something nobody else does.",
            "Group studies by what they share, then call out what only one study reports. Similarities give you sections. Differences give you the gap to argue from. Together they give you a literature review with a real spine.",
          ],
          visual: "compare",
          example: {
            title: "What four studies share",
            body: [
              "A student reviewing 11 studies on ADHD families sees a pattern: in Cohen (2006), Leslie et al. (2007), Malacrida (2001), and Sax & Kautz (2003), teachers — not parents or pediatricians — are the first to identify the child's behavior as a problem. That's four independent studies converging on the same finding.",
              "She makes that a section: '3.2 The teacher-as-first-identifier pattern.' Then she adds Dennis et al. (2008), who found something different: parents describe a long trial-and-error stage with medication. Now she has a similarity and a difference, and the review has somewhere to go.",
            ],
          },
        },
      ],
    },
    {
      id: "ch3-thinking-critically",
      number: "04",
      title: "Thinking Critically",
      tagline: "Read like you're disagreeing in real time.",
      hue: 295,
      concepts: [
        {
          id: "reading-critically",
          number: "4.1",
          title: "Reading critically",
          shortTitle: "Reading critically",
          glance: "Active reading, not passive absorbing.",
          brief:
            "Critical thinking starts with critical reading: arguing with the page in real time. Passive reading is when your eyes move and your mind wanders. Active reading is when each sentence you read triggers a sentence in your head.",
          full: [
            "Critical thinking, in Elder and Paul's (2001) phrase, is 'the mode of thinking about any subject, content, or problem — in which the thinker improves the quality of his or her thinking by skillfully taking charge of the structures inherent in thinking and imposing intellectual standards upon them.' One way to feel this is the difference between passive and active reading.",
            "Passive reading is the kind we do when we have to but don't care: eyes scan, mind wanders, almost nothing sticks. Active reading is the opposite — each sentence triggers an agreement, a disagreement, an example, a counterexample. You are not absorbing; you are responding.",
            "When you write a literature review, you're not reiterating. You're raising questions, gathering relevant information, interpreting it through your perspective, and reaching logical conclusions. Reading critically is interactive and engaging — not passive accumulation.",
          ],
          visual: "mirror",
          example: {
            title: "Two readers, same paper",
            body: [
              "Reader A finishes a 30-page article in 40 minutes. Asked what it argued, she pauses: 'Something about parents and adherence?' She read every word.",
              "Reader B took 90 minutes on the same paper. Her notes have nine arguments-with-the-author in the margins, three counterexamples from her own life, and one sentence that says 'their sample is all suburban — would this hold in a rural clinic?' That last sentence is going to become her own study's gap.",
            ],
          },
        },
        {
          id: "analyzing-studies",
          number: "4.2",
          title: "Analyzing studies",
          shortTitle: "Analyzing studies",
          glance: "Pull apart the methods. Find the niche they didn't fill.",
          brief:
            "To analyze a study, look at its concepts and theory, then unpack its methodology in detail. Across many studies, methodological patterns become a map — and the white space on that map is where your study lives.",
          full: [
            "Start with concepts, theories, and perspectives. What are the researchers using, and what assumptions might they have taken for granted? Then turn to methodology. The simplest move is to write down the methodological approach for each study: 'in-depth interview with 35 participants, average age 30,' 'questionnaire of 250 participants,' 'focus group of 10.'",
            "Once you've done that across many studies, patterns appear. You can name the percentage that used questionnaires, the proportion of samples that were majority women, the ages typically studied. These details show your mastery of the field — and they also reveal what's missing.",
            "Take research on diabetic children. A novice maps the methodologies and notices most studies use multiple-choice surveys, and most respondents are mothers. If she planned to do in-depth interviews with both parents, she's now found her niche. The argument writes itself: the literature is missing depth and missing fathers, and her study fills both gaps. That argument is what makes a literature review feel sharp instead of dutiful.",
          ],
          visual: "lens",
          example: {
            title: "Finding the missing column",
            body: [
              "A student studying caregivers of stroke survivors lists the methods of 18 studies. Fourteen used closed-ended surveys. Sixteen recruited spouses. Average sample age: 64.",
              "Her planned study uses in-depth interviews with adult-child caregivers under 40. The literature review almost writes itself: 'The existing literature has illuminated the experience of older spousal caregivers via survey methods. The experience of younger adult-child caregivers, and the texture of that experience that only qualitative work can capture, remains largely unexamined.' The gap is real because the table proved it.",
            ],
          },
        },
      ],
    },
    {
      id: "ch3-questions-and-systematic",
      number: "05",
      title: "Hypotheses, Questions, and Systematic Reviews",
      tagline: "Where the review ends — and what a different kind of review looks like.",
      hue: 10,
      concepts: [
        {
          id: "hypotheses-or-questions",
          number: "5.1",
          title: "Where hypotheses (or questions) go",
          glance: "At the end of the review. After the argument. Before the methods.",
          brief:
            "The literature review ends with the study's hypotheses or research question. The whole review has been arguing that something is unanswered — the hypotheses are what you're now claiming to answer. Quantitative studies state both alternative and null; qualitative studies state a question.",
          full: [
            "Hypotheses and research questions belong at the end of the literature review. The review has been building an argument that there are unanswered questions — the hypotheses are the specific things you're now claiming this study will examine. A research question is broader and doesn't commit to a hunch about the answer; a hypothesis includes a directional claim.",
            "A quantitative study can have both a research question and hypotheses. A qualitative study has only a research question. For quantitative work, place the alternative and null hypotheses in their own paragraph. As established in Chapter 2, the goal is to reject the null — so it must be stated clearly.",
            "Example: a mixed-methods study about how psychiatrists diagnose patients might end with H1 — 'There is a one-directional relationship between number of complaints expressed at intake and likelihood of receiving a diagnosis: more complaints, more diagnoses,' paired with H01 — 'There is no relationship.' Then a parallel pair for prescriptions. Stated this cleanly, the rest of the proposal knows exactly what it has to test.",
          ],
          visual: "challenge",
          example: {
            title: "The last paragraph of the review",
            body: [
              "After 11 pages arguing that ADHD diagnosis is increasing while diagnostic criteria are still contested, the literature review's final paragraph reads: 'Given this gap, the present study asks: How does the number of presenting complaints at first intake relate to (a) likelihood of diagnosis and (b) likelihood of prescription?'",
              "Then, in a separate paragraph: 'H1: Higher complaint counts are associated with higher diagnosis rates. H01: No relationship exists. H2: Higher complaint counts are associated with higher prescription rates. H02: No relationship exists.' The review has now handed the study its scope.",
            ],
          },
        },
        {
          id: "systematic-vs-narrative",
          number: "5.2",
          title: "Systematic vs. narrative reviews",
          shortTitle: "Systematic vs. narrative",
          glance: "A narrative review serves your study. A systematic review serves the field.",
          brief:
            "A systematic review is its own kind of research study. It collects every study on a topic following strict, reported procedures, with no agenda to support a particular new study. It reduces selection bias and follows rigorous methodology — including its own literature review inside it.",
          full: [
            "A systematic review is different from a literature review — in fact, a good systematic review contains its own literature review. A systematic review is a form of scientific study: it tries to bring together every scientific study on a specific topic and draw conclusions from the whole body. A narrative literature review, by contrast, is tailored to support the researcher's own upcoming study.",
            "Four differences matter. (a) Focus: a narrative review serves a particular study; a systematic review serves the question of what is known. (b) Selection bias: systematic reviews follow predefined criteria for inclusion and report exactly which databases, keywords, and decisions were used, which reduces the kind of bias where researchers gravitate toward studies that fit their priors. (c) Procedure: systematic reviews follow a rigorous, documented methodology — the methodology of the systematic review is the study's methods section, just applied to articles instead of people. (d) Analysis: a narrative review may summarize a few studies; a systematic review collects all methodologies, conclusions, and discussions and analyzes them as a dataset.",
            "Meta-analyses are a close relative. They do everything a systematic review does and add a statistical step: recalculating data from the original studies based on standard criteria. The math is beyond this chapter, but the relationship is worth knowing — every meta-analysis is a systematic review with quantitative pooling.",
          ],
          visual: "versus",
          keyTerms: [
            "systematic review",
            "selection bias",
            "methodology of the systematic reviews",
            "meta-analyses",
          ],
          example: {
            title: "Two researchers, same topic",
            body: [
              "Researcher A is writing a narrative literature review for her dissertation on telehealth and diabetes management. She reads 35 studies, leans on the ones that suggest telehealth helps adherence (because that's her study's premise), and writes a 15-page review ending with her hypotheses.",
              "Researcher B is writing a systematic review of the same topic. She predefines her search: 5 databases, specific keyword combinations, English-language, 2010–2024, peer-reviewed. The search returns 1,847 results. She reports every exclusion: 412 duplicates, 1,103 off-topic, 217 wrong study type. She analyzes the remaining 115 — including the ones that contradict her own hunch. Researcher A's review supports her study. Researcher B's review is the study.",
            ],
          },
        },
      ],
    },
  ] satisfies ConceptGroup[],
};
