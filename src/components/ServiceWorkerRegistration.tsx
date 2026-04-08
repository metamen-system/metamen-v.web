'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration(): null {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error: unknown) => {
          console.error('SW registration failed:', error);
        });
    }
  }, []);

  return null;
}
