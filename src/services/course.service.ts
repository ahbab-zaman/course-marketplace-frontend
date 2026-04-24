import apiClient from "@/lib/api-client";
import type { Course, ApiResponse, PaginatedResponse, FilterState, CourseCategory } from "@/types";

type BackendCourse = Record<string, unknown>;
type CourseListParams = Partial<FilterState> | Record<string, string | number | undefined>;

function normalizeCourseListParams(filters?: CourseListParams) {
  if (!filters) return undefined;

  const raw = filters as Record<string, string | number | undefined>;
  const params: Record<string, string | number> = {};

  const sort = raw.sort ?? raw.sortBy;
  const categoryId = raw.categoryId ?? raw.category;

  if (raw.search) params.search = raw.search;
  if (sort) params.sort = sort;
  if (categoryId) params.categoryId = categoryId;
  if (raw.categorySlug) params.categorySlug = raw.categorySlug;
  if (raw.page) params.page = raw.page;
  if (raw.limit) params.limit = raw.limit;
  if (raw.minPrice !== undefined) params.minPrice = raw.minPrice;
  if (raw.maxPrice !== undefined) params.maxPrice = raw.maxPrice;

  return params;
}

function normalizeCourse(raw: BackendCourse): Course {
  const categoryRaw = (raw.category as Record<string, unknown> | undefined) ?? null;
  const lessonsCount =
    ((raw._count as Record<string, number> | undefined)?.lessons as number | undefined) ?? 0;

  return {
    id: String(raw.id ?? ""),
    slug: String(raw.slug ?? ""),
    title: String(raw.title ?? ""),
    description: String(raw.description ?? ""),
    shortDescription: String(raw.shortDescription ?? ""),
    price: Number(raw.price ?? 0),
    thumbnail: String(raw.thumbnail ?? "/placeholder-course.jpg"),
    category: categoryRaw
      ? {
          id: String(categoryRaw.id ?? ""),
          name: String(categoryRaw.name ?? "General"),
          slug: String(categoryRaw.slug ?? ""),
        }
      : "General",
    tags: [],
    level: "beginner",
    status: "published",
    instructor: {
      id: String((raw.instructor as Record<string, unknown> | undefined)?.id ?? ""),
      name: String((raw.instructor as Record<string, unknown> | undefined)?.name ?? "Instructor"),
      avatar: String((raw.instructor as Record<string, unknown> | undefined)?.avatar ?? ""),
    },
    rating: Number(raw.avgRating ?? 0),
    reviewCount: Number(raw.totalReviews ?? 0),
    enrollmentCount: Number(raw.enrollmentCount ?? 0),
    totalDuration: Number(raw.totalDuration ?? 0),
    totalLessons: lessonsCount,
    sections: [],
    requirements: [],
    objectives: [],
    createdAt: String(raw.createdAt ?? new Date().toISOString()),
    updatedAt: String(raw.updatedAt ?? new Date().toISOString()),
  };
}

export const courseService = {
  async getAll(
    filters?: CourseListParams
  ): Promise<PaginatedResponse<Course>> {
    const { data } = await apiClient.get<ApiResponse<BackendCourse[]>>(
      "/courses",
      { params: normalizeCourseListParams(filters) }
    );

    const pagination = data.meta
      ? {
          page: data.meta.page ?? 1,
          limit: data.meta.limit ?? 12,
          total: data.meta.total ?? 0,
          totalPages: data.meta.totalPages ?? 0,
        }
      : { page: 1, limit: 12, total: data.data.length, totalPages: 1 };

    return {
      ...data,
      data: data.data.map(normalizeCourse),
      pagination,
    };
  },

  async getBySlug(slug: string): Promise<ApiResponse<Course>> {
    const { data } = await apiClient.get<ApiResponse<BackendCourse>>(
      `/courses/${slug}`
    );
    return { ...data, data: normalizeCourse(data.data) };
  },

  async getFeatured(): Promise<ApiResponse<Course[]>> {
    const { data } = await apiClient.get<ApiResponse<Course[]>>(
      "/courses/featured"
    );
    return data;
  },

  async create(courseData: Partial<Course>): Promise<ApiResponse<Course>> {
    const { data } = await apiClient.post<ApiResponse<Course>>(
      "/courses",
      courseData
    );
    return data;
  },

  async update(
    id: string,
    courseData: Partial<Course>
  ): Promise<ApiResponse<Course>> {
    const { data } = await apiClient.patch<ApiResponse<BackendCourse>>(
      `/courses/${id}`,
      courseData
    );
    return { ...data, data: normalizeCourse(data.data) };
  },

  async delete(id: string): Promise<ApiResponse<null>> {
    const { data } = await apiClient.delete<ApiResponse<null>>(
      `/courses/${id}`
    );
    return data;
  },

  async enroll(courseId: string): Promise<ApiResponse<null>> {
    const { data } = await apiClient.post<ApiResponse<null>>(
      `/courses/${courseId}/enroll`
    );
    return data;
  },

  async getMine(params?: { page?: number; limit?: number; search?: string; sort?: string }) {
    const { data } = await apiClient.get<ApiResponse<BackendCourse[]>>("/courses/me", {
      params,
    });
    return {
      ...data,
      data: data.data.map(normalizeCourse),
      pagination: {
        page: data.meta?.page ?? 1,
        limit: data.meta?.limit ?? 10,
        total: data.meta?.total ?? data.data.length,
        totalPages: data.meta?.totalPages ?? 1,
      },
    } as PaginatedResponse<Course>;
  },

  async submitForReview(id: string): Promise<ApiResponse<Course>> {
    const { data } = await apiClient.post<ApiResponse<BackendCourse>>(
      `/courses/${id}/submit`
    );
    return { ...data, data: normalizeCourse(data.data) };
  },
};

export const categoryService = {
  async getAll(): Promise<ApiResponse<CourseCategory[]>> {
    const { data } = await apiClient.get<ApiResponse<CourseCategory[]>>(
      "/categories"
    );
    return data;
  },

  async getBySlug(slug: string): Promise<ApiResponse<CourseCategory>> {
    const { data } = await apiClient.get<ApiResponse<CourseCategory>>(
      `/categories/${slug}`
    );
    return data;
  },
};
