import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export const paymentService = {
  async createCheckout(courseId: string): Promise<ApiResponse<{ url: string }>> {
    const { data } = await apiClient.post<ApiResponse<{ url: string }>>(
      "/payments/checkout",
      { courseId }
    );
    return data;
  },

  async verifyPayment(sessionId: string): Promise<ApiResponse<null>> {
    const { data } = await apiClient.post<ApiResponse<null>>(
      "/payments/verify",
      { sessionId }
    );
    return data;
  },
};
