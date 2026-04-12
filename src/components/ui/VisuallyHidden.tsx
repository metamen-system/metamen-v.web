import type { ReactNode } from 'react';

interface VisuallyHiddenProps {
  children: ReactNode;
}

// Accessibility utility: renders content visually hidden but accessible to screen readers.
// Uses Tailwind's native `sr-only` class.
export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>;
}
