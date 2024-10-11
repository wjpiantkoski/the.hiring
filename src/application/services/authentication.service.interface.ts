import { Cookie } from "@/src/entities/models/cookie";
import { Session } from "@/src/entities/models/session";
import { User } from "@/src/entities/models/user";

export interface IAuthenticationService {
  createSession(user: User): Promise<{ session: Session; cookie: Cookie }>;
}
