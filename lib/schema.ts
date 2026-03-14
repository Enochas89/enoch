export const SITE_URL = "https://www.enochschmaltz.com";

export const SCHEMA_IDS = {
  author: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  publisher: `${SITE_URL}/#publisher`,
} as const;

type Maybe<T> = T | undefined;

function withOptional<T extends Record<string, unknown>>(
  schema: T,
  optional: Record<string, unknown>,
) {
  for (const [key, value] of Object.entries(optional)) {
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === "string" && value.trim().length === 0)
    ) {
      (schema as Record<string, unknown>)[key] = value;
    }
  }

  return schema;
}

export function authorPersonSchema() {
  const sameAs = [
    "https://www.linkedin.com/in/enochschmaltz",
    "https://medium.com/@enochschmaltz",
    "https://enochschmaltz89.substack.com",
    "https://github.com/Enochas89",
    "https://about.me/enochschmaltz",
    "https://www.goodreads.com/author/show/enoch-schmaltz",
    "https://www.amazon.com/author/enochschmaltz",
    "https://orcid.org/0000-0000-0000-0000",
    "https://www.wikidata.org/wiki/Q138569168",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SCHEMA_IDS.author,
    name: "Enoch Schmaltz",
    alternateName: "E. A. Schmaltz",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    mainEntityOfPage: `${SITE_URL}/enoch-schmaltz`,
    sameAs,
    jobTitle: [
      "Author",
      "Writer",
      "Developer",
      "Project Systems Thinker",
      "Project Management Systems Builder",
    ],
    description:
      "Enoch Schmaltz is a writer and developer exploring systems thinking, project execution, and the structures that allow complex work to move from concept to completion.",
    knowsAbout: [
      "Project Management",
      "Systems Thinking",
      "Technology",
      "Artificial Intelligence",
      "Complex Systems",
      "Leadership",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: "E. A. Schmaltz",
    url: SITE_URL,
    publisher: {
      "@id": SCHEMA_IDS.author,
    },
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SCHEMA_IDS.publisher,
    name: "E. A. Schmaltz",
    url: SITE_URL,
  };
}

export function pageSchema({
  url,
  name,
  description,
  type = "WebPage",
  inLanguage = "en-US",
}: {
  url: string;
  name: string;
  description?: string;
  type?: "WebPage" | "AboutPage" | "ProfilePage";
  inLanguage?: string;
}) {
  return withOptional(
    {
      "@context": "https://schema.org",
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name,
      about: {
        "@id": SCHEMA_IDS.author,
      },
      publisher: {
        "@id": SCHEMA_IDS.publisher,
      },
      isPartOf: {
        "@id": SCHEMA_IDS.website,
      },
      inLanguage,
    },
    { description },
  );
}

export function collectionPageSchema({
  url,
  name,
  description,
  author,
  inLanguage = "en-US",
}: {
  url: string;
  name: string;
  description?: string;
  author?: {
    "@type": "Person";
    name: string;
    url: string;
  };
  inLanguage?: string;
}) {
  return withOptional(
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      url,
      name,
      about: {
        "@id": SCHEMA_IDS.author,
      },
      publisher: {
        "@id": SCHEMA_IDS.publisher,
      },
      isPartOf: {
        "@id": SCHEMA_IDS.website,
      },
      inLanguage,
    },
    { description, author },
  );
}

export function bookSchema({
  url,
  name,
  description,
  image,
  bookFormat,
  isbn,
  datePublished,
}: {
  url: string;
  name: string;
  description?: string;
  image?: string | string[];
  bookFormat?: string | string[];
  isbn?: string;
  datePublished?: string;
}) {
  return withOptional(
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": `${url}#book`,
      name,
      url,
      author: {
        "@id": SCHEMA_IDS.author,
      },
      publisher: {
        "@id": SCHEMA_IDS.publisher,
      },
    },
    {
      description,
      image,
      bookFormat,
      isbn,
      datePublished,
    },
  );
}

export function articleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  image,
  inLanguage = "en-US",
  type = "Article",
}: {
  url: string;
  headline: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string | string[];
  inLanguage?: string;
  type?: "Article" | "BlogPosting";
}) {
  return withOptional(
    {
      "@context": "https://schema.org",
      "@type": type,
      "@id": `${url}#article`,
      headline,
      mainEntityOfPage: url,
      author: {
        "@id": SCHEMA_IDS.author,
      },
      publisher: {
        "@id": SCHEMA_IDS.publisher,
      },
      inLanguage,
    },
    {
      description,
      datePublished,
      dateModified,
      image,
    },
  );
}

export function breadcrumbListSchema(
  items: Array<{ name: string; item: string }>,
  id?: Maybe<string>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
