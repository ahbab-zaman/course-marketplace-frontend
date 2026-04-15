import type { Metadata } from "next";
import { InstructorSettingsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your instructor profile, payouts, and notifications.",
};

export default function InstructorSettingsPage() {
  return <InstructorSettingsContent />;
}
