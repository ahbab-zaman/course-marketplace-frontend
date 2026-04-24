"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Sidebar, DashboardTopbar } from "./sidebar";
import { dashboardRoleMeta, type DashboardRole } from "./config";
import { useAuth } from "@/hooks/useAuth";

const roleToDashboardPath = {
  ADMIN: "/admin",
  INSTRUCTOR: "/instructor",
  STUDENT: "/user",
} as const;

const dashboardRoleToUserRole = {
  admin: "ADMIN",
  instructor: "INSTRUCTOR",
  student: "STUDENT",
} as const;

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: DashboardRole;
}

export function DashboardLayout({
  children,
  userRole,
}: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const roleTheme = dashboardRoleMeta[userRole].theme;

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated || !user) {
      const callbackUrl = pathname || roleToDashboardPath.STUDENT;
      router.replace(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      return;
    }

    const expectedRole = dashboardRoleToUserRole[userRole];
    if (user.role !== expectedRole) {
      router.replace(roleToDashboardPath[user.role]);
    }
  }, [isAuthenticated, isLoading, pathname, router, user, userRole]);

  if (isLoading || !isAuthenticated || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f3f4f6_0%,#eef2f1_100%)] px-6">
        <div className="w-full max-w-sm rounded-[1.75rem] border border-[color:rgba(15,23,42,0.06)] bg-white p-8 text-center shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-on-surface-variant)]">
            <Loader2 className="h-4 w-4 animate-spin text-[#1f8f88]" />
            Checking your session...
          </p>
        </div>
      </div>
    );
  }

  const expectedRole = dashboardRoleToUserRole[userRole];
  if (user.role !== expectedRole) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f3f4f6_0%,#eef2f1_100%)] px-6">
        <div className="w-full max-w-sm rounded-[1.75rem] border border-[color:rgba(15,23,42,0.06)] bg-white p-8 text-center shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-on-surface-variant)]">
            <Loader2 className="h-4 w-4 animate-spin text-[#1f8f88]" />
            Redirecting to your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${roleTheme.pageGradient} text-[var(--color-on-surface)]`}>
      <div className="mx-auto flex max-w-[1600px] gap-0 px-3 py-3 md:px-5 md:py-5 xl:gap-5">
        <Sidebar userRole={userRole} onLogout={logout} />

        <main className="min-w-0 flex-1">
          <div className="overflow-hidden rounded-[2rem] border border-[color:rgba(15,23,42,0.06)] bg-[#fcfcfb] shadow-[0_30px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_36px_80px_rgba(15,23,42,0.11)]">
            <DashboardTopbar userRole={userRole} userName={user.name} />
            <div className="px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
