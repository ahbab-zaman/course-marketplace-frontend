import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon = "📭",
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-16 text-center",
        className
      )}
    >
      <span className="text-5xl">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="max-w-sm text-sm text-[var(--muted-foreground)]">
        {description}
      </p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
