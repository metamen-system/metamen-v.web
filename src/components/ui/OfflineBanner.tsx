'use client';

import { WifiOff } from 'lucide-react';

import { useOnlineStatus } from '@/hooks/useOnlineStatus';

function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-[9999] bg-state-warning text-bg-base text-center py-2 text-caption-1 font-semibold flex items-center justify-center gap-2"
    >
      <WifiOff size={14} aria-hidden="true" />
      Sin conexión — Los cambios se sincronizarán al reconectar
    </div>
  );
}

export default OfflineBanner;
