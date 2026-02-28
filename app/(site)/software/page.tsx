import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ListTree,
  MonitorSmartphone,
  PenSquare,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Software",
  description: "NovelCraft Pro storyboarding and writing software for Windows.",
};

const appCards = [
  {
    icon: <Workflow className="w-5 h-5 text-teal-300" />,
    title: "Storyboard Timeline",
    detail: "Build scenes left to right, collapse beats, and keep story structure visible.",
  },
  {
    icon: <PenSquare className="w-5 h-5 text-teal-300" />,
    title: "Drafting Workspace",
    detail: "Write on paged canvases with formatting controls and active scene context.",
  },
  {
    icon: <ListTree className="w-5 h-5 text-teal-300" />,
    title: "Outliner + Inspector",
    detail: "Track metadata, scene status, and narrative flow while drafting.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-300" />,
    title: "Production Stability",
    detail: "Autosave, project files, import/export workflow, and hardened runtime guards.",
  },
];

const visualWorkflows = [
  {
    src: "/images/software/novelcraft-overview.png",
    alt: "NovelCraft Pro overview with timeline and writing canvas",
    title: "Workspace Overview",
    detail: "Timeline, writing pages, and tool nest in one cohesive production view.",
  },
  {
    src: "/images/software/novelcraft-scene-two.png",
    alt: "Scene notes and timeline interaction",
    title: "Scene Card Workflow",
    detail: "Use cards to annotate scenes, capture notes, and organize story progression.",
  },
  {
    src: "/images/software/novelcraft-scene.png",
    alt: "Scene tile controls and storyboard workflow",
    title: "Scene Controls",
    detail: "Edit labels, beat type, and structure directly from the timeline tiles.",
  },
  {
    src: "/images/software/novelcraft-inspector.png",
    alt: "Inspector and metadata panel in NovelCraft Pro",
    title: "Inspector Tools",
    detail: "Keep metadata, review context, and project management inside the writing flow.",
  },
];

const featureList = [
  "Interactive scene timeline with collapsible storyboard cards",
  "DOCX import with app-format normalization for reliable styling",
  "Movable and collapsible toolbars with a dockable tool nest",
  "Scene metadata, outliner filtering, and review utilities",
  "Windows installer distribution with project save and export workflow",
];

export default function SoftwarePage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-20 md:pt-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">What&apos;s New</p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
              NovelCraft Pro
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed max-w-2xl">
              Storyboarding and long-form drafting in one workflow. Plan scenes visually,
              write on paged canvases, and move from concept to finished manuscript faster.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/downloads/NovelCraft-Pro-Setup-1.0.1.exe"
                className="inline-flex items-center gap-2 bg-teal-400 text-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] hover:bg-teal-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download for Windows
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-500 text-slate-100 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] hover:border-slate-300 transition-colors"
              >
                Contact for Support
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.13em] text-slate-300">
              <span className="inline-flex items-center gap-2"><MonitorSmartphone className="w-4 h-4 text-teal-300" /> Windows x64</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-teal-300" /> Version 1.0.1</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
              <Image
                src="/images/software/novelcraft-overview.png"
                alt="NovelCraft Pro application overview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {appCards.map((card) => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title}>
              {card.detail}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Explore Features</p>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">See the Core Workflows</h2>
            </div>
            <a
              href="/downloads/NovelCraft-Pro-Setup-1.0.1.exe"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700 hover:text-slate-950"
            >
              Download Installer
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visualWorkflows.map((shot) => (
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

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start border border-slate-200 bg-slate-50 p-8">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Built for Story Teams</p>
              <h2 className="text-3xl font-serif text-slate-900">Creative Direction + Writing Execution</h2>
              <p className="text-slate-600 leading-relaxed">
                NovelCraft Pro combines story planning, drafting, and scene management in a single workflow
                so writers can stay focused without switching tools.
              </p>
              <a
                href="/downloads/NovelCraft-Pro-Setup-1.0.1.exe"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] hover:bg-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                Get NovelCraft Pro
              </a>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 md:grid-cols-2">
                {featureList.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Ready to Install</p>
              <h2 className="text-3xl font-serif">Download NovelCraft Pro</h2>
              <p className="text-slate-300">Windows x64 installer, version 1.0.1, creator: CerebFastThinkTank.</p>
            </div>
            <a
              href="/downloads/NovelCraft-Pro-Setup-1.0.1.exe"
              className="inline-flex items-center justify-center gap-2 bg-teal-400 text-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] hover:bg-teal-300 transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download Now
            </a>
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
    <article className="bg-slate-900 text-slate-200 border border-slate-700 p-6 rounded-lg space-y-2 shadow-lg shadow-slate-900/15">
      <h2 className="text-lg font-semibold text-white flex items-center gap-2">
        {icon}
        {title}
      </h2>
      <p className="text-sm leading-relaxed">{children}</p>
    </article>
  );
}
