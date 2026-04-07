// ============================================
// Role Constants
// ============================================

export enum Role {
  USER = "user",
  INSTRUCTOR = "instructor",
  ADMIN = "admin",
}

export const ROLE_LABELS: Record<Role, string> = {
  [Role.USER]: "Student",
  [Role.INSTRUCTOR]: "Instructor",
  [Role.ADMIN]: "Administrator",
};

export const ROLE_COLORS: Record<Role, string> = {
  [Role.USER]: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  [Role.INSTRUCTOR]:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  [Role.ADMIN]:
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};
