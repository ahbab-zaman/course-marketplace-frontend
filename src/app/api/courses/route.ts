import { NextResponse } from "next/server";

// GET /api/courses — List all courses
export async function GET() {
  // TODO: Fetch courses from database with pagination/filters
  return NextResponse.json({
    data: [],
    message: "Courses endpoint — connect database to activate",
    success: true,
    pagination: { page: 1, limit: 12, total: 0, totalPages: 0 },
  });
}

// POST /api/courses — Create a course (instructor only)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Validate auth + instructor role
    // TODO: Validate body with Zod schema
    // TODO: Save to database

    return NextResponse.json(
      {
        message: "Create course endpoint — connect database to activate",
        success: false,
        received: body,
      },
      { status: 501 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
