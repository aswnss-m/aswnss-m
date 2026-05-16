"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type StaggerListProps = HTMLMotionProps<"ul">;

export function StaggerList({ children, ...rest }: StaggerListProps) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={reduce ? undefined : containerVariants}
      {...rest}
    >
      {children}
    </motion.ul>
  );
}

type StaggerItemProps = HTMLMotionProps<"li">;

export function StaggerItem({ children, ...rest }: StaggerItemProps) {
  const reduce = useReducedMotion();

  return (
    <motion.li variants={reduce ? undefined : itemVariants} {...rest}>
      {children}
    </motion.li>
  );
}

type StaggerContainerProps = HTMLMotionProps<"div">;

export function StaggerContainer({ children, ...rest }: StaggerContainerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={reduce ? undefined : containerVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerCardProps = HTMLMotionProps<"div">;

export function StaggerCard({ children, ...rest }: StaggerCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div variants={reduce ? undefined : itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}
