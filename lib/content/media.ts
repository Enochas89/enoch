import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export type MediaType = "podcast" | "interview" | "speaking" | "article";

export type MediaItem = {
  slug: string;
  title: string;
  outlet: string;
  date: string;
  type: MediaType;
  link: string;
  summary?: string;
};

const mediaDir = path.join(process.cwd(), "content", "media");

const listMedia = cache((): MediaItem[] => {
  if (!fs.existsSync(mediaDir)) return [];

  return fs
    .readdirSync(mediaDir)
    .filter((file) => file.endsWith(".json"))
    .map((fileName) => {
      const raw = fs.readFileSync(path.join(mediaDir, fileName), "utf8");
      const data = JSON.parse(raw) as Partial<MediaItem>;
      const slug = fileName.replace(/\.json$/, "");

      return {
        slug,
        title: data.title || slug,
        outlet: data.outlet || "",
        date: data.date || "",
        type: (data.type as MediaType) || "interview",
        link: data.link || "#",
        summary: data.summary || "",
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
});

export const getAllMedia = () => listMedia();
