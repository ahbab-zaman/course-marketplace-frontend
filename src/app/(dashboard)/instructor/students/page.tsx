import type { Metadata } from "next";
import { InstructorStudentsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Students",
  description: "Review cohort engagement and completion trends.",
};

export default function InstructorStudentsPage() {
  return <InstructorStudentsContent />;
}
