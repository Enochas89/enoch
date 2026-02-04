import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WritingMeta } from "@/lib/content/writing";

export default function WritingHighlights({ posts }: { posts: WritingMeta[] }) {
  const top = posts.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="uppercase tracking-[0.2em] text-teal-600 font-bold text-xs mb-4">
              Ideas & Insights
            </div>
            <h2 className="text-4xl font-serif text-slate-900">Latest Writing</h2>
          </div>
          <Link
            href="/writing"
            className="mt-6 md:mt-0 text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center hover:text-teal-700 transition-colors"
          >
            Read More Essays <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {top.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="bg-white p-8 border border-slate-200 hover:border-teal-500/30 transition-all flex flex-col"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-4">
                {article.type}
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex-grow">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
              <span className="text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center group">
                Read <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
