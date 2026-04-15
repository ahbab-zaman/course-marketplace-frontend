import type { Metadata } from "next";
import { InstructorReviewsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Learner feedback and review response workflow.",
};

export default function InstructorReviewsPage() {
  return <InstructorReviewsContent />;
}
