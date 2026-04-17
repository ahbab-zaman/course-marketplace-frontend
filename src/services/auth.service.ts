import axios from "axios";
import apiClient from "@/lib/api-client";
import type { ApiResponse, AuthResponse, LoginCredentials, RegisterCredentials, User } from "@/types";

const AUTH_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const authApiClient = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

interface BetterAuthSessionResponse {
  user?: {
    id: string;
    email: string;
    name: string;
    role?: string;
    emailVerified?: boolean;
    image?: string | null;
  };
  session?: {
    userId: string;
  };
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await authApiClient.post("/api/auth/sign-in/email", credentials);

    const { data } = await apiClient.get<ApiResponse<User>>("/users/me");
    return { user: data.data };
  },

  async register(credentials: RegisterCredentials): Promise<unknown> {
    const { data } = await apiClient.post<ApiResponse<unknown>>(
      "/auth/register",
      credentials
    );
    return data.data;
  },

  async getSession(): Promise<BetterAuthSessionResponse | null> {
    try {
      const { data } = await authApiClient.get<BetterAuthSessionResponse | null>(
        "/api/auth/get-session"
      );
      return data;
    } catch {
      return null;
    }
  },

  async getMe(): Promise<{ user: User }> {
    const { data } = await apiClient.get<ApiResponse<User>>("/users/me");
    return { user: data.data };
  },

  async logout(): Promise<void> {
    await authApiClient.post("/api/auth/sign-out");
  },

  startGoogleSignIn(): void {
    if (typeof window === "undefined") {
      return;
    }

    window.location.assign(`${AUTH_BASE_URL}/api/v1/auth/google/initiate`);
  },

  async verifyEmail(payload: { email: string; otp: string }): Promise<unknown> {
    const { data } = await apiClient.post<ApiResponse<unknown>>(
      "/auth/verify-email",
      payload
    );
    return data.data;
  },

  async resendVerification(payload: { email: string }): Promise<unknown> {
    const { data } = await apiClient.post<ApiResponse<unknown>>(
      "/auth/resend-verification",
      payload
    );
    return data.data;
  },
};
