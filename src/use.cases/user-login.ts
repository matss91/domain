import { createInvalidError } from "../errors/error";
import { UserRole } from "../entities/User";
import { User } from "../entities/User";
import { UsersRepository } from "../usersRepositories/user-Repository";
 
export type UserLoginModel = Omit<User, "id" | "role"|"email">;

export interface UserLoginDependencies {
  users: UsersRepository;
}

export async function UserLogin(
  { password, username }: UserLoginModel,
  { users }: UserLoginDependencies
) {
  if (!username) {
    return createInvalidError("Email must not be empty");
  }

  if (!password) {
    return createInvalidError("password must be not empty");
  }

  

  

}