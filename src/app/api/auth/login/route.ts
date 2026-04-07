import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required", success: false },
        { status: 400 }
      );
    }

    // TODO: Implement actual login logic with database
    // 1. Find user by email
    // 2. Compare password with bcrypt
    // 3. Generate JWT token
    // 4. Return user + token

    return NextResponse.json(
      {
        message: "Login endpoint — connect database to activate",
        success: false,
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
