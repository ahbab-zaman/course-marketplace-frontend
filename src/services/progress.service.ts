import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export interface LessonProgressItem {
  id: string;
  watchedSeconds: number;
  isCompleted: boolean;
  lesson: {
    id: string;
    title: string;
    courseId: string;
    orderIndex: number;
    course: { title: string; slug: string };
  };
}

export const progressService = {
  async updateLesson(
    lessonId: string,
    payload: { watchedSeconds: number; isCompleted: boolean },
  ) {
    const { data } = await apiClient.patch<ApiResponse<LessonProgressItem>>(
      `/lessons/${lessonId}/progress`,
      payload,
    );
    return data;
  },

  async getMine() {
    const { data } = await apiClient.get<ApiResponse<LessonProgressItem[]>>(
      "/users/me/progress",
    );
    return data;
  },
};
