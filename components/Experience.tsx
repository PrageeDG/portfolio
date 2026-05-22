"use client";

import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionReveal from "@/components/SectionReveal";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">Timeline of practical development and technical problem-solving experience.</p>

      <SectionReveal className="relative mt-8 space-y-6 before:absolute before:left-3 before:top-1 before:h-[calc(100%-12px)] before:w-px before:bg-seraBlue/50 sm:before:left-1/2" delay={0.05}>
        {portfolio.experience.map((exp, idx) => (
          <article
            key={exp.title + exp.date}
            className={`relative ml-10 glass-card p-5 sm:ml-0 sm:w-[calc(50%-1rem)] ${idx % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
          >
            <span className={`absolute top-6 flex h-6 w-6 items-center justify-center rounded-full border border-sera bg-darkBg ${idx % 2 === 0 ? "-left-8 sm:-right-8 sm:left-auto" : "-left-8"}`}>
              <BriefcaseBusiness size={14} className="text-seraBlue" />
            </span>
            <span className="mb-3 inline-flex rounded-full border border-sera bg-seraBlue/10 px-3 py-1 text-xs text-softBlue sm:absolute sm:right-5 sm:top-5">
              {exp.date}
            </span>
            <h3 className="text-lg font-semibold text-textWhite">{exp.title}</h3>
            <p className="mt-1 text-sm text-softBlue">{exp.companyType}</p>
            <ul className="mt-4 space-y-2 text-sm text-mutedText">
              {exp.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
            {exp.website ? (
              <a href={exp.website} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-softBlue hover:text-seraBlue">
                Visit Website
                <ExternalLink size={14} />
              </a>
            ) : null}
          </article>
        ))}
      </SectionReveal>
    </section>
  );
}
