import type { Metadata } from "next";
import { UserDashboardContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Learning overview, active progress, certificates, and orders.",
};

export default function UserDashboardPage() {
  return <UserDashboardContent />;
}
