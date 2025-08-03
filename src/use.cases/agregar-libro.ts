import { User } from "../entities/User";
import{Libro}from"../entities/Libro"
import {LibrosRepository } from "../usersRepositories/libro-Repository";
import { createInvalidError } from "../errors/error";
export type LibroRegisterModel = Omit<Libro,"id">;

export interface UserRegisterDependencies {
  libros: LibrosRepository;
}

export async function AgregarLibro(
  { titulo, autor, usuarioId }: LibroRegisterModel,
  { libros }: UserRegisterDependencies
) {
  if (!titulo) {
    return createInvalidError("Title must not be empty");
  }

  if (!autor) {
    return createInvalidError("autor must be not empty");
  }
  const existingUser = await libros.findByTitle(titulo);
  if (existingUser) {
    return createInvalidError("boock alrready in use");
  }

  


}