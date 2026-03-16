import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-[18pt] md:text-[18pt] font-serif text-slate-900 leading-snug mb-4">
            <span className="text-[26pt] font-bold">Enoch Schmaltz</span> is a Senior Project Manager and Developer focused on delivery systems, execution visibility, and practical technology leadership.
          </h1>
          <p className="text-base md:text-lg text-slate-700 mb-6">
            PMP Certified with 14+ Years Experience, Enoch Schmaltz has delivered outcomes as a Senior Estimator and SaaS Founder across construction and software initiatives.
          </p>
          <p className="text-xl md:text-2xl text-[#1a1a1a] font-sans leading-relaxed mb-10 border-l-2 border-[#c5a059] pl-6">
            Investigating societal control mechanisms and the psychological governance that defines modern power structures.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/books"
              className="bg-teal-600 text-white px-8 py-4 rounded-sm font-sans font-bold hover:bg-teal-700 transition-all flex items-center group shadow-sm"
            >
              Buy the Book
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#substack-feed"
              className="border border-slate-200 text-slate-900 px-8 py-4 rounded-sm font-sans font-bold hover:bg-slate-50 transition-all"
              scroll={false}
            >
              Read Latest Writing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
