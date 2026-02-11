import Image from "next/image";
import { Calendar, Rss, User, ArrowRight } from "lucide-react";
import { WritingMeta } from "@/lib/content/writing";
import { formatDate } from "@/lib/utils";

type Props = {
  posts: WritingMeta[];
};

export default function SubstackFeed({ posts }: Props) {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <header className="space-y-3">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <Rss className="h-5 w-5" />
            </span>
            Latest from Puppet Skies
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
                Substack Dispatches
              </h2>
              <p className="text-slate-600">
                Essays and commentary by E. A. Schmaltz. Updated frequently.
              </p>
            </div>
            <a
              href="https://enochschmaltz89.substack.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
              target="_blank"
              rel="noreferrer"
            >
              Visit Substack <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 px-6 py-8">
            <div className="w-full md:w-auto">
              <Image
                src="/puppetskieslogo.webp"
                alt="Puppet Skies banner"
                width={480}
                height={150}
                className="h-28 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold text-slate-900">
                Follow the full feed
              </h3>
              <p className="text-slate-600">
                Subscribe on Substack to get new dispatches delivered.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ post }: { post: WritingMeta }) {
  const href = post.externalUrl ?? `/writing/${post.slug}`;

  return (
    <article className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-500">
        <span className="rounded-full bg-teal-50 px-3 py-1 font-bold text-teal-700">
          {post.type}
        </span>
        <span className="text-slate-300">•</span>
        <span className="inline-flex items-center gap-1 font-semibold">
          <Calendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 leading-tight group-hover:text-teal-700">
        <a href={href} target={post.externalUrl ? "_blank" : undefined} rel="noreferrer">
          {post.title}
        </a>
      </h3>

      <p className="text-slate-600 leading-relaxed line-clamp-3">{post.summary}</p>

      <div className="mt-auto flex items-center justify-between text-sm font-semibold text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <User className="h-4 w-4" />
          </span>
          E. A. Schmaltz
        </span>
        <span className="inline-flex items-center gap-1 text-teal-700 group-hover:gap-2 transition-all">
          Read <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
