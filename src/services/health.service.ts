import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export interface HealthStatus {
  status?: string;
  uptime?: number;
  timestamp?: string;
  [key: string]: unknown;
}

export const healthService = {
  async getStatus(): Promise<ApiResponse<HealthStatus>> {
    const { data } = await apiClient.get<ApiResponse<HealthStatus>>("/health");
    return data;
  },
};
