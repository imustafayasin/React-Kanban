import { NextResponse } from "next/server";

export function middleware(req) {
  let userIdentityCookie = req.cookies.get("Identity");
  if (!userIdentityCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/((?!api|_next|static|login|register|public|favicon.ico).*)",
};
