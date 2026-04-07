import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "View your enrolled courses, progress, and account settings.",
};

export default function UserDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Welcome Back! 👋</h1>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
        Here&apos;s an overview of your learning journey.
      </p>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Enrolled Courses", value: "0", icon: "📚" },
          { label: "Completed", value: "0", icon: "✅" },
          { label: "In Progress", value: "0", icon: "⏳" },
          { label: "Certificates", value: "0", icon: "🏆" },
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

      {/* Recent courses, progress charts will go here */}
    </div>
  );
}
