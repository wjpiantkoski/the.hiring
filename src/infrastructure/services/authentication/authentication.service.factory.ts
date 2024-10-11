import { UserRepository } from "../../repositories/user/user.repository";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationServiceFactory {
  static create() {
    return new AuthenticationService(new UserRepository());
  }
}
