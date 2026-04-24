import apiClient from "@/lib/api-client";
import type { ApiResponse } from "@/types";

export const adminService = {
  async getUsers() {
    const { data } = await apiClient.get<ApiResponse<Array<{ id: string; name: string; email: string; role: string; isBlocked: boolean }>>>(
      "/admin/users",
    );
    return data;
  },
  async getCourses() {
    const { data } = await apiClient.get<ApiResponse<Array<{ id: string; title: string; status: string; enrollmentCount: number; instructor: { name: string } }>>>(
      "/admin/courses",
    );
    return data;
  },
  async getPayments() {
    const { data } = await apiClient.get<ApiResponse<Array<{ id: string; amount: number; currency: string; status: string; user: { name: string }; course: { title: string } }>>>(
      "/admin/payments",
    );
    return data;
  },
  async getReviews() {
    const { data } = await apiClient.get<ApiResponse<Array<{ id: string; rating: number; comment: string | null; user: { name: string }; course: { title: string } }>>>(
      "/admin/reviews",
    );
    return data;
  },
  async getAnalytics() {
    const { data } = await apiClient.get<ApiResponse<{ totalUsers: number; totalCourses: number; totalEnrollments: number; grossRevenue: number }>>(
      "/admin/analytics",
    );
    return data;
  },
};
