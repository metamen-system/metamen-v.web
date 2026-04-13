'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/lib/navigation/constants';

function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200] border-t border-bg-elevated bg-bg-card pb-safe"
      aria-label="Navegación principal móvil"
    >
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-0.5 px-3 ${
                isActive ? 'text-accent-gold' : 'text-text-disabled'
              }`}
              aria-label={item.label}
              {...(isActive ? { 'aria-current': 'page' as const } : {})}
            >
              <item.icon size={24} aria-hidden="true" />
              <span className="text-caption-2">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export { BottomNav };
