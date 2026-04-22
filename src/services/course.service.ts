import apiClient from "@/lib/api-client";
import type { Course, ApiResponse, PaginatedResponse, FilterState, CourseCategory } from "@/types";

export const courseService = {
  async getAll(
    filters?: Partial<FilterState>
  ): Promise<PaginatedResponse<Course>> {
    const { data } = await apiClient.get<PaginatedResponse<Course>>(
      "/courses",
      { params: filters }
    );
    return data;
  },

  async getBySlug(slug: string): Promise<ApiResponse<Course>> {
    const { data } = await apiClient.get<ApiResponse<Course>>(
      `/courses/${slug}`
    );
    return data;
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
    const { data } = await apiClient.put<ApiResponse<Course>>(
      `/courses/${id}`,
      courseData
    );
    return data;
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
