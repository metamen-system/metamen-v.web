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

// Reduced motion variant for WCAG 2.1 AA compliance.
export const pageTransitionReduced = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 },
  transition: { duration: 0 },
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

// BTC gain float toast — rises 60px, scales up, fades out in 1.2s
export const btcGainFloat = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 0, y: -60, scale: [1, 1.3, 1] },
  transition: { duration: 1.2 },
} as const;

// Heart loss — horizontal shake with red-to-gray color transition
export const heartLoss = {
  animate: {
    scale: [1, 1.3, 0.8, 1],
    x: [-6, 6, -4, 4, 0],
    fill: ['#FF0000', '#FF0000', '#808080'],
  },
  transition: { duration: 0.5 },
} as const;

// Avatar death — progressive desaturation, shrink, and fade
export const avatarDeath = {
  animate: {
    filter: ['grayscale(0%)', 'grayscale(50%)', 'grayscale(100%)'],
    scale: [1, 0.95, 0.85],
    opacity: [1, 0.9, 0.7],
  },
  transition: { duration: 2, ease: 'easeIn' as const },
} as const;

// Idle breathing — subtle vertical bob, infinite loop
export const idleBreathing = {
  animate: { y: [0, -4, 0] },
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
} as const;

// ═══════════════════════════════════════════════════
// REDUCED MOTION VARIANTS (WCAG 2.1 AA)
// Used when useReducedMotion() returns true.
// All animations are instant (duration: 0) or disabled.
// ═══════════════════════════════════════════════════

// Button press — no hover/tap animation
export const buttonPressReduced = {
  whileHover: {},
  whileTap: {},
  transition: { duration: 0 },
} as const;

// Card hover — no hover/tap animation
export const cardHoverReduced = {
  whileHover: {},
  whileTap: {},
  transition: { duration: 0 },
} as const;

// Task completion — instant state change, no keyframe sequence
export const taskCompleteReduced = {
  animate: {
    scale: 1,
    borderColor: '#00FF88',
  },
  transition: { duration: 0 },
} as const;

// BTC gain float — instant disappear, no float/scale
export const btcGainFloatReduced = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 0, y: 0, scale: 1 },
  transition: { duration: 0.1 },
} as const;

// Heart loss — instant color change, no shake
export const heartLossReduced = {
  animate: {
    scale: 1,
    x: 0,
    fill: '#808080',
  },
  transition: { duration: 0 },
} as const;

// Avatar death — instant grayscale, no progressive sequence
export const avatarDeathReduced = {
  animate: {
    filter: 'grayscale(100%)',
    scale: 0.85,
    opacity: 0.7,
  },
  transition: { duration: 0 },
} as const;

// Idle breathing — static, no movement
export const idleBreathingReduced = {
  animate: { y: 0 },
  transition: { duration: 0 },
} as const;
