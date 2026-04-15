import type { ReactNode } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function UserLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout userRole="student">{children}</DashboardLayout>;
}
