import apiClient from "@/lib/api-client";
import type { User, ApiResponse, PaginatedResponse } from "@/types";

export const userService = {
  async getAll(
    params?: Record<string, string | number>
  ): Promise<PaginatedResponse<User>> {
    const { data } = await apiClient.get<PaginatedResponse<User>>("/users", {
      params,
    });
    return data;
  },

  async getById(id: string): Promise<ApiResponse<User>> {
    const { data } = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return data;
  },

  async updateProfile(
    id: string,
    userData: Partial<User>
  ): Promise<ApiResponse<User>> {
    const { data } = await apiClient.put<ApiResponse<User>>(
      `/users/${id}`,
      userData
    );
    return data;
  },

  async deleteUser(id: string): Promise<ApiResponse<null>> {
    const { data } = await apiClient.delete<ApiResponse<null>>(`/users/${id}`);
    return data;
  },
};
