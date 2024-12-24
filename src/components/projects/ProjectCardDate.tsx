import { Calendar } from "lucide-react";

interface ProjectCardDateProps {
  date: Date;
  label: string;
}

const ProjectCardDate = ({ date, label }: ProjectCardDateProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold">{label}</span>
      <div className="flex align-center text-stone-500">
        <Calendar className="inline-block w-3 h-3 mr-1" />
        <span className="text-xs h-3 flex flex-col items-center justify-center">
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default ProjectCardDate;
