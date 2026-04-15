import type { Metadata } from "next";
import { AdminPaymentsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Payments",
  description: "Track transactions, refunds, and instructor payouts.",
};

export default function AdminPaymentsPage() {
  return <AdminPaymentsContent />;
}
