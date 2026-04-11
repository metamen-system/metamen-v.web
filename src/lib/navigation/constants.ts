import type { LucideIcon } from 'lucide-react';
import { Home, ClipboardList, Wrench, ShoppingBag, User } from 'lucide-react';

export interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/dashboard', icon: Home, label: 'Inicio' },
  { href: '/tasks', icon: ClipboardList, label: 'Tareas' },
  { href: '/arsenal', icon: Wrench, label: 'Arsenal' },
  { href: '/shop', icon: ShoppingBag, label: 'Tienda' },
  { href: '/profile', icon: User, label: 'Perfil' },
] as const satisfies NavItem[];
