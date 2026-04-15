import type { Metadata } from "next";
import { AdminAnalyticsContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Platform growth, retention, and conversion signals.",
};

export default function AdminAnalyticsPage() {
  return <AdminAnalyticsContent />;
}
