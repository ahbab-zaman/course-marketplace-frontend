"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, DashboardTopbar } from "./sidebar";
import type { DashboardRole } from "./config";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: DashboardRole;
}

export function DashboardLayout({
  children,
  userRole,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(251,221,202,0.32),transparent_28%),radial-gradient(circle_at_right,rgba(112,248,232,0.12),transparent_24%),linear-gradient(180deg,#f6fcf9_0%,#edf6f2_100%)] text-[var(--color-on-surface)]">
      <div className="mx-auto flex max-w-[1680px] gap-0 xl:gap-4">
        <Sidebar userRole={userRole} />

        <main className="min-w-0 flex-1 px-4 pb-6 pt-4 md:px-6 lg:px-8 lg:pb-8">
          <DashboardTopbar userRole={userRole} />
          <div
            className={cn(
              "relative overflow-hidden rounded-[2rem] border border-[color:rgba(38,23,12,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(242,251,247,0.92))] p-4 shadow-[0_24px_48px_rgba(38,23,12,0.06)] md:p-6 lg:p-8",
              "before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(38,23,12,0.18),transparent)]",
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
