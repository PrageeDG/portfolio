"use client";

import { motion } from "framer-motion";
import { Layers3, BrainCircuit, Palette } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const highlights = [
  { title: "Full-Stack Development", icon: Layers3 },
  { title: "AI & Data Science", icon: BrainCircuit },
  { title: "Modern UI/UX", icon: Palette },
];

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <h2 className="section-title">About</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 sm:p-8"
        >
          <p className="text-sm leading-relaxed text-mutedText sm:text-base">{portfolio.about}</p>
        </motion.article>

        <div className="grid gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="glass-card group p-5 transition hover:-translate-y-1 hover:shadow-seraGlow"
              >
                <Icon size={20} className="text-seraBlue" />
                <h3 className="mt-2 text-lg font-semibold text-textWhite">{item.title}</h3>
                <p className="mt-1 text-sm text-mutedText">Premium engineering with clean architecture and measurable user impact.</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
