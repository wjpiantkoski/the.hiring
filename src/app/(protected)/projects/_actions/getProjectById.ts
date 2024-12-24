"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Project } from "@prisma/client";

interface GetProjectByIdOutput {
  project?: Project;
  errors?: {
    server: string[];
  };
}

export const getProjectById = async (
  id: string
): Promise<GetProjectByIdOutput> => {
  const { userId } = await auth();

  if (!userId) {
    return {
      errors: {
        server: ["User not found"],
      },
    };
  }

  const project = await prisma.project.findFirst({
    where: {
      id,
      userId,
    },
    include: {
      status: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
    },
  });

  if (!project) {
    return {
      errors: {
        server: ["Project not found"],
      },
    };
  }

  return {
    project,
  };
};
