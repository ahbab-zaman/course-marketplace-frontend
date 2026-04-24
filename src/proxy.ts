import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(_request: NextRequest) {
  // Do not hard-redirect from middleware based on cookie presence.
  // Session hydration and role checks are handled client-side in dashboard layout.
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/instructor/:path*", "/admin/:path*"],
};
