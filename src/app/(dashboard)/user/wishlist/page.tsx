import type { Metadata } from "next";
import { UserWishlistContent } from "@/components/dashboard/pages";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Saved courses for future enrollment.",
};

export default function UserWishlistPage() {
  return <UserWishlistContent />;
}
