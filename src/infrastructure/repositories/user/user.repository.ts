import { prisma } from "@/prisma";
import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { User } from "@/src/entities/models/user";

export class UserRepository implements IUserRepository {
  public async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } });
  }

  public async create(input: User): Promise<User> {
    return await prisma.user.create({ data: input });
  }
}
