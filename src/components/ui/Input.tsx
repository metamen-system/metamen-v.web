'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  /** Input value */
  value?: string;
  /** Label text rendered above the input */
  label?: string;
  /** Error message - triggers error visual state */
  error?: string;
  /** Success visual state (green border) */
  success?: boolean;
  /** Max character count - shows counter "N/maxLength" */
  maxLength?: number;
  /** HTML id - required if label is provided (for htmlFor) */
  id?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, maxLength, id, className, value, disabled, ...props }, ref) => {
    const errorMessageId = error && id ? `${id}-error` : null;

    const stateClasses = error
      ? 'border-2 border-state-error focus:border-state-error focus:shadow-none'
      : success
        ? 'border-2 border-state-success focus:border-state-success focus:shadow-none'
        : 'focus:border-2 focus:border-accent-gold focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]';

    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={id} className="text-text-secondary text-callout mb-1.5 block">
            {label}
          </label>
        ) : null}

        <input
          ref={ref}
          id={id}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          className={cn(
            'h-[52px] w-full bg-bg-elevated rounded-[12px] px-4 text-text-primary placeholder:text-text-disabled outline-none transition-all duration-200 border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
            stateClasses,
            className,
          )}
          {...(error
            ? errorMessageId
              ? { 'aria-invalid': 'true', 'aria-describedby': errorMessageId }
              : { 'aria-invalid': 'true' }
            : {})}
          {...props}
        />

        {error || typeof maxLength === 'number' ? (
          <div className="flex justify-between mt-1">
            {error ? (
              <p
                className="text-state-error text-footnote mt-1"
                {...(errorMessageId ? { id: errorMessageId } : {})}
              >
                {error}
              </p>
            ) : (
              <span />
            )}

            {typeof maxLength === 'number' ? (
              <span className="text-text-disabled text-caption-1">
                {value?.length}/{maxLength}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
