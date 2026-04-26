import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.enochschmaltz.com";
const MANAGED_HOSTS = new Set(["enochschmaltz.com", CANONICAL_HOST]);

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
  const needsHostRedirect = host !== CANONICAL_HOST;
  const needsHttpsRedirect = protocol !== "https";

  if (!needsHostRedirect && !needsHttpsRedirect) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https";
  destination.host = CANONICAL_HOST;
  destination.pathname = originalPath;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
