export const STATUSES = ["open", "in_progress", "done"] as const;
export type Status = (typeof STATUSES)[number]; // "open" | "in_progress" | "done"

export const STATUS_LABELS: Record<Status, string> = {
  open: "Open",
  in_progress: "In progress",
  done: "Done",
};

export type Issue = {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: string; // ISO date string: JSON APIs send dates as text
};
