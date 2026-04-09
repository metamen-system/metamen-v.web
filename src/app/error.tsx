'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-2xl font-semibold text-[#FF0000]">Error inesperado</h1>
        <p className="mt-4 text-base text-[#B0B0B0]">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 min-h-11 rounded-lg bg-[#D4AF37] px-6 py-2.5 font-semibold text-[#0A0A0A] transition-colors hover:bg-[#B8941F]"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
