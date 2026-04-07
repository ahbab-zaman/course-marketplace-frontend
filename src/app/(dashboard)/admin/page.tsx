import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Platform administration — manage users, courses, and revenue.",
};

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Admin Panel 🛡️</h1>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
        Platform overview and management.
      </p>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Users", value: "0", icon: "👥" },
          { label: "Total Courses", value: "0", icon: "📚" },
          { label: "Total Revenue", value: "$0", icon: "💰" },
          { label: "Pending Approvals", value: "0", icon: "⏳" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--muted-foreground)]">
                {stat.label}
              </span>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* User management, analytics charts, course approvals will go here */}
    </div>
  );
}
