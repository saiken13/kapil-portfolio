import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";

export function ProjectsSection() {
  const featured = portfolioData.projects.find((project) => project.featured);
  const rest = portfolioData.projects.filter((project) => !project.featured);

  return (
    <SectionContainer id="projects" title="Projects" eyebrow="Selected work">
      {featured ? (
        <article className="rounded-2xl border border-emerald-200/25 bg-gradient-to-br from-emerald-300/10 via-zinc-900 to-zinc-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Featured Project</p>
          <h3 className="mt-2 text-2xl font-semibold text-zinc-50">{featured.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">{featured.summary}</p>
          <p className="mt-3 text-sm text-zinc-200">Impact: {featured.impact}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-200">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={featured.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 px-3 py-2 text-sm text-zinc-100 transition hover:border-white/40"
            >
              GitHub
            </a>
            {featured.live ? (
              <a
                href={featured.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-3 py-2 text-sm text-zinc-100 transition hover:border-white/40"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </article>
      ) : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {rest.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.04] via-zinc-900 to-zinc-900 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-white/25"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Project</p>
            <h3 className="mt-2 text-lg font-medium text-zinc-100">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.summary}</p>
            <p className="mt-2 text-sm text-zinc-200">Impact: {project.impact}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-lg border border-white/20 px-3 py-2 text-sm text-zinc-100 transition hover:border-white/40"
            >
              View Repository
            </a>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
