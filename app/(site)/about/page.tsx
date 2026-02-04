import NewsletterSection from "@/components/NewsletterSection";

export const metadata = {
  title: "About",
  description: "About Enoch (E.A.) Schmaltz",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-5xl font-serif text-slate-900 mb-8">
                Enoch Schmaltz
              </h1>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed">
                <p>
                  Enoch Schmaltz (writing as E.A. Schmaltz) is an author and analyst focused on technology, perception, and the systems that shape how the public encounters new capabilities.
                </p>
                <p>
                  His work investigates the widening gap between technical innovation and social understanding—specifically where advanced sensing, artificial intelligence, and national security meet public trust and policy.
                </p>
                <p>
                  His forthcoming book, <em>Puppet Skies</em>, explores how invisible sensing stacks redraw what we see, what we know, and what we allow.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-100 aspect-[4/5] flex items-center justify-center text-slate-300 border border-slate-200">
                <span className="font-serif italic text-lg">Author Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}
