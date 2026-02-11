import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import { getAllBooks } from "@/lib/content/books";
import SubstackFeed from "@/components/SubstackFeed";

export default async function HomePage() {
  const writing = await getAllWriting();
  const feed = writing.slice(0, 12);
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
      <SubstackFeed posts={feed} />
      <NewsletterSection />
    </div>
  );
}
