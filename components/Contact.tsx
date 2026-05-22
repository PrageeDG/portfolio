"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone, SendHorizonal, MessageCircle } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SectionReveal from "@/components/SectionReveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const whatsappNumber = portfolio.phone.replace(/\D/g, "");

  return (
    <section id="contact" className="section-wrap pb-20">
      <h2 className="section-title">Contact</h2>
      <SectionReveal className="mt-8 grid gap-6 lg:grid-cols-2" delay={0.05}>
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-textWhite">Let&apos;s Work Together</h3>
          <p className="mt-2 text-sm text-mutedText">Open to internships, collaboration, and impactful software projects.</p>
          <div className="mt-5 space-y-3 text-sm">
            <a href={`mailto:${portfolio.email}`} className="glass-card flex items-center gap-2 p-3 text-mutedText hover:text-softBlue"><Mail size={16} />{portfolio.email}</a>
            <a href={`tel:${portfolio.phone.replace(/\s+/g, "")}`} className="glass-card flex items-center gap-2 p-3 text-mutedText hover:text-softBlue"><Phone size={16} />{portfolio.phone}</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="glass-card flex items-center gap-2 p-3 text-mutedText hover:text-softBlue"><MessageCircle size={16} />WhatsApp Chat</a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="glass-card flex items-center gap-2 p-3 text-mutedText hover:text-softBlue"><Linkedin size={16} />linkedin.com/in/prageeth-gunarathne</a>
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="glass-card flex items-center gap-2 p-3 text-mutedText hover:text-softBlue"><Github size={16} />github.com/PrageeDG</a>
          </div>
        </div>

        <form
          className="glass-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 2600);
          }}
        >
          <label htmlFor="name" className="mb-2 block text-sm text-mutedText">Name</label>
          <input id="name" className="input-ui" placeholder="Your name" required />

          <label htmlFor="email" className="mb-2 mt-4 block text-sm text-mutedText">Email</label>
          <input id="email" type="email" className="input-ui" placeholder="you@example.com" required />

          <label htmlFor="subject" className="mb-2 mt-4 block text-sm text-mutedText">Subject</label>
          <input id="subject" className="input-ui" placeholder="Subject" required />

          <label htmlFor="message" className="mb-2 mt-4 block text-sm text-mutedText">Message</label>
          <textarea id="message" className="input-ui min-h-32 resize-none" placeholder="Your message" required />

          <button type="submit" className="cta-primary mt-5 w-full">
            <SendHorizonal size={16} />
            Send Message
          </button>
          {sent ? <p className="mt-3 text-sm text-softBlue">Message sent successfully.</p> : null}
        </form>
      </SectionReveal>
    </section>
  );
}
