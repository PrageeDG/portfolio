import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const whatsappNumber = portfolio.phone.replace(/\D/g, "");

  return (
    <footer className="mt-auto w-full border-t border-sera bg-darkNavy/95">
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-textWhite">Prageeth Gunarathne</p>
            <p className="text-sm text-mutedText">Full-Stack Developer | IT Undergraduate | Data Science Enthusiast</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${portfolio.email}`} className="rounded-full border border-sera bg-darkBg p-2.5 text-softBlue transition hover:bg-seraBlue/10 hover:text-seraBlue" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-sera bg-darkBg p-2.5 text-softBlue transition hover:bg-seraBlue/10 hover:text-seraBlue" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="rounded-full border border-sera bg-darkBg p-2.5 text-softBlue transition hover:bg-seraBlue/10 hover:text-seraBlue" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full border border-sera bg-darkBg p-2.5 text-softBlue transition hover:bg-seraBlue/10 hover:text-seraBlue" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <p className="mt-5 text-left text-xs text-mutedText sm:text-right">© 2026 Prageeth Gunarathne. All rights reserved.</p>
      </div>
    </footer>
  );
}
