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
    tagline: "I design reliable full-stack systems where clean interfaces meet practical backend engineering.",
    shortIntro:
      "I build products with a focus on strong architecture, efficient APIs, and polished frontend UX that recruiters and users can trust.",
    resumeHref: "/resume/Resume_Fullstack_1.pdf",
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
    bio: "Full-stack engineer with production experience across frontend and backend systems, focused on building useful products with measurable outcomes. I enjoy turning complex workflows into simple, fast experiences.",
    highlights: [
      "Expected graduation: June 2026",
      "Interests: AI-powered products, backend architecture, developer tools",
      "Goal: Join a product-focused team to build high-impact software",
    ],
  },
  skills: [
    {
      title: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C#"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "FastAPI", ".NET 8 Minimal APIs"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Prisma", "EF Core"],
    },
    {
      title: "Auth",
      items: ["OAuth", "JWT", "NextAuth"],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "AI Intern",
      company: "NeuralSeek",
      period: "Oct 2025 – Nov 2025",
      location: "Remote",
      points: [
        "Built AI-assisted workflows to streamline research and decision support for business use cases.",
        "Improved prompt and response pipelines to increase consistency and reduce manual review cycles.",
        "Collaborated across product and engineering teams to ship practical features quickly.",
      ],
    },
    {
      role: "Software Developer",
      company: "Reliance Jio Platforms Ltd",
      period: "Jul 2022 – Oct 2023",
      location: "India",
      points: [
        "Delivered full-stack features with reliable API integrations and clean UI implementation.",
        "Optimized backend services and database interactions for lower latency and better throughput.",
        "Contributed to production deployments with a focus on stability and maintainable code quality.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "AI Business Analyst",
      summary:
        "A product that transforms business context into AI-assisted analysis workflows with a modern dashboard experience.",
      impact: "Reduced manual analysis effort and improved decision-making turnaround for users.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "FastAPI", "C#"],
      github: "https://github.com/saiken13/ai-business-analyst.git",
      live: "https://ai-business-analyst-two.vercel.app/",
      featured: true,
    },
    {
      title: "Personal Timeline",
      summary:
        "A timeline platform for organizing milestones and events with secure authentication and a scalable API.",
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
