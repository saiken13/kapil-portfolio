export type NavLink = {
  id: SectionId;
  label: string;
};

export type SectionId = "home" | "about" | "skills" | "experience" | "projects" | "contact";

export type SkillCategory = {
  title: string;
  color: "violet" | "sky" | "pink" | "amber";
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
  date: string;
  summary: string;
  impact: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  gpa: string | null;
  coursework: string[];
};

export const portfolioData = {
  seo: {
    title: "Kapil Hingu | AI Software Engineer",
    description:
      "Portfolio of Kapil Hingu, an AI Software Engineer with 3+ years of experience building agentic AI platforms, production backend systems, and payment infrastructure at scale.",
    url: "https://kapil-portfolio-lemon.vercel.app",
    image: "/og-image.svg",
  },
  profile: {
    name: "Kapil Hingu",
    role: "AI Software Engineer",
    location: "Chicago, IL",
    status: "Graduating June 2026 — open to full-time roles",
    tagline: "I build agentic AI platforms, production backend systems, and high-impact digital products that scale.",
    shortIntro:
      "AI Software Engineer with 3+ years shipping 7-agent LLM orchestration, RAG pipelines, and payment infrastructure that scaled to 350K users.",
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
    bio: "AI Software Engineer with 3+ years of experience building agentic AI platforms, production backend systems, and payment infrastructure at scale. Shipped 7-agent LLM orchestration with LangGraph, RAG pipelines using vector embeddings, and B2B e-commerce features scaling from 150K to 350K users. Completing M.S. in Computer Science at DePaul University (GPA: 3.74, June 2026).",
    highlights: [
      "Won Most Original Idea at HackDePaul 2025 for Sukoon — an AI wellness scheduler built in 24 hours",
      "Attended 2 hackathons in the US",
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "DePaul University, Chicago, IL",
        period: "Expected June 2026",
        gpa: "GPA: 3.74",
        coursework: [
          "Algorithms and Data Structures",
          "Database Systems",
          "Distributed Systems",
          "Artificial Intelligence",
          "Machine Learning Applications",
          "DevOps and Continuous Delivery",
          "Enterprise Computing",
          "Agile Software Development",
        ],
      },
      {
        degree: "B.E. Computer Engineering",
        school: "Mumbai University",
        period: "June 2022",
        gpa: null,
        coursework: [],
      },
    ] as EducationItem[],
  },
  skills: [
    {
      title: "Agentic AI",
      color: "violet",
      items: [
        "LangChain",
        "LangGraph",
        "Multi-Agent Orchestration",
        "RAG Pipelines",
        "Vector Embeddings",
        "OpenAI API",
        "Anthropic API",
        "Groq",
        "Prompt Engineering",
        "Claude Code",
        "Cursor",
        "Codex",
      ],
    },
    {
      title: "Backend",
      color: "sky",
      items: [
        "Python (FastAPI)",
        "Java (Spring Boot)",
        "Spring Security",
        "Node.js",
        "RESTful APIs",
        "gRPC",
        "Microservices",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLAlchemy",
        "Prisma ORM",
        "OAuth2",
        "JWT",
        "ETL Workflows",
        "Maven",
      ],
    },
    {
      title: "Frontend",
      color: "pink",
      items: ["React", "Next.js", "Redux", "TypeScript", "JavaScript (ES6+)", "TailwindCSS", "shadcn/ui", "Recharts"],
    },
    {
      title: "Cloud and DevOps",
      color: "amber",
      items: [
        "AWS (EC2, S3, RDS, Lambda, CloudWatch)",
        "Docker",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
        "CI/CD",
        "JUnit",
        "Pytest",
        "SonarQube",
        "Git",
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "AI Intern (Software Engineering)",
      company: "NeuralSeek",
      period: "Oct 2025 – Nov 2025",
      location: "Chicago, IL",
      points: [
        "Designed and shipped a retrieval-augmented backend service grounding LLM responses via vector embeddings and semantic search, reducing AI error rates by 35% and improving decision accuracy by 30%.",
        "Built modular REST API services with intent-based routing and structured logging; leveraged Claude Code and Cursor to deliver production features 2x faster while self-managing end-to-end from design through deployment.",
        "Participated in code reviews, sprint planning, and architectural discussions; integrated third-party APIs and maintained production systems to ensure platform reliability.",
      ],
    },
    {
      role: "Backend Engineer",
      company: "Veltrix",
      period: "Oct 2024 – Sep 2025",
      location: "Chicago, IL (Hybrid)",
      points: [
        "Re-architected three high-use REST API endpoints in Node.js and PostgreSQL with schema optimizations, query indexing, and Redis caching, bringing average response time down by 30% and reducing database load by 40%.",
        "Diagnosed latency spikes across the microservices architecture using distributed tracing; introduced gRPC for internal service calls and implemented circuit breaker patterns, cutting p95 latency by 25%.",
        "Owned end-to-end CI/CD pipeline migration to GitHub Actions with automated testing gates, reducing failed production releases by 40% and shrinking deploy cycle time by 60%.",
        "Delivered two backend modules end-to-end with full ownership from design to deployment, ramping up independently on an unfamiliar codebase with zero critical bugs post-release.",
      ],
    },
    {
      role: "Software Developer",
      company: "Reliance Jio Platforms Ltd",
      period: "Jul 2022 – Jul 2024",
      location: "Mumbai, India",
      points: [
        "Architected and scaled a B2B e-commerce SaaS platform from 150K to 350K active users, engineering cart, checkout, and payment workflows in React, Redux-Saga, and PostgreSQL with distributed microservices architecture.",
        "Built distributed payment microservices handling 1,000+ monthly transaction failures; implemented JWT-based auth and refund workflows in Node.js and Express, maintaining zero critical payment failures across all processing.",
        "Designed and optimized PostgreSQL schemas applying OOP principles and design patterns, reducing query execution time by 45% and supporting a 2x increase in concurrent users without performance degradation.",
        "Spearheaded refactoring of 3,000+ lines to ES6+, improving Lighthouse scores by 30%, and re-architected a desktop-only UI into a fully responsive mobile application across 12 regional offices.",
        "Led technical design reviews across 8 engineers, standardizing microservices component architecture and agile practices that cut sprint regression rate by 35%.",
      ],
    },
    {
      role: "Python Developer Intern",
      company: "Sahu Technologies",
      period: "Jul 2021 – Aug 2021",
      location: "Mumbai, India",
      points: [
        "Built Python ETL pipelines and automation scripts using OOP principles; delivered reusable backend modules following production coding standards and Git version control.",
        "Applied data integrity checks and scripting automation; incorporated feedback from senior developers to improve code quality.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "OptiFi",
      date: "Feb 2026 – Mar 2026",
      summary:
        "Agentic AI financial intelligence platform featuring a 7-agent LLM orchestration layer with LangGraph for intent-based query routing, RAG pipelines over financial documents using vector embeddings, and a React/TypeScript frontend with interactive dashboards. Built entirely using Claude Code and Cursor. Deployed on AWS with OAuth2 authentication and GitHub Actions CI/CD.",
      impact: "ETL ingestion pipelines reduced manual processing by 80%.",
      stack: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "RAG Pipelines",
        "OpenAI API",
        "Anthropic API",
        "PostgreSQL",
        "React",
        "TypeScript",
        "AWS",
        "OAuth2",
        "GitHub Actions",
      ],
      github: "https://github.com/saiken13/OptiFi",
      live: "https://optifi-murex.vercel.app/login",
      featured: true,
    },
    {
      title: "AI Data Analytics Platform",
      date: "Feb 2026 – Mar 2026",
      summary:
        "Full-stack analytics platform with Next.js App Router and TypeScript featuring automated CSV ingestion pipelines, PostgreSQL schema via Prisma ORM, NextAuth and OAuth2 session management, and interactive Recharts dashboards. Automated data profiling workflows.",
      impact: "Reduced manual data exploration effort by 80%.",
      stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth", "OAuth2", "Recharts", "GitHub Actions", "Vercel"],
      github: "https://github.com/saiken13/AI-Data-Analytics-Platform",
    },
    {
      title: "Real Estate Management Platform",
      date: "Apr 2025 – Jun 2025",
      summary:
        "Enterprise REST API backend with Java Spring Boot featuring role-based access control (BUYER, AGENT, ADMIN), JWT-secured authentication via Spring Security, rate-limiting middleware, and centralized exception handling. Relational MySQL schema with Spring Data JPA and JUnit automated test suite.",
      impact: "Production-grade reliability and data integrity for enterprise use.",
      stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "MySQL", "REST APIs", "JUnit", "Maven"],
      github: "https://github.com/saiken13/real-estate-property-management-system",
    },
    {
      title: "Personal Activity Timeline",
      date: "Oct 2025 – Nov 2025",
      summary:
        "Full-stack personal dashboard aggregating activity across GitHub, Notion, and Todoist into a unified timeline view. Integrated three OAuth2-secured third-party REST APIs with normalized data models. ASP.NET Core backend with modular REST API service contracts and CI/CD deployment pipeline.",
      impact: "Unified cross-platform activity tracking with consistent data models.",
      stack: ["React", "TypeScript", "ASP.NET Core", "C#", "GitHub API", "Notion API", "Todoist API", "OAuth2", "CI/CD"],
      github: "https://github.com/saiken13/PersonalTimeline",
    },
    {
      title: "gRPC Distributed File Retrieval",
      date: "Jan 2025 – Mar 2025",
      summary:
        "Distributed client-server system in Java using gRPC and Protocol Buffers for remote file retrieval and keyword search. Designed RPC service contracts and multithreaded backend to handle concurrent requests. Benchmarked latency and throughput across concurrency levels.",
      impact: "Validated distributed architecture scalability and fault tolerance under load.",
      stack: ["Java", "gRPC", "Protocol Buffers", "Multithreading", "Distributed Systems"],
      github: "https://github.com/saiken13/grpc-file-retrieval-service",
    },
    {
      title: "CI/CD Pipeline and Cloud Deployment",
      date: "2025",
      summary:
        "Production-grade Jenkins CI/CD pipeline with automated build, test, SonarQube code quality gates, OWASP security scanning, and JaCoCo coverage enforcement. Containerized with Docker and deployed to AWS EC2 via Terraform infrastructure-as-code. Configured AWS CloudWatch monitoring dashboards.",
      impact: "Full production observability with automated quality gates and security scanning.",
      stack: ["Jenkins", "Docker", "Terraform", "AWS EC2", "S3", "CloudWatch", "SonarQube", "OWASP", "JaCoCo", "GitHub Actions"],
      github: "https://github.com/SE441-lab/lab5-saiken13",
    },
  ] as ProjectItem[],
  contact: {
    email: "kapilhingukok@gmail.com",
    phone: "+1(773)200-9724",
    github: "https://github.com/saiken13",
    linkedin: "https://www.linkedin.com/in/kapil-hingu/",
  },
};
