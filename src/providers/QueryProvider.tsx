"use client";

import { type ReactNode } from "react";

interface QueryProviderProps {
  children: ReactNode;
}

/**
 * Query Provider — placeholder for React Query / SWR integration
 * Uncomment and configure when adding server state management
 */
export function QueryProvider({ children }: QueryProviderProps) {
  // const [queryClient] = useState(() => new QueryClient());
  // return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  return <>{children}</>;
}
