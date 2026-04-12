'use client';

import { useCallback, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  variant = 'gold',
  disabled = false,
  className,
}: LongPressButtonProps) {
  const progress = useMotionValue(0);
  const springProgress = useSpring(progress, { stiffness: 200, damping: 30 });
  const progressWidth = useTransform(springProgress, (v) => `${v * 100}%`);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const milestonesHit = useRef<Set<number>>(new Set());
  const [isHolding, setIsHolding] = useState(false);
  const { vibrate } = useHapticFeedback();

  const startHold = useCallback(() => {
    if (disabled) {
      return;
    }

    setIsHolding(true);
    milestonesHit.current = new Set();

    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);

      progress.set(p);

      // Milestone vibrations
      if (p >= 0.25 && !milestonesHit.current.has(25)) {
        vibrate(VIBRATE.impactLight);
        milestonesHit.current.add(25);
      }

      if (p >= 0.5 && !milestonesHit.current.has(50)) {
        vibrate(VIBRATE.impactMedium);
        milestonesHit.current.add(50);
      }

      if (p >= 0.75 && !milestonesHit.current.has(75)) {
        vibrate(VIBRATE.impactHeavy);
        milestonesHit.current.add(75);
      }

      if (p >= 1) {
        vibrate([100, 50, 100]);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        onComplete();
      }
    }, 16);
  }, [disabled, duration, onComplete, progress, vibrate]);

  const cancelHold = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsHolding(false);
    milestonesHit.current = new Set();
    progress.set(0);
  }, [progress]);

  return (
    <div
      onPointerDown={startHold}
      onPointerUp={cancelHold}
      onPointerLeave={cancelHold}
      onPointerCancel={cancelHold}
      className={cn(
        'relative h-16 rounded-xl overflow-hidden cursor-pointer select-none touch-none',
        'bg-bg-elevated',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      aria-disabled={disabled}
    >
      {/* Progress bar fill */}
      <motion.div
        style={{ width: progressWidth }}
        className={cn('absolute inset-0', variant === 'danger' ? 'gradient-cta' : 'gradient-gold')}
      />

      {/* Label text */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <span className="font-semibold text-headline">
          {isHolding ? (holdingLabel ?? label) : label}
        </span>
      </div>
    </div>
  );
}

export { LongPressButton };
export default LongPressButton;
