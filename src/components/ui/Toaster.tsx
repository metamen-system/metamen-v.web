'use client';

import { useToastStore } from '@/hooks/useToast';
import { Toast } from '@/components/ui/Toast';

function Toaster() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed top-4 right-4 z-[9000] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} />
        </div>
      ))}
    </div>
  );
}

export default Toaster;
