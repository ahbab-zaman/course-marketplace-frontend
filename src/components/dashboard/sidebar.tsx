"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  userRole: "admin" | "instructor" | "student";
}

const navigationItems = {
  admin: [
    { name: "Overview", href: "/admin", icon: "dashboard" },
    { name: "Users", href: "/admin/users", icon: "group" },
    { name: "Courses", href: "/admin/courses", icon: "school" },
    { name: "Payments", href: "/admin/payments", icon: "payments" },
    { name: "Reviews", href: "/admin/reviews", icon: "reviews" },
    { name: "Analytics", href: "/admin/analytics", icon: "analytics" },
  ],
  instructor: [
    { name: "Dashboard", href: "/instructor", icon: "dashboard" },
    { name: "My Courses", href: "/instructor/courses", icon: "school" },
    { name: "Create Course", href: "/instructor/courses/create", icon: "add" },
    { name: "Students", href: "/instructor/students", icon: "group" },
    { name: "Analytics", href: "/instructor/analytics", icon: "analytics" },
    { name: "Earnings", href: "/instructor/earnings", icon: "payments" },
  ],
  student: [
    { name: "Dashboard", href: "/user", icon: "dashboard" },
    { name: "My Courses", href: "/user/courses", icon: "school" },
    { name: "Progress", href: "/user/progress", icon: "progress" },
    { name: "Certificates", href: "/user/certificates", icon: "certificate" },
    { name: "Wishlist", href: "/user/wishlist", icon: "favorite" },
  ],
};

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const items = navigationItems[userRole];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#e7f0ec] dark:bg-stone-900 flex flex-col p-6 gap-y-2 z-40">
      <div className="mb-10 px-2">
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#26170c] dark:text-white font-headline">
          The Curator
        </Link>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-on-primary"
                  : "text-on-surface hover:bg-surface-container"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-1">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-lg">settings</span>
          Settings
        </Link>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container transition-colors w-full text-left">
          <span className="material-symbols-outlined text-lg">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}