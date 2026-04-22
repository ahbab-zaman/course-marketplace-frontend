import apiClient from "@/lib/api-client";
import type { User, ApiResponse, Enrollment } from "@/types";

export const userService = {
  async getMe(): Promise<ApiResponse<User>> {
    const { data } = await apiClient.get<ApiResponse<User>>("/users/me");
    return data;
  },

  async updateMe(
    userData: Partial<Pick<User, "name" | "avatar" | "phone">>
  ): Promise<ApiResponse<User>> {
    const { data } = await apiClient.patch<ApiResponse<User>>(
      "/users/me",
      userData
    );
    return data;
  },

  async getMyLearning(): Promise<ApiResponse<{
    courses: Enrollment[];
    totals: {
      totalEnrollments: number;
      activeEnrollments: number;
      completedCourses: number;
    };
  }>> {
    const { data } = await apiClient.get<ApiResponse<{
      courses: Enrollment[];
      totals: {
        totalEnrollments: number;
        activeEnrollments: number;
        completedCourses: number;
      };
    }>>(
      "/users/me/learning"
    );
    return data;
  },
};
