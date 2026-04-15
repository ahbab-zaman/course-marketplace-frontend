import type { ReactNode } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function InstructorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout userRole="instructor">{children}</DashboardLayout>;
}
