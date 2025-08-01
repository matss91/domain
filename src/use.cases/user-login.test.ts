import { describe, it, expect, test } from "vitest";
import { UserLogin,UserLoginDependencies} from "./user-login";
import { User } from "../entities/User";
import { createInvalidError } from "../errors/error";
import { UserLoginModel } from "../use.cases/user-login";
import { mockUsersRepository, MockedUserRepository } from "../mocks/user-repository-mock";

describe('user-register Use case', () => {
  const _mockedUserRepository: MockedUserRepository = mockUsersRepository([]);

  const _dependencies: UserLoginDependencies = {
    users: _mockedUserRepository
  };

  const existingUser: User = {
    id: "2",
    email: "emailregistrado@test.com",
    password: "12345678",
    username: "Test usuario",
    role: "admin"
  };

  _mockedUserRepository.save(existingUser);

  test('with an existing email, throws BadRequestError', async () => {
    const payload: UserLoginModel = {
      email: "emailregistrado@test.com",
      password: "12345678",
      username: "Test usuario",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("Email alrready in use"));
  });

  test('with empty email, fails with invalid data', async () => {
    const payload: UserLoginModel = {
      email: "",
      password: "12345678",
      username: "Test usuario",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("Email must not be empty"));
  });

  test('with empty password, fails with invalid data', async () => {
    const payload: UserLoginModel = {
      email: "prueba@test.com",
      password: "",
      username: "Test usuario",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("password must be not empty"));
  });

  test('with empty username, fails with invalid data', async () => {
    const payload: UserLoginModel = {
      email: "prueba@test.com",
      password: "12345678",
      username: "",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("username must be not empty"));
  });

  test('registers new user successfully', async () => {
    const payload: UserLoginModel = {
      email: "prueba@test.com",
      password: "12345678",
      username: "nuevo usuario",
    };

    const result = await UserLogin(payload, _dependencies);
    const user = await _mockedUserRepository.findByEmail(payload.email);

    expect(user).not.toBeNull();
    expect(result).not.toEqual(createInvalidError("Email alrready in use")); // Should NOT error
  });
});