import Link from "next/link";
import { ReactNode } from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
              E. A. Schmaltz
            </p>
            <h3 className="text-2xl font-serif font-semibold">
              Essays and books on sensing, perception, and public trust.
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              Exploring how invisible technologies shape what we know and believe -- and what that means for policy, security, and culture.
            </p>
            <div className="flex gap-4 text-slate-300">
              <SocialLink href="https://twitter.com" label="Twitter">
                <Twitter className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com" label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><Link href="/" className="hover:text-teal-200 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-200 transition-colors">About</Link></li>
              <li><Link href="/books" className="hover:text-teal-200 transition-colors">Books</Link></li>
              <li><Link href="/press" className="hover:text-teal-200 transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-teal-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-300" />
                <a
                  className="hover:text-teal-200 transition-colors font-semibold"
                  href="mailto:contactus@enochschmaltz.com"
                >
                  contactus@enochschmaltz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
          <span>(c) {year} E. A. Schmaltz</span>
          <span className="text-[10px]">Published via Vercel</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-slate-700/70 p-2 hover:border-teal-300 hover:text-teal-200 transition-colors"
    >
      {children}
    </a>
  );
}
