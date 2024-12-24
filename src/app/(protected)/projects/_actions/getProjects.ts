"use server";

import prisma from "@/lib/prisma";
import { Project } from "@/types/project";
import { auth } from "@clerk/nextjs/server";

interface GetProjectsOutput {
  projects?: Project[];
  errors?: {
    server: string[];
  };
}

export const getProjects = async (): Promise<GetProjectsOutput> => {
  const { userId } = await auth();

  if (!userId) {
    return {
      errors: {
        server: ["User not found"],
      },
    };
  }

  const projects = await prisma.project.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
      startDate: true,
      deadline: true,
      description: true,
      status: {
        select: {
          title: true,
          slug: true,
        },
      },
    },
    orderBy: {
      deadline: "asc",
    },
  });

  return {
    projects,
  };
};
