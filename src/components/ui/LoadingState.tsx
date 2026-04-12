import type { FC } from 'react';

import { AvatarSkeleton, CardSkeleton, BarSkeleton, TextSkeleton } from './SkeletonLoader';

type SkeletonType = 'avatar' | 'card' | 'bar' | 'text';

interface LoadingStateProps {
  type?: SkeletonType;
  count?: number;
}

const SKELETON_MAP: Record<SkeletonType, FC> = {
  avatar: AvatarSkeleton,
  card: CardSkeleton,
  bar: BarSkeleton,
  text: TextSkeleton,
};

// Component: LoadingState
// Purpose: 5-state pattern — Loading state with skeleton loaders.
// NEVER use spinners — skeletons only (per UI_UX_SPEC).
export function LoadingState({ type = 'card', count = 1 }: LoadingStateProps) {
  const SkeletonComponent = SKELETON_MAP[type];

  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}
