"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/software", label: "Software" },
  { href: "/about", label: "About" },
  { href: "/enoch-schmaltz", label: "Enoch" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (pathname === href || pathname.startsWith(`${href}/`)) {
      return true;
    }

    if (href === "/enoch-schmaltz" && pathname.startsWith("/enoch-schmaltz")) {
      return true;
    }

    return false;
  };

  const linkClass = (href: string) =>
    `text-xs uppercase tracking-[0.2em] font-bold border-b-2 pb-1 transition-colors ${
      isActivePath(href)
        ? "text-teal-700 border-teal-700"
        : "text-slate-500 border-transparent hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
          Enoch Schmaltz
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActivePath(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 pb-6">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-serif italic text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
