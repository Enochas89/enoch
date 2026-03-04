import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enoch Schmaltz Online",
  description:
    "Verified online profiles for Enoch Schmaltz across LinkedIn, Medium, Substack, GitHub, and About.me.",
  alternates: {
    canonical: "https://enochschmaltz.com/enoch-schmaltz-links",
  },
};

export default function EnochSchmaltzLinksPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900">
            Enoch Schmaltz Online
          </h1>
          <p className="text-slate-700 leading-relaxed">
            Verified online profiles:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                LinkedIn
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
                href="https://enochschmaltz89.substack.com"
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
                href="https://about.me"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
              >
                About.me
              </a>
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Back to profile:{" "}
            <Link
              href="/enoch-schmaltz"
              className="text-teal-700 hover:text-teal-800 underline underline-offset-4"
            >
              /enoch-schmaltz
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
