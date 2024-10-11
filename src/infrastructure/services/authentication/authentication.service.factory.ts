import { AuthenticationService } from "./authentication.service";

export class AuthenticationServiceFactory {
  static create() {
    return new AuthenticationService();
  }
}
