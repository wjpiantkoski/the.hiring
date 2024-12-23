import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>

        <Link
          href="/projects/new"
          className={buttonVariants({ variant: "secondary" })}
        >
          New project
        </Link>
      </section>
    </section>
  );
};

export default Projects;
