import ButtonProjectForm from "@/components/projects/ButtonProjectForm";

const Projects = () => {
  const openProjectForm = () => {};

  return (
    <section>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <ButtonProjectForm onClick={openProjectForm} />
      </section>
    </section>
  );
};

export default Projects;
