import { describe, it, expect } from "vitest";
import { AuthenticationServiceFactory } from "./authentication.service.factory";
import { AuthenticationService } from "./authentication.service";

describe("AuthenticationServiceFactory", () => {
  it("should create an instance of AuthenticationService", () => {
    const service = AuthenticationServiceFactory.create();
    expect(service).toBeInstanceOf(AuthenticationService);
  });
});
