import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "admin" | "instructor" | "student";
}

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased">
      <Sidebar userRole={userRole} />
      <main className="ml-64 min-h-screen p-10">
        {children}
      </main>
    </div>
  );
}