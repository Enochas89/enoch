import Link from "next/link";
import { Book } from "@/lib/content/books";

export default function BookFeature({ book }: { book: Book }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="uppercase tracking-[0.2em] text-teal-600 font-bold text-sm mb-4">
              Latest Release
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              {book.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {book.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(book.retailers?.length ? book.retailers : book.formats).map(
                (retailer) => (
                  <Link
                    key={retailer.label}
                    href={retailer.url || "#"}
                    className="text-xs font-bold uppercase tracking-wider py-3 border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all text-slate-600"
                  >
                    {retailer.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-96 md:w-80 md:h-[480px] shadow-2xl border border-slate-200 overflow-hidden bg-slate-900 text-white flex items-center justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/15 blur-3xl rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 blur-3xl -ml-8 -mb-8"></div>
              <div className="text-center px-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] opacity-70">E.A. SCHMALTZ</p>
                <p className="text-2xl font-serif italic">{book.title.split(" ")[0]}</p>
                <p className="text-4xl font-serif font-bold tracking-tighter">
                  {book.title.split(" ").slice(1).join(" ") || book.title}
                </p>
                {book.subtitle && (
                  <p className="text-sm text-slate-200/80">{book.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
