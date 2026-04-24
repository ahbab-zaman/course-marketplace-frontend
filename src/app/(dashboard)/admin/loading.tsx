import { Loader2 } from "lucide-react";

export default function AdminDashboardLoading() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f8f7] px-4 py-2 text-sm font-medium text-[#1f8f88]">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Loading admin dashboard...</span>
      </div>
    </div>
  );
}
