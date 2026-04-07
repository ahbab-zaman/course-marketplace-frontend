import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-soft",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "text-sm",
              i < rating ? "text-amber-500" : "text-surface-300"
            )}
          >
            ★
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-[var(--muted-foreground)]">{role}</p>
        </div>
      </div>
    </div>
  );
}
