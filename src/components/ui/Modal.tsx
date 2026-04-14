'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

const panelVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
} as const;

const transition = { duration: 0.2 } as const;
const FOCUSABLE_SELECTOR = [
  'a[href]:not([disabled]):not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"]):not([disabled])',
  '[contenteditable="true"]',
].join(', ');

function Modal({ isOpen, onClose, title, children, footer, size = 'md' }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const lastFocusedOutsideRef = useRef<HTMLElement | null>(null);
  const previousFocusedSnapshotRef = useRef<{
    id: string | null;
    tagName: string;
    textContent: string | null;
  } | null>(null);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    const panel = panelRef.current;

    if (!panel) {
      return [];
    }

    return Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => element.offsetParent !== null,
    );
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleFocusIn(event: FocusEvent) {
      if (isOpen) {
        return;
      }

      if (event.target instanceof HTMLElement) {
        lastFocusedOutsideRef.current = event.target;
      }
    }

    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const restorePreviousFocus = () => {
        if (previousFocusedElementRef.current?.isConnected) {
          previousFocusedElementRef.current.focus();
          previousFocusedElementRef.current = null;
          previousFocusedSnapshotRef.current = null;
          return;
        }

        if (previousFocusedSnapshotRef.current) {
          const { id, tagName, textContent } = previousFocusedSnapshotRef.current;
          let fallbackElement: HTMLElement | null = null;

          if (id) {
            const elementById = document.getElementById(id);
            fallbackElement = elementById instanceof HTMLElement ? elementById : null;
          }

          if (!fallbackElement && textContent) {
            const candidates = Array.from(document.querySelectorAll<HTMLElement>(tagName)).filter(
              (candidate) => candidate.textContent?.trim() === textContent,
            );
            fallbackElement =
              candidates.find((candidate) => candidate.offsetParent !== null) ??
              candidates[0] ??
              null;
          }

          if (!fallbackElement) {
            const focusableOutsideModal = Array.from(
              document.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
            ).find((candidate) => candidate.offsetParent !== null);
            fallbackElement = focusableOutsideModal ?? null;
          }

          fallbackElement?.focus();
        }

        previousFocusedElementRef.current = null;
        previousFocusedSnapshotRef.current = null;
      };

      const timeoutId = window.setTimeout(restorePreviousFocus, 220);
      const retryTimeoutId = window.setTimeout(restorePreviousFocus, 320);

      return () => {
        window.clearTimeout(timeoutId);
        window.clearTimeout(retryTimeoutId);
      };

      return;
    }

    const activeElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    if (activeElement && activeElement !== document.body) {
      previousFocusedElementRef.current = activeElement;
    } else {
      previousFocusedElementRef.current = lastFocusedOutsideRef.current;
    }

    previousFocusedSnapshotRef.current = previousFocusedElementRef.current
      ? {
          id: previousFocusedElementRef.current.id || null,
          tagName: previousFocusedElementRef.current.tagName.toLowerCase(),
          textContent: previousFocusedElementRef.current.textContent?.trim() ?? null,
        }
      : null;

    const focusFirstAvailableElement = () => {
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];

      if (firstElement) {
        firstElement.focus();
        return;
      }

      panelRef.current?.focus();
    };

    const timeoutId = window.setTimeout(focusFirstAvailableElement, 0);
    const retryTimeoutId = window.setTimeout(focusFirstAvailableElement, 50);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(retryTimeoutId);
    };
  }, [getFocusableElements, isOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        panelRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        panelRef.current?.focus();
        return;
      }

      const activeElement = document.activeElement;
      const isOnPanel = activeElement === panelRef.current;

      if (event.shiftKey) {
        if (activeElement === firstElement || isOnPanel) {
          event.preventDefault();
          lastElement.focus();
        }

        return;
      }

      if (activeElement === lastElement || isOnPanel) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    [getFocusableElements, onClose],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  const closeButton = (
    <button
      type="button"
      autoFocus
      onClick={onClose}
      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
      aria-label="Cerrar modal"
    >
      ✕
    </button>
  );

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            className={`bg-bg-card rounded-2xl shadow-xl w-full ${sizeClasses[size]}`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            onClick={(event) => event.stopPropagation()}
          >
            {title ? (
              <div className="flex items-center justify-between p-6 pb-0">
                <h2 id="modal-title" className="text-lg font-semibold text-text-primary">
                  {title}
                </h2>
                {closeButton}
              </div>
            ) : (
              <div className="flex justify-end p-6 pb-0">{closeButton}</div>
            )}

            <div className="p-6">{children}</div>

            {footer ? <div className="px-6 pb-6">{footer}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

export { Modal };
export type { ModalProps };
export default Modal;
