// ============================================
// Route Constants — Type-safe navigation paths
// ============================================

export const ROUTES = {
  // Public
  HOME: "/",
  ABOUT: "/about",
  PRICING: "/pricing",
  CONTACT: "/contact",
  COURSES: "/courses",
  COURSE_DETAIL: (slug: string) => `/course/${slug}` as const,
  AUTH: "/auth",

  // Dashboard — User
  USER_DASHBOARD: "/user",
  USER_COURSES: "/user/courses",
  USER_SETTINGS: "/user/settings",
  USER_ORDERS: "/user/orders",

  // Dashboard — Instructor
  INSTRUCTOR_DASHBOARD: "/instructor",
  INSTRUCTOR_COURSES: "/instructor/courses",
  INSTRUCTOR_CREATE_COURSE: "/instructor/courses/create",
  INSTRUCTOR_ANALYTICS: "/instructor/analytics",
  INSTRUCTOR_REVIEWS: "/instructor/reviews",
  INSTRUCTOR_SETTINGS: "/instructor/settings",

  // Dashboard — Admin
  ADMIN_DASHBOARD: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_COURSES: "/admin/courses",
  ADMIN_PAYMENTS: "/admin/payments",
  ADMIN_ANALYTICS: "/admin/analytics",
  ADMIN_SETTINGS: "/admin/settings",
} as const;

// Routes that don't require authentication
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.PRICING,
  ROUTES.CONTACT,
  ROUTES.COURSES,
  ROUTES.AUTH,
];

// Routes grouped by role for sidebar navigation
export const DASHBOARD_ROUTES = {
  user: [
    ROUTES.USER_DASHBOARD,
    ROUTES.USER_COURSES,
    ROUTES.USER_ORDERS,
    ROUTES.USER_SETTINGS,
  ],
  instructor: [
    ROUTES.INSTRUCTOR_DASHBOARD,
    ROUTES.INSTRUCTOR_COURSES,
    ROUTES.INSTRUCTOR_CREATE_COURSE,
    ROUTES.INSTRUCTOR_ANALYTICS,
    ROUTES.INSTRUCTOR_REVIEWS,
    ROUTES.INSTRUCTOR_SETTINGS,
  ],
  admin: [
    ROUTES.ADMIN_DASHBOARD,
    ROUTES.ADMIN_USERS,
    ROUTES.ADMIN_COURSES,
    ROUTES.ADMIN_PAYMENTS,
    ROUTES.ADMIN_ANALYTICS,
    ROUTES.ADMIN_SETTINGS,
  ],
} as const;
