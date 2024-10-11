import { luciaAdapter } from "@/prisma";
import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { Cookie } from "@/src/entities/models/cookie";
import { Session } from "@/src/entities/models/session";
import { User } from "@/src/entities/models/user";
import { Lucia } from "lucia";

export class AuthenticationService implements IAuthenticationService {
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

  public async createSession(
    user: User
  ): Promise<{ session: Session; cookie: Cookie }> {
    const session = await this._lucia.createSession(user.id!, {});
    const cookie = this._lucia.createSessionCookie(session.id);

    return {
      cookie,
      session,
    };
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
