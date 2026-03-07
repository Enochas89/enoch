import { authorPersonSchema } from "@/lib/schema";

const personJsonLd = authorPersonSchema();

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
