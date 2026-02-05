import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";

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
                  Enoch Schmaltz writes about technology, perception, and public understanding. His work explores how advanced sensing, artificial intelligence, and national security shape trust, policy, and the public imagination.
                </p>
                <p>
                  Alongside his nonfiction, he writes science-fiction and fantasy that explore many of the same themes through story—blending mystery, speculative technology, and imaginative worlds to examine how people confront the unknown.
                </p>
                <p>
                  He is a husband and the father of three fantastic kids, and credits his wife as his constant source of support, perspective, and encouragement behind everything he creates.
                </p>
                <p>
                  His latest book, <em>Puppet Skies</em>, examines how invisible sensing systems reshape what we see, what we know, and what we believe.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-slate-200 shadow">
                <Image
                  src="/EnochSchmaltz.jpg"
                  alt="Enoch Schmaltz portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}
