'use client';

import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { cardHover } from '@/lib/animations/constants';

import { useReducedMotion } from '@/hooks/useReducedMotion';

const cardVariants = cva('bg-bg-card rounded-2xl transition-all duration-200', {
  variants: {
    variant: {
      default: 'bg-bg-card',
      elevated: 'bg-bg-elevated shadow-lg',
      outline: 'bg-transparent border border-bg-elevated',
      interactive: 'bg-bg-card hover:bg-bg-elevated cursor-pointer hover:shadow-md',
      success: 'bg-bg-card border-l-4 border-l-state-success',
      warning: 'bg-bg-card border-l-4 border-l-state-warning',
      danger: 'bg-bg-card border-l-4 border-l-state-error',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'lg',
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean;
  };

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...rest }, ref) => {
    const reducedMotion = useReducedMotion();
    const { style, ...restProps } = rest;

    const classes = cn(cardVariants({ variant, padding }), className);

    if (variant === 'interactive' && !reducedMotion) {
      return (
        <motion.div {...cardHover}>
          <div ref={ref} className={classes} {...restProps} {...(style ? { style } : {})} />
        </motion.div>
      );
    }

    return <div ref={ref} className={classes} {...restProps} {...(style ? { style } : {})} />;
  },
);

Card.displayName = 'Card';

export { Card, cardVariants };
export type { CardProps };
