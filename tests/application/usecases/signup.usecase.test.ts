import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { IAuthenticationService } from "@/src/application/services/authentication.service.interface";
import { SignUpUsecase } from "@/src/application/usecases/authentication/signup/signup.usecase";
import { MockUserRepository } from "@/src/infrastructure/repositories/user/user.repository.mock";
import { MockAuthenticationService } from "@/src/infrastructure/services/authentication/authentication.service.mock";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("SignupUsecase", () => {
  let mockUserRepository: IUserRepository;
  let mockAuthService: IAuthenticationService;

  beforeEach(() => {
    mockUserRepository = new MockUserRepository();
    mockAuthService = new MockAuthenticationService();
  });

  it("should register a new user", async () => {
    const spyUserRepository = vi.spyOn(mockUserRepository, "create");
    const spyAuthService = vi.spyOn(mockAuthService, "createSession");

    const usecase = new SignUpUsecase(mockUserRepository, mockAuthService);

    const userData = {
      name: "any name",
      email: "any@email.com",
      password: "any-password",
    };

    const result = await usecase.execute(userData);

    expect(spyUserRepository).toHaveBeenCalled();
    expect(spyAuthService).toHaveBeenCalled();

    expect(result.user).toEqual({
      id: expect.any(String),
      email: userData.email,
      name: userData.name,
    });
    expect(result.session).toBeDefined();
    expect(result.cookie).toBeDefined();
  });

  it("should throw an error if the email is already registered", async () => {
    const usecase = new SignUpUsecase(mockUserRepository, mockAuthService);

    const userData = {
      name: "any name",
      email: "any@email.com",
      password: "any-password",
    };

    await usecase.execute(userData);

    await expect(usecase.execute(userData)).rejects.toThrow(
      "Email already registered"
    );
  });
});
