import type { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard/layout";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description: "Manage your courses, track earnings, and view student analytics.",
};

export default function InstructorDashboardPage() {
  return (
    <DashboardLayout userRole="instructor">
      {/* Top Header */}
      <header className="flex justify-between items-center px-10 py-8">
        <div>
          <h1 className="text-4xl font-bold text-on-surface font-headline">
            Instructor Dashboard
          </h1>
          <p className="text-on-surface-variant mt-2">
            Manage your courses and track your performance
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Create New Course
          </button>
        </div>
      </header>

      <section className="px-10 space-y-10">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Total Courses</span>
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">12</p>
            <p className="text-sm text-green-600 mt-2">8 published, 4 drafts</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Total Students</span>
              <span className="material-symbols-outlined text-primary">group</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">1,247</p>
            <p className="text-sm text-green-600 mt-2">+15% this month</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Total Revenue</span>
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">$12,459</p>
            <p className="text-sm text-green-600 mt-2">+22% this month</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Avg Rating</span>
              <span className="material-symbols-outlined text-primary">star</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">4.8</p>
            <p className="text-sm text-green-600 mt-2">Based on 89 reviews</p>
          </div>
        </div>

        {/* Recent Courses */}
        <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-on-surface">Your Courses</h2>
            <button className="px-4 py-2 text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20">
                <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-on-surface mb-2">Course Title {i}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
                    <span className="text-sm text-on-surface-variant">247 students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-on-surface">$49.99</span>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-sm">analytics</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20">
            <h3 className="text-xl font-semibold text-on-surface mb-6">Recent Enrollments</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">person</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">Student {i}</p>
                    <p className="text-xs text-on-surface-variant">Enrolled in "Course Title" • 2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    New
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20">
            <h3 className="text-xl font-semibold text-on-surface mb-6">Revenue Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">This Month</span>
                <span className="font-semibold text-on-surface">$3,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Last Month</span>
                <span className="font-semibold text-on-surface">$2,891</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface-variant">Total Earnings</span>
                <span className="font-semibold text-on-surface">$12,459</span>
              </div>
            </div>
            <button className="w-full mt-6 px-4 py-2 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View Detailed Analytics
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
