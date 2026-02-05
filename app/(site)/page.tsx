import Hero from "@/components/Hero";
import BookFeature from "@/components/BookFeature";
import WritingHighlights from "@/components/WritingHighlights";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import { getAllBooks } from "@/lib/content/books";
import BookCard from "@/components/BookCard";

export default async function HomePage() {
  const writing = await getAllWriting();
  const books = getAllBooks();
  const [book] = books;

  return (
    <div className="bg-white">
      <Hero />
      {book && <BookFeature book={book} />}
      {books.length > 1 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Books</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {books.map((b) => (
                <BookCard key={b.slug} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
      <WritingHighlights posts={writing} />
      <NewsletterSection />
    </div>
  );
}
