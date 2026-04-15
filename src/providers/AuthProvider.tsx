"use client";

import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import apiClient from "@/lib/api-client";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { accessToken, setUser, setLoading, logout } = useAuthStore();

  useEffect(() => {
    // Validate token on mount and get user
    const validateAuth = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await apiClient.get("/auth/me");
        setUser(data.data.user);
        setLoading(false);
      } catch {
        logout();
      }
    };

    validateAuth();
  }, [accessToken, setUser, setLoading, logout]);

  return <>{children}</>;
}
