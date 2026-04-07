import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-do-not-use-in-production"
);

// Routes that require authentication
const protectedPaths = ["/user", "/instructor", "/admin"];

// Role-based access control
const roleRoutes: Record<string, string[]> = {
  user: ["/user"],
  instructor: ["/instructor", "/user"],
  admin: ["/admin", "/instructor", "/user"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route is protected
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // Get token from cookie or Authorization header
  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    const loginUrl = new URL("/auth", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userRole = payload.role as string;

    // Check role-based access
    const allowedPaths = roleRoutes[userRole] || [];
    const hasAccess = allowedPaths.some((path) => pathname.startsWith(path));

    if (!hasAccess) {
      // Redirect to their own dashboard
      const dashboardUrl = new URL(`/${userRole}`, request.url);
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  } catch {
    // Invalid token — redirect to login
    const loginUrl = new URL("/auth", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/user/:path*", "/instructor/:path*", "/admin/:path*"],
};
