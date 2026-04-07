import { NextResponse } from "next/server";

// GET /api/analytics — Dashboard analytics (admin/instructor)
export async function GET() {
  // TODO: Aggregate analytics from database
  return NextResponse.json({
    data: {
      totalUsers: 0,
      totalCourses: 0,
      totalRevenue: 0,
      totalEnrollments: 0,
      recentOrders: [],
      monthlyRevenue: [],
      topCourses: [],
    },
    message: "Analytics endpoint — connect database to activate",
    success: true,
  });
}
