import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { IUsecase } from "../../usecase.interface";
import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { Signup, User } from "@/src/entities/models/user";
import { hash } from "@node-rs/argon2";
import { Session } from "@/src/entities/models/session";
import { Cookie } from "@/src/entities/models/cookie";

export type SignupOutput = {
  session: Session;
  cookie: Cookie;
  user: Pick<User, "id" | "email" | "name">;
};

export class SignUpUsecase implements IUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authenticationService: IAuthenticationService
  ) {}

  async execute({ password, name, email }: Signup): Promise<SignupOutput> {
    const registeredUser = await this.userRepository.findByEmail(email);

    if (!!registeredUser) {
      throw new Error("Email already registered");
    }

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const user = await this.userRepository.create({
      name,
      email,
      password_hash: passwordHash,
    });

    const { session, cookie } = await this.authenticationService.createSession(
      user
    );

    return {
      session,
      cookie,
      user: {
        id: user.id!,
        email: user.email,
        name: user.name,
      },
    };
  }
}
