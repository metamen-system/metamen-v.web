import type * as React from 'react';

interface IconProps {
  /** The lucide-react icon component (e.g., Home, Settings, User). */
  icon: React.ElementType;
  /** Icon size in pixels. Default: 20. */
  size?: number;
  /** Additional CSS classes for the icon. */
  className?: string;
  /** If present, icon is meaningful; otherwise it is decorative. */
  'aria-label'?: string;
}

function Icon({ icon: IconComponent, size = 20, className, 'aria-label': ariaLabel }: IconProps) {
  if (ariaLabel) {
    return <IconComponent size={size} className={className} aria-label={ariaLabel} role="img" />;
  }

  return <IconComponent size={size} className={className} aria-hidden="true" />;
}

export { Icon };
