"use client";

import ButtonProjectForm from "@/components/projects/ButtonProjectForm";

interface ProjectsPageHeaderProps {
  title: string;
}

const ProjectsPageHeader = ({ title }: ProjectsPageHeaderProps) => {
  const openProjectForm = () => {};

  return (
    <section className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>

      <ButtonProjectForm onClick={openProjectForm} variant="secondary">
        New Project
      </ButtonProjectForm>
    </section>
  );
};

export default ProjectsPageHeader;
