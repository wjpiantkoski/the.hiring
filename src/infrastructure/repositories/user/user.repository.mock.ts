import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { User } from "@/src/entities/models/user";
import { uuid } from "uuidv4";

export class MockUserRepository implements IUserRepository {
  private _users: User[] = [];

  create(input: User): Promise<User> {
    this._users.push({
      ...input,
      id: uuid(),
    });

    return Promise.resolve(this._users[this._users.length - 1]);
  }
  findByEmail(email: string): Promise<User | null> {
    const user = this._users.find((user) => user.email === email);

    if (!user) {
      return Promise.resolve(null);
    }

    return Promise.resolve(user);
  }
}
