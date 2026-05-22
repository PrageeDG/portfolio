import Image from "next/image";
import { Download, FolderKanban, Mail, Code2, Database, Cpu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-10 top-24 -z-10 hidden h-56 w-56 rounded-full bg-seraBlue/30 blur-[90px] sm:block" />
      <div className="pointer-events-none absolute right-16 top-28 -z-10 hidden h-64 w-64 rounded-full bg-cyanAccent/20 blur-[110px] sm:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-sera bg-seraBlue/10 px-4 py-1 text-xs tracking-[0.18em] text-softBlue">
            {portfolio.heroBadge}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-textWhite sm:text-5xl lg:text-6xl">
            {portfolio.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mutedText sm:text-lg">{portfolio.heroSubtitle}</p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className="cta-primary">
              <FolderKanban size={16} />
              View Projects
            </a>
            <a href="#contact" className="cta-secondary">
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="https://github.com/PrageeDG/portfolio/releases/download/CV/Prageeth_S_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="cta-outline"
              aria-label="Download CV"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="glass-card relative p-5 sm:p-6">
          <div className="relative mb-4 overflow-hidden rounded-xl border border-sera">
            <Image
              src="/me.jpeg"
              alt="Prageeth Gunarathne"
              width={1200}
              height={1300}
              priority
              quality={70}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
              className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBg/25 to-transparent" />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="glass-card p-3">
              <Code2 size={18} className="text-seraBlue" />
              <p className="mt-2 text-xs text-mutedText">Frontend</p>
              <p className="text-sm font-semibold text-textWhite">Next.js + React</p>
            </div>
            <div className="glass-card p-3">
              <Database size={18} className="text-cyanAccent" />
              <p className="mt-2 text-xs text-mutedText">Data</p>
              <p className="text-sm font-semibold text-textWhite">MongoDB + MySQL</p>
            </div>
            <div className="glass-card p-3">
              <Cpu size={18} className="text-softBlue" />
              <p className="mt-2 text-xs text-mutedText">Systems</p>
              <p className="text-sm font-semibold text-textWhite">APIs + AI Tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
