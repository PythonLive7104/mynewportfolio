"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function MotionReveal({ children, className, delay = 0, as = "div" }: MotionRevealProps) {
  const Component = as === "section" ? motion.section : motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 0.9, 0.28, 1], delay }}
      variants={fade}
    >
      {children}
    </Component>
  );
}
