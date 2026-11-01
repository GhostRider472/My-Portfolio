import type { Variants } from 'framer-motion';

/* Shared easing curve — a gentle, professional ease */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/* ---- Page-level / section wrappers ---- */

export const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const sectionItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/* ---- Headings ---- */

export const headingLine: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/* ---- Cards ---- */

export const cardHover = {
  initial: { y: 0 },
  whileHover: { y: -6 },
  transition: { duration: 0.3, ease: easeOutExpo },
};

/* ---- Slide-in directions ---- */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/* ---- Scale / pop ---- */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/* ---- Progress bar fill ---- */

export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: easeOutExpo, delay: 0.2 },
  }),
};

/* ---- Default viewport config for whileInView ---- */

export const viewportOnce = { once: true, amount: 0.2 };
