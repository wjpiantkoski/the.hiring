import { User } from "@/src/entities/models/user";
import { Cookie, Session } from "lucia";

export interface IAuthenticationService {
  createSession(user: User): Promise<{ session: Session; cookie: Cookie }>;
}
