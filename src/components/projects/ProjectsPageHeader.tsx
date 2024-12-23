"use client";

import ButtonProjectForm from "./ButtonProjectForm";
import ProjectFormDialog from "./ProjectFormDialog";
import { useDialog } from "@/app/_hooks/useDialog";

interface ProjectsPageHeaderProps {
  title: string;
}

const ProjectsPageHeader = ({ title }: ProjectsPageHeaderProps) => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>

        <ButtonProjectForm onClick={openDialog} variant="secondary">
          New project
        </ButtonProjectForm>
      </section>

      <ProjectFormDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Create new project"
      />
    </>
  );
};

export default ProjectsPageHeader;
