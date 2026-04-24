import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export const paymentService = {
  async createCheckout(courseId: string): Promise<ApiResponse<{ paymentId: string; checkoutSessionId: string; checkoutUrl: string }>> {
    const { data } = await apiClient.post<ApiResponse<{ paymentId: string; checkoutSessionId: string; checkoutUrl: string }>>(
      "/payments/checkout",
      { courseId }
    );
    return data;
  },

  async verifyPayment(checkoutSessionId: string): Promise<ApiResponse<{ paymentId: string; status: string }>> {
    const { data } = await apiClient.post<ApiResponse<{ paymentId: string; status: string }>>(
      "/payments/verify",
      { checkoutSessionId }
    );
    return data;
  },
};
