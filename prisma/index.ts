import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const luciaAdapter = new PrismaAdapter(prisma.session, prisma.user);
