import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import BookCard from "@/components/BookCard";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import { getAllBooks } from "@/lib/content/books";
import Image from "next/image";

export default async function HomePage() {
  const writing = await getAllWriting();
  const feed = writing.slice(0, 10);
  const books = getAllBooks();

  return (
    <div className="bg-white">
      <Hero />
      {books.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Books</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {books.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/Substack.webp"
                alt="Substack logo"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
              <h2 className="text-2xl font-semibold text-slate-900">Latest from Substack</h2>
            </div>
          </div>
          <div className="grid gap-4">
            {feed.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}
