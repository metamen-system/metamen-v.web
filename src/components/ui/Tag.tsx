'use client';

import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  color?: string;
  onDismiss?: () => void;
  className?: string;
}

function Tag({ label, color, onDismiss, className }: TagProps) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-caption-1 inline-flex items-center gap-1',
        !color ? 'bg-bg-elevated text-text-secondary' : undefined,
        className,
      )}
      {...(color ? { style: { backgroundColor: `${color}33`, color } } : {})}
    >
      {label}
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          className="ml-1 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Eliminar etiqueta"
        >
          ×
        </button>
      ) : null}
    </span>
  );
}

export default Tag;
