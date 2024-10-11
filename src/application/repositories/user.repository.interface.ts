import { User } from "@/src/entities/models/user";

export interface IUserRepository {
  create(input: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
