export const siteMetadata = {
  name: "Paul Chew",
  shortName: "PC",
  role: "Frontend-focused Full Stack Engineer",
  location: "Malaysia",
  email: "paulyx212@gmail.com",
  description:
    "Portfolio of Paul Chew, a frontend-focused full stack engineer building products across insurance, merchant software, and operations.",
  availability:
    "Open to product collaborations, freelance builds, and focused MVP work.",
  resumeUrl: "/documents/Chew_Yuen_Xuen_Resume_2026.pdf",
  primaryCTA: {
    label: "Let's Chat Now!",
    href: "https://m.me/chewyx212",
  },
  secondaryCTA: {
    label: "View Selected Work",
    href: "#work",
  },
  socialLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yuen-xuen-chew/",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/chewyx212",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://web.facebook.com/chewyx212",
    },
  ],
  hero: {
    kicker: "Portfolio",
    offerLead:
      "I build web products with clear interfaces and dependable systems.",
    summary:
      "My work spans insurance, merchant software, internal operations tools, and early-stage MVPs.",
    proofPoints: [
      "Frontend and backend ownership across product delivery",
      "Experience in payments, insurance, and operational systems",
      "Comfortable working from UI through data model, APIs, and deployment",
    ],
    snapshotCards: [
      {
        eyebrow: "Experience",
        value: "5+ Years",
        detail:
          "Shipping production software across insurance, merchant platforms, payments, and operations.",
      },
      {
        eyebrow: "Core Domains",
        items: ["Systems", "Operations", "Payments", "AI"],
      },
      {
        eyebrow: "Selected Work",
        items: ["EzSub at Singlife", "FeedMe product delivery", "Fleevigo OMS"],
      },
    ],
    credibility: [
      "5+ years shipping production software",
      "Main contributor on EzSub at Singlife",
      "Product and checkout delivery at FeedMe and full ownership of Fleevigo OMS",
    ],
  },
  about: {
    kicker: "About Me",
    title: "Product-minded engineering for complex domains.",
    lead: "Clear UX, dependable systems, and end-to-end delivery.",
    summary:
      "Frontend-focused full stack engineer with experience across insurance, merchant platforms, payments, and internal operations software.",
    paragraphs: [
      "My background is in software environments where reliability matters: fintech, insurance, payments, and operations tooling. That experience shapes how I build. I focus on clear user flows, sensible architecture, and software that stays useful when real users depend on it.",
      "I work best when the job needs both product thinking and technical ownership. That means shaping the interface people trust, then building the backend, data model, integrations, and deployment details that support it properly.",
    ],
    highlights: [
      "5+ years shipping production software",
      "Main contributor on Singlife EzSub",
      "Product and checkout work at FeedMe",
      "Solo builder of Fleevigo OMS",
    ],
  },
  contact: {
    kicker: "Contact",
    heading: "Need a builder who can own product and delivery?",
    note: "Messenger is the fastest way to reach me for freelance work, MVPs, and product builds.",
  },
} as const;
