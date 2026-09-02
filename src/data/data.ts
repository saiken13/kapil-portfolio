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
    status: "M.S. Computer Science, June 2026 — open to full-time roles",
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
    bio: "AI Software Engineer with 3+ years of experience building agentic AI platforms, production backend systems, and payment infrastructure at scale. Shipped 7-agent LLM orchestration with LangGraph, RAG pipelines using vector embeddings, and B2B e-commerce features scaling from 150K to 350K users. Completed M.S. in Computer Science at DePaul University (GPA: 3.78, June 2026).",
    highlights: [
      "Won Most Original Idea at HackDePaul 2025 for Sukoon — an AI wellness scheduler built in 24 hours",
      "Attended 2 hackathons in the US",
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "DePaul University, Chicago, IL",
        period: "June 2026",
        gpa: "GPA: 3.78",
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
        school: "Pillai HOC College of Engineering, India",
        period: "June 2019 – June 2022",
        gpa: null,
        coursework: [],
      },
    ] as EducationItem[],
  },
  skills: [
    {
      title: "AI Software Engineering & GenAI",
      color: "violet",
      items: [
        "LLM Integration",
        "Production RAG Architectures",
        "Autonomous AI Agents",
        "LangChain",
        "LlamaIndex",
        "OpenAI API",
        "Claude API",
        "Prompt Engineering",
        "Semantic Search & Embeddings",
        "Function Calling",
        "Tool Use",
      ],
    },
    {
      title: "Backend & Data",
      color: "sky",
      items: [
        "Python",
        "TypeScript",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Django",
        "Flask",
        "RESTful APIs",
        "GraphQL",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "SQLAlchemy",
        "Prisma ORM",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "SQL Server",
        "Redis",
        "Apache Kafka",
        "OAuth2",
        "JWT Authentication",
      ],
    },
    {
      title: "Frontend",
      color: "pink",
      items: ["React.js", "Next.js", "React Native", "Angular", "Redux Toolkit", "Context API", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Cloud, DevOps & Testing",
      color: "amber",
      items: [
        "AWS (EC2, S3, RDS, Lambda, CloudWatch)",
        "Azure",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "CI/CD",
        "Nginx",
        "PyTest",
        "Jest",
        "Postman",
        "Swagger / OpenAPI",
        "Datadog",
        "Prometheus",
        "Grafana",
        "OWASP Security Best Practices",
        "Git",
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "AI Software Engineer",
      company: "CVS Health",
      period: "Nov 2025 – Present",
      location: "United States",
      points: [
        "Engineered and deployed scalable LLM-powered clinical documentation processing pipelines utilizing Python, FastAPI, and OpenAI APIs, reducing manual review turnaround time by 35% across regional healthcare facilities.",
        "Architected a production-grade Retrieval-Augmented Generation system integrated with Pinecone vector databases and LangChain, improving medical knowledge retrieval precision and reducing hallucination rates by 28%.",
        "Developed autonomous AI agents using function calling and semantic search frameworks to automate patient triage workflows, handling over 15,000 monthly automated inquiries with a 94% resolution accuracy.",
        "Optimized microservices backend infrastructure and asynchronous API endpoints deployed on AWS, Lambda, ECS and Docker, reducing system latency by 42% under high-concurrency workloads.",
        "Implemented strict model evaluation protocols, data masking, and JWT, OAuth2 security guardrails to ensure full HIPAA compliance across all generative AI applications and cloud data storage layers.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Reliance Jio Platforms",
      period: "Jul 2022 – Jul 2024",
      location: "India",
      points: [
        "Architected and scaled a high-traffic consumer web platform from 150K to 350K+ active users by engineering full-stack features end-to-end using React, TypeScript, Java, and Node.js, seamlessly processing 20M+ daily events.",
        "Developed robust payment microservices secured with OAuth2 and JWT authentication, achieving zero critical production failures across high-volume monthly transaction workflows while implementing real-time status updates.",
        "Optimized heavy PostgreSQL backend workloads by cutting query execution times by 45% through strategic database schema redesign, advanced indexing, and performance tuning.",
        "Boosted core frontend web vitals, raising Google Lighthouse performance scores by 30% via component architecture refactoring, code-splitting, and building reusable React design systems adopted across the engineering team.",
        "Spearheaded quality assurance and DevOps efficiency by cutting sprint regression rates by 35% through automated testing pipelines, standardized ESLint rules, and streamlined CI/CD code review workflows within an 8-engineer Agile team.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Citus Infotech",
      period: "Jul 2021 – Jun 2022",
      location: "India",
      points: [
        "Built and optimized dynamic full-stack web modules using Python, Django, Flask and JavaScript, accelerating internal data processing workflows and reducing client-facing page load times by 30%.",
        "Designed and integrated RESTful APIs and microservices architectures to connect external third-party services, securely handling over 50,000 daily API requests with high availability.",
        "Refactored legacy SQL database schemas and implemented targeted query indexing in PostgreSQL and MySQL, lowering database response latency by 40% during peak operational traffic.",
        "Deployed containerized microservices environments using Docker and automated CI/CD deployment pipelines on Linux servers, cutting manual release deployment cycles by 50%.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "OptiFi",
      date: "Feb 2026 – Mar 2026",
      summary:
        "Production multi-agent AI platform built end to end: LangGraph orchestration, RAG pipelines with pgvector semantic search, FastAPI REST APIs, React and TypeScript frontend, PostgreSQL on AWS Lambda with OAuth2 auth, GitHub Actions CI/CD, and CloudWatch monitoring.",
      impact: "ETL ingestion pipelines reduced manual processing by 80%.",
      stack: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "RAG Pipelines",
        "pgvector",
        "OpenAI API",
        "Claude API",
        "PostgreSQL",
        "React",
        "TypeScript",
        "AWS Lambda",
        "OAuth2",
        "GitHub Actions",
        "CloudWatch",
      ],
      github: "https://github.com/saiken13/OptiFi",
      live: "https://optifi-murex.vercel.app/login",
      featured: true,
    },
    {
      title: "AI Business Analyst",
      date: "Feb 2026 – Mar 2026",
      summary:
        "AI-powered business analytics dashboard built end to end with Next.js and Prisma, integrating Groq and OpenAI LLM APIs to generate data-driven insights, with NextAuth authentication and Recharts visualizations.",
      impact: "Reduced manual data exploration effort by 80%.",
      stack: ["Next.js", "React", "TypeScript", "Prisma ORM", "Groq", "OpenAI API", "NextAuth", "Recharts", "GitHub Actions", "Vercel"],
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
