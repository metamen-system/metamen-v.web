export interface BlankStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

// Component: BlankState
// Purpose: 5-state pattern — Blank/Empty state
// Used when no data to display: empty inventory, no history, no filtered tasks.
export function BlankState({ icon, title, description, action }: BlankStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      {icon && <div className="text-text-disabled">{icon}</div>}
      <p className="text-headline font-semibold text-text-secondary">{title}</p>
      {description && <p className="max-w-sm text-body text-text-disabled">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
