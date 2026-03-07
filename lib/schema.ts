export const SITE_URL = "https://enochschmaltz.com";

export const SCHEMA_IDS = {
  author: `${SITE_URL}/#author`,
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
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SCHEMA_IDS.author,
    name: "E. A. Schmaltz",
    alternateName: ["Enoch Schmaltz"],
    url: `${SITE_URL}/enoch-schmaltz`,
    sameAs: [
      "https://github.com/Enochas89",
      "https://www.wikidata.org/wiki/Q138569168",
    ],
    jobTitle: ["Author", "Technology Writer", "Developer"],
    description:
      "E. A. Schmaltz writes about technology, perception, sensing systems, artificial intelligence, and complex systems.",
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
  inLanguage = "en-US",
}: {
  url: string;
  name: string;
  description?: string;
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
    { description },
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
