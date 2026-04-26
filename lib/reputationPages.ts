import type { Metadata } from "next";
import { SITE_URL } from "@/lib/schema";

export type ReputationPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const commonLinks = [
  { label: "Professional profile", href: "/enoch-schmaltz" },
  { label: "Credentials and background", href: "/enoch-schmaltz-credentials" },
  { label: "Projects", href: "/projects" },
  { label: "Software", href: "/software" },
  { label: "Books", href: "/books" },
  { label: "Official profiles", href: "/enoch-schmaltz-online" },
];

export const reputationPages = {
  "who-is-enoch-schmaltz": {
    slug: "who-is-enoch-schmaltz",
    title: "Who Is Enoch Schmaltz?",
    description:
      "A concise answer to who Enoch Schmaltz is, including project management, software, writing, and author background.",
    eyebrow: "Identity",
    heading: "Who Is Enoch Schmaltz?",
    intro:
      "Enoch Schmaltz is a PMP Certified project management professional, Senior Estimator, software builder, and author focused on systems that help complex work move from plan to completion.",
    sections: [
      {
        title: "Professional background",
        body:
          "His professional background includes construction project management, estimating, coordination, and delivery work where schedules, budgets, teams, and decision paths have to stay aligned.",
      },
      {
        title: "Software and systems work",
        body:
          "He builds software and workflow tools that emphasize visibility, accountability, project clarity, and practical execution for teams managing complex information.",
      },
      {
        title: "Writing and authorship",
        body:
          "His writing appears under Enoch Schmaltz and E. A. Schmaltz, with books and essays covering technology, perception, institutions, and systems thinking.",
      },
    ],
    links: commonLinks,
  },
  "enoch-schmaltz-profile": {
    slug: "enoch-schmaltz-profile",
    title: "Enoch Schmaltz Profile",
    description:
      "Professional profile for Enoch Schmaltz, including PMP certification, project leadership, estimating, software, and authorship.",
    eyebrow: "Profile",
    heading: "Enoch Schmaltz Profile",
    intro:
      "This profile summarizes Enoch Schmaltz's work across project management, estimating, development, software products, and independent writing.",
    sections: [
      {
        title: "Project leadership",
        body:
          "Schmaltz's work centers on project delivery, coordination, documentation, team communication, and the operational systems that keep complex efforts moving.",
      },
      {
        title: "Technical projects",
        body:
          "His development work includes web applications, project dashboards, publishing tools, and NovelCraft Pro, a desktop writing and storyboarding application.",
      },
      {
        title: "Public identity",
        body:
          "This official site connects his professional pages, author pages, GitHub work, LinkedIn presence, and long-form writing in one verified source.",
      },
    ],
    links: commonLinks,
  },
  "enoch-schmaltz-biography": {
    slug: "enoch-schmaltz-biography",
    title: "Enoch Schmaltz Biography",
    description:
      "Biography for Enoch Schmaltz: PMP Certified project manager, Senior Estimator, SaaS founder, software builder, and author.",
    eyebrow: "Biography",
    heading: "Enoch Schmaltz Biography",
    intro:
      "Enoch Schmaltz is a project management professional and independent builder whose work connects construction delivery, software systems, and writing.",
    sections: [
      {
        title: "Career focus",
        body:
          "His career has focused on planning, estimating, coordination, delivery, and the practical systems that help teams understand project status and risk.",
      },
      {
        title: "Builder mindset",
        body:
          "Alongside project management work, he develops tools and websites that turn operational lessons into usable software and public resources.",
      },
      {
        title: "Author work",
        body:
          "As E. A. Schmaltz, he writes books and essays about technology, institutional behavior, perception, and the ways complex systems affect public understanding.",
      },
    ],
    links: commonLinks,
  },
  "enoch-schmaltz-facts": {
    slug: "enoch-schmaltz-facts",
    title: "Enoch Schmaltz Facts",
    description:
      "Key facts about Enoch Schmaltz, including professional background, software work, books, projects, and official identity links.",
    eyebrow: "Facts",
    heading: "Enoch Schmaltz Facts",
    intro:
      "This page collects core facts about Enoch Schmaltz from his official website and public project work.",
    sections: [
      {
        title: "Professional facts",
        body:
          "Enoch Schmaltz is PMP Certified and has 14+ years of experience connected to project management, estimating, execution, and cross-team coordination.",
      },
      {
        title: "Project facts",
        body:
          "His public projects include ClearView, NovelCraft Pro, publishing experiments, and this website's SEO, writing, books, and media infrastructure.",
      },
      {
        title: "Author facts",
        body:
          "Books and essays by E. A. Schmaltz focus on technology, perception, policy, public trust, and systems that shape decision-making.",
      },
    ],
    links: commonLinks,
  },
  "enoch-schmaltz-author": {
    slug: "enoch-schmaltz-author",
    title: "Enoch Schmaltz Author",
    description:
      "Author page for Enoch Schmaltz and E. A. Schmaltz, covering books, essays, technology commentary, and official profiles.",
    eyebrow: "Author",
    heading: "Enoch Schmaltz Author",
    intro:
      "Enoch Schmaltz publishes author work as E. A. Schmaltz, writing about technology, perception, public trust, and institutional systems.",
    sections: [
      {
        title: "Books",
        body:
          "Current titles include Puppet Skies and The Controlled Release, each exploring advanced technology, public perception, and institutional communication.",
      },
      {
        title: "Essays",
        body:
          "His essays examine sensing, disclosure, decision-making, project systems, and the gap between technical capability and public understanding.",
      },
      {
        title: "Official author identity",
        body:
          "This website connects the author profile, book pages, writing archive, and external identity profiles for consistent search and citation context.",
      },
    ],
    links: [
      { label: "Author about page", href: "/about" },
      { label: "Books by E. A. Schmaltz", href: "/books" },
      { label: "Writing archive", href: "/writing" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-writing": {
    slug: "enoch-schmaltz-writing",
    title: "Enoch Schmaltz Writing",
    description:
      "Writing by Enoch Schmaltz and E. A. Schmaltz, including essays on technology, systems, project delivery, and public trust.",
    eyebrow: "Writing",
    heading: "Enoch Schmaltz Writing",
    intro:
      "Writing by Enoch Schmaltz covers systems thinking, technology, project delivery, perception, and the institutions that shape public understanding.",
    sections: [
      {
        title: "Essay themes",
        body:
          "Recurring themes include leadership, project systems, technology disclosure, sensing, decision-making, and how organizations communicate uncertainty.",
      },
      {
        title: "Author platforms",
        body:
          "Work appears on this official site, Medium, Substack, and book pages connected to the E. A. Schmaltz author profile.",
      },
      {
        title: "Professional perspective",
        body:
          "The writing draws on practical project management experience, software development, and a systems-focused view of complex organizations.",
      },
    ],
    links: [
      { label: "Writing archive", href: "/writing" },
      { label: "Books", href: "/books" },
      { label: "Official profiles", href: "/enoch-schmaltz-online" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-books-and-research": {
    slug: "enoch-schmaltz-books-and-research",
    title: "Enoch Schmaltz Books and Research",
    description:
      "Books and research themes by Enoch Schmaltz and E. A. Schmaltz, including Puppet Skies, The Controlled Release, and essays.",
    eyebrow: "Books and Research",
    heading: "Enoch Schmaltz Books and Research",
    intro:
      "Books and research by Enoch Schmaltz examine advanced technology, institutional communication, public trust, and systems that shape perception.",
    sections: [
      {
        title: "Books",
        body:
          "Puppet Skies and The Controlled Release explore the relationship between technology, secrecy, policy, and how information enters public life.",
      },
      {
        title: "Research direction",
        body:
          "The research emphasis is practical and documentary: reading systems, timelines, incentives, and public records before reaching conclusions.",
      },
      {
        title: "Related writing",
        body:
          "Essays extend those themes into project systems, leadership, governance, technical disclosure, and institutional decision-making.",
      },
    ],
    links: [
      { label: "Books", href: "/books" },
      { label: "Writing", href: "/writing" },
      { label: "Press", href: "/press" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-projects": {
    slug: "enoch-schmaltz-projects",
    title: "Enoch Schmaltz Projects",
    description:
      "Projects by Enoch Schmaltz, including software, project management tools, publishing experiments, and public development work.",
    eyebrow: "Projects",
    heading: "Enoch Schmaltz Projects",
    intro:
      "Projects by Enoch Schmaltz include web applications, project management tools, publishing systems, and software experiments.",
    sections: [
      {
        title: "Project systems",
        body:
          "Many projects focus on visibility, accountability, workflow clarity, and the structure needed to move complicated work across teams.",
      },
      {
        title: "Development work",
        body:
          "Public development work is published through GitHub and includes web apps, author-site infrastructure, and application prototypes.",
      },
      {
        title: "Software products",
        body:
          "NovelCraft Pro is a desktop application for writing, storyboarding, project organization, and long-form manuscript workflow.",
      },
    ],
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Software", href: "/software" },
      { label: "GitHub", href: "https://github.com/Enochas89" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-software-projects": {
    slug: "enoch-schmaltz-software-projects",
    title: "Enoch Schmaltz Software Projects",
    description:
      "Software projects by Enoch Schmaltz, including NovelCraft Pro, project dashboards, publishing tools, and TypeScript applications.",
    eyebrow: "Software Projects",
    heading: "Enoch Schmaltz Software Projects",
    intro:
      "Enoch Schmaltz builds software projects for writing workflows, project visibility, publishing, and execution systems.",
    sections: [
      {
        title: "NovelCraft Pro",
        body:
          "NovelCraft Pro combines storyboarding, drafting, scene organization, and manuscript workflow in a desktop writing application.",
      },
      {
        title: "Project tools",
        body:
          "Other software work focuses on dashboards, coordination, task ownership, reporting, and the operational side of complex delivery.",
      },
      {
        title: "Technology stack",
        body:
          "Public projects use TypeScript, React, Next.js, Electron, and supporting web tooling where those choices fit the product goal.",
      },
    ],
    links: [
      { label: "Software", href: "/software" },
      { label: "Projects", href: "/projects" },
      { label: "GitHub", href: "https://github.com/Enochas89" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-developer": {
    slug: "enoch-schmaltz-developer",
    title: "Enoch Schmaltz Developer",
    description:
      "Developer profile for Enoch Schmaltz, including TypeScript, React, Next.js, Electron, project dashboards, and publishing tools.",
    eyebrow: "Developer",
    heading: "Enoch Schmaltz Developer",
    intro:
      "As a developer, Enoch Schmaltz builds practical software tied to project systems, publishing workflows, writing tools, and operational clarity.",
    sections: [
      {
        title: "Frontend and product work",
        body:
          "His development work includes React and Next.js websites, TypeScript applications, and interface work for organizing project information.",
      },
      {
        title: "Desktop software",
        body:
          "NovelCraft Pro uses an Electron-based desktop workflow for storyboarding, drafting, scene metadata, and manuscript organization.",
      },
      {
        title: "Project management context",
        body:
          "The developer work is informed by real project management experience, especially the need for clear status, ownership, and execution signals.",
      },
    ],
    links: [
      { label: "Software", href: "/software" },
      { label: "Projects", href: "/projects" },
      { label: "GitHub", href: "https://github.com/Enochas89" },
      ...commonLinks.slice(0, 3),
    ],
  },
  "enoch-schmaltz-links": {
    slug: "enoch-schmaltz-links",
    title: "Enoch Schmaltz Links",
    description:
      "Official links for Enoch Schmaltz, including professional profile, books, writing, projects, software, GitHub, LinkedIn, and author pages.",
    eyebrow: "Official Links",
    heading: "Enoch Schmaltz Links",
    intro:
      "This page collects official Enoch Schmaltz links so searchers, recruiters, readers, and collaborators can find the correct profiles.",
    sections: [
      {
        title: "Official website pages",
        body:
          "The primary pages on this site cover biography, credentials, author work, books, writing, projects, software, media, and contact information.",
      },
      {
        title: "External profiles",
        body:
          "Official external profiles include LinkedIn, GitHub, Medium, Substack, About.me, Amazon Author Central, Goodreads, and Wikidata where available.",
      },
      {
        title: "Search consistency",
        body:
          "Keeping these links together helps search engines connect the same person, author name, work history, books, projects, and public profiles.",
      },
    ],
    links: [
      ...commonLinks,
      { label: "LinkedIn", href: "https://www.linkedin.com/in/enochschmaltz" },
      { label: "GitHub", href: "https://github.com/Enochas89" },
    ],
  },
} satisfies Record<string, ReputationPageData>;

export type ReputationSlug = keyof typeof reputationPages;

export function createReputationMetadata(slug: ReputationSlug): Metadata {
  const page = reputationPages[slug];
  const url = `${SITE_URL}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "profile",
      url,
      title: page.title,
      description: page.description,
      images: [
        {
          url: `${SITE_URL}/EnochSchmaltz.jpg`,
          width: 1536,
          height: 2048,
          alt: "Enoch Schmaltz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${SITE_URL}/EnochSchmaltz.jpg`],
    },
  };
}
