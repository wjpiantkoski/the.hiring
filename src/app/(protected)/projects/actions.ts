"use server";

import prisma from "@/lib/prisma";
import { ProjectForm, projectFormSchema } from "@/lib/zod/schemas/project";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createProject = async (input: ProjectForm) => {
  try {
    const validatedFields = projectFormSchema.safeParse(input);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { userId } = await auth();

    if (!userId) {
      return {
        errors: {
          server: ["User not found"],
        },
      };
    }

    await prisma.project.create({
      data: {
        ...input,
        userId,
      },
    });
  } catch (err: unknown) {
    const error = err as Error;

    return {
      errors: {
        server: [error.message],
      },
    };
  }

  revalidatePath("/projects");
};

export const getProjects = async () => {
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
  });

  return {
    projects,
  };
};
