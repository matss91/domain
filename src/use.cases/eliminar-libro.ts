import { User } from "../entities/User";
import{Libro}from"../entities/Libro"
import {LibrosRepository } from "../usersRepositories/libro-Repository";
import { createInvalidError } from "../errors/error";
export type LibroRegisterModel = Omit<Libro,"id">;

export interface UserRegisterDependencies {
  libros: LibrosRepository;
}

export async function EliminarLibro(
  { titulo, autor, usuarioId }: LibroRegisterModel,
  { libros }: UserRegisterDependencies
) {
  
const result=await libros.deletedBook(titulo)

if (result) {
  return createInvalidError("el libro a eliminar no existe")
} 
const variable=await libros.elLibroEstaPrestado(usuarioId)
if(!variable){
return createInvalidError("el libro esta prestado")
}
return "libro eliminado con exito"





 
  


}