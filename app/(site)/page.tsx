import Hero from "@/components/Hero";
import BookFeature from "@/components/BookFeature";
import WritingHighlights from "@/components/WritingHighlights";
import NewsletterSection from "@/components/NewsletterSection";
import { getAllWriting } from "@/lib/content/writing";
import { getAllBooks } from "@/lib/content/books";

export default function HomePage() {
  const writing = getAllWriting();
  const [book] = getAllBooks();

  return (
    <div className="bg-white">
      <Hero />
      {book && <BookFeature book={book} />}
      <WritingHighlights posts={writing} />
      <NewsletterSection />
    </div>
  );
}
