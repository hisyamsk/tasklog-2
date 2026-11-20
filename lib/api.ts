import { Issue } from "./issues";

const issues: Issue[] = [
  { id: 1, title: "Login button does nothing on Safari", description: "Clicking Log in on Safari sends no request and shows no error.", status: "open", createdAt: "2026-11-02T09:00:00Z" },
  { id: 2, title: "Dashboard is slow", description: "The dashboard takes over five seconds to load for accounts with many issues. Profiling shows most of the time is spent counting issues per status, which runs one query per status instead of a single grouped query. The fix is probably a GROUP BY plus an index on status.", status: "in_progress", createdAt: "2026-11-05T09:00:00Z" },
  { id: 3, title: "Typo on the pricing page", description: "", status: "done", createdAt: "2026-11-09T09:00:00Z" },
];

function delay(ms = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getIssues(): Promise<Issue[]> {
  await delay()
  return structuredClone(issues)
}
