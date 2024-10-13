import { UserRepository } from "@/src/infrastructure/repositories/user/user.repository";
import { SignUpUsecase } from "./signup.usecase";
import { AuthenticationService } from "@/src/infrastructure/services/authentication/authentication.service";

export default class SignUpUseCaseFactory {
  static create() {
    return new SignUpUsecase(new UserRepository(), new AuthenticationService());
  }
}
