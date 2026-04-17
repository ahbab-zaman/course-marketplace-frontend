import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PREFIXES = ["/user", "/instructor", "/admin"] as const;
const BETTER_AUTH_COOKIE_NAMES = [
  "better-auth.session_token",
  "__Secure-better-auth.session_token",
] as const;

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

function canReadBackendSessionCookie(request: NextRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    return false;
  }

  try {
    const backendUrl = new URL(apiUrl);
    const frontendHost = request.nextUrl.hostname;
    const backendHost = backendUrl.hostname;

    return (
      frontendHost === backendHost ||
      (isLocalHost(frontendHost) && isLocalHost(backendHost))
    );
  } catch {
    return false;
  }
}

function hasBackendSessionCookie(request: NextRequest) {
  return BETTER_AUTH_COOKIE_NAMES.some((cookieName) =>
    Boolean(request.cookies.get(cookieName)?.value)
  );
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some((path) =>
    pathname.startsWith(path)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // For same-host environments we can do a lightweight session presence check.
  // Cross-origin deployments rely on the dashboard layout guard after the
  // frontend bootstraps auth from the backend session.
  if (canReadBackendSessionCookie(request) && !hasBackendSessionCookie(request)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/instructor/:path*", "/admin/:path*"],
};
