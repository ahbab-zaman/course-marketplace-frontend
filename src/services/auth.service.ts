import apiClient from "@/lib/api-client";
import type { AuthResponse, LoginCredentials, RegisterCredentials } from "@/types";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    return data;
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      "/auth/register",
      credentials
    );
    return data;
  },

  async getMe(): Promise<AuthResponse> {
    const { data } = await apiClient.get<AuthResponse>("/auth/me");
    return data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
