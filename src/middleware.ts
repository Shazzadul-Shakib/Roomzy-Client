import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

// Define protected paths
const protectedPaths = ["/rooms"];

export async function middleware(request: NextRequest) {
  try {
    const session = await auth();

    // Check if the requested path is protected
    const isProtectedPath = protectedPaths.some((path) =>
      request.nextUrl.pathname.startsWith(path),
    );

    // If the path is protected and the user is not authenticated
    if (isProtectedPath && !session?.user) {
      // Redirect to login with a callback URL to return after login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    // If user is authenticated or the path is not protected, continue
    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error in middleware:", error);
    // Redirect to login on error for security reasons
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Specify which paths this middleware applies to
export const config = {
  matcher: ["/rooms/:path*"],
};
