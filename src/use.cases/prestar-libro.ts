import { User } from "../entities/User";
import { Libro } from "../entities/Libro";
import {UserLibrosRepository } from "../usersRepositories/user-libro-repository";
export interface prestarLibroDependences extends UserLibrosRepository {
libro:UserLibrosRepository,
users:UserLibrosRepository

}

export type UserLoginModel = Omit<Libro, "id" | "autor">;
  export async function PrestarLibro(
  {users,libro}:prestarLibroDependences,
  {titulo,usuarioId}:UserLoginModel
  
  ) {
    const estaPrestado=libro.LibroPrestado(titulo,usuarioId)
    return estaPrestado
  
  
  }