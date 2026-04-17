"use client";

import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { authService } from "@/services/auth.service";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setUser, setLoading, clearAuth } = useAuthStore();

  useEffect(() => {
    const validateAuth = async () => {
      setLoading(true);

      try {
        const session = await authService.getSession();

        if (!session?.user) {
          clearAuth();
          return;
        }

        const { user } = await authService.getMe();
        setUser(user);
      } catch {
        clearAuth();
      } finally {
        setLoading(false);
      }
    };

    validateAuth();
  }, [setUser, setLoading, clearAuth]);

  return <>{children}</>;
}
