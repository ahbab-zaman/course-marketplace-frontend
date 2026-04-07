// ============================================
// App Configuration Constants
// ============================================

export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Course Marketplace",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  description:
    "Discover thousands of expert-led courses. Learn new skills, advance your career.",
  version: "1.0.0",
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
} as const;

export const COURSE_CATEGORIES = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Cloud Computing",
  "Cybersecurity",
  "UI/UX Design",
  "Digital Marketing",
  "Business",
  "Photography",
  "Music",
] as const;

export const COURSE_LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
] as const;

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
] as const;
