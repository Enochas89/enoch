"use client";

import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import { WritingMeta, WritingType } from "@/lib/content/writing";

type FiltersProps = {
  items: WritingMeta[];
  topics: string[];
  years: number[];
};

export default function Filters({ items, topics, years }: FiltersProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<WritingType | "all">("all");
  const [topic, setTopic] = useState<string | "all">("all");
  const [year, setYear] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return items.filter((item) => {
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q));

      const matchesType = type === "all" || item.type === type;
      const matchesTopic = topic === "all" || item.topics.includes(topic);
      const matchesYear = year === "all" || item.year === year;

      return matchesQuery && matchesType && matchesTopic && matchesYear;
    });
  }, [items, query, type, topic, year]);

  return (
    <div className="flex flex-col gap-5">
      <div className="card flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-[var(--ink)]">
            Filter & search writing
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {filtered.length} piece{filtered.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input
            type="search"
            placeholder="Search title, summary, or topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as WritingType | "all")}
            className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="all">All types</option>
            <option value="essay">Essay</option>
            <option value="explainer">Explainer</option>
            <option value="commentary">Commentary</option>
            <option value="newsletter">Newsletter note</option>
          </select>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="all">All topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value === "all" ? "all" : Number(e.target.value))
            }
            className="rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="all">Any year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
        {filtered.length === 0 && (
          <div className="card p-6 text-[var(--muted)]">
            Nothing matches that filter yet. Try clearing a filter or search term.
          </div>
        )}
      </div>
    </div>
  );
}
