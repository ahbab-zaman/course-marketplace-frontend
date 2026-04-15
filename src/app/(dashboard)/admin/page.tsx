import type { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard/layout";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Platform administration — manage users, courses, and revenue.",
};

export default function AdminDashboardPage() {
  return (
    <DashboardLayout userRole="admin">
      {/* Top Header Area */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold text-on-surface font-headline">
            Admin Dashboard
          </h1>
          <p className="text-on-surface-variant mt-2">
            Platform overview and management
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Export Data
          </button>
        </div>
      </header>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-on-surface-variant font-medium">Total Users</span>
            <span className="material-symbols-outlined text-primary">group</span>
          </div>
          <p className="text-3xl font-bold text-on-surface">12,847</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-on-surface-variant font-medium">Total Courses</span>
            <span className="material-symbols-outlined text-primary">school</span>
          </div>
          <p className="text-3xl font-bold text-on-surface">248</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-on-surface-variant font-medium">Total Revenue</span>
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
          <p className="text-3xl font-bold text-on-surface">$127,459</p>
          <p className="text-sm text-green-600 mt-2">+15% from last month</p>
        </div>
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-on-surface-variant font-medium">Pending Approvals</span>
            <span className="material-symbols-outlined text-primary">schedule</span>
          </div>
          <p className="text-3xl font-bold text-on-surface">23</p>
          <p className="text-sm text-orange-600 mt-2">Requires attention</p>
        </div>
      </section>

      {/* Main Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <h3 className="text-lg font-semibold text-on-surface mb-4">Recent Users</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">person</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-on-surface">User {i}</p>
                  <p className="text-xs text-on-surface-variant">Joined 2 days ago</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Student
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors">
            View All Users
          </button>
        </div>

        {/* Course Approvals */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <h3 className="text-lg font-semibold text-on-surface mb-4">Pending Course Approvals</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-outline-variant/20 rounded-lg p-4">
                <h4 className="font-medium text-on-surface">Course Title {i}</h4>
                <p className="text-sm text-on-surface-variant mt-1">By Instructor Name</p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 px-4 py-2 text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors">
            View All Pending
          </button>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
          <h3 className="text-lg font-semibold text-on-surface mb-4">Revenue Overview</h3>
          <div className="h-48 bg-surface-container-high rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">analytics</span>
              <p className="text-sm text-on-surface-variant">Chart will be implemented</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">This Month</span>
              <span className="font-medium text-on-surface">$45,230</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Last Month</span>
              <span className="font-medium text-on-surface">$39,450</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
