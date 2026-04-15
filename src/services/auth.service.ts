import apiClient from "@/lib/api-client";
import type { ApiResponse, AuthResponse, LoginCredentials, RegisterCredentials, User } from "@/types";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(
      "/auth/login",
      credentials
    );
    return data.data;
  },

  async register(credentials: RegisterCredentials): Promise<unknown> {
    const { data } = await apiClient.post<ApiResponse<unknown>>(
      "/auth/register",
      credentials
    );
    return data.data;
  },

  async getMe(): Promise<{ user: User }> {
    const { data } = await apiClient.get<ApiResponse<{ user: User }>>("/auth/me");
    return data.data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
