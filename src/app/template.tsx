'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { pageTransition } from '@/lib/animations';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} {...pageTransition} className="w-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
