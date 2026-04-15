import type { Metadata } from "next";
import { UserOrdersContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Orders",
  description: "View your purchases and invoices.",
};

export default function UserOrdersPage() {
  return <UserOrdersContent />;
}
