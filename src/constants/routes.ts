// ============================================
// Route Constants - Type-safe navigation paths
// ============================================

export const ROUTES = {
  // Public
  HOME: "/",
  ABOUT: "/about",
  PRICING: "/pricing",
  CONTACT: "/contact",
  COURSES: "/courses",
  COURSE_DETAIL: (slug: string) => `/course/${slug}` as const,
  AUTH: "/login",

  // Dashboard - User
  USER_DASHBOARD: "/user",
  USER_COURSES: "/user/courses",
  USER_PROGRESS: "/user/progress",
  USER_CERTIFICATES: "/user/certificates",
  USER_WISHLIST: "/user/wishlist",
  USER_ORDERS: "/user/orders",
  USER_SETTINGS: "/user/settings",

  // Dashboard - Instructor
  INSTRUCTOR_DASHBOARD: "/instructor",
  INSTRUCTOR_COURSES: "/instructor/courses",
  INSTRUCTOR_CREATE_COURSE: "/instructor/courses/create",
  INSTRUCTOR_STUDENTS: "/instructor/students",
  INSTRUCTOR_ANALYTICS: "/instructor/analytics",
  INSTRUCTOR_REVIEWS: "/instructor/reviews",
  INSTRUCTOR_EARNINGS: "/instructor/earnings",
  INSTRUCTOR_SETTINGS: "/instructor/settings",

  // Dashboard - Admin
  ADMIN_DASHBOARD: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_COURSES: "/admin/courses",
  ADMIN_PAYMENTS: "/admin/payments",
  ADMIN_REVIEWS: "/admin/reviews",
  ADMIN_ANALYTICS: "/admin/analytics",
  ADMIN_SETTINGS: "/admin/settings",
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.PRICING,
  ROUTES.CONTACT,
  ROUTES.COURSES,
  ROUTES.AUTH,
];

export const DASHBOARD_ROUTES = {
  user: [
    ROUTES.USER_DASHBOARD,
    ROUTES.USER_COURSES,
    ROUTES.USER_PROGRESS,
    ROUTES.USER_CERTIFICATES,
    ROUTES.USER_WISHLIST,
    ROUTES.USER_ORDERS,
    ROUTES.USER_SETTINGS,
  ],
  instructor: [
    ROUTES.INSTRUCTOR_DASHBOARD,
    ROUTES.INSTRUCTOR_COURSES,
    ROUTES.INSTRUCTOR_CREATE_COURSE,
    ROUTES.INSTRUCTOR_STUDENTS,
    ROUTES.INSTRUCTOR_ANALYTICS,
    ROUTES.INSTRUCTOR_REVIEWS,
    ROUTES.INSTRUCTOR_EARNINGS,
    ROUTES.INSTRUCTOR_SETTINGS,
  ],
  admin: [
    ROUTES.ADMIN_DASHBOARD,
    ROUTES.ADMIN_USERS,
    ROUTES.ADMIN_COURSES,
    ROUTES.ADMIN_PAYMENTS,
    ROUTES.ADMIN_REVIEWS,
    ROUTES.ADMIN_ANALYTICS,
    ROUTES.ADMIN_SETTINGS,
  ],
} as const;
