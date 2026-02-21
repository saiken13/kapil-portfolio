import { SectionContainer } from "@/components/section-container";
import { portfolioData } from "@/data/data";

export function SkillsSection() {
  return (
    <SectionContainer id="skills" title="Skills" eyebrow="Toolkit">
      <div className="space-y-5">
        {portfolioData.skills.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">{group.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-emerald-200/35 hover:text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
