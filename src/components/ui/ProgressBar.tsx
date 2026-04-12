'use client';

import { motion } from 'framer-motion';

import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProgressBarProps {
  /** Valor de progreso entre 0 y 100 */
  value: number;
  /** Color de la barra de progreso (default: #D4AF37 — gold accent) */
  color?: string;
  /** Altura de la barra en píxeles (default: 8) */
  height?: number;
  /** Mostrar label con porcentaje a la derecha (default: false) */
  showLabel?: boolean;
  /** Clases CSS adicionales para el contenedor externo */
  className?: string;
  /** Label de accesibilidad (default: "Progreso") */
  ariaLabel?: string;
}

export function ProgressBar({
  value,
  color = '#D4AF37',
  height = 8,
  showLabel = false,
  className,
  ariaLabel = 'Progreso',
}: ProgressBarProps) {
  const reducedMotion = useReducedMotion();

  // Clamp value between 0 and 100.
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      {/* Progress bar container */}
      <div
        className="bg-bg-elevated rounded-full overflow-hidden flex-1"
        style={{ height }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
      >
        {/* Animated progress fill */}
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={false}
          animate={{ width: `${clampedValue}%` }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Percentage label */}
      {showLabel ? (
        <span className="text-caption-1 text-text-disabled tabular-nums min-w-[3ch] text-right">
          {Math.round(clampedValue)}%
        </span>
      ) : null}
    </div>
  );
}
