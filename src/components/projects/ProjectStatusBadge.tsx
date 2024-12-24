import { cn } from "@/lib/utils";

const colorVariants = {
  "in-progress": "bg-sky-50",
  completed: "bg-green-50",
  cancelled: "bg-zync-50",
};

interface ProjectStatusBadgeProps {
  variant: string;
  title: string;
}

const ProjectStatusBadge = ({ variant, title }: ProjectStatusBadgeProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-6 rounded-sm text-xs font-normal px-2",
        colorVariants[variant as keyof typeof colorVariants]
      )}
    >
      {title}
    </div>
  );
};

export default ProjectStatusBadge;
