"use client";

import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { token, setLoading, logout } = useAuthStore();

  useEffect(() => {
    // Validate token on mount
    const validateAuth = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Token exists in store — the API interceptor will attach it
        // You can add a /api/auth/me call here to validate
        setLoading(false);
      } catch {
        logout();
      }
    };

    validateAuth();
  }, [token, setLoading, logout]);

  return <>{children}</>;
}
