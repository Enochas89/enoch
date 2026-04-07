import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.enochschmaltz.com";
const MANAGED_HOSTS = new Set(["enochschmaltz.com", CANONICAL_HOST]);

const LEGACY_REDIRECTS: Record<string, string> = {
  "/who-is-enoch-schmaltz": "/enoch-schmaltz",
  "/enoch-schmaltz-profile": "/enoch-schmaltz",
  "/enoch-schmaltz-biography": "/enoch-schmaltz",
  "/enoch-schmaltz-facts": "/enoch-schmaltz",
  "/enoch-schmaltz-author": "/about",
  "/enoch-schmaltz-writing": "/writing",
  "/enoch-schmaltz-books-and-research": "/books",
  "/enoch-schmaltz-projects": "/projects",
  "/enoch-schmaltz-software-projects": "/software",
  "/enoch-schmaltz-developer": "/software",
  "/enoch-schmaltz-links": "/enoch-schmaltz-online",
};

function stripTrailingSlash(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

function getHost(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    request.nextUrl.host
  );
}

function getProtocol(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-proto") ||
    request.nextUrl.protocol.replace(":", "")
  );
}

export function proxy(request: NextRequest) {
  const host = getHost(request);
  const protocol = getProtocol(request);
  const isManagedHost = MANAGED_HOSTS.has(host);

  if (!isManagedHost) {
    return NextResponse.next();
  }

  const originalPath = request.nextUrl.pathname;
  const normalizedPath = stripTrailingSlash(originalPath);
  const canonicalPath = LEGACY_REDIRECTS[normalizedPath] || normalizedPath;

  const needsHostRedirect = host !== CANONICAL_HOST;
  const needsHttpsRedirect = protocol !== "https";
  const needsPathRedirect = canonicalPath !== originalPath;

  if (!needsHostRedirect && !needsHttpsRedirect && !needsPathRedirect) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https";
  destination.host = CANONICAL_HOST;
  destination.pathname = canonicalPath;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
