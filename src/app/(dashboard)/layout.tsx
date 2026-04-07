import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — will be added as a shared component */}
      <aside className="hidden w-64 border-r border-[var(--border)] bg-[var(--card)] lg:block">
        <div className="flex h-16 items-center border-b border-[var(--border)] px-6">
          <span className="font-heading text-lg font-bold gradient-text">
            CourseHub
          </span>
        </div>
        {/* Sidebar navigation links will go here */}
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--card)] px-6">
          <h2 className="text-sm font-medium text-[var(--muted-foreground)]">
            Dashboard
          </h2>
          {/* User menu, notifications, theme toggle will go here */}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
