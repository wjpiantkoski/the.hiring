import ProjectDetailsPageHeader from "@/components/projects/ProjectDetailsPageHeader";
import { getProjectById } from "../_actions/getProjectById";
import PageContentNotFound from "@/components/shared/PageContentNotFound";

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const { projectId } = await params;
  const { project } = await getProjectById(projectId);

  if (!project) {
    return <PageContentNotFound content={"Project not found"} />;
  }

  return (
    <section className="flex flex-col space-y-4">
      <ProjectDetailsPageHeader project={project} />
    </section>
  );
};

export default ProjectPage;
