import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Local development: use ?site=luagro query param
  if (hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1")) {
    const site = url.searchParams.get("site");
    if (site === "luagro") {
      url.pathname = `/(luagro)${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    url.pathname = `/(luvimes)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Production: hostname-based routing
  if (hostname.startsWith("luagro.")) {
    url.pathname = `/(luagro)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default: luvimes.com
  url.pathname = `/(luvimes)${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\..*).*)"],
};
