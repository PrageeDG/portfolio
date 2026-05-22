"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <h2 className="section-title">Education</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {portfolio.education.map((edu) => (
          <article key={edu.institute} className="glass-card p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-seraGlow">
            <div className="inline-flex rounded-xl border border-sera bg-seraBlue/10 p-2 text-seraBlue">
              <GraduationCap size={18} />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-textWhite">{edu.institute}</h3>
            <p className="mt-1 text-softBlue">{edu.program}</p>
            <p className="mt-2 text-sm text-mutedText">{edu.period}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-sm text-mutedText">
              <MapPin size={14} />
              {edu.location}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
