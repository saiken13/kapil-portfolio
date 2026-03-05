export type NavLink = {
  id: SectionId;
  label: string;
};

export type SectionId = "home" | "about" | "skills" | "experience" | "projects" | "contact";

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const portfolioData = {
  seo: {
    title: "Kapil Hingu | Full-Stack Software Engineer",
    description:
      "Portfolio of Kapil Hingu, a full-stack software engineer building scalable products with Next.js, FastAPI, and modern backend systems.",
    url: "https://example.com",
    image: "/og-image.svg",
  },
  profile: {
    name: "Kapil Hingu",
    role: "Full-Stack Software Engineer",
    location: "Chicago, USA",
    status: "Graduating June 2026 — open to full-time roles",
    tagline: "I build premium, high-performance digital products where clean UI meets practical backend engineering.",
    shortIntro:
      "I ship end-to-end products with polished interfaces, reliable APIs, and measurable business impact.",
    resumeHref: "/resume/Resume_Kapil_Hingu.pdf",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] as NavLink[],
  about: {
    bio: "Full-stack engineer with production experience across frontend and backend systems, focused on building high-utility products with measurable outcomes. I turn complex workflows into fast, intuitive user experiences.",
    highlights: [
      "Expected graduation: June 2026",
      "Interests: AI-powered products, backend architecture, developer tools",
      "Goal: Join a product-focused team to build high-impact software",
    ],
  },
  skills: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "SQL"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    },
    {
      title: "Backend",
      items: ["Node.js", "FastAPI", ".NET 8 Minimal APIs", "REST API Design"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Prisma ORM", "EF Core", "Query Optimization"],
    },
    {
      title: "Auth",
      items: ["OAuth 2.0", "JWT", "NextAuth", "Role-based Access Control"],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "AI Intern",
      company: "NeuralSeek",
      period: "Oct 2025 – Nov 2025",
      location: "Remote",
      points: [
        "Built AI-assisted workflows that streamlined research and decision support for real business use cases.",
        "Improved prompt and response pipelines to increase result consistency and reduce manual review cycles.",
        "Collaborated with product and engineering to ship features quickly with reliable UX and backend behavior.",
      ],
    },
    {
      role: "Software Developer",
      company: "Reliance Jio Platforms Ltd",
      period: "Jul 2022 – Oct 2023",
      location: "India",
      points: [
        "Delivered full-stack features with dependable API integrations and production-ready UI implementation.",
        "Optimized backend services and database queries for lower latency and better throughput under load.",
        "Contributed to production deployments with a strong focus on stability, monitoring, and maintainable code quality.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "OptiFi",
      summary:
        "A finance intelligence platform focused on clean workflows, fast interactions, and decision-ready insights.",
      impact: "Improved visibility into financial data and reduced time-to-insight for key decisions.",
      stack: ["TypeScript", "React", "Tailwind CSS", "API Integration"],
      github: "https://github.com/saiken13/OptiFi.git",
      live: "https://optifi-murex.vercel.app/",
      featured: true,
    },
    {
      title: "AI Business Analyst",
      summary:
        "A product that transforms business context into AI-assisted analysis workflows through a modern dashboard.",
      impact: "Reduced manual analysis effort and accelerated decision-making turnaround for users.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "FastAPI", "C#"],
      github: "https://github.com/saiken13/ai-business-analyst.git",
      live: "https://ai-business-analyst-two.vercel.app/",
    },
    {
      title: "Personal Timeline",
      summary:
        "A timeline platform for organizing milestones and events with secure auth and scalable APIs.",
      impact: "Made personal and professional milestone tracking structured, searchable, and secure.",
      stack: ["React", ".NET 8 Minimal API", "C#", "OAuth", "JWT"],
      github: "https://github.com/saiken13/personal-timeline.git",
    },
  ] as ProjectItem[],
  contact: {
    email: "kapilhingukok@gmail.com",
    github: "https://github.com/saiken13",
    linkedin: "https://www.linkedin.com/in/kapil-hingu/",
  },
};
