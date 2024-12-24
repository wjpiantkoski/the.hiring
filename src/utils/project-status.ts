export enum ProjectStatusSlug {
  InProgress = "in-progress",
  Completed = "completed",
  Cancelled = "cancelled",
}

export const ProjectStatusColor = {
  [ProjectStatusSlug.InProgress]: {
    bg: "bg-sky-50",
  },
  [ProjectStatusSlug.Completed]: {
    bg: "bg-green-50",
  },
  [ProjectStatusSlug.Cancelled]: {
    bg: "bg-zync-50",
  },
};
