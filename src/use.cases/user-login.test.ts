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
    password: "123456",
    username: "Test 2",
    role: "admin",
    libros:""
  };

  _mockedUserRepository.save(existingUser);



  test('with empty email, fails with invalid data', async () => {
    const payload: UserLoginModel = {
      
      password: "12345678",
      username: "",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("Email must not be empty"));
  });

  test('with empty password, fails with invalid data', async () => {
    const payload: UserLoginModel = {
    
      password: "",
      username: "Test usuario",
    };

    const result = await UserLogin(payload, _dependencies);
    expect(result).toEqual(createInvalidError("password must be not empty"));
  });

  test('username incorrect', async () => {
    const payload: UserLoginModel = {
    
      password: "123456",
      username: "Test",
    };

    const result = await UserLogin(payload, _dependencies);

   expect(result).toEqual(createInvalidError("credenciales invalidas"));
   
  });

    test('username incorrect', async () => {
    const payload: UserLoginModel = {
    
      password: "12345",
      username: "Test 2",
    };

    const result = await UserLogin(payload, _dependencies);

   expect(result).toEqual(createInvalidError("credenciales invalidas"));
   
  });

   test('username and password correct', async () => {
    const payload: UserLoginModel = {
    
      password: "123456",
      username: "Test 2",
    };

    const result = await UserLogin(payload, _dependencies);

   expect(result).toEqual("usuario logueado correctamente");
   
  });

  
});