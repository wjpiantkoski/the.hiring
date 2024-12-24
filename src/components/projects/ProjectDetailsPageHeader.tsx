"use client";

import { useDialog } from "@/app/_hooks/useDialog";
import { Project } from "@prisma/client";
import ButtonProjectForm from "./ButtonProjectForm";
import ProjectFormDialog from "./ProjectFormDialog";

interface ProjectDetailsPageHeaderProps {
  project: Project;
}

const ProjectDetailsPageHeader = ({
  project,
}: ProjectDetailsPageHeaderProps) => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">{project.name}</h1>

        <ButtonProjectForm onClick={openDialog} variant="secondary">
          Edit
        </ButtonProjectForm>
      </section>

      <ProjectFormDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Edit project"
        project={project}
      />
    </>
  );
};

export default ProjectDetailsPageHeader;
