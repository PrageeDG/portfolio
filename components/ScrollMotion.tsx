"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollMotion() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 24,
    mass: 0.2,
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.35, 1, 0.6]);

  if (reduceMotion) return null;

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-seraBlue via-softBlue to-cyanAccent"
        aria-hidden="true"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none fixed left-0 top-0 z-[85] h-6 w-full bg-gradient-to-b from-seraBlue/25 to-transparent"
        aria-hidden="true"
      />
    </>
  );
}
