import { create } from 'zustand';

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
    const newToast: Toast = { id, ...toast };

    set((state) => ({
      toasts: [...state.toasts, newToast].slice(-3),
    }));

    // Auto-dismiss uses toast duration or default 2500ms.
    setTimeout(() => {
      get().removeToast(id);
    }, toast.duration ?? 2500);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

export const useToast = () => useToastStore((state) => state.addToast);
