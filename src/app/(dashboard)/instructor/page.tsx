import type { Metadata } from "next";
import { InstructorDashboardContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description: "Course performance, student activity, and revenue overview.",
};

export default function InstructorDashboardPage() {
  return <InstructorDashboardContent />;
}
