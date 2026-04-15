import type { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard/layout";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "View your enrolled courses, progress, and account settings.",
};

export default function UserDashboardPage() {
  return (
    <DashboardLayout userRole="student">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-30 glass-effect px-8 py-4 flex justify-between items-center transition-all duration-300 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-on-surface font-headline">
            Welcome back, Student!
          </h1>
          <p className="text-on-surface-variant mt-1">
            Continue your learning journey
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Browse Courses
          </button>
        </div>
      </header>

      {/* Page Content */}
      <div className="px-8 max-w-[1200px] mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Enrolled Courses</span>
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">8</p>
            <p className="text-sm text-green-600 mt-2">2 completed this month</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Completed</span>
              <span className="material-symbols-outlined text-primary">check_circle</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">5</p>
            <p className="text-sm text-green-600 mt-2">62% completion rate</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">In Progress</span>
              <span className="material-symbols-outlined text-primary">schedule</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">3</p>
            <p className="text-sm text-blue-600 mt-2">Average 45% complete</p>
          </div>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant font-medium">Certificates</span>
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">5</p>
            <p className="text-sm text-green-600 mt-2">Ready to download</p>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20">
                <div className="aspect-video bg-surface-container-high flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">play_circle</span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 rounded-full h-1">
                      <div className="bg-primary h-1 rounded-full" style={{ width: `${i * 30}%` }}></div>
                    </div>
                    <p className="text-white text-xs mt-1">{i * 30}% complete</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-on-surface mb-2">Course Title {i}</h3>
                  <p className="text-sm text-on-surface-variant mb-4">Continue from Lesson {i * 2}</p>
                  <button className="w-full px-4 py-2 bg-primary text-on-primary rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">Recent Activity</h2>
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">
                      {i % 2 === 0 ? "school" : "check_circle"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">
                      {i % 2 === 0 ? "Started new course" : "Completed lesson"}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {i % 2 === 0 ? "Enrolled in Advanced React Patterns" : "Finished Module 3 in JavaScript Fundamentals"} • {i} hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20">
                <div className="aspect-video bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant">image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-on-surface mb-2 text-sm">Recommended Course {i}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                    <span className="text-xs text-on-surface-variant">4.{i}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-on-surface text-sm">$29.99</span>
                    <button className="px-3 py-1 bg-primary text-on-primary text-xs rounded-lg hover:bg-primary/90 transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
