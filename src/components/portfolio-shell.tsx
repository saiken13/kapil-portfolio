"use client";

import { Sidebar } from "@/components/sidebar";
import { portfolioData } from "@/data/data";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { useEffect, useRef, useState } from "react";

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState("home");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = contentRef.current;
    const elements = portfolioData.navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!root || elements.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const rootRect = root.getBoundingClientRect();
      const marker = rootRect.top + 140;

      let nextActive = elements[0].id;

      for (const section of elements) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= marker) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      const nearBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 8;
      if (nearBottom) {
        nextActive = elements[elements.length - 1].id;
      }

      setActiveSection(nextActive);
    };

    updateActiveSection();
    root.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      root.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-10 pt-8 sm:px-8 lg:h-screen lg:grid-cols-[minmax(300px,390px)_1fr] lg:gap-12 lg:overflow-hidden lg:py-8">
        <div className="lg:border-r lg:border-white/10 lg:py-6 lg:pr-10">
          <Sidebar
            name={portfolioData.profile.name}
            role={portfolioData.profile.role}
            tagline={portfolioData.profile.tagline}
            location={portfolioData.profile.location}
            status={portfolioData.profile.status}
            navLinks={portfolioData.navLinks}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </div>

        <main
          ref={contentRef}
          className="panel-scrollbar space-y-12 pb-8 lg:h-full lg:overflow-y-auto lg:py-6 lg:pr-3"
          aria-label="Portfolio content"
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
