'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { pageTransition, pageTransitionReduced } from '@/lib/animations/constants';

let hasHydratedOnce = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(hasHydratedOnce);

  useEffect(() => {
    hasHydratedOnce = true;
    setHasMounted(true);
  }, []);

  // useReducedMotion() returns boolean (true = reduce, false = normal).
  // The project hook keeps the API consistent across all animated components.
  const shouldReduceMotion = useReducedMotion();
  const motionPreset = hasMounted && shouldReduceMotion ? pageTransitionReduced : pageTransition;

  if (!hasMounted) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={motionPreset.initial}
        animate={motionPreset.animate}
        exit={motionPreset.exit}
        transition={motionPreset.transition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
