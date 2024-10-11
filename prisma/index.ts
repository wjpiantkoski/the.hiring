import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

export const client = new PrismaClient();

export const luciaAdapter = new PrismaAdapter(client.session, client.user);
