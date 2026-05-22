"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="rounded-2xl border border-sera bg-darkNavy/80 px-4 py-3 sm:px-5 md:backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-sm font-semibold tracking-[0.14em] text-softBlue">
            {portfolio.logoText}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-mutedText transition hover:text-seraBlue">
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-sera p-2 text-softBlue md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className={`grid transition-all duration-200 md:hidden ${open ? "mt-3 grid-rows-[1fr] border-t border-sera pt-3" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-1 text-sm text-mutedText transition hover:bg-seraBlue/10 hover:text-seraBlue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
