import type { MetadataRoute } from "next";
import { discoverPublicAppRoutes } from "@/lib/routeDiscovery";

const SITE_URL = "https://enochschmaltz.com";

const REQUIRED_ROUTES = [
  "/",
  "/about",
  "/books",
  "/enoch-schmaltz",
  "/enoch-schmaltz-online",
  "/press",
  "/enoch-schmaltz-profile",
  "/who-is-enoch-schmaltz",
  "/enoch-schmaltz-writing",
  "/enoch-schmaltz-biography",
];
const PRIMARY_ROUTES = new Set(["/about", "/books", "/enoch-schmaltz"]);
const INTERNAL_PREFIXES = ["/api", "/_next", "/admin", "/drafts", "/private"];
const YEARLY_PREFIXES = ["/privacy", "/terms", "/legal"];
const PINNED_ORDER = ["/", "/enoch-schmaltz", "/about", "/books"];

function isInternalRoute(pathname: string) {
  return INTERNAL_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function getChangeFrequency(
  pathname: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (pathname === "/") {
    return "weekly";
  }

  if (
    YEARLY_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    )
  ) {
    return "yearly";
  }

  return "monthly";
}

function getPriority(pathname: string) {
  if (pathname === "/") {
    return 1.0;
  }

  if (PRIMARY_ROUTES.has(pathname)) {
    return 0.9;
  }

  return 0.6;
}

function sortRoutes(a: string, b: string) {
  const aPinnedIndex = PINNED_ORDER.indexOf(a);
  const bPinnedIndex = PINNED_ORDER.indexOf(b);

  if (aPinnedIndex !== -1 || bPinnedIndex !== -1) {
    if (aPinnedIndex === -1) {
      return 1;
    }

    if (bPinnedIndex === -1) {
      return -1;
    }

    return aPinnedIndex - bPinnedIndex;
  }

  return a.localeCompare(b);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routeSet = new Set(discoverPublicAppRoutes());

  for (const route of REQUIRED_ROUTES) {
    routeSet.add(route);
  }

  const now = new Date();

  return Array.from(routeSet)
    .filter((pathname) => !isInternalRoute(pathname))
    .map((pathname) => ({
      pathname,
      normalized: pathname === "/" ? "/" : pathname.replace(/\/$/, ""),
    }))
    .filter(
      ({ normalized }) =>
        normalized === "/" || (normalized.startsWith("/") && !normalized.includes("?")),
    )
    .map(({ normalized }) => normalized)
    .sort(sortRoutes)
    .map((pathname) => ({
      url: `${SITE_URL}${pathname}`,
      lastModified: now,
      changeFrequency: getChangeFrequency(pathname),
      priority: getPriority(pathname),
    }));
}
