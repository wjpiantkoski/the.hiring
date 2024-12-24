export enum ProjectStatusSlug {
  InProgress = "in-progress",
  Completed = "completed",
  Cancelled = "cancelled",
}

export const ProjectStatusColor = {
  [ProjectStatusSlug.InProgress]: "sky-50",
  [ProjectStatusSlug.Completed]: "green-50",
  [ProjectStatusSlug.Cancelled]: "zync-50",
};
