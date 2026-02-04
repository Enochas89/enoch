"use client";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Mail className="w-10 h-10 mx-auto mb-6 text-teal-400 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-serif mb-4">The Disclosure Dispatch</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Get monthly essays and technical briefings on the systems that shape our perception of reality.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow bg-slate-800 border border-slate-700 px-6 py-4 rounded-sm focus:outline-none focus:border-teal-500 transition-colors"
            required
          />
          <button className="bg-white text-slate-900 font-sans font-bold px-8 py-4 rounded-sm hover:bg-teal-500 hover:text-white transition-all">
            Subscribe
          </button>
        </form>
        <p className="text-slate-500 text-xs mt-6 uppercase tracking-widest">
          Privacy respected. No spam.
        </p>
      </div>
    </section>
  );
}
