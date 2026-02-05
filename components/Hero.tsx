import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-[18pt] md:text-[18pt] font-serif text-slate-900 leading-snug mb-4">
            <span className="text-[26pt] font-bold">E. A. Schmaltz</span> writes about technology, perception, and public understanding. His work explores how advanced sensing, artificial intelligence, and national security shape trust, policy, and the public imagination.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-sans leading-relaxed mb-10 border-l-2 border-teal-600 pl-6">
            Nonfiction writing on sensing, perception, AI, and the mechanics of technological disclosure.
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
              href="/writing"
              className="border border-slate-200 text-slate-900 px-8 py-4 rounded-sm font-sans font-bold hover:bg-slate-50 transition-all"
            >
              Read Latest Writing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
