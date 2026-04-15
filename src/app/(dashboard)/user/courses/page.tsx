import type { Metadata } from "next";
import { UserCoursesContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "My Courses",
  description: "Enrolled courses and learning progress.",
};

export default function UserCoursesPage() {
  return <UserCoursesContent />;
}
