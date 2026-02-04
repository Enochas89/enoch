export const metadata = {
  title: "Contact",
  description: "Contact and speaking requests for E.A. Schmaltz.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-24 md:pt-48">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif text-slate-900 mb-8">Contact</h1>
          <p className="text-slate-600 mb-12">
            For media inquiries or rights requests, please use the form below.
          </p>
          <form className="space-y-6 text-left">
            <input
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-500"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-500"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:border-teal-500 min-h-[150px]"
              placeholder="Message"
              required
            ></textarea>
            <button className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-teal-700 transition-all">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
