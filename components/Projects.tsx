"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Production-style projects blending secure systems, UX quality, and domain-specific problem solving.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {portfolio.projects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            className="glass-card group overflow-hidden p-3 hover:-translate-y-1 hover:shadow-seraGlow"
          >
            <div className="relative overflow-hidden rounded-xl border border-sera">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={720}
                quality={72}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/35 to-transparent" />
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-textWhite">{project.name}</h3>
              <p className="mt-2 text-sm text-mutedText">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
              <ul className="mt-4 space-y-1 text-sm text-mutedText">
                {project.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="cta-outline" aria-label={`GitHub of ${project.name}`}>
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
