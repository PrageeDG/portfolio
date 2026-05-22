"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <h2 className="section-title">Education</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {portfolio.education.map((edu, idx) => (
          <motion.article
            key={edu.institute}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card p-6"
          >
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
