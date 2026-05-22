"use client";

import { motion } from "framer-motion";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "JWT",
  "Google OAuth",
  "WebSocket",
  "Power BI",
  "AI Chatbot",
];

export default function TechTicker() {
  const doubled = [...items, ...items];

  return (
    <section className="relative pb-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#06090f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#06090f] to-transparent" />

      <div className="glass-card overflow-hidden py-4">
        <motion.div
          className="flex w-max gap-3 px-3"
          animate={{ x: [0, -900] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, idx) => (
            <span key={`${item}-${idx}`} className="chip whitespace-nowrap">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
