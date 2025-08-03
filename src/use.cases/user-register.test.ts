import { describe, it, expect, test } from "vitest";
import { UserRegister,UserRegisterDependencies} from "./user-register";
import { User } from "../entities/User";
import { createInvalidError } from "../errors/error";
import { UserRegisterModel } from "../use.cases/user-register";
import { mockUsersRepository, MockedUserRepository } from "../mocks/user-repository-mock";

describe('user-register Use case', () => {
  const _mockedUserRepository: MockedUserRepository = mockUsersRepository([]);

  const _dependencies: UserRegisterDependencies = {
    users: _mockedUserRepository
  };

  const existingUser: User = {
    id: "2",
    email: "emailregistrado@test.com",
    password: "12345678",
    username: "Test usuario",
    role: "admin",
    libros:""
  };

  _mockedUserRepository.save(existingUser);

  test('with an existing email, throws BadRequestError', async () => {
    const payload: UserRegisterModel = {
      email: "emailregistrado@test.com",
      password: "12345678",
      username: "Test usuario",
    };

    const result = await UserRegister(payload, _dependencies);
    expect(result).toEqual(createInvalidError("Email alrready in use"));
  });

  test('with empty email, fails with invalid data', async () => {
    const payload: UserRegisterModel = {
      email: "",
      password: "12345678",
      username: "Test usuario",
    };

    const result = await UserRegister(payload, _dependencies);
    expect(result).toEqual(createInvalidError("Email must not be empty"));
  });

  test('with empty password, fails with invalid data', async () => {
    const payload: UserRegisterModel = {
      email: "prueba@test.com",
      password: "",
      username: "Test usuario",
    };

    const result = await UserRegister(payload, _dependencies);
    expect(result).toEqual(createInvalidError("password must be not empty"));
  });

  test('with empty username, fails with invalid data', async () => {
    const payload: UserRegisterModel = {
      email: "prueba@test.com",
      password: "12345678",
      username: "",
    };

    const result = await UserRegister(payload, _dependencies);
    expect(result).toEqual(createInvalidError("username must be not empty"));
  });

  test('registers new user successfully', async () => {
    const payload: UserRegisterModel = {
      email: "prueba@test.com",
      password: "12345678",
      username: "nuevo usuario",
    };

    const result = await UserRegister(payload, _dependencies);
    const user = await _mockedUserRepository.findByEmail(payload.email);

    expect(user).not.toBeNull();
    expect(result).not.toEqual(createInvalidError("Email alrready in use")); // Should NOT error
  });
});