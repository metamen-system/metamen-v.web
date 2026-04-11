'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks whether a CSS media query matches.
 * Returns false during SSR to avoid hydration mismatches.
 *
 * @param query - CSS media query string (e.g. '(max-width: 767px)')
 * @returns boolean indicating if the media query currently matches
 */
export function useMediaQuery(query: string): boolean {
  // SSR guard: return false on server
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);

    // Sync state immediately in case it changed between render and effect
    setMatches(mediaQueryList.matches);

    const handler = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    // Use non-deprecated event listener API
    mediaQueryList.addEventListener('change', handler);

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
