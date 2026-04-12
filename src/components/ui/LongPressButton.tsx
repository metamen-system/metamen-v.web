'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

import { useHapticFeedback, VIBRATE } from '@/hooks/useHapticFeedback';
import { cn } from '@/lib/utils';

const LONG_PRESS_DURATION_MS = 3000;

export interface LongPressButtonProps {
  /** Duration in ms. Default: 3000 (LONG_PRESS_DURATION_MS from SSOT) */
  duration?: number;
  /** Text shown in default state */
  label: string;
  /** Text shown while holding. Falls back to label if undefined */
  holdingLabel?: string;
  /** Callback fired when long-press completes (progress reaches 1.0) */
  onComplete: () => void;
  /** Visual variant: 'danger' = gradient-cta (#FF073A), 'gold' = gradient-gold (#D4AF37) */
  variant?: 'danger' | 'gold';
  /** Disables interaction when true */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

function LongPressButton({
  duration = LONG_PRESS_DURATION_MS,
  label,
  holdingLabel,
  onComplete,
  variant = 'danger',
  disabled = false,
  className,
}: LongPressButtonProps) {
  const progress = useMotionValue(0);
  const springProgress = useSpring(progress, { stiffness: 200, damping: 30 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { vibrate } = useHapticFeedback();

  const getHoldingLabel = useCallback(() => holdingLabel ?? label, [holdingLabel, label]);

  const startHold = useCallback(() => {
    if (disabled) {
      return;
    }

    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);

      progress.set(p);

      if (p >= 1) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        onComplete();
      }
    }, 16);
  }, [disabled, duration, progress, onComplete]);

  const cancelHold = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    progress.set(0);
  }, [progress]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // These values are initialized here so later tasks can wire handlers and UI without changing state setup.
  const motionReady =
    typeof motion.div === 'function' &&
    typeof AnimatePresence === 'function' &&
    typeof vibrate === 'function' &&
    VIBRATE.impactMedium.length > 0 &&
    typeof onComplete === 'function';

  return (
    <div
      onPointerDown={startHold}
      onPointerUp={cancelHold}
      onPointerLeave={cancelHold}
      onPointerCancel={cancelHold}
      className={cn('relative h-16 rounded-xl overflow-hidden touch-none select-none', className)}
      aria-disabled={disabled}
      data-duration={duration}
      data-variant={variant}
      data-holding-label={getHoldingLabel()}
      data-progress={progress.get()}
      data-spring-progress={springProgress.get()}
      data-interval-active={intervalRef.current === null ? 'false' : 'true'}
      data-motion-ready={motionReady ? 'true' : 'false'}
    >
      {label}
    </div>
  );
}

export { LongPressButton };
export default LongPressButton;
