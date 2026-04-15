"use client";

import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { authService } from "@/services/auth.service";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setUser, setLoading, logout } = useAuthStore();

  useEffect(() => {
    const validateAuth = async () => {
      setLoading(true);

      try {
        const session = await authService.getSession();

        if (!session?.user) {
          await logout();
          return;
        }

        const { user } = await authService.getMe();
        setUser(user);
      } catch {
        await logout();
      } finally {
        setLoading(false);
      }
    };

    validateAuth();
  }, [setUser, setLoading, logout]);

  return <>{children}</>;
}
