import type { Metadata } from "next";
import { InstructorEarningsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Earnings",
  description: "Revenue, platform fees, and payout schedule.",
};

export default function InstructorEarningsPage() {
  return <InstructorEarningsContent />;
}
