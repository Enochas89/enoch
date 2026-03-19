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
    "https://github.com/Enochas89",
    "https://about.me/enochschmaltz",
    "https://medium.com/@enochschmaltz",
    "https://enochschmaltz89.substack.com",
    "https://www.goodreads.com/author/show/enoch-schmaltz",
    "https://www.amazon.com/author/enochschmaltz",
    "https://www.wikidata.org/wiki/Q138569168",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SCHEMA_IDS.author,
    name: "Enoch Schmaltz",
    alternateName: "E. A. Schmaltz",
    url: SITE_URL,
    image: `${SITE_URL}/EnochSchmaltz.jpg`,
    mainEntityOfPage: `${SITE_URL}/enoch-schmaltz`,
    sameAs,
    jobTitle: "Construction Project Manager",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Business Degree",
    },
    description:
      "PMP Certified professional with 14+ Years Experience as a Construction Project Manager, Senior Estimator, Developer, and SaaS Founder.",
    knowsAbout: [
      "PMP",
      "Project Management",
      "React",
      "TypeScript",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: "Enoch Schmaltz",
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
    name: "Enoch Schmaltz",
    url: SITE_URL,
  };
}

export function pageSchema({
  url,
  name,
  description,
  type = "WebPage",
  mainEntity,
  inLanguage = "en-US",
}: {
  url: string;
  name: string;
  description?: string;
  type?: "WebPage" | "AboutPage" | "ProfilePage";
  mainEntity?: {
    "@id": string;
  };
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
    { description, mainEntity },
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
