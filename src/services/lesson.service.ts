import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export interface LessonItem {
  id: string;
  courseId: string;
  title: string;
  slug: string;
  contentType: string;
  videoUrl: string | null;
  articleContent: string | null;
  durationMinutes: number;
  isPreview: boolean;
  isPublished: boolean;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface LessonPlayback {
  lesson: LessonItem;
  progress: {
    watchedSeconds: number;
    isCompleted: boolean;
  } | null;
  canAccess: boolean;
}

export const lessonService = {
  async getByCourse(courseId: string): Promise<ApiResponse<LessonItem[]>> {
    const { data } = await apiClient.get<ApiResponse<LessonItem[]>>(
      `/courses/${courseId}/lessons`,
    );
    return data;
  },

  async create(
    courseId: string,
    payload: {
      title: string;
      contentType?: "VIDEO" | "ARTICLE";
      videoUrl?: string | null;
      articleContent?: string | null;
      durationMinutes?: number;
      isPreview?: boolean;
      isPublished?: boolean;
      orderIndex?: number;
    },
  ): Promise<ApiResponse<LessonItem>> {
    const { data } = await apiClient.post<ApiResponse<LessonItem>>(
      `/courses/${courseId}/lessons`,
      payload,
    );
    return data;
  },

  async update(
    lessonId: string,
    payload: Partial<{
      title: string;
      contentType: "VIDEO" | "ARTICLE";
      videoUrl: string | null;
      articleContent: string | null;
      durationMinutes: number;
      isPreview: boolean;
      isPublished: boolean;
      orderIndex: number;
    }>,
  ): Promise<ApiResponse<LessonItem>> {
    const { data } = await apiClient.patch<ApiResponse<LessonItem>>(
      `/lessons/${lessonId}`,
      payload,
    );
    return data;
  },

  async delete(lessonId: string): Promise<ApiResponse<LessonItem>> {
    const { data } = await apiClient.delete<ApiResponse<LessonItem>>(
      `/lessons/${lessonId}`,
    );
    return data;
  },

  async getPlayback(lessonId: string): Promise<ApiResponse<LessonPlayback>> {
    const { data } = await apiClient.get<ApiResponse<LessonPlayback>>(
      `/lessons/${lessonId}/playback`,
    );
    return data;
  },
};
