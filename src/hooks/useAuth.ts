"use client";

import { useAuthStore } from "@/store/useAuthStore";

/**
 * Hook for accessing auth state and actions
 */
export function useAuth() {
  const {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  } = useAuthStore();

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    isUser: user?.role === "user",
    isInstructor: user?.role === "instructor",
    isAdmin: user?.role === "admin",
  };
}
