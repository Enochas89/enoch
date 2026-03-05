export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
};

const GITHUB_API_BASE = "https://api.github.com";

export async function getPublicRepos(username: string) {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }

  const repos = (await response.json()) as GitHubRepo[];

  return repos
    .filter((repo) => !repo.fork)
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
    );
}
