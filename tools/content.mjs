// All portfolio copy lives here. Source of truth: _source/portfolio.md
// Edit text here, then run `node tools/build.mjs` to regenerate the HTML pages.

export const SITE = {
  name: "Anushka Tadphale",
  positioning: "Bridging product thinking, AI innovation and business strategy.",
  tagline: ["Product & Technology", "Data engineering & AI", "Business strategy"],
  // TODO: set your public URL once you know it (used for canonical links, sitemap and social tags).
  // Example: "https://your-username.github.io/portfolio" (no trailing slash). Leave "" to skip.
  url: "https://anushkat0711.github.io",
  // TODO: replace with your real details.
  email: "anushka_tadphale_pgp2027@isb.edu",
  linkedin: "https://www.linkedin.com/in/anushka-tadphale/",
  resume: "", // e.g. "assets/Anushka-Tadphale-Resume.pdf" once you add the PDF; "" hides the link
};

export const INTRO = [
  "I’m driven by the intersection of technology, business and problem-solving, with a particular interest in building products that turn complex problems into meaningful outcomes.",
  "At Bank of New York, I’ve worked across data engineering, regulatory reporting and AI, building scalable frameworks, ETL pipelines and AI-driven applications while partnering with senior stakeholders to solve business problems and improve workflows.",
  "Now pursuing management studies, I’m expanding from building technology to understanding what to build, why it matters and for whom. I’m particularly interested in Product Management, AI-powered products and data-driven decision making, and in the strategic questions behind them: where a product can defend its position, which trade-offs to make, and where AI should and shouldn’t be used.",
  "I bring technical depth, structured problem-solving, a strategic lens and a collaborative spirit to everything I work on. In my case studies, that means weighing defensibility, business model and go-to-market alongside what the product does.",
];

export const SKILLS = [
  ["AI / ML", ["Agentic AI", "RAG", "MCP", "Prompt engineering"]],
  ["Analytics", ["SQL", "Python", "Excel"]],
  ["Data Engineering", ["ETL pipelines", "Apache Spark", "Airflow", "HDFS", "Data modelling", "Git", "API integration", "Kafka"]],
  ["Delivery tools", ["Agile", "JIRA", "Confluence", "RCA"]],
  ["Product Delivery", ["Agile", "Scrum", "JIRA", "Confluence", "RCA", "A/B testing", "Rapid Prototyping", "MVP"]],
];

export const PROJECTS = [
  {
    slug: "cocreate",
    title: "CoCreate",
    subtitle: "A Trust-First Marketplace for Micro-Creator Collaborations",
    org: "Software Product Management · ISB",
    tags: ["marketplace"],
    chips: ["Product strategy", "Marketplace", "Research"],
    tone: "tone-lav",
    summary: "CoCreate helps brands and micro-creators discover each other and agree on clear collaboration terms through structured briefs, two-sided trust profiles and rate benchmarks.",
    facts: [
      ["Context", "Product concept for a Software Product Management project at ISB"],
      ["My role", "Product discovery, customer research, problem validation, MVP scoping, prototype development, success metrics and product strategy"],
      ["Team", "Five-member team"],
    ],
    context: [
      "CoCreate is a product concept developed as part of a Software Product Management project at ISB. I worked on product discovery, customer research, problem validation, MVP scoping, prototype development, success metrics and product strategy as part of a five-member team.",
    ],
    problem: [
      "Micro-creator collaborations often happen through Instagram DMs and WhatsApp, leaving important deal terms scattered across conversations. Brands struggle to assess creator reliability, while creators face ambiguity around deliverables, usage rights, budgets and payment terms.",
      "In interviews with 26 participants, <strong>17 raised scope or usage-rights concerns, and 16 raised trust concerns</strong>. These issues can create negotiation friction, mismatched expectations and hesitation to commit to collaborations.",
    ],
    processTitle: "My process",
    process: [
      ["Research and discovery", "Interviewed 26 participants across creators, brands and agencies to identify pain points, understand current workflows and assess willingness to pay."],
      ["Problem prioritisation", "Prioritised scope ambiguity and counterparty trust because they directly influence whether a collaboration proceeds."],
      ["Prototype testing", "Tested the prototype with two creators and one brand manager to evaluate comprehension and feature usefulness."],
      ["MVP prioritisation", "Designed a concierge-led pilot with 3–5 brands and 30–50 creators to validate actual behaviour before investing in automation and payment infrastructure."],
      ["Success measurement", "Defined Weekly Locked Collaborations as the North Star metric, supported by guardrails for disputes, off-platform drop-offs and time to lock."],
    ],
    decisions: [
      ["Locked Brief", "Record deliverables, budget, timeline, usage type and rights duration before collaboration begins, reducing ambiguity for both sides."],
      ["Two-sided Trust Profile", "Show reliability signals for brands and creators, helping users assess counterparties before committing."],
      ["Rate Benchmark", "Provide the 25th percentile, median and 75th percentile for comparable creators to support more informed pricing decisions."],
      ["Concierge MVP", "Start with manual verification and a limited pilot to learn from real user behaviour before scaling."],
    ],
    rejectedTitle: "What we rejected or deferred",
    rejected: [
      [null, "Escrow, automated matching, extensive agency tools and subscriptions were deferred until core marketplace behaviour was validated. We also avoided penalising users for declining opportunities, since that could encourage unwanted commitments."],
    ],
    stats: [
      ["26", "participants interviewed"],
      ["17", "raised scope or usage-rights concerns"],
      ["16", "raised trust concerns"],
    ],
    outcomes: [
      ["Research evidence", "Identified scope/rights ambiguity in 17 of 26 interviews and trust concerns in 16."],
      ["Prototype validation", "In a small test with two creators and one brand manager, all three used the Trust Panel as an initial filter. The Locked Brief passed the comprehension test, while the rate benchmark was only partially validated."],
      ["Product strategy", "Defined a staged roadmap from behaviour validation in MVP1 to escrow-backed transactions in MVP2 and agency tools and subscriptions in MVP3."],
      ["Business impact", "Piloted the product with 4-5 creators and 2-3 brand managers"],
    ],
  },
  {
    slug: "asapintel",
    title: "ASAPIntel",
    subtitle: "The FDI Intelligence Layer for Capital Entering India",
    org: "ISB AI BuildLab 2026",
    tags: ["ai"],
    chips: ["AI product", "Regulatory", "RAG"],
    tone: "tone-mix",
    summary: "ASAPIntel turns a foreign investor’s question, “should we invest?”, into a structured regulatory verdict in under 5 minutes, instead of the 4–8 weeks a cross-border advisory engagement usually takes.",
    live: "https://asap-intel.replit.app",
    facts: [
      ["Context", "Product concept and Phase 1 platform built for the ISB AI BuildLab 2026"],
      ["Status", "Phase 1 live at asap-intel.replit.app"],
      // Role and team size are marked "[to confirm]" in portfolio.md, so they are deliberately not shown yet.
    ],
    context: [
      "ASAPIntel is a product concept and Phase 1 platform built for the ISB AI BuildLab 2026, live at asap-intel.replit.app. The product covers the regulatory journey for foreign direct investment into India, drawing on FEMA, the DPIIT Consolidated FDI Policy, Press Notes, RBI Master Directions, SEBI rules and CCI thresholds.",
    ],
    problem: [
      "A foreign company exploring India faces a fragmented entry process with no clear starting point. Before committing capital, it must reconcile several regulators’ rules, so it usually hires a cross-border firm and waits. That delay comes at the point where uncertainty is highest and willingness to spend is lowest. Generic AI tools can explain rules, but they hallucinate on regulatory specifics and leave no audit trail.",
    ],
    processTitle: "My process",
    process: [
      ["Market and competitor mapping", "Compared Invest India, Big Four entry advisory, mid-market law firms and generic LLMs to find the gap: paid, personalized and decision-ready."],
      ["Case study", "Used Google’s $15B Vizag AI Hub, the largest announced greenfield FDI project of 2025, to map one project across nine investment components and six regulators."],
      ["Product structure", "Organized the journey into four phases: entry eligibility, structuring requirements, compliance timeline, and risks and next steps."],
      ["Defensibility analysis", "Assessed that RAG over public regulation is replicable, so the moat had to come from an expert-maintained rules layer, proprietary demand data, marketplace liquidity and category brand."],
      ["Business model and GTM", "Compared transactional, subscription and API revenue, then prioritised partnership-led distribution through CA and CS firms and law firms."],
    ],
    decisions: [
      ["Four-phase verdict", "Structure the output as a sequence of regulatory decisions, not a free-form chat answer."],
      ["Expert-maintained rules over pure AI", "Encode PN3 flags, sectoral caps and CCI thresholds in deterministic tables, with LLM synthesis on top."],
      ["AI as a Q&A panel, not the gatekeeper", "A persistent assistant answers follow-ups using the investor’s own analysis."],
      ["Human accountability kept in place", "No automated filing execution and no binding AI legal advice. A verified lawyer signs off before anything becomes actionable."],
      ["Honest limits", "A “what this cannot determine” section tells investors where they still need a lawyer, then routes them to a verified firm."],
      ["Pricing that avoids conflicts", "Flat software subscriptions for firms, never a percentage of legal fees or per-lead charges."],
    ],
    rejectedTitle: "Rejected",
    rejected: [
      [null, "Relying on generic LLMs as the product, and building an autonomous filing or advice engine, given the regulatory exposure."],
    ],
    stats: [
      ["< 5 min", "to a structured verdict, vs 4–8 weeks via traditional advisory"],
      ["$15B", "Google Vizag AI Hub case, across 9 components and 6 regulators"],
      ["$0.01–$0.02", "estimated LLM cost per journey"],
    ],
    outcomes: [
      ["Phase 1 is live", "The platform is running as a working demonstration, built around the Google Vizag case."],
      ["Value claim", "A structured verdict in under 5 minutes, compared with 4–8 weeks through traditional advisory."],
      // portfolio.md contains "[Add any user or pilot data if available.]" here. Left out until real data exists.
      ["Business model", "Demand-side subscriptions (₹3–6L per year), supply-side firm listings (₹1L per year) and a usage-based API. Estimated LLM cost per journey is $0.01–$0.02."],
      ["Roadmap", "Target-company health checks using MCA records, a compliance tracker with pre-deadline alerts, and expansion to similar markets such as Indonesia, Vietnam, Brazil and the UAE/Saudi Arabia."],
    ],
    lesson: "With no technical moat, the value comes from the curated rules layer, the trust design and the network built around the product. Being clear about what the product cannot decide is part of what makes it credible.",
  },
  {
    slug: "trip-guardian",
    title: "Trip Guardian by MMT",
    subtitle: "AI-First, Collaborative Travel Platform Concept",
    org: "MakeMyTrip · Case competition",
    tags: ["ai", "travel"],
    chips: ["AI strategy", "Travel", "Group planning"],
    tone: "tone-pink",
    summary: "Designed an AI-integrated group travel planning concept for MakeMyTrip that embeds AI as structured, transparent recommendations (not a chatbot), adds group decision-making and cost-splitting, and keeps MMT’s booking record as the defensible core — developed for a case competition on MMT’s AI strategy.",
    cardDesc: "An AI-integrated group travel concept for MakeMyTrip: transparent recommendations instead of a chatbot, with group decisions and cost-splitting built in.",
    facts: [
      ["Context", "Case competition / product strategy exercise on MakeMyTrip, India’s largest OTA"],
      ["My role", "Sole strategist/designer covering research, personas, journey mapping, prioritization and solution design"],
      ["Team", "2, working solo before merging with a teammate’s parallel technical draft"],
    ],
    context: [
      "A case competition / product strategy exercise on MakeMyTrip, India’s largest OTA. Outside-in exercise using public information on MMT’s AI investments (Myra, OpenAI partnership) as a starting point.",
      "<strong>My role:</strong> sole strategist/designer covering research, personas, journey mapping, prioritization, and solution design, working solo before merging with a teammate’s parallel technical draft. <strong>Team size:</strong> 2.",
    ],
    problem: [
      "Two shifts threatened MMT’s “search-and-transact” model: (1) AI is pulling trip inspiration and planning off-platform onto tools like ChatGPT, risking MMT becoming a commoditized checkout layer; (2) the highest-friction moments — refunds, disruptions, group cost-splitting, trust in recommendations — remained unsolved by both MMT’s current product and generic AI tools, which can inspire but can’t book, protect, or manage a trip since they don’t own inventory or payments. That gap was MMT’s clearest advantage, but nothing made it <em>felt</em> across the journey.",
    ],
    processTitle: "Process",
    process: [
      ["Research", "Synthesized public data on MMT’s Myra usage and voice/vernacular adoption; cross-referenced Indian traveler AI-adoption surveys, separating stated intent (~60-70% open to AI planning) from actual booking trust (~12-15% comfortable with autonomous AI booking)."],
      ["Discovery", "Built five personas with deliberately conflicting needs (spontaneity vs. protection, speed vs. consensus) to pressure-test a single product; mapped full journeys independent of any platform first."],
      ["Prioritization", "Scored features via a MECE framework (Impact × 2 + Differentiation + Feasibility) to separate must-build from later-phase work."],
      ["Key tradeoffs", "Reconciled my lean MVP approach with a teammate’s more comprehensive technical spec (full backend, accessibility-inclusive logic) into a tiered P0/P1/P2 prompt; decided group features belonged in the MVP despite added complexity, given their estimated 30-40% share of bookings."],
    ],
    decisionsTitle: "Chose",
    decisions: [
      ["Trip Object", "A persistent “Trip Object” as the architectural core — one record spanning inspiration through disruption through memory, which is what a standalone AI tool structurally can’t replicate."],
      ["Decoupling AI from chat UI", "AI shows up as labeled, dismissible reasoning panels (fit scores, “why this?”) inside structured screens; the Myra chatbot is demoted to an optional side channel, never gatekeeping the core flow."],
      ["Group collaboration as day-one, not v2", "Voting, preference synthesis, and Splitwise-style cost-splitting built into the initial scope."],
      ["Trust mechanics as explicit product features", "Plain-language cancellation terms, visible score breakdowns, and approval gates before any AI-initiated spend, directly responding to the stated-vs-actual trust gap found in research."],
    ],
    rejectedTitle: "Rejected",
    rejected: [
      [null, "A fully autonomous AI booking agent — more impressive as a demo, but misaligned with the ~12-15% actual trust ceiling."],
      [null, "Replacing MMT’s homepage/booking ribbon with an AI-only entry point — kept the familiar flow one click away for high-intent users."],
      [null, "A single undifferentiated AI experience for all travelers — personas’ needs genuinely conflict, so features were persona-weighted instead."],
      [null, "Full production-grade backend for the prototype stage — chose a frontend-only, mock-state build for demo reliability over architectural realism at this phase."],
    ],
    stats: [
      ["~60–70%", "open to AI planning (stated intent)"],
      ["~12–15%", "comfortable with autonomous AI booking"],
      ["5", "personas with deliberately conflicting needs"],
      ["21", "destinations in the extended mock datasets"],
    ],
    outcomeParas: [
      "This was a strategy/design exercise, not a shipped product — no live metrics exist. Deliverables: a complete strategic narrative from segmentation through phased solution, four visual frameworks (journey map, architecture, wireframes, priority matrix), a build-ready prototype prompt with a full design system and P0/P1/P2 scope, and extended mock datasets (21 destinations) to support a realistic demo.",
    ],
    lesson: "The most valuable move wasn’t adding AI — it was deciding where AI <em>shouldn’t</em> be the interface. Reversing the default “AI = chatbot” assumption, based directly on the trust-gap data, was the single decision that most shaped the rest of the product.",
  },
  {
    slug: "money-desk",
    title: "Money Desk",
    subtitle: "Razorpay",
    org: "Razorpay ecosystem · Product concept",
    tags: ["fintech"],
    chips: ["Fintech", "Mobile-first", "AI-assisted"],
    tone: "tone-peach",
    summary: "Turning payment uncertainty into actionable cash-flow decisions for small merchants.",
    cardDesc: "A mobile-first merchant cash-flow and payment-resolution concept that turns payment uncertainty into actionable decisions.",
    facts: [
      ["Product", "Money Desk, a mobile-first merchant cash-flow and payment-resolution concept for the Razorpay ecosystem"],
      ["My role", "Product discovery, strategy, UX journey design, and AI-assisted prototyping"],
      ["Team", "Individual-led project with AI tools supporting research synthesis and implementation. No separate human team size established."],
    ],
    context: [
      "<strong>Product:</strong> Money Desk, a mobile-first merchant cash-flow and payment-resolution concept for the Razorpay ecosystem.",
      "<strong>Role:</strong> Product discovery, strategy, UX journey design, and AI-assisted prototyping.",
      "<strong>Team:</strong> Individual-led project with AI tools supporting research synthesis and implementation. No separate human team size established.",
    ],
    problem: [
      "Small merchants receive payments in staggered amounts but face fixed expenses such as wages and supplier advances. Existing payment workflows show transaction statuses but do not bring together expected cash, overdue collections, in-doubt payments, and held settlements into a clear set of next actions. This creates uncertainty about usable cash, time spent chasing buyers, and delays in resolving payment issues.",
    ],
    processTitle: "My process",
    process: [
      ["Research", "Conducted primary research through merchant conversations to understand payment-related pain points and existing workarounds."],
      ["Discovery", "Synthesized findings into three core uncertainties: money that is late, money whose status is unclear, and money that is held."],
      ["Prioritization", "Focused on the immediate cash-flow and payment-resolution workflow rather than building a full merchant-management suite."],
      ["Trade-offs", "Prioritized actionable guidance over false certainty, merchant control over autonomous automation, and trust safeguards over feature breadth. Used AI to synthesize insights and translate approved user journeys into buildable implementation prompts."],
    ],
    decisions: [
      ["Cash outlook", "Show Certain, Likely, and At Risk amounts rather than a single promised forecast."],
      ["Seller-controlled collections", "Enable WhatsApp nudges from the merchant’s own account, with frequency limits and no autonomous buyer messaging."],
      ["Duplicate-payment prevention", "Block repeat payment requests while a transaction remains in doubt."],
      ["Held-settlement guidance", "Show an appropriate reason category, evidence checklist, status tracking, and escalation path while keeping release decisions human-led."],
      ["AI boundaries", "Use AI to assist with failure classification, message drafting, and evidence checks, but not to make hold-release decisions or move funds."],
    ],
    rejectedTitle: "Rejected direction",
    rejected: [
      [null, "AI repeatedly favored a COD-to-payment-link conversion feature. I rejected it as the central proposition because it risked making Money Desk a payment-feature consolidation layer rather than differentiating it around cash visibility and resolution of payment uncertainty."],
    ],
    stats: [
      ["3", "core uncertainties: late, unclear and held money"],
      ["4", "step workflow: Identify → Diagnose → Act → Confirm"],
      ["7 days", "North Star window for resolving eligible at-risk rupees"],
    ],
    outcomes: [
      ["Deliverable", "An interactive prototype demonstrating the core Identify → Diagnose → Act → Confirm workflow."],
      ["Product impact", "Established a focused product proposition connecting cash visibility to specific actions for overdue, in-doubt, and held payments."],
      ["Measurement plan", "Proposed a North Star metric of the percentage of eligible at-risk rupees resolved within seven days, supported by payment conversion, duplicate-payment incidents, hold-resolution time, and outlook usability."],
    ],
    lessonTitle: "Learning",
    lesson: "The project reinforced that a stronger fintech product is not simply a collection of features. It must help merchants make decisions while preserving trust, avoiding unsupported promises, and keeping consequential financial decisions under appropriate human control.",
  },
];

// Short blurbs for project cards (fall back to the one-line summary).
PROJECTS[0].cardDesc = "A trust-first marketplace where brands and micro-creators agree on clear terms through structured briefs, trust profiles and rate benchmarks.";
PROJECTS[1].cardDesc = "An FDI intelligence layer that turns “should we invest?” into a structured regulatory verdict in under 5 minutes.";

// Journal: reflections drawn from the project write-ups.
export const NOTES = [
  { slug: "asapintel", icon: "layers", from: "ASAPIntel", text: "With no technical moat, the value comes from the curated rules layer, the trust design and the network built around the product. Being clear about what the product cannot decide is part of what makes it credible." },
  { slug: "trip-guardian", icon: "route", from: "Trip Guardian by MMT", text: "The most valuable move wasn’t adding AI — it was deciding where AI shouldn’t be the interface." },
  { slug: "money-desk", icon: "wallet", from: "Money Desk | Razorpay", text: "A stronger fintech product is not simply a collection of features. It must help merchants make decisions while preserving trust, avoiding unsupported promises, and keeping consequential financial decisions under appropriate human control." },
];
