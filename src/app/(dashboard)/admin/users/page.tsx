import type { Metadata } from "next";
import { AdminUsersContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage learners, instructors, and admin access.",
};

export default function AdminUsersPage() {
  return <AdminUsersContent />;
}
