"use client";

import { useAuthStore } from "@/store/useAuthStore";

/**
 * Hook for accessing auth state and actions
 */
export function useAuth() {
  const {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    refresh,
    verifyEmail,
    resendVerification,
  } = useAuthStore();

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    refresh,
    verifyEmail,
    resendVerification,
    isStudent: user?.role === "STUDENT",
    isInstructor: user?.role === "INSTRUCTOR",
    isAdmin: user?.role === "ADMIN",
  };
}
