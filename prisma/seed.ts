import { PrismaClient } from "@prisma/client";
import seedProjectStatuses from "./seed/project-status";
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
  await seedProjectStatuses(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
