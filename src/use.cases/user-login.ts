import { createInvalidError } from "../errors/error";
import { UserRole } from "../entities/User";
import { User } from "../entities/User";
import { UsersRepository } from "../usersRepositories/user-Repository";

export type UserLoginModel = Omit<User, "id" | "role">;

export interface UserLoginDependencies {
  users: UsersRepository;
}

export async function UserLogin(
  { email, password, username }: UserLoginModel,
  { users }: UserLoginDependencies
) {
  if (!email) {
    return createInvalidError("Email must not be empty");
  }

  if (!password) {
    return createInvalidError("password must be not empty");
  }

  

  

}