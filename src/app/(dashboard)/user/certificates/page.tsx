import type { Metadata } from "next";
import { UserCertificatesContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Access your issued course certificates.",
};

export default function UserCertificatesPage() {
  return <UserCertificatesContent />;
}
