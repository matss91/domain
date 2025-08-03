import { createInvalidError } from "../errors/error";
import { UserRole } from "../entities/User";
import { User } from "../entities/User";
import { UsersRepository } from "../usersRepositories/user-Repository";

export type UserRegisterModel = Omit<User, "id" | "role"|"libros">;

export interface UserRegisterDependencies {
  users: UsersRepository;
}

export async function UserRegister(
  { email, password, username }: UserRegisterModel,
  { users }: UserRegisterDependencies
) {
  if (!email) {
    return createInvalidError("Email must not be empty");
  }

  if (!password) {
    return createInvalidError("password must be not empty");
  }

  if (!username) {
    return createInvalidError("username must be not empty");
  }

  const existingUser = await users.findByEmail(email);
  if (existingUser) {
    return createInvalidError("Email alrready in use");
  }

  const user: User = {
    id: crypto.randomUUID(),
    email,
    password,
    username,
    
    role: "user" as UserRole,
    libros:""
  };

  await users.save(user); // Await to ensure saving is complete
}