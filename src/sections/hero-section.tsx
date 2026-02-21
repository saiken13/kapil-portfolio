import { portfolioData } from "@/data/data";
import { SectionContainer } from "@/components/section-container";

export function HeroSection() {
  return (
    <SectionContainer id="home" title="Home" eyebrow="Introduction">
      <p className="max-w-2xl text-xl leading-relaxed text-zinc-200">{portfolioData.profile.shortIntro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={portfolioData.profile.resumeHref}
          className="rounded-xl border border-emerald-200/30 bg-emerald-300/10 px-5 py-2.5 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/50 hover:bg-emerald-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Contact
        </a>
      </div>
    </SectionContainer>
  );
}
