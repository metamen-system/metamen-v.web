import { cn } from '@/lib/utils';

interface DividerProps {
  label?: string;
  className?: string;
}

function Divider({ label, className }: DividerProps) {
  if (!label) {
    return <hr className={cn('border-bg-elevated', className)} />;
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <hr className="flex-1 border-bg-elevated" />
      <span className="text-text-disabled text-caption-1">{label}</span>
      <hr className="flex-1 border-bg-elevated" />
    </div>
  );
}

export default Divider;
