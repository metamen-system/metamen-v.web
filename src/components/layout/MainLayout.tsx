'use client';

import { type ReactNode, useState } from 'react';

import { BottomNav } from '@/components/layout/BottomNav';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import OfflineBanner from '@/components/ui/OfflineBanner';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-bg-base">
      {/* Mobile: sticky header with hamburger toggle */}
      {isMobile && <MobileHeader onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />}

      {/* Tablet/Desktop: persistent sidebar */}
      {!isMobile && <Sidebar collapsed={isTablet || sidebarCollapsed} />}

      <main
        className={cn(
          'min-h-screen transition-all duration-300',
          isMobile && 'pt-16 pb-20',
          !isMobile && isTablet && 'ml-16',
          !isMobile && !isTablet && !sidebarCollapsed && 'ml-60',
          !isMobile && !isTablet && sidebarCollapsed && 'ml-16',
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>

      {/* Mobile: fixed bottom navigation */}
      {isMobile && <BottomNav />}

      {/* Global offline banner */}
      <OfflineBanner />
    </div>
  );
}

export { MainLayout };
