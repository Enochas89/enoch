import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
              E.A. Schmaltz
            </h3>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
              Exploring the space between technology and public understanding.
              Nonfiction writing on sensing, perception, and disclosure.
            </p>
            <div className="flex space-x-4 text-slate-400">
              <a
                href="https://twitter.com"
                className="hover:text-slate-900 transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-slate-900 transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link></li>
            <li><Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link></li>
            <li><Link href="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Inquiries
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Media: <a className="hover:text-slate-900" href="mailto:press@easchmaltz.com">press@easchmaltz.com</a></li>
              <li>Speaking: <a className="hover:text-slate-900" href="mailto:bookings@easchmaltz.com">bookings@easchmaltz.com</a></li>
              <li><Link href="/contact" className="text-slate-900 font-medium underline underline-offset-4">Get in touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest">
          <p>© {year} E. S. Schmaltz. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 text-[10px]">Deployed via Vercel</p>
        </div>
      </div>
    </footer>
  );
}
