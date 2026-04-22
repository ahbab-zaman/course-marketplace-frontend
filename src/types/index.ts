// ============================================
// Course Marketplace — Global TypeScript Types
// ============================================

// ---------- User & Auth ----------
export type UserRole = "STUDENT" | "INSTRUCTOR" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string | null;
  avatar?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  isEmailVerified?: boolean;
  isBlocked?: boolean;
}

// ---------- Category ----------
export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface AuthResponse {
  user: User;
}

// ---------- Course ----------
export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type CourseStatus = "draft" | "pending" | "published" | "archived";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  thumbnail: string;
  previewVideo?: string;
  category: string;
  tags: string[];
  level: CourseLevel;
  status: CourseStatus;
  instructor: Pick<User, "id" | "name" | "avatar">;
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  totalDuration: number; // in minutes
  totalLessons: number;
  sections: CourseSection[];
  requirements: string[];
  objectives: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseSection {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "article" | "quiz";
  duration: number; // in minutes
  order: number;
  isPreview: boolean;
  videoUrl?: string;
  content?: string;
}

// ---------- Review ----------
export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  courseId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// ---------- Enrollment ----------
export type EnrollmentStatus = "ACTIVE" | "REFUNDED" | "REVOKED";

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  status: EnrollmentStatus;
  completionPercentage: number;
  accessGrantedAt: string;
  lastAccessedAt?: string | null;
  lastLesson?: {
    id: string;
    title: string;
    orderIndex: number;
  } | null;
  course: {
    id: string;
    title: string;
    slug: string;
    thumbnail: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

// ---------- Payment ----------
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: string;
  transactionId?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  courses: Pick<Course, "id" | "title" | "thumbnail" | "price">[];
  totalAmount: number;
  status: PaymentStatus;
  createdAt: string;
}

// ---------- Analytics ----------
export interface DashboardStats {
  totalUsers: number;
  totalCourses: number;
  totalRevenue: number;
  totalEnrollments: number;
  recentOrders: Order[];
  monthlyRevenue: { month: string; revenue: number }[];
  topCourses: Pick<Course, "id" | "title" | "enrollmentCount" | "rating">[];
}

// ---------- API ----------
export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// ---------- UI ----------
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface FilterState {
  search: string;
  category: string;
  level: CourseLevel | "";
  priceRange: [number, number];
  rating: number;
  sortBy: string;
  page: number;
  limit: number;
}
