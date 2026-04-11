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

// Button press interaction preset (M02-025)
export const buttonPress = {
  whileHover: { scale: 1.02, y: -1 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
} as const;

// Card hover interaction preset (M02-026)
export const cardHover = {
  whileHover: {
    backgroundColor: '#2D2D2D',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
    y: -2,
  },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.2 },
} as const;

// Task completion animation preset (M02-027)
export const taskComplete = {
  animate: {
    scale: [1, 1.02, 1],
    borderColor: ['#2D2D2D', '#00FF88', '#00FF88'],
  },
  transition: { duration: 0.4 },
} as const;
