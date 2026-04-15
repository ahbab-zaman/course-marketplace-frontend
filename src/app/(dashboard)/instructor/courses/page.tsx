import type { Metadata } from "next";
import { InstructorCoursesContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "My Courses",
  description: "Manage published, draft, and scheduled courses.",
};

export default function InstructorCoursesPage() {
  return <InstructorCoursesContent />;
}
