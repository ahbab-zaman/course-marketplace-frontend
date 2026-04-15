import type { Metadata } from "next";
import { UserProgressContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Progress",
  description: "Track course completion and weekly goals.",
};

export default function UserProgressPage() {
  return <UserProgressContent />;
}
