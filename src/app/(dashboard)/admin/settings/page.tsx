import type { Metadata } from "next";
import { AdminSettingsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Settings",
  description: "Platform configuration, billing policy, and moderation rules.",
};

export default function AdminSettingsPage() {
  return <AdminSettingsContent />;
}
