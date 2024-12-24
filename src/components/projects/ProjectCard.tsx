import { Project } from "@/types/project";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ProjectCardDate from "./ProjectCardDate";
import ProjectStatusBadge from "./ProjectStatusBadge";

const ProjectCard = ({
  id,
  name,
  status,
  startDate,
  deadline,
  description,
}: Project) => {
  return (
    <Link
      href={`/projects/${id}`}
      className="flex flex-row items-stretch w-1/3 p-1"
    >
      <Card className="w-full p-0 hover:shadow-xl hover:bg-zinc-50 cursor-pointer">
        <CardHeader className="p-4 space-y-0">
          <CardTitle className="flex items-center justify-between">
            <span className="text-xl font-extrabold">{name}</span>
            {status && (
              <ProjectStatusBadge variant={status.slug} title={status.title} />
            )}
          </CardTitle>

          <CardDescription className="text-xs min-h-4">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 flex flex-col space-y-1">
          <ProjectCardDate date={startDate} label="Start Date" />
          <ProjectCardDate date={deadline} label="Deadline" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
