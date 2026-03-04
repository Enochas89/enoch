const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enoch Schmaltz",
  alternateName: "E. A. Schmaltz",
  url: "https://enochschmaltz.com/enoch-schmaltz",
  sameAs: [
    "https://linkedin.com/",
    "https://medium.com/",
    "https://substack.com/",
    "https://github.com/",
    "https://about.me/",
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
