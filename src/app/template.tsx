'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { pageTransition } from '@/lib/animations/constants';

let hasHydratedOnce = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(hasHydratedOnce);

  useEffect(() => {
    hasHydratedOnce = true;
    setHasMounted(true);
  }, []);

  // useReducedMotion() returns boolean (true = reduce, false = normal).
  // When reduced motion is active, skip AnimatePresence entirely to avoid
  // navigation blocking (mode="wait" gets stuck with identical keyframes).
  const shouldReduceMotion = useReducedMotion();
  if (!hasMounted || shouldReduceMotion) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
