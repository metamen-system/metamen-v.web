'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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

function Modal({ isOpen, onClose, title, children, footer, size = 'md' }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
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
