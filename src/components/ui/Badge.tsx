'use client';

import { cva, type VariantProps } from 'class-variance-authority';

import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center justify-center rounded-full font-semibold', {
  variants: {
    variant: {
      default: 'bg-bg-elevated text-text-secondary',
      success: 'bg-state-success/20 text-state-success',
      warning: 'bg-state-warning/20 text-state-warning',
      error: 'bg-state-error/20 text-state-error',
      info: 'bg-accent-active/20 text-accent-active',
    },
    size: {
      sm: 'h-5 px-2 text-caption-2',
      md: 'h-6 px-3 text-caption-1',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

function Badge({ variant, size, children, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)}>{children}</span>;
}

export { Badge, badgeVariants, type BadgeProps };
