import Link from "next/link";
import { ReactNode } from "react";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-[#1a1a1a] text-[#fcfcfc]">
      <div className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
              Enoch Schmaltz
            </p>
            <h3 className="text-2xl font-serif font-semibold">
              Essays and books on sensing, perception, and public trust.
            </h3>
            <p className="text-[#d9d9d9] leading-relaxed max-w-xl">
              Exploring how invisible technologies shape what we know and believe
              and what that means for policy, security, and culture.
            </p>
            <div className="flex gap-4 text-[#d9d9d9]">
              <SocialLink href="https://x.com" label="X">
                <XLogoIcon className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/enochschmaltz" label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a059]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#e4e4e4]">
              <li><Link href="/" className="hover:text-[#c5a059] transition-colors">Home</Link></li>
              <li><Link href="/writing" className="hover:text-[#c5a059] transition-colors">Writing</Link></li>
              <li><Link href="/projects" className="hover:text-[#c5a059] transition-colors">Projects</Link></li>
              <li><Link href="/software" className="hover:text-[#c5a059] transition-colors">Software</Link></li>
              <li><Link href="/about" className="hover:text-[#c5a059] transition-colors">About</Link></li>
              <li><Link href="/enoch-schmaltz" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz</Link></li>
              <li><Link href="/books" className="hover:text-[#c5a059] transition-colors">Books</Link></li>
              <li><Link href="/press" className="hover:text-[#c5a059] transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-[#c5a059] transition-colors">Contact</Link></li>
              <li><Link href="/books" className="hover:text-[#c5a059] transition-colors">Books by Enoch Schmaltz</Link></li>
              <li><Link href="/writing" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz Writer</Link></li>
              <li><Link href="/about" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz Author</Link></li>
              <li><Link href="/who-is-enoch-schmaltz" className="hover:text-[#c5a059] transition-colors">Who Is Enoch Schmaltz</Link></li>
              <li><Link href="/enoch-schmaltz-profile" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz Profile</Link></li>
              <li><Link href="/enoch-schmaltz-biography" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz Biography</Link></li>
              <li><Link href="/enoch-schmaltz-links" className="hover:text-[#c5a059] transition-colors">Enoch Schmaltz Links</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a059]">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-[#e4e4e4]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059]" />
                <a
                  className="hover:text-[#c5a059] transition-colors font-semibold"
                  href="mailto:hello@enochschmaltz.com"
                >
                  hello@enochschmaltz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3b3b3b] pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-[#bcbcbc]">
          <span>(c) {year} Enoch Schmaltz</span>
          <span className="text-[10px]">Published via Vercel</span>
        </div>
      </div>
    </footer>
  );
}

function XLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2h3.308l-7.227 8.26L23 22h-6.74l-5.28-6.91L4.94 22H1.63l7.73-8.84L1 2h6.91l4.77 6.31L18.244 2Zm-1.16 18h1.833L6.912 3.9H4.947L17.084 20Z" />
    </svg>
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
      className="rounded-full border border-[#4a4a4a] p-2 hover:border-[#c5a059] hover:text-[#c5a059] transition-colors"
    >
      {children}
    </a>
  );
}
