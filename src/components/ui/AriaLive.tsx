interface AriaLiveProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

// Accessibility utility: announces dynamic content changes to screen readers.
// Wraps content in an ARIA live region.
export function AriaLive({ message, politeness = 'polite' }: AriaLiveProps) {
  return (
    <div role="status" aria-live={politeness} aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}
