"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, UserRole } from "@/types";
import apiClient from "@/lib/api-client";

interface AuthStore {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role?: UserRole
  ) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) => set({ user, isAuthenticated: true }),

      setTokens: (accessToken, refreshToken) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        set({ accessToken, refreshToken });
      },

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const { data } = await apiClient.post("/auth/login", {
            email,
            password,
          });
          const { user, accessToken, refreshToken } = data;
          get().setTokens(accessToken, refreshToken);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (name, email, password, role = "STUDENT") => {
        set({ isLoading: true });
        try {
          await apiClient.post("/auth/register", {
            name,
            email,
            password,
            role,
          });
          // After register, user needs to verify email
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          await apiClient.post("/auth/logout");
        } catch (error) {
          // Ignore logout errors
        }
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      refresh: async () => {
        const { refreshToken } = get();
        if (!refreshToken) throw new Error("No refresh token");
        const { data } = await apiClient.post("/auth/refresh", {
          refreshToken,
        });
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
        get().setTokens(newAccessToken, newRefreshToken);
      },

      verifyEmail: async (email, otp) => {
        set({ isLoading: true });
        try {
          await apiClient.post("/auth/verify-email", {
            email,
            otp,
          });
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      resendVerification: async (email) => {
        set({ isLoading: true });
        try {
          await apiClient.post("/auth/resend-verification", {
            email,
          });
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
      version: 1,
      migrate: (persistedState: any, version: number) => {
        return persistedState as AuthStore;
      },
    }
  )
);
