"use client";

import { create } from "zustand";
import type { User, UserRole } from "@/types";
import { authService } from "@/services/auth.service";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: User) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role?: UserRole
  ) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: true }),

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const { user } = await authService.login({ email, password });
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (name, email, password, role = "STUDENT") => {
    set({ isLoading: true });
    try {
      await authService.register({
        name,
        email,
        password,
        role,
      });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } catch (error) {
      // Ignore logout errors
    }
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  verifyEmail: async (email, otp) => {
    set({ isLoading: true });
    try {
      await authService.verifyEmail({ email, otp });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  resendVerification: async (email) => {
    set({ isLoading: true });
    try {
      await authService.resendVerification({ email });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  setLoading: (isLoading) => set({ isLoading }),
}));
