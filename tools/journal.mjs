// Journal entries, newest first. Each becomes its own page: journal-<slug>.html
// body items: string = paragraph (HTML allowed) | {h2} | {ul:[...]} | {quote} | {pull} | {epigraph}
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export const NOTES = [
  {
    slug: "kotagiri-seed-trek",
    tag: "Field learning",
    title: "Took classroom to the beautiful hills of Kotagiri",
    excerpt: "The SEED study trek with Keystone Foundation took us into the rural Nilgiris to discover the region’s challenges by listening to the people who live them.",
    body: [
      "Just wrapped up the SEED study trek with Keystone Foundation and I’m still processing how much it shifted my thinking. The SEED (Sustainable Empowerment through Emerging Digitization) program took us into the rural Nilgiris, in and around Kotagiri near Ooty. The brief was simple but demanding: discover the core challenges of the region through on-field interaction with the people who live them, instead of assuming what they are.",
      "Over a week we visited tribal habitations, urban settlements, farmer producer organizations, PHCs, a gram panchayat, and Anganwadis. Kotagiri is home to many indigenous communities, living across steep hills and scattered villages, earning through tea, coffee, millets, forest produce and daily wages. We mapped village resources alongside the people who use them, walked through different facilities of the PHC with the doctors, and sat through candid conversations with panchayat members and community leaders about what actually gets in the way.",
      "The problems we observed were layered. The terrain and distance renders basic facilities inaccessible. Poor waste management and wildlife interactions are interconnected. Water, land and housing security is critical. Yet what stayed with me most was the spirit of the people. They keep pushing for their rights, and hold a deep attachment to their land, their language and culture. What people here want is not an escape, but a better life on the land they call home.",
      "But change is already underway. Producer organisations like Adimalai give tribal farmers a fair and dependable market. ASHA and community health workers bring care to the doorstep of every household. Instrumental laws like Forest Rights Act give communities a legal claim to the land their families have lived on for generations.",
      { h2: "Beliefs that did not survive" },
      "Some beliefs I walked in with did not survive:",
      { ul: [
        "<strong>A logical solution will be accepted.</strong> It won’t, if it ignores trust and attachment to land.",
        "<strong>Technology fixes problems.</strong> Only when it makes someone’s life easier, not harder.",
        "<strong>Consumerism is an urban problem.</strong> Microfinance for lifestyle expenses has seeped in rural areas as well.",
      ] },
      { h2: "Pesu (பேசு, “speak”)" },
      "As a final project for the trek, our team developed <strong>Pesu</strong> (பேசு, “speak”). This was built on one observation: people here are not short of ability, they are short of a safe place to practise talking to outsiders. Pesu lets people rehearse real conversations privately, like negotiating with a buyer or asking a bank officer about a loan, then pairs that with mentorship from college students. We presented this to diverse community stakeholders and had a constructive discussion.",
      "Grateful to the Keystone team and to every community member who gave us their time and honesty. And, all thanks to Prof. Sabareesh Ramachandran for making this trek so enriching, insightful and superfun at the same time.",
    ],
  },
  {
    slug: "recsys-discovery",
    tag: "Product thinking",
    title: "Understanding RecSys in a totally different perspective",
    excerpt: "“If it was already on their mental watchlist, they were going to watch it anyway.” A classroom question on prediction accuracy versus incremental discovery.",
    body: [
      "As an engineer, my initial idea of an “accurate” movie recommendation engine, like the ones powering Netflix or Prime Video, was purely technical: a recommendation system that successfully predicts a title sitting on the user’s dormant mental watchlist. If the algorithm surfaces Inception and the user clicks play, the model gets a high accuracy score, a click-through reward, and a clean engineering win.",
      "Then, during one of our classes, our professor hit us with a probing question that completely flipped my perspective:",
      { quote: "“If it was already on their mental watchlist, they were going to watch it anyway. By serving it to them, you’re wasting a high-value real estate recommendation slot. You’ve optimized for prediction accuracy, but you missed the business objective: incremental discovery.”" },
      "That moment exposed the gap between system performance and business value in recommendation science.",
      { h2: "The deeper economic reality of RecSys" },
      "<strong>Zero marginal intent vs. incremental lift.</strong> Recommending something a user already intends to watch captures zero incremental viewing hours or platform engagement. True business value comes from persuasion and discovery: nudging a user out of their comfort zone toward a title they wouldn’t have found on their own, thereby expanding their taste profile and deepening platform lock-in.",
      "<strong>The exploration vs. exploitation trade-off.</strong> Engineering teams are often hyper-focused on exploitation (recommending items similar to past history to maximize short-term click-through rate). But product strategy requires robust exploration (surfacing adjacent genres, international content, or indie gems). If you only exploit, you accelerate catalogue fatigue and trap users in a filter bubble.",
      "<strong>Opportunity cost of UI real estate.</strong> The homepage of a streaming app is scarce inventory. Every pixel dedicated to a “sure thing” is a missed opportunity to cross-sell higher-margin content, original IP (which reduces licensing dependency), or titles that prevent churn for a micro-segment.",
      { pull: "Great engineering builds a model that knows what you like. Great product management builds a model that teaches you what else you’ll love." },
      "What’s the best recommendation a streaming algorithm has ever given you, something you never would have clicked on otherwise?",
    ],
  },
  {
    slug: "healthcare-entrepreneurship",
    tag: "Entrepreneurship",
    title: "Reimagining healthcare; one idea at a time",
    excerpt: "A block-week of daily case studies, a term sheet negotiation simulation and a capstone pitch for an AI-driven insurance claims settlement SaaS platform.",
    body: [
      `I recently wrapped up one of the most intense, hands-on courses of my PGP journey at ${ext("https://www.linkedin.com/school/indian-school-of-business/", "Indian School of Business")}: Healthcare Entrepreneurship.`,
      "We navigated an aggressive block-week with comprehensive case studies every single day, unpacking real business journeys across diagnostics, MedTech, healthcare SaaS, specialized clinic chains, and digital health platforms.",
      { h2: "A few defining highlights" },
      { ul: [
        `<strong>Direct founder engagement.</strong> Analyzing real-world growth and operational hurdles for companies like ${ext("https://www.linkedin.com/company/orange-health/", "Orange Health Labs")}, ${ext("https://www.linkedin.com/company/practo-technologies-pvt-ltd/", "Practo")}, ${ext("https://www.linkedin.com/company/pharmeasy/", "PharmEasy")}, and ${ext("https://www.linkedin.com/company/healing-hands-clinic/", "Healing Hands Clinic")}, presenting our solutions directly to the founders, and dissecting the exact strategies they implemented on the ground.`,
        "<strong>Term sheet negotiation simulation.</strong> Stepping into the shoes of both VCs and founders to negotiate real-world deal structures, valuation drivers, and governance terms under pressure.",
        "<strong>End-to-end capstone pitch.</strong> Building a comprehensive business plan and go-to-market strategy for an AI-driven insurance claims settlement SaaS platform, which culminated in pitching directly to Siddhartha Nihalani, Practo.",
      ] },
      "The course went beyond strategy, grounding healthcare venture-building in frameworks spanning business design, market creation, competitive moats, platform dynamics, scaling, governance, and exits. From Timmons and Value Proposition Design to Blue Ocean and Founder’s Dilemma, every case connected theory to real-world decisions.",
      "Exhausting? Absolutely. But the depth of practical learning and live founder feedback made every late-night worth it.",
      "Grateful for the intense rigor, the incredible cohort, and the faculty who brought this immersive experience to life. Onward to applying these frameworks!",
    ],
  },
  {
    slug: "building-abhiyanta",
    tag: "Leadership & creativity",
    title: "The story of building stories",
    excerpt: "Being chief editor of the 108th edition of Abhiyanta, the annual college magazine of COEP, was nothing but a roller coaster ride. Here’s the story.",
    body: [
      { epigraph: "अभिसृति" },
      "How long did I wait to just hold this in my hand and flip through these actual pages instead of the PDFs which I had seen a zillion number of times… Here’s the story of the 108th edition of Abhiyanta, the annual college magazine of COEP! Being the chief editor of this edition was nothing but a roller coaster ride!",
      { ul: [
        "Did this include me and my team spending hours to make the content unconventional, understandable, thoughtful and most importantly error free? <strong>Yes.</strong>",
        "Did this get on my nerves sometimes? <strong>Yes.</strong>",
        "Did this call for crying sessions at 1 am thinking I would never be able to pull this off? <strong>Yes.</strong>",
        "Was it easy? <strong>No.</strong>",
        "But was the outcome worth all of this? <strong>Yessss!</strong>",
      ] },
      "To my co-editors, to my team, to my seniors, thank you so much for all your efforts! 🩵",
      "And friends and family who always kept cheering for me patiently, you all are precious.",
    ],
  },
];
