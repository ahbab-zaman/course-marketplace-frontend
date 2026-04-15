import type { Metadata } from "next";
import { InstructorCreateCourseContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Create Course",
  description: "Build a new course with a structured launch workflow.",
};

export default function InstructorCreateCoursePage() {
  return <InstructorCreateCourseContent />;
}
