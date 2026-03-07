import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Enoch Schmaltz \u2014 Official Profiles and Links",
  description:
    "Official online profiles and identity links for Enoch Schmaltz across Medium, Substack, GitHub, and About.me.",
  alternates: {
    canonical: `${SITE_URL}/enoch-schmaltz-online`,
  },
};

const onlinePageJsonLd = pageSchema({
  url: `${SITE_URL}/enoch-schmaltz-online`,
  name: "Enoch Schmaltz - Official Profiles and Links",
  description:
    "Official online profiles and identity links for Enoch Schmaltz across Medium, Substack, GitHub, and About.me.",
});

export default function EnochSchmaltzOnlinePage() {
  return (
    <div className="bg-white">
      <JsonLd data={onlinePageJsonLd} />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz - Official Profiles and Links
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            This page centralizes the official online profiles for Enoch
            Schmaltz and supports identity consistency across platforms.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a
                href="https://enochschmaltz.com"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                https://enochschmaltz.com
              </a>
            </li>
            <li>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Enochas89"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://about.me/enochschmaltz"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                About.me
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
