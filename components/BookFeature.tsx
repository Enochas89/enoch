import Image from "next/image";
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
            <div className="relative w-64 h-96 md:w-80 md:h-[480px] shadow-2xl border border-slate-200 overflow-hidden bg-slate-100">
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 16rem, 20rem"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
