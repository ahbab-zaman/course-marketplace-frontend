import type { Metadata } from "next";
import { AdminDashboardContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Platform oversight, moderation, and performance metrics.",
};

export default function AdminDashboardPage() {
  return <AdminDashboardContent />;
}
