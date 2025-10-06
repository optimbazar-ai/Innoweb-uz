import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "admin-auth";
const ADMIN_PATH_PREFIX = "/admin";
const PUBLIC_ADMIN_ROUTES = new Set([
  "/admin/login",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(ADMIN_PATH_PREFIX)) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN_ROUTES.has(pathname)) {
    return NextResponse.next();
  }

  const isAuthenticated = request.cookies.get(COOKIE_NAME)?.value === "true";

  if (!isAuthenticated) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("status", "login_required");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
