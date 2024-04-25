import { NextRequest, NextResponse } from "next/server";

import {
  AUTHORIZED_ROUTES_PATHS,
  UNAUTHORIZED_ROUTES_PATHS,
} from "@/constants/paths";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token && AUTHORIZED_ROUTES_PATHS.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);

    return NextResponse.redirect(absoluteURL.toString());
  }

  if (!!token && UNAUTHORIZED_ROUTES_PATHS.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/", request.nextUrl.origin);

    return NextResponse.redirect(absoluteURL.toString());
  }

  const headers = new Headers(request.headers);
  headers.set("token", token || "");

  return NextResponse.next({ request: { headers } });
}
