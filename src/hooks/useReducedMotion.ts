'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * Hook that detects if the user prefers reduced motion.
 * Respects WCAG 2.1 AA requirement for prefers-reduced-motion.
 *
 * Usage: const prefersReducedMotion = useReducedMotion()
 * Then conditionally disable Framer Motion animations when true.
 *
 * @returns boolean — true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
