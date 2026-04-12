'use client';

import React, { type TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  maxLength?: number;
  label?: string;
  id?: string;
  rows?: number;
}

function TextArea({
  value,
  onChange,
  placeholder,
  error,
  success,
  disabled,
  maxLength,
  label,
  id,
  rows = 4,
  className,
  ...props
}: TextAreaProps) {
  const stateClasses = error
    ? 'border-2 border-state-error focus:border-state-error focus:shadow-none'
    : success
      ? 'border-2 border-state-success focus:border-state-success focus:shadow-none'
      : 'focus:border-2 focus:border-accent-gold focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]';

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={id} className="block text-text-secondary text-footnote mb-1">
          {label}
        </label>
      ) : null}

      <div className="relative">
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          className={cn(
            'min-h-[120px] w-full bg-bg-elevated rounded-[12px] p-4 text-text-primary placeholder:text-text-disabled outline-none resize-vertical transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
            stateClasses,
            className,
          )}
          {...props}
        />

        {typeof maxLength === 'number' ? (
          <span className="absolute bottom-2 right-3 text-caption-1 text-text-disabled">
            {value?.length ?? 0}/{maxLength}
          </span>
        ) : null}
      </div>

      {error ? <p className="text-state-error text-footnote mt-1">{error}</p> : null}
    </div>
  );
}

export { TextArea, type TextAreaProps };
