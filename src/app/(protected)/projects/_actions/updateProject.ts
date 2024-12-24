"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface UpdateProjectInput {
  id: string;
  data: {
    name?: string;
    description?: string;
    startDate?: Date;
    deadline?: Date;
  };
}

export const updateProject = async ({ id, data }: UpdateProjectInput) => {
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
  });

  if (!project) {
    return {
      errors: {
        server: ["Project not found"],
      },
    };
  }

  await prisma.project.update({
    where: {
      id,
      userId,
    },
    data: {
      ...data,
    },
  });

  revalidatePath("/projects");
  revalidatePath(`/projects/${id}`);
};
