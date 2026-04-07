"use client";

import { create } from "zustand";
import type { Course, FilterState } from "@/types";

interface CourseStore {
  courses: Course[];
  featuredCourses: Course[];
  currentCourse: Course | null;
  filters: FilterState;
  isLoading: boolean;

  // Actions
  setCourses: (courses: Course[]) => void;
  setFeaturedCourses: (courses: Course[]) => void;
  setCurrentCourse: (course: Course | null) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
}

const defaultFilters: FilterState = {
  search: "",
  category: "",
  level: "",
  priceRange: [0, 1000],
  rating: 0,
  sortBy: "newest",
  page: 1,
  limit: 12,
};

export const useCourseStore = create<CourseStore>()((set) => ({
  courses: [],
  featuredCourses: [],
  currentCourse: null,
  filters: defaultFilters,
  isLoading: false,

  setCourses: (courses) => set({ courses }),
  setFeaturedCourses: (courses) => set({ featuredCourses: courses }),
  setCurrentCourse: (course) => set({ currentCourse: course }),
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () => set({ filters: defaultFilters }),
  setLoading: (isLoading) => set({ isLoading }),
}));
