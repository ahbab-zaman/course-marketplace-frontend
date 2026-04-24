import { ROUTES } from "@/constants/routes";

export type DashboardRole = "admin" | "instructor" | "student";
export interface DashboardRoleTheme {
  pageGradient: string;
  softAccent: string;
  accentText: string;
  accentRing: string;
  avatarGradient: string;
  avatarText: string;
}

export interface DashboardNavItem {
  label: string;
  href: string;
  icon: string;
  description: string;
  badge?: string;
}

export const dashboardNavigation: Record<DashboardRole, DashboardNavItem[]> = {
  admin: [
    {
      label: "Overview",
      href: ROUTES.ADMIN_DASHBOARD,
      icon: "dashboard",
      description: "Platform activity and approvals",
    },
    {
      label: "Users",
      href: ROUTES.ADMIN_USERS,
      icon: "group",
      description: "Learners, instructors, and roles",
    },
    {
      label: "Courses",
      href: ROUTES.ADMIN_COURSES,
      icon: "school",
      description: "Catalog moderation and quality",
    },
    {
      label: "Payments",
      href: ROUTES.ADMIN_PAYMENTS,
      icon: "payments",
      description: "Revenue, payouts, and refunds",
      badge: "12",
    },
    {
      label: "Reviews",
      href: ROUTES.ADMIN_REVIEWS,
      icon: "reviews",
      description: "Community sentiment and reports",
    },
    {
      label: "Analytics",
      href: ROUTES.ADMIN_ANALYTICS,
      icon: "analytics",
      description: "Growth, retention, and revenue",
    },
    {
      label: "Settings",
      href: ROUTES.ADMIN_SETTINGS,
      icon: "settings",
      description: "Security, billing, and platform rules",
    },
  ],
  instructor: [
    {
      label: "Overview",
      href: ROUTES.INSTRUCTOR_DASHBOARD,
      icon: "space_dashboard",
      description: "Courses, students, and revenue",
    },
    {
      label: "My Courses",
      href: ROUTES.INSTRUCTOR_COURSES,
      icon: "menu_book",
      description: "Published, draft, and scheduled courses",
    },
    {
      label: "Create Course",
      href: ROUTES.INSTRUCTOR_CREATE_COURSE,
      icon: "add_circle",
      description: "Outline, content, pricing, and launch",
    },
    {
      label: "Students",
      href: ROUTES.INSTRUCTOR_STUDENTS,
      icon: "groups",
      description: "Engagement and cohort activity",
    },
    {
      label: "Analytics",
      href: ROUTES.INSTRUCTOR_ANALYTICS,
      icon: "monitoring",
      description: "Sales, completion, and watch time",
    },
    {
      label: "Reviews",
      href: ROUTES.INSTRUCTOR_REVIEWS,
      icon: "rate_review",
      description: "Feedback to improve course quality",
    },
    {
      label: "Earnings",
      href: ROUTES.INSTRUCTOR_EARNINGS,
      icon: "wallet",
      description: "Payouts, revenue mix, and projections",
    },
    {
      label: "Settings",
      href: ROUTES.INSTRUCTOR_SETTINGS,
      icon: "settings",
      description: "Profile, payouts, and notifications",
    },
  ],
  student: [
    {
      label: "Overview",
      href: ROUTES.USER_DASHBOARD,
      icon: "dashboard",
      description: "Learning streak, activity, and focus",
    },
    {
      label: "My Courses",
      href: ROUTES.USER_COURSES,
      icon: "school",
      description: "Enrolled and saved content",
    },
    {
      label: "Progress",
      href: ROUTES.USER_PROGRESS,
      icon: "trending_up",
      description: "Track milestones and time spent",
    },
    {
      label: "Certificates",
      href: ROUTES.USER_CERTIFICATES,
      icon: "workspace_premium",
      description: "Achievements and downloadable proofs",
    },
    {
      label: "Wishlist",
      href: ROUTES.USER_WISHLIST,
      icon: "favorite",
      description: "Courses to purchase later",
      badge: "3",
    },
    {
      label: "Orders",
      href: ROUTES.USER_ORDERS,
      icon: "receipt_long",
      description: "Invoices, payment records, and receipts",
    },
    {
      label: "Settings",
      href: ROUTES.USER_SETTINGS,
      icon: "settings",
      description: "Account, password, and preferences",
    },
  ],
};

export const dashboardRoleMeta: Record<
  DashboardRole,
  { label: string; badge: string; theme: DashboardRoleTheme }
> = {
  admin: {
    label: "Admin control",
    badge: "Platform",
    theme: {
      pageGradient: "bg-[linear-gradient(180deg,#f3f4f8_0%,#eceff7_100%)]",
      softAccent: "bg-[#edf1ff]",
      accentText: "text-[#5166c9]",
      accentRing: "ring-[#5166c9]",
      avatarGradient: "bg-[linear-gradient(180deg,#d9e3ff_0%,#eef2ff_100%)]",
      avatarText: "text-[#4057a7]",
    },
  },
  instructor: {
    label: "Instructor studio",
    badge: "Teaching",
    theme: {
      pageGradient: "bg-[linear-gradient(180deg,#f2f8f6_0%,#ebf5f1_100%)]",
      softAccent: "bg-[#e4f7f1]",
      accentText: "text-[#157a69]",
      accentRing: "ring-[#157a69]",
      avatarGradient: "bg-[linear-gradient(180deg,#d5f4ea_0%,#ebfcf6_100%)]",
      avatarText: "text-[#157a69]",
    },
  },
  student: {
    label: "Learning space",
    badge: "Student",
    theme: {
      pageGradient: "bg-[linear-gradient(180deg,#f4f6fb_0%,#eef2fa_100%)]",
      softAccent: "bg-[#eaf0ff]",
      accentText: "text-[#5166c9]",
      accentRing: "ring-[#5166c9]",
      avatarGradient: "bg-[linear-gradient(180deg,#d8e2ff_0%,#f3f6ff_100%)]",
      avatarText: "text-[#4057a7]",
    },
  },
};
