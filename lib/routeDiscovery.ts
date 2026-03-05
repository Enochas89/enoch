import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");

const PAGE_FILES = new Set([
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
]);

const IGNORED_DIRS = new Set([
  "api",
  "_components",
  "components",
  "lib",
  "assets",
  "styles",
  "node_modules",
  ".next",
]);

const ROUTE_GROUP_PATTERN = /^\(.*\)$/;
const DYNAMIC_SEGMENT_PATTERN = /^\[.*\]$/;

function isRouteGroup(segment: string) {
  return ROUTE_GROUP_PATTERN.test(segment);
}

function isDynamicSegment(segment: string) {
  return DYNAMIC_SEGMENT_PATTERN.test(segment);
}

function normalizePath(pathname: string) {
  const compact = pathname.replace(/\/+/g, "/");

  if (compact === "/") {
    return "/";
  }

  return compact.replace(/\/$/, "");
}

function toPathname(segments: string[]) {
  if (segments.length === 0) {
    return "/";
  }

  return normalizePath(`/${segments.join("/")}`);
}

function shouldIgnoreDirectory(name: string) {
  if (name.startsWith(".")) {
    return true;
  }

  if (name.includes(".")) {
    return true;
  }

  return IGNORED_DIRS.has(name);
}

function scanDirectory(
  currentDir: string,
  routeSegments: string[],
  routes: Set<string>,
) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  const hasPageFile = entries.some(
    (entry) => entry.isFile() && PAGE_FILES.has(entry.name),
  );

  if (hasPageFile) {
    const urlSegments = routeSegments.filter((segment) => !isRouteGroup(segment));
    const containsDynamicSegment = urlSegments.some(isDynamicSegment);

    if (!containsDynamicSegment) {
      routes.add(toPathname(urlSegments));
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    if (shouldIgnoreDirectory(entry.name)) {
      continue;
    }

    scanDirectory(path.join(currentDir, entry.name), [...routeSegments, entry.name], routes);
  }
}

export function discoverPublicAppRoutes() {
  const routes = new Set<string>();

  if (!fs.existsSync(APP_DIR)) {
    routes.add("/");
    return ["/"];
  }

  scanDirectory(APP_DIR, [], routes);
  routes.add("/");

  return Array.from(routes).map(normalizePath);
}
