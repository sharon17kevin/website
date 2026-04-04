import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip if already visiting /luvimes/* paths directly
  if (pathname.startsWith("/luvimes")) {
    return NextResponse.next();
  }

  // Local development: default to Luvimes, ?site=luagro for Luagro
  if (hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1")) {
    const site = url.searchParams.get("site");
    if (site === "luagro") {
      return NextResponse.next();
    }
    // Rewrite to Luvimes pages
    url.pathname = `/luvimes${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Production: luagro subdomain serves root pages directly
  if (hostname.startsWith("luagro.")) {
    return NextResponse.next();
  }

  // Default (luvimes.com): rewrite to /luvimes/* pages
  url.pathname = `/luvimes${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\..*).*)"],
};
