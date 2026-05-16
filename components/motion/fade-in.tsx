"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ delay = 0, children, ...rest }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduce ? 0 : 0.4,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
