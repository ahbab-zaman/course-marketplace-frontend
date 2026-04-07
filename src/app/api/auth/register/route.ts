import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required", success: false },
        { status: 400 }
      );
    }

    // TODO: Implement actual registration logic with database
    // 1. Check if user already exists
    // 2. Hash password with bcrypt
    // 3. Create user in database
    // 4. Generate JWT token
    // 5. Return user + token

    return NextResponse.json(
      {
        message: "Register endpoint — connect database to activate",
        success: false,
        receivedRole: role || "user",
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
