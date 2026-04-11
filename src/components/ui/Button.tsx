'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

import { buttonPress } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-br from-accent-gold to-accent-gold-hover text-bg-base hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] focus:ring-accent-gold/30',
        danger:
          'bg-gradient-to-br from-accent-cta to-accent-cta-hover text-white hover:brightness-110 active:scale-[0.98] focus:ring-accent-cta/30',
        secondary:
          'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 focus:ring-accent-gold/20',
        tertiary: 'bg-bg-elevated text-white hover:bg-bg-hover focus:ring-white/10',
        ghost: 'bg-transparent text-white hover:bg-white/[0.08] focus:ring-white/10',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);

type ButtonProps = HTMLMotionProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const reducedMotion = useReducedMotion();

    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || isLoading}
        {...(!reducedMotion && !disabled && !isLoading
          ? {
              whileHover: buttonPress.whileHover,
              whileTap: buttonPress.whileTap,
              transition: buttonPress.transition,
            }
          : {})}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
