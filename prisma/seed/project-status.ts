import { PrismaClient } from "@prisma/client";

const data = [
  {
    id: "cm4nc3pys00013b7e1v1tbgia",
    title: "In Progress",
    slug: "in-progress",
  },
  {
    id: "cm4nc3pys00023b7e6kktbgib",
    title: "Completed",
    slug: "completed",
  },
  {
    id: "cm4nc3pys00033b7e8vltbgic",
    title: "Cancelled",
    slug: "cancelled",
  },
];

export default async function seedProjectStatuses(prisma: PrismaClient) {
  try {
    console.log("Seeding project statuses ...");

    await prisma.projectStatus.deleteMany();

    await prisma.projectStatus.createMany({
      data,
      skipDuplicates: true,
    });

    console.log("Project statuses seeded.");
  } catch (error) {
    console.error("Error seeding project statuses:", error);
  }
}
