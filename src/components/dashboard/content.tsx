import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Loader2,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  icon: string;
}

interface OverviewBoardProps {
  eyebrow: string;
  title: string;
  description: string;
  metrics: MetricItem[];
  chartTitle: string;
  chartValue: string;
  chartDelta: string;
  chartRange: string;
  chartBars: number[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

const metricCardStyles = [
  "bg-[linear-gradient(180deg,#fff6ee_0%,#fffaf5_100%)]",
  "bg-[linear-gradient(180deg,#f4fbf3_0%,#fbfffb_100%)]",
  "bg-[linear-gradient(180deg,#eef2ff_0%,#f8f9ff_100%)]",
  "bg-[linear-gradient(180deg,#f2f7f5_0%,#fbfdfc_100%)]",
];

const accentChipStyles = [
  "bg-[#fff0dd] text-[#9a6a21]",
  "bg-[#e6f6ea] text-[#2f7a45]",
  "bg-[#e8eefc] text-[#4962b6]",
  "bg-[#edf4f1] text-[#497266]",
];

function SurfaceAction({
  action,
  tone = "primary",
}: {
  action: { label: string; href: string };
  tone?: "primary" | "secondary";
}) {
  return (
    <Button asChild variant={tone === "primary" ? "default" : "outline"}>
      <Link href={action.href}>
        {action.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export function OverviewBoard({
  eyebrow,
  title,
  description,
  metrics,
  chartTitle,
  chartValue,
  chartDelta,
  chartRange,
  chartBars,
  primaryAction,
  secondaryAction,
}: OverviewBoardProps) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-on-surface-variant)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-headline text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-[2.2rem]">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-on-surface-variant)] md:text-base">
            {description}
          </p>
        </div>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {secondaryAction ? (
              <SurfaceAction action={secondaryAction} tone="secondary" />
            ) : null}
            {primaryAction ? <SurfaceAction action={primaryAction} /> : null}
          </div>
        )}
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <div className="grid gap-4 sm:grid-cols-2 xl:col-span-5">
          {metrics.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "rounded-[1.6rem] border border-[color:rgba(15,23,42,0.06)] p-5 shadow-[0_16px_32px_rgba(15,23,42,0.05)]",
                metricCardStyles[index % metricCardStyles.length],
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[var(--color-on-surface-variant)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[1.75rem] font-semibold tracking-tight text-[var(--color-on-surface)]">
                    {item.value}
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#1f8f88] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-on-surface-variant)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <article className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#22a39b_0%,#17867f_100%)] p-5 text-white shadow-[0_24px_48px_rgba(23,134,127,0.22)] xl:col-span-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-white/78">{chartTitle}</p>
              <div className="mt-2 flex items-center gap-3">
                <p className="text-3xl font-semibold tracking-tight">
                  {chartValue}
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/14 px-2.5 py-1 text-xs font-semibold text-white/88">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {chartDelta}
                </span>
              </div>
            </div>
            <span className="inline-flex w-fit rounded-full bg-white/16 px-3 py-1.5 text-xs font-medium text-white/82">
              {chartRange}
            </span>
          </div>

          <div className="mt-8">
            <div className="flex h-56 items-end gap-3">
              {chartBars.map((bar, index) => (
                <div key={`${bar}-${index}`} className="flex flex-1 items-end">
                  <div
                    className={cn(
                      "w-full rounded-t-[0.9rem] bg-[#fff4c9] shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
                      index === 3 && "bg-white",
                    )}
                    style={{ height: `${Math.max(bar, 16)}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-3 text-[11px] font-medium text-white/72">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <span key={day} className="text-center">
                  {day}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function DashboardHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  return (
    <section className="rounded-[1.8rem] border border-[color:rgba(15,23,42,0.06)] bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)] p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)] md:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-on-surface-variant)]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-headline text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-[2.1rem]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-on-surface-variant)] md:text-base">
            {description}
          </p>
        </div>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {secondaryAction ? (
              <SurfaceAction action={secondaryAction} tone="secondary" />
            ) : null}
            {primaryAction ? <SurfaceAction action={primaryAction} /> : null}
          </div>
        )}
      </div>
    </section>
  );
}

export function MetricGrid({ items }: { items: MetricItem[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <article
          key={item.label}
          className={cn(
            "rounded-[1.5rem] border border-[color:rgba(15,23,42,0.06)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-1",
            metricCardStyles[index % metricCardStyles.length],
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-[var(--color-on-surface-variant)]">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-on-surface)]">
                {item.value}
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/82 text-[#1f8f88] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
              <span className="material-symbols-outlined text-[18px]">
                {item.icon}
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--color-on-surface-variant)]">
            {item.detail}
          </p>
        </article>
      ))}
    </section>
  );
}

export function DashboardGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("grid gap-5 xl:grid-cols-12", className)}>
      {children}
    </section>
  );
}

export function Panel({
  title,
  description,
  actionLabel,
  actionHref,
  className,
  children,
}: {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Card className={cn("rounded-[1.7rem] border-[color:rgba(15,23,42,0.06)] md:py-0", className)}>
      <CardHeader className="mb-1 gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="font-headline text-[1.35rem] tracking-tight">{title}</CardTitle>
            {description ? (
              <CardDescription className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-on-surface-variant)]">
                {description}
              </CardDescription>
            ) : null}
          </div>
          {actionLabel && actionHref ? (
            <Button asChild variant="ghost" size="sm" className="w-fit">
              <Link href={actionHref}>
                {actionLabel}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export function ProgressList({
  items,
}: {
  items: Array<{
    label: string;
    value: string;
    progress: number;
    detail: string;
    href?: string;
  }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Link
          key={item.label}
          href={item.href ?? "#"}
          aria-disabled={!item.href}
          className={cn(
            "block rounded-[1.35rem] border border-[color:rgba(15,23,42,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition-all duration-200",
            item.href
              ? "cursor-pointer hover:-translate-y-0.5 hover:border-[#b8dfdb] hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)]"
              : "cursor-default",
          )}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-[var(--color-on-surface)]">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                {item.detail}
              </p>
            </div>
            <span
              className={cn(
                "inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold",
                accentChipStyles[index % accentChipStyles.length],
              )}
            >
              {item.value}
            </span>
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#edf2f1]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#26a69a_0%,#67d6cb_100%)]"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function QuickList({
  items,
}: {
  items: Array<{
    title: string;
    detail: string;
    meta: string;
    tone?: "default" | "positive" | "warning";
    href?: string;
  }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Link
          key={`${item.title}-${item.meta}`}
          href={item.href ?? "#"}
          aria-disabled={!item.href}
          className={cn(
            "flex flex-col gap-4 rounded-[1.35rem] border border-[color:rgba(15,23,42,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition-all duration-200 sm:flex-row sm:items-center sm:justify-between",
            item.href
              ? "cursor-pointer hover:-translate-y-0.5 hover:border-[#b8dfdb] hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)]"
              : "cursor-default",
          )}
        >
          <div>
            <p className="font-medium text-[var(--color-on-surface)]">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-on-surface-variant)]">
              {item.detail}
            </p>
          </div>
          <span
            className={cn(
              "inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold",
              item.tone === "positive" && "bg-[#e8f7ef] text-[#2f7a45]",
              item.tone === "warning" && "bg-[#fff3df] text-[#9a6a21]",
              (!item.tone || item.tone === "default") &&
                "bg-[#edf4f1] text-[#496a61]",
            )}
          >
            {item.meta}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function TableCard({
  columns,
  rows,
  rowLinks,
}: {
  columns: string[];
  rows: string[][];
  rowLinks?: Array<string | undefined>;
}) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-[color:rgba(15,23,42,0.06)] bg-white shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[#f6f8f7] text-sm text-[var(--color-on-surface-variant)]">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`${row[0]}-${rowIndex}`}
                className={cn(
                  "border-t border-[color:rgba(15,23,42,0.06)] text-sm text-[var(--color-on-surface)] transition-colors",
                  rowLinks?.[rowIndex] ? "cursor-pointer hover:bg-[#f8fbfa]" : "",
                )}
                onClick={() => {
                  const href = rowLinks?.[rowIndex];
                  if (href) window.location.href = href;
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="px-5 py-4 align-top whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ActionTiles({
  items,
}: {
  items: Array<{ title: string; description: string; href: string; icon: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group rounded-[1.35rem] border border-[color:rgba(15,23,42,0.06)] p-4 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1",
            metricCardStyles[index % metricCardStyles.length],
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/82 text-[#1f8f88] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]">
            <span className="material-symbols-outlined text-[18px]">
              {item.icon}
            </span>
          </div>
          <h4 className="mt-4 font-headline text-lg font-semibold tracking-tight text-[var(--color-on-surface)]">
            {item.title}
          </h4>
          <p className="mt-2 text-sm leading-6 text-[var(--color-on-surface-variant)]">
            {item.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1f8f88]">
            Open view
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function SummaryList({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; detail: string; value: string; href?: string }>;
}) {
  return (
    <div className="rounded-[1.4rem] border border-[color:rgba(15,23,42,0.06)] bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-headline text-lg font-semibold tracking-tight text-[var(--color-on-surface)]">
          {title}
        </h4>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f6f5] text-[var(--color-on-surface-variant)]"
          aria-label={`More ${title}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Link
            key={`${item.label}-${item.value}`}
            href={item.href ?? "#"}
            aria-disabled={!item.href}
            className={cn(
              "flex items-center justify-between gap-3 rounded-[1.1rem] px-1 py-1 transition-colors",
              item.href ? "cursor-pointer hover:bg-[#f6f9f8]" : "cursor-default",
            )}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold",
                  accentChipStyles[index % accentChipStyles.length],
                )}
              >
                {item.label.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[var(--color-on-surface)]">
                  {item.label}
                </p>
                <p className="truncate text-xs text-[var(--color-on-surface-variant)]">
                  {item.detail}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-[var(--color-on-surface)]">
              {item.value}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LoadingState({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#f2f8f7] px-3 py-1.5 text-sm font-medium text-[#1f8f88]",
        className,
      )}
    >
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>{label}</span>
    </div>
  );
}
