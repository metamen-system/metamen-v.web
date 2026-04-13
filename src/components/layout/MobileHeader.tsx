'use client';

import { Bell, Menu } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';

interface MobileHeaderProps {
  onMenuToggle?: () => void;
  notificationCount?: number;
}

function MobileHeader({ onMenuToggle, notificationCount }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-[100] flex h-16 items-center justify-between border-b border-bg-elevated bg-bg-base px-4 pt-safe">
      {/* Left: Hamburger menu button */}
      <button
        type="button"
        onClick={onMenuToggle}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-text-secondary hover:text-text-primary"
        aria-label="Abrir menú"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {/* Center: Logo */}
      <span className="font-display text-headline font-black text-accent-gold">METAMEN100</span>

      {/* Right: Notifications bell with badge */}
      <button
        type="button"
        className="relative flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-text-secondary hover:text-text-primary"
        aria-label="Notificaciones"
      >
        <Bell size={24} aria-hidden="true" />
        {notificationCount != null && notificationCount > 0 && (
          <Badge variant="error" size="sm" className="absolute -right-1 -top-1">
            {notificationCount}
          </Badge>
        )}
      </button>
    </header>
  );
}

export { MobileHeader };
