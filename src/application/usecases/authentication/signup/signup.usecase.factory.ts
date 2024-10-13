import { UserRepository } from "@/src/infrastructure/repositories/user/user.repository";
import { SignUpUsecase } from "./signup.usecase";
import { AuthenticationServiceFactory } from "@/src/infrastructure/services/authentication/authentication.service.factory";

export default class SignUpUseCaseFactory {
  static create() {
    return new SignUpUsecase(
      new UserRepository(),
      AuthenticationServiceFactory.create()
    );
  }
}
