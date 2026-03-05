import { portfolioData } from "@/data/data";
import { SectionContainer } from "@/components/section-container";

export function HeroSection() {
  return (
    <SectionContainer id="home" title="Home" eyebrow="Introduction">
      <p className="max-w-2xl text-xl leading-relaxed text-slate-200">{portfolioData.profile.shortIntro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={portfolioData.profile.resumeHref}
          className="rounded-xl border border-sky-100/35 bg-gradient-to-r from-sky-200/20 to-cyan-200/10 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-sky-100/60 hover:from-sky-200/30 hover:to-cyan-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.015] hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Contact
        </a>
      </div>
    </SectionContainer>
  );
}
