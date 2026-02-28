import Image from "next/image";
import { CheckCircle2, Download, MonitorSmartphone, Sparkles, Workflow } from "lucide-react";
import type { ReactNode } from "react";

export const metadata = {
  title: "Software",
  description: "NovelCraft Pro storyboarding and writing software for Windows.",
};

const screenshots = [
  {
    src: "/images/software/novelcraft-overview.png",
    alt: "NovelCraft Pro overview with timeline and writing canvas",
    title: "Workspace Overview",
    detail: "Timeline, writing canvas, and tool nest in one production layout.",
  },
  {
    src: "/images/software/novelcraft-scene.png",
    alt: "Scene tile controls and storyboard workflow",
    title: "Scene Storyboard",
    detail: "Label, beat, and scene controls directly in the timeline.",
  },
  {
    src: "/images/software/novelcraft-scene-two.png",
    alt: "Scene notes and timeline interaction",
    title: "Scene Notes",
    detail: "Scene cards keep notes and context visible while writing.",
  },
  {
    src: "/images/software/novelcraft-inspector.png",
    alt: "Inspector and metadata panel in NovelCraft Pro",
    title: "Inspector Tools",
    detail: "Track story metadata, status, and structure per scene.",
  },
];

const features = [
  "Interactive scene timeline with collapsible storyboard cards",
  "Word-style editor with import, formatting, and pagination workflow",
  "DOCX import with app-format normalization for consistent output",
  "Movable and collapsible toolbars in a docked tool nest",
  "Scene metadata inspector, outliner, and review tools",
];

export default function SoftwarePage() {
  return (
    <div className="bg-white">
      <section className="pt-28 pb-14 md:pt-40">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-600">Software</p>
              <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                NovelCraft Pro
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                A writing suite built for long-form story development, scene design, and structured drafting.
                Use the timeline as a visual storyboard while drafting on production-style pages.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/downloads/NovelCraft-Pro-Setup-1.0.1.exe"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download for Windows
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] hover:border-slate-500 transition-colors"
                >
                  Contact for Support
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 space-y-4">
              <h2 className="text-xl font-serif text-slate-900 flex items-center gap-2">
                <MonitorSmartphone className="w-5 h-5 text-teal-600" />
                Release Details
              </h2>
              <dl className="space-y-3 text-sm text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold">Version</dt>
                  <dd>1.0.1</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold">Platform</dt>
                  <dd>Windows x64</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold">Format</dt>
                  <dd>.exe installer</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold">Creator</dt>
                  <dd>CerebFastThinkTank</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard icon={<Workflow className="w-5 h-5 text-teal-600" />} title="Storyboard Timeline">
              Build scenes left-to-right, label beats, and collapse cards for fast story navigation.
            </FeatureCard>
            <FeatureCard icon={<Sparkles className="w-5 h-5 text-teal-600" />} title="Drafting + Review">
              Keep writing, scene metadata, and revision tools in one continuous workflow.
            </FeatureCard>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 space-y-4">
            <h2 className="text-2xl font-serif text-slate-900">What You Can Do</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif text-slate-900">Screenshots</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {screenshots.map((shot) => (
              <article key={shot.src} className="border border-slate-200 bg-white overflow-hidden">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">{shot.title}</h3>
                  <p className="text-sm text-slate-600">{shot.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-slate-50 border border-slate-200 p-6 space-y-2">
      <h2 className="text-xl font-serif text-slate-900 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </article>
  );
}
