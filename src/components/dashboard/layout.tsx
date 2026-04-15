"use client";

import type { ReactNode } from "react";
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f3f4f6_0%,#eef2f1_100%)] text-[var(--color-on-surface)]">
      <div className="mx-auto flex max-w-[1600px] gap-0 px-3 py-3 md:px-5 md:py-5 xl:gap-5">
        <Sidebar userRole={userRole} />

        <main className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-[2rem] border border-[color:rgba(15,23,42,0.06)] bg-[#fcfcfb] shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
            <DashboardTopbar userRole={userRole} />
            <div className="px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
