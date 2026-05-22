"use client";

import { Code2, MonitorSmartphone, ServerCog, Database, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionReveal from "@/components/SectionReveal";

const icons = {
  "Programming Languages": Code2,
  "Frontend Technologies": MonitorSmartphone,
  "Backend Technologies": ServerCog,
  Databases: Database,
  "Authentication & Security": ShieldCheck,
  "Tools & Platforms": Wrench,
  "Other Technologies": Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Category-based engineering stack with secure backend, polished UI systems, and practical tooling.</p>

      <SectionReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delay={0.03}>
        {portfolio.skills.map((skill) => {
          const Icon = icons[skill.title as keyof typeof icons] ?? Sparkles;
          return (
            <article key={skill.title} className="glass-card group p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-seraGlow">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-seraBlue" />
                <h3 className="text-base font-semibold text-softBlue">{skill.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </SectionReveal>
    </section>
  );
}
