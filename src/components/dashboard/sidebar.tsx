"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search, Bell, PanelLeftClose, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  dashboardNavigation,
  dashboardRoleMeta,
  type DashboardNavItem,
  type DashboardRole,
} from "./config";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SidebarProps {
  userRole: DashboardRole;
}

function DashboardNav({
  items,
  pathname,
  onNavigate,
}: {
  items: DashboardNavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="space-y-2" aria-label="Dashboard navigation">
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group relative block overflow-hidden rounded-[1.35rem] border px-4 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2",
              isActive
                ? "border-[color:rgba(38,23,12,0.15)] bg-[linear-gradient(135deg,rgba(38,23,12,0.96),rgba(87,67,53,0.92))] text-[var(--primary-foreground)] shadow-[0_18px_40px_rgba(38,23,12,0.18)]"
                : "border-[color:rgba(38,23,12,0.08)] bg-white/70 text-[var(--color-on-surface)] hover:-translate-y-0.5 hover:border-[color:rgba(38,23,12,0.14)] hover:bg-white hover:shadow-[0_16px_34px_rgba(38,23,12,0.08)]",
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
                !isActive &&
                  "bg-[linear-gradient(120deg,transparent,rgba(38,23,12,0.05),transparent)]",
              )}
            />
            <div className="relative flex items-start gap-3">
              <div
                className={cn(
                  "mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border text-base transition duration-300",
                  isActive
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-[color:rgba(38,23,12,0.08)] bg-[var(--color-surface-container-low)] text-[var(--primary)] group-hover:bg-[var(--color-primary-fixed)]",
                )}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold tracking-tight">
                  {item.label}
                </p>
                <p
                  className={cn(
                    "mt-1 text-xs leading-5",
                    isActive
                      ? "text-white/75"
                      : "text-[var(--color-on-surface-variant)]",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = dashboardNavigation[userRole];
  const roleMeta = dashboardRoleMeta[userRole];
  const currentItem =
    items.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    ) ?? items[0];

  const shell = (
    <div className="flex h-full flex-col gap-6">
      <div className="rounded-[1.8rem] border border-[color:rgba(38,23,12,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(231,240,236,0.96))] p-5 shadow-[0_12px_30px_rgba(38,23,12,0.08)]">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_12px_24px_rgba(38,23,12,0.18)]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-on-surface-variant)]">
              Course Marketplace
            </p>
            <p className="font-headline text-xl font-semibold tracking-tight text-[var(--primary)]">
              {roleMeta.label}
            </p>
          </div>
        </Link>

        <div className="mt-5 rounded-[1.4rem] bg-[var(--color-surface-container-low)] p-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-on-surface-variant)]">
            Active workspace
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-[var(--color-on-surface)]">
                {currentItem.label}
              </p>
              <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">
                {currentItem.description}
              </p>
            </div>
            <span className="rounded-full bg-[var(--color-primary-fixed)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              {roleMeta.badge}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <DashboardNav
          items={items}
          pathname={pathname}
          onNavigate={() => setMobileOpen(false)}
        />
      </div>

      <div className="rounded-[1.5rem] border border-[color:rgba(38,23,12,0.08)] bg-white/80 p-4">
        <p className="text-sm font-semibold text-[var(--color-on-surface)]">
          Need a quick check?
        </p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-on-surface-variant)]">
          Review activity, respond to updates, and keep the workspace clean.
        </p>
        <Link
          href={items[0].href}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <PanelLeftClose className="h-4 w-4" />
          Return to overview
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-[320px] shrink-0 p-5 xl:block">
        <div className="h-full overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(242,251,247,0.95),rgba(231,240,236,0.92))] p-5 shadow-[0_24px_50px_rgba(38,23,12,0.08)] ring-1 ring-[color:rgba(38,23,12,0.06)]">
          {shell}
        </div>
      </aside>

      <div className="xl:hidden">
        <div className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-[color:rgba(38,23,12,0.08)] bg-white/80 px-4 py-3 shadow-[0_14px_32px_rgba(38,23,12,0.06)] backdrop-blur">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--color-on-surface-variant)]">
              {roleMeta.badge}
            </p>
            <p className="truncate font-headline text-lg font-semibold tracking-tight text-[var(--primary)]">
              {currentItem.label}
            </p>
          </div>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open dashboard navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_14px_28px_rgba(38,23,12,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full max-w-[22rem] border-r-0 bg-[var(--color-surface)] p-0"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>{roleMeta.label}</SheetTitle>
                <SheetDescription>Dashboard navigation menu</SheetDescription>
              </SheetHeader>
              <div className="h-full p-5">{shell}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export function DashboardTopbar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const items = dashboardNavigation[userRole];
  const currentItem =
    items.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    ) ?? items[0];

  return (
    <header className="sticky top-0 z-30 mb-6 rounded-[1.75rem] border border-[color:rgba(38,23,12,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(242,251,247,0.78))] px-4 py-4 shadow-[0_16px_36px_rgba(38,23,12,0.06)] backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-on-surface-variant)]">
            <span>Dashboard</span>
            <span className="inline-block h-1 w-1 rounded-full bg-[var(--primary)]" />
            <span>{dashboardRoleMeta[userRole].badge}</span>
          </div>
          <h1 className="mt-2 font-headline text-2xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-[2rem]">
            {currentItem.label}
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-on-surface-variant)] md:text-base">
            {currentItem.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="flex min-w-0 items-center gap-2 rounded-full border border-[color:rgba(38,23,12,0.08)] bg-white/75 px-4 py-3 text-sm text-[var(--color-on-surface-variant)] shadow-[0_8px_18px_rgba(38,23,12,0.04)]">
            <Search className="h-4 w-4 shrink-0 text-[var(--primary)]" />
            <span className="truncate">Search courses, people, and reports</span>
          </label>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:rgba(38,23,12,0.08)] bg-white/75 px-4 text-sm font-medium text-[var(--color-on-surface)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(38,23,12,0.08)]"
          >
            <Bell className="h-4 w-4 text-[var(--primary)]" />
            <span className="hidden sm:inline">Alerts</span>
          </button>
          <div className="inline-flex items-center gap-3 rounded-full border border-[color:rgba(38,23,12,0.08)] bg-[var(--primary)] px-4 py-2 text-white shadow-[0_18px_32px_rgba(38,23,12,0.14)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
              CM
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold">Curated Workspace</p>
              <p className="text-xs text-white/75">Focused and responsive</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
