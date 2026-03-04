const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enoch Schmaltz",
  alternateName: "E. A. Schmaltz",
  url: "https://enochschmaltz.com/enoch-schmaltz",
  sameAs: [
    "https://www.wikidata.org/wiki/Q138569168",
    "https://www.linkedin.com/in/enochschmaltz",
    "https://medium.com/@enochschmaltz",
    "https://substack.com/@enochschmaltz",
    "https://github.com/Enochas89",
    "https://about.me/enochschmaltz",
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
