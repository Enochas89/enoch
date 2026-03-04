const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enoch Schmaltz",
  alternateName: "E. A. Schmaltz",
  url: "https://enochschmaltz.com/enoch-schmaltz",
  image: "https://enochschmaltz.com/portrait.jpg",
  jobTitle: "Writer and Developer",
  description:
    "Writer, developer, and project systems builder exploring leadership, technology, and complex project environments.",
  sameAs: [
    "https://www.wikidata.org/wiki/Q138569168",
    "https://www.linkedin.com/in/enochschmaltz",
    "https://medium.com/@enochschmaltz",
    "https://substack.com/@enochschmaltz",
    "https://github.com/Enochas89",
    "https://about.me/enochschmaltz",
  ],
  knowsAbout: [
    "Project Management",
    "Systems Thinking",
    "Leadership",
    "Software Development",
    "Technology",
  ],
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
