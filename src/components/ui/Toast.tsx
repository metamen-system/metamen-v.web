'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, X, XCircle } from 'lucide-react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useToastStore } from '@/hooks/useToast';
import type { Toast as ToastType } from '@/hooks/useToast';

const TOAST_COLORS: Record<ToastType['type'], string> = {
  success: '#00FF88',
  warning: '#FFB800',
  error: '#FF0000',
  info: '#00E5FF',
};

const TOAST_ICONS: Record<ToastType['type'], React.ElementType> = {
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
};

interface ToastProps {
  toast: ToastType;
}

export function Toast({ toast }: ToastProps) {
  const removeToast = useToastStore((state) => state.removeToast);
  const reducedMotion = useReducedMotion();
  const Icon = TOAST_ICONS[toast.type];
  const color = TOAST_COLORS[toast.type];

  return (
    <motion.div
      layout={!reducedMotion}
      initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      animate={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 100 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.3 }}
      className="bg-bg-elevated border-l-4 rounded-xl shadow-lg p-4 flex items-start gap-3 min-w-[300px] max-w-[400px]"
      style={{ borderLeftColor: color }}
      role="alert"
      aria-live="polite"
    >
      <Icon size={20} style={{ color, flexShrink: 0, marginTop: '2px' }} />

      <div className="flex-1 min-w-0">
        <p className="text-text-primary text-sm font-medium">{toast.title}</p>
        {toast.message ? <p className="text-text-secondary text-xs mt-1">{toast.message}</p> : null}
      </div>

      <button
        onClick={() => removeToast(toast.id)}
        className="text-text-disabled hover:text-text-primary transition-colors flex-shrink-0"
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
