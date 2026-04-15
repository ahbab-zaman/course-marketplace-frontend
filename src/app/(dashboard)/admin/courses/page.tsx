import type { Metadata } from "next";
import { AdminCoursesContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Courses",
  description: "Review course moderation and catalog quality.",
};

export default function AdminCoursesPage() {
  return <AdminCoursesContent />;
}
