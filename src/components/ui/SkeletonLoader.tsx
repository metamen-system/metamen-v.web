'use client';

import { type FC } from 'react';

import { cn } from '@/lib/utils';

interface SkeletonBaseProps {
  className?: string;
}

/**
 * Base skeleton loader component with shimmer animation.
 * Replaces spinners throughout the application.
 * Extend via className for specific dimensions.
 */
const SkeletonBase: FC<SkeletonBaseProps> = ({ className = '' }) => {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn('animate-shimmer', className)}
      style={{
        background: 'linear-gradient(90deg, #1A1A1A 25%, #2D2D2D 50%, #1A1A1A 75%)',
        backgroundSize: '200% 100%',
        borderRadius: '8px',
      }}
    />
  );
};

function AvatarSkeleton({ height = 280 }: { height?: number }) {
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <SkeletonBase className={cn('h-full w-full rounded-[12px]')} />
    </div>
  );
}

function CardSkeleton() {
  return <SkeletonBase className={cn('w-full h-20 rounded-2xl')} />;
}

export function BarSkeleton() {
  return <SkeletonBase className="w-full h-2 rounded-full" />;
}

export function TextSkeleton() {
  return <SkeletonBase className="w-[60%] h-4 rounded-[4px]" />;
}

export { SkeletonBase, AvatarSkeleton, CardSkeleton };

const SkeletonLoader = Object.assign(SkeletonBase, {
  Avatar: AvatarSkeleton,
  Card: CardSkeleton,
  Bar: BarSkeleton,
  Text: TextSkeleton,
});

export default SkeletonLoader;
