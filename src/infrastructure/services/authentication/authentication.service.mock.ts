import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { Cookie } from "@/src/entities/models/cookie";
import { Session, sessionSchema } from "@/src/entities/models/session";
import { User } from "@/src/entities/models/user";

const SESSION_COOKIE = "auth_session";

export class MockAuthenticationService implements IAuthenticationService {
  private _sessions: Record<string, { session: Session; user: User }>;

  constructor() {
    this._sessions = {};
  }

  async createSession(
    user: User
  ): Promise<{ session: Session; cookie: Cookie }> {
    const luciaSession: Session = {
      id: "random_session_id",
      userId: user.id!,
      expiresAt: new Date(new Date().getTime() + 86400000 * 7), // 7 days
    };

    const session = sessionSchema.parse(luciaSession);

    const cookie: Cookie = {
      name: SESSION_COOKIE,
      value: session.id + "_" + user.id,
      attributes: {},
    };

    this._sessions[session.id] = { session, user };

    return { session, cookie };
  }
}
