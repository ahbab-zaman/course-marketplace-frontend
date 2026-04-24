"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings,
} from "lucide-react";
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
  onLogout?: () => Promise<void>;
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
    <nav className="space-y-1.5" aria-label="Dashboard navigation">
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-[1rem] px-3 py-2.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f8f88] focus-visible:ring-offset-2",
              isActive
                ? "bg-[#f3f5f4] font-semibold text-[var(--color-on-surface)] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]"
                : "text-[var(--color-on-surface-variant)] hover:translate-x-0.5 hover:bg-[#f7f8f8] hover:text-[var(--color-on-surface)]",
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                isActive ? "bg-white text-[#1f8f88]" : "bg-[#f3f5f4] text-[#7a8481]",
              )}
            >
              <span className="material-symbols-outlined text-[18px]">
                {item.icon}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate">{item.label}</p>
            </div>
            {item.badge ? (
              <span className="rounded-full bg-[#dff4ee] px-2 py-0.5 text-[10px] font-semibold text-[#1f8f88]">
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar({ userRole, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = dashboardNavigation[userRole];
  const roleMeta = dashboardRoleMeta[userRole];
  const roleTheme = roleMeta.theme;

  const handleLogout = async () => {
    await onLogout?.();
    router.push("/");
  };

  const shell = (
    <div className="flex h-full flex-col">
      <div className="border-b border-[color:rgba(15,23,42,0.06)] pb-6">
        <Link href="/" className="inline-flex items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--color-on-surface)]">
              OFSPACE.CO
            </p>
            <p
              className={cn(
                "mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                roleTheme.softAccent,
                roleTheme.accentText,
              )}
            >
              {roleMeta.label}
            </p>
          </div>
        </Link>
      </div>

      <div className="pt-6">
        <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-on-surface-variant)]">
          Main menu
        </p>
        <div className="mt-3">
          <DashboardNav
            items={items.slice(0, Math.min(items.length, 4))}
            pathname={pathname}
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      </div>

      {items.length > 4 ? (
        <div className="pt-8">
          <div className="flex items-center justify-between px-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-on-surface-variant)]">
              Account management
            </p>
            <ChevronDown className="h-4 w-4 text-[var(--color-on-surface-variant)]" />
          </div>
          <div className="mt-3">
            <DashboardNav
              items={items.slice(4)}
              pathname={pathname}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      ) : null}

      <div className="mt-auto space-y-1 border-t border-[color:rgba(15,23,42,0.06)] pt-6">
        <Link
          href={items[items.length - 1]?.href ?? "/"}
          className="flex items-center gap-3 rounded-[1rem] px-3 py-2.5 text-sm text-[var(--color-on-surface-variant)] transition-colors hover:bg-[#f7f8f8] hover:text-[var(--color-on-surface)]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f5f4] text-[#7a8481]">
            <Settings className="h-4 w-4" />
          </div>
          <span>Setting</span>
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-[1rem] px-3 py-2.5 text-left text-sm text-[var(--color-on-surface-variant)] transition-colors hover:bg-[#f7f8f8] hover:text-[var(--color-on-surface)]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f5f4] text-[#7a8481]">
            <LogOut className="h-4 w-4" />
          </div>
          <span>Log out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="sticky top-0 hidden h-[calc(100vh-2.5rem)] w-[280px] shrink-0 xl:block">
        <div className="h-full rounded-[1.9rem] border border-[color:rgba(15,23,42,0.06)] bg-white px-5 py-6 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
          {shell}
        </div>
      </aside>

      <div className="xl:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            aria-label="Open dashboard navigation"
            className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[color:rgba(15,23,42,0.06)] bg-white text-[var(--color-on-surface)] shadow-[0_12px_24px_rgba(15,23,42,0.06)]"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-[20rem] border-r-0 bg-[#f7f8f8] p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>{roleMeta.label}</SheetTitle>
              <SheetDescription>Dashboard navigation menu</SheetDescription>
            </SheetHeader>
            <div className="h-full p-4">
              <div className="h-full rounded-[1.75rem] border border-[color:rgba(15,23,42,0.06)] bg-white px-5 py-6">
                {shell}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export function DashboardTopbar({
  userRole,
  userName = "Account",
}: SidebarProps & { userName?: string }) {
  const pathname = usePathname();
  const items = dashboardNavigation[userRole];
  const currentItem =
    items.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    ) ?? items[0];
  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const roleTheme = dashboardRoleMeta[userRole].theme;

  return (
    <header className="border-b border-[color:rgba(15,23,42,0.06)] bg-white px-4 py-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p
            className={cn(
              "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
              roleTheme.softAccent,
              roleTheme.accentText,
            )}
          >
            {dashboardRoleMeta[userRole].badge}
          </p>
          <p className="truncate text-base font-semibold text-[var(--color-on-surface)]">
            {currentItem.label}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-[minmax(0,18rem)_auto_auto]">
          <Link
            href={items[0]?.href ?? "/"}
            className="flex min-w-0 items-center gap-2 rounded-full border border-[color:rgba(15,23,42,0.06)] bg-[#f8f9f9] px-4 py-2.5 text-sm text-[var(--color-on-surface-variant)] transition-colors hover:bg-[#eef5f4] hover:text-[var(--color-on-surface)]"
          >
            <Search className="h-4 w-4 shrink-0 text-[#1f8f88]" />
            <span className="truncate">Search anything</span>
          </Link>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(15,23,42,0.06)] bg-[#f8f9f9] text-[var(--color-on-surface)] transition-colors hover:bg-[#eef5f4]"
          >
            <Bell className="h-4 w-4" />
          </button>
          <Link
            href={items[items.length - 1]?.href ?? "/"}
            className="inline-flex items-center gap-3 rounded-full border border-[color:rgba(15,23,42,0.06)] bg-white px-2 py-1.5 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
          >
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
                roleTheme.avatarGradient,
                roleTheme.avatarText,
              )}
            >
              {initials || "AC"}
            </div>
            <span className="text-sm font-medium text-[var(--color-on-surface)]">
              {userName}
            </span>
            <ChevronDown className="h-4 w-4 text-[var(--color-on-surface-variant)]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
