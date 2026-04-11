'use client';

/**
 * Predefined vibration patterns used throughout the app.
 * Keys match UI_UX_SPEC VIBRATION PATTERNS section.
 *
 * Usage: vibrate(VIBRATE.success)
 */
export const VIBRATE = {
  /** Light tap — character select (50ms) */
  impactLight: [50] as number[],
  /** Medium tap — general feedback (100ms) */
  impactMedium: [100] as number[],
  /** Heavy tap — important action (200ms) */
  impactHeavy: [200] as number[],
  /** Success pattern — task complete, oath confirmed */
  success: [100, 50, 100] as number[],
  /** Error pattern — penalty declaration, failure acknowledgment */
  error: [200, 100, 200, 100, 200] as number[],
  /** Funeral pattern — avatar death ceremony */
  funeral: [300, 150, 300, 150, 300] as number[],
} as const;

/**
 * Hook that provides access to the Vibration API with silent fallback.
 * On devices/browsers without Vibration API, calls are silently ignored.
 *
 * @returns Object with vibrate function
 */
export function useHapticFeedback(): {
  vibrate: (pattern: number | number[]) => void;
} {
  const vibrate = (pattern: number | number[]): void => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
    // Silent fallback: do nothing if Vibration API unavailable
  };

  return { vibrate };
}
