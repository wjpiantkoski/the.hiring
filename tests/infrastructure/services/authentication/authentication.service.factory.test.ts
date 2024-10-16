import { describe, it, expect } from "vitest";
import { AuthenticationServiceFactory } from "../../../../src/infrastructure/services/authentication/authentication.service.factory";
import { AuthenticationService } from "../../../../src/infrastructure/services/authentication/authentication.service";

describe("AuthenticationServiceFactory", () => {
  it("should create an instance of AuthenticationService", () => {
    const service = AuthenticationServiceFactory.create();
    expect(service).toBeInstanceOf(AuthenticationService);
  });
});
