import { luciaAdapter } from "@/prisma";
import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { Lucia } from "lucia";

export class AuthenticationService {
  private _lucia: Lucia;

  constructor(private readonly userRepository: IUserRepository) {
    this._lucia = new Lucia(luciaAdapter, {
      sessionCookie: {
        expires: false,
        attributes: {
          secure: process.env.NODE_ENV === "production",
        },
      },
      getUserAttributes: (attributes) => {
        return {
          id: attributes.id,
        };
      },
    });
  }
}

interface DatabaseUserAttributes {
  id: string;
}

declare module "lucia" {
  interface Register {
    Lucia: Lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}
