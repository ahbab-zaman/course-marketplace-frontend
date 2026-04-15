import type { Metadata } from "next";
import { AdminReviewsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Moderate community reviews and reported feedback.",
};

export default function AdminReviewsPage() {
  return <AdminReviewsContent />;
}
