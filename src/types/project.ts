export interface Project {
  id: string;
  name: string;
  startDate: Date;
  deadline: Date;
  description: string | null;
  status: {
    title: string;
    slug: string;
  } | null;
}
