import { XCircle } from 'lucide-react';

import { Button } from './Button';

interface ErrorStateProps {
  error?: string;
  onRetry?: () => void;
}

// Component: ErrorState
// Purpose: 5-state pattern — Error state with retry option.
export function ErrorState({ error = 'Error inesperado', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <XCircle size={48} className="text-state-error" />
      <p className="text-body text-text-secondary">{error}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Reintentar
        </Button>
      )}
    </div>
  );
}
