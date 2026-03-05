import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";

export function AboutSection() {
  return (
    <SectionContainer id="about" title="About" eyebrow="Who I am">
      <p className="max-w-3xl text-base leading-relaxed text-slate-300">{portfolioData.about.bio}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {portfolioData.about.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-slate-200/[0.02] px-4 py-3 text-sm text-slate-300"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
