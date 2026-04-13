'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@/components/ui/Icon';
import { navItems } from '@/lib/navigation/constants';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed?: boolean;
}

function Sidebar({ collapsed = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        'fixed left-0 top-0 z-[200] flex h-screen flex-col border-r border-bg-elevated bg-bg-card transition-all duration-300',
        collapsed ? 'w-16' : 'w-60',
      )}
    >
      <div className="flex h-16 shrink-0 items-center justify-center border-b border-bg-elevated font-display font-black text-accent-gold">
        {collapsed ? 'MM100' : 'METAMEN100'}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                'flex h-12 items-center gap-3 rounded-md px-4 transition-colors',
                isActive
                  ? 'border-l-2 border-l-accent-gold bg-bg-elevated text-accent-gold'
                  : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary',
              )}
            >
              <Icon icon={item.icon} size={20} aria-label={item.label} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export { Sidebar };
