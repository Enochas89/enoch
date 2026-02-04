import { Globe, Mic } from "lucide-react";
import MediaFilter from "@/components/MediaFilter";
import { getAllMedia } from "@/lib/content/media";

export const metadata = {
  title: "Media & Speaking",
  description: "Interviews, podcasts, and speaking with E.A. Schmaltz.",
};

export default function MediaPage() {
  const media = getAllMedia();

  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 md:pt-48">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif text-slate-900 mb-6">Media & Speaking</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Conversations about sensing, power, and culture. Filter for podcasts, interviews, talks, and article mentions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8">
              <h2 className="text-2xl font-serif mb-6 flex items-center">
                <Mic className="mr-3 w-5 h-5 text-teal-600" /> Podcast Guest Info
              </h2>
              <p className="text-slate-600 mb-6">
                Enoch is available for deep-dives into sensing tech and AI ethics.
              </p>
              <a
                href="/contact"
                className="inline-block bg-slate-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-widest"
              >
                Inquire
              </a>
            </div>
            <div className="bg-slate-50 p-8">
              <h2 className="text-2xl font-serif mb-6 flex items-center">
                <Globe className="mr-3 w-5 h-5 text-teal-600" /> Speaking Topics
              </h2>
              <ul className="text-slate-600 space-y-3">
                <li>• The Architecture of Public Trust</li>
                <li>• Policy Frameworks for Strategic Tech</li>
                <li>• The Erosion of Visual Proof</li>
              </ul>
            </div>
          </div>

          <MediaFilter items={media} />
        </div>
      </section>
    </div>
  );
}
