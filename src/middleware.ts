import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt"; // Import getToken

// Define protected paths
const protectedPaths = ["/dashboard", "/rooms"];

export async function middleware(request: NextRequest) {
  try {
    // Retrieve the token directly from the request
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    console.log("Token in middleware:", token); // Log the token for debugging

    // Check if the requested path is protected
    const isProtectedPath = protectedPaths.some((path) =>
      request.nextUrl.pathname.startsWith(path),
    );

    // If the path is protected and the user is not authenticated
    if (isProtectedPath && !token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check if user is trying to access the dashboard
    if (
      request.nextUrl.pathname.startsWith("/dashboard") &&
      token?.role !== "Admin" // Use token to check role
    ) {
      // Redirect to a forbidden page or login
      return NextResponse.redirect(new URL("/login", request.url));
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
  matcher: ["/dashboard/:path*", "/rooms/:path*"],
};
