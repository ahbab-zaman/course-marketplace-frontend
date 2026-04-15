import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  icon: string;
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
    <section className="relative overflow-hidden rounded-[2rem] border border-[color:rgba(38,23,12,0.08)] bg-[linear-gradient(135deg,rgba(38,23,12,0.98),rgba(87,67,53,0.94))] px-5 py-6 text-white shadow-[0_30px_60px_rgba(38,23,12,0.18)] md:px-8 md:py-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(251,221,202,0.24)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-48 bg-[linear-gradient(135deg,transparent,rgba(112,248,232,0.12))]" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/65">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-headline text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
            {description}
          </p>
        </div>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col gap-3 sm:flex-row">
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
            {primaryAction ? (
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary-fixed)] px-5 py-3 text-sm font-semibold text-[var(--primary)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

export function MetricGrid({ items }: { items: MetricItem[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.label}
          className="group rounded-[1.6rem] border border-[color:rgba(38,23,12,0.08)] bg-white/75 p-5 shadow-[0_14px_30px_rgba(38,23,12,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(38,23,12,0.09)]"
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
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-fixed)] text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-[20px]">
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
  return <section className={cn("grid gap-4 xl:grid-cols-12", className)}>{children}</section>;
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
    <article
      className={cn(
        "rounded-[1.75rem] border border-[color:rgba(38,23,12,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(231,240,236,0.62))] p-5 shadow-[0_16px_34px_rgba(38,23,12,0.05)]",
        className,
      )}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-headline text-xl font-semibold tracking-tight text-[var(--color-on-surface)]">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-[var(--color-on-surface-variant)]">
              {description}
            </p>
          ) : null}
        </div>
        {actionLabel && actionHref ? (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]"
          >
            {actionLabel}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
      {children}
    </article>
  );
}

export function ProgressList({
  items,
}: {
  items: Array<{ label: string; value: string; progress: number; detail: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.35rem] border border-[color:rgba(38,23,12,0.08)] bg-white/70 p-4"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-[var(--color-on-surface)]">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                {item.detail}
              </p>
            </div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              {item.value}
            </p>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--color-surface-container-highest)]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--primary),#7a5a45)]"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
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
  }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.meta}`}
          className="flex flex-col gap-3 rounded-[1.35rem] border border-[color:rgba(38,23,12,0.08)] bg-white/68 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-medium text-[var(--color-on-surface)]">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-on-surface-variant)]">
              {item.detail}
            </p>
          </div>
          <span
            className={cn(
              "inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold",
              item.tone === "positive" &&
                "bg-emerald-100 text-emerald-700",
              item.tone === "warning" &&
                "bg-amber-100 text-amber-700",
              (!item.tone || item.tone === "default") &&
                "bg-[var(--color-primary-fixed)] text-[var(--primary)]",
            )}
          >
            {item.meta}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TableCard({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-[color:rgba(38,23,12,0.08)] bg-white/75">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-[var(--color-surface-container-low)] text-sm text-[var(--color-on-surface-variant)]">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`${row[0]}-${rowIndex}`}
                className="border-t border-[color:rgba(38,23,12,0.08)] text-sm text-[var(--color-on-surface)]"
              >
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="px-4 py-3.5 align-top">
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
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-[1.5rem] border border-[color:rgba(38,23,12,0.08)] bg-white/72 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:rgba(38,23,12,0.14)] hover:shadow-[0_18px_36px_rgba(38,23,12,0.07)]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-fixed)] text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="material-symbols-outlined text-[20px]">
              {item.icon}
            </span>
          </div>
          <h4 className="mt-4 font-headline text-lg font-semibold tracking-tight text-[var(--color-on-surface)]">
            {item.title}
          </h4>
          <p className="mt-2 text-sm leading-6 text-[var(--color-on-surface-variant)]">
            {item.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
            Open view
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
