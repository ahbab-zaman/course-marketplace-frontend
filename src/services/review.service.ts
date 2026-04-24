import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export interface CourseReview {
  id: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  user: { id: string; name: string; avatar?: string | null };
}

export const reviewService = {
  async getByCourse(courseId: string): Promise<ApiResponse<CourseReview[]>> {
    const { data } = await apiClient.get<ApiResponse<CourseReview[]>>(
      `/courses/${courseId}/reviews`,
    );
    return data;
  },

  async upsert(courseId: string, payload: { rating: number; comment?: string }) {
    const { data } = await apiClient.post<ApiResponse<CourseReview>>(
      `/courses/${courseId}/reviews`,
      payload,
    );
    return data;
  },
};
