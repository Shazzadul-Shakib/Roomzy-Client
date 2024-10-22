import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected paths
const protectedPaths = ["/rooms", "/dashboard"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token");

  // Check if the requested path is protected
  if (
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    // Redirect to login page if the user is not authenticated
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If user is authenticated or the path is not protected, continue
  return NextResponse.next();
}

// Specify which paths this middleware applies to
export const config = {
  matcher: ["/rooms/:path*", "/dashboard/:path*"],
};
