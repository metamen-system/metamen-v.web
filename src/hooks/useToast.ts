import { create } from 'zustand';

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

export interface Toast {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],
  addToast: (toast) => {
    const id = crypto.randomUUID();

    set((state) => {
      let updatedToasts = [...state.toasts];

      // Enforce max 3 toasts by removing the oldest at capacity.
      if (updatedToasts.length >= 3) {
        const oldestToast = updatedToasts[0];

        if (oldestToast) {
          const oldestTimeout = toastTimeouts.get(oldestToast.id);
          if (oldestTimeout) {
            clearTimeout(oldestTimeout);
          }
          toastTimeouts.delete(oldestToast.id);
        }

        updatedToasts = updatedToasts.slice(1);
      }

      return {
        toasts: [...updatedToasts, { ...toast, id }],
      };
    });

    // Register timeout for natural expiry.
    const timeoutId = setTimeout(() => {
      get().removeToast(id);
    }, toast.duration ?? 2500);

    toastTimeouts.set(id, timeoutId);
  },
  removeToast: (id) => {
    const timeoutId = toastTimeouts.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    toastTimeouts.delete(id);

    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));

export const useToast = () => useToastStore((state) => state.addToast);
