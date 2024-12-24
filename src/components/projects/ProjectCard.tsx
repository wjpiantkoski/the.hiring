import { Project } from "@/types/project";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ProjectStatusColor, ProjectStatusSlug } from "@/utils/project-status";
import { cn } from "@/lib/utils";
import ProjectCardDate from "./ProjectCardDate";

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

            <div
              className={cn(
                "flex flex-col items-center justify-center h-6 rounded-sm text-xs font-normal px-2",
                `bg-${ProjectStatusColor[status?.slug as ProjectStatusSlug]}`
              )}
            >
              {status?.title}
            </div>
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
