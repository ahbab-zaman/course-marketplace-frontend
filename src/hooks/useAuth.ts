"use client";

import { useAuthStore } from "@/store/useAuthStore";

/**
 * Hook for accessing auth state and actions
 */
export function useAuth() {
  const {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    verifyEmail,
    resendVerification,
  } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    verifyEmail,
    resendVerification,
    isStudent: user?.role === "STUDENT",
    isInstructor: user?.role === "INSTRUCTOR",
    isAdmin: user?.role === "ADMIN",
  };
}
