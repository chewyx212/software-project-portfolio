export const siteMetadata = {
  name: "Chew Yuen Xuen",
  shortName: "CYX",
  role: "Frontend-focused Full Stack Engineer",
  location: "Malaysia",
  email: "paulyx212@gmail.com",
  description:
    "Portfolio of Chew Yuen Xuen, a frontend-focused full stack engineer building products across payments, insurance, and operations.",
  availability: "Open to product collaborations, freelance builds, and focused MVP work.",
  resumeUrl: "/documents/Chew_Yuen_Xuen_Resume_2026.pdf",
  primaryCTA: {
    label: "Message On Messenger",
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
      "I design and build web products with clear interfaces, dependable systems, and practical business value.",
    summary:
      "My work spans insurance platforms, payment integrations, internal operations systems, and early-stage MVPs. I care about software that feels polished on the surface and holds up technically underneath.",
    proofPoints: [
      "Frontend and backend ownership across product delivery",
      "Experience in payments, insurance, and operational systems",
      "Comfortable working from UI through data model, APIs, and deployment",
    ],
    credibility: [
      "5+ years shipping production software",
      "Main contributor on EzSub at Singlife",
      "Payment integration work at FeedMe and full ownership of Fleevigo OMS",
    ],
  },
  about: {
    kicker: "About Me",
    title: "Engineering with product judgment, clean delivery, and experience in complex domains.",
    paragraphs: [
      "My background is in software environments where reliability matters: fintech, insurance, payments, and operations tooling. That experience shapes how I build. I focus on clear user flows, sensible architecture, and software that stays useful when real users depend on it.",
      "I work best when the job needs both product thinking and technical ownership. That means shaping the interface people trust, then building the backend, data model, integrations, and deployment details that support it properly.",
    ],
    highlights: [
      "5+ years shipping production software",
      "Main contributor on Singlife EzSub",
      "Payment integration work at FeedMe",
      "Solo builder of Fleevigo OMS",
    ],
  },
  contact: {
    kicker: "Contact",
    heading: "If you need a product builder who can own both interface and system design, let us talk.",
    note:
      "Messenger is the fastest way to reach me. I am open to freelance product work, MVP builds, and software projects that need both polished delivery and technical ownership.",
  },
} as const;
