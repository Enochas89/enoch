"use client";

import { useMemo, useState } from "react";
import { MediaItem, MediaType } from "@/lib/content/media";
import { formatDate } from "@/lib/utils";

const typeLabels: Record<MediaType, string> = {
  podcast: "Podcast",
  interview: "Interview",
  speaking: "Speaking",
  article: "Article mention",
};

export default function MediaFilter({ items }: { items: MediaItem[] }) {
  const [type, setType] = useState<MediaType | "all">("all");

  const filtered = useMemo(
    () => (type === "all" ? items : items.filter((item) => item.type === type)),
    [items, type],
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {(["all", "podcast", "interview", "speaking", "article"] as const).map(
          (value) => (
            <button
              key={value}
              onClick={() => setType(value as MediaType | "all")}
              className={`rounded-full border px-3 py-1 text-sm ${
                type === value
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              {value === "all" ? "All" : typeLabels[value as MediaType]}
            </button>
          ),
        )}
      </div>

      <div className="grid gap-3">
        {filtered.map((item) => (
          <a
            key={item.slug}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="card flex flex-col gap-2 p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="pill">{typeLabels[item.type]}</span>
              <span>{formatDate(item.date)}</span>
              <span className="font-semibold text-[var(--ink)]">{item.outlet}</span>
            </div>
            <p className="text-lg font-semibold text-[var(--ink)]">{item.title}</p>
            {item.summary && (
              <p className="text-[var(--muted)]">{item.summary}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
