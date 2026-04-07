import { NextResponse } from "next/server";

// GET /api/users — List all users (admin only)
export async function GET() {
  // TODO: Validate admin role from JWT
  // TODO: Fetch users from database with pagination
  return NextResponse.json({
    data: [],
    message: "Users endpoint — connect database to activate",
    success: true,
    pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
  });
}
