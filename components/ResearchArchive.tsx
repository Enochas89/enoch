type ArchiveSection = {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  listTitle?: string;
  listItems?: string[];
  sectionText: string;
};

const archiveSections: ArchiveSection[] = [
  {
    id: "case-files",
    title: "Case Files",
    subtitle: "Where the mystery becomes specific.",
    overview:
      "The Case Files section examines major incidents, public releases, and historical episodes often cited as evidence of extraordinary craft. Each file breaks the event into layers: timeline, witness account, sensor context, environmental conditions, possible classified explanations, and unresolved questions.",
    listTitle: "Included in this section:",
    listItems: [
      "The Nimitz Encounter",
      "FLIR1, GIMBAL, and GoFast",
      "The Belgian UFO Wave",
      "Foo Fighters of World War II",
      "Cold War high-altitude sightings",
      "Civilian and military hotspot correlations",
    ],
    sectionText:
      "A sighting can be sincere, dramatic, and widely reported while still being misunderstood. This archive treats witness testimony with seriousness while also placing each event inside the technical and institutional systems that shaped what was seen, recorded, and believed.",
  },
  {
    id: "mechanisms",
    title: "Mechanisms of Mystery",
    subtitle: "How ordinary systems produce extraordinary impressions.",
    overview:
      "The strongest part of the UAP question is not the object itself. It is the mechanism behind the observation. This section breaks down the technical, perceptual, and operational factors that can produce encounters that feel impossible from the cockpit, the sensor feed, or the radar scope.",
    listTitle: "Topics in this section:",
    listItems: [
      "Technology Lag",
      "Sensor resolution limits",
      "Infrared blob effects",
      "Gimbal rotation artifacts",
      "Radar prediction errors",
      "Digital Radio Frequency Memory (DRFM)",
      "Laser-induced plasma concepts",
      "Compression artifacts in military footage",
      "Autokinesis and perceptual distortion",
      "Size-distance error in visual identification",
    ],
    sectionText:
      "What looks impossible at the point of observation may become understandable once the mechanism is visible. A blurred heat source becomes a craft. A mechanical reset becomes a rotation. A delayed signal becomes a jump. A plasma event becomes an object. A prediction error becomes an impossible maneuver. This section focuses on the engineering, optics, and cognitive bottlenecks that make the unknown look more exotic than it is.",
  },
  {
    id: "infrastructure",
    title: "The Infrastructure of Invisibility",
    subtitle: "The map behind the myth.",
    overview:
      "Secrecy is not abstract. It has geography, fences, restricted airspace, compartmented networks, and contractor ecosystems. This section explores the physical and institutional infrastructure that allows revolutionary aerospace systems to operate for years or decades outside public understanding.",
    listTitle: "Topics in this section:",
    listItems: [
      "Groom Lake / Area 51",
      "Tonopah Test Range",
      "Nevada Test and Training Range",
      "Edwards Air Force Base",
      "China Lake",
      "White Sands",
      "Restricted airspace logic",
      "Compartmented information systems",
      "Contractor secrecy and proprietary black programs",
    ],
    sectionText:
      "The public often treats aerospace secrecy as if it were impossible in the age of satellites and smartphones. History suggests otherwise. The archive follows the development chain of hidden systems through ranges, budgets, facilities, and corporate partnerships to show that mystery often forms wherever public visibility ends and classified infrastructure begins.",
  },
  {
    id: "historical-pattern",
    title: "The Historical Pattern",
    subtitle: "This did not begin in 2017.",
    overview:
      "Modern discussion often treats the current UAP wave as if it emerged suddenly with Navy videos and congressional hearings. The longer record tells a different story. This section places recent incidents inside a broader historical pattern stretching from World War II through the Cold War and into the present.",
    listTitle: "Topics in this section:",
    listItems: [
      "Foo Fighters before Roswell",
      "The U-2 and altitude misattribution",
      "A-12 and impossible speed reports",
      "F-117 and the black triangle era",
      "The evolution of stigma as strategic cover",
      "The continuity between Cold War secrecy and modern UAP narratives",
    ],
    sectionText:
      "The archive argues that the UAP story is not a new rupture in history but a recurring effect of the same structural conditions: advanced systems appearing before acknowledgment, observers lacking context, and institutions structured to keep explanation fragmented. What changes over time is not the pattern itself, but the tools that generate the confusion.",
  },
  {
    id: "documents-vault",
    title: "Documents Vault",
    subtitle: "The public record, read closely.",
    overview:
      "This section gathers source material relevant to the archive's core arguments: declassified files, official reports, technical references, public patents, historical studies, and source notes connected to the book's research structure.",
    listTitle: "Included in this section:",
    listItems: [
      "Declassified intelligence references",
      "Public technical literature",
      "Historical aerospace records",
      "Public patent filings",
      "Official reports and investigative summaries",
      "Source notes tied to chapters and arguments",
    ],
    sectionText:
      "This archive does not rely on mythology. It relies on records. Budgets, technical limitations, declassified histories, test patterns, patents, and institutional behavior leave signatures. Read together, those signatures form a more grounded explanation for many so-called unknowns than the stories built around them.",
  },
  {
    id: "timeline",
    title: "Timeline of the Blind Spot",
    subtitle: "When the sky changed and when the public found out later.",
    overview:
      "This timeline tracks the gap between development, deployment, observation, and acknowledgment. It is built around the core concept of the book: the Technology Lag, the delay between when a capability exists and when the public is allowed to know it exists.",
    sectionText:
      "The mystery is often not in the object. It is in the calendar. This section traces how classified systems can operate long before the public has the vocabulary, documentation, or access needed to interpret what has already been seen.",
  },
  {
    id: "method",
    title: "Method and Approach",
    subtitle: "Institutional literacy over spectacle.",
    overview:
      "This archive follows the same method as Puppet Skies: institutional literacy over spectacle.",
    sectionText:
      "That means reading state behavior through patterns in budgets, testing corridors, hardware limitations, patents, public admissions, and administrative structure. It means resisting both naive realism and totalizing conspiracy. It treats the national security system not as an all-knowing actor, but as a fragmented machine that produces predictable blind spots and recurring misattribution. The goal is not to strip away wonder. The goal is to relocate it from fantasy to the hidden complexity of systems already operating in the real world.",
  },
  {
    id: "about-archive",
    title: "Why This Archive Exists",
    subtitle: "An extension of the book beyond the printed page.",
    overview:
      "The purpose of this archive is to extend the work of the book beyond the printed page.",
    sectionText:
      "Some arguments are easier to see when mapped. Some patterns become clearer when timelines, installations, incidents, and mechanisms sit side by side. A website archive allows the investigation to remain living, searchable, and expandable while preserving the book's central discipline: follow the evidence, respect the limits of the record, and pay attention to the structures that shape belief before belief shapes memory.",
  },
];

const featuredBlocks = [
  {
    title: "Core Thesis",
    text: "Modern UAP narratives often emerge where classified capability, sensor distortion, and institutional secrecy overlap.",
  },
  {
    title: "Technology Lag",
    text: "What the public believes is possible has repeatedly trailed what classified aerospace systems were already doing.",
  },
  {
    title: "Read the System, Not Just the Sighting",
    text: "A report can be true as an observation and still false as an explanation.",
  },
  {
    title: "The Blind Spot",
    text: "The archive maps the engineered gap between public knowledge and operational reality.",
  },
];

const startExploringItems = [
  "Case Files - examine specific incidents",
  "Mechanisms - understand how mystery is produced",
  "Infrastructure - explore the geography of secrecy",
  "Documents Vault - read the public record",
  "Timeline - trace the Technology Lag",
];

export default function ResearchArchive() {
  return (
    <section className="bg-[#1a1a1a] py-16 border-y border-[#c5a059]/40">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059]">
            Research Archive for Puppet Skies
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#fcfcfc]">
            Research Archive
          </h2>
          <p className="text-lg text-[#e5d7bd]">
            Documents. Cases. Mechanisms. The blind spot made visible.
          </p>
          <p className="max-w-4xl leading-relaxed text-[#f2f2f2]">
            This archive exists to support the central argument of Puppet Skies:
            that many modern UFO and UAP narratives emerge not from
            extraterrestrial visitation, but from the long gap between
            classified capability and public awareness, amplified by sensor
            limitations, human perception, and strategic secrecy.
          </p>
          <p className="max-w-4xl leading-relaxed text-[#f2f2f2]">
            Inside this archive, you will find case studies, technical
            breakdowns, historical patterns, infrastructure maps, source notes,
            and analytical frameworks that expand on the book&apos;s investigation
            into how hidden aerospace programs, electronic warfare, and
            institutional compartmentalization shape what the public believes it
            sees in the sky.
          </p>
          <p className="text-[#e5d7bd]">Explore the record. Follow the pattern. Read the blind spot.</p>
        </header>

        <article className="rounded-lg border border-[#c5a059]/50 bg-[#fcfcfc] p-6 space-y-4">
          <h3 className="text-2xl font-serif text-[#1a1a1a]">
            What This Archive Is
          </h3>
          <p className="leading-relaxed text-[#2a2a2a]">
            This is not a fan page for mystery. It is a working archive built
            around a different question.
          </p>
          <p className="leading-relaxed text-[#2a2a2a]">
            Instead of asking, &quot;What was that object?&quot; this archive asks,
            &quot;What system produced that observation?&quot; That distinction matters.
            The modern UAP story is often treated as a collection of isolated
            sightings, but the deeper pattern suggests something else: a
            recurring overlap between classified development, fragmented
            information systems, flawed sensor interpretation, and a public left
            to interpret effects without access to cause.
          </p>
          <p className="leading-relaxed text-[#2a2a2a]">
            The archive is designed to help readers, researchers, and skeptics
            trace that pattern across history, technology, geography, and
            bureaucracy.
          </p>
        </article>

        <div className="space-y-3">
          {archiveSections.map((section, index) => (
            <details
              key={section.id}
              className="rounded-lg border border-[#c5a059]/50 bg-[#fcfcfc] px-6 py-4 group"
            >
              <summary className="cursor-pointer list-none">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f5f2b]">
                  Section {index + 1}
                </p>
                <h3 className="mt-1 text-2xl font-serif text-[#1a1a1a]">
                  {section.title}
                </h3>
                <p className="mt-1 text-sm text-[#555]">{section.subtitle}</p>
              </summary>
              <div className="mt-4 space-y-4 border-t border-[#c5a059]/30 pt-4">
                <p className="leading-relaxed text-[#2a2a2a]">
                  {section.overview}
                </p>
                {section.listItems && section.listTitle ? (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#7f5f2b]">
                      {section.listTitle}
                    </p>
                    <ul className="grid gap-1 text-[#2a2a2a] md:grid-cols-2">
                      {section.listItems.map((item) => (
                        <li key={item} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <p className="leading-relaxed text-[#2a2a2a]">
                  {section.sectionText}
                </p>
              </div>
            </details>
          ))}
        </div>

        <article className="rounded-lg border border-[#c5a059]/50 bg-[#fcfcfc] p-6 space-y-4">
          <h3 className="text-2xl font-serif text-[#1a1a1a]">Start Exploring</h3>
          <p className="leading-relaxed text-[#2a2a2a]">
            Choose a path into the archive:
          </p>
          <ul className="grid gap-2 md:grid-cols-2 text-[#2a2a2a]">
            {startExploringItems.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-[#2a2a2a]">
            The truth is not out there. It is in the systems, the records, and
            the silence between what exists and what is acknowledged.
          </p>
        </article>

        <section className="space-y-4">
          <h3 className="text-2xl font-serif text-[#fcfcfc]">Featured Blocks</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-lg border border-[#c5a059]/50 bg-[#fcfcfc] p-5"
              >
                <h4 className="text-lg font-semibold text-[#1a1a1a]">
                  {block.title}
                </h4>
                <p className="mt-2 leading-relaxed text-[#2a2a2a]">
                  {block.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="rounded-lg border border-[#c5a059]/50 bg-[#0f0f0f] p-6">
          <h3 className="text-xl font-serif text-[#fcfcfc]">
            Puppet Skies Research Archive
          </h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-[#e7dcc7]">
            A digital extension of Puppet Skies: How Classified Technology,
            Strategic Secrecy, and Psyops Created the UFO Myth by Enoch
            Schmaltz. Built to examine the historical, technical, and
            institutional foundations of the modern UAP narrative through
            documented patterns, public records, and structured analysis.
          </p>
        </footer>
      </div>
    </section>
  );
}
