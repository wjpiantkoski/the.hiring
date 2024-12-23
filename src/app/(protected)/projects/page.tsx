import ProjectsPageHeader from "@/components/projects/ProjectsPageHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsEmptyState from "@/components/projects/ProjectsEmptyState";
import { getProjects } from "./_actions/getProjects";

const Projects = async () => {
  const { projects } = await getProjects();

  return (
    <section className="flex flex-col space-y-4">
      <ProjectsPageHeader title="Projects" />

      {!projects?.length && <ProjectsEmptyState />}

      {!!projects?.length && (
        <div className="flex items-stretch flex-wrap">
          {projects?.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
