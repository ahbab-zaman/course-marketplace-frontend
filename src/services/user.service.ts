import apiClient from "@/lib/api-client";
import type { User, ApiResponse } from "@/types";

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

  async getMyLearning(): Promise<ApiResponse<unknown>> {
    const { data } = await apiClient.get<ApiResponse<unknown>>(
      "/users/me/learning"
    );
    return data;
  },
};
