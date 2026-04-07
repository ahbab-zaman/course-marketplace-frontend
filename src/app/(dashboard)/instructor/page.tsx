import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description: "Manage your courses, track earnings, and view student analytics.",
};

export default function InstructorDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">
        Instructor Dashboard 🎓
      </h1>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
        Manage your courses and track your performance.
      </p>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Courses", value: "0", icon: "📖" },
          { label: "Total Students", value: "0", icon: "👥" },
          { label: "Total Revenue", value: "$0", icon: "💰" },
          { label: "Avg Rating", value: "0.0", icon: "⭐" },
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

      {/* Course management, revenue charts will go here */}
    </div>
  );
}
