/*
 * Framer Motion animation presets for METAMEN100.
 * Values sourced from UI_UX_SPEC — FRAMER MOTION PATTERNS.
 */

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2, ease: 'easeOut' },
} as const;
