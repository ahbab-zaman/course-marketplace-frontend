import type { Metadata } from "next";
import { UserSettingsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your learner account and notifications.",
};

export default function UserSettingsPage() {
  return <UserSettingsContent />;
}
