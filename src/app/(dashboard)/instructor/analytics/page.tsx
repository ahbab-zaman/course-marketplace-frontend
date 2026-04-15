import type { Metadata } from "next";
import { InstructorAnalyticsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Sales, watch time, and completion trends.",
};

export default function InstructorAnalyticsPage() {
  return <InstructorAnalyticsContent />;
}
