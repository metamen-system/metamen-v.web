'use client';

import { useEffect, useRef } from 'react';

import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';

import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface LottiePlayerProps {
  /** Lottie animation JSON data object. */
  animationData: object;
  /** Whether the animation should loop. Default: false. */
  loop?: boolean;
  /** Whether the animation should autoplay. Default: true. */
  autoplay?: boolean;
  /** Width of the animation container. */
  width?: number | string;
  /** Height of the animation container. */
  height?: number | string;
  /** Additional CSS class names. */
  className?: string;
}

/**
 * Accessible Lottie animation wrapper.
 * Respects prefers-reduced-motion by showing only the first frame
 * when the user has reduced motion enabled.
 */
export function LottiePlayer({
  animationData,
  loop = false,
  autoplay = true,
  width,
  height,
  className,
}: LottiePlayerProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion && lottieRef.current) {
      lottieRef.current.goToAndStop(0, true);
    }
  }, [reducedMotion]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop ?? false}
      autoplay={!reducedMotion && (autoplay ?? true)}
      style={{ width, height }}
      className={className}
    />
  );
}
